---
type: source
kind: article
title: "CALMS Framework"
author:
  - "Ian Buchanan"
url: "https://www.atlassian.com/devops/frameworks/calms-framework"
date_published: 2026-06-07
length: "~7 pages (full evergreen Atlassian explainer; date_published = access date — page is undated/living)"
venue: "Atlassian — DevOps frameworks"
citation_key: "buchanan_calms_framework"
raw: "../../raw/articles/calms-framework-atlassian.md"
pdf: "../../raw/articles/CALMS Framework _ Atlassian.pdf"
confidence: 0.75
last_confirmed: 2026-06-07
accessed_at: 2026-06-07
source_count: 1
tags:
  - calms-framework
  - devops
  - devops-maturity
  - automation
  - lean
dynamic_capabilities:
  - strategic-renewal/culture
  - digital-transforming/improving-digital-maturity
relationships:
  - type: supports
    target: 2026-06-07-what-is-devops-atlassian
    via: "CALMS is the maturity-assessment lens for the DevOps adoption the overview describes"
---

# CALMS Framework — Atlassian (Ian Buchanan)

> CALMS is a framework that assesses a company's ability to adopt DevOps processes, as well as a way of measuring success during a DevOps transformation.

(Atlassian's framing; the acronym was coined by Jez Humble, co-author of *The DevOps Handbook*.)

## TL;DR

**CALMS** = **Culture, Automation, Lean, Measurement, Sharing** — a five-lens framework for assessing DevOps adoption readiness and progress. **Culture:** collaboration; product-oriented (not function-based) teams; "DevOps solves human problems, not tooling problems." **Automation:** CI/CD, configuration-as-code, automated build/test/deploy — "works on my machine" becomes irrelevant. **Lean:** continuous improvement + embracing failure (anti-fragility); a simple product today beats a perfect one in six months. **Measurement:** data-driven (cycle time, failure frequency, MTTR, usage); shared cross-department. **Sharing:** shared responsibility/success — "you built it, you run it"; peer review is the only review that improves delivery.

The named anchor for the [[calms-framework]] concept.

## What was actually ingested — honest scoping

Full evergreen Atlassian explainer (Ian Buchanan, Atlassian Principal Solutions Engineer). **`date_published` = access date** — undated living page. Vendor source; confidence 0.75.

## Citation

**APA (7th edition):**

> Buchanan, I. (n.d.). *CALMS framework.* Atlassian. Retrieved June 7, 2026, from https://www.atlassian.com/devops/frameworks/calms-framework

## Results (WHAT) — the five lenses

| Lens | Core idea |
| --- | --- |
| **Culture** | DevOps is a culture change; collaboration; product-oriented cross-functional teams; "it's everyone's job." |
| **Automation** | Eliminate repetitive manual work; CI/CD; configuration-as-code; reliable repeatable systems. |
| **Lean** | Continuous improvement; embrace failure (anti-fragile); ship simple now, improve continuously. |
| **Measurement** | Measure to prove improvement (dev-to-deploy time, failure rate, MTTR, active users); share the data. |
| **Sharing** | Shared responsibility + success bridges the dev/ops divide; "you built it, you run it"; peer review. |

## Visual content

> No data visuals — illustrative section icons only. (`> No load-bearing visuals in source.`)

## Dynamic-capabilities reading

Tagged **`strategic-renewal/culture`** (the C in CALMS — collaboration and shared-responsibility culture) and **`digital-transforming/improving-digital-maturity`** (CALMS is explicitly a *maturity-assessment* instrument for a DevOps transformation). Role-relevance inherits those cells (`ceo, coo, chro, cdo, transformation-lead, innovation-lab-lead`).

## Discussion / Significance (SO WHAT)

CALMS is the **maturity/assessment scaffold** of the [[devops]] cluster — the five lenses organise the practices ([[devops]] automation/CI-CD), the culture ([[organizational-culture]], [[devops-culture-atlassian|DevOps culture]]), and the measurement ([[dora-metrics]]). It complements [[team-topologies]] (Culture + Sharing ↔ team design) and the [[warner-wager-process-model|W&W]] `improving-digital-maturity` microfoundation.

**Limitations:** vendor explainer; undated; CALMS is a practitioner heuristic, not an empirically validated maturity model.

## Linked entities and concepts

**Entities:**

- [[Atlassian]] — publisher. **Promoted this batch.**
- [[Ian-Buchanan]] — author (Atlassian Principal Solutions Engineer). **Promoted this batch** (author on CALMS + [[2026-06-07-team-topologies-atlassian|Team Topologies]]).
- Jez Humble — coined CALMS; co-author *The DevOps Handbook*. Dangling (referenced).

**Concepts promoted / touched:** [[calms-framework]] (anchor), [[devops]], [[dora-metrics]], [[organizational-culture]].

## Source-to-source relationships

- `supports` → [[2026-06-07-what-is-devops-atlassian]] (maturity-assessment lens for DevOps adoption).
