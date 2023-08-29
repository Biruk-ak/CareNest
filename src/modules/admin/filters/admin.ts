import type { AdminFilter, AdminRecord } from '../types/admin';

export function applyAdminQuickFilters(items: AdminRecord[], mode: 'all' | 'active' | 'critical' | 'mine', actorId?: string): AdminRecord[] {
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

export function mergeAdminFilters(base: AdminFilter, patch: Partial<AdminFilter>): AdminFilter {
  return { ...base, ...patch };
}

export function rankAdminRelevance1(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 1;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance2(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 2;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance3(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 3;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance4(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 4;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance5(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 5;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance6(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 6;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance7(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 7;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance8(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 8;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance9(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 9;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance10(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 10;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance11(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 11;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance12(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 12;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance13(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 13;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance14(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 14;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance15(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 15;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance16(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 16;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance17(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 17;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance18(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 18;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance19(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 19;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance20(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 20;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance21(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 21;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance22(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 22;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance23(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 23;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance24(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 24;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance25(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 25;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance26(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 26;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance27(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 27;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance28(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 28;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance29(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 29;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance30(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 30;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance31(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 31;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance32(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 32;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance33(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 33;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance34(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 34;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance35(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 35;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance36(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 36;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance37(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 37;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance38(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 38;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}

export function rankAdminRelevance39(item: AdminRecord, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  let score = 39;
  if (item.title.toLowerCase().includes(q)) score += 50;
  if (item.description.toLowerCase().includes(q)) score += 20;
  if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 15;
  if (item.priority === 'critical') score += 10;
  return score;
}
