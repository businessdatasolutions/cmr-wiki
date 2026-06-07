---
type: source
kind: report
title: "Notional Reference Model for DevSecOps for Demonstration of NIST SSDF (Section 3)"
author:
  - "NIST NCCoE"
url: "https://www.nccoe.nist.gov/projects/software-supply-chain-and-devops-security-practices"
date_published: 2026-06-07
length: "~22 pages (Section 3 only of a larger NCCoE project document; date_published = access date — excerpt is undated)"
venue: "NIST National Cybersecurity Center of Excellence (NCCoE) — Software Supply Chain & DevOps Security Practices project (SSDF / SP 800-218)"
citation_key: "nist_nccoe_devsecops_reference_model"
raw: "../../raw/articles/nist-devsecops-reference-model.md"
pdf: "../../raw/articles/3. Notional Reference Model for DevSecOps for Demonstration of NIST SSDF — Secure Software Development, Security, and Operations (DevSecOps) Practices documentation.pdf"
confidence: 0.8
last_confirmed: 2026-06-07
accessed_at: 2026-06-07
source_count: 1
tags:
  - devsecops
  - nist-ssdf
  - zero-trust
  - ci-cd
  - secure-software-development
  - reference-model
dynamic_capabilities:
  - digital-transforming/improving-digital-maturity
relationships:
  - type: supports
    target: 2023-03-10-redhat-what-is-devsecops
    via: "formalises the shift-left DevSecOps lifecycle that the vendor explainers describe into a NIST-SSDF-aligned reference model"
---

# Notional Reference Model for DevSecOps (NIST SSDF) — NCCoE, Section 3

> As mentioned earlier, this project illustrates how NIST SSDF practices and tasks can be implemented in DevSecOps to aid organizations in improving the security of the software they develop and operate… the NCCoE developed a notional reference model for SSDF with DevSecOps.

(The document's own framing — Section 3 of an NCCoE project document.)

## TL;DR

NIST's National Cybersecurity Center of Excellence (NCCoE) built a **notional reference model** that bridges the **NIST Secure Software Development Framework (SSDF, SP 800-218)** — which deliberately specifies *no* architecture — and a concrete **DevSecOps** implementation. The model has **five functional dimensions**: (1) a **seven-phase continuous lifecycle** (Plan → Develop → Build → Test → Release → Deploy → Operate) gated by **control gates**; (2) **Continuous Improvements, Security & Monitoring** (ever-present components); (3) **Continuous Feedback** (signals from control gates/external events feed back to earlier phases); (4) the **CI/CD pipeline** (independent automated pipelines combined in sequence); and (5) **Zero Trust Security** (ZTA per NIST SP 1800-35 / SP 800-207 — ICAM, PDP, PEP, data security, etc.). The model is "a guide, not a one-size-fits-all solution."

The named anchor reproduced in the [[nist-devsecops-reference-model]] artifact.

## What was actually ingested — honest scoping

**Section 3 only** of a larger NCCoE project document (the excerpt's filename begins "3."; the text says "As mentioned earlier"). ~22 pages: the reference-model overview (Fig 3.1), the seven phase descriptions (§3.1.1 Plan onward) and their component tables. **`date_published` = access date** — the excerpt carries no publication date; the parent project is NCCoE "Software Supply Chain and DevOps Security Practices" (SSDF / SP 800-218 lineage). Other sections of the parent document are **not** in the wiki. Confidence 0.8 (authoritative standards body, but a partial/section ingest).

## Citation

**APA (7th edition):**

> National Institute of Standards and Technology, National Cybersecurity Center of Excellence. (n.d.). *Notional reference model for DevSecOps for demonstration of NIST SSDF* (Section 3) [Project documentation]. Retrieved June 7, 2026, from https://www.nccoe.nist.gov/projects/software-supply-chain-and-devops-security-practices

## Context (WHY)

The **SSDF (SP 800-218)** recommends secure-development *practices* but is architecture-agnostic. To demonstrate the SSDF in a real "software factory," the NCCoE (with project collaborators) interpreted the SSDF practices and **decomposed them into granular, actionable tasks**, then defined a DevSecOps reference model (bottom-up, by collaborator-technology and consensus) to host them. Future versions will document the concrete technology↔SSDF connections.

## Results (WHAT) — the five dimensions

1. **Phases of the Continuous DevSecOps Lifecycle (7):** **Plan** (define functional/non-functional/security requirements; threat modeling; shift-left) → **Develop** (proactive review of code/IaC/policy) → **Build** (automated pipelines → deployable artifacts in ephemeral environments) → **Test** (automated testing in ephemeral environments) → **Release** (package/transfer; verify readiness & security) → **Deploy** (install/configure on production; verify security/performance) → **Operate** (monitoring + evidence collection for integrity/security/reliability). **Control gates** between phases provide feedback before changes proceed.
2. **Continuous Improvements, Security & Monitoring** — ever-present components giving phase-specific integrations.
3. **Continuous Feedback** — signals from control gates or external events (new tech, attack patterns, regulations) fed back into earlier phases.
4. **CI/CD Pipeline** — independent automated pipelines combined in sequence into the full build-and-deploy process.
5. **Zero Trust Security** — ZTA (NIST SP 1800-35, SP 800-207): ICAM, Policy Decision Point, Policy Enforcement Point, data security, security analytics, endpoint security, resource protection.

Each phase lists its concrete components (e.g. Plan: certificate/configuration/credential/secrets management, threat-modeling system, risk-management system, ticketing system, cyber-intel feeds — OpenSSF, NVD, OSV, CVE/CWE — Zero Trust security system).

## Visual content

### Fig 3.1 — Notional Reference Model for DevSecOps for Demonstration of NIST SSDF

**Type:** architecture/reference diagram · **Location:** §3 (lost in `pdftotext`; reconstructed from prose) · → reproduced in [[nist-devsecops-reference-model]]
The master diagram: the seven-phase lifecycle loop wrapped by the four cross-cutting dimensions (continuous improvement/security/monitoring; continuous feedback; CI/CD; Zero Trust). The load-bearing visual.

### Fig 3.2 … (per-phase figures)

**Type:** phase component diagrams · **Location:** §3.1.x
Each phase (Plan, Develop, …) has a figure plus a component table listing the tools implemented in the NCCoE build. Described structurally; component lists summarised above.

## Distinctive artifacts

### Notional DevSecOps reference model (7 phases + 5 dimensions)

**Type:** reference model / architecture · **Location:** §3, Fig 3.1 · **Reproduced in:** [[nist-devsecops-reference-model]]

The five-dimension model with the seven-phase lifecycle and Zero-Trust underlay. The artifact page carries the Mermaid reproduction + per-phase component summary.

## Dynamic-capabilities reading

Tagged **`digital-transforming/improving-digital-maturity`** — adopting an SSDF-aligned DevSecOps reference model is a secure-software-development maturity uplift (assessing readiness, standardising secure practices across the lifecycle). It sits at the standards/methodology layer of the DevSecOps maturity path. Role-relevance inherits the cell (`cto, cio, cdo, ceo, transformation-lead`).

## Discussion / Significance (SO WHAT)

The **authoritative/standards anchor** of the [[devsecops]] cluster: where [[2023-03-10-redhat-what-is-devsecops|Red Hat]] and [[2026-06-07-gitlab-what-is-devsecops|GitLab]] describe DevSecOps as a vendor philosophy, NIST formalises it as an SSDF-aligned reference model with explicit phases, control gates, and a Zero-Trust underlay. The **Zero Trust** dimension and **software-supply-chain** intel feeds (OpenSSF/NVD/OSV/CVE/CWE) connect to [[strategic-risk-management]] (security/supply-chain risk as a governed, standardised practice).

**Limitations:** **partial ingest (Section 3 only)** — the parent NCCoE document's other sections (SSDF practice→task mapping detail, the full build) are not in the wiki; the model is explicitly "notional" and bottom-up from collaborator tech.

## Citations to chase

- **NIST SP 800-218** — Secure Software Development Framework (SSDF). The practice set this model implements.
- **NIST SP 800-207** — Zero Trust Architecture; **NIST SP 1800-35** — Implementing a Zero Trust Architecture.
- The rest of the NCCoE "Software Supply Chain and DevOps Security Practices" project documentation.

## Linked entities and concepts

**Entities:**

- NIST NCCoE — publisher (US standards body). Dangling (single-source; promote on a second NIST source).

**Concepts promoted / touched:** [[devsecops]] (standards anchor), [[devops]], [[strategic-risk-management]].

## Source-to-source relationships

- `supports` → [[2023-03-10-redhat-what-is-devsecops]] (formalises the shift-left DevSecOps lifecycle into a NIST-SSDF reference model).
