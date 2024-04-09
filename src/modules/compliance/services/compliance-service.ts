import type {
  ComplianceCreateInput,
  ComplianceFilter,
  ComplianceId,
  CompliancePage,
  ComplianceRecord,
  ComplianceSummary,
  ComplianceUpdateInput,
} from '../types/compliance';
import { complianceCreateSchema, complianceFilterSchema, complianceUpdateSchema } from '../validators/compliance';
import { complianceStore } from '../stores/compliance-store';
import { buildComplianceId, nowIso, paginateCompliance } from '../utils/compliance';

/** Application service for Compliance domain operations */
export class ComplianceService {
  constructor(private readonly store = complianceStore) {}

  async list(filter: ComplianceFilter = {}): Promise<CompliancePage> {
    const parsed = complianceFilterSchema.parse(filter);
    const all = this.store.getAll();
    const filtered = all.filter((item) => matchesComplianceFilter(item, parsed));
    return paginateCompliance(filtered, parsed.page ?? 1, parsed.pageSize ?? 25, parsed.sortBy as keyof ComplianceRecord | undefined, parsed.sortDir);
  }

  async getById(id: ComplianceId): Promise<ComplianceRecord | null> {
    return this.store.getById(id) ?? null;
  }

  async create(input: ComplianceCreateInput, actorId: string, facilityId: string): Promise<ComplianceRecord> {
    const data = complianceCreateSchema.parse(input);
    const stamp = nowIso();
    const record: ComplianceRecord = {
      id: buildComplianceId(),
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

  async update(input: ComplianceUpdateInput, actorId: string): Promise<ComplianceRecord> {
    const data = complianceUpdateSchema.parse(input);
    const existing = this.store.getById(data.id as ComplianceId);
    if (!existing) throw new Error('Compliance record not found');
    const next: ComplianceRecord = {
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

  async remove(id: ComplianceId): Promise<boolean> {
    return this.store.remove(id);
  }

  async summary(facilityId?: string): Promise<ComplianceSummary> {
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

  async analyzeComplianceSignal1(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 1 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 1 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal2(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 2 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 2 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal3(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 3 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 3 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal4(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 4 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 4 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal5(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 5 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 5 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal6(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 6 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 6 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal7(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 7 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 7 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal8(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 8 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 8 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal9(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 9 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 9 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal10(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 10 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 10 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal11(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 11 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 11 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal12(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 12 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 12 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal13(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 13 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 13 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal14(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 14 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 14 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal15(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 15 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 15 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal16(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 16 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 16 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal17(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 17 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 17 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal18(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 18 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 18 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal19(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 19 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 19 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal20(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 20 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 20 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal21(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 21 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 21 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal22(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 22 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 22 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal23(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 23 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 23 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal24(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 24 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 24 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal25(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 25 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 25 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal26(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 26 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 26 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal27(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 27 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 27 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal28(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 28 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 28 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeComplianceSignal29(id: ComplianceId): Promise<{ score: number; label: string; details: string[] }> {
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

function matchesComplianceFilter(item: ComplianceRecord, filter: ComplianceFilter): boolean {
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

export const complianceService = new ComplianceService();
