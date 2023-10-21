'use client';

import { useCallback, useEffect, useState, useTransition } from 'react';
import type { ResidentsCreateInput, ResidentsFilter, ResidentsRecord, ResidentsSummary, ResidentsUpdateInput } from '../types/residents';

async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, { ...init, headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) } });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<T>;
}

export function useResidentsList(initialFilter: ResidentsFilter = {}) {
  const [filter, setFilter] = useState<ResidentsFilter>(initialFilter);
  const [items, setItems] = useState<ResidentsRecord[]>([]);
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
      fetchJson<{ items: ResidentsRecord[]; total: number }>(`/api/residents?` + params.toString())
        .then((data) => { setItems(data.items); setTotal(data.total); setError(null); })
        .catch((e: Error) => setError(e.message))
        .finally(() => setLoading(false));
    });
  }, [filter]);

  useEffect(() => { reload(); }, [reload]);

  return { items, total, loading: loading || pending, error, filter, setFilter, reload };
}

export function useResidentsSummary() {
  const [summary, setSummary] = useState<ResidentsSummary | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchJson<ResidentsSummary>(`/api/residents/summary`)
      .then(setSummary)
      .catch(() => setSummary(null))
      .finally(() => setLoading(false));
  }, []);
  return { summary, loading };
}

export function useResidentsMutations() {
  const [busy, setBusy] = useState(false);
  const create = useCallback(async (input: ResidentsCreateInput) => {
    setBusy(true);
    try {
      return await fetchJson<ResidentsRecord>(`/api/residents`, { method: 'POST', body: JSON.stringify(input) });
    } finally {
      setBusy(false);
    }
  }, []);
  const update = useCallback(async (input: ResidentsUpdateInput) => {
    setBusy(true);
    try {
      return await fetchJson<ResidentsRecord>(`/api/residents/${input.id}`, { method: 'PATCH', body: JSON.stringify(input) });
    } finally {
      setBusy(false);
    }
  }, []);
  return { create, update, busy };
}

export function useResidentsInsight1(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/1`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight2(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/2`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight3(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/3`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight4(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/4`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight5(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/5`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight6(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/6`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight7(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/7`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight8(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/8`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight9(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/9`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight10(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/10`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight11(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/11`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight12(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/12`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight13(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/13`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight14(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/14`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight15(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/15`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight16(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/16`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight17(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/17`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight18(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/18`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight19(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/19`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight20(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/20`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight21(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/21`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight22(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/22`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight23(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/23`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useResidentsInsight24(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/residents/${id}/insight/24`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}
