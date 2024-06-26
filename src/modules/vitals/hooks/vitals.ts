'use client';

import { useCallback, useEffect, useState, useTransition } from 'react';
import type { VitalsCreateInput, VitalsFilter, VitalsRecord, VitalsSummary, VitalsUpdateInput } from '../types/vitals';

async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, { ...init, headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) } });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<T>;
}

export function useVitalsList(initialFilter: VitalsFilter = {}) {
  const [filter, setFilter] = useState<VitalsFilter>(initialFilter);
  const [items, setItems] = useState<VitalsRecord[]>([]);
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
      fetchJson<{ items: VitalsRecord[]; total: number }>(`/api/vitals?` + params.toString())
        .then((data) => { setItems(data.items); setTotal(data.total); setError(null); })
        .catch((e: Error) => setError(e.message))
        .finally(() => setLoading(false));
    });
  }, [filter]);

  useEffect(() => { reload(); }, [reload]);

  return { items, total, loading: loading || pending, error, filter, setFilter, reload };
}

export function useVitalsSummary() {
  const [summary, setSummary] = useState<VitalsSummary | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchJson<VitalsSummary>(`/api/vitals/summary`)
      .then(setSummary)
      .catch(() => setSummary(null))
      .finally(() => setLoading(false));
  }, []);
  return { summary, loading };
}

export function useVitalsMutations() {
  const [busy, setBusy] = useState(false);
  const create = useCallback(async (input: VitalsCreateInput) => {
    setBusy(true);
    try {
      return await fetchJson<VitalsRecord>(`/api/vitals`, { method: 'POST', body: JSON.stringify(input) });
    } finally {
      setBusy(false);
    }
  }, []);
  const update = useCallback(async (input: VitalsUpdateInput) => {
    setBusy(true);
    try {
      return await fetchJson<VitalsRecord>(`/api/vitals/${input.id}`, { method: 'PATCH', body: JSON.stringify(input) });
    } finally {
      setBusy(false);
    }
  }, []);
  return { create, update, busy };
}

export function useVitalsInsight1(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/1`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight2(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/2`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight3(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/3`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight4(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/4`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight5(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/5`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight6(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/6`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight7(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/7`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight8(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/8`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight9(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/9`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight10(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/10`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight11(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/11`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight12(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/12`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight13(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/13`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight14(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/14`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight15(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/15`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight16(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/16`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight17(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/17`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight18(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/18`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight19(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/19`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight20(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/20`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight21(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/21`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight22(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/22`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight23(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/23`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useVitalsInsight24(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/vitals/${id}/insight/24`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}
