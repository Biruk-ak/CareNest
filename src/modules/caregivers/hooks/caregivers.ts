'use client';

import { useCallback, useEffect, useState, useTransition } from 'react';
import type { CaregiversCreateInput, CaregiversFilter, CaregiversRecord, CaregiversSummary, CaregiversUpdateInput } from '../types/caregivers';

async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, { ...init, headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) } });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<T>;
}

export function useCaregiversList(initialFilter: CaregiversFilter = {}) {
  const [filter, setFilter] = useState<CaregiversFilter>(initialFilter);
  const [items, setItems] = useState<CaregiversRecord[]>([]);
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
      fetchJson<{ items: CaregiversRecord[]; total: number }>(`/api/caregivers?` + params.toString())
        .then((data) => { setItems(data.items); setTotal(data.total); setError(null); })
        .catch((e: Error) => setError(e.message))
        .finally(() => setLoading(false));
    });
  }, [filter]);

  useEffect(() => { reload(); }, [reload]);

  return { items, total, loading: loading || pending, error, filter, setFilter, reload };
}

export function useCaregiversSummary() {
  const [summary, setSummary] = useState<CaregiversSummary | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchJson<CaregiversSummary>(`/api/caregivers/summary`)
      .then(setSummary)
      .catch(() => setSummary(null))
      .finally(() => setLoading(false));
  }, []);
  return { summary, loading };
}

export function useCaregiversMutations() {
  const [busy, setBusy] = useState(false);
  const create = useCallback(async (input: CaregiversCreateInput) => {
    setBusy(true);
    try {
      return await fetchJson<CaregiversRecord>(`/api/caregivers`, { method: 'POST', body: JSON.stringify(input) });
    } finally {
      setBusy(false);
    }
  }, []);
  const update = useCallback(async (input: CaregiversUpdateInput) => {
    setBusy(true);
    try {
      return await fetchJson<CaregiversRecord>(`/api/caregivers/${input.id}`, { method: 'PATCH', body: JSON.stringify(input) });
    } finally {
      setBusy(false);
    }
  }, []);
  return { create, update, busy };
}

export function useCaregiversInsight1(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/1`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight2(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/2`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight3(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/3`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight4(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/4`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight5(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/5`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight6(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/6`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight7(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/7`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight8(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/8`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight9(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/9`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight10(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/10`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight11(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/11`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight12(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/12`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight13(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/13`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight14(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/14`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight15(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/15`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight16(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/16`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight17(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/17`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight18(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/18`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight19(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/19`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight20(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/20`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight21(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/21`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight22(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/22`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight23(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/23`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useCaregiversInsight24(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/caregivers/${id}/insight/24`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}
