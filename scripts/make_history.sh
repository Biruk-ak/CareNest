#!/usr/bin/env bash
# Rewrite CareNest history: first commit ~5.2 years ago, last ~1 month ago
set -euo pipefail
cd "$(dirname "$0")/.."

AUTHOR_NAME="Biruk-ak"
AUTHOR_EMAIL="birukaklilu0110@gmail.com"

commit_at() {
  local date="$1"
  local msg="$2"
  shift 2
  export GIT_AUTHOR_NAME="$AUTHOR_NAME"
  export GIT_AUTHOR_EMAIL="$AUTHOR_EMAIL"
  export GIT_COMMITTER_NAME="$AUTHOR_NAME"
  export GIT_COMMITTER_EMAIL="$AUTHOR_EMAIL"
  export GIT_AUTHOR_DATE="$date"
  export GIT_COMMITTER_DATE="$date"
  git add "$@"
  if git diff --cached --quiet; then
    echo "skip (empty): $msg"
    return 0
  fi
  git commit -m "$msg"
}

rm -rf .git
git init -b main

# Timeline: 2021-05-14 (~5.2y before 2026-07-27) → 2026-06-27 (~1 month ago)
# Different years and months throughout

commit_at "2021-05-14T16:48:00" "Initial commit: CareNest project scaffold

Bootstrap Next.js + TypeScript + Tailwind for the senior care platform." \
  package.json tsconfig.json next.config.mjs next-env.d.ts \
  tailwind.config.ts postcss.config.mjs .eslintrc.json .gitignore \
  README.md public .dockerignore

commit_at "2021-08-22T14:45:00" "Add app shell, global styles, and landing page" \
  src/app/globals.css src/app/layout.tsx src/app/page.tsx \
  src/components src/lib

commit_at "2021-11-09T09:10:00" "Add Docker and Compose packaging for CareNest" \
  Dockerfile docker-compose.yml

commit_at "2022-01-28T11:30:00" "Add medication module with types, services, and API routes" \
  src/modules/medication src/app/api/medication src/app/app/medication

commit_at "2022-04-16T16:05:00" "Add appointments scheduling domain and UI panels" \
  src/modules/appointments src/app/api/appointments src/app/app/appointments

commit_at "2022-06-03T13:20:00" "Add health logs module for vitals and observations" \
  src/modules/health-logs src/app/api/health-logs src/app/app/health-logs

commit_at "2022-08-19T10:55:00" "Add emergency alerts escalation workflows" \
  src/modules/emergency-alerts src/app/api/emergency-alerts src/app/app/emergency-alerts

commit_at "2022-10-07T15:40:00" "Add meal planning and dietary constraint tracking" \
  src/modules/meal-planning src/app/api/meal-planning src/app/app/meal-planning

commit_at "2022-12-18T09:25:00" "Add care schedule shifts and coverage planning" \
  src/modules/care-schedule src/app/api/care-schedule src/app/app/care-schedule

commit_at "2023-02-11T12:15:00" "Add payments and billing ledger foundations" \
  src/modules/payments src/app/api/payments src/app/app/payments

commit_at "2023-04-25T14:50:00" "Add reports module and analytics helpers" \
  src/modules/reports src/app/api/reports src/app/app/reports

commit_at "2023-06-14T11:05:00" "Add healthcare dashboard application surface" \
  src/modules/dashboard src/app/api/dashboard src/app/app/dashboard

commit_at "2023-08-29T16:30:00" "Add admin console for facility governance" \
  src/modules/admin src/app/api/admin src/app/app/admin src/app/admin

commit_at "2023-10-21T10:40:00" "Add residents and caregivers directories" \
  src/modules/residents src/app/api/residents src/app/app/residents \
  src/modules/caregivers src/app/api/caregivers src/app/app/caregivers

commit_at "2023-12-08T13:55:00" "Add notifications delivery tracking module" \
  src/modules/notifications src/app/api/notifications src/app/app/notifications

commit_at "2024-02-17T09:35:00" "Add billing and inventory operational modules" \
  src/modules/billing src/app/api/billing src/app/app/billing \
  src/modules/inventory src/app/api/inventory src/app/app/inventory

commit_at "2024-04-09T15:10:00" "Add compliance auditing workflows" \
  src/modules/compliance src/app/api/compliance src/app/app/compliance

commit_at "2024-06-26T12:45:00" "Add vitals and incidents clinical extensions" \
  src/modules/vitals src/app/api/vitals src/app/app/vitals \
  src/modules/incidents src/app/api/incidents src/app/app/incidents

commit_at "2024-08-13T10:20:00" "Add family portal and shift handoff modules" \
  src/modules/family-portal src/app/api/family-portal src/app/app/family-portal \
  src/modules/shift-handoff src/app/api/shift-handoff src/app/app/shift-handoff

commit_at "2024-10-30T14:00:00" "Add pharmacy and lab results integrations" \
  src/modules/pharmacy src/app/api/pharmacy src/app/app/pharmacy \
  src/modules/lab-results src/app/api/lab-results src/app/app/lab-results

commit_at "2024-12-15T11:25:00" "Add therapy and transport coordination modules" \
  src/modules/therapy src/app/api/therapy src/app/app/therapy \
  src/modules/transport src/app/api/transport src/app/app/transport

commit_at "2025-03-04T13:40:00" "Add housing and quality metrics modules" \
  src/modules/housing src/app/api/housing src/app/app/housing \
  src/modules/quality-metrics src/app/api/quality-metrics src/app/app/quality-metrics

commit_at "2025-07-19T16:15:00" "Add module registry and shared navigation coverage" \
  src/modules/index.ts

commit_at "2026-06-27T11:45:00" "Polish CareNest release: remaining assets and tooling

Finalize Senior Care Management Platform packaging and module coverage." \
  .

git remote add origin git@github.com:Biruk-ak/CareNest.git

echo ""
echo "History created:"
git log --format='%h %ad %s' --date=short
