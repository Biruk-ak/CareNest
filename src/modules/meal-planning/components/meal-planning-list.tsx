'use client';

import Link from 'next/link';
import { useMealPlanningList, useMealPlanningSummary } from '@/modules/meal-planning/hooks/meal-planning';
import { formatMealPlanningHeadline } from '@/modules/meal-planning/formatters/meal-planning';

export function MealPlanningListPanel() {
  const { items, total, loading, error, setFilter, reload } = useMealPlanningList({ page: 1, pageSize: 20 });
  const { summary } = useMealPlanningSummary();

  return (
    <section className="cn-panel p-6 space-y-5">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nest-500">MealPlanning</p>
          <h2 className="font-display text-2xl text-nest-900">MealPlanning workspace</h2>
        </div>
        <div className="flex gap-2">
          <button type="button" className="cn-btn-ghost" onClick={() => setFilter((f) => ({ ...f, priority: ["critical", "high"] }))}>Critical</button>
          <button type="button" className="cn-btn-ghost" onClick={() => setFilter({ page: 1, pageSize: 20 })}>Reset</button>
          <button type="button" className="cn-btn" onClick={reload}>Refresh</button>
        </div>
      </header>

      {summary && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <Stat label="Total" value={summary.total} />
          <Stat label="Active" value={summary.active} />
          <Stat label="Critical" value={summary.critical} />
          <Stat label="Done (7d)" value={summary.completedThisWeek} />
          <Stat label="Overdue" value={summary.overdue} />
        </div>
      )}

      {loading && <p className="text-sm text-nest-600">Loading meal-planning records…</p>}
      {error && <p className="text-sm text-alert-hard">{error}</p>}

      <ul className="divide-y divide-nest-100">
        {items.map((item) => (
          <li key={item.id} className="py-3 flex items-start justify-between gap-4">
            <div>
              <Link href={`/app/meal-planning/${item.id}`} className="font-semibold text-nest-800 hover:text-nest-600">
                {formatMealPlanningHeadline(item)}
              </Link>
              <p className="text-sm text-nest-600 mt-1 line-clamp-2">{item.description}</p>
              <p className="text-xs text-nest-500 mt-1">{item.tags.join(" · ")}</p>
            </div>
            <span className="text-xs font-medium uppercase tracking-wide text-nest-500">{item.status}</span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-nest-500">{total} records</p>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl bg-nest-50 px-3 py-2">
      <p className="text-[11px] uppercase tracking-wide text-nest-500">{label}</p>
      <p className="text-lg font-semibold text-nest-900">{value}</p>
    </div>
  );
}
export function MealPlanningAccentChip1({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 1</span>;
}

export function MealPlanningAccentChip2({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 2</span>;
}

export function MealPlanningAccentChip3({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 3</span>;
}

export function MealPlanningAccentChip4({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 4</span>;
}

export function MealPlanningAccentChip5({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 5</span>;
}

export function MealPlanningAccentChip6({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 6</span>;
}

export function MealPlanningAccentChip7({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 7</span>;
}

export function MealPlanningAccentChip8({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 8</span>;
}

export function MealPlanningAccentChip9({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 9</span>;
}

export function MealPlanningAccentChip10({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 10</span>;
}

export function MealPlanningAccentChip11({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 11</span>;
}

export function MealPlanningAccentChip12({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 12</span>;
}

export function MealPlanningAccentChip13({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 13</span>;
}

export function MealPlanningAccentChip14({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 14</span>;
}

export function MealPlanningAccentChip15({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 15</span>;
}

export function MealPlanningAccentChip16({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 16</span>;
}

export function MealPlanningAccentChip17({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 17</span>;
}

export function MealPlanningAccentChip18({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 18</span>;
}

export function MealPlanningAccentChip19({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 19</span>;
}

export function MealPlanningAccentChip20({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 20</span>;
}

export function MealPlanningAccentChip21({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 21</span>;
}

export function MealPlanningAccentChip22({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 22</span>;
}

export function MealPlanningAccentChip23({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 23</span>;
}

export function MealPlanningAccentChip24({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 24</span>;
}

export function MealPlanningAccentChip25({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 25</span>;
}

export function MealPlanningAccentChip26({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 26</span>;
}

export function MealPlanningAccentChip27({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 27</span>;
}

export function MealPlanningAccentChip28({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 28</span>;
}

export function MealPlanningAccentChip29({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 29</span>;
}
