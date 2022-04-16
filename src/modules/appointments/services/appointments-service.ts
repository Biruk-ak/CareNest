import type {
  AppointmentsCreateInput,
  AppointmentsFilter,
  AppointmentsId,
  AppointmentsPage,
  AppointmentsRecord,
  AppointmentsSummary,
  AppointmentsUpdateInput,
} from '../types/appointments';
import { appointmentsCreateSchema, appointmentsFilterSchema, appointmentsUpdateSchema } from '../validators/appointments';
import { appointmentsStore } from '../stores/appointments-store';
import { buildAppointmentsId, nowIso, paginateAppointments } from '../utils/appointments';

/** Application service for Appointments domain operations */
export class AppointmentsService {
  constructor(private readonly store = appointmentsStore) {}

  async list(filter: AppointmentsFilter = {}): Promise<AppointmentsPage> {
    const parsed = appointmentsFilterSchema.parse(filter);
    const all = this.store.getAll();
    const filtered = all.filter((item) => matchesAppointmentsFilter(item, parsed));
    return paginateAppointments(filtered, parsed.page ?? 1, parsed.pageSize ?? 25, parsed.sortBy as keyof AppointmentsRecord | undefined, parsed.sortDir);
  }

  async getById(id: AppointmentsId): Promise<AppointmentsRecord | null> {
    return this.store.getById(id) ?? null;
  }

  async create(input: AppointmentsCreateInput, actorId: string, facilityId: string): Promise<AppointmentsRecord> {
    const data = appointmentsCreateSchema.parse(input);
    const stamp = nowIso();
    const record: AppointmentsRecord = {
      id: buildAppointmentsId(),
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

  async update(input: AppointmentsUpdateInput, actorId: string): Promise<AppointmentsRecord> {
    const data = appointmentsUpdateSchema.parse(input);
    const existing = this.store.getById(data.id as AppointmentsId);
    if (!existing) throw new Error('Appointments record not found');
    const next: AppointmentsRecord = {
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

  async remove(id: AppointmentsId): Promise<boolean> {
    return this.store.remove(id);
  }

  async summary(facilityId?: string): Promise<AppointmentsSummary> {
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

  async analyzeAppointmentsSignal1(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 1 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 1 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal2(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 2 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 2 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal3(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 3 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 3 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal4(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 4 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 4 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal5(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 5 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 5 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal6(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 6 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 6 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal7(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 7 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 7 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal8(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 8 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 8 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal9(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 9 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 9 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal10(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 10 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 10 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal11(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 11 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 11 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal12(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 12 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 12 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal13(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 13 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 13 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal14(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 14 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 14 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal15(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 15 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 15 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal16(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 16 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 16 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal17(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 17 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 17 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal18(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 18 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 18 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal19(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 19 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 19 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal20(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 20 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 20 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal21(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 21 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 21 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal22(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 22 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 22 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal23(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 23 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 23 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal24(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 24 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 24 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal25(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 25 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 25 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal26(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 26 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 26 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal27(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 27 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 27 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal28(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
    const record = await this.getById(id);
    if (!record) return { score: 0, label: 'missing', details: ['Record not found'] };
    const score = Math.min(100, record.version * 28 + record.tags.length * 3 + (record.priority === 'critical' ? 40 : 10));
    return {
      score,
      label: score > 70 ? 'elevated' : score > 40 ? 'watch' : 'stable',
      details: [`Signal 28 for ${record.title}`, `Status ${record.status}`, `Priority ${record.priority}`],
    };
  }

  async analyzeAppointmentsSignal29(id: AppointmentsId): Promise<{ score: number; label: string; details: string[] }> {
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

function matchesAppointmentsFilter(item: AppointmentsRecord, filter: AppointmentsFilter): boolean {
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

export const appointmentsService = new AppointmentsService();
