'use client';

import { useCallback, useEffect, useState, useTransition } from 'react';
import type { IncidentsCreateInput, IncidentsFilter, IncidentsRecord, IncidentsSummary, IncidentsUpdateInput } from '../types/incidents';

async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, { ...init, headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) } });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<T>;
}

export function useIncidentsList(initialFilter: IncidentsFilter = {}) {
  const [filter, setFilter] = useState<IncidentsFilter>(initialFilter);
  const [items, setItems] = useState<IncidentsRecord[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const reload = useCallback(() => {
    startTransition(() => {
      setLoading(true);
      const params = new URLSearchParams();
      Object.entries(filter).forEach(([k, v]) => {
        if (v == null) return;
        params.set(k, Array.isArray(v) ? v.join(',') : String(v));
      });
      fetchJson<{ items: IncidentsRecord[]; total: number }>(`/api/incidents?` + params.toString())
        .then((data) => { setItems(data.items); setTotal(data.total); setError(null); })
        .catch((e: Error) => setError(e.message))
        .finally(() => setLoading(false));
    });
  }, [filter]);

  useEffect(() => { reload(); }, [reload]);

  return { items, total, loading: loading || pending, error, filter, setFilter, reload };
}

export function useIncidentsSummary() {
  const [summary, setSummary] = useState<IncidentsSummary | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchJson<IncidentsSummary>(`/api/incidents/summary`)
      .then(setSummary)
      .catch(() => setSummary(null))
      .finally(() => setLoading(false));
  }, []);
  return { summary, loading };
}

export function useIncidentsMutations() {
  const [busy, setBusy] = useState(false);
  const create = useCallback(async (input: IncidentsCreateInput) => {
    setBusy(true);
    try {
      return await fetchJson<IncidentsRecord>(`/api/incidents`, { method: 'POST', body: JSON.stringify(input) });
    } finally {
      setBusy(false);
    }
  }, []);
  const update = useCallback(async (input: IncidentsUpdateInput) => {
    setBusy(true);
    try {
      return await fetchJson<IncidentsRecord>(`/api/incidents/${input.id}`, { method: 'PATCH', body: JSON.stringify(input) });
    } finally {
      setBusy(false);
    }
  }, []);
  return { create, update, busy };
}

export function useIncidentsInsight1(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/1`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight2(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/2`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight3(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/3`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight4(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/4`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight5(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/5`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight6(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/6`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight7(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/7`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight8(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/8`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight9(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/9`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight10(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/10`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight11(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/11`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight12(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/12`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight13(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/13`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight14(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/14`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight15(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/15`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight16(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/16`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight17(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/17`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight18(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/18`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight19(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/19`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight20(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/20`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight21(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/21`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight22(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/22`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight23(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/23`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useIncidentsInsight24(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/incidents/${id}/insight/24`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}
