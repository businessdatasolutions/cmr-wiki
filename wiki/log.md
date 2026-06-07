# Log

Reverse-chronological record of wiki operations — **newest entry at the top, oldest at the bottom**. New entries are *prepended* immediately under the `---` separator below. Strict prefix format so `grep "^## \[" wiki/log.md | head -10` returns the ten most recent. Format (indented to keep grep clean):

    ## [YYYY-MM-DD] <op> | <title>

Permitted operations: `ingest`, `acquire`, `query`, `lint`, `synthesize`, `refactor`, `bulk-refactor` (for any operation touching >10 wiki pages, with affected slug list and reversibility note). `acquire` is used for sessions that land raw files but defer processing to a later session; the umbrella `ingest` op covers the typical Acquire+Process-in-the-same-session case. See [the design doc, §9.2](../docs/superpowers/specs/2026-04-28-llm-wiki-design.md#92-wikilogmd) for details.

---

## [2026-06-07] ingest | Organizational-culture cluster: O'Reilly-Cao-Sull 2024 paper + 4 MIT SMR Culture 500 videos + 2 Sull articles

**Trigger.** User: "ingest [4 YouTube URLs] and all the newly added raw material." The four videos + two new article PDFs (`raw/articles/`) + one new paper PDF (`raw/papers/1-s2.0-S0148296324002844-main.pdf`) turned out to be a single coherent **organizational-culture cluster**, all from the MIT SMR / CultureX **Culture 500** research programme and connected by **Donald Sull**.

**Acquire — video transcripts via yt-dlp fallback.** The [`youtube-transcript-skill`](../.claude/skills/youtube-transcript-skill) Playwright path hit the documented *"transcript panel did not render"* failure on all 4 videos (even at 60s timeout). Per the skill's failure-mode notes, used **yt-dlp** (`~/.pyenv/.../bin/yt-dlp`, json3 captions) as the fallback — all 4 had **manual (human-curated)** English caption tracks, so fidelity is high. Landed at `raw/videos/<slug>.md` with the canonical YAML frontmatter contract (provenance recorded in each `notes:` field).

**Pages created (18 total):**

- 7 source pages:
  - [[2024-06-20-oreilly-2024-culture-archetypes-firm-performance]] — `kind: paper`, Pass 2, confidence 0.85 (JBR 182:114780; DOI 10.1016/j.jbusres.2024.114780)
  - [[2023-05-31-building-a-winning-workplace-culture]] — `kind: video`, 59-min Sull webinar, confidence 0.8
  - [[2021-09-16-ten-things-corporate-culture]] — `kind: article`, Sull & Sull MIT SMR, confidence 0.85
  - [[2020-09-01-culture-500-the-research]] — `kind: article`, Culture 500 methodology + Big 9, confidence 0.8 (date approximate — data window Jan2015–Sep2020)
  - [[2019-06-26-introducing-mit-smr-glassdoor-culture-500]], [[2019-06-26-measuring-company-culture-with-ai]], [[2019-06-26-the-9-key-values-for-company-culture]] — `kind: video`, explainer trio, confidence 0.7
- 4 concept pages: [[organizational-culture]] (7 sources), [[big-9-cultural-values]] (6), [[measuring-culture-with-nlp]] (6), [[cultural-archetypes]] (1, peer-reviewed)
- 3 artifact pages: [[oreilly-2024-archetype-factor-loadings]] (Table 2), [[oreilly-2024-archetype-performance-regressions]] (Table 4), [[sull-2021-ten-culture-elements]] (the 10 SHAP elements)
- 4 entity pages: [[Donald-Sull]] (4 sources), [[Charles-Sull]] (2), [[CultureX]] (org, 5), [[MIT-Sloan-Management-Review]] (org/venue, `author:` on 4 videos)

**Headline findings.** (a) The Big 9 values factor into **3 archetypes** (performance / people / customer); (b) **only performance-orientation robustly predicts objective firm performance** — the **people archetype shows no objective-performance association** despite its links to satisfaction/engagement; (c) by contrast, **Respect is the #1 driver of employees' culture ratings (~18×)**. The load-bearing wiki claim: *employee-experience drivers ≠ firm-performance drivers* — recorded in [[organizational-culture]] §Debates.

**Cross-cutting touches.** Added body cross-references + bumped dates on [[mckinsey-7s-framework]] (Shared Values = culture), [[strategic-risk-management]] (toxic culture as risk), [[dynamic-capabilities]] (Agility value / performance-orientation archetype).

**W&W `dynamic_capabilities:` tagging skipped on all 7.** Organizational-culture-and-performance sits outside the Warner & Wäger digital-transformation lens (same rationale as the Damodaran chapters). Conceptual links to `dynamic-capabilities` / `mckinsey-7s` made in-body instead.

**Neighbour-source scan (step 5).** Within-cluster `supports` edges: paper → culture-500 + ten-things; ten-things → culture-500; webinar → ten-things + culture-500; the 3 explainer videos → culture-500 (their hub). Cross-cluster: paper `supports` → [[strategic-risk-management]].

**Author-promotion rule.** Promoted Donald Sull (paper + 2 articles), Charles Sull (2 articles), MIT SMR (`author:` on 4 videos). CultureX promoted as connective research org (Strategyzer precedent). Dangling (single-source): Charles O'Reilly, Xubo Cao, Ally MacDonald.

**Honest scoping.** Manual captions need minimal cleanup but the 59-min webinar's slide visuals are described from transcript verbal cues only (no frame capture). The Culture 500 "The Research" page is undated (date inferred). The PwC-style claims and CultureX accuracy figures are vendor-reported. Single-pipeline dependency (Sull/CultureX measure underlies every culture finding, and Sull co-authored the paper that tests it) flagged on [[measuring-culture-with-nlp]], [[cultural-archetypes]], [[organizational-culture]].

**Follow-up flagged.** Acquire independent culture-measurement sources (March 1991 is unrelated; here: Schein 2010, Competing Values Framework, Denison DOCS, Hartnell et al.) to break the single-pipeline dependency and lift confidence; promote Charles O'Reilly to an entity on a second O'Reilly source.

## [2026-06-06] ingest | Strategy & innovation articles batch: Porter 2008 Five Forces + McKinsey 7S + three Strategyzer pieces + Bezos two-way-door

**Trigger.** User invoked "ingest everything not yet processed." Raw inventory: 6 article PDFs sitting un-processed in `raw/articles/` (no markdown conversions, no wiki pages). All confirmed full web-clipped articles via pre-flight (7–19 pp; identities verified from content). Acquired (pdftotext → `raw/articles/<slug>.md`) and processed in the same session.

**Pages created (14 total):**

- 6 source pages (all `kind: article`):
  - [[2008-01-01-porter-five-competitive-forces]] — Porter (2008) *HBR* R0801E, confidence 0.9
  - [[2020-07-07-mckinsey-7s-model]] — CFI explainer (Vipond 2020), secondary, confidence 0.7
  - [[2020-03-16-explore-exploit-continuum]] — Strategyzer (Luo 2020), confidence 0.7
  - [[2024-11-29-sme-innovation-powerhouse]] — Strategyzer (Osterwalder & Viki 2024), confidence 0.7
  - [[2019-05-19-business-model-evolution-portfolio-map]] — Strategyzer (Osterwalder & Pigneur 2019), confidence 0.7
  - [[2025-01-19-bezos-two-way-door-decision-making]] — Medium/ILLUMINATION (Yoshida 2025), secondary, confidence 0.65
- 5 concept pages: [[porter-five-forces]], [[mckinsey-7s-framework]], [[organizational-ambidexterity]] (3 sources), [[business-model-innovation]] (2 sources), [[two-way-door-decisions]]
- 2 entity pages: [[Alex-Osterwalder]] (promoted — author on 2 sources), [[Strategyzer]] (org; connective publisher of 3 sources)
- 1 artifact page: [[porter-2008-industry-roic]] (Exhibit p.5 — ROIC by U.S. industry 1992–2006)

**Cross-cutting touches.** Added body cross-references + relationships into existing concepts: [[real-options]] (← two-way-door instance), [[dynamic-capabilities]] (← seizing-side instantiations: ambidexterity / BMI / two-way-door + Porter as structure-side counterpart), [[strategic-risk-management]] (← Porter / 7S / real-options related-concepts block).

**W&W `dynamic_capabilities:` tagging.** All 6 sources tagged (none skipped): Porter → `contextual/external-triggers`; 7S → `digital-transforming/redesigning-internal-structures`; explore-exploit → `digital-seizing/balancing-digital-portfolios` + `strategic-renewal/culture`; SME → `digital-seizing/rapid-prototyping` + `balancing-digital-portfolios` + `strategic-renewal/business-model`; portfolio-map → `digital-seizing/balancing-digital-portfolios` + `strategic-renewal/business-model`; Bezos → `digital-seizing/strategic-agility`.

**Neighbour-source scan (step 5).** Strategyzer cluster (explore-exploit ↔ SME ↔ portfolio-map) wired with mutual `supports` edges on shared `balancing-digital-portfolios`. Bezos `supports` → Damodaran ch8 real-options (reversibility = option value). Porter `supports` → [[strategic-risk-management]] (industry structure as external risk surface). 7S `supports` → Kaplan-Norton Soundview summary (organisational alignment as execution lever).

**Author-promotion rule.** Osterwalder promoted (2 sources). Dangling (single-source, deferred): Michael Porter, Tim Vipond, Yves Pigneur, Tendayi Viki, Lucy Luo, Dani Yoshida, Jeff Bezos (subject), Clay Christensen (referenced).

**Honest scoping.** `pdftotext` dropped all images; framework diagrams (Five Forces, 7S, continuum, Portfolio Map) reconstructed from article prose and reproduced as Mermaid in the concept pages (noted "inferred from text; no frame capture"). The SME webinar's embedded video was not transcribed. Two secondary sources flagged for primary-source chase: McKinsey 7S primaries (Waterman/Peters/Phillips 1980; Peters & Waterman 1982); Bezos 1997 Amazon shareholder letter. The PwC *Innovation 1000* zero-R&D-correlation claim is reported second-hand — flagged in [[business-model-innovation]] §Debates pending primary acquisition.

**Follow-up flagged.** Acquire March (1991) + O'Reilly–Tushman for [[organizational-ambidexterity]] (all 3 current sources are non-independent Strategyzer material); *The Invincible Company* (2020) for the Portfolio Map; PwC Innovation 1000 reports; independent BMI scholarship (Chesbrough, Zott & Amit, Teece).

## [2026-06-06] ingest | First content batch: Warner & Wäger 2019 (paper) + Damodaran 2008 (3 book chapters) + Kaplan & Norton 2004 Soundview summary (secondary source)

**Trigger.** User invoked "ingest all new material" on a freshly cloned cmr-wiki. Raw inventory: 1 academic paper (W&W 2019), 3 PDFs initially labelled as "Strategy Maps chapters" (mismatch surfaced in pre-flight — actually Damodaran 2008 *Strategic Risk Taking* chapters 8, 11, 12), and 1 PDF labelled "StrategyMaps.pdf" that turned out to be an 8-page Soundview Executive Book Summary of Kaplan & Norton 2004, not the book itself.

**Identity-mismatch handling per [CLAUDE.md §Check 2](../CLAUDE.md#check-2--identity-does-the-filename-match-the-content).** PDF Author metadata (Aswath Damodaran on all three "ch*" files) + writing-style + chapter-conclusion textual evidence ("This book is an attempt to bridge…") gave high-confidence identification. User confirmed via AskUserQuestion: ingest all 5; Damodaran chapters at Pass 2; Soundview summary at Pass 1 with confidence cap.

**Pages created (15 total):**

- 5 source pages:
  - [[2019-12-19-warner-wager-2019-dynamic-capabilities-digital-transformation]] — Pass 2, confidence 0.9
  - [[2008-01-01-damodaran-2008-strategic-risk-taking-ch12-first-principles]] — Pass 2, confidence 0.85
  - [[2008-01-01-damodaran-2008-strategic-risk-taking-ch11-strategic-risk-management]] — Pass 2, confidence 0.85
  - [[2008-01-01-damodaran-2008-strategic-risk-taking-ch8-real-options]] — Pass 2, confidence 0.85
  - [[2004-04-01-kaplan-norton-2004-strategy-maps-soundview-summary]] — Pass 1, confidence 0.65 (secondary source; placeholder pending primary K&N book)
- 4 concept pages: [[warner-wager-process-model]], [[dynamic-capabilities]], [[strategic-risk-management]], [[real-options]]
- 5 artifact pages: [[damodaran-2008-ten-principles-of-risk-management]], [[damodaran-2008-five-edges-for-risk-exploitation]], [[damodaran-2008-four-pillars-of-risk-taking-organisation]], [[damodaran-2008-three-real-options-framework]], [[damodaran-2008-real-options-six-determinants]]
- 1 entity page: [[Aswath-Damodaran]] (promoted at ch 11 — second-source rule triggered by the prior ch 12 ingest)

**Foundational moves.** (a) Created the [[warner-wager-process-model]] concept page that CLAUDE.md already references as if existing — the 15-cell closed vocabulary plus the role-defaults matrix mapping cells to 15 business-role slugs (9 C-suite + 6 functional). The wiki's `dynamic_capabilities:` tagging system is now operational. (b) Created the [[strategic-risk-management]] / [[real-options]] concepts as the corpus's anchor for the risk-management cluster. (c) Source-to-source `relationships:` edges added across the three Damodaran chapters (chapter-to-chapter `part-of` + cross-references for `supports`).

**W&W tagging skipped on Damodaran chapters.** Per CLAUDE.md guidance ("Tagging is encouraged, not forced. Skip when the source genuinely sits outside the W&W lens"), the Damodaran chapters carry no `dynamic_capabilities:` — risk management is its own lens, not a digital-transformation cell.

**Pre-flight identity-mismatch convention applied (CLAUDE.md §Check 2 precedent).** Wiki slugs name the actual content; `raw:` and `pdf:` frontmatter preserve the corrected file paths (renamed during acquire-time conversion); identity mismatches are flagged in source-page §What was actually ingested sections.

**Honest scoping notes.** (a) Soundview summary is a *secondary source* — confidence capped at 0.65, marked as placeholder pending acquisition of the primary Kaplan & Norton 2004 book (454 pp, HBS Press). (b) The W&W paper's Figures 1 & 2 are described from prose context rather than re-read from the PDF; deferred to a follow-on session if Fig 2's spatial layout becomes load-bearing. (c) The Damodaran ch 8 appendix on options-pricing mathematics (Black-Scholes derivation, binomial, put-call parity) was read but not transcribed — standard material covered better elsewhere.

**Follow-up work flagged:**

- Acquire Kaplan & Norton (2004) *Strategy Maps* primary book to supersede the Soundview placeholder.
- Acquire Damodaran ch 2 (Chinese-symbol-for-risk framing), ch 6 (decision trees), and ch 9 (valuation) referenced internally by the three ingested chapters.
- Acquire Teece (2007) *Explicating dynamic capabilities* — the origin paper for the sensing/seizing/transforming triad that [[dynamic-capabilities]] currently summarises from second-hand sources.
- 4 newly-noticed articles in `raw/articles/` (Business Model Evolution, SME-into-innovation-powerhouse, McKinsey 7S, Explore-Exploit Continuum) deferred to a follow-up session.

_Initial commit of the cmr-wiki content layer. Pre-existing system was committed in `57ddb6c` (initial fresh-copy commit)._
