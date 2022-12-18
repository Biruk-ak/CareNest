import type { CareScheduleId, CareScheduleRecord } from '../types/care-schedule';
import { seedCareScheduleRecords } from '../seeds/care-schedule';

class CareScheduleMemoryStore {
  private data = new Map<string, CareScheduleRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedCareScheduleRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): CareScheduleRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: CareScheduleId | string): CareScheduleRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: CareScheduleRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: CareScheduleId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const careScheduleStore = new CareScheduleMemoryStore();
