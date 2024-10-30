import type { PharmacyFilter, PharmacyRecord } from '../types/pharmacy';

export function applyPharmacyQuickFilters(items: PharmacyRecord[], mode: 'all' | 'active' | 'critical' | 'mine', actorId?: string): PharmacyRecord[] {
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

export function mergePharmacyFilters(base: PharmacyFilter, patch: Partial<PharmacyFilter>): PharmacyFilter {
  return { ...base, ...patch };
}

export function rankPharmacyRelevance1(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 1;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance2(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 2;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance3(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 3;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance4(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 4;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance5(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 5;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance6(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 6;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance7(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 7;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance8(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 8;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance9(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 9;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance10(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 10;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance11(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 11;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance12(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 12;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance13(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 13;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance14(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 14;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance15(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 15;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance16(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 16;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance17(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 17;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance18(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 18;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance19(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 19;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance20(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 20;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance21(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 21;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance22(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 22;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance23(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 23;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance24(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 24;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance25(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 25;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance26(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 26;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance27(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 27;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance28(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 28;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance29(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 29;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance30(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 30;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance31(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 31;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance32(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 32;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance33(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 33;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance34(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 34;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance35(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 35;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance36(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 36;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance37(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 37;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance38(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 38;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankPharmacyRelevance39(item: PharmacyRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 39;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}
