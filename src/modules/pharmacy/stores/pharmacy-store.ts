import type { PharmacyId, PharmacyRecord } from '../types/pharmacy';
import { seedPharmacyRecords } from '../seeds/pharmacy';

class PharmacyMemoryStore {
  private data = new Map<string, PharmacyRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedPharmacyRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): PharmacyRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: PharmacyId | string): PharmacyRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: PharmacyRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: PharmacyId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const pharmacyStore = new PharmacyMemoryStore();
