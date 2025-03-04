import type { HousingFilter, HousingRecord } from '../types/housing';

export function applyHousingQuickFilters(items: HousingRecord[], mode: 'all' | 'active' | 'critical' | 'mine', actorId?: string): HousingRecord[] {
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

export function mergeHousingFilters(base: HousingFilter, patch: Partial<HousingFilter>): HousingFilter {
  return { ...base, ...patch };
}

export function rankHousingRelevance1(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 1;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance2(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 2;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance3(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 3;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance4(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 4;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance5(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 5;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance6(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 6;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance7(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 7;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance8(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 8;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance9(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 9;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance10(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 10;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance11(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 11;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance12(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 12;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance13(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 13;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance14(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 14;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance15(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 15;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance16(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 16;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance17(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 17;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance18(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 18;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance19(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 19;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance20(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 20;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance21(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 21;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance22(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 22;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance23(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 23;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance24(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 24;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance25(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 25;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance26(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 26;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance27(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 27;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance28(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 28;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance29(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 29;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance30(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 30;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance31(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 31;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance32(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 32;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance33(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 33;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance34(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 34;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance35(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 35;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance36(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 36;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance37(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 37;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance38(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 38;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankHousingRelevance39(item: HousingRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 39;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}
