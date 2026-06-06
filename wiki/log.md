# Log

Reverse-chronological record of wiki operations — **newest entry at the top, oldest at the bottom**. New entries are *prepended* immediately under the `---` separator below. Strict prefix format so `grep "^## \[" wiki/log.md | head -10` returns the ten most recent. Format (indented to keep grep clean):

    ## [YYYY-MM-DD] <op> | <title>

Permitted operations: `ingest`, `acquire`, `query`, `lint`, `synthesize`, `refactor`, `bulk-refactor` (for any operation touching >10 wiki pages, with affected slug list and reversibility note). `acquire` is used for sessions that land raw files but defer processing to a later session; the umbrella `ingest` op covers the typical Acquire+Process-in-the-same-session case. See [the design doc, §9.2](../docs/superpowers/specs/2026-04-28-llm-wiki-design.md#92-wikilogmd) for details.

---

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
