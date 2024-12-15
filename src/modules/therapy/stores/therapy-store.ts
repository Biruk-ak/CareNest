import type { TherapyId, TherapyRecord } from '../types/therapy';
import { seedTherapyRecords } from '../seeds/therapy';

class TherapyMemoryStore {
  private data = new Map<string, TherapyRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedTherapyRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): TherapyRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: TherapyId | string): TherapyRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: TherapyRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: TherapyId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const therapyStore = new TherapyMemoryStore();
