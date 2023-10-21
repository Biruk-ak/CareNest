'use client';

import { useEffect, useState } from 'react';
import type { ResidentsRecord } from '@/modules/residents/types/residents';
import { useResidentsMutations } from '@/modules/residents/hooks/residents';

export function ResidentsDetailPanel({ id }: { id: string }) {
  const [record, setRecord] = useState<ResidentsRecord | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { update, busy } = useResidentsMutations();

  useEffect(() => {
    fetch(`/api/residents/${id}`)
      .then(async (r) => {
        if (!r.ok) throw new Error(await r.text());
        return r.json() as Promise<ResidentsRecord>;
      })
      .then(setRecord)
      .catch((e: Error) => setError(e.message));
  }, [id]);

  if (error) return <p className="text-alert-hard">{error}</p>;
  if (!record) return <p className="text-nest-600">Loading…</p>;

  return (
    <article className="cn-panel p-6 space-y-4">
      <header className="space-y-1">
        <p className="text-xs uppercase tracking-[0.2em] text-nest-500">Residents</p>
        <h1 className="font-display text-3xl text-nest-900">{record.title}</h1>
        <p className="text-nest-600">{record.description}</p>
      </header>
      <dl className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
        <Field label="Status" value={record.status} />
        <Field label="Priority" value={record.priority} />
        <Field label="Resident" value={record.residentId} />
        <Field label="Facility" value={record.facilityId} />
      </dl>
      <button
        type="button"
        className="cn-btn"
        disabled={busy}
        onClick={() => update({ id: record.id, status: 'completed' }).then(setRecord)}
      >
        Mark completed
      </button>
      <section className="space-y-2">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-nest-600">Notes</h2>
        <ul className="space-y-1">
          {record.notes.map((n) => (
            <li key={n} className="rounded-lg bg-nest-50 px-3 py-2 text-sm text-nest-800">{n}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-nest-500">{label}</dt>
      <dd className="font-medium text-nest-900">{value}</dd>
    </div>
  );
}

export function ResidentsSideNote1({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 1: {text}</p>;
}

export function ResidentsSideNote2({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 2: {text}</p>;
}

export function ResidentsSideNote3({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 3: {text}</p>;
}

export function ResidentsSideNote4({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 4: {text}</p>;
}

export function ResidentsSideNote5({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 5: {text}</p>;
}

export function ResidentsSideNote6({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 6: {text}</p>;
}

export function ResidentsSideNote7({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 7: {text}</p>;
}

export function ResidentsSideNote8({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 8: {text}</p>;
}

export function ResidentsSideNote9({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 9: {text}</p>;
}

export function ResidentsSideNote10({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 10: {text}</p>;
}

export function ResidentsSideNote11({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 11: {text}</p>;
}

export function ResidentsSideNote12({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 12: {text}</p>;
}

export function ResidentsSideNote13({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 13: {text}</p>;
}

export function ResidentsSideNote14({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 14: {text}</p>;
}

export function ResidentsSideNote15({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 15: {text}</p>;
}

export function ResidentsSideNote16({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 16: {text}</p>;
}

export function ResidentsSideNote17({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 17: {text}</p>;
}

export function ResidentsSideNote18({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 18: {text}</p>;
}

export function ResidentsSideNote19({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 19: {text}</p>;
}

export function ResidentsSideNote20({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 20: {text}</p>;
}

export function ResidentsSideNote21({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 21: {text}</p>;
}

export function ResidentsSideNote22({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 22: {text}</p>;
}

export function ResidentsSideNote23({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 23: {text}</p>;
}

export function ResidentsSideNote24({ text }: { text: string }) {
  return <p className="text-xs text-nest-500">Note 24: {text}</p>;
}
