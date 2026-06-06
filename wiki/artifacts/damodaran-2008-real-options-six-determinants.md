---
type: artifact
artifact_kind: table
title: "Six determinants of option value (Damodaran 2008 Table 8A.1)"
source: "[[2008-01-01-damodaran-2008-strategic-risk-taking-ch8-real-options]]"
source_table_ref: "Table 8A.1"
source_pages: "p. 40 (Appendix)"
last_confirmed: 2026-06-06
accessed_at: 2026-06-06
tags:
  - real-options
  - black-scholes
  - corporate-finance
  - reference-table
  - damodaran
  - book-artifact
relationships:
  - type: part-of
    target: 2008-01-01-damodaran-2008-strategic-risk-taking-ch8-real-options
  - type: supports
    target: real-options
---

# Six determinants of option value

> Standard reference table from the appendix of Damodaran (2008) ch 8. Maps each of the six inputs to a Black-Scholes option-pricing model to its effect on call value and put value. Reproduction of Table 8A.1, p. 40.

## Provenance

| Field | Value |
| --- | --- |
| Source | [[2008-01-01-damodaran-2008-strategic-risk-taking-ch8-real-options]] |
| Source's reference | Table 8A.1 |
| Location | Appendix p. 40 |
| Last confirmed | 2026-06-06 |

## The six determinants

| Factor | Effect on Call Value | Effect on Put Value |
| --- | --- | --- |
| Increase in underlying asset's value (S) | Increases | Decreases |
| Increase in Strike Price (K) | Decreases | Increases |
| Increase in variance of underlying asset (σ²) | **Increases** | **Increases** |
| Increase in time to expiration (t) | Increases | Increases |
| Increase in interest rates (r) | Increases | Decreases |
| Increase in dividends paid (y) | Decreases | Increases |

## Why these six matter for real-options analysis

When mapping a real investment onto a Black-Scholes valuation, every input maps to a real-world variable:

| Black-Scholes input | Real-investment meaning (in a real-options context) |
| --- | --- |
| **S** | Present value of expected cash flows from the underlying investment |
| **K** | Initial cost to develop / exercise the option (or salvage value for puts) |
| **t** | Period of exclusivity / window of decision rights |
| **σ²** | Uncertainty in the present value of cash flows (key driver of option value) |
| **r** | Risk-free rate over the option life |
| **y** | Cost of delay (annual fraction of value lost by not exercising) |

## The variance result is the load-bearing one

**Variance increases call *and* put value.** This is counter-intuitive — variance is normally a "risk measure" we'd want to minimise. For options it inflates value because the option-holder has *asymmetric payoff*: large upward movements increase the call payoff, large downward movements just leave the option unexercised at zero loss (beyond the premium).

In real-options reasoning, this is the heart of Damodaran's "upside reframe" — and the source of the framework's most common abuse:

- **Legitimate use.** A natural-resource reserve genuinely has more value when commodity-price volatility rises.
- **Abuse.** An analyst rationalising a bad investment can inflate the option value by claiming high variance, especially when "high variance" is unfalsifiable (the more ignorant the analyst, the higher the defensible variance assumption).

The exclusivity precondition (see [[damodaran-2008-three-real-options-framework]]) is the discipline that prevents variance from being a free parameter for rationalisation.

## How to use this artifact

- **As a sensitivity checklist** when running real-options analyses. Vary each input within reasonable bounds; report the value range.
- **As a debunking tool** for real-options claims that don't specify all six inputs. If an analyst claims "this investment is a valuable real option" but cannot name S, K, t, σ, r, and y, the claim is rhetorical, not analytical.
- **As a teaching reference** for the relationship between options-pricing intuition and real-investment decisions.

## Cross-references

- Parent source: [[2008-01-01-damodaran-2008-strategic-risk-taking-ch8-real-options]]
- Companion artifact: [[damodaran-2008-three-real-options-framework]] — the operational mapping of these inputs to delay/expand/abandon options.
- Concept: [[real-options]]
