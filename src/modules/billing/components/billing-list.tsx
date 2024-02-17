'use client';

import Link from 'next/link';
import { useBillingList, useBillingSummary } from '@/modules/billing/hooks/billing';
import { formatBillingHeadline } from '@/modules/billing/formatters/billing';

export function BillingListPanel() {
  const { items, total, loading, error, setFilter, reload } = useBillingList({ page: 1, pageSize: 20 });
  const { summary } = useBillingSummary();

  return (
    <section className="cn-panel p-6 space-y-5">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nest-500">Billing</p>
          <h2 className="font-display text-2xl text-nest-900">Billing workspace</h2>
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

      {loading && <p className="text-sm text-nest-600">Loading billing records…</p>}
      {error && <p className="text-sm text-alert-hard">{error}</p>}

      <ul className="divide-y divide-nest-100">
        {items.map((item) => (
          <li key={item.id} className="py-3 flex items-start justify-between gap-4">
            <div>
              <Link href={`/app/billing/${item.id}`} className="font-semibold text-nest-800 hover:text-nest-600">
                {formatBillingHeadline(item)}
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
export function BillingAccentChip1({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 1</span>;
}

export function BillingAccentChip2({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 2</span>;
}

export function BillingAccentChip3({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 3</span>;
}

export function BillingAccentChip4({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 4</span>;
}

export function BillingAccentChip5({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 5</span>;
}

export function BillingAccentChip6({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 6</span>;
}

export function BillingAccentChip7({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 7</span>;
}

export function BillingAccentChip8({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 8</span>;
}

export function BillingAccentChip9({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 9</span>;
}

export function BillingAccentChip10({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 10</span>;
}

export function BillingAccentChip11({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 11</span>;
}

export function BillingAccentChip12({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 12</span>;
}

export function BillingAccentChip13({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 13</span>;
}

export function BillingAccentChip14({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 14</span>;
}

export function BillingAccentChip15({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 15</span>;
}

export function BillingAccentChip16({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 16</span>;
}

export function BillingAccentChip17({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 17</span>;
}

export function BillingAccentChip18({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 18</span>;
}

export function BillingAccentChip19({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 19</span>;
}

export function BillingAccentChip20({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 20</span>;
}

export function BillingAccentChip21({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 21</span>;
}

export function BillingAccentChip22({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 22</span>;
}

export function BillingAccentChip23({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 23</span>;
}

export function BillingAccentChip24({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 24</span>;
}

export function BillingAccentChip25({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 25</span>;
}

export function BillingAccentChip26({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 26</span>;
}

export function BillingAccentChip27({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 27</span>;
}

export function BillingAccentChip28({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 28</span>;
}

export function BillingAccentChip29({ label }: { label: string }) {
  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{label} · 29</span>;
}
