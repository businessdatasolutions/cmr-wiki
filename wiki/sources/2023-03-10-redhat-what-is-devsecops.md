---
type: source
kind: article
title: "What is DevSecOps?"
author:
  - "Red Hat"
url: "https://www.redhat.com/en/topics/devops/what-is-devsecops"
date_published: 2023-03-10
length: "~6 pages (full Red Hat explainer; published date stated on page)"
venue: "Red Hat — Topics / Security"
citation_key: "redhat_2023_what_is_devsecops"
raw: "../../raw/articles/what-is-devsecops.md"
pdf: "../../raw/articles/What is DevSecOps_.pdf"
confidence: 0.75
last_confirmed: 2026-06-07
accessed_at: 2026-06-07
source_count: 1
tags:
  - devsecops
  - shift-left
  - software-supply-chain
  - containers
  - platform-engineering
dynamic_capabilities:
  - digital-transforming/improving-digital-maturity
  - digital-transforming/redesigning-internal-structures
relationships:
  - type: supports
    target: 2026-06-07-gitlab-what-is-devsecops
    via: "both define DevSecOps as security shifted-left into the DevOps lifecycle; complementary vendor treatments"
---

# What is DevSecOps? — Red Hat

> DevSecOps stands for development, security, and operations. It's an approach to culture, automation, and platform design that integrates security as a shared responsibility throughout the entire IT lifecycle.

(Red Hat's definition — the canonical "shared responsibility throughout the entire IT lifecycle" framing.)

## TL;DR

DevSecOps integrates **security as a shared responsibility** across the whole DevOps lifecycle, rather than bolting it on at the end (which would undo DevOps' speed gains). Key ideas: **shift left** (security from planning/build) **and shift right** (testing/QA/monitoring in production); **built-in, not perimeter, security**; automate security gates so the pipeline doesn't slow; secure the **software supply chain** (open-source components, dependencies); and adapt to **containers and microservices** (continuous, integrated security — not static checklists). Notes that **platform engineering** (internal developer platforms) can facilitate DevSecOps adoption.

A primary anchor for the [[devsecops]] concept.

## What was actually ingested — honest scoping

Full Red Hat explainer read (**Published March 10, 2023**, stated on page). Publisher inferred from the page's wording/format and confirmed by Red Hat product references (Advanced Cluster Security, Trusted Software Supply Chain). Vendor source; confidence 0.75.

## Citation

**APA (7th edition):**

> Red Hat. (2023, March 10). *What is DevSecOps?* https://www.redhat.com/en/topics/devops/what-is-devsecops

## Results (WHAT)

- **DevSecOps vs DevOps:** security must be an integrated role across the full app lifecycle; the old "security as a final-stage team" model breaks under DevOps' rapid cycles.
- **Shift left + shift right:** prioritise security from planning through runtime; developer-friendly guardrails at build/deploy + post-production testing/QA/performance.
- **Built-in security:** invite security in at the outset; help developers code securely; identify **software-supply-chain** risks (open-source components/dependencies) early; train developers in security; determine risk tolerance + risk/benefit per app.
- **Automated:** automate across source control, container registries, CI/CD, API management, orchestration/release automation, monitoring.
- **For containers/microservices:** environment & data security (least privilege, centralized IAM, container isolation, encryption, secure API gateways) and CI/CD-process security (container scanners, automated security testing/SAST, scanning pre-built images, automated patching/config management).
- **Platform engineering vs DevOps:** platform engineering provides reusable tools/services via an **internal developer platform (IDP)** and can facilitate DevSecOps + a secure supply chain.

## Visual content

> No data visuals in source (an embedded video was privacy-blocked). Illustrative section imagery only. (`> No load-bearing visuals in source.`)

## Dynamic-capabilities reading

Tagged **`digital-transforming/improving-digital-maturity`** (adopting DevSecOps is a security-maturity uplift across the lifecycle) and **`digital-transforming/redesigning-internal-structures`** (making security a *shared responsibility* dissolves the separate security silo — a structural redesign). Role-relevance inherits those cells (`cto, cio, cdo, ceo, transformation-lead, tech-lead`).

## Discussion / Significance (SO WHAT)

A core anchor for [[devsecops]] alongside the [[2026-06-07-gitlab-what-is-devsecops|GitLab]] treatment and the [[nist-devsecops-reference-model|NIST reference model]]. The shift-left/shift-right framing and the software-supply-chain emphasis are the through-lines of the DevSecOps cluster. Platform engineering / IDPs are flagged here as an emerging adjacent discipline (candidate for a future concept). Connects to [[devops]] (the lifecycle DevSecOps secures) and [[strategic-risk-management]] (supply-chain/security risk).

**Limitations:** vendor explainer (Red Hat product framing); single-vendor perspective.

## Linked entities and concepts

**Entities:**

- Red Hat — publisher. Dangling (single-source; promote on a second Red Hat source).

**Concepts promoted / touched:** [[devsecops]] (anchor), [[devops]], [[strategic-risk-management]].

## Source-to-source relationships

- `supports` → [[2026-06-07-gitlab-what-is-devsecops]] (complementary DevSecOps definition).
