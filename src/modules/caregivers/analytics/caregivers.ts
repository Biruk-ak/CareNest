import type { CaregiversRecord, CaregiversSummary } from '../types/caregivers';

export interface CaregiversAnalyticsPoint {
  key: string;
  label: string;
  value: number;
  trend: number;
}

export function buildCaregiversAnalytics(items: CaregiversRecord[], summary: CaregiversSummary): CaregiversAnalyticsPoint[] {
  return [
    { key: 'total', label: 'Total', value: summary.total, trend: 0 },
    { key: 'active', label: 'Active', value: summary.active, trend: summary.active / Math.max(1, summary.total) },
    { key: 'critical', label: 'Critical', value: summary.critical, trend: summary.critical / Math.max(1, summary.total) },
    { key: 'overdue', label: 'Overdue', value: summary.overdue, trend: summary.overdue / Math.max(1, summary.total) },
    { key: 'tags', label: 'Tagged', value: items.reduce((a, i) => a + i.tags.length, 0), trend: 0 },
  ];
}

export function computeCaregiversIndex1(items: CaregiversRecord[]): number {
  if (!items.length) return 1;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 1 * 0.1);
}

export function bucketCaregiversByMonth1(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (1 % 3);
  }
  return out;
}

export function computeCaregiversIndex2(items: CaregiversRecord[]): number {
  if (!items.length) return 2;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 2 * 0.1);
}

export function bucketCaregiversByMonth2(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (2 % 3);
  }
  return out;
}

export function computeCaregiversIndex3(items: CaregiversRecord[]): number {
  if (!items.length) return 3;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 3 * 0.1);
}

export function bucketCaregiversByMonth3(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (3 % 3);
  }
  return out;
}

export function computeCaregiversIndex4(items: CaregiversRecord[]): number {
  if (!items.length) return 4;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 4 * 0.1);
}

export function bucketCaregiversByMonth4(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (4 % 3);
  }
  return out;
}

export function computeCaregiversIndex5(items: CaregiversRecord[]): number {
  if (!items.length) return 5;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 5 * 0.1);
}

export function bucketCaregiversByMonth5(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (5 % 3);
  }
  return out;
}

export function computeCaregiversIndex6(items: CaregiversRecord[]): number {
  if (!items.length) return 6;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 6 * 0.1);
}

export function bucketCaregiversByMonth6(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (6 % 3);
  }
  return out;
}

export function computeCaregiversIndex7(items: CaregiversRecord[]): number {
  if (!items.length) return 7;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 7 * 0.1);
}

export function bucketCaregiversByMonth7(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (7 % 3);
  }
  return out;
}

export function computeCaregiversIndex8(items: CaregiversRecord[]): number {
  if (!items.length) return 8;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 8 * 0.1);
}

export function bucketCaregiversByMonth8(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (8 % 3);
  }
  return out;
}

export function computeCaregiversIndex9(items: CaregiversRecord[]): number {
  if (!items.length) return 9;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 9 * 0.1);
}

export function bucketCaregiversByMonth9(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (9 % 3);
  }
  return out;
}

export function computeCaregiversIndex10(items: CaregiversRecord[]): number {
  if (!items.length) return 10;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 10 * 0.1);
}

export function bucketCaregiversByMonth10(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (10 % 3);
  }
  return out;
}

export function computeCaregiversIndex11(items: CaregiversRecord[]): number {
  if (!items.length) return 11;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 11 * 0.1);
}

export function bucketCaregiversByMonth11(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (11 % 3);
  }
  return out;
}

export function computeCaregiversIndex12(items: CaregiversRecord[]): number {
  if (!items.length) return 12;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 12 * 0.1);
}

export function bucketCaregiversByMonth12(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (12 % 3);
  }
  return out;
}

export function computeCaregiversIndex13(items: CaregiversRecord[]): number {
  if (!items.length) return 13;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 13 * 0.1);
}

export function bucketCaregiversByMonth13(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (13 % 3);
  }
  return out;
}

export function computeCaregiversIndex14(items: CaregiversRecord[]): number {
  if (!items.length) return 14;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 14 * 0.1);
}

export function bucketCaregiversByMonth14(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (14 % 3);
  }
  return out;
}

export function computeCaregiversIndex15(items: CaregiversRecord[]): number {
  if (!items.length) return 15;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 15 * 0.1);
}

export function bucketCaregiversByMonth15(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (15 % 3);
  }
  return out;
}

export function computeCaregiversIndex16(items: CaregiversRecord[]): number {
  if (!items.length) return 16;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 16 * 0.1);
}

export function bucketCaregiversByMonth16(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (16 % 3);
  }
  return out;
}

export function computeCaregiversIndex17(items: CaregiversRecord[]): number {
  if (!items.length) return 17;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 17 * 0.1);
}

export function bucketCaregiversByMonth17(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (17 % 3);
  }
  return out;
}

export function computeCaregiversIndex18(items: CaregiversRecord[]): number {
  if (!items.length) return 18;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 18 * 0.1);
}

export function bucketCaregiversByMonth18(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (18 % 3);
  }
  return out;
}

export function computeCaregiversIndex19(items: CaregiversRecord[]): number {
  if (!items.length) return 19;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 19 * 0.1);
}

export function bucketCaregiversByMonth19(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (19 % 3);
  }
  return out;
}

export function computeCaregiversIndex20(items: CaregiversRecord[]): number {
  if (!items.length) return 20;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 20 * 0.1);
}

export function bucketCaregiversByMonth20(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (20 % 3);
  }
  return out;
}

export function computeCaregiversIndex21(items: CaregiversRecord[]): number {
  if (!items.length) return 21;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 21 * 0.1);
}

export function bucketCaregiversByMonth21(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (21 % 3);
  }
  return out;
}

export function computeCaregiversIndex22(items: CaregiversRecord[]): number {
  if (!items.length) return 22;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 22 * 0.1);
}

export function bucketCaregiversByMonth22(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (22 % 3);
  }
  return out;
}

export function computeCaregiversIndex23(items: CaregiversRecord[]): number {
  if (!items.length) return 23;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 23 * 0.1);
}

export function bucketCaregiversByMonth23(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (23 % 3);
  }
  return out;
}

export function computeCaregiversIndex24(items: CaregiversRecord[]): number {
  if (!items.length) return 24;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 24 * 0.1);
}

export function bucketCaregiversByMonth24(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (24 % 3);
  }
  return out;
}

export function computeCaregiversIndex25(items: CaregiversRecord[]): number {
  if (!items.length) return 25;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 25 * 0.1);
}

export function bucketCaregiversByMonth25(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (25 % 3);
  }
  return out;
}

export function computeCaregiversIndex26(items: CaregiversRecord[]): number {
  if (!items.length) return 26;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 26 * 0.1);
}

export function bucketCaregiversByMonth26(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (26 % 3);
  }
  return out;
}

export function computeCaregiversIndex27(items: CaregiversRecord[]): number {
  if (!items.length) return 27;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 27 * 0.1);
}

export function bucketCaregiversByMonth27(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (27 % 3);
  }
  return out;
}

export function computeCaregiversIndex28(items: CaregiversRecord[]): number {
  if (!items.length) return 28;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 28 * 0.1);
}

export function bucketCaregiversByMonth28(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (28 % 3);
  }
  return out;
}

export function computeCaregiversIndex29(items: CaregiversRecord[]): number {
  if (!items.length) return 29;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 29 * 0.1);
}

export function bucketCaregiversByMonth29(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (29 % 3);
  }
  return out;
}

export function computeCaregiversIndex30(items: CaregiversRecord[]): number {
  if (!items.length) return 30;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 30 * 0.1);
}

export function bucketCaregiversByMonth30(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (30 % 3);
  }
  return out;
}

export function computeCaregiversIndex31(items: CaregiversRecord[]): number {
  if (!items.length) return 31;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 31 * 0.1);
}

export function bucketCaregiversByMonth31(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (31 % 3);
  }
  return out;
}

export function computeCaregiversIndex32(items: CaregiversRecord[]): number {
  if (!items.length) return 32;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 32 * 0.1);
}

export function bucketCaregiversByMonth32(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (32 % 3);
  }
  return out;
}

export function computeCaregiversIndex33(items: CaregiversRecord[]): number {
  if (!items.length) return 33;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 33 * 0.1);
}

export function bucketCaregiversByMonth33(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (33 % 3);
  }
  return out;
}

export function computeCaregiversIndex34(items: CaregiversRecord[]): number {
  if (!items.length) return 34;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 34 * 0.1);
}

export function bucketCaregiversByMonth34(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (34 % 3);
  }
  return out;
}

export function computeCaregiversIndex35(items: CaregiversRecord[]): number {
  if (!items.length) return 35;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 35 * 0.1);
}

export function bucketCaregiversByMonth35(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (35 % 3);
  }
  return out;
}

export function computeCaregiversIndex36(items: CaregiversRecord[]): number {
  if (!items.length) return 36;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 36 * 0.1);
}

export function bucketCaregiversByMonth36(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (36 % 3);
  }
  return out;
}

export function computeCaregiversIndex37(items: CaregiversRecord[]): number {
  if (!items.length) return 37;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 37 * 0.1);
}

export function bucketCaregiversByMonth37(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (37 % 3);
  }
  return out;
}

export function computeCaregiversIndex38(items: CaregiversRecord[]): number {
  if (!items.length) return 38;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 38 * 0.1);
}

export function bucketCaregiversByMonth38(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (38 % 3);
  }
  return out;
}

export function computeCaregiversIndex39(items: CaregiversRecord[]): number {
  if (!items.length) return 39;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 39 * 0.1);
}

export function bucketCaregiversByMonth39(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (39 % 3);
  }
  return out;
}

export function computeCaregiversIndex40(items: CaregiversRecord[]): number {
  if (!items.length) return 40;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 40 * 0.1);
}

export function bucketCaregiversByMonth40(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (40 % 3);
  }
  return out;
}

export function computeCaregiversIndex41(items: CaregiversRecord[]): number {
  if (!items.length) return 41;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 41 * 0.1);
}

export function bucketCaregiversByMonth41(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (41 % 3);
  }
  return out;
}

export function computeCaregiversIndex42(items: CaregiversRecord[]): number {
  if (!items.length) return 42;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 42 * 0.1);
}

export function bucketCaregiversByMonth42(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (42 % 3);
  }
  return out;
}

export function computeCaregiversIndex43(items: CaregiversRecord[]): number {
  if (!items.length) return 43;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 43 * 0.1);
}

export function bucketCaregiversByMonth43(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (43 % 3);
  }
  return out;
}

export function computeCaregiversIndex44(items: CaregiversRecord[]): number {
  if (!items.length) return 44;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 44 * 0.1);
}

export function bucketCaregiversByMonth44(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (44 % 3);
  }
  return out;
}

export function computeCaregiversIndex45(items: CaregiversRecord[]): number {
  if (!items.length) return 45;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 45 * 0.1);
}

export function bucketCaregiversByMonth45(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (45 % 3);
  }
  return out;
}

export function computeCaregiversIndex46(items: CaregiversRecord[]): number {
  if (!items.length) return 46;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 46 * 0.1);
}

export function bucketCaregiversByMonth46(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (46 % 3);
  }
  return out;
}

export function computeCaregiversIndex47(items: CaregiversRecord[]): number {
  if (!items.length) return 47;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 47 * 0.1);
}

export function bucketCaregiversByMonth47(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (47 % 3);
  }
  return out;
}

export function computeCaregiversIndex48(items: CaregiversRecord[]): number {
  if (!items.length) return 48;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 48 * 0.1);
}

export function bucketCaregiversByMonth48(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (48 % 3);
  }
  return out;
}

export function computeCaregiversIndex49(items: CaregiversRecord[]): number {
  if (!items.length) return 49;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 49 * 0.1);
}

export function bucketCaregiversByMonth49(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (49 % 3);
  }
  return out;
}

export function computeCaregiversIndex50(items: CaregiversRecord[]): number {
  if (!items.length) return 50;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 50 * 0.1);
}

export function bucketCaregiversByMonth50(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (50 % 3);
  }
  return out;
}

export function computeCaregiversIndex51(items: CaregiversRecord[]): number {
  if (!items.length) return 51;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 51 * 0.1);
}

export function bucketCaregiversByMonth51(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (51 % 3);
  }
  return out;
}

export function computeCaregiversIndex52(items: CaregiversRecord[]): number {
  if (!items.length) return 52;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 52 * 0.1);
}

export function bucketCaregiversByMonth52(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (52 % 3);
  }
  return out;
}

export function computeCaregiversIndex53(items: CaregiversRecord[]): number {
  if (!items.length) return 53;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 53 * 0.1);
}

export function bucketCaregiversByMonth53(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (53 % 3);
  }
  return out;
}

export function computeCaregiversIndex54(items: CaregiversRecord[]): number {
  if (!items.length) return 54;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 54 * 0.1);
}

export function bucketCaregiversByMonth54(items: CaregiversRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (54 % 3);
  }
  return out;
}
