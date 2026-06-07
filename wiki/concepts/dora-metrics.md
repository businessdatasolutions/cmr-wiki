---
type: concept
title: "DORA metrics"
aliases:
  - "DORA metrics"
  - "four key metrics"
  - "DevOps Research and Assessment metrics"
confidence: 0.78
last_confirmed: 2026-06-07
source_count: 3
accessed_at: 2026-06-07
tags:
  - dora-metrics
  - devops
  - software-delivery-performance
  - measurement
relationships:
  - type: part-of
    target: devops
    via: "the DORA metrics are the standard way to measure DevOps software-delivery performance"
---

# DORA metrics

The **DORA metrics** (from **DevOps Research and Assessment**) are the four standard measures of software-delivery performance used to assess [[devops|DevOps]] effectiveness. They split into **throughput** (speed) and **stability** measures:

| Metric | Question it answers | Type |
| --- | --- | --- |
| **Deployment frequency** | How often does the organisation successfully release to production? | Throughput |
| **Lead time for changes** | How long from commit to running in production? | Throughput |
| **Change failure rate** | What % of deployments cause a production failure? | Stability |
| **Time to restore service** | How long to recover from a production failure? (cf. MTTR) | Stability |

## Why they matter

DORA's research segments teams into elite / high / medium / low performers on these metrics. The headline gap (DORA 2019, via [[2026-06-07-what-is-devops-atlassian|Atlassian]]): **elite teams deploy 208× more frequently and 106× faster** (shorter lead time) than low performers — and, crucially, do so *without* sacrificing stability, refuting the speed-vs-stability tradeoff assumption. This is why DORA metrics anchor the **Measurement** lens of [[calms-framework|CALMS]] and the success criteria for [[team-topologies|stream-aligned teams]].

## Relation to the rest of the wiki

- **Measurement layer of [[devops]]** — the throughput+stability pair quantifies delivery performance.
- The "**time to restore service**" metric is the throughput-side twin of the [[devops-culture-atlassian|DevOps-culture]] emphasis on **MTTR over MTBF** — recover fast rather than prevent-all-failures.
- Connects to [[organizational-culture]]'s performance-orientation archetype (execution + agility) read at the software-delivery grain.

## Sources

- [[2026-06-07-what-is-devops-atlassian]] — cites the DORA 2019 elite-vs-low gap.
- [[2026-06-07-team-topologies-atlassian]] — names the four metrics as the team success measure.
- [[2026-06-07-devops-culture-atlassian]] — the MTTR-over-MTBF framing (the stability-recovery idea).

## Debates and supersession

- Sourced via **Atlassian vendor pages**; the primary authority is the **DORA / *Accelerate*** research program (Forsgren, Humble, Kim) and the annual *State of DevOps* reports — not yet ingested. A fifth metric (**reliability**, added by DORA in later years) is not covered by the current sources. Confidence 0.78 pending the primary DORA source.
