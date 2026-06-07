---
type: source
kind: paper
title: "Organizational culture archetypes and firm performance"
author:
  - "O'Reilly, C."
  - "Cao, X."
  - "Sull, D."
url: "https://doi.org/10.1016/j.jbusres.2024.114780"
date_published: 2024-06-20
length: "~9 pages (Pass 2 — abstract, intro, methods, results, all 4 tables + Fig 1 read; discussion read in full; no appendix)"
venue: "Journal of Business Research, 182, 114780"
doi: "10.1016/j.jbusres.2024.114780"
citation_key: "oreilly_2024_culture_archetypes"
raw: "../../raw/papers/oreilly-2024-culture-archetypes-firm-performance.md"
pdf: "../../raw/papers/1-s2.0-S0148296324002844-main.pdf"
confidence: 0.85
last_confirmed: 2026-06-07
accessed_at: 2026-06-07
source_count: 1
tags:
  - organizational-culture
  - cultural-archetypes
  - firm-performance
  - natural-language-processing
  - culture-500
  - empirical-study
relationships:
  - type: supports
    target: 2020-09-01-culture-500-the-research
    via: "uses the Sull et al. (2019) nine-value Culture 500 NLP measure as its culture input"
  - type: supports
    target: 2021-09-16-ten-things-corporate-culture
    via: "same Sull NLP-on-Glassdoor research programme; this paper links the measured culture to objective firm performance"
  - type: supports
    target: strategic-risk-management
    via: "toxic / weak culture is a strategic risk to firm value; this paper quantifies the culture→performance link"
---

# Organizational culture archetypes and firm performance — O'Reilly, Cao & Sull (2024)

> Much of the research on organizational culture has been driven by the assumption that culture is associated with organizational performance. Surprisingly, the evidence for this linkage is ambiguous for two understandable reasons. First, there has been a proliferation of definitions and measures of the construct itself which has made aggregation of findings across studies confusing. Second, demonstrating that culture affects objective firm performance requires large cross-organizational samples—but the modal approach to measuring culture using surveys or qualitative research has made this difficult. Using a natural language processing measure of culture with a sample of 309 large U.S. companies, we show how (1) the norms and values that define culture may be understood as representing three underlying cultural archetypes (performance-orientation, people, and customers) and (2) that these archetypes are related to objective firm performance in understandable ways. We discuss the implications of these findings for future research on organizational culture.

## TL;DR

Using the [[big-9-cultural-values|Sull et al. (2019) nine-value NLP measure]] of culture (the [[2020-09-01-culture-500-the-research|Culture 500]] / Glassdoor pipeline) on **309 large U.S. firms**, the authors factor-analyse the nine values into **three [[cultural-archetypes|cultural archetypes]]** — **performance-orientation, people, and customer** — and regress objective firm performance on them (controlling industry, size, CEO tenure). Headline: **only the performance-orientation archetype robustly predicts objective performance** (higher Tobin's Q, revenue growth, ROE, analyst buys); a **people-oriented culture shows no association with any objective performance measure** (despite the prior literature linking it to satisfaction/engagement); a customer-oriented culture is associated with *fewer* analyst buy recommendations. The three archetypes offer a parsimonious framework that integrates the proliferation of culture constructs.

## Citation

**APA (7th edition):**

> O'Reilly, C., Cao, X., & Sull, D. (2024). Organizational culture archetypes and firm performance. *Journal of Business Research*, *182*, 114780. https://doi.org/10.1016/j.jbusres.2024.114780

**BibTeX:**

```bibtex
@article{oreilly_2024_culture_archetypes,
  author  = {O'Reilly, Charles and Cao, Xubo and Sull, Donald},
  title   = {{Organizational Culture Archetypes and Firm Performance}},
  journal = {Journal of Business Research},
  year    = {2024},
  volume  = {182},
  pages   = {114780},
  doi     = {10.1016/j.jbusres.2024.114780}
}
```

## What was actually ingested

**Pass 2.** Abstract, introduction, methods, results, and discussion read in full; all four tables (Table 1 Schein-typology overview, Table 2 varimax factor analysis, Table 3 correlations, Table 4 regressions) and Fig. 1 (the summary model) read with care. No appendix in the paper. Proofs/robustness not separately reported (the paper is short — 9 pp). Confidence 0.85 (full grasp; not a Pass-3 re-implementation).

## Context (WHY)

The culture→performance link is *assumed* across management research but the evidence is "ambiguous" for two reasons: (1) **construct proliferation** — too many incompatible definitions/measures, so findings can't be aggregated; (2) **measurement difficulty** — survey/qualitative methods don't scale to the large cross-organizational samples needed to show culture affects *objective* (not self-reported) performance. The paper attacks both with an NLP measure of culture applied at scale. It is grounded in Schein's (2010) three-layer typology (assumptions → norms/values → artifacts) and locates itself at the **norms-and-values** layer.

## Methods (HOW)

- **Sample:** 309 large U.S. public firms with CEO/performance data (subsample of the Culture 500).
- **Culture measure:** the nine [[big-9-cultural-values]] from Sull et al. (2019), each scored as the % of a firm's Glassdoor reviews that *positively* mention the value (a composite of incidence × sentiment) via the [[measuring-culture-with-nlp|CultureX NLP pipeline]].
- **Archetype derivation:** varimax-rotated **factor analysis** of the nine values → three factors (Table 2).
- **Performance measures:** Tobin's Q (market-to-book), Return on Equity, % Revenue Growth, Analysts' Buy recommendations, EBITDA (Compustat / Execucomp).
- **Controls:** firm size (log assets), industry (9 sector dummies), CEO tenure.
- **Analysis:** OLS regressions of each performance measure on the three archetypes + controls (Table 4).

## Results (WHAT)

**Three archetypes (Table 2 factor loadings):**
- **Performance-orientation** — Execution (0.871), Agility (0.867), Innovation (0.699), Performance (0.631), Collaboration (0.539).
- **People** — Integrity (0.816), Respect (0.713), Diversity (0.653), Collaboration (0.588 — cross-loads).
- **Customer** — Customer (0.893).

**Regressions (Table 4, standardized β):**
- **Performance-orientation** → **positive** on Tobin's Q (0.17***), ROE (0.13*), % Revenue Growth (0.29***), Analysts' Buy (0.14*); ns on EBITDA.
- **People** → **no significant association** with *any* objective performance measure.
- **Customer** → **negative** on Analysts' Buy (−0.16**); else ns.

The most important and surprising finding: a **people-oriented culture — which prior work ties to employee satisfaction and engagement — is unrelated to objective firm performance**. Fig. 1 summarises the model. The authors argue the three archetypes map onto established frameworks (Competing Values Framework's external/internal focus; Denison's DOCS; Hartnell et al.'s task- vs relationship-oriented metathemes) and onto cultural-evolution theory (external adaptation: performance + customer; internal coordination: people).

## Visual content

### Table 1 — Research using Schein's 3-layer typology of culture

**Type:** literature-overview table · **Location:** p. 2
Maps Schein's three layers (underlying assumptions / norms & values / artifacts) to their modal research method and illustrative studies (e.g. Netflix, Southwest, Bridgewater ethnographies for the assumptions layer; survey studies for norms/values). Positions this paper at the norms-and-values layer with an NLP method. Incidental (framing table).

### Table 2 — Varimax Factor Analysis of Culture Dimensions (n = 309)

**Type:** factor-loadings table · **Location:** p. 4 · → reproduced in [[oreilly-2024-archetype-factor-loadings]]
The 9 values × 3 factors loading matrix that defines the archetypes. Load-bearing.

### Table 3 — Means, SDs, and Correlations (n = 309)

**Type:** descriptive-statistics / correlation matrix · **Location:** p. 4
10×10 correlation matrix of controls, the three culture archetypes, and five performance measures. Incidental (standard descriptive table); notable cells: Performance-orientation ↔ Tobin's Q (0.17**) and ↔ % Revenue Growth (0.30**).

### Table 4 — Regression of Cultural Archetypes on Firm Performance

**Type:** OLS regression table · **Location:** p. 4 · → reproduced in [[oreilly-2024-archetype-performance-regressions]]
Five regressions (one per performance measure) on the three archetypes + controls. The paper's core evidence. Load-bearing.

### Fig. 1 — Model of Cultural Archetypes and Firm Performance

**Type:** path/summary diagram · **Location:** p. 5
**Caption (verbatim):** "Fig. 1. Model of Cultural Archetypes and Firm Performance Based on the Results from the Analysis."
A schematic linking the three archetypes to the performance outcomes per the regression results — performance-orientation → revenue growth + market value (positive); people → (no objective link); customer → fewer analyst buys. Summarises Table 4 visually.

## Distinctive artifacts

### Table 2 — factor loadings (9 values → 3 archetypes)

**Type:** factor-loadings table · **Location:** p. 4 · **Reproduced in:** [[oreilly-2024-archetype-factor-loadings]]

### Table 4 — archetype → performance regressions

**Type:** OLS regression table · **Location:** p. 4 · **Reproduced in:** [[oreilly-2024-archetype-performance-regressions]]

## Discussion / Significance (SO WHAT)

For the wiki this is the **empirical keystone of the culture cluster**: it takes the [[big-9-cultural-values]] catalogue (defined by the Culture 500 sources) and demonstrates, at scale and against *objective* metrics, which dimensions of culture actually move firm performance. Three implications:

1. **Performance-orientation is the archetype that pays** — execution/agility/innovation/performance norms. This connects the culture literature to [[dynamic-capabilities]] (agility) and execution-focused strategy.
2. **The people-culture/performance null is the load-bearing surprise** — it does *not* contradict the [[2021-09-16-ten-things-corporate-culture|"respect matters most to employees"]] finding; rather, it separates *employee-experience* outcomes (where people/respect dominate) from *objective firm-performance* outcomes (where performance-orientation dominates). The two Sull research streams measure different dependent variables.
3. **Archetypes integrate construct proliferation** — a parsimonious 3-factor scheme onto which CVF, Denison, and Hartnell metathemes map.

**Limitations (acknowledged + observed):** cross-sectional (associational, not causal — culture and performance could be reverse-causal or jointly determined); U.S.-only large public firms; the people-archetype null could reflect measurement (Glassdoor positivity ceilings) rather than a true absence of effect; ROE and EBITDA show no archetype associations at all, which the authors note may explain prior mixed results. Don Sull is a co-author *and* the source of the culture measure — a measure-and-test alignment worth noting (not a flaw, but a single-pipeline dependency).

## Citations to chase

- **Sull, D., Sull, C., et al. (2019/2020)** — the nine-value Culture 500 measure (partially in the wiki via the [[2020-09-01-culture-500-the-research|Culture 500 article]] and videos; the underlying *MIT SMR* methodology paper is not).
- **Schein, E. (2010)** *Organizational Culture and Leadership* — the 3-layer typology.
- **Cameron & Quinn — Competing Values Framework**; **Denison (1990) — DOCS**; **Hartnell et al. (2011, 2016)** — the culture frameworks the archetypes integrate.
- **O'Reilly et al. (1991)** — Organizational Culture Profile (OCP).

## Linked entities and concepts

**Entities:**

- [[Donald-Sull]] — co-author; co-founder of [[CultureX]]; the connective figure across this cluster. **Promoted this batch.**
- Charles O'Reilly — first author; Stanford GSB; major organizational-culture scholar (OCP). **Dangling** (single-source mention, deferred — promote on a second O'Reilly source).
- Xubo Cao — co-author; Stanford GSB. **Dangling** (single-source mention, deferred).

**Concepts promoted / touched:**

- [[cultural-archetypes]] — **created from this source.**
- [[big-9-cultural-values]] — the input measure.
- [[measuring-culture-with-nlp]] — the method.
- [[organizational-culture]] — the overarching concept.
- [[strategic-risk-management]], [[dynamic-capabilities]] — cross-cluster links.

## Source-to-source relationships

- `supports` → [[2020-09-01-culture-500-the-research]] (uses its 9-value NLP measure).
- `supports` → [[2021-09-16-ten-things-corporate-culture]] (same Sull research programme; different dependent variable).
- `supports` → [[strategic-risk-management]] (quantifies culture as a firm-value variable).
