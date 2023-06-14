# CareNest architecture

CareNest is a Next.js App Router application organized by **domain modules**.

## Layers

1. **UI** — `src/app/app/<module>` pages and `src/modules/<module>/components`
2. **Hooks** — client data fetching against `/api/<module>`
3. **API routes** — `src/app/api/<module>` (list, summary, CRUD, insights)
4. **Services** — validation (Zod) + in-memory stores + domain rules
5. **Shared shell** — `src/components/shell`, Tailwind design tokens

## Runtime

- Local demos use seeded in-memory stores
- Docker Compose provides Postgres for future persistence
- Production image uses Next.js `standalone` output

## Applications

- **Healthcare Dashboard** — operational overview (`/app/dashboard`)
- **Admin** — governance (`/admin`)
