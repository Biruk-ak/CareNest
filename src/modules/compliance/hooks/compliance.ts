'use client';

import { useCallback, useEffect, useState, useTransition } from 'react';
import type { ComplianceCreateInput, ComplianceFilter, ComplianceRecord, ComplianceSummary, ComplianceUpdateInput } from '../types/compliance';

async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, { ...init, headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) } });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<T>;
}

export function useComplianceList(initialFilter: ComplianceFilter = {}) {
  const [filter, setFilter] = useState<ComplianceFilter>(initialFilter);
  const [items, setItems] = useState<ComplianceRecord[]>([]);
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
      fetchJson<{ items: ComplianceRecord[]; total: number }>(`/api/compliance?` + params.toString())
        .then((data) => { setItems(data.items); setTotal(data.total); setError(null); })
        .catch((e: Error) => setError(e.message))
        .finally(() => setLoading(false));
    });
  }, [filter]);

  useEffect(() => { reload(); }, [reload]);

  return { items, total, loading: loading || pending, error, filter, setFilter, reload };
}

export function useComplianceSummary() {
  const [summary, setSummary] = useState<ComplianceSummary | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchJson<ComplianceSummary>(`/api/compliance/summary`)
      .then(setSummary)
      .catch(() => setSummary(null))
      .finally(() => setLoading(false));
  }, []);
  return { summary, loading };
}

export function useComplianceMutations() {
  const [busy, setBusy] = useState(false);
  const create = useCallback(async (input: ComplianceCreateInput) => {
    setBusy(true);
    try {
      return await fetchJson<ComplianceRecord>(`/api/compliance`, { method: 'POST', body: JSON.stringify(input) });
    } finally {
      setBusy(false);
    }
  }, []);
  const update = useCallback(async (input: ComplianceUpdateInput) => {
    setBusy(true);
    try {
      return await fetchJson<ComplianceRecord>(`/api/compliance/${input.id}`, { method: 'PATCH', body: JSON.stringify(input) });
    } finally {
      setBusy(false);
    }
  }, []);
  return { create, update, busy };
}

export function useComplianceInsight1(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/1`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight2(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/2`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight3(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/3`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight4(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/4`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight5(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/5`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight6(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/6`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight7(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/7`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight8(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/8`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight9(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/9`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight10(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/10`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight11(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/11`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight12(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/12`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight13(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/13`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight14(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/14`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight15(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/15`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight16(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/16`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight17(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/17`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight18(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/18`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight19(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/19`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight20(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/20`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight21(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/21`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight22(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/22`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight23(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/23`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}

export function useComplianceInsight24(id?: string) {
  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);
  useEffect(() => {
    if (!id) return;
    fetchJson<{ score: number; label: string; details: string[] }>(`/api/compliance/${id}/insight/24`)
      .then(setInsight)
      .catch(() => setInsight(null));
  }, [id]);
  return insight;
}
