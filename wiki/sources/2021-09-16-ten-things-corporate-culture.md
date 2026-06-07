---
type: source
kind: article
title: "10 Things Your Corporate Culture Needs to Get Right"
author:
  - "Donald Sull"
  - "Charles Sull"
url: "https://sloanreview.mit.edu/article/10-things-your-corporate-culture-needs-to-get-right/"
date_published: 2021-09-16
length: "~8 pages (full article read; MIT SMR reprint #63211)"
venue: "MIT Sloan Management Review (Measuring Culture / Research Highlight)"
citation_key: "sull_2021_ten_things_culture"
raw: "../../raw/articles/ten-things-corporate-culture.md"
pdf: "../../raw/articles/10 Things Your Corporate Culture Needs to Get Right.pdf"
confidence: 0.85
last_confirmed: 2026-06-07
accessed_at: 2026-06-07
source_count: 1
tags:
  - organizational-culture
  - employee-experience
  - culture-500
  - shap
  - great-resignation
  - measuring-culture
relationships:
  - type: supports
    target: 2020-09-01-culture-500-the-research
    via: "same Culture 500 / CultureX NLP research programme; this article reports the employee-rated drivers of culture score"
  - type: supports
    target: 2024-06-20-oreilly-2024-culture-archetypes-firm-performance
    via: "the employee-experience side (what predicts employees' culture rating) complements the firm-performance side of the archetypes paper"
---

# 10 Things Your Corporate Culture Needs to Get Right — Sull & Sull (2021)

> Knowing what elements of culture matter most to employees can help leaders foster engagement as they transition to a new normal that will include more remote and hybrid work.

(MIT SMR's framing of the article.)

## TL;DR

Sull & Sull (MIT SMR, Sep 2021) analyse **1.4 million Glassdoor reviews** via the [[measuring-culture-with-nlp|CultureX NLP platform]] and compute **SHAP values** to find which of 150+ topics best predict a company's overall culture rating. The answer is **not** what most leaders expect: friendly colleagues, flexible schedules, and manageable workloads have little impact. The **10 elements that matter most** (in importance order) are: **(1) feeling respected, (2) supportive leaders, (3) leaders live core values, (4) toxic managers, (5) unethical behaviour, (6) benefits, (7) perks, (8) learning & development, (9) job security, (10) reorganizations.** **Respect is the single strongest predictor — ~18× the average topic** and nearly twice the second-ranked factor. This is the *employee-experience* side of the Culture 500 (distinct from the *firm-performance* side in [[2024-06-20-oreilly-2024-culture-archetypes-firm-performance]]).

## What was actually ingested — honest scoping

Full article read (MIT SMR reprint #63211). Confidence 0.85 (rigorous SHAP-based analysis on a large sample, by the primary researchers; practitioner-journal venue, not peer-reviewed).

## Citation

**APA (7th edition):**

> Sull, D., & Sull, C. (2021, September 16). 10 things your corporate culture needs to get right. *MIT Sloan Management Review*. https://sloanreview.mit.edu/article/10-things-your-corporate-culture-needs-to-get-right/

**BibTeX:**

```bibtex
@article{sull_2021_ten_things_culture,
  author  = {Sull, Donald and Sull, Charles},
  title   = {{10 Things Your Corporate Culture Needs to Get Right}},
  journal = {MIT Sloan Management Review},
  year    = {2021},
  note    = {Reprint 63211}
}
```

## Context (WHY)

Written into the **Great Resignation** (April 2021: ~4M Americans quit, a record), the article asks which elements of culture matter most to *employees* — because culture is the top predictor of employee satisfaction (ahead of compensation and work-life balance). It separates **official core values** (which signal aspirations and predict little) from the elements that actually drive how employees rate culture.

## Methods (HOW)

1.4M Glassdoor reviews → CultureX **Natural Employee Language Understanding** NLP (90%+ accuracy across 150+ topics). For each topic, compute the **SHAP (Shapley Additive Explanations)** value — the marginal contribution of that topic to predicting a firm's overall 1–5 culture rating. Rank topics by SHAP importance; group into themes.

## Results (WHAT) — the 10 elements

In importance order (with grouping): **Respect** (#1, ~18× the average topic); **Leadership** — supportive leaders (#2), leaders live core values (#3), toxic managers (#4), unethical behaviour (#5); **Compensation & benefits** — benefits (#6, 2× more predictive than compensation), perks (#7, esp. company social events); **Learning & development** (#8); **Job security & change** — job security (#9), reorganizations (#10, discussed negatively 97% of the time). Counter-intuitively, friendly colleagues / flexible schedules / manageable workloads had little impact. Respect varies by industry (professional/technical sectors mention it less and more positively; front-line sectors more and more negatively), but "industry is not destiny" (Wegmans, Trader Joe's, HEB excel in low-scoring sectors).

## Visual content

### Chart 1 — "Corporate Culture Elements Most Important to Employees"

**Type:** horizontal bar chart (SHAP relative importance)
**Location:** mid-article · → reproduced in [[sull-2021-ten-culture-elements]]
Bars show each cultural topic's relative importance in predicting a firm's culture rating; "feeling respected" is **17.9× more powerful** than the typical topic. The load-bearing visual of the article.

### Chart 2 — "How Employees Talk About Respect in Their Companies by Industry"

**Type:** scatter plot (37 industries)
**Location:** Respect section
Two axes (both centred on the sample average, in standard deviations): horizontal = how *often* employees mention respect; vertical = how *positively*. Professional/technical industries (management consulting, enterprise software, semiconductors, tech giants) sit low-mention/high-positive; front-line industries (fast food, regional banks, grocery) sit high-mention/low-positive. Argues respect's salience and valence vary systematically by workforce composition.

## Distinctive artifacts

### The 10 elements of culture that matter most to employees (with SHAP importance)

**Type:** ranked driver list (SHAP) · **Location:** mid-article · **Reproduced in:** [[sull-2021-ten-culture-elements]]

The named, ordered list of 10 elements with their relative-importance framing (Respect ~18×). The artifact page carries the full reproduction with definitions.

## Discussion / Significance (SO WHAT)

This is the **employee-experience anchor** of the culture cluster. Its crucial relationship to the [[2024-06-20-oreilly-2024-culture-archetypes-firm-performance|archetypes paper]] is *complementary, not contradictory*: this article's dependent variable is the **employees' culture rating** (where respect/people dominate); the paper's dependent variable is **objective firm performance** (where the performance-orientation archetype dominates and the people archetype shows no effect). Together they say: people/respect drive how it *feels* to work somewhere; performance-orientation drives the *financials*. The distinction between **official core values** (aspirational, low predictive power) and **lived culture** is the methodological throughline shared with the [[2023-05-31-building-a-winning-workplace-culture|webinar]].

**Limitations:** practitioner venue; SHAP importance is associational; Glassdoor self-selection; the analysis predicts the *overall culture rating* (itself a Glassdoor self-report), not external outcomes.

## Citations to chase

- The earlier Sull studies on official core values (the "~60 distinct values" study; the "no correlation between official values and lived values" study) — partially captured via the [[2020-09-01-culture-500-the-research|Culture 500 article]].
- Glassdoor "Mission & Culture Survey Supplement" (2019).

## Linked entities and concepts

**Entities:**

- [[Donald-Sull]], [[Charles-Sull]] — authors; [[CultureX]] co-founders. **Promoted this batch.**

**Concepts promoted / touched:** [[organizational-culture]], [[measuring-culture-with-nlp]], [[big-9-cultural-values]] (contrast: official values vs employee-rated elements).

## Source-to-source relationships

- `supports` → [[2020-09-01-culture-500-the-research]] (same research programme).
- `supports` → [[2024-06-20-oreilly-2024-culture-archetypes-firm-performance]] (employee-experience side complements the firm-performance side).
