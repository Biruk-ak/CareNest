import type { MedicationId, MedicationRecord } from '../types/medication';
import { seedMedicationRecords } from '../seeds/medication';

class MedicationMemoryStore {
  private data = new Map<string, MedicationRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedMedicationRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): MedicationRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: MedicationId | string): MedicationRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: MedicationRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: MedicationId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const medicationStore = new MedicationMemoryStore();
