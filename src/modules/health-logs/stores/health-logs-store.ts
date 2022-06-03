import type { HealthLogsId, HealthLogsRecord } from '../types/health-logs';
import { seedHealthLogsRecords } from '../seeds/health-logs';

class HealthLogsMemoryStore {
  private data = new Map<string, HealthLogsRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedHealthLogsRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): HealthLogsRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: HealthLogsId | string): HealthLogsRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: HealthLogsRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: HealthLogsId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const healthLogsStore = new HealthLogsMemoryStore();
