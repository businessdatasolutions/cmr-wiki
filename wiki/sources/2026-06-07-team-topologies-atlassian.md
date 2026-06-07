---
type: source
kind: article
title: "Team Topologies"
author:
  - "Ian Buchanan"
url: "https://www.atlassian.com/devops/frameworks/team-topologies"
date_published: 2026-06-07
length: "~7 pages (full evergreen Atlassian explainer; date_published = access date — page is undated/living)"
venue: "Atlassian — DevOps frameworks"
citation_key: "buchanan_team_topologies"
raw: "../../raw/articles/team-topologies-atlassian.md"
pdf: "../../raw/articles/Team Topologies _ Atlassian.pdf"
confidence: 0.75
last_confirmed: 2026-06-07
accessed_at: 2026-06-07
source_count: 1
tags:
  - team-topologies
  - devops
  - organizational-design
  - dora-metrics
  - stream-aligned-teams
dynamic_capabilities:
  - digital-transforming/redesigning-internal-structures
relationships:
  - type: supports
    target: 2026-06-07-what-is-devops-atlassian
    via: "team structure is the org-design precondition for the DevOps transformation the overview describes"
---

# Team Topologies — Atlassian (Ian Buchanan)

> How four fundamental topologies influence a DevOps transformation.

(Atlassian's framing; the team-types are drawn from the book *Team Topologies* by Matthew Skelton and Manuel Pais, with Atlassian's own perspective overlaid.)

## TL;DR

To run DevOps at scale, reduce the sprawl of team variants to **four fundamental team types**: **Stream-aligned** (the primary team — owns a single value stream end-to-end, closest to the customer, minimal hand-offs); **Platform** (provides internal self-service capabilities so stream-aligned teams keep autonomy with low cognitive load); **Complicated-subsystem** (specialists for a part needing deep expertise — e.g. a billing service, an algorithm, AI); **Enabling** (specialists who coach stream-aligned teams to close a capability gap, then leave — never a permanent dependency). Other team types are defined *relative to* stream-aligned teams. Success is measured by the **four DORA metrics** plus team-health attributes.

The named anchor for the [[team-topologies]] concept.

## What was actually ingested — honest scoping

Full evergreen Atlassian explainer (Ian Buchanan). **`date_published` = access date** — undated living page; the underlying primary text is Skelton & Pais (2019), *Team Topologies* (not in this wiki). Vendor source; confidence 0.75.

## Citation

**APA (7th edition):**

> Buchanan, I. (n.d.). *Team topologies.* Atlassian. Retrieved June 7, 2026, from https://www.atlassian.com/devops/frameworks/team-topologies
>
> Primary text (not held): Skelton, M., & Pais, M. (2019). *Team topologies: Organizing business and technology teams for fast flow.* IT Revolution.

## Results (WHAT) — the four team types

| Team type | Purpose |
| --- | --- |
| **Stream-aligned** | Owns a single impactful stream (product / feature set / user journey) end-to-end; builds and runs it with minimal hand-offs; the most common type — others are defined relative to it. |
| **Platform** | Provides internal services/capabilities stream-aligned teams self-serve, reducing their cognitive load (e.g. identity management). |
| **Complicated-subsystem** | Specialists owning a part needing deep knowledge (billing service, algorithms, AI); spares stream-aligned teams that complexity. |
| **Enabling** | Specialists who coach stream-aligned teams to acquire a capability, then disengage; never a permanent dependency. |

**Measuring success — the 4 DORA metrics:** deployment frequency, lead time for changes, change failure rate, time to restore service. Atlassian adds team-health attributes (balanced team, full-time owner, shared understanding, focus on value/metrics, proof-of-concept, managed dependencies). Stream-aligned-team self-test: steady feature flow (CI/CD, multiple releases/week), quick to change on feedback (feature flags, alpha/beta), minimal hand-offs, time for tech debt, evaluated by the right metrics.

## Visual content

> No data visuals — illustrative section imagery only. The four-team taxonomy is reproduced as a table in [[team-topologies]]. (`> No load-bearing visuals in source.`)

## Dynamic-capabilities reading

Tagged **`digital-transforming/redesigning-internal-structures`** — Team Topologies *is* an internal-structure redesign instrument: reducing team-type sprawl to four fundamental topologies and designing the interactions between them is exactly the W&W "designing team-based, decentralised structures" activity. Role-relevance inherits the cell (`ceo, coo, cdo, chro, cio, transformation-lead`).

## Discussion / Significance (SO WHAT)

The **org-design** member of the [[devops]] cluster, and a strong bridge to the strategy/org cluster: it operationalises "structure before tools" ([[2026-06-07-what-is-devops-atlassian|What is DevOps]]), complements [[mckinsey-7s-framework]] (Structure), and instantiates the [[warner-wager-process-model|W&W]] `redesigning-internal-structures` microfoundation. Its DORA-metrics section is reproduced in [[dora-metrics]]. The "cognitive load" lens (platform/complicated-subsystem teams reduce stream-aligned cognitive load) is its most transferable idea.

**Limitations:** vendor explainer; undated; a condensed take on the Skelton & Pais book (which also defines the three *interaction modes* — collaboration, X-as-a-Service, facilitating — not covered here).

## Linked entities and concepts

**Entities:**

- [[Atlassian]] — publisher. **Promoted this batch.**
- [[Ian-Buchanan]] — author. **Promoted this batch.**
- Matthew Skelton / Manuel Pais — *Team Topologies* authors. Dangling (referenced).

**Concepts promoted / touched:** [[team-topologies]] (anchor), [[devops]], [[dora-metrics]], [[mckinsey-7s-framework]].

## Source-to-source relationships

- `supports` → [[2026-06-07-what-is-devops-atlassian]] (team structure as the org-design precondition for DevOps).
