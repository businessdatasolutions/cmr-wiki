---
type: concept
title: "DevSecOps"
aliases:
  - "DevSecOps"
  - "development security and operations"
  - "shift-left security"
confidence: 0.8
last_confirmed: 2026-06-07
source_count: 4
accessed_at: 2026-06-07
tags:
  - devsecops
  - shift-left
  - application-security
  - software-supply-chain
  - nist-ssdf
relationships:
  - type: depends-on
    target: devops
    via: "DevSecOps extends DevOps by integrating security into every phase of its lifecycle"
---

# DevSecOps

**DevSecOps** (development, security, and operations) integrates **security as a shared responsibility throughout the entire software/IT lifecycle**, rather than as a final gate. It is an evolution of [[devops]]: the same automation, collaboration, and fast-feedback discipline, with security **shifted left** (built in from planning/coding) **and shifted right** (tested and monitored in production). The motivation: DevOps' rapid cycles make end-of-pipeline security a bottleneck that undoes the speed gains.

## Core principles

- **Shift left + shift right** — security from the earliest planning through runtime; developer-friendly guardrails at build/deploy + post-production testing/monitoring.
- **Built-in, not perimeter, security** — invite security in at the outset; help developers code securely; train them.
- **Automation** — security scans/policy checks embedded in CI/CD (SAST static + DAST dynamic testing, container scanning, automated patching).
- **Shared responsibility** — dissolve the dev/sec/ops silos; "security pros are assets, not bottlenecks."
- **Software-supply-chain security** — secure open-source components and dependencies (intel from OpenSSF, NVD, OSV, CVE/CWE).
- **Continuous monitoring** — detect and respond to threats in live applications.

## GitLab's four fundamental requirements

From [[2026-06-07-gitlab-what-is-devsecops|GitLab]]: **Automation**, **Collaboration** (single source of truth for vulnerabilities/remediation), **Policy guardrails** (consistent enforcement matched to risk appetite/regulation), **Visibility** (auditable who-changed-what). "Scanning alone isn't enough — get results to the right people, at the right time, with the right context."

## The NIST SSDF reference model

NIST's NCCoE formalises DevSecOps into a [[nist-devsecops-reference-model|notional reference model]] aligned to the **Secure Software Development Framework (SSDF, SP 800-218)**: a seven-phase lifecycle (Plan → Develop → Build → Test → Release → Deploy → Operate) with **control gates**, wrapped by continuous improvement/feedback, the CI/CD pipeline, and a **Zero Trust** security underlay (SP 800-207 / SP 1800-35). This is the standards-grade counterpart to the vendor definitions.

## Relation to the rest of the wiki

- **Extends [[devops]]** — same lifecycle, security integrated into every phase.
- **Strategic risk.** DevSecOps is the engineering practice for managing **software-supply-chain and application-security risk** — a link to [[strategic-risk-management]].
- **Digital maturity.** Adopting DevSecOps is a `digital-transforming/improving-digital-maturity` and `redesigning-internal-structures` move ([[warner-wager-process-model]], [[dynamic-capabilities]]).
- **Platform engineering** — flagged by Red Hat as an adjacent discipline (internal developer platforms facilitating DevSecOps); a candidate future concept.

## Sources

- [[2023-03-10-redhat-what-is-devsecops]] — the "shared responsibility throughout the IT lifecycle" definition; shift-left/right; supply chain; containers.
- [[2026-06-07-gitlab-what-is-devsecops]] — the four requirements; SAST/DAST; 5-step culture path; 2022 survey.
- [[2026-06-07-nist-devsecops-reference-model]] — the NIST-SSDF-aligned reference model (standards anchor).
- [[2026-06-07-what-is-devops-atlassian]] — frames DevSecOps as DevOps with security as an integrated part.

## Debates and supersession

- Two of the substantive sources are **vendor explainers** (Red Hat, GitLab); the NIST NCCoE model is the authoritative anchor but ingested **partially** (Section 3 only). Confidence 0.8.
- **DevSecOps vs platform engineering** boundary is contested (Red Hat treats them as distinct-but-complementary). Open question pending a dedicated platform-engineering source.
