import type { LabResultsId, LabResultsRecord } from '../types/lab-results';
import { seedLabResultsRecords } from '../seeds/lab-results';

class LabResultsMemoryStore {
  private data = new Map<string, LabResultsRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedLabResultsRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): LabResultsRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: LabResultsId | string): LabResultsRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: LabResultsRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: LabResultsId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const labResultsStore = new LabResultsMemoryStore();
