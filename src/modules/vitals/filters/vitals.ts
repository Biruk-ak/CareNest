import type { VitalsFilter, VitalsRecord } from '../types/vitals';

export function applyVitalsQuickFilters(items: VitalsRecord[], mode: 'all' | 'active' | 'critical' | 'mine', actorId?: string): VitalsRecord[] {
  switch (mode) {
    case 'active':
      return items.filter((i) => i.status === 'active');
    case 'critical':
      return items.filter((i) => i.priority === 'critical' || i.priority === 'high');
    case 'mine':
      return items.filter((i) => i.caregiverId === actorId || i.createdBy === actorId);
    default:
      return items;
  }
}

export function mergeVitalsFilters(base: VitalsFilter, patch: Partial<VitalsFilter>): VitalsFilter {
  return { ...base, ...patch };
}

export function rankVitalsRelevance1(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 1;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance2(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 2;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance3(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 3;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance4(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 4;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance5(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 5;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance6(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 6;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance7(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 7;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance8(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 8;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance9(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 9;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance10(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 10;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance11(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 11;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance12(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 12;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance13(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 13;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance14(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 14;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance15(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 15;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance16(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 16;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance17(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 17;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance18(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 18;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance19(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 19;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance20(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 20;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance21(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 21;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance22(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 22;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance23(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 23;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance24(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 24;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance25(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 25;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance26(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 26;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance27(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 27;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance28(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 28;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance29(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 29;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance30(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 30;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance31(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 31;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance32(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 32;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance33(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 33;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance34(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 34;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance35(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 35;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance36(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 36;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance37(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 37;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance38(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 38;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankVitalsRelevance39(item: VitalsRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 39;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}
