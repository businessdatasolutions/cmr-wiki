---
type: source
kind: article
title: "What is DevSecOps?"
author:
  - "GitLab"
url: "https://about.gitlab.com/topics/devsecops/"
date_published: 2026-06-07
length: "~9 pages (full evergreen GitLab explainer; date_published = access date — page is undated/living)"
venue: "GitLab — Topics / DevSecOps"
citation_key: "gitlab_what_is_devsecops"
raw: "../../raw/articles/what-is-devsecops-gitlab.md"
pdf: "../../raw/articles/What is DevSecOps_GitLab.pdf"
confidence: 0.75
last_confirmed: 2026-06-07
accessed_at: 2026-06-07
source_count: 1
tags:
  - devsecops
  - shift-left
  - sast-dast
  - application-security
  - ci-cd
dynamic_capabilities:
  - digital-transforming/improving-digital-maturity
  - digital-transforming/redesigning-internal-structures
relationships:
  - type: supports
    target: 2023-03-10-redhat-what-is-devsecops
    via: "both define DevSecOps as shift-left security across the DevOps lifecycle; complementary vendor treatments"
---

# What is DevSecOps? — GitLab

> DevSecOps is a software development approach that integrates security practices into every stage of the DevOps lifecycle to deliver secure software faster.

(GitLab's framing.)

## TL;DR

GitLab frames DevSecOps as **shifting security left** into every DevOps phase, making it a **shared responsibility** across dev, ops, and security rather than a final gate. **Four fundamental requirements:** **Automation** (security scans/policy checks in CI/CD), **Collaboration** (a single source of truth for vulnerabilities/remediation), **Policy guardrails** (consistent enforcement matched to risk appetite/regulation), and **Visibility** (auditable who-changed-what end-to-end). Tooling includes **SAST** (static) and **DAST** (dynamic) application security testing. Cites *The Phoenix Project* as the DevOps genesis and the GitLab 2022 DevSecOps Survey (fewer than ⅓ of developers actually get scan results in their workflow; 47% report full test automation). Offers **5 practical steps** to build a DevSecOps culture.

A primary anchor for the [[devsecops]] concept.

## What was actually ingested — honest scoping

Full evergreen GitLab explainer read. **`date_published` = access date** — undated living page (references the 2022 survey; mentions agentic AI). Vendor source (GitLab markets an end-to-end DevSecOps platform); confidence 0.75.

## Citation

**APA (7th edition):**

> GitLab. (n.d.). *What is DevSecOps?* Retrieved June 7, 2026, from https://about.gitlab.com/topics/devsecops/

## Results (WHAT)

- **Principles:** shifting left (early security tests), automation (scans/policy in CI/CD), collaboration (break dev/sec/ops silos), continuous monitoring (detect/respond in production).
- **Four fundamental requirements:** **Automation**, **Collaboration**, **Policy guardrails**, **Visibility** — "getting the results to the right people, at the right time, with the right context… Scanning alone isn't enough."
- **Application security:** shift-left (find/fix early) + shift-right (protect IaC + apps in production); securing the SDLC itself.
- **Benefits:** proactively find/fix vulnerabilities; release secure software faster; keep pace with modern (cloud) development.
- **Right for you if:** dev/sec/ops are siloed; long cycles miss customer demand; migrating to cloud.
- **5 steps to a DevSecOps culture:** treat security pros as assets not bottlenecks; small iterative cycles; open collaboration/shared ownership; build audit-readiness into workflows; train everyone on security.
- **Survey (GitLab 2022):** most teams run SAST/DAST regularly, but <⅓ of developers get results in their workflow; 47% report full test automation.

## Visual content

> No data visuals in source — illustrative section imagery only. (`> No load-bearing visuals in source.`)

## Dynamic-capabilities reading

Tagged **`digital-transforming/improving-digital-maturity`** (the four requirements + 5-step culture path define a DevSecOps maturity uplift) and **`digital-transforming/redesigning-internal-structures`** (shared ownership of security across dev/sec/ops dissolves the security silo). Role-relevance inherits those cells (`cto, cio, cdo, ceo, transformation-lead, tech-lead`).

## Discussion / Significance (SO WHAT)

A core anchor for [[devsecops]] alongside [[2023-03-10-redhat-what-is-devsecops|Red Hat]] and the [[nist-devsecops-reference-model|NIST reference model]]. GitLab's **four-requirements** decomposition (automation / collaboration / policy guardrails / visibility) and the SAST/DAST tooling vocabulary are its distinctive contributions. The survey's "scanning isn't enough — devs don't get results in-workflow" finding is the load-bearing practitioner insight. Connects to [[devops]] and [[strategic-risk-management]] (security/compliance risk).

**Limitations:** vendor explainer (GitLab platform framing); undated; survey cited second-hand.

## Linked entities and concepts

**Entities:**

- GitLab — publisher. Dangling (single-source; promote on a second GitLab source).
- Gene Kim et al. (*The Phoenix Project*) — referenced. Dangling.

**Concepts promoted / touched:** [[devsecops]] (anchor), [[devops]], [[strategic-risk-management]].

## Source-to-source relationships

- `supports` → [[2023-03-10-redhat-what-is-devsecops]] (complementary DevSecOps definition).
