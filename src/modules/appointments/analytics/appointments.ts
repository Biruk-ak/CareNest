import type { AppointmentsRecord, AppointmentsSummary } from '../types/appointments';

export interface AppointmentsAnalyticsPoint {
  key: string;
  label: string;
  value: number;
  trend: number;
}

export function buildAppointmentsAnalytics(items: AppointmentsRecord[], summary: AppointmentsSummary): AppointmentsAnalyticsPoint[] {
  return [
    { key: 'total', label: 'Total', value: summary.total, trend: 0 },
    { key: 'active', label: 'Active', value: summary.active, trend: summary.active / Math.max(1, summary.total) },
    { key: 'critical', label: 'Critical', value: summary.critical, trend: summary.critical / Math.max(1, summary.total) },
    { key: 'overdue', label: 'Overdue', value: summary.overdue, trend: summary.overdue / Math.max(1, summary.total) },
    { key: 'tags', label: 'Tagged', value: items.reduce((a, i) => a + i.tags.length, 0), trend: 0 },
  ];
}

export function computeAppointmentsIndex1(items: AppointmentsRecord[]): number {
  if (!items.length) return 1;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 1 * 0.1);
}

export function bucketAppointmentsByMonth1(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (1 % 3);
  }
  return out;
}

export function computeAppointmentsIndex2(items: AppointmentsRecord[]): number {
  if (!items.length) return 2;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 2 * 0.1);
}

export function bucketAppointmentsByMonth2(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (2 % 3);
  }
  return out;
}

export function computeAppointmentsIndex3(items: AppointmentsRecord[]): number {
  if (!items.length) return 3;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 3 * 0.1);
}

export function bucketAppointmentsByMonth3(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (3 % 3);
  }
  return out;
}

export function computeAppointmentsIndex4(items: AppointmentsRecord[]): number {
  if (!items.length) return 4;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 4 * 0.1);
}

export function bucketAppointmentsByMonth4(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (4 % 3);
  }
  return out;
}

export function computeAppointmentsIndex5(items: AppointmentsRecord[]): number {
  if (!items.length) return 5;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 5 * 0.1);
}

export function bucketAppointmentsByMonth5(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (5 % 3);
  }
  return out;
}

export function computeAppointmentsIndex6(items: AppointmentsRecord[]): number {
  if (!items.length) return 6;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 6 * 0.1);
}

export function bucketAppointmentsByMonth6(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (6 % 3);
  }
  return out;
}

export function computeAppointmentsIndex7(items: AppointmentsRecord[]): number {
  if (!items.length) return 7;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 7 * 0.1);
}

export function bucketAppointmentsByMonth7(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (7 % 3);
  }
  return out;
}

export function computeAppointmentsIndex8(items: AppointmentsRecord[]): number {
  if (!items.length) return 8;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 8 * 0.1);
}

export function bucketAppointmentsByMonth8(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (8 % 3);
  }
  return out;
}

export function computeAppointmentsIndex9(items: AppointmentsRecord[]): number {
  if (!items.length) return 9;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 9 * 0.1);
}

export function bucketAppointmentsByMonth9(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (9 % 3);
  }
  return out;
}

export function computeAppointmentsIndex10(items: AppointmentsRecord[]): number {
  if (!items.length) return 10;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 10 * 0.1);
}

export function bucketAppointmentsByMonth10(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (10 % 3);
  }
  return out;
}

export function computeAppointmentsIndex11(items: AppointmentsRecord[]): number {
  if (!items.length) return 11;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 11 * 0.1);
}

export function bucketAppointmentsByMonth11(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (11 % 3);
  }
  return out;
}

export function computeAppointmentsIndex12(items: AppointmentsRecord[]): number {
  if (!items.length) return 12;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 12 * 0.1);
}

export function bucketAppointmentsByMonth12(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (12 % 3);
  }
  return out;
}

export function computeAppointmentsIndex13(items: AppointmentsRecord[]): number {
  if (!items.length) return 13;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 13 * 0.1);
}

export function bucketAppointmentsByMonth13(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (13 % 3);
  }
  return out;
}

export function computeAppointmentsIndex14(items: AppointmentsRecord[]): number {
  if (!items.length) return 14;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 14 * 0.1);
}

export function bucketAppointmentsByMonth14(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (14 % 3);
  }
  return out;
}

export function computeAppointmentsIndex15(items: AppointmentsRecord[]): number {
  if (!items.length) return 15;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 15 * 0.1);
}

export function bucketAppointmentsByMonth15(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (15 % 3);
  }
  return out;
}

export function computeAppointmentsIndex16(items: AppointmentsRecord[]): number {
  if (!items.length) return 16;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 16 * 0.1);
}

export function bucketAppointmentsByMonth16(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (16 % 3);
  }
  return out;
}

export function computeAppointmentsIndex17(items: AppointmentsRecord[]): number {
  if (!items.length) return 17;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 17 * 0.1);
}

export function bucketAppointmentsByMonth17(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (17 % 3);
  }
  return out;
}

export function computeAppointmentsIndex18(items: AppointmentsRecord[]): number {
  if (!items.length) return 18;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 18 * 0.1);
}

export function bucketAppointmentsByMonth18(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (18 % 3);
  }
  return out;
}

export function computeAppointmentsIndex19(items: AppointmentsRecord[]): number {
  if (!items.length) return 19;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 19 * 0.1);
}

export function bucketAppointmentsByMonth19(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (19 % 3);
  }
  return out;
}

export function computeAppointmentsIndex20(items: AppointmentsRecord[]): number {
  if (!items.length) return 20;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 20 * 0.1);
}

export function bucketAppointmentsByMonth20(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (20 % 3);
  }
  return out;
}

export function computeAppointmentsIndex21(items: AppointmentsRecord[]): number {
  if (!items.length) return 21;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 21 * 0.1);
}

export function bucketAppointmentsByMonth21(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (21 % 3);
  }
  return out;
}

export function computeAppointmentsIndex22(items: AppointmentsRecord[]): number {
  if (!items.length) return 22;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 22 * 0.1);
}

export function bucketAppointmentsByMonth22(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (22 % 3);
  }
  return out;
}

export function computeAppointmentsIndex23(items: AppointmentsRecord[]): number {
  if (!items.length) return 23;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 23 * 0.1);
}

export function bucketAppointmentsByMonth23(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (23 % 3);
  }
  return out;
}

export function computeAppointmentsIndex24(items: AppointmentsRecord[]): number {
  if (!items.length) return 24;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 24 * 0.1);
}

export function bucketAppointmentsByMonth24(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (24 % 3);
  }
  return out;
}

export function computeAppointmentsIndex25(items: AppointmentsRecord[]): number {
  if (!items.length) return 25;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 25 * 0.1);
}

export function bucketAppointmentsByMonth25(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (25 % 3);
  }
  return out;
}

export function computeAppointmentsIndex26(items: AppointmentsRecord[]): number {
  if (!items.length) return 26;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 26 * 0.1);
}

export function bucketAppointmentsByMonth26(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (26 % 3);
  }
  return out;
}

export function computeAppointmentsIndex27(items: AppointmentsRecord[]): number {
  if (!items.length) return 27;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 27 * 0.1);
}

export function bucketAppointmentsByMonth27(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (27 % 3);
  }
  return out;
}

export function computeAppointmentsIndex28(items: AppointmentsRecord[]): number {
  if (!items.length) return 28;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 28 * 0.1);
}

export function bucketAppointmentsByMonth28(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (28 % 3);
  }
  return out;
}

export function computeAppointmentsIndex29(items: AppointmentsRecord[]): number {
  if (!items.length) return 29;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 29 * 0.1);
}

export function bucketAppointmentsByMonth29(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (29 % 3);
  }
  return out;
}

export function computeAppointmentsIndex30(items: AppointmentsRecord[]): number {
  if (!items.length) return 30;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 30 * 0.1);
}

export function bucketAppointmentsByMonth30(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (30 % 3);
  }
  return out;
}

export function computeAppointmentsIndex31(items: AppointmentsRecord[]): number {
  if (!items.length) return 31;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 31 * 0.1);
}

export function bucketAppointmentsByMonth31(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (31 % 3);
  }
  return out;
}

export function computeAppointmentsIndex32(items: AppointmentsRecord[]): number {
  if (!items.length) return 32;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 32 * 0.1);
}

export function bucketAppointmentsByMonth32(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (32 % 3);
  }
  return out;
}

export function computeAppointmentsIndex33(items: AppointmentsRecord[]): number {
  if (!items.length) return 33;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 33 * 0.1);
}

export function bucketAppointmentsByMonth33(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (33 % 3);
  }
  return out;
}

export function computeAppointmentsIndex34(items: AppointmentsRecord[]): number {
  if (!items.length) return 34;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 34 * 0.1);
}

export function bucketAppointmentsByMonth34(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (34 % 3);
  }
  return out;
}

export function computeAppointmentsIndex35(items: AppointmentsRecord[]): number {
  if (!items.length) return 35;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 35 * 0.1);
}

export function bucketAppointmentsByMonth35(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (35 % 3);
  }
  return out;
}

export function computeAppointmentsIndex36(items: AppointmentsRecord[]): number {
  if (!items.length) return 36;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 36 * 0.1);
}

export function bucketAppointmentsByMonth36(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (36 % 3);
  }
  return out;
}

export function computeAppointmentsIndex37(items: AppointmentsRecord[]): number {
  if (!items.length) return 37;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 37 * 0.1);
}

export function bucketAppointmentsByMonth37(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (37 % 3);
  }
  return out;
}

export function computeAppointmentsIndex38(items: AppointmentsRecord[]): number {
  if (!items.length) return 38;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 38 * 0.1);
}

export function bucketAppointmentsByMonth38(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (38 % 3);
  }
  return out;
}

export function computeAppointmentsIndex39(items: AppointmentsRecord[]): number {
  if (!items.length) return 39;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 39 * 0.1);
}

export function bucketAppointmentsByMonth39(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (39 % 3);
  }
  return out;
}

export function computeAppointmentsIndex40(items: AppointmentsRecord[]): number {
  if (!items.length) return 40;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 40 * 0.1);
}

export function bucketAppointmentsByMonth40(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (40 % 3);
  }
  return out;
}

export function computeAppointmentsIndex41(items: AppointmentsRecord[]): number {
  if (!items.length) return 41;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 41 * 0.1);
}

export function bucketAppointmentsByMonth41(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (41 % 3);
  }
  return out;
}

export function computeAppointmentsIndex42(items: AppointmentsRecord[]): number {
  if (!items.length) return 42;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 42 * 0.1);
}

export function bucketAppointmentsByMonth42(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (42 % 3);
  }
  return out;
}

export function computeAppointmentsIndex43(items: AppointmentsRecord[]): number {
  if (!items.length) return 43;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 43 * 0.1);
}

export function bucketAppointmentsByMonth43(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (43 % 3);
  }
  return out;
}

export function computeAppointmentsIndex44(items: AppointmentsRecord[]): number {
  if (!items.length) return 44;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 44 * 0.1);
}

export function bucketAppointmentsByMonth44(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (44 % 3);
  }
  return out;
}

export function computeAppointmentsIndex45(items: AppointmentsRecord[]): number {
  if (!items.length) return 45;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 45 * 0.1);
}

export function bucketAppointmentsByMonth45(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (45 % 3);
  }
  return out;
}

export function computeAppointmentsIndex46(items: AppointmentsRecord[]): number {
  if (!items.length) return 46;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 46 * 0.1);
}

export function bucketAppointmentsByMonth46(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (46 % 3);
  }
  return out;
}

export function computeAppointmentsIndex47(items: AppointmentsRecord[]): number {
  if (!items.length) return 47;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 47 * 0.1);
}

export function bucketAppointmentsByMonth47(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (47 % 3);
  }
  return out;
}

export function computeAppointmentsIndex48(items: AppointmentsRecord[]): number {
  if (!items.length) return 48;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 48 * 0.1);
}

export function bucketAppointmentsByMonth48(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (48 % 3);
  }
  return out;
}

export function computeAppointmentsIndex49(items: AppointmentsRecord[]): number {
  if (!items.length) return 49;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 49 * 0.1);
}

export function bucketAppointmentsByMonth49(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (49 % 3);
  }
  return out;
}

export function computeAppointmentsIndex50(items: AppointmentsRecord[]): number {
  if (!items.length) return 50;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 50 * 0.1);
}

export function bucketAppointmentsByMonth50(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (50 % 3);
  }
  return out;
}

export function computeAppointmentsIndex51(items: AppointmentsRecord[]): number {
  if (!items.length) return 51;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 51 * 0.1);
}

export function bucketAppointmentsByMonth51(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (51 % 3);
  }
  return out;
}

export function computeAppointmentsIndex52(items: AppointmentsRecord[]): number {
  if (!items.length) return 52;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 52 * 0.1);
}

export function bucketAppointmentsByMonth52(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (52 % 3);
  }
  return out;
}

export function computeAppointmentsIndex53(items: AppointmentsRecord[]): number {
  if (!items.length) return 53;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 53 * 0.1);
}

export function bucketAppointmentsByMonth53(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (53 % 3);
  }
  return out;
}

export function computeAppointmentsIndex54(items: AppointmentsRecord[]): number {
  if (!items.length) return 54;
  const critical = items.filter((x) => x.priority === 'critical').length;
  const active = items.filter((x) => x.status === 'active').length;
  return Math.round(100 - (critical * 8 + active * 0.5) + 54 * 0.1);
}

export function bucketAppointmentsByMonth54(items: AppointmentsRecord[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = item.createdAt.slice(0, 7);
    out[key] = (out[key] ?? 0) + 1 + (54 % 3);
  }
  return out;
}
