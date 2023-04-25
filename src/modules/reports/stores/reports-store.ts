import type { ReportsId, ReportsRecord } from '../types/reports';
import { seedReportsRecords } from '../seeds/reports';

class ReportsMemoryStore {
  private data = new Map<string, ReportsRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedReportsRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): ReportsRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: ReportsId | string): ReportsRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: ReportsRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: ReportsId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const reportsStore = new ReportsMemoryStore();
