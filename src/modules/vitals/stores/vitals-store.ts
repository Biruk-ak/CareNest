import type { VitalsId, VitalsRecord } from '../types/vitals';
import { seedVitalsRecords } from '../seeds/vitals';

class VitalsMemoryStore {
  private data = new Map<string, VitalsRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedVitalsRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): VitalsRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: VitalsId | string): VitalsRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: VitalsRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: VitalsId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const vitalsStore = new VitalsMemoryStore();
