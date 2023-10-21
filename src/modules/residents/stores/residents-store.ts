import type { ResidentsId, ResidentsRecord } from '../types/residents';
import { seedResidentsRecords } from '../seeds/residents';

class ResidentsMemoryStore {
  private data = new Map<string, ResidentsRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedResidentsRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): ResidentsRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: ResidentsId | string): ResidentsRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: ResidentsRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: ResidentsId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const residentsStore = new ResidentsMemoryStore();
