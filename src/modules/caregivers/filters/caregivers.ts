import type { CaregiversFilter, CaregiversRecord } from '../types/caregivers';

export function applyCaregiversQuickFilters(items: CaregiversRecord[], mode: 'all' | 'active' | 'critical' | 'mine', actorId?: string): CaregiversRecord[] {
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

export function mergeCaregiversFilters(base: CaregiversFilter, patch: Partial<CaregiversFilter>): CaregiversFilter {
  return { ...base, ...patch };
}

export function rankCaregiversRelevance1(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 1;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance2(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 2;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance3(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 3;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance4(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 4;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance5(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 5;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance6(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 6;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance7(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 7;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance8(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 8;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance9(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 9;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance10(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 10;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance11(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 11;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance12(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 12;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance13(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 13;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance14(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 14;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance15(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 15;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance16(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 16;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance17(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 17;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance18(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 18;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance19(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 19;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance20(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 20;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance21(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 21;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance22(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 22;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance23(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 23;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance24(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 24;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance25(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 25;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance26(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 26;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance27(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 27;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance28(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 28;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance29(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 29;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance30(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 30;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance31(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 31;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance32(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 32;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance33(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 33;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance34(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 34;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance35(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 35;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance36(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 36;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance37(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 37;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance38(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 38;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankCaregiversRelevance39(item: CaregiversRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 39;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}
