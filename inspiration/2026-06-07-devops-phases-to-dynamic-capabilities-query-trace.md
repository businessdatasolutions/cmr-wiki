---
type: query-trace
question: "The devops framework has an infinite loop of 8 phases: Discover → Plan → Build → Test → Deploy → Operate → Observe → Continuous feedback . Warner and Wäger proposed a process model for building dynamic capabilities for digital transformation . Can you map the phases to the associated dynamic capabilities?"
date: 2026-06-07
language: en
trace: "2026-06-07-devops-phases-to-dynamic-capabilities-query-trace.json"
pages_used: 4
pages_ignored: 17
---

# Query trace — DevOps phases → Warner & Wäger dynamic capabilities

## 1. Question
- **Original:** The devops framework has an infinite loop of 8 phases: Discover → Plan → Build → Test → Deploy → Operate → Observe → Continuous feedback . Warner and Wäger proposed a process model for building dynamic capabilities for digital transformation . Can you map the phases to the associated dynamic capabilities?
- **Restated:** Cross-walk each of the 8 DevOps lifecycle phases to the matching capability/cell in Warner & Wäger's dynamic-capabilities-for-digital-transformation process model.
- **Facets:** 1) What are the 8 DevOps phases and what does each do? 2) What is the W&W process-model vocabulary (sensing/seizing/transforming + renewal + contextual cells)? 3) Which W&W capability best matches each DevOps phase (the mapping)?
- **Language:** en

## 2. Paths explored
Retrieval via `scripts/wiki-retrieve.mjs --json -n 12` (qmd ∪ graph, RRF-fused, decay-ranked). Params: {"seeds":12,"hops":1,"k_rrf":60,"graph_w":0.5,"conf_floor":0.6,"today":"2026-06-07"}. Graph available: true.

**qmd hits** (relevance stream)

| # | Page | type | qmd score | fused | verdict |
|---|------|------|-----------|-------|---------|
| 1 | `wiki/sources/2026-06-07-nist-devsecops-reference-model.md` | source | 0.90 | 0.92 | IGNORE |
| 2 | `wiki/sources/2026-06-07-what-is-devops-atlassian.md` | source | 0.56 | 0.8855 | USE |
| 3 | `wiki/sources/2026-06-07-team-topologies-atlassian.md` | source | 0.46 | 0.8715 | IGNORE |
| 4 | `wiki/sources/2026-06-07-calms-framework-atlassian.md` | source | 0.45 | 0.8578 | IGNORE |
| 5 | `wiki/log.md` | unknown | 0.44 | 0.9385 | IGNORE |
| 6 | `wiki/concepts/warner-wager-process-model.md` | concept | 0.43 | 0.8873 | USE |
| 7 | `wiki/sources/2024-02-02-bcg-yves-morieux-complexity-complicatedness.md` | source | 0.42 | 0.8194 | IGNORE |
| 8 | `wiki/concepts/devops.md` | concept | 0.41 | 0.8253 | USE |
| 9 | `wiki/concepts/devsecops.md` | concept | 0.41 | 0.8134 | IGNORE |
| 10 | `wiki/concepts/smart-simplicity.md` | concept | 0.41 | 0.7843 | IGNORE |
| 11 | `wiki/sources/2019-12-19-warner-wager-2019-dynamic-capabilities-digital-transformation.md` | source | 0.39 | 0.8248 | IGNORE |
| 12 | `wiki/sources/2026-06-07-devops-culture-atlassian.md` | source | 0.38 | 0.7625 | IGNORE |

**graph neighbours** (`--hops 1`, typed-edge stream — `qmd_rank: null`)

| Page | reached via | hops | fused | verdict |
|------|-------------|------|-------|---------|
| `wiki/artifacts/nist-devsecops-reference-model.md` | sources/2026-06-07-nist-devsecops-reference-model --part-of--> this | 1 | 0.5 | IGNORE |
| `wiki/entities/Atlassian.md` | sources/2026-06-07-what-is-devops-atlassian --authored-by--> this | 1 | 0.4454 | IGNORE |
| `wiki/sources/2023-03-10-redhat-what-is-devsecops.md` | sources/2026-06-07-nist-devsecops-reference-model --supports--> this | 1 | 0.4428 | IGNORE |
| `wiki/concepts/dynamic-capabilities.md` | concepts/warner-wager-process-model --instance-of--> this | 1 | 0.4411 | USE |
| `wiki/entities/Ian-Buchanan.md` | sources/2026-06-07-team-topologies-atlassian --authored-by--> this | 1 | 0.4385 | IGNORE |
| `wiki/concepts/organizational-culture.md` | sources/2024-02-02-bcg-yves-morieux-complexity-complicatedness --supports--> this | 1 | 0.4344 | IGNORE |
| `wiki/concepts/calms-framework.md` | concepts/devops --part-of--> this | 1 | 0.4097 | IGNORE |
| `wiki/concepts/dora-metrics.md` | concepts/devops --uses--> this | 1 | 0.4091 | IGNORE |
| `wiki/concepts/team-topologies.md` | concepts/devops --part-of--> this | 1 | 0.3978 | IGNORE |

**index.md / gap-expansion** (Step 5): none — the focused USE set answered all three facets without expansion.

## 3. Ignore policy applied
Reason-classes that fired this run:
- `off-facet` — semantically adjacent (qmd/graph pulled it in) but addresses none of the three facets.
- `redundant` — covers the same claim as an already-selected, higher-ranked page; keep the stronger one.
- `wrong-granularity` — an entity catalogue card where the facet needs a phase/capability claim.

## 4. Information ignored

| Page | reason-class | one-line reason |
|------|--------------|-----------------|
| `wiki/log.md` | off-facet | wiki changelog, not content |
| `wiki/sources/2026-06-07-nist-devsecops-reference-model.md` | off-facet | NIST DevSecOps 7-phase security model, not the 8-phase DevOps loop the question names |
| `wiki/sources/2026-06-07-team-topologies-atlassian.md` | off-facet | team-design framework, not lifecycle phases |
| `wiki/sources/2026-06-07-calms-framework-atlassian.md` | off-facet | adoption-assessment lenses, not phases |
| `wiki/sources/2019-12-19-warner-wager-2019-dynamic-capabilities-digital-transformation.md` | redundant | warner-wager-process-model concept reproduces this paper's process model + vocabulary |
| `wiki/sources/2024-02-02-bcg-yves-morieux-complexity-complicatedness.md` | off-facet | organisational complexity talk, unrelated to the phase↔capability mapping |
| `wiki/concepts/devsecops.md` | off-facet | security extension of DevOps; question is the DevOps loop |
| `wiki/concepts/smart-simplicity.md` | off-facet | complexity-vs-complicatedness, not phases/capabilities |
| `wiki/sources/2026-06-07-devops-culture-atlassian.md` | off-facet | DevOps culture, not the lifecycle phases |
| `wiki/artifacts/nist-devsecops-reference-model.md` | off-facet | NIST 7-phase reference model, not the 8-phase DevOps loop |
| `wiki/entities/Atlassian.md` | wrong-granularity | publisher entity card; facet needs phase/capability claims |
| `wiki/sources/2023-03-10-redhat-what-is-devsecops.md` | off-facet | DevSecOps definition, not the DevOps loop |
| `wiki/entities/Ian-Buchanan.md` | wrong-granularity | author entity card; not a phase/capability claim |
| `wiki/concepts/organizational-culture.md` | off-facet | culture cluster, not the phase mapping |
| `wiki/concepts/calms-framework.md` | off-facet | graph-only; assessment lenses, not phases |
| `wiki/concepts/dora-metrics.md` | off-facet | graph-only; delivery metrics, not phase↔capability |
| `wiki/concepts/team-topologies.md` | off-facet | graph-only; team design, not phases |

## 5. Information used

| Page | type | effConf | contribution |
|------|------|---------|--------------|
| `wiki/concepts/warner-wager-process-model.md` | concept | 0.9 | the closed 15-cell W&W vocabulary + bucket definitions (sensing/seizing/transforming/renewal/contextual) |
| `wiki/sources/2026-06-07-what-is-devops-atlassian.md` | source | 0.75 | per-phase descriptions (Discover…Continuous feedback) + the source's own dynamic_capabilities tags |
| `wiki/concepts/devops.md` | concept | 0.8 | top-relevance; supplies the 8-phase infinity loop + phase meanings and the explicit DevOps→dynamic-capabilities microfoundation mapping |
| `wiki/concepts/dynamic-capabilities.md` | concept | 0.85 | the sensing→seizing→transforming triad definitions the mapping rests on |

## 6. Answer-element map

| Anchor | Answer element (claim) | Wiki page(s) | Section / span used |
|--------|------------------------|--------------|---------------------|
| [W1] | the 8-phase infinity loop + phases are an instance of dynamic-capabilities microfoundations (rapid-prototyping / redesigning-structures / improving-maturity) | [[concepts/devops]] | ## The DevOps lifecycle (infinity loop) + ## Relation to the rest of the wiki |
| [W2] | what each DevOps phase does (Discover…Continuous feedback) + the source's dynamic_capabilities tags | [[sources/2026-06-07-what-is-devops-atlassian]] | ## Results (WHAT) + ## Dynamic-capabilities reading |
| [W3] | the W&W closed 15-cell vocabulary and bucket meanings; model replaces rigid 3–5yr plans with continuous sensing/seizing | [[concepts/warner-wager-process-model]] | ## The closed vocabulary + ## What each bucket does |
| [W4] | sensing = scan/identify opportunities & threats; seizing = act on them; transforming = make change durable at scale | [[concepts/dynamic-capabilities]] | # Dynamic capabilities (intro, sensing/seizing/transforming) |

## 7. Final answer

## Mapping the DevOps 8-phase loop to Warner & Wäger's dynamic-capabilities process model

**Two framing points first.** The DevOps "infinity loop" is a *software-delivery* cycle, whereas Warner & Wäger (W&W) is a *firm-level* process model for building dynamic capabilities for digital transformation — the **sensing → seizing → transforming** triad plus contextual factors and strategic-renewal outcomes [W3][W4]. So this is a **cross-walk by analogy, not a 1:1 identity**. And the wiki itself tags DevOps only at the *cluster* grain — `digital-seizing/rapid-prototyping`, `digital-transforming/redesigning-internal-structures`, `digital-transforming/improving-digital-maturity` [W1][W2] — **not** phase-by-phase; the per-phase rows below are a reasoned extension of those tags, anchored to each phase's meaning [W1][W2] and each W&W cell's definition [W3].

The triad in one line each: **sensing** = scan/interpret the environment to spot opportunities and threats; **seizing** = act on what was sensed fast enough to capture it; **transforming** = make the change durable at organisational scale [W4].

| DevOps phase | What it does [W1][W2] | W&W capability — cell [W3] |
|---|---|---|
| **Discover** | workshop & prioritise ideas against strategy and customer impact | **Digital sensing** — `digital-sensing/digital-scouting` (+ scenario-planning) |
| **Plan** | agile breakdown into prioritised increments | **Digital sensing → seizing** hinge — `digital-sensing/digital-scenario-planning` |
| **Build** | write code under version control | **Digital seizing** — `digital-seizing/rapid-prototyping` |
| **Test** | CI + automated tests | **Digital seizing** — `digital-seizing/rapid-prototyping` (fast validation) |
| **Deploy** | CD / feature-flag release | **Digital seizing** — `digital-seizing/strategic-agility` (capture the opportunity before the window closes) |
| **Operate** | run & maintain services/infra | **Digital transforming** — `digital-transforming/improving-digital-maturity` (+ `redesigning-internal-structures`) |
| **Observe** | monitor, detect issues | **Digital sensing** (operational) — signals fed back into the loop |
| **Continuous feedback** | evaluate releases, fold in customer feedback | the **iterative re-trigger** — `digital-seizing/strategic-agility` + `contextual/internal-enablers` (fast decision-making) |

**At the macro level:** the **left lobe** (Discover → Plan → Build → Test) is predominantly **sensing + seizing**; the **right lobe** (Deploy → Operate → Observe) is **seizing + transforming**; and **Continuous feedback** is the iterative re-sensing W&W stresses — the model explicitly *replaces rigid 3–5-year plans with continuous sensing/seizing* [W3], which is exactly what the DevOps loop operationalises at delivery cadence [W1]. The wiki already states the cluster-level version of this: DevOps is "a concrete instance of dynamic-capabilities microfoundations — rapid-prototyping (CI/CD), redesigning-internal-structures (team topologies), improving-digital-maturity" [W1].

**Caveat / gap.** No wiki source performs this phase-to-capability mapping directly; it is synthesised from the DevOps lifecycle pages [W1][W2] and the W&W vocabulary pages [W3][W4] — treat it as an interpretive bridge. Both anchors are lightly sourced: the DevOps lifecycle is Atlassian vendor material [W1][W2] and the W&W model rests on a single paper [W3].

## 8. Trace artifact
Machine-readable provenance: [`2026-06-07-devops-phases-to-dynamic-capabilities-query-trace.json`](2026-06-07-devops-phases-to-dynamic-capabilities-query-trace.json)
