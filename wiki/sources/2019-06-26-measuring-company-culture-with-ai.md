---
type: source
kind: video
title: "Measuring Company Culture with AI"
author:
  - "MIT Sloan Management Review"
url: "https://www.youtube.com/watch?v=FLKnQ2anshQ"
date_published: 2019-06-26
length: "~1:20 minutes (manual transcript, 15 caption segments)"
venue: "MIT Sloan Management Review (YouTube)"
citation_key: "mitsmr_2019_measuring_culture_ai"
raw: "../../raw/videos/measuring-company-culture-with-ai.md"
confidence: 0.7
last_confirmed: 2026-06-07
accessed_at: 2026-06-07
source_count: 1
tags:
  - measuring-culture
  - natural-language-processing
  - culture-500
  - machine-learning
  - explainer
relationships:
  - type: supports
    target: 2020-09-01-culture-500-the-research
    via: "explains the human+ML NLP method that produces the Culture 500 measures"
---

# Measuring Company Culture with AI — MIT SMR (2019)

> Using machine learning, natural language processing, and MIT expertise, the Culture 500 algorithm is able to measure and rank corporate culture in a way that's never been possible before. Featuring: The Culture 500 Research Team — Donald Sull and Charlie Sull, cofounders of CultureX.

(MIT SMR's description.)

## TL;DR

A ~80-second explainer of the [[measuring-culture-with-nlp|CultureX NLP method]]. What distinguishes it is **accuracy through tight human–machine integration**: in typical NLP "the algorithm is in the driver's seat," but here human expertise + ML + NLP combine. The worked example: employees use *"fudge"* to mean integrity ("fudging the numbers") — except at **Dairy Queen**, where "fudge" means chocolate. The back-and-forth human review catches such **company-specific language** that machines alone miss. Over three years the team built **20,000+ highly precise terms** classifying text into **80+ culture-related values**, so the algorithm "reads employee reviews just like a human expert."

## What was actually ingested — honest scoping

Full ~1:20 **manual transcript** (15 segments). Short explainer; confidence 0.7.

## Citation

**APA (7th edition):**

> MIT Sloan Management Review. (2019, June 26). *Measuring company culture with AI* [Video]. YouTube. https://www.youtube.com/watch?v=FLKnQ2anshQ

## Results (WHAT)

The method's distinctive claim is **human-in-the-loop accuracy**: rather than letting an unsupervised algorithm assign topics, human experts iterate with the model to disambiguate context (the Dairy Queen "fudge" anomaly). Output: 20,000+ precise terms → 80+ culture values, at human-expert accuracy.

## Visual content

**Type:** motion-graphics explainer
**Recovery path:** described from transcript verbal cues; no frame capture.

Animated explainer illustrating the NLP pipeline and the "fudge → integrity vs chocolate (Dairy Queen)" disambiguation example; on-screen counts (20,000+ terms, 80+ values, 3 years). No data tables.

## Discussion / Significance (SO WHAT)

The methodological core of the culture cluster: it is the human+ML NLP pipeline that produces the [[big-9-cultural-values]] scores used by the [[2024-06-20-oreilly-2024-culture-archetypes-firm-performance|archetypes paper]] and the [[2021-09-16-ten-things-corporate-culture|10-elements article]]. The "context-specific language" point (Dairy Queen) is the argument for why generic sentiment analysis is insufficient.

## Linked entities and concepts

**Entities:**

- [[MIT-Sloan-Management-Review]] — channel. **Promoted this batch.**
- [[CultureX]], [[Donald-Sull]], [[Charles-Sull]] — research team. **Promoted this batch.**

**Concepts touched:** [[measuring-culture-with-nlp]] (the anchor), [[organizational-culture]], [[big-9-cultural-values]].

## Source-to-source relationships

- `supports` → [[2020-09-01-culture-500-the-research]] (the method behind the project's measures).
