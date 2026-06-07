---
type: concept
title: "Measuring culture with NLP (human-in-the-loop)"
aliases:
  - "measuring culture with AI"
  - "NLP culture measurement"
  - "Natural Employee Language Understanding"
  - "Glassdoor culture measurement"
confidence: 0.8
last_confirmed: 2026-06-07
source_count: 6
accessed_at: 2026-06-07
tags:
  - measuring-culture
  - natural-language-processing
  - machine-learning
  - culture-500
  - methodology
relationships:
  - type: supports
    target: big-9-cultural-values
    via: "the NLP pipeline produces the per-firm scores for the nine values"
  - type: part-of
    target: organizational-culture
    via: "the measurement method that makes organisational culture quantifiable at scale"
---

# Measuring culture with NLP (human-in-the-loop)

**Measuring culture with NLP** is the [[CultureX]] / [[2020-09-01-culture-500-the-research|Culture 500]] method for quantifying organizational culture at scale from **employee reviews** (primarily Glassdoor) using **natural language processing tightly integrated with human expertise**. It is the methodological engine behind the whole culture cluster — the thing that converts free-text employee voice into the [[big-9-cultural-values|Big 9 value scores]] and the driver rankings.

## The distinctive claim: human-in-the-loop accuracy

In typical NLP "the algorithm is in the driver's seat" — it discovers topics and classifies text unsupervised. The CultureX approach instead **tightly couples human experts with ML + NLP** to disambiguate context. The canonical example ([[2019-06-26-measuring-company-culture-with-ai]]): employees say *"fudge"* to mean integrity ("fudging the numbers") — **except at Dairy Queen**, where "fudge" means chocolate. The human–machine back-and-forth catches such **company-specific language** that an unsupervised model would misclassify.

Over three years the team built a domain-specialised platform — the **Natural Employee Language Understanding** engine — with:

- **20,000+ highly precise terms** mapped to culture meanings.
- Classification into **80+ culture-related values** (and 150+ topics in the employee-drivers analysis), at **90%+ accuracy**, "just like a human expert."
- A specialisation bet: optimise for *one* task (understanding employee feedback) rather than general-purpose NLP.

## Incidence × sentiment

Each review is coded for whether it **mentions** a value (incidence) and whether it speaks of it **positively** (sentiment). These map to O'Reilly's (1989) two dimensions of culture — **consensus** (incidence) and **intensity** (sentiment). The composite measure used downstream (e.g. in [[2024-06-20-oreilly-2024-culture-archetypes-firm-performance]]) is the **% of a firm's reviews that positively mention a value** in a given year.

## Why employee reviews (and why Glassdoor)

- **Behaviour-grounded, not aspirational.** Reviews reveal *lived* culture, sidestepping the "official core values ≠ reality" problem ([[organizational-culture]]).
- **Scalable.** 1.4M+ reviews enable cross-firm comparison impossible with surveys/ethnography.
- **Robust to the "only disgruntled people review" objection** ([[2023-05-31-building-a-winning-workplace-culture]]): Glassdoor distributions are less extreme than Yelp's, and reviews include **departed employees**, who reveal what's broken.

## Method tooling for downstream analysis

- **SHAP (Shapley Additive Explanations)** values rank which of 150+ topics most predict a firm's overall culture rating ([[sull-2021-ten-culture-elements]] / [[2021-09-16-ten-things-corporate-culture]]).
- **Factor analysis** reduces the nine values to three [[cultural-archetypes|archetypes]].

## Relation to the rest of the wiki

The method is what makes the rest of the culture cluster possible. It also stands as a **domain-specialised NLP** exemplar — a case where human+ML beats general-purpose models on a narrow task — adjacent to (but not tagged under) the wiki's digital-transformation lens.

## Sources

- [[2019-06-26-measuring-company-culture-with-ai]] — the method explainer (Dairy Queen example).
- [[2020-09-01-culture-500-the-research]] — the method narrative + scale.
- [[2019-06-26-introducing-mit-smr-glassdoor-culture-500]] — the four-novelties framing.
- [[2021-09-16-ten-things-corporate-culture]] — the SHAP application (150+ topics → 10 drivers).
- [[2024-06-20-oreilly-2024-culture-archetypes-firm-performance]] — peer-reviewed use of the measure.
- [[2023-05-31-building-a-winning-workplace-culture]] — the review-bias rebuttal.

## Debates and supersession

- **Vendor-validated, not independently audited.** The accuracy claims (90%+, "like a human expert") come from CultureX itself; no independent replication is in the wiki.
- **Glassdoor self-selection** remains a structural limitation even with the distribution rebuttal.
- **Single-pipeline dependency:** every downstream finding in this cluster rests on this one measure. Confidence 0.8 pending an independent measurement source.
