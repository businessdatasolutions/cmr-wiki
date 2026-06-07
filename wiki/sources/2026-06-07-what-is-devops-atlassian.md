---
type: source
kind: article
title: "What is DevOps?"
author:
  - "Atlassian"
url: "https://www.atlassian.com/devops/what-is-devops"
date_published: 2026-06-07
length: "~10 pages (full evergreen Atlassian explainer; date_published = access date — page is undated/living)"
venue: "Atlassian — DevOps topics"
citation_key: "atlassian_what_is_devops"
raw: "../../raw/articles/what-is-devops-atlassian.md"
pdf: "../../raw/articles/What is DevOps_ _ Atlassian.pdf"
confidence: 0.75
last_confirmed: 2026-06-07
accessed_at: 2026-06-07
source_count: 1
tags:
  - devops
  - ci-cd
  - dora-metrics
  - automation
  - software-delivery
dynamic_capabilities:
  - digital-transforming/redesigning-internal-structures
  - digital-transforming/improving-digital-maturity
  - digital-seizing/rapid-prototyping
relationships:
  - type: supports
    target: 2026-06-07-devops-culture-atlassian
    via: "the overview article; the culture article expands its 'DevOps culture' section"
  - type: supports
    target: 2026-06-07-calms-framework-atlassian
    via: "CALMS is the assessment framework for the DevOps adoption this article describes"
---

# What is DevOps? — Atlassian

> DevOps is a set of practices, tools, and a cultural philosophy that automate and integrate the processes between software development and IT teams. It emphasizes team empowerment, cross-team communication and collaboration, and technology automation.

(Atlassian's framing.)

## TL;DR

The anchor explainer for [[devops]]. DevOps = **practices + tools + cultural philosophy** that integrate software development (Dev) and IT operations (Ops), born ~2007 to dissolve the dev/ops silo. Practitioners visualise it as an **infinity loop** of eight phases — Discover, Plan, Build, Test, Deploy, Operate, Observe, Continuous feedback — emphasising constant collaboration and iterative improvement. Core practices: **CI/CD, automation, Infrastructure as Code, microservices, monitoring**. Benefits are evidence-backed (DORA 2019: elite teams deploy **208× more frequently** and **106× faster** than low performers). The biggest adoption pitfall is treating DevOps as a tooling problem — "DevOps is a combination of people, tools, and culture," and structure must come before tools. Security integrated into DevOps is [[devsecops]].

## What was actually ingested — honest scoping

Full evergreen Atlassian explainer read. **`date_published` is the access date (2026-06-07)** — the page is an undated living document (© 2026 Atlassian). Vendor source (Atlassian markets Open DevOps / Jira), so claims have a commercial frame; confidence 0.75.

## Citation

**APA (7th edition):**

> Atlassian. (n.d.). *What is DevOps?* Retrieved June 7, 2026, from https://www.atlassian.com/devops/what-is-devops

## Context (WHY)

The DevOps movement began ~2007 when development and IT-operations communities raised concerns about the traditional model where coders worked apart from the operators who deployed and supported their code. "DevOps" (development + operations) names the integration of these disciplines into one continuous process to increase the speed and quality of software delivery.

## Results (WHAT) — the model

**The DevOps lifecycle (infinity loop, 8 phases):** Discover → Plan → Build → Test → Deploy → Operate → Observe → Continuous feedback. The loop (not a line) symbolises constant collaboration and iterative improvement; the left side is development, the right side operations.

**Core DevOps practices:** continuous integration (CI), continuous delivery (CD), situational awareness/observability, **automation** (the most important — push-to-build/test/deploy), **Infrastructure as Code (IaC)** (infrastructure definitions treated as version-controlled code), **microservices** (independently deployable services), **monitoring** across the lifecycle ("shift left").

**Benefits:** speed (DORA 2019 elite vs low: 208× deploy frequency, 106× faster lead time), improved collaboration, rapid deployment, quality/reliability, security (via DevSecOps). Atlassian's 2020 survey: 99% said DevOps had positive organizational impact.

**Challenges:** breaking entrenched silos; the misconception that *new tools alone* deliver DevOps; the operational load of moving to IaC/microservices; over-reliance on tools detracting from the real foundation — **team and organization structure** ("Once a structure is established, the processes and team should come next and the tools should follow"). Robert Krohn (Atlassian): *"DevOps isn't any single person's job. It's everyone's job."*

## Visual content

### The DevOps infinity loop (8 phases)

**Type:** cyclical process diagram
**Location:** "The DevOps lifecycle" section (lost in `pdftotext`; reconstructed from prose)
**Recovery path:** described from text; no frame capture.

The canonical DevOps infinity (∞) loop: development phases on the left lobe (Discover, Plan, Build, Test), operations phases on the right (Deploy, Operate, Observe), with Continuous feedback closing the loop. → reproduced as Mermaid in [[devops]].

> Remaining visuals are decorative section icons (Speed, Collaboration, etc.); no data charts.

## Dynamic-capabilities reading

Tagged three cells. DevOps is a textbook **digital-transformation** capability set: **`digital-transforming/redesigning-internal-structures`** (dissolving the dev/ops silo, merging into cross-functional teams — the org-structure precondition this article stresses); **`digital-transforming/improving-digital-maturity`** (the lifecycle/practices/benefits define a maturity path, measured by DORA); **`digital-seizing/rapid-prototyping`** (CI/CD + automation enable rapid, iterative release — the seizing-side experimentation engine). Role-relevance inherits the union of those cells (`ceo, coo, cdo, cto, cio, chro, product-manager, tech-lead, innovation-lab-lead, rd-director, transformation-lead`).

## Discussion / Significance (SO WHAT)

The keystone of the [[devops]] concept. Its "structure before tools" point connects DevOps to the org-design cluster ([[team-topologies]], [[mckinsey-7s-framework]]) and to the [[warner-wager-process-model|W&W]] `redesigning-internal-structures` microfoundation. Its culture emphasis connects to [[organizational-culture]] (DevOps culture as a strategic-renewal-of-culture instance). The DORA metrics it cites are reproduced in [[dora-metrics]].

**Limitations:** vendor explainer (Atlassian product framing); evergreen/undated; statistics (DORA, Atlassian survey) are cited second-hand.

## Linked entities and concepts

**Entities:**

- [[Atlassian]] — publisher. **Promoted this batch** (connective publisher of 4 DevOps sources).
- Robert Krohn — Atlassian Head of Engineering, DevOps (quoted). Dangling.

**Concepts promoted / touched:** [[devops]] (anchor), [[devsecops]], [[dora-metrics]], [[calms-framework]], [[team-topologies]].

## Source-to-source relationships

- `supports` → [[2026-06-07-devops-culture-atlassian]] (expands the culture section).
- `supports` → [[2026-06-07-calms-framework-atlassian]] (the adoption-assessment framework).
