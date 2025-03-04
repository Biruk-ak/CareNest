import type { HousingId, HousingRecord } from '../types/housing';
import { seedHousingRecords } from '../seeds/housing';

class HousingMemoryStore {
  private data = new Map<string, HousingRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedHousingRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): HousingRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: HousingId | string): HousingRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: HousingRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: HousingId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const housingStore = new HousingMemoryStore();
