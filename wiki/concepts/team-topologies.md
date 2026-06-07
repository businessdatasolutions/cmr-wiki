---
type: concept
title: "Team Topologies"
aliases:
  - "Team Topologies"
  - "four team types"
  - "stream-aligned team"
  - "platform team"
confidence: 0.75
last_confirmed: 2026-06-07
source_count: 1
accessed_at: 2026-06-07
tags:
  - team-topologies
  - organizational-design
  - devops
  - cognitive-load
relationships:
  - type: part-of
    target: devops
    via: "Team Topologies is the team-design model for organising a DevOps transformation"
  - type: supports
    target: mckinsey-7s-framework
    via: "both address organisational Structure; Team Topologies is the team-level instantiation for software delivery"
---

# Team Topologies

**Team Topologies** is a model for organising business-and-technology teams for fast flow, introduced by **Matthew Skelton and Manuel Pais** (2019) and presented here via the [[2026-06-07-team-topologies-atlassian|Atlassian treatment]]. To run [[devops|DevOps]] at scale, it reduces the sprawl of team variants to **four fundamental team types**, defining every other team relative to the primary **stream-aligned** team.

## The four team types

| Team type | Purpose |
| --- | --- |
| **Stream-aligned** | The primary team: owns a single value stream (product / feature set / user journey) end-to-end, closest to the customer, minimal hand-offs. |
| **Platform** | Provides internal self-service capabilities that stream-aligned teams consume, reducing their **cognitive load** (e.g. identity management). |
| **Complicated-subsystem** | Specialists owning a part needing deep expertise (billing service, algorithms, AI), sparing stream-aligned teams that complexity. |
| **Enabling** | Specialists who coach stream-aligned teams to acquire a capability, then disengage — never a permanent dependency. |

The organising principle is **cognitive load**: platform and complicated-subsystem teams exist to keep stream-aligned teams' cognitive load manageable so they can deliver fast.

## How success is measured

The four **[[dora-metrics|DORA metrics]]** (deployment frequency, lead time for changes, change failure rate, time to restore service) plus team-health attributes Atlassian adds (balanced team, full-time owner, shared understanding, focus on value/metrics, proof-of-concept, managed dependencies).

## Relation to the rest of the wiki

- **Team-design layer of [[devops]]** — operationalises "structure before tools."
- **Organisational structure.** It is the team-level instantiation of the **Structure** element in [[mckinsey-7s-framework]], and an instance of the [[warner-wager-process-model|W&W]] `redesigning-internal-structures` microfoundation (designing team-based, decentralised structures).

## Sources

- [[2026-06-07-team-topologies-atlassian]] — Ian Buchanan (Atlassian); the wiki's anchor (a condensed take on the Skelton & Pais book).

## Debates and supersession

_Single-source concept (one vendor explainer)._ The primary text — Skelton & Pais (2019), *Team Topologies* — is not in the wiki; notably the Atlassian treatment omits the book's three **interaction modes** (collaboration, X-as-a-Service, facilitating). Confidence 0.75 pending the primary source.
