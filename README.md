# CareNest

**Senior Care Management Platform**

CareNest is a modern healthcare web application for senior care facilities. It helps caregivers, nurses, and administrators coordinate medication, appointments, health logs, emergency alerts, meal planning, care schedules, payments, and reporting — in one place.

Built for clarity on the floor and control in the office: a **Healthcare Dashboard** for day-to-day operations and an **Admin** console for facility governance.

---

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Docker](#docker)
- [Project structure](#project-structure)
- [Scripts](#scripts)
- [API overview](#api-overview)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Features

| Area | What you get |
|------|----------------|
| **Healthcare Dashboard** | Facility pulse, staffing signals, and operational overview |
| **Admin** | Users, roles, facilities, and governance controls |
| **Medication** | Schedules, reconciliation, and care-team workflows |
| **Appointments** | Clinician visits and scheduling windows |
| **Health Logs** | Observations, trends, and resident history |
| **Emergency Alerts** | Escalation paths and on-call routing |
| **Meal Planning** | Nutrition plans and dietary constraints |
| **Care Schedule** | Shifts, tasks, and coverage planning |
| **Payments** | Invoices, ledgers, and family billing |
| **Reports** | Operational and clinical reporting packs |

Additional modules include residents, caregivers, notifications, billing, inventory, compliance, vitals, incidents, pharmacy, lab results, therapy, transport, housing, and quality metrics.

---

## Tech stack

- **Language:** TypeScript
- **UI:** React 18 + Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Validation:** Zod
- **State / data:** Zustand, TanStack Query, React Hook Form
- **Charts:** Recharts
- **Containers:** Docker & Docker Compose
- **Database (Compose):** PostgreSQL 16

---

## Prerequisites

- Node.js **20+**
- npm **10+**
- Docker & Docker Compose (optional, for containerized runs)
- Git

---

## Installation

```bash
# Clone the repository
git clone git@github.com:Biruk-ak/CareNest.git
cd CareNest

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Type-check and lint before contributing:

```bash
npm run typecheck
npm run lint
```

---

## Usage

### Local development

```bash
npm run dev
```

Key routes after launch:

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/app/dashboard` | Healthcare dashboard |
| `/admin` | Admin console |
| `/app/medication` | Medication workspace |
| `/app/appointments` | Appointments |
| `/app/health-logs` | Health logs |
| `/app/emergency-alerts` | Emergency alerts |
| `/app/meal-planning` | Meal planning |
| `/app/care-schedule` | Care schedule |
| `/app/payments` | Payments |
| `/app/reports` | Reports |

### Example: list medication records via API

```bash
curl -s "http://localhost:3000/api/medication?page=1&pageSize=10" | jq
```

### Example: create a draft medication case

```bash
curl -s -X POST "http://localhost:3000/api/medication" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Morning antihypertensive review",
    "description": "Confirm dose timing with night shift notes.",
    "residentId": "resident-1",
    "priority": "high",
    "status": "draft"
  }' | jq
```

### Example: fetch a module summary

```bash
curl -s "http://localhost:3000/api/dashboard/summary" | jq
```

### Production build

```bash
npm run build
npm start
```

---

## Docker

Build and run the full Compose stack (web, API placeholder, Postgres):

```bash
docker compose up --build
```

Or build the web image alone:

```bash
npm run docker:build
# equivalent: docker build -t carenest:latest .
```

Stop services:

```bash
npm run docker:down
```

---

## Project structure

```text
CareNest/
├── .github/                 # Issue & PR templates
├── public/                  # Static assets
├── scripts/                 # Tooling / generators
├── src/
│   ├── app/                 # Next.js App Router (pages + API routes)
│   ├── components/          # Shared UI (shell, nav)
│   ├── lib/                 # Shared utilities
│   └── modules/             # Domain modules (medication, reports, …)
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

Each domain module typically includes types, validators, services, hooks, components, seeds, tasks, and API routes under `src/app/api/<module>`.

---

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start Next.js development server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint (Next.js config) |
| `npm run typecheck` | TypeScript `tsc --noEmit` |
| `npm test` | Run Vitest suites |
| `npm run docker:build` | Build Docker image |
| `npm run docker:up` | Compose up (detached) |
| `npm run docker:down` | Compose down |

---

## API overview

REST-style App Router handlers follow this pattern per module:

- `GET /api/<module>` — filtered list (query, status, priority, pagination)
- `POST /api/<module>` — create
- `GET /api/<module>/summary` — aggregate counts
- `GET /api/<module>/[id]` — fetch one
- `PATCH /api/<module>/[id]` — update
- `DELETE /api/<module>/[id]` — remove
- `GET /api/<module>/[id]/insight/[n]` — signal / insight helpers

Modules are seeded in-memory for local demos; wire persistence to Postgres (Compose service `carenest-db`) for production deployments.

---

## Contributing

We welcome improvements. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for clone, run, branch, and pull request guidelines. Use the issue and PR templates under `.github/`.

---

## License

Private / all rights reserved unless otherwise noted by the repository owner.

---

## Author

**Biruk-ak**  
Email: [birukaklilu0110@gmail.com](mailto:birukaklilu0110@gmail.com)  
GitHub: [github.com/Biruk-ak/CareNest](https://github.com/Biruk-ak/CareNest)
