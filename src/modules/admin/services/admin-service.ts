import type {
  AdminCreateInput,
  AdminFilter,
  AdminId,
  AdminPage,
  AdminRecord,
  AdminSummary,
  AdminUpdateInput,
} from '../types/admin';
import { adminCreateSchema, adminFilterSchema, adminUpdateSchema } from '../validators/admin';
import { adminStore } from '../stores/admin-store';
import { buildAdminId, nowIso, paginateAdmin } from '../utils/admin';

/** Application service for Admin domain operations */
export class AdminService {
  constructor(private readonly store = adminStore) {}

  async list(filter: AdminFilter = {}): Promise<AdminPage> {
    const parsed = adminFilterSchema.parse(filter);
    const all = this.store.getAll();
    const filtered = all.filter((item) => matchesAdminFilter(item, parsed));
    return paginateAdmin(filtered, parsed.page ?? 1, parsed.pageSize ?? 25, parsed.sortBy as keyof AdminRecord | undefined, parsed.sortDir);
  }

  async getById(id: AdminId): Promise<AdminRecord | null> {
    return this.store.getById(id) ?? null;
  }

  async create(input: AdminCreateInput, actorId: string, facilityId: string): Promise<AdminRecord> {
    const data = adminCreateSchema.parse(input);
    const stamp = nowIso();
    const record: AdminRecord = {
      id: buildAdminId(),
      title: data.title,
      description: data.description,
      status: data.status ?? 'draft',
      priority: data.priority ?? 'normal',
      visibility: data.visibility ?? 'care-team',
      residentId: data.residentId,
      caregiverId: data.caregiverId,
      tags: data.tags ?? [],
      notes: data.notes ?? [],
      metadata: data.metadata ?? {},
      createdAt: stamp,
      updatedAt: stamp,
      createdBy: actorId,
      updatedBy: actorId,
      version: 1,
      facilityId,
    };
    this.store.upsert(record);
    return record;
  }

  async update(input: AdminUpdateInput, actorId: string): Promise<AdminRecord> {
    const data = adminUpdateSchema.parse(input);
    const existing = this.store.getById(data.id as AdminId);
    if (!existing) throw new Error('Admin record not found');
    const next: AdminRecord = {
      ...existing,
      ...data,
      id: existing.id,
      updatedAt: nowIso(),
      updatedBy: actorId,
      version: existing.version + 1,
      tags: data.tags ?? existing.tags,
      notes: data.notes ?? existing.notes,
      metadata: data.metadata ?? existing.metadata,
    };
    this.store.upsert(next);
    return next;
  }

  async remove(id: AdminId): Promise<boolean> {
    return this.store.remove(id);
  }

  async summary(facilityId?: string): Promise<AdminSummary> {
    const items = this.store.getAll().filter((r) => !facilityId || r.facilityId === facilityId);
    const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    return {
      total: items.length,
      active: items.filter((i) => i.status === 'active').length,
      critical: items.filter((i) => i.priority === 'critical').length,
      completedThisWeek: items.filter((i) => i.status === 'completed' && new Date(i.updatedAt).getTime() >= weekAgo).length,
      overdue: items.filter((i) => i.status === 'active' && i.priority === 'high').length,
    };
  }

  async analyzeAdminSignal1(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 1 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 1 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal2(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 2 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 2 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal3(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 3 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 3 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal4(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 4 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 4 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal5(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 5 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 5 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal6(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 6 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 6 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal7(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 7 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 7 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal8(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 8 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 8 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal9(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 9 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 9 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal10(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 10 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 10 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal11(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 11 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 11 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal12(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 12 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 12 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal13(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 13 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 13 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal14(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 14 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 14 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal15(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 15 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 15 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal16(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 16 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 16 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal17(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 17 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 17 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal18(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 18 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 18 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal19(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 19 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 19 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal20(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 20 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 20 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal21(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 21 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 21 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal22(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 22 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 22 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal23(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 23 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 23 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal24(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 24 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 24 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal25(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 25 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 25 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal26(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 26 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 26 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal27(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 27 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 27 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal28(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 28 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 28 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAdminSignal29(id: AdminId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 29 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 29 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

}

function matchesAdminFilter(item: AdminRecord, filter: AdminFilter): boolean {
  if (filter.status?.length && !filter.status.includes(item.status)) return false;
  if (filter.priority?.length && !filter.priority.includes(item.priority)) return false;
  if (filter.residentId && item.residentId !== filter.residentId) return false;
  if (filter.caregiverId && item.caregiverId !== filter.caregiverId) return false;
  if (filter.query) {
    const q = filter.query.toLowerCase();
    const hay = `${item.title} ${item.description} ${item.tags.join(' ')}`.toLowerCase();
    if (!hay.includes(q)) return false;
  }
  if (filter.from && item.createdAt < filter.from) return false;
  if (filter.to && item.createdAt > filter.to) return false;
  return true;
}

export const adminService = new AdminService();
