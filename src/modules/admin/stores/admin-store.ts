import type { AdminId, AdminRecord } from '../types/admin';
import { seedAdminRecords } from '../seeds/admin';

class AdminMemoryStore {
  private data = new Map<string, AdminRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedAdminRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): AdminRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: AdminId | string): AdminRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: AdminRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: AdminId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const adminStore = new AdminMemoryStore();
