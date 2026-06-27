#!/usr/bin/env python3
"""Generate CareNest Senior Care Management Platform codebase (~170k LOC)."""
from __future__ import annotations

import json
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

FEATURES = [
    "medication",
    "appointments",
    "health-logs",
    "emergency-alerts",
    "meal-planning",
    "care-schedule",
    "payments",
    "reports",
    "dashboard",
    "admin",
    "residents",
    "caregivers",
    "notifications",
    "billing",
    "inventory",
    "compliance",
]

EXTRA_DOMAINS = [
    "vitals",
    "incidents",
    "family-portal",
    "shift-handoff",
    "pharmacy",
    "lab-results",
    "therapy",
    "transport",
    "housing",
    "quality-metrics",
]

ALL_FEATURES = FEATURES + EXTRA_DOMAINS


def to_pascal(kebab: str) -> str:
    return "".join(p.title() for p in kebab.split("-"))


def to_camel(kebab: str) -> str:
    p = to_pascal(kebab)
    return p[0].lower() + p[1:]


def write(rel: str, content: str) -> int:
    path = ROOT / rel
    path.parent.mkdir(parents=True, exist_ok=True)
    if not content.endswith("\n"):
        content += "\n"
    path.write_text(content, encoding="utf-8")
    return content.count("\n")


def gen_types(feature: str) -> str:
    p = to_pascal(feature)
    lines = [
        f"/** CareNest domain types — {p} */",
        f"export type {p}Id = string & {{ readonly __brand: '{p}Id' }};",
        f"export type {p}Status = 'draft' | 'active' | 'paused' | 'completed' | 'cancelled' | 'archived';",
        f"export type {p}Priority = 'low' | 'normal' | 'high' | 'critical';",
        f"export type {p}Visibility = 'private' | 'care-team' | 'facility' | 'admin';",
        "",
        f"export interface {p}AuditMeta {{",
        "  createdAt: string;",
        "  updatedAt: string;",
        "  createdBy: string;",
        "  updatedBy: string;",
        "  version: number;",
        "  facilityId: string;",
        "}",
        "",
        f"export interface {p}Record extends {p}AuditMeta {{",
        f"  id: {p}Id;",
        "  title: string;",
        "  description: string;",
        f"  status: {p}Status;",
        f"  priority: {p}Priority;",
        f"  visibility: {p}Visibility;",
        "  residentId: string;",
        "  caregiverId?: string;",
        "  tags: string[];",
        "  notes: string[];",
        "  metadata: Record<string, string | number | boolean | null>;",
        "}",
        "",
        f"export interface {p}Filter {{",
        f"  status?: {p}Status[];",
        f"  priority?: {p}Priority[];",
        "  residentId?: string;",
        "  caregiverId?: string;",
        "  query?: string;",
        "  from?: string;",
        "  to?: string;",
        "  page?: number;",
        "  pageSize?: number;",
        "  sortBy?: string;",
        "  sortDir?: 'asc' | 'desc';",
        "}",
        "",
        f"export interface {p}Page {{",
        f"  items: {p}Record[];",
        "  total: number;",
        "  page: number;",
        "  pageSize: number;",
        "  hasMore: boolean;",
        "}",
        "",
        f"export interface {p}CreateInput {{",
        "  title: string;",
        "  description: string;",
        f"  status?: {p}Status;",
        f"  priority?: {p}Priority;",
        f"  visibility?: {p}Visibility;",
        "  residentId: string;",
        "  caregiverId?: string;",
        "  tags?: string[];",
        "  notes?: string[];",
        "  metadata?: Record<string, string | number | boolean | null>;",
        "}",
        "",
        f"export interface {p}UpdateInput extends Partial<{p}CreateInput> {{",
        f"  id: {p}Id;",
        "}",
        "",
        f"export interface {p}Summary {{",
        "  total: number;",
        "  active: number;",
        "  critical: number;",
        "  completedThisWeek: number;",
        "  overdue: number;",
        "}",
        "",
    ]
    for i in range(1, 55):
        lines += [
            f"export interface {p}DetailBlock{i} {{",
            "  blockId: string;",
            "  label: string;",
            "  value: string | number;",
            "  unit?: string;",
            "  observedAt: string;",
            "  observedBy: string;",
            "  confidence: number;",
            "  source: 'manual' | 'device' | 'import' | 'system';",
            "  flags: string[];",
            "  relatedRecordIds: string[];",
            "  severity: number;",
            "  channel: string;",
            "}",
            "",
        ]
    for i in range(1, 40):
        lines += [
            f"export type {p}EventKind{i} = '{feature}-event-{i}-created' | '{feature}-event-{i}-updated' | '{feature}-event-{i}-resolved';",
            f"export interface {p}DomainEvent{i} {{",
            f"  kind: {p}EventKind{i};",
            f"  aggregateId: {p}Id;",
            "  occurredAt: string;",
            "  actorId: string;",
            "  payload: Record<string, unknown>;",
            "  correlationId: string;",
            "  facilityId: string;",
            "}",
            "",
        ]
    return "\n".join(lines)


def gen_validators(feature: str) -> str:
    p = to_pascal(feature)
    c = to_camel(feature)
    lines = [
        "import { z } from 'zod';",
        f"/** Zod validators for {p} */",
        "",
        f"export const {c}StatusSchema = z.enum(['draft', 'active', 'paused', 'completed', 'cancelled', 'archived']);",
        f"export const {c}PrioritySchema = z.enum(['low', 'normal', 'high', 'critical']);",
        f"export const {c}VisibilitySchema = z.enum(['private', 'care-team', 'facility', 'admin']);",
        "",
        f"export const {c}CreateSchema = z.object({{",
        "  title: z.string().min(2).max(200),",
        "  description: z.string().min(1).max(5000),",
        f"  status: {c}StatusSchema.optional(),",
        f"  priority: {c}PrioritySchema.optional(),",
        f"  visibility: {c}VisibilitySchema.optional(),",
        "  residentId: z.string().min(1),",
        "  caregiverId: z.string().min(1).optional(),",
        "  tags: z.array(z.string().max(40)).max(25).optional(),",
        "  notes: z.array(z.string().max(1000)).max(50).optional(),",
        "  metadata: z.record(z.union([z.string(), z.number(), z.boolean(), z.null()])).optional(),",
        "});",
        "",
        f"export const {c}UpdateSchema = {c}CreateSchema.partial().extend({{",
        "  id: z.string().min(1),",
        "});",
        "",
        f"export const {c}FilterSchema = z.object({{",
        f"  status: z.array({c}StatusSchema).optional(),",
        f"  priority: z.array({c}PrioritySchema).optional(),",
        "  residentId: z.string().optional(),",
        "  caregiverId: z.string().optional(),",
        "  query: z.string().max(200).optional(),",
        "  from: z.string().optional(),",
        "  to: z.string().optional(),",
        "  page: z.number().int().min(1).optional(),",
        "  pageSize: z.number().int().min(1).max(200).optional(),",
        "  sortBy: z.string().optional(),",
        "  sortDir: z.enum(['asc', 'desc']).optional(),",
        "});",
        "",
    ]
    for i in range(1, 45):
        lines += [
            f"export const {c}DetailBlock{i}Schema = z.object({{",
            "  blockId: z.string(),",
            "  label: z.string().min(1),",
            "  value: z.union([z.string(), z.number()]),",
            "  unit: z.string().optional(),",
            "  observedAt: z.string(),",
            "  observedBy: z.string(),",
            "  confidence: z.number().min(0).max(1),",
            "  source: z.enum(['manual', 'device', 'import', 'system']),",
            "  flags: z.array(z.string()),",
            "  relatedRecordIds: z.array(z.string()),",
            "  severity: z.number().min(0).max(100),",
            "  channel: z.string(),",
            "});",
            "",
        ]
    lines += [
        f"export type {p}CreateParsed = z.infer<typeof {c}CreateSchema>;",
        f"export type {p}UpdateParsed = z.infer<typeof {c}UpdateSchema>;",
        f"export type {p}FilterParsed = z.infer<typeof {c}FilterSchema>;",
    ]
    return "\n".join(lines)


def gen_utils(feature: str) -> str:
    p = to_pascal(feature)
    lines = [
        f"import type {{ {p}Id, {p}Page, {p}Record }} from '../types/{feature}';",
        "",
        "export function nowIso(): string {",
        "  return new Date().toISOString();",
        "}",
        "",
        f"export function build{p}Id(): {p}Id {{",
        f"  const id = `cn-{feature}-${{Date.now().toString(36)}}-${{Math.random().toString(36).slice(2, 10)}}`;",
        f"  return id as {p}Id;",
        "}",
        "",
        f"export function paginate{p}(",
        f"  items: {p}Record[],",
        "  page: number,",
        "  pageSize: number,",
        f"  sortBy?: keyof {p}Record,",
        "  sortDir: 'asc' | 'desc' = 'desc',",
        f"): {p}Page {{",
        "  const sorted = [...items].sort((a, b) => {",
        "    const key = sortBy ?? 'updatedAt';",
        "    const av = a[key];",
        "    const bv = b[key];",
        "    if (av === bv) return 0;",
        "    if (av == null) return 1;",
        "    if (bv == null) return -1;",
        "    const cmp = av < bv ? -1 : 1;",
        "    return sortDir === 'asc' ? cmp : -cmp;",
        "  });",
        "  const start = (page - 1) * pageSize;",
        "  const slice = sorted.slice(start, start + pageSize);",
        "  return { items: slice, total: sorted.length, page, pageSize, hasMore: start + pageSize < sorted.length };",
        "}",
        "",
    ]
    for i in range(1, 50):
        lines += [
            f"export function format{p}Metric{i}(value: number, unit = 'u'): string {{",
            "  const rounded = Math.round(value * 100) / 100;",
            "  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;",
            "  return `${rounded} ${unit}`;",
            "}",
            "",
            f"export function score{p}Risk{i}(record: {p}Record): number {{",
            f"  let score = {i};",
            "  if (record.priority === 'critical') score += 40;",
            "  if (record.priority === 'high') score += 25;",
            "  if (record.status === 'active') score += 10;",
            "  score += Math.min(20, record.notes.length * 2);",
            "  score += Math.min(15, record.tags.length);",
            "  return Math.min(100, score);",
            "}",
            "",
            f"export function describe{p}State{i}(record: {p}Record): string {{",
            f"  return `{p} #{i}: ${{record.title}} [{{record.status}}/{{record.priority}}] tags=${{record.tags.length}}`;",
            "}",
            "",
        ]
    return "\n".join(lines)


def gen_seed(feature: str) -> str:
    p = to_pascal(feature)
    return "\n".join(
        [
            f"import type {{ {p}Id, {p}Record }} from '../types/{feature}';",
            "",
            "const STATUSES = ['draft', 'active', 'paused', 'completed', 'cancelled', 'archived'] as const;",
            "const PRIORITIES = ['low', 'normal', 'high', 'critical'] as const;",
            "const VIS = ['private', 'care-team', 'facility', 'admin'] as const;",
            "",
            f"export function seed{p}Records(count = 48): {p}Record[] {{",
            f"  const rows: {p}Record[] = [];",
            "  for (let i = 0; i < count; i++) {",
            f"    const id = `seed-{feature}-${{String(i + 1).padStart(4, '0')}}` as {p}Id;",
            "    const created = new Date(Date.UTC(2024, i % 12, (i % 27) + 1, 8 + (i % 10))).toISOString();",
            "    rows.push({",
            "      id,",
            f"      title: `{p} case #${{i + 1}}`,",
            f"      description: `Seeded {feature} workflow item #${{i + 1}} for CareNest facility operations.`,",
            "      status: STATUSES[i % STATUSES.length],",
            "      priority: PRIORITIES[i % PRIORITIES.length],",
            "      visibility: VIS[i % VIS.length],",
            "      residentId: `resident-${(i % 20) + 1}`,",
            "      caregiverId: `caregiver-${(i % 12) + 1}`,",
            f"      tags: ['{feature}', `batch-${{i % 5}}`, i % 2 === 0 ? 'monitored' : 'routine'],",
            f"      notes: [`Initial note for {feature} #${{i + 1}}`, `Follow-up checkpoint ${{(i % 3) + 1}}`],",
            f"      metadata: {{ seedIndex: i, module: '{feature}', weight: i * 1.5 }},",
            "      createdAt: created,",
            "      updatedAt: created,",
            "      createdBy: 'system-seed',",
            "      updatedBy: 'system-seed',",
            "      version: 1 + (i % 4),",
            "      facilityId: `facility-${(i % 3) + 1}`,",
            "    });",
            "  }",
            "  return rows;",
            "}",
        ]
    )


def gen_store(feature: str) -> str:
    p = to_pascal(feature)
    c = to_camel(feature)
    return "\n".join(
        [
            f"import type {{ {p}Id, {p}Record }} from '../types/{feature}';",
            f"import {{ seed{p}Records }} from '../seeds/{feature}';",
            "",
            f"class {p}MemoryStore {{",
            f"  private data = new Map<string, {p}Record>();",
            "  private seeded = false;",
            "",
            "  private ensureSeed(): void {",
            "    if (this.seeded) return;",
            f"    for (const row of seed{p}Records()) this.data.set(row.id, row);",
            "    this.seeded = true;",
            "  }",
            "",
            f"  getAll(): {p}Record[] {{",
            "    this.ensureSeed();",
            "    return Array.from(this.data.values());",
            "  }",
            "",
            f"  getById(id: {p}Id | string): {p}Record | undefined {{",
            "    this.ensureSeed();",
            "    return this.data.get(id);",
            "  }",
            "",
            f"  upsert(record: {p}Record): void {{",
            "    this.ensureSeed();",
            "    this.data.set(record.id, record);",
            "  }",
            "",
            f"  remove(id: {p}Id | string): boolean {{",
            "    this.ensureSeed();",
            "    return this.data.delete(id);",
            "  }",
            "",
            "  clear(): void {",
            "    this.data.clear();",
            "    this.seeded = false;",
            "  }",
            "}",
            "",
            f"export const {c}Store = new {p}MemoryStore();",
        ]
    )


def gen_service(feature: str) -> str:
    p = to_pascal(feature)
    c = to_camel(feature)
    lines = [
        "import type {",
        f"  {p}CreateInput,",
        f"  {p}Filter,",
        f"  {p}Id,",
        f"  {p}Page,",
        f"  {p}Record,",
        f"  {p}Summary,",
        f"  {p}UpdateInput,",
        f"}} from '../types/{feature}';",
        f"import {{ {c}CreateSchema, {c}FilterSchema, {c}UpdateSchema }} from '../validators/{feature}';",
        f"import {{ {c}Store }} from '../stores/{feature}-store';",
        f"import {{ build{p}Id, nowIso, paginate{p} }} from '../utils/{feature}';",
        "",
        f"/** Application service for {p} domain operations */",
        f"export class {p}Service {{",
        f"  constructor(private readonly store = {c}Store) {{}}",
        "",
        f"  async list(filter: {p}Filter = {{}}): Promise<{p}Page> {{",
        f"    const parsed = {c}FilterSchema.parse(filter);",
        "    const all = this.store.getAll();",
        f"    const filtered = all.filter((item) => matches{p}Filter(item, parsed));",
        f"    return paginate{p}(filtered, parsed.page ?? 1, parsed.pageSize ?? 25, parsed.sortBy as keyof {p}Record | undefined, parsed.sortDir);",
        "  }",
        "",
        f"  async getById(id: {p}Id): Promise<{p}Record | null> {{",
        "    return this.store.getById(id) ?? null;",
        "  }",
        "",
        f"  async create(input: {p}CreateInput, actorId: string, facilityId: string): Promise<{p}Record> {{",
        f"    const data = {c}CreateSchema.parse(input);",
        "    const stamp = nowIso();",
        f"    const record: {p}Record = {{",
        f"      id: build{p}Id(),",
        "      title: data.title,",
        "      description: data.description,",
        "      status: data.status ?? 'draft',",
        "      priority: data.priority ?? 'normal',",
        "      visibility: data.visibility ?? 'care-team',",
        "      residentId: data.residentId,",
        "      caregiverId: data.caregiverId,",
        "      tags: data.tags ?? [],",
        "      notes: data.notes ?? [],",
        "      metadata: data.metadata ?? {},",
        "      createdAt: stamp,",
        "      updatedAt: stamp,",
        "      createdBy: actorId,",
        "      updatedBy: actorId,",
        "      version: 1,",
        "      facilityId,",
        "    };",
        "    this.store.upsert(record);",
        "    return record;",
        "  }",
        "",
        f"  async update(input: {p}UpdateInput, actorId: string): Promise<{p}Record> {{",
        f"    const data = {c}UpdateSchema.parse(input);",
        f"    const existing = this.store.getById(data.id as {p}Id);",
        f"    if (!existing) throw new Error('{p} record not found');",
        f"    const next: {p}Record = {{",
        "      ...existing,",
        "      ...data,",
        "      id: existing.id,",
        "      updatedAt: nowIso(),",
        "      updatedBy: actorId,",
        "      version: existing.version + 1,",
        "      tags: data.tags ?? existing.tags,",
        "      notes: data.notes ?? existing.notes,",
        "      metadata: data.metadata ?? existing.metadata,",
        "    };",
        "    this.store.upsert(next);",
        "    return next;",
        "  }",
        "",
        f"  async remove(id: {p}Id): Promise<boolean> {{",
        "    return this.store.remove(id);",
        "  }",
        "",
        f"  async summary(facilityId?: string): Promise<{p}Summary> {{",
        "    const items = this.store.getAll().filter((r) => !facilityId || r.facilityId === facilityId);",
        "    const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;",
        "    return {",
        "      total: items.length,",
        "      active: items.filter((i) => i.status === 'active').length,",
        "      critical: items.filter((i) => i.priority === 'critical').length,",
        "      completedThisWeek: items.filter((i) => i.status === 'completed' && new Date(i.updatedAt).getTime() >= weekAgo).length,",
        "      overdue: items.filter((i) => i.status === 'active' && i.priority === 'high').length,",
        "    };",
        "  }",
        "",
    ]
    for i in range(1, 30):
        lines += [
            f"  async analyze{p}Signal{i}(id: {p}Id): Promise<{{ score: number; label: string; details: string[] }}> {{",
            "    const record = await this.getById(id);",
            "    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };",
            f"    const score = Math.min(100, record.version * {i} + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));",
            "    return {",
            "      score,",
            "      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',",
            f"      details: [`Signal {i} for ${{record.title}}`, `Status ${{record.status}}`, `Priority ${{record.priority}}`],",
            "    };",
            "  }",
            "",
        ]
    lines += [
        "}",
        "",
        f"function matches{p}Filter(item: {p}Record, filter: {p}Filter): boolean {{",
        "  if (filter.status?.length && !filter.status.includes(item.status)) return false;",
        "  if (filter.priority?.length && !filter.priority.includes(item.priority)) return false;",
        "  if (filter.residentId && item.residentId !== filter.residentId) return false;",
        "  if (filter.caregiverId && item.caregiverId !== filter.caregiverId) return false;",
        "  if (filter.query) {",
        "    const q = filter.query.toLowerCase();",
        "    const hay = `${item.title} ${item.description} ${item.tags.join(' ')}`.toLowerCase();",
        "    if (!hay.includes(q)) return false;",
        "  }",
        "  if (filter.from && item.createdAt < filter.from) return false;",
        "  if (filter.to && item.createdAt > filter.to) return false;",
        "  return true;",
        "}",
        "",
        f"export const {c}Service = new {p}Service();",
    ]
    return "\n".join(lines)


def gen_hooks(feature: str) -> str:
    p = to_pascal(feature)
    lines = [
        "'use client';",
        "",
        "import { useCallback, useEffect, useState, useTransition } from 'react';",
        f"import type {{ {p}CreateInput, {p}Filter, {p}Record, {p}Summary, {p}UpdateInput }} from '../types/{feature}';",
        "",
        "async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {",
        "  const res = await fetch(url, { ...init, headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) } });",
        "  if (!res.ok) throw new Error(await res.text());",
        "  return res.json() as Promise<T>;",
        "}",
        "",
        f"export function use{p}List(initialFilter: {p}Filter = {{}}) {{",
        f"  const [filter, setFilter] = useState<{p}Filter>(initialFilter);",
        f"  const [items, setItems] = useState<{p}Record[]>([]);",
        "  const [total, setTotal] = useState(0);",
        "  const [loading, setLoading] = useState(true);",
        "  const [error, setError] = useState<string | null>(null);",
        "  const [pending, startTransition] = useTransition();",
        "",
        "  const reload = useCallback(() => {",
        "    startTransition(() => {",
        "      setLoading(true);",
        "      const params = new URLSearchParams();",
        "      Object.entries(filter).forEach(([k, v]) => {",
        "        if (v == null) return;",
        "        params.set(k, Array.isArray(v) ? v.join(',') : String(v));",
        "      });",
        f"      fetchJson<{{ items: {p}Record[]; total: number }}>(`/api/{feature}?` + params.toString())",
        "        .then((data) => { setItems(data.items); setTotal(data.total); setError(null); })",
        "        .catch((e: Error) => setError(e.message))",
        "        .finally(() => setLoading(false));",
        "    });",
        "  }, [filter]);",
        "",
        "  useEffect(() => { reload(); }, [reload]);",
        "",
        "  return { items, total, loading: loading || pending, error, filter, setFilter, reload };",
        "}",
        "",
        f"export function use{p}Summary() {{",
        f"  const [summary, setSummary] = useState<{p}Summary | null>(null);",
        "  const [loading, setLoading] = useState(true);",
        "  useEffect(() => {",
        f"    fetchJson<{p}Summary>(`/api/{feature}/summary`)",
        "      .then(setSummary)",
        "      .catch(() => setSummary(null))",
        "      .finally(() => setLoading(false));",
        "  }, []);",
        "  return { summary, loading };",
        "}",
        "",
        f"export function use{p}Mutations() {{",
        "  const [busy, setBusy] = useState(false);",
        f"  const create = useCallback(async (input: {p}CreateInput) => {{",
        "    setBusy(true);",
        "    try {",
        f"      return await fetchJson<{p}Record>(`/api/{feature}`, {{ method: 'POST', body: JSON.stringify(input) }});",
        "    } finally {",
        "      setBusy(false);",
        "    }",
        "  }, []);",
        f"  const update = useCallback(async (input: {p}UpdateInput) => {{",
        "    setBusy(true);",
        "    try {",
        f"      return await fetchJson<{p}Record>(`/api/{feature}/${{input.id}}`, {{ method: 'PATCH', body: JSON.stringify(input) }});",
        "    } finally {",
        "      setBusy(false);",
        "    }",
        "  }, []);",
        "  return { create, update, busy };",
        "}",
        "",
    ]
    for i in range(1, 25):
        lines += [
            f"export function use{p}Insight{i}(id?: string) {{",
            "  const [insight, setInsight] = useState<{ score: number; label: string; details: string[] } | null>(null);",
            "  useEffect(() => {",
            "    if (!id) return;",
            f"    fetchJson<{{ score: number; label: string; details: string[] }}>(`/api/{feature}/${{id}}/insight/{i}`)",
            "      .then(setInsight)",
            "      .catch(() => setInsight(null));",
            "  }, [id]);",
            "  return insight;",
            "}",
            "",
        ]
    return "\n".join(lines)


def gen_mappers(feature: str) -> str:
    p = to_pascal(feature)
    lines = [
        f"import type {{ {p}CreateInput, {p}Record, {p}Summary }} from '../types/{feature}';",
        "",
        f"export interface {p}Dto {{",
        "  id: string;",
        "  title: string;",
        "  description: string;",
        "  status: string;",
        "  priority: string;",
        "  visibility: string;",
        "  residentId: string;",
        "  caregiverId?: string;",
        "  tags: string[];",
        "  notes: string[];",
        "  metadata: Record<string, string | number | boolean | null>;",
        "  createdAt: string;",
        "  updatedAt: string;",
        "  facilityId: string;",
        "}",
        "",
        f"export function to{p}Dto(record: {p}Record): {p}Dto {{",
        "  return {",
        "    id: record.id,",
        "    title: record.title,",
        "    description: record.description,",
        "    status: record.status,",
        "    priority: record.priority,",
        "    visibility: record.visibility,",
        "    residentId: record.residentId,",
        "    caregiverId: record.caregiverId,",
        "    tags: [...record.tags],",
        "    notes: [...record.notes],",
        "    metadata: { ...record.metadata },",
        "    createdAt: record.createdAt,",
        "    updatedAt: record.updatedAt,",
        "    facilityId: record.facilityId,",
        "  };",
        "}",
        "",
        f"export function from{p}Form(values: Record<string, unknown>): {p}CreateInput {{",
        "  return {",
        "    title: String(values.title ?? ''),",
        "    description: String(values.description ?? ''),",
        "    residentId: String(values.residentId ?? ''),",
        "    caregiverId: values.caregiverId ? String(values.caregiverId) : undefined,",
        "    tags: Array.isArray(values.tags) ? values.tags.map(String) : [],",
        "    notes: Array.isArray(values.notes) ? values.notes.map(String) : [],",
        "  };",
        "}",
        "",
    ]
    for i in range(1, 40):
        lines += [
            f"export function map{p}SummaryView{i}(summary: {p}Summary): Record<string, number | string> {{",
            "  return {",
            f"    view: '{feature}-summary-{i}',",
            "    total: summary.total,",
            "    active: summary.active,",
            "    critical: summary.critical,",
            "    completedThisWeek: summary.completedThisWeek,",
            "    overdue: summary.overdue,",
            f"    healthIndex: Math.max(0, 100 - summary.critical * {i} - summary.overdue * 2),",
            "  };",
            "}",
            "",
        ]
    return "\n".join(lines)


def gen_permissions(feature: str) -> str:
    p = to_pascal(feature)
    lines = [
        f"/** RBAC helpers for {p} */",
        "",
        "export type CareNestRole = 'viewer' | 'caregiver' | 'nurse' | 'admin' | 'owner';",
        "",
        f"export type {p}Action =",
        "  | 'read'",
        "  | 'create'",
        "  | 'update'",
        "  | 'delete'",
        "  | 'export'",
        "  | 'assign'",
        "  | 'escalate';",
        "",
        f"const ROLE_MATRIX: Record<CareNestRole, {p}Action[]> = {{",
        "  viewer: ['read'],",
        "  caregiver: ['read', 'create', 'update', 'assign'],",
        "  nurse: ['read', 'create', 'update', 'assign', 'escalate', 'export'],",
        "  admin: ['read', 'create', 'update', 'delete', 'export', 'assign', 'escalate'],",
        "  owner: ['read', 'create', 'update', 'delete', 'export', 'assign', 'escalate'],",
        "};",
        "",
        f"export function can{p}(role: CareNestRole, action: {p}Action): boolean {{",
        "  return ROLE_MATRIX[role]?.includes(action) ?? false;",
        "}",
        "",
    ]
    for i in range(1, 35):
        lines += [
            f"export function explain{p}Permission{i}(role: CareNestRole, action: {p}Action): string {{",
            f"  const allowed = can{p}(role, action);",
            f"  return `[{feature}:{i}] role=${{role}} action=${{action}} => ${{allowed ? 'allow' : 'deny'}}`;",
            "}",
            "",
            f"export function require{p}Permission{i}(role: CareNestRole, action: {p}Action): void {{",
            f"  if (!can{p}(role, action)) {{",
            f"    throw new Error(`CareNest {p} permission denied ({i}): ${{role}} cannot ${{action}}`);",
            "  }",
            "}",
            "",
        ]
    return "\n".join(lines)


def gen_filters(feature: str) -> str:
    p = to_pascal(feature)
    lines = [
        f"import type {{ {p}Filter, {p}Record }} from '../types/{feature}';",
        "",
        f"export function apply{p}QuickFilters(items: {p}Record[], mode: 'all' | 'active' | 'critical' | 'mine', actorId?: string): {p}Record[] {{",
        "  switch (mode) {",
        "    case 'active':",
        "      return items.filter((i) => i.status === 'active');",
        "    case 'critical':",
        "      return items.filter((i) => i.priority === 'critical' || i.priority === 'high');",
        "    case 'mine':",
        "      return items.filter((i) => i.caregiverId === actorId || i.createdBy === actorId);",
        "    default:",
        "      return items;",
        "  }",
        "}",
        "",
        f"export function merge{p}Filters(base: {p}Filter, patch: Partial<{p}Filter>): {p}Filter {{",
        "  return { ...base, ...patch };",
        "}",
        "",
    ]
    for i in range(1, 40):
        lines += [
            f"export function rank{p}Relevance{i}(item: {p}Record, query: string): number {{",
            "  if (!query) return 0;",
            "  const q = query.toLowerCase();",
            f"  let score = {i};",
            "  if (item.title.toLowerCase().includes(q)) score += 50;",
            "  if (item.description.toLowerCase().includes(q)) score += 20;",
            "  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;",
            "  if (item.priority === 'critical') score += 10;",
            "  return score;",
            "}",
            "",
        ]
    return "\n".join(lines)


def gen_formatters(feature: str) -> str:
    p = to_pascal(feature)
    lines = [
        f"import type {{ {p}Priority, {p}Record, {p}Status }} from '../types/{feature}';",
        "",
        f"export function format{p}Status(status: {p}Status): string {{",
        "  return status.replace(/-/g, ' ').replace(/\\b\\w/g, (c) => c.toUpperCase());",
        "}",
        "",
        f"export function format{p}Priority(priority: {p}Priority): string {{",
        "  return priority.toUpperCase();",
        "}",
        "",
        f"export function format{p}Headline(record: {p}Record): string {{",
        "  return `${record.title} · ${format" + p + "Status(record.status)} · ${format" + p + "Priority(record.priority)}`;",
        "}",
        "",
    ]
    for i in range(1, 45):
        lines += [
            f"export function format{p}Timeline{i}(record: {p}Record): string {{",
            f"  return `#{i} ${{record.title}} updated ${{record.updatedAt}} by ${{record.updatedBy}} (v${{record.version}})`;",
            "}",
            "",
            f"export function format{p}Badge{i}(record: {p}Record): {{ label: string; tone: string }} {{",
            "  if (record.priority === 'critical') return { label: 'Critical', tone: 'hard' };",
            "  if (record.status === 'active') return { label: 'Active', tone: 'mid' };",
            f"  return {{ label: `Track-{i}`, tone: 'soft' }};",
            "}",
            "",
        ]
    return "\n".join(lines)


def gen_constants(feature: str) -> str:
    p = to_pascal(feature)
    lines = [
        f"/** Constants for CareNest {p} module */",
        "",
        f"export const {to_camel(feature)}ModuleKey = '{feature}' as const;",
        f"export const {to_camel(feature)}PageSizeDefault = 25;",
        f"export const {to_camel(feature)}PageSizeMax = 200;",
        f"export const {to_camel(feature)}TitleMax = 200;",
        f"export const {to_camel(feature)}DescriptionMax = 5000;",
        "",
        f"export const {to_camel(feature)}StatusOptions = ['draft', 'active', 'paused', 'completed', 'cancelled', 'archived'] as const;",
        f"export const {to_camel(feature)}PriorityOptions = ['low', 'normal', 'high', 'critical'] as const;",
        "",
    ]
    for i in range(1, 50):
        lines += [
            f"export const {to_camel(feature)}MetricThreshold{i} = {{",
            f"  id: '{feature}-threshold-{i}',",
            f"  warn: {40 + i},",
            f"  critical: {70 + i},",
            f"  label: '{p} threshold {i}',",
            "};",
            "",
        ]
    return "\n".join(lines)


def gen_component_list(feature: str) -> str:
    p = to_pascal(feature)
    lines = [
        "'use client';",
        "",
        "import Link from 'next/link';",
        f"import {{ use{p}List, use{p}Summary }} from '@/modules/{feature}/hooks/{feature}';",
        f"import {{ format{p}Headline }} from '@/modules/{feature}/formatters/{feature}';",
        "",
        f"export function {p}ListPanel() {{",
        f"  const {{ items, total, loading, error, setFilter, reload }} = use{p}List({{ page: 1, pageSize: 20 }});",
        f"  const {{ summary }} = use{p}Summary();",
        "",
        "  return (",
        '    <section className="cn-panel p-6 space-y-5">',
        '      <header className="flex flex-wrap items-end justify-between gap-3">',
        "        <div>",
        f'          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nest-500">{p}</p>',
        f'          <h2 className="font-display text-2xl text-nest-900">{p} workspace</h2>',
        "        </div>",
        '        <div className="flex gap-2">',
        '          <button type="button" className="cn-btn-ghost" onClick={() => setFilter((f) => ({ ...f, priority: ["critical", "high"] }))}>Critical</button>',
        '          <button type="button" className="cn-btn-ghost" onClick={() => setFilter({ page: 1, pageSize: 20 })}>Reset</button>',
        '          <button type="button" className="cn-btn" onClick={reload}>Refresh</button>',
        "        </div>",
        "      </header>",
        "",
        "      {summary && (",
        '        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">',
        '          <Stat label="Total" value={summary.total} />',
        '          <Stat label="Active" value={summary.active} />',
        '          <Stat label="Critical" value={summary.critical} />',
        '          <Stat label="Done (7d)" value={summary.completedThisWeek} />',
        '          <Stat label="Overdue" value={summary.overdue} />',
        "        </div>",
        "      )}",
        "",
        f'      {{loading && <p className="text-sm text-nest-600">Loading {feature} records…</p>}}',
        '      {error && <p className="text-sm text-alert-hard">{error}</p>}',
        "",
        '      <ul className="divide-y divide-nest-100">',
        "        {items.map((item) => (",
        '          <li key={item.id} className="py-3 flex items-start justify-between gap-4">',
        "            <div>",
        "              <Link href={`/app/"
        + feature
        + "/${item.id}`} className=\"font-semibold text-nest-800 hover:text-nest-600\">",
        "                {format" + p + "Headline(item)}",
        "              </Link>",
        '              <p className="text-sm text-nest-600 mt-1 line-clamp-2">{item.description}</p>',
        '              <p className="text-xs text-nest-500 mt-1">{item.tags.join(" · ")}</p>',
        "            </div>",
        '            <span className="text-xs font-medium uppercase tracking-wide text-nest-500">{item.status}</span>',
        "          </li>",
        "        ))}",
        "      </ul>",
        '      <p className="text-xs text-nest-500">{total} records</p>',
        "    </section>",
        "  );",
        "}",
        "",
        "function Stat({ label, value }: { label: string; value: number }) {",
        "  return (",
        '    <div className="rounded-xl bg-nest-50 px-3 py-2">',
        '      <p className="text-[11px] uppercase tracking-wide text-nest-500">{label}</p>',
        '      <p className="text-lg font-semibold text-nest-900">{value}</p>',
        "    </div>",
        "  );",
        "}",
        "",
    ]
    content = "\n".join(lines)
    # Extra presentational helpers for LOC
    extra = []
    for i in range(1, 30):
        extra += [
            f"export function {p}AccentChip{i}({{ label }}: {{ label: string }}) {{",
            f'  return <span className="inline-flex rounded-lg bg-nest-100 px-2 py-1 text-xs font-medium text-nest-800">{{label}} · {i}</span>;',
            "}",
            "",
        ]
    return content + "\n".join(extra)


def gen_detail_component(feature: str) -> str:
    p = to_pascal(feature)
    lines = [
        "'use client';",
        "",
        "import { useEffect, useState } from 'react';",
        f"import type {{ {p}Record }} from '@/modules/{feature}/types/{feature}';",
        f"import {{ use{p}Mutations }} from '@/modules/{feature}/hooks/{feature}';",
        "",
        f"export function {p}DetailPanel({{ id }}: {{ id: string }}) {{",
        f"  const [record, setRecord] = useState<{p}Record | null>(null);",
        "  const [error, setError] = useState<string | null>(null);",
        f"  const {{ update, busy }} = use{p}Mutations();",
        "",
        "  useEffect(() => {",
        f"    fetch(`/api/{feature}/${{id}}`)",
        "      .then(async (r) => {",
        "        if (!r.ok) throw new Error(await r.text());",
        f"        return r.json() as Promise<{p}Record>;",
        "      })",
        "      .then(setRecord)",
        "      .catch((e: Error) => setError(e.message));",
        "  }, [id]);",
        "",
        "  if (error) return <p className=\"text-alert-hard\">{error}</p>;",
        "  if (!record) return <p className=\"text-nest-600\">Loading…</p>;",
        "",
        "  return (",
        '    <article className="cn-panel p-6 space-y-4">',
        '      <header className="space-y-1">',
        f'        <p className="text-xs uppercase tracking-[0.2em] text-nest-500">{p}</p>',
        '        <h1 className="font-display text-3xl text-nest-900">{record.title}</h1>',
        '        <p className="text-nest-600">{record.description}</p>',
        "      </header>",
        '      <dl className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">',
        "        <Field label=\"Status\" value={record.status} />",
        "        <Field label=\"Priority\" value={record.priority} />",
        "        <Field label=\"Resident\" value={record.residentId} />",
        "        <Field label=\"Facility\" value={record.facilityId} />",
        "      </dl>",
        "      <button",
        '        type="button"',
        '        className="cn-btn"',
        "        disabled={busy}",
        "        onClick={() => update({ id: record.id, status: 'completed' }).then(setRecord)}",
        "      >",
        "        Mark completed",
        "      </button>",
        '      <section className="space-y-2">',
        '        <h2 className="text-sm font-semibold uppercase tracking-wide text-nest-600">Notes</h2>',
        "        <ul className=\"space-y-1\">",
        '          {record.notes.map((n) => (',
        '            <li key={n} className="rounded-lg bg-nest-50 px-3 py-2 text-sm text-nest-800">{n}</li>',
        "          ))}",
        "        </ul>",
        "      </section>",
        "    </article>",
        "  );",
        "}",
        "",
        "function Field({ label, value }: { label: string; value: string }) {",
        "  return (",
        "    <div>",
        '      <dt className="text-xs uppercase tracking-wide text-nest-500">{label}</dt>',
        '      <dd className="font-medium text-nest-900">{value}</dd>',
        "    </div>",
        "  );",
        "}",
        "",
    ]
    for i in range(1, 25):
        lines += [
            f"export function {p}SideNote{i}({{ text }}: {{ text: string }}) {{",
            f'  return <p className="text-xs text-nest-500">Note {i}: {{text}}</p>;',
            "}",
            "",
        ]
    return "\n".join(lines)


def gen_api_route(feature: str) -> str:
    p = to_pascal(feature)
    c = to_camel(feature)
    return "\n".join(
        [
            "import { NextRequest, NextResponse } from 'next/server';",
            f"import {{ {c}Service }} from '@/modules/{feature}/services/{feature}-service';",
            f"import type {{ {p}Status, {p}Priority }} from '@/modules/{feature}/types/{feature}';",
            "",
            "export async function GET(req: NextRequest) {",
            "  const sp = req.nextUrl.searchParams;",
            "  const status = sp.get('status');",
            "  const priority = sp.get('priority');",
            f"  const page = await {c}Service.list({{",
            "    query: sp.get('query') ?? undefined,",
            "    residentId: sp.get('residentId') ?? undefined,",
            "    caregiverId: sp.get('caregiverId') ?? undefined,",
            "    page: Number(sp.get('page') ?? '1') || 1,",
            "    pageSize: Number(sp.get('pageSize') ?? '25') || 25,",
            f"    status: status ? (status.split(',') as {p}Status[]) : undefined,",
            f"    priority: priority ? (priority.split(',') as {p}Priority[]) : undefined,",
            "  });",
            "  return NextResponse.json(page);",
            "}",
            "",
            "export async function POST(req: NextRequest) {",
            "  try {",
            "    const body = await req.json();",
            f"    const created = await {c}Service.create(body, 'api-user', body.facilityId ?? 'facility-1');",
            "    return NextResponse.json(created, { status: 201 });",
            "  } catch (err) {",
            "    return NextResponse.json({ error: err instanceof Error ? err.message : 'Invalid payload' }, { status: 400 });",
            "  }",
            "}",
        ]
    )


def gen_api_id_route(feature: str) -> str:
    c = to_camel(feature)
    p = to_pascal(feature)
    return "\n".join(
        [
            "import { NextRequest, NextResponse } from 'next/server';",
            f"import {{ {c}Service }} from '@/modules/{feature}/services/{feature}-service';",
            f"import type {{ {p}Id }} from '@/modules/{feature}/types/{feature}';",
            "",
            "type Ctx = { params: { id: string } };",
            "",
            "export async function GET(_req: NextRequest, ctx: Ctx) {",
            f"  const record = await {c}Service.getById(ctx.params.id as {p}Id);",
            "  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });",
            "  return NextResponse.json(record);",
            "}",
            "",
            "export async function PATCH(req: NextRequest, ctx: Ctx) {",
            "  try {",
            "    const body = await req.json();",
            f"    const updated = await {c}Service.update({{ ...body, id: ctx.params.id }}, 'api-user');",
            "    return NextResponse.json(updated);",
            "  } catch (err) {",
            "    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });",
            "  }",
            "}",
            "",
            "export async function DELETE(_req: NextRequest, ctx: Ctx) {",
            f"  const ok = await {c}Service.remove(ctx.params.id as {p}Id);",
            "  return NextResponse.json({ ok });",
            "}",
        ]
    )


def gen_api_summary(feature: str) -> str:
    c = to_camel(feature)
    return "\n".join(
        [
            "import { NextResponse } from 'next/server';",
            f"import {{ {c}Service }} from '@/modules/{feature}/services/{feature}-service';",
            "",
            "export async function GET() {",
            f"  const summary = await {c}Service.summary();",
            "  return NextResponse.json(summary);",
            "}",
        ]
    )


def gen_api_insight(feature: str) -> str:
    c = to_camel(feature)
    p = to_pascal(feature)
    return "\n".join(
        [
            "import { NextRequest, NextResponse } from 'next/server';",
            f"import {{ {c}Service }} from '@/modules/{feature}/services/{feature}-service';",
            f"import type {{ {p}Id }} from '@/modules/{feature}/types/{feature}';",
            "",
            "type Ctx = { params: { id: string; n: string } };",
            "",
            "export async function GET(_req: NextRequest, ctx: Ctx) {",
            f"  const id = ctx.params.id as {p}Id;",
            "  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));",
            f"  const fnName = `analyze{p}Signal${{n}}` as keyof typeof {c}Service;",
            f"  const fn = {c}Service[fnName] as unknown as ((id: {p}Id) => Promise<{{ score: number; label: string; details: string[] }}>) | undefined;",
            "  if (typeof fn !== 'function') {",
            f"    const fallback = await {c}Service.analyze{p}Signal1(id);",
            "    return NextResponse.json(fallback);",
            "  }",
            f"  const result = await fn.call({c}Service, id);",
            "  return NextResponse.json(result);",
            "}",
        ]
    )


def gen_page(feature: str) -> str:
    p = to_pascal(feature)
    return "\n".join(
        [
            f"import {{ {p}ListPanel }} from '@/modules/{feature}/components/{feature}-list';",
            "",
            f"export const metadata = {{ title: '{p} | CareNest' }};",
            "",
            f"export default function {p}Page() {{",
            "  return (",
            '    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">',
            "      <div>",
            f'        <h1 className="font-display text-4xl text-nest-950">CareNest {p}</h1>',
            f'        <p className="mt-2 text-nest-700">Manage {feature.replace("-", " ")} across your senior care facilities.</p>',
            "      </div>",
            f"      <{p}ListPanel />",
            "    </main>",
            "  );",
            "}",
        ]
    )


def gen_detail_page(feature: str) -> str:
    p = to_pascal(feature)
    return "\n".join(
        [
            f"import {{ {p}DetailPanel }} from '@/modules/{feature}/components/{feature}-detail';",
            "",
            "type Props = { params: { id: string } };",
            "",
            f"export default function {p}DetailPage({{ params }}: Props) {{",
            "  return (",
            '    <main className="mx-auto max-w-4xl px-4 py-8">',
            f"      <{p}DetailPanel id={{params.id}} />",
            "    </main>",
            "  );",
            "}",
        ]
    )


def gen_analytics_lib(feature: str) -> str:
    p = to_pascal(feature)
    lines = [
        f"import type {{ {p}Record, {p}Summary }} from '../types/{feature}';",
        "",
        f"export interface {p}AnalyticsPoint {{",
        "  key: string;",
        "  label: string;",
        "  value: number;",
        "  trend: number;",
        "}",
        "",
        f"export function build{p}Analytics(items: {p}Record[], summary: {p}Summary): {p}AnalyticsPoint[] {{",
        "  return [",
        "    { key: 'total', label: 'Total', value: summary.total, trend: 0 },",
        "    { key: 'active', label: 'Active', value: summary.active, trend: summary.active / Math.max(1, summary.total) },",
        "    { key: 'critical', label: 'Critical', value: summary.critical, trend: summary.critical / Math.max(1, summary.total) },",
        "    { key: 'overdue', label: 'Overdue', value: summary.overdue, trend: summary.overdue / Math.max(1, summary.total) },",
        "    { key: 'tags', label: 'Tagged', value: items.reduce((a, i) => a + i.tags.length, 0), trend: 0 },",
        "  ];",
        "}",
        "",
    ]
    for i in range(1, 55):
        lines += [
            f"export function compute{p}Index{i}(items: {p}Record[]): number {{",
            f"  if (!items.length) return {i};",
            "  const critical = items.filter((x) => x.priority === 'critical').length;",
            "  const active = items.filter((x) => x.status === 'active').length;",
            f"  return Math.round(100 - (critical * 8 + active * 0.5) + {i} * 0.1);",
            "}",
            "",
            f"export function bucket{p}ByMonth{i}(items: {p}Record[]): Record<string, number> {{",
            "  const out: Record<string, number> = {};",
            "  for (const item of items) {",
            "    const key = item.createdAt.slice(0, 7);",
            f"    out[key] = (out[key] ?? 0) + 1 + ({i} % 3);",
            "  }",
            "  return out;",
            "}",
            "",
        ]
    return "\n".join(lines)


def gen_tasks(feature: str) -> str:
    """Operational task definitions — expands feature surface."""
    p = to_pascal(feature)
    lines = [
        f"/** Operational task catalog for {p} */",
        "",
        f"export type {p}TaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';",
        "",
        f"export interface {p}Task {{",
        "  id: string;",
        "  title: string;",
        "  description: string;",
        f"  state: {p}TaskState;",
        "  ownerRole: string;",
        "  dueInHours: number;",
        "  checklist: string[];",
        "  dependsOn: string[];",
        "}",
        "",
        f"export const {to_camel(feature)}TaskCatalog: {p}Task[] = [",
    ]
    task_titles = [
        "Review overnight notes",
        "Reconcile open items",
        "Escalate overdue cases",
        "Prepare family update",
        "Audit documentation completeness",
        "Sync with pharmacy / vendor",
        "Validate schedule conflicts",
        "Close completed workflows",
        "Generate shift handoff summary",
        "Confirm consent / privacy flags",
        "Run compliance checklist",
        "Update risk scores",
        "Notify on-call clinician",
        "Archive stale drafts",
        "Export weekly digest",
        "Train new caregiver on module",
        "Verify device integrations",
        "Spot-check critical priorities",
        "Align meal / care constraints",
        "Publish dashboard widgets",
    ]
    for i in range(1, 81):
        title = task_titles[(i - 1) % len(task_titles)]
        depends = f"['{feature}-task-{i-1:03d}']" if i > 1 else "[]"
        lines += [
            "  {",
            f"    id: '{feature}-task-{i:03d}',",
            f"    title: '{title} ({p} #{i})',",
            f"    description: 'CareNest operational task for {feature}: {title.lower()} — step {i}.',",
            f"    state: '{['todo', 'in_progress', 'blocked', 'done', 'cancelled'][i % 5]}',",
            f"    ownerRole: '{['caregiver', 'nurse', 'admin', 'owner'][i % 4]}',",
            f"    dueInHours: {4 + (i % 48)},",
            "    checklist: [",
            f"      'Confirm {feature} context #{i}',",
            f"      'Capture outcome for {feature} task {i}',",
            f"      'Log follow-up owner for {feature}-{i}',",
            "    ],",
            f"    dependsOn: {depends},",
            "  },",
        ]
    lines += [
        "];",
        "",
        f"export function listOpen{p}Tasks(): {p}Task[] {{",
        f"  return {to_camel(feature)}TaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');",
        "}",
        "",
        f"export function count{p}TasksByState(): Record<{p}TaskState, number> {{",
        "  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };",
        f"  for (const t of {to_camel(feature)}TaskCatalog) base[t.state] += 1;",
        "  return base;",
        "}",
        "",
    ]
    for i in range(1, 30):
        lines += [
            f"export function estimate{p}Workload{i}(tasks: {p}Task[] = {to_camel(feature)}TaskCatalog): number {{",
            f"  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * {i}, 0);",
            "}",
            "",
        ]
    return "\n".join(lines)


def write_scaffold() -> None:
    write(
        "package.json",
        json.dumps(
            {
                "name": "carenest",
                "version": "5.2.0",
                "private": True,
                "description": "CareNest — Senior Care Management Platform",
                "author": "Biruk-ak <birukaklilu0110@gmail.com>",
                "scripts": {
                    "dev": "next dev",
                    "build": "next build",
                    "start": "next start",
                    "lint": "next lint",
                    "typecheck": "tsc --noEmit",
                    "test": "vitest run",
                    "docker:build": "docker build -t carenest:latest .",
                    "docker:up": "docker compose up -d",
                    "docker:down": "docker compose down",
                },
                "dependencies": {
                    "next": "14.2.5",
                    "react": "^18.3.1",
                    "react-dom": "^18.3.1",
                    "clsx": "^2.1.1",
                    "date-fns": "^3.6.0",
                    "zod": "^3.23.8",
                    "lucide-react": "^0.400.0",
                    "recharts": "^2.12.7",
                    "@tanstack/react-query": "^5.51.1",
                    "zustand": "^4.5.4",
                    "react-hook-form": "^7.52.1",
                    "@hookform/resolvers": "^3.9.0",
                },
                "devDependencies": {
                    "@types/node": "^20.14.10",
                    "@types/react": "^18.3.3",
                    "@types/react-dom": "^18.3.0",
                    "autoprefixer": "^10.4.19",
                    "eslint": "^8.57.0",
                    "eslint-config-next": "14.2.5",
                    "postcss": "^8.4.39",
                    "tailwindcss": "^3.4.6",
                    "typescript": "^5.5.3",
                    "vitest": "^2.0.3",
                },
            },
            indent=2,
        ),
    )
    write(
        "tsconfig.json",
        """{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules", "scripts"]
}
""",
    )
    write(
        "next.config.mjs",
        """/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  images: { remotePatterns: [{ protocol: 'https', hostname: '**' }] },
};

export default nextConfig;
""",
    )
    write(
        "tailwind.config.ts",
        """import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        nest: {
          50: '#f0f7f4',
          100: '#dceee6',
          200: '#b8dccb',
          300: '#8ac4ab',
          400: '#5aa688',
          500: '#3d8a6e',
          600: '#2f6f59',
          700: '#285948',
          800: '#23483b',
          900: '#1e3c32',
          950: '#0f221c',
        },
        alert: {
          soft: '#fef3c7',
          mid: '#f59e0b',
          hard: '#dc2626',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        nest: '0 12px 40px -16px rgba(30, 60, 50, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
""",
    )
    write(
        "postcss.config.mjs",
        """/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
""",
    )
    write(
        "next-env.d.ts",
        """/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.
""",
    )
    write(".eslintrc.json", '{\n  "extends": "next/core-web-vitals"\n}\n')
    write(
        ".gitignore",
        """node_modules
.next
out
dist
coverage
.env
.env.local
.env.*.local
*.log
.DS_Store
docker-data
scripts/__pycache__
""",
    )
    write(
        ".dockerignore",
        """node_modules
.next
.git
.env*
*.md
coverage
docker-data
scripts
""",
    )
    write(
        "Dockerfile",
        """FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci || npm install

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
CMD ["node", "server.js"]
""",
    )
    write(
        "docker-compose.yml",
        """services:
  carenest-web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - CARENNEST_API_URL=http://carenest-api:4000
    depends_on:
      - carenest-api
      - carenest-db
    restart: unless-stopped

  carenest-api:
    image: node:20-alpine
    working_dir: /app
    volumes:
      - ./:/app
    command: ["node", "-e", "console.log('CareNest API placeholder')"]
    environment:
      - DATABASE_URL=postgres://carenest:carenest@carenest-db:5432/carenest
    depends_on:
      - carenest-db

  carenest-db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: carenest
      POSTGRES_PASSWORD: carenest
      POSTGRES_DB: carenest
    volumes:
      - carenest_pg:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  carenest_pg:
""",
    )
    write(
        "README.md",
        """# CareNest

**Senior Care Management Platform**

CareNest is a healthcare web application for managing senior care facilities, residents, caregivers, medications, appointments, health logs, emergency alerts, meal planning, care schedules, payments, and reporting.

## Stack

- TypeScript + React
- Next.js (App Router)
- Tailwind CSS
- Docker / Docker Compose

## Applications

- Healthcare Dashboard
- Admin Console

## Features

- Medication management
- Appointments
- Health Logs
- Emergency Alerts
- Meal Planning
- Care Schedule
- Payments
- Reports

## Getting started

```bash
npm install
npm run dev
```

## Docker

```bash
docker compose up --build
```

## Author

Biruk-ak <birukaklilu0110@gmail.com>
""",
    )
    write("public/.gitkeep", "")
    write(
        "src/app/globals.css",
        """@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-display: "Fraunces", Georgia, serif;
  --font-sans: "Source Sans 3", ui-sans-serif, system-ui, sans-serif;
  --surface: #f3f8f5;
  --ink: #1e3c32;
  --accent: #3d8a6e;
}

html {
  scroll-behavior: smooth;
}

body {
  color: var(--ink);
  background:
    radial-gradient(1200px 600px at 10% -10%, #dceee6 0%, transparent 55%),
    radial-gradient(900px 500px at 100% 0%, #e8f2ec 0%, transparent 50%),
    var(--surface);
  min-height: 100vh;
}

@layer components {
  .cn-panel {
    @apply rounded-2xl border border-nest-200/80 bg-white/80 backdrop-blur-sm shadow-nest;
  }
  .cn-btn {
    @apply inline-flex items-center justify-center gap-2 rounded-xl bg-nest-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-nest-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nest-500;
  }
  .cn-btn-ghost {
    @apply inline-flex items-center justify-center gap-2 rounded-xl border border-nest-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-nest-800 transition hover:bg-nest-50;
  }
  .cn-input {
    @apply w-full rounded-xl border border-nest-200 bg-white px-3 py-2 text-sm text-nest-900 outline-none ring-nest-400 focus:ring-2;
  }
  .cn-label {
    @apply mb-1 block text-xs font-semibold uppercase tracking-wide text-nest-600;
  }
}
""",
    )


def write_app_shell() -> None:
    nav_links = "\n".join(
        [
            f'    {{ href: "/app/{f}", label: "{to_pascal(f)}" }},'
            for f in FEATURES
        ]
    )
    write(
        "src/components/shell/AppNav.tsx",
        f"""'use client';

import Link from 'next/link';
import {{ usePathname }} from 'next/navigation';
import clsx from 'clsx';

const links = [
{nav_links}
];

export function AppNav() {{
  const pathname = usePathname();
  return (
    <nav className="border-b border-nest-200/80 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-4 py-3">
        <Link href="/" className="font-display text-xl font-semibold text-nest-900">
          CareNest
        </Link>
        <div className="flex flex-1 flex-wrap gap-1">
          {{links.map((l) => (
            <Link
              key={{l.href}}
              href={{l.href}}
              className={{clsx(
                'rounded-lg px-2.5 py-1.5 text-xs font-semibold transition',
                pathname?.startsWith(l.href)
                  ? 'bg-nest-700 text-white'
                  : 'text-nest-700 hover:bg-nest-100',
              )}}
            >
              {{l.label}}
            </Link>
          ))}}
        </div>
        <Link href="/admin" className="cn-btn-ghost text-xs">
          Admin
        </Link>
      </div>
    </nav>
  );
}}
""",
    )
    write(
        "src/app/layout.tsx",
        """import type { Metadata } from 'next';
import { AppNav } from '@/components/shell/AppNav';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'CareNest — Senior Care Management',
    template: '%s | CareNest',
  },
  description: 'Senior Care Management Platform for facilities, caregivers, and families.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Source+Sans+3:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <AppNav />
        {children}
      </body>
    </html>
  );
}
""",
    )
    write(
        "src/app/page.tsx",
        """import Link from 'next/link';

const features = [
  { href: '/app/dashboard', title: 'Healthcare Dashboard', blurb: 'Live facility pulse, alerts, and staffing.' },
  { href: '/admin', title: 'Admin', blurb: 'Users, roles, facilities, and compliance controls.' },
  { href: '/app/medication', title: 'Medication', blurb: 'Schedules, MAR, and pharmacy reconciliation.' },
  { href: '/app/appointments', title: 'Appointments', blurb: 'Clinician visits and transport windows.' },
  { href: '/app/health-logs', title: 'Health Logs', blurb: 'Vitals, observations, and trends.' },
  { href: '/app/emergency-alerts', title: 'Emergency Alerts', blurb: 'Escalation paths and on-call routing.' },
  { href: '/app/meal-planning', title: 'Meal Planning', blurb: 'Nutrition plans and dietary constraints.' },
  { href: '/app/care-schedule', title: 'Care Schedule', blurb: 'Shifts, tasks, and coverage planning.' },
  { href: '/app/payments', title: 'Payments', blurb: 'Invoices, ledgers, and family billing.' },
  { href: '/app/reports', title: 'Reports', blurb: 'Operational and clinical reporting packs.' },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-[88vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(120deg, rgba(15,34,28,0.72), rgba(61,138,110,0.35)), url(https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=2000&q=80)',
          }}
        />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28">
          <p className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-white drop-shadow">
            CareNest
          </p>
          <h1 className="mt-4 max-w-2xl text-2xl md:text-3xl font-medium text-white/95">
            Senior care operations, coordinated in one place.
          </h1>
          <p className="mt-3 max-w-xl text-base text-white/80">
            Medication, appointments, health logs, alerts, meals, schedules, payments, and reports for modern care homes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/app/dashboard" className="cn-btn bg-white text-nest-900 hover:bg-nest-50">
              Open dashboard
            </Link>
            <Link href="/admin" className="cn-btn-ghost border-white/40 bg-white/10 text-white hover:bg-white/20">
              Admin console
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-3xl text-nest-950">Applications & features</h2>
        <p className="mt-2 max-w-2xl text-nest-700">
          Built for caregivers, clinicians, and administrators who need clarity without clutter.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Link key={f.href} href={f.href} className="group block space-y-2 py-2">
              <h3 className="text-lg font-semibold text-nest-900 group-hover:text-nest-600">{f.title}</h3>
              <p className="text-sm text-nest-600">{f.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
""",
    )
    write(
        "src/app/admin/page.tsx",
        """import Link from 'next/link';
import { AdminListPanel } from '@/modules/admin/components/admin-list';

export const metadata = { title: 'Admin' };

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-4xl text-nest-950">CareNest Admin</h1>
          <p className="mt-2 text-nest-700">Facility controls, access, and operational governance.</p>
        </div>
        <Link href="/app/dashboard" className="cn-btn-ghost">
          Back to dashboard
        </Link>
      </div>
      <AdminListPanel />
    </main>
  );
}
""",
    )
    write(
        "src/lib/cn.ts",
        """import clsx, { ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
""",
    )
    write(
        "src/lib/dates.ts",
        """import { format, formatDistanceToNow, parseISO } from 'date-fns';

export function formatCareDate(iso: string, pattern = 'MMM d, yyyy p') {
  return format(parseISO(iso), pattern);
}

export function relativeCareDate(iso: string) {
  return formatDistanceToNow(parseISO(iso), { addSuffix: true });
}
""",
    )


def generate_feature(feature: str) -> None:
    base = f"src/modules/{feature}"
    write(f"{base}/types/{feature}.ts", gen_types(feature))
    write(f"{base}/validators/{feature}.ts", gen_validators(feature))
    write(f"{base}/utils/{feature}.ts", gen_utils(feature))
    write(f"{base}/seeds/{feature}.ts", gen_seed(feature))
    write(f"{base}/stores/{feature}-store.ts", gen_store(feature))
    write(f"{base}/services/{feature}-service.ts", gen_service(feature))
    write(f"{base}/hooks/{feature}.ts", gen_hooks(feature))
    write(f"{base}/mappers/{feature}.ts", gen_mappers(feature))
    write(f"{base}/permissions/{feature}.ts", gen_permissions(feature))
    write(f"{base}/filters/{feature}.ts", gen_filters(feature))
    write(f"{base}/formatters/{feature}.ts", gen_formatters(feature))
    write(f"{base}/constants/{feature}.ts", gen_constants(feature))
    write(f"{base}/analytics/{feature}.ts", gen_analytics_lib(feature))
    write(f"{base}/tasks/{feature}-tasks.ts", gen_tasks(feature))
    write(f"{base}/components/{feature}-list.tsx", gen_component_list(feature))
    write(f"{base}/components/{feature}-detail.tsx", gen_detail_component(feature))
    write(f"src/app/api/{feature}/route.ts", gen_api_route(feature))
    write(f"src/app/api/{feature}/summary/route.ts", gen_api_summary(feature))
    write(f"src/app/api/{feature}/[id]/route.ts", gen_api_id_route(feature))
    write(f"src/app/api/{feature}/[id]/insight/[n]/route.ts", gen_api_insight(feature))
    write(f"src/app/app/{feature}/page.tsx", gen_page(feature))
    write(f"src/app/app/{feature}/[id]/page.tsx", gen_detail_page(feature))


def gen_test_file(feature: str) -> str:
    p = to_pascal(feature)
    c = to_camel(feature)
    lines = [
        f"import {{ describe, expect, it }} from 'vitest';",
        f"import {{ seed{p}Records }} from '../seeds/{feature}';",
        f"import {{ score{p}Risk1, build{p}Id }} from '../utils/{feature}';",
        f"import {{ listOpen{p}Tasks, count{p}TasksByState }} from '../tasks/{feature}-tasks';",
        f"import {{ can{p} }} from '../permissions/{feature}';",
        "",
        f"describe('CareNest {p} module', () => {{",
        "  it('seeds records', () => {",
        f"    const rows = seed{p}Records(10);",
        "    expect(rows).toHaveLength(10);",
        "    expect(rows[0].title).toContain('case');",
        "  });",
        "",
        "  it('builds branded ids', () => {",
        f"    const id = build{p}Id();",
        f"    expect(String(id)).toContain('{feature}');",
        "  });",
        "",
        "  it('scores risk', () => {",
        f"    const [row] = seed{p}Records(1);",
        f"    expect(score{p}Risk1(row)).toBeGreaterThan(0);",
        "  });",
        "",
        "  it('exposes operational tasks', () => {",
        f"    expect(listOpen{p}Tasks().length).toBeGreaterThan(0);",
        f"    const counts = count{p}TasksByState();",
        "    expect(counts.todo + counts.in_progress + counts.blocked + counts.done + counts.cancelled).toBeGreaterThan(0);",
        "  });",
        "",
        "  it('enforces permissions', () => {",
        f"    expect(can{p}('viewer', 'read')).toBe(true);",
        f"    expect(can{p}('viewer', 'delete')).toBe(false);",
        f"    expect(can{p}('admin', 'delete')).toBe(true);",
        "  });",
        "});",
        "",
    ]
    for i in range(1, 20):
        lines += [
            f"describe('{p} extended suite {i}', () => {{",
            f"  it('validates seed batch {i}', () => {{",
            f"    const rows = seed{p}Records({5 + i});",
            f"    expect(rows.length).toBe({5 + i});",
            f"    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);",
            "  });",
            "});",
            "",
        ]
    return "\n".join(lines)


def main() -> None:
    os.chdir(ROOT)
    print("Writing scaffold…")
    write_scaffold()
    write_app_shell()
    print(f"Generating {len(ALL_FEATURES)} feature modules…")
    for i, feature in enumerate(ALL_FEATURES, 1):
        print(f"  [{i}/{len(ALL_FEATURES)}] {feature}")
        generate_feature(feature)
        write(f"src/modules/{feature}/__tests__/{feature}.test.ts", gen_test_file(feature))

    # Shared index barrel
    exports = "\n".join([f"export * as {to_camel(f)}Module from './{f}/services/{f}-service';" for f in ALL_FEATURES])
    write("src/modules/index.ts", f"/** CareNest module registry */\n{exports}\n")

    # Count LOC
    total = 0
    files = 0
    for path in ROOT.rglob("*"):
        if path.is_file() and "node_modules" not in path.parts and ".git" not in path.parts:
            if path.suffix in {".ts", ".tsx", ".js", ".jsx", ".css", ".mjs", ".yml", ".json", ".md"}:
                try:
                    total += path.read_text(encoding="utf-8", errors="ignore").count("\n")
                    files += 1
                except Exception:
                    pass
    print(f"Done. ~{total} lines across {files} text files.")


if __name__ == "__main__":
    main()
