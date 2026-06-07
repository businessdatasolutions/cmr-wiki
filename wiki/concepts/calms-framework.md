---
type: concept
title: "CALMS framework"
aliases:
  - "CALMS"
  - "CALMS model"
  - "Culture Automation Lean Measurement Sharing"
confidence: 0.75
last_confirmed: 2026-06-07
source_count: 1
accessed_at: 2026-06-07
tags:
  - calms-framework
  - devops
  - devops-maturity
  - assessment
relationships:
  - type: part-of
    target: devops
    via: "CALMS is the framework for assessing DevOps adoption readiness and measuring transformation progress"
---

# CALMS framework

**CALMS** is a framework for assessing an organisation's ability to adopt [[devops|DevOps]] and for measuring progress during a DevOps transformation. The acronym — **Culture, Automation, Lean, Measurement, Sharing** — was coined by **Jez Humble** (co-author of *The DevOps Handbook*).

## The five lenses

| Lens | Core idea |
| --- | --- |
| **Culture** | DevOps is a culture change centred on collaboration; form product-oriented cross-functional teams (not function-based silos). "DevOps solves human problems, not tooling problems." |
| **Automation** | Eliminate repetitive manual work; CI/CD, automated build/test/deploy, **configuration-as-code**; reliable, repeatable systems ("works on my machine" becomes irrelevant). |
| **Lean** | Continuous improvement + **embracing failure** (anti-fragility); ship a simple product now and improve it continuously rather than perfecting in isolation. |
| **Measurement** | Measure to prove improvement (dev-to-deploy time, failure frequency, MTTR, active users) — and share the data across departments. |
| **Sharing** | Shared responsibility *and* success bridges the dev/ops divide; "you built it, you run it"; peer review is the review that actually improves delivery. |

## Relation to the rest of the wiki

- **Assessment lens for [[devops]]** — CALMS organises the practices (Automation ↔ CI/CD), the [[devops-culture-atlassian|culture]] (Culture, Sharing), and the [[dora-metrics|metrics]] (Measurement) into a readiness/maturity view.
- **Maturity.** As an adoption-maturity instrument it maps to the [[warner-wager-process-model|W&W]] `improving-digital-maturity` microfoundation.
- **Culture overlap** — the C (Culture) and S (Sharing) are [[organizational-culture]] themes applied to software delivery.

## Sources

- [[2026-06-07-calms-framework-atlassian]] — Ian Buchanan (Atlassian); the wiki's anchor for CALMS.

## Debates and supersession

_Single-source concept (one vendor explainer)._ CALMS is a practitioner heuristic, not an empirically validated maturity model; the primary lineage is Jez Humble / *The DevOps Handbook* (not in the wiki). Confidence 0.75 pending the primary source or an independent treatment.
