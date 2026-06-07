---
type: source
kind: article
title: "What is DevOps Culture?"
author:
  - "Tom Hall"
url: "https://www.atlassian.com/devops/what-is-devops/devops-culture"
date_published: 2026-06-07
length: "~9 pages (full evergreen Atlassian explainer; date_published = access date — page is undated/living)"
venue: "Atlassian — DevOps topics"
citation_key: "hall_devops_culture"
raw: "../../raw/articles/devops-culture-atlassian.md"
pdf: "../../raw/articles/DevOps Culture _ Atlassian.pdf"
confidence: 0.75
last_confirmed: 2026-06-07
accessed_at: 2026-06-07
source_count: 1
tags:
  - devops
  - devops-culture
  - blameless-retrospective
  - ci-cd
  - organizational-culture
dynamic_capabilities:
  - strategic-renewal/culture
  - digital-transforming/redesigning-internal-structures
relationships:
  - type: supports
    target: 2026-06-07-what-is-devops-atlassian
    via: "expands the 'DevOps culture' section of the overview into a full treatment"
  - type: supports
    target: organizational-culture
    via: "DevOps culture is a domain-specific instance of organisational culture (shared responsibility, blameless learning)"
---

# What is DevOps Culture? — Atlassian (Tom Hall)

> How DevOps culture helps align people, processes, and tools toward a more unified customer focus.

(Atlassian's framing; the article opens by stressing that tools and agile practices "are not enough… Without the right mindset, rituals, and culture, it's hard to realize the full promise of DevOps.")

## TL;DR

DevOps culture is **closer collaboration and shared responsibility** between development and operations for the products they build *and run*. Its load-bearing tenets: **"you build it, you run it"** (shared ownership across the lifecycle); **autonomous teams** (decide and change without heavy approval chains); **fast feedback**; and **blameless retrospectives** — shifting the obsession from **MTBF** (Mean Time Between Failures) to **MTTR** (Mean Time To Recovery), treating systems as complex and apt to fail. Tools without the culture change is "**cargo-cult DevOps**." Cites *Accelerate* (trust/collaboration → higher-quality decisions + job satisfaction) and *Effective DevOps* (blameless = growth mindset).

## What was actually ingested — honest scoping

Full evergreen Atlassian explainer (by Tom Hall, DevOps Advocate & Practitioner). **`date_published` is the access date** — undated living page. Vendor source; confidence 0.75.

## Citation

**APA (7th edition):**

> Hall, T. (n.d.). *What is DevOps culture?* Atlassian. Retrieved June 7, 2026, from https://www.atlassian.com/devops/what-is-devops/devops-culture

## Results (WHAT)

- **Shared responsibility / "you build it, you run it."** Devs share lifecycle ownership; ops understand business goals — both responsible for success or failure. ("People and culture are the top factors of a successful DevOps implementation." — Atlassian 2020 survey.)
- **Autonomous teams** with trust and no fear of failure; self-service tooling so a trivial change (a DNS entry) doesn't take weeks via a ticket.
- **Fast feedback** via CI and monitoring designed jointly by dev + ops.
- **Blameless retrospectives**; **MTTR over MTBF** (recover fast vs prevent-all-failures); "a blameless view of failure… adopts a growth mindset" (*Effective DevOps*, Davis & Daniels).
- **Process shifts:** CI/CD (and, where deploy cadence justifies it, continuous deployment — Netflix); **trunk-based development** with comprehensive automated testing; **feature flags / dark deployment** to de-risk continuous deployment.
- **Cargo-cult DevOps**: changing tools without changing culture changes the façade, not the foundation. Outcomes (Atlassian): 61% ship higher-quality deliverables, 49% faster time-to-market; practitioners report new skills (78%) and raises (48%).

## Visual content

> No data visuals in source — illustrative section imagery only. The argument is entirely prose. (`> No load-bearing visuals in source.`)

## Dynamic-capabilities reading

Tagged **`strategic-renewal/culture`** (DevOps culture is precisely a renewal-of-culture: new mindsets, rituals, blameless learning, shared values across silos) and **`digital-transforming/redesigning-internal-structures`** (autonomous cross-functional teams replacing the dev/ops silo). Role-relevance inherits those cells (`ceo, coo, chro, cdo, transformation-lead, cio`).

## Discussion / Significance (SO WHAT)

The cultural core of [[devops]]. It is a **domain-specific instance of [[organizational-culture]]** — shared responsibility, autonomy, blameless learning are culture-cluster themes applied to software delivery — so it bridges the DevOps cluster to the MIT SMR culture cluster. The MTTR-over-MTBF and blameless-retrospective ideas are its most transferable claims.

**Limitations:** vendor explainer; undated; book claims (*Accelerate*, *Effective DevOps*) cited second-hand.

## Linked entities and concepts

**Entities:**

- [[Atlassian]] — publisher. **Promoted this batch.**
- Tom Hall — author (DevOps Advocate & Practitioner). Dangling (single-source).
- Jez Humble / Nicole Forsgren / Gene Kim (*Accelerate*); Jennifer Davis / Katherine Daniels (*Effective DevOps*) — referenced. Dangling.

**Concepts promoted / touched:** [[devops]], [[organizational-culture]], [[calms-framework]] (Culture is the C), [[dora-metrics]].

## Source-to-source relationships

- `supports` → [[2026-06-07-what-is-devops-atlassian]] (expands its culture section).
- `supports` → [[organizational-culture]] (domain-specific instance).
