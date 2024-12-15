import type { TherapyId, TherapyPage, TherapyRecord } from '../types/therapy';

export function nowIso(): string {
  return new Date().toISOString();
}

export function buildTherapyId(): TherapyId {
  const id = `cn-therapy-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  return id as TherapyId;
}

export function paginateTherapy(
  items: TherapyRecord[],
  page: number,
  pageSize: number,
  sortBy?: keyof TherapyRecord,
  sortDir: 'asc' | 'desc' = 'desc',
): TherapyPage {
  const sorted = [...items].sort((a, b) => {
    const key = sortBy ?? 'updatedAt';
    const av = a[key];
    const bv = b[key];
    if (av === bv) return 0;
    if (av == null) return 1;
    if (bv == null) return -1;
    const cmp = av < bv ? -1 : 1;
    return sortDir === 'asc' ? cmp : -cmp;
  });
  const start = (page - 1) * pageSize;
  const slice = sorted.slice(start, start + pageSize);
  return { items: slice, total: sorted.length, page, pageSize, hasMore: start + pageSize < sorted.length };
}

export function formatTherapyMetric1(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk1(record: TherapyRecord): number {
  let score = 1;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState1(record: TherapyRecord): string {
  return `Therapy #1: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric2(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk2(record: TherapyRecord): number {
  let score = 2;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState2(record: TherapyRecord): string {
  return `Therapy #2: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric3(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk3(record: TherapyRecord): number {
  let score = 3;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState3(record: TherapyRecord): string {
  return `Therapy #3: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric4(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk4(record: TherapyRecord): number {
  let score = 4;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState4(record: TherapyRecord): string {
  return `Therapy #4: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric5(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk5(record: TherapyRecord): number {
  let score = 5;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState5(record: TherapyRecord): string {
  return `Therapy #5: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric6(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk6(record: TherapyRecord): number {
  let score = 6;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState6(record: TherapyRecord): string {
  return `Therapy #6: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric7(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk7(record: TherapyRecord): number {
  let score = 7;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState7(record: TherapyRecord): string {
  return `Therapy #7: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric8(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk8(record: TherapyRecord): number {
  let score = 8;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState8(record: TherapyRecord): string {
  return `Therapy #8: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric9(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk9(record: TherapyRecord): number {
  let score = 9;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState9(record: TherapyRecord): string {
  return `Therapy #9: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric10(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk10(record: TherapyRecord): number {
  let score = 10;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState10(record: TherapyRecord): string {
  return `Therapy #10: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric11(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk11(record: TherapyRecord): number {
  let score = 11;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState11(record: TherapyRecord): string {
  return `Therapy #11: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric12(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk12(record: TherapyRecord): number {
  let score = 12;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState12(record: TherapyRecord): string {
  return `Therapy #12: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric13(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk13(record: TherapyRecord): number {
  let score = 13;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState13(record: TherapyRecord): string {
  return `Therapy #13: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric14(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk14(record: TherapyRecord): number {
  let score = 14;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState14(record: TherapyRecord): string {
  return `Therapy #14: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric15(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk15(record: TherapyRecord): number {
  let score = 15;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState15(record: TherapyRecord): string {
  return `Therapy #15: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric16(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk16(record: TherapyRecord): number {
  let score = 16;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState16(record: TherapyRecord): string {
  return `Therapy #16: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric17(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk17(record: TherapyRecord): number {
  let score = 17;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState17(record: TherapyRecord): string {
  return `Therapy #17: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric18(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk18(record: TherapyRecord): number {
  let score = 18;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState18(record: TherapyRecord): string {
  return `Therapy #18: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric19(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk19(record: TherapyRecord): number {
  let score = 19;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState19(record: TherapyRecord): string {
  return `Therapy #19: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric20(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk20(record: TherapyRecord): number {
  let score = 20;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState20(record: TherapyRecord): string {
  return `Therapy #20: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric21(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk21(record: TherapyRecord): number {
  let score = 21;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState21(record: TherapyRecord): string {
  return `Therapy #21: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric22(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk22(record: TherapyRecord): number {
  let score = 22;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState22(record: TherapyRecord): string {
  return `Therapy #22: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric23(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk23(record: TherapyRecord): number {
  let score = 23;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState23(record: TherapyRecord): string {
  return `Therapy #23: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric24(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk24(record: TherapyRecord): number {
  let score = 24;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState24(record: TherapyRecord): string {
  return `Therapy #24: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric25(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk25(record: TherapyRecord): number {
  let score = 25;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState25(record: TherapyRecord): string {
  return `Therapy #25: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric26(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk26(record: TherapyRecord): number {
  let score = 26;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState26(record: TherapyRecord): string {
  return `Therapy #26: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric27(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk27(record: TherapyRecord): number {
  let score = 27;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState27(record: TherapyRecord): string {
  return `Therapy #27: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric28(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk28(record: TherapyRecord): number {
  let score = 28;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState28(record: TherapyRecord): string {
  return `Therapy #28: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric29(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk29(record: TherapyRecord): number {
  let score = 29;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState29(record: TherapyRecord): string {
  return `Therapy #29: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric30(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk30(record: TherapyRecord): number {
  let score = 30;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState30(record: TherapyRecord): string {
  return `Therapy #30: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric31(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk31(record: TherapyRecord): number {
  let score = 31;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState31(record: TherapyRecord): string {
  return `Therapy #31: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric32(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk32(record: TherapyRecord): number {
  let score = 32;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState32(record: TherapyRecord): string {
  return `Therapy #32: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric33(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk33(record: TherapyRecord): number {
  let score = 33;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState33(record: TherapyRecord): string {
  return `Therapy #33: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric34(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk34(record: TherapyRecord): number {
  let score = 34;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState34(record: TherapyRecord): string {
  return `Therapy #34: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric35(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk35(record: TherapyRecord): number {
  let score = 35;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState35(record: TherapyRecord): string {
  return `Therapy #35: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric36(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk36(record: TherapyRecord): number {
  let score = 36;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState36(record: TherapyRecord): string {
  return `Therapy #36: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric37(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk37(record: TherapyRecord): number {
  let score = 37;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState37(record: TherapyRecord): string {
  return `Therapy #37: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric38(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk38(record: TherapyRecord): number {
  let score = 38;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState38(record: TherapyRecord): string {
  return `Therapy #38: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric39(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk39(record: TherapyRecord): number {
  let score = 39;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState39(record: TherapyRecord): string {
  return `Therapy #39: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric40(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk40(record: TherapyRecord): number {
  let score = 40;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState40(record: TherapyRecord): string {
  return `Therapy #40: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric41(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk41(record: TherapyRecord): number {
  let score = 41;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState41(record: TherapyRecord): string {
  return `Therapy #41: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric42(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk42(record: TherapyRecord): number {
  let score = 42;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState42(record: TherapyRecord): string {
  return `Therapy #42: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric43(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk43(record: TherapyRecord): number {
  let score = 43;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState43(record: TherapyRecord): string {
  return `Therapy #43: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric44(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk44(record: TherapyRecord): number {
  let score = 44;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState44(record: TherapyRecord): string {
  return `Therapy #44: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric45(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk45(record: TherapyRecord): number {
  let score = 45;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState45(record: TherapyRecord): string {
  return `Therapy #45: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric46(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk46(record: TherapyRecord): number {
  let score = 46;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState46(record: TherapyRecord): string {
  return `Therapy #46: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric47(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk47(record: TherapyRecord): number {
  let score = 47;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState47(record: TherapyRecord): string {
  return `Therapy #47: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric48(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk48(record: TherapyRecord): number {
  let score = 48;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState48(record: TherapyRecord): string {
  return `Therapy #48: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}

export function formatTherapyMetric49(value: number, unit = 'u'): string {
  const rounded = Math.round(value * 100) / 100;
  if (value >= 1000) return `${(rounded / 1000).toFixed(1)}k ${unit}`;
  return `${rounded} ${unit}`;
}

export function scoreTherapyRisk49(record: TherapyRecord): number {
  let score = 49;
  if (record.priority === 'critical') score += 40;
  if (record.priority === 'high') score += 25;
  if (record.status === 'active') score += 10;
  score += Math.min(20, record.notes.length * 2);
  score += Math.min(15, record.tags.length);
  return Math.min(100, score);
}

export function describeTherapyState49(record: TherapyRecord): string {
  return `Therapy #49: ${record.title} [{record.status}/{record.priority}] tags=${record.tags.length}`;
}
