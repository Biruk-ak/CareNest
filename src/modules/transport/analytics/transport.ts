import type { TransportRecord, TransportSummary } from '../types/transport';

export interface TransportAnalyticsPoint {
  key: string;
  label: string;
  value: number;
  trend: number;
}

export function buildTransportAnalytics(items: TransportRecord[], summary: TransportSummary): TransportAnalyticsPoint[] {
  return [
    { key: 'total', label: 'Total', value: summary.total, trend: 0 },
    { key: 'active', label: 'Active', value: summary.active, trend: summary.active / Math.max(1, summary.total) },
    { key: 'critical', label: 'Critical', value: summary.critical, trend: summary.critical / Math.max(1, summary.total) },
    { key: 'overdue', label: 'Overdue', value: summary.overdue, trend: summary.overdue / Math.max(1, summary.total) },
    { key: 'tags', label: 'Tagged', value: items.reduce((a, i) => a + i.tags.length, 0), trend: 0 },
  ];
}

export function computeTransportIndex1(items: TransportRecord[]): number {
  if (!items.length) return 1;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 1 * 0.1);
}

export function bucketTransportByMonth1(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (1 % 3);
  }
  return out;
}

export function computeTransportIndex2(items: TransportRecord[]): number {
  if (!items.length) return 2;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 2 * 0.1);
}

export function bucketTransportByMonth2(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (2 % 3);
  }
  return out;
}

export function computeTransportIndex3(items: TransportRecord[]): number {
  if (!items.length) return 3;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 3 * 0.1);
}

export function bucketTransportByMonth3(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (3 % 3);
  }
  return out;
}

export function computeTransportIndex4(items: TransportRecord[]): number {
  if (!items.length) return 4;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 4 * 0.1);
}

export function bucketTransportByMonth4(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (4 % 3);
  }
  return out;
}

export function computeTransportIndex5(items: TransportRecord[]): number {
  if (!items.length) return 5;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 5 * 0.1);
}

export function bucketTransportByMonth5(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (5 % 3);
  }
  return out;
}

export function computeTransportIndex6(items: TransportRecord[]): number {
  if (!items.length) return 6;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 6 * 0.1);
}

export function bucketTransportByMonth6(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (6 % 3);
  }
  return out;
}

export function computeTransportIndex7(items: TransportRecord[]): number {
  if (!items.length) return 7;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 7 * 0.1);
}

export function bucketTransportByMonth7(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (7 % 3);
  }
  return out;
}

export function computeTransportIndex8(items: TransportRecord[]): number {
  if (!items.length) return 8;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 8 * 0.1);
}

export function bucketTransportByMonth8(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (8 % 3);
  }
  return out;
}

export function computeTransportIndex9(items: TransportRecord[]): number {
  if (!items.length) return 9;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 9 * 0.1);
}

export function bucketTransportByMonth9(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (9 % 3);
  }
  return out;
}

export function computeTransportIndex10(items: TransportRecord[]): number {
  if (!items.length) return 10;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 10 * 0.1);
}

export function bucketTransportByMonth10(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (10 % 3);
  }
  return out;
}

export function computeTransportIndex11(items: TransportRecord[]): number {
  if (!items.length) return 11;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 11 * 0.1);
}

export function bucketTransportByMonth11(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (11 % 3);
  }
  return out;
}

export function computeTransportIndex12(items: TransportRecord[]): number {
  if (!items.length) return 12;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 12 * 0.1);
}

export function bucketTransportByMonth12(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (12 % 3);
  }
  return out;
}

export function computeTransportIndex13(items: TransportRecord[]): number {
  if (!items.length) return 13;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 13 * 0.1);
}

export function bucketTransportByMonth13(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (13 % 3);
  }
  return out;
}

export function computeTransportIndex14(items: TransportRecord[]): number {
  if (!items.length) return 14;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 14 * 0.1);
}

export function bucketTransportByMonth14(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (14 % 3);
  }
  return out;
}

export function computeTransportIndex15(items: TransportRecord[]): number {
  if (!items.length) return 15;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 15 * 0.1);
}

export function bucketTransportByMonth15(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (15 % 3);
  }
  return out;
}

export function computeTransportIndex16(items: TransportRecord[]): number {
  if (!items.length) return 16;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 16 * 0.1);
}

export function bucketTransportByMonth16(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (16 % 3);
  }
  return out;
}

export function computeTransportIndex17(items: TransportRecord[]): number {
  if (!items.length) return 17;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 17 * 0.1);
}

export function bucketTransportByMonth17(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (17 % 3);
  }
  return out;
}

export function computeTransportIndex18(items: TransportRecord[]): number {
  if (!items.length) return 18;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 18 * 0.1);
}

export function bucketTransportByMonth18(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (18 % 3);
  }
  return out;
}

export function computeTransportIndex19(items: TransportRecord[]): number {
  if (!items.length) return 19;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 19 * 0.1);
}

export function bucketTransportByMonth19(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (19 % 3);
  }
  return out;
}

export function computeTransportIndex20(items: TransportRecord[]): number {
  if (!items.length) return 20;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 20 * 0.1);
}

export function bucketTransportByMonth20(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (20 % 3);
  }
  return out;
}

export function computeTransportIndex21(items: TransportRecord[]): number {
  if (!items.length) return 21;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 21 * 0.1);
}

export function bucketTransportByMonth21(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (21 % 3);
  }
  return out;
}

export function computeTransportIndex22(items: TransportRecord[]): number {
  if (!items.length) return 22;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 22 * 0.1);
}

export function bucketTransportByMonth22(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (22 % 3);
  }
  return out;
}

export function computeTransportIndex23(items: TransportRecord[]): number {
  if (!items.length) return 23;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 23 * 0.1);
}

export function bucketTransportByMonth23(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (23 % 3);
  }
  return out;
}

export function computeTransportIndex24(items: TransportRecord[]): number {
  if (!items.length) return 24;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 24 * 0.1);
}

export function bucketTransportByMonth24(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (24 % 3);
  }
  return out;
}

export function computeTransportIndex25(items: TransportRecord[]): number {
  if (!items.length) return 25;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 25 * 0.1);
}

export function bucketTransportByMonth25(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (25 % 3);
  }
  return out;
}

export function computeTransportIndex26(items: TransportRecord[]): number {
  if (!items.length) return 26;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 26 * 0.1);
}

export function bucketTransportByMonth26(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (26 % 3);
  }
  return out;
}

export function computeTransportIndex27(items: TransportRecord[]): number {
  if (!items.length) return 27;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 27 * 0.1);
}

export function bucketTransportByMonth27(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (27 % 3);
  }
  return out;
}

export function computeTransportIndex28(items: TransportRecord[]): number {
  if (!items.length) return 28;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 28 * 0.1);
}

export function bucketTransportByMonth28(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (28 % 3);
  }
  return out;
}

export function computeTransportIndex29(items: TransportRecord[]): number {
  if (!items.length) return 29;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 29 * 0.1);
}

export function bucketTransportByMonth29(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (29 % 3);
  }
  return out;
}

export function computeTransportIndex30(items: TransportRecord[]): number {
  if (!items.length) return 30;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 30 * 0.1);
}

export function bucketTransportByMonth30(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (30 % 3);
  }
  return out;
}

export function computeTransportIndex31(items: TransportRecord[]): number {
  if (!items.length) return 31;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 31 * 0.1);
}

export function bucketTransportByMonth31(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (31 % 3);
  }
  return out;
}

export function computeTransportIndex32(items: TransportRecord[]): number {
  if (!items.length) return 32;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 32 * 0.1);
}

export function bucketTransportByMonth32(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (32 % 3);
  }
  return out;
}

export function computeTransportIndex33(items: TransportRecord[]): number {
  if (!items.length) return 33;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 33 * 0.1);
}

export function bucketTransportByMonth33(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (33 % 3);
  }
  return out;
}

export function computeTransportIndex34(items: TransportRecord[]): number {
  if (!items.length) return 34;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 34 * 0.1);
}

export function bucketTransportByMonth34(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (34 % 3);
  }
  return out;
}

export function computeTransportIndex35(items: TransportRecord[]): number {
  if (!items.length) return 35;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 35 * 0.1);
}

export function bucketTransportByMonth35(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (35 % 3);
  }
  return out;
}

export function computeTransportIndex36(items: TransportRecord[]): number {
  if (!items.length) return 36;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 36 * 0.1);
}

export function bucketTransportByMonth36(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (36 % 3);
  }
  return out;
}

export function computeTransportIndex37(items: TransportRecord[]): number {
  if (!items.length) return 37;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 37 * 0.1);
}

export function bucketTransportByMonth37(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (37 % 3);
  }
  return out;
}

export function computeTransportIndex38(items: TransportRecord[]): number {
  if (!items.length) return 38;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 38 * 0.1);
}

export function bucketTransportByMonth38(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (38 % 3);
  }
  return out;
}

export function computeTransportIndex39(items: TransportRecord[]): number {
  if (!items.length) return 39;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 39 * 0.1);
}

export function bucketTransportByMonth39(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (39 % 3);
  }
  return out;
}

export function computeTransportIndex40(items: TransportRecord[]): number {
  if (!items.length) return 40;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 40 * 0.1);
}

export function bucketTransportByMonth40(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (40 % 3);
  }
  return out;
}

export function computeTransportIndex41(items: TransportRecord[]): number {
  if (!items.length) return 41;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 41 * 0.1);
}

export function bucketTransportByMonth41(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (41 % 3);
  }
  return out;
}

export function computeTransportIndex42(items: TransportRecord[]): number {
  if (!items.length) return 42;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 42 * 0.1);
}

export function bucketTransportByMonth42(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (42 % 3);
  }
  return out;
}

export function computeTransportIndex43(items: TransportRecord[]): number {
  if (!items.length) return 43;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 43 * 0.1);
}

export function bucketTransportByMonth43(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (43 % 3);
  }
  return out;
}

export function computeTransportIndex44(items: TransportRecord[]): number {
  if (!items.length) return 44;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 44 * 0.1);
}

export function bucketTransportByMonth44(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (44 % 3);
  }
  return out;
}

export function computeTransportIndex45(items: TransportRecord[]): number {
  if (!items.length) return 45;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 45 * 0.1);
}

export function bucketTransportByMonth45(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (45 % 3);
  }
  return out;
}

export function computeTransportIndex46(items: TransportRecord[]): number {
  if (!items.length) return 46;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 46 * 0.1);
}

export function bucketTransportByMonth46(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (46 % 3);
  }
  return out;
}

export function computeTransportIndex47(items: TransportRecord[]): number {
  if (!items.length) return 47;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 47 * 0.1);
}

export function bucketTransportByMonth47(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (47 % 3);
  }
  return out;
}

export function computeTransportIndex48(items: TransportRecord[]): number {
  if (!items.length) return 48;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 48 * 0.1);
}

export function bucketTransportByMonth48(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (48 % 3);
  }
  return out;
}

export function computeTransportIndex49(items: TransportRecord[]): number {
  if (!items.length) return 49;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 49 * 0.1);
}

export function bucketTransportByMonth49(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (49 % 3);
  }
  return out;
}

export function computeTransportIndex50(items: TransportRecord[]): number {
  if (!items.length) return 50;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 50 * 0.1);
}

export function bucketTransportByMonth50(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (50 % 3);
  }
  return out;
}

export function computeTransportIndex51(items: TransportRecord[]): number {
  if (!items.length) return 51;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 51 * 0.1);
}

export function bucketTransportByMonth51(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (51 % 3);
  }
  return out;
}

export function computeTransportIndex52(items: TransportRecord[]): number {
  if (!items.length) return 52;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 52 * 0.1);
}

export function bucketTransportByMonth52(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (52 % 3);
  }
  return out;
}

export function computeTransportIndex53(items: TransportRecord[]): number {
  if (!items.length) return 53;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 53 * 0.1);
}

export function bucketTransportByMonth53(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (53 % 3);
  }
  return out;
}

export function computeTransportIndex54(items: TransportRecord[]): number {
  if (!items.length) return 54;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 54 * 0.1);
}

export function bucketTransportByMonth54(items: TransportRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (54 % 3);
  }
  return out;
}
