import type { FamilyPortalId, FamilyPortalRecord } from '../types/family-portal';
import { seedFamilyPortalRecords } from '../seeds/family-portal';

class FamilyPortalMemoryStore {
  private data = new Map<string, FamilyPortalRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedFamilyPortalRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): FamilyPortalRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: FamilyPortalId | string): FamilyPortalRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: FamilyPortalRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: FamilyPortalId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const familyPortalStore = new FamilyPortalMemoryStore();
