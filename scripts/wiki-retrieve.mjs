#!/usr/bin/env node
// Deterministic retrieval entry point for the `traceable-wiki-answer` skill.
//
// Fuses two streams and prints a candidate ledger (JSON shape documented in
// .claude/skills/traceable-wiki-answer/references/trace-schema.md §1):
//   1. qmd hybrid search (relevance) — scoped to the `cmr-wiki` collection.
//   2. wiki/.graph.json typed-edge traversal (structure) — BFS from the qmd
//      seeds out to --hops.
// The two streams are combined via Reciprocal Rank Fusion (RRF), then each
// candidate's RRF score is folded with its decay-aware effective_confidence
// into a single `fused_score`. Candidates are returned sorted by fused_score.
//
// As its final step it bumps `accessed_at` (via bump-accessed.mjs) on the
// qmd-returned concept/entity/synthesis pages — the §Retention reinforcement
// signal. Graph-only pages are NOT bumped here (the skill bumps any it promotes
// to USE in Step 8).
//
// Usage:
//   node scripts/wiki-retrieve.mjs --json -n 12 "your question"
//   node scripts/wiki-retrieve.mjs --json -n 12 --hops 2 "your question"
//   node scripts/wiki-retrieve.mjs --no-bump --json "quick, no reinforcement"
//
// Exit codes: 0 = success; 1 = qmd failure; 2 = bad args.

import { spawnSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';
import matter from 'gray-matter';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const COLLECTION = 'cmr-wiki';

// ----- tuning constants -----
const K_RRF = 60;        // RRF damping
const GRAPH_W = 0.5;     // weight of the graph stream's RRF contribution
const CONF_FLOOR = 0.6;  // floor in the relevance×currency blend
const TAU = { concept: 90, synthesis: 90, thread: 90, entity: 365, artifact: 365 }; // source: no decay

// ----- args -----
const args = process.argv.slice(2);
let seeds = 12, hops = 1, rawJson = false, bump = true;
const rest = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '-n') { seeds = parseInt(args[++i], 10); if (!Number.isInteger(seeds) || seeds < 1) { console.error('error: -n needs a positive integer'); process.exit(2); } }
  else if (a === '--hops') { hops = parseInt(args[++i], 10); if (!Number.isInteger(hops) || hops < 1) { console.error('error: --hops needs a positive integer'); process.exit(2); } }
  else if (a === '--json') rawJson = true;
  else if (a === '--no-bump') bump = false;
  else if (a === '--help' || a === '-h') { console.log('Usage: wiki-retrieve.mjs [--json] [-n <seeds>] [--hops <n>] [--no-bump] "question"'); process.exit(0); }
  else rest.push(a);
}
const query = rest.join(' ').trim();
if (!query) { console.error('error: missing query string'); process.exit(2); }

const TODAY = new Date().toISOString().slice(0, 10);
// gray-matter parses unquoted YAML dates into JS Date objects — normalise both
// Date and string forms to an ISO YYYY-MM-DD string.
const isoDate = (v) => {
  if (!v) return null;
  if (v instanceof Date) return Number.isNaN(v.getTime()) ? null : v.toISOString().slice(0, 10);
  return String(v).slice(0, 10);
};
const daysBetween = (iso) => {
  if (!iso) return null;
  const d = Math.round((Date.parse(TODAY) - Date.parse(String(iso).slice(0, 10))) / 86400000);
  return Number.isFinite(d) ? d : null;
};

// ----- normalise a qmd / graph path to a slug like "concepts/foo" -----
const toSlug = (p) => String(p || '')
  .replace(/^qmd:\/\/[^/]+\//, '')   // qmd://cmr-wiki/…
  .replace(/^wiki\//, '')
  .replace(/\.md$/, '');

// ----- read a page's frontmatter from disk -----
const fmCache = new Map();
function readFrontmatter(slug) {
  if (fmCache.has(slug)) return fmCache.get(slug);
  const path = join(REPO_ROOT, 'wiki', slug + '.md');
  let fm = { exists: false };
  if (existsSync(path)) {
    try {
      const { data } = matter(readFileSync(path, 'utf8'));
      fm = {
        exists: true,
        type: data.type ?? inferType(slug),
        title: data.title ?? slug.split('/').pop(),
        confidence: typeof data.confidence === 'number' ? data.confidence : null,
        accessed_at: isoDate(data.accessed_at),
        last_confirmed: isoDate(data.last_confirmed),
        status: data.status ?? null,
        superseded_by: data.superseded_by ?? null,
      };
    } catch { /* fall through to defaults */ }
  }
  fmCache.set(slug, fm);
  return fm;
}
const inferType = (slug) => {
  const top = slug.split('/')[0];
  return { concepts: 'concept', entities: 'entity', sources: 'source', syntheses: 'synthesis', threads: 'thread', artifacts: 'artifact' }[top] ?? 'unknown';
};

// ===== Stream 1: qmd =====
const qmd = spawnSync('npx', ['--yes', '@tobilu/qmd', 'query', query, '--json', '-n', String(seeds), '-c', COLLECTION], { cwd: REPO_ROOT, encoding: 'utf8' });
if (qmd.status !== 0) { console.error('qmd failed:'); console.error(qmd.stderr || qmd.stdout); process.exit(1); }
let qres;
try { qres = JSON.parse(qmd.stdout); } catch (e) { console.error('failed to parse qmd JSON:', e.message); console.error(qmd.stdout); process.exit(1); }
const qhits = (Array.isArray(qres) ? qres : qres.results || []).map((h, i) => {
  const slug = toSlug(h.file || h.path || h.uri || '');
  const score = typeof h.score === 'number' ? h.score : (typeof h.rerankScore === 'number' ? h.rerankScore : null);
  return { slug, rank: i + 1, score };
}).filter((h) => h.slug);

// ===== Stream 2: graph =====
let graphAvailable = true, graphWarning = null;
const adj = new Map(); // slug -> [{to, type, via, dir}]
const graphPath = join(REPO_ROOT, 'wiki/.graph.json');
if (existsSync(graphPath)) {
  try {
    const g = JSON.parse(readFileSync(graphPath, 'utf8'));
    for (const e of g.edges || []) {
      if (!adj.has(e.source)) adj.set(e.source, []);
      if (!adj.has(e.target)) adj.set(e.target, []);
      adj.get(e.source).push({ to: e.target, type: e.type, via: e.via ?? null, dir: 'out' });
      adj.get(e.target).push({ to: e.source, type: e.type, via: e.via ?? null, dir: 'in' });
    }
  } catch (err) { graphAvailable = false; graphWarning = 'graph parse failed: ' + err.message; }
} else { graphAvailable = false; graphWarning = 'wiki/.graph.json not found — degraded to qmd-only'; }

// BFS from qmd seeds, recording the first edge that reached each neighbour
const graphRank = [];          // ordered list of neighbour slugs (graph stream rank)
const graphMeta = new Map();   // slug -> [{from_seed, edge_type, via, hops}]
if (graphAvailable) {
  const seen = new Set(qhits.map((h) => h.slug));
  let frontier = qhits.map((h) => ({ slug: h.slug, seed: h.slug, depth: 0 }));
  for (let d = 0; d < hops; d++) {
    const next = [];
    for (const node of frontier) {
      for (const edge of adj.get(node.slug) || []) {
        const meta = { from_seed: node.seed, edge_type: edge.type, via: edge.via, hops: node.depth + 1 };
        if (!graphMeta.has(edge.to)) graphMeta.set(edge.to, []);
        graphMeta.get(edge.to).push(meta);
        if (!seen.has(edge.to)) {
          seen.add(edge.to);
          graphRank.push(edge.to);
          next.push({ slug: edge.to, seed: node.seed, depth: node.depth + 1 });
        }
      }
    }
    frontier = next;
  }
}

// ===== Fuse =====
const qmdRankOf = new Map(qhits.map((h) => [h.slug, h.rank]));
const graphRankOf = new Map(graphRank.map((s, i) => [s, i + 1]));
const allSlugs = new Set([...qhits.map((h) => h.slug), ...graphRank]);

const candidates = [];
for (const slug of allSlugs) {
  const fm = readFrontmatter(slug);
  const qmdRank = qmdRankOf.get(slug) ?? null;
  const qmdScore = qmdRank ? (qhits.find((h) => h.slug === slug)?.score ?? null) : null;
  const grank = graphRankOf.get(slug) ?? null;

  // RRF across the two streams
  let rrf = 0;
  if (qmdRank) rrf += 1 / (K_RRF + qmdRank);
  if (grank) rrf += GRAPH_W / (K_RRF + grank);

  // decay-aware effective confidence
  const dsa = daysBetween(fm.accessed_at);
  const tau = TAU[fm.type] ?? null;
  let eff = null;
  if (fm.confidence != null) {
    eff = (dsa != null && tau) ? +(fm.confidence * Math.exp(-dsa / tau)).toFixed(4) : fm.confidence;
  }

  const gmeta = (graphMeta.get(slug) || []).slice(0, 4);
  const reasons = [];
  if (qmdRank) reasons.push(`qmd rank ${qmdRank}${qmdScore != null ? ` (score ${qmdScore.toFixed(2)})` : ''}`);
  for (const m of gmeta) reasons.push(`graph: ${m.from_seed} --${m.edge_type}(${m.dir ?? ''})--> this (${m.hops} hop${m.hops === 1 ? '' : 's'})`.replace('()',''));

  candidates.push({
    slug, path: `wiki/${slug}.md`, type: fm.type, title: fm.title,
    qmd_rank: qmdRank, qmd_score: qmdScore,
    graph: gmeta.map((m) => ({ from_seed: m.from_seed, edge_type: m.edge_type, via: m.via, hops: m.hops })),
    stored_confidence: fm.confidence, accessed_at: fm.accessed_at, last_confirmed: fm.last_confirmed,
    days_since_access: dsa, effective_confidence: eff,
    rrf_score: +rrf.toFixed(6),
    retrieval_reasons: reasons,
    ...(fm.status ? { status: fm.status } : {}),
    ...(fm.superseded_by ? { superseded_by: fm.superseded_by } : {}),
    _exists: fm.exists,
  });
}

// fused_score = relNorm × (conf_floor + (1-conf_floor)·confTerm)
const maxRrf = Math.max(...candidates.map((c) => c.rrf_score), 1e-9);
for (const c of candidates) {
  const relNorm = c.rrf_score / maxRrf;
  const confTerm = c.effective_confidence != null ? c.effective_confidence : 1; // sources/no-conf treated as neutral
  c.fused_score = +(relNorm * (CONF_FLOOR + (1 - CONF_FLOOR) * confTerm)).toFixed(4);
  delete c._exists;
}
candidates.sort((a, b) => b.fused_score - a.fused_score);

const ledger = {
  query, generated_at: new Date().toISOString(),
  params: { seeds, hops, k_rrf: K_RRF, graph_w: GRAPH_W, conf_floor: CONF_FLOOR, today: TODAY },
  graph_available: graphAvailable, graph_warning: graphWarning,
  qmd_hit_count: qhits.length, candidate_count: candidates.length,
  candidates,
};

// ----- reinforcement: bump qmd-returned concept/entity/synthesis pages -----
if (bump) {
  const bumpSlugs = qhits
    .map((h) => h.slug)
    .filter((s) => /^(concepts|entities|syntheses)\//.test(s))
    .map((s) => s.split('/').pop());
  if (bumpSlugs.length) {
    spawnSync('node', [join(REPO_ROOT, 'scripts/bump-accessed.mjs'), ...bumpSlugs], { cwd: REPO_ROOT, encoding: 'utf8' });
  }
}

if (rawJson) { console.log(JSON.stringify(ledger, null, 2)); process.exit(0); }
// human-readable fallback
console.log(`Query: "${query}"  (${candidates.length} candidates; ${qhits.length} qmd hits; graph ${graphAvailable ? 'on' : 'OFF'})`);
for (const c of candidates.slice(0, seeds)) {
  console.log(`  [${c.fused_score}] ${c.path}  (${c.type}; qmd ${c.qmd_rank ?? '–'}; effConf ${c.effective_confidence ?? '–'})`);
}
