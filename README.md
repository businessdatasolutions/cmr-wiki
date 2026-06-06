# CMR-Wiki

A static, statically-generated knowledge wiki ("digital garden") built with [Quartz](https://quartz.jzhao.xyz/). Markdown notes live under `wiki/` and are compiled to a browsable site. Content is organised into concepts, entities, sources, syntheses, threads, and artifacts, with per-page provenance and confidence metadata.

This repository is a fresh instance of the wiki *system* (schema, scripts, Quartz extensions, hooks, skills) — content is yet to be ingested. The schema and workflow contract live in [`CLAUDE.md`](CLAUDE.md).

## Structure

- `wiki/` — Markdown content (`concepts/`, `entities/`, `sources/`, `syntheses/`, `threads/`, `index.md`, `log.md`)
- `quartz/`, `quartz.config.ts`, `quartz.layout.ts` — Quartz generator and site config
- `extensions/` — custom Quartz plugins (type tags, aliases, stale banner, confidence badge, etc.)
- `scripts/`, `raw/` — ingestion scripts and source material (PDFs/binaries gitignored; markdown transcripts committed)
- `public/` — generated output (gitignored; built by Quartz)
- `docs/`, `CLAUDE.md`, `llm-wiki*.md` — design docs and working notes

## Run

Requires Node >= 22.

- `npm install` — install dependencies (first run only)
- `npm run serve` — build and serve the wiki locally with live reload at <http://localhost:8080>
- `npm run build` — build the static site into `public/`
- `npm run check` — TypeScript type-check

## Deploy

Pushes to `main` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the Quartz site and publishes it to GitHub Pages. In repo Settings → Pages, set the source to "GitHub Actions" before the first push.
