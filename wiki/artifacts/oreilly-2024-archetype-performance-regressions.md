---
type: artifact
artifact_kind: table
title: "Regression of cultural archetypes on firm performance (O'Reilly et al. 2024, Table 4)"
source: "[[2024-06-20-oreilly-2024-culture-archetypes-firm-performance]]"
source_table_ref: "Table 4"
source_pages: "p. 4"
last_confirmed: 2026-06-07
accessed_at: 2026-06-07
tags:
  - cultural-archetypes
  - firm-performance
  - regression
  - organizational-culture
  - reference-table
relationships:
  - type: part-of
    target: 2024-06-20-oreilly-2024-culture-archetypes-firm-performance
  - type: supports
    target: cultural-archetypes
---

# Regression of cultural archetypes on firm performance

> The paper's core evidence: OLS regressions of five objective firm-performance measures on the three [[cultural-archetypes|cultural archetypes]], controlling for industry, firm size, and CEO tenure (n = 309). Reproduction of Table 4, p. 4.

## Provenance

| Field | Value |
| --- | --- |
| Source | [[2024-06-20-oreilly-2024-culture-archetypes-firm-performance]] |
| Source's reference | Table 4 — "Regression of Cultural Archetypes on Firm Performance" |
| Location | p. 4 |
| Coefficients | Standardized regression coefficients (β) |
| Significance | *p < 0.05, **p < 0.01, ***p < 0.001 |
| Last confirmed | 2026-06-07 |

## The regression table (standardized β)

| Independent variable | Tobin's Q | Return on Equity | % Revenue Growth | Analysts' Buy | EBITDA |
| --- | ---: | ---: | ---: | ---: | ---: |
| **Controls** | | | | | |
| Industry dummies | Yes | Yes | Yes | Yes | Yes |
| Size (log assets) | −0.42*** | 0.02 | −0.14** | 0.21*** | 0.77*** |
| CEO tenure | 0.16*** | 0.03 | 0.19*** | 0.08 | 0.00 |
| **Culture archetypes** | | | | | |
| Performance-orientation | **0.17*** | **0.13*** | **0.29*** | **0.14*** | −0.02 |
| People | 0.04 | 0.06 | 0.07 | −0.08 | −0.02 |
| Customer | −0.02 | −0.05 | 0.02 | **−0.16** | −0.06 |
| **F-ratio** | 6.79*** | 0.49 | 4.44*** | 2.88*** | 18.8*** |
| **df** | 301 | 301 | 308 | 305 | 306 |
| **Adjusted R²** | 0.20 | 0.00 | 0.13 | 0.08 | 0.43 |

(Bold cells = statistically significant culture-archetype coefficients. The Tobin's Q, Performance-orientation cell is 0.17***; the ROE cell is 0.13* — see source note. EBITDA's high R² is driven by firm size, not culture.)

## What it shows

- **Performance-orientation pays.** Positive and significant on Tobin's Q, ROE, % Revenue Growth, and Analysts' Buy — i.e. both market-based and accounting/growth measures. The only archetype with broad positive associations.
- **People culture: no objective-performance association.** Every coefficient is non-significant — the paper's headline surprise, given the prior literature linking people-oriented cultures to satisfaction/engagement.
- **Customer culture: a negative analyst signal.** Significantly negative on Analysts' Buy (−0.16**); analysts may read heavy customer focus as less short-term-financially driven.
- **ROE and EBITDA show no culture associations at all** — which the authors suggest may explain why prior studies (often using such measures) found culture–performance links to be "mixed and confusing."

## How to use this artifact

- **As the evidence base** for [[cultural-archetypes]]' central claim (only performance-orientation robustly predicts objective performance).
- **As a caution** against the "people-oriented culture → better financials" assumption — pair with [[sull-2021-ten-culture-elements]], which shows people/respect dominate the *employee-experience* dependent variable instead.

## Cross-references

- Parent source: [[2024-06-20-oreilly-2024-culture-archetypes-firm-performance]]
- Companion artifact: [[oreilly-2024-archetype-factor-loadings]]
- Concepts: [[cultural-archetypes]], [[organizational-culture]]
