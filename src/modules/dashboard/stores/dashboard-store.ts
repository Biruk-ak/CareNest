import type { DashboardId, DashboardRecord } from '../types/dashboard';
import { seedDashboardRecords } from '../seeds/dashboard';

class DashboardMemoryStore {
  private data = new Map<string, DashboardRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedDashboardRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): DashboardRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: DashboardId | string): DashboardRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: DashboardRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: DashboardId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const dashboardStore = new DashboardMemoryStore();
