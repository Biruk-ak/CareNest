# Contributing to CareNest

Thanks for your interest in improving **CareNest**, the Senior Care Management Platform. This guide explains how to set up the project, make changes, and submit pull requests.

## Code of conduct

Be respectful in issues and pull requests. Focus feedback on the code and product outcomes. Do not share real patient data or PHI in issues, screenshots, or sample payloads — use synthetic seed data only.

## Ways to contribute

- Report bugs with the **Bug report** issue template
- Propose features with the **Feature request** template
- Improve documentation (README, CONTRIBUTING, comments)
- Fix bugs or implement enhancements via pull requests
- Add or harden tests under `src/modules/**/__tests__`

## Development setup

### 1. Fork and clone

```bash
git clone git@github.com:Biruk-ak/CareNest.git
cd CareNest
```

If you forked the repo, clone your fork and add the upstream remote:

```bash
git remote add upstream git@github.com:Biruk-ak/CareNest.git
```

### 2. Install dependencies

Requires **Node.js 20+**.

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

App: [http://localhost:3000](http://localhost:3000)

### 4. Quality checks

Run these before opening a PR:

```bash
npm run typecheck
npm run lint
npm test
```

Optional Docker stack:

```bash
docker compose up --build
```

## Branching

1. Sync `main` with the latest upstream changes
2. Create a descriptive branch:

```bash
git checkout main
git pull origin main
git checkout -b fix/medication-filter-pagination
# or
git checkout -b feat/reports-export-csv
```

Branch naming suggestions:

| Prefix | Use |
|--------|-----|
| `fix/` | Bug fixes |
| `feat/` | New features |
| `docs/` | Documentation only |
| `chore/` | Tooling, deps, cleanup |
| `refactor/` | Internal restructuring |

## Making changes

- Keep PRs focused: one concern per PR when practical
- Match existing TypeScript, React, and Tailwind patterns under `src/modules/`
- Prefer extending an existing module (types → validators → service → API → UI) over one-off pages
- Do not commit secrets (`.env`, API keys, credentials)
- Do not commit `node_modules/`, `.next/`, or local IDE junk (see `.gitignore`)

## Commit messages

Write clear, imperative subject lines:

```text
fix: correct medication list priority filter
feat: add CSV export to reports summary
docs: expand Docker usage in README
```

Explain *why* in the body when the change is non-obvious.

## Pull requests

1. Push your branch:

```bash
git push -u origin HEAD
```

2. Open a PR against `Biruk-ak/CareNest` `main`
3. Fill out the **pull request template** (`.github/pull_request_template.md`)
4. Link related issues (`Closes #123`)
5. Ensure CI / local checks pass (`typecheck`, `lint`, `test`)

### What reviewers look for

- Correctness and edge cases (empty lists, invalid payloads)
- Type safety (no unnecessary `any`)
- UI consistency with CareNest shell / Tailwind tokens
- Tests or a clear reason they are not applicable
- No unrelated renames or formatting noise

## Issues

- Search existing issues before opening a new one
- Use templates under `.github/ISSUE_TEMPLATE/`
- Include steps to reproduce for bugs; include motivation and proposed UX for features

## Project map (quick)

| Path | Role |
|------|------|
| `src/app/` | Routes, layouts, API handlers |
| `src/modules/<domain>/` | Domain logic, UI, tests |
| `src/components/` | Shared shell components |
| `docker-compose.yml` | Web + DB local stack |

## Questions

Open a GitHub issue with the question label context in the body, or contact the maintainer:

**Biruk-ak** — birukaklilu0110@gmail.com

Thank you for helping CareNest serve care teams better.
