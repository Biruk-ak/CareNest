import type { CaregiversId, CaregiversRecord } from '../types/caregivers';
import { seedCaregiversRecords } from '../seeds/caregivers';

class CaregiversMemoryStore {
  private data = new Map<string, CaregiversRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedCaregiversRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): CaregiversRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: CaregiversId | string): CaregiversRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: CaregiversRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: CaregiversId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const caregiversStore = new CaregiversMemoryStore();
