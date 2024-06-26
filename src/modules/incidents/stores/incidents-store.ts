import type { IncidentsId, IncidentsRecord } from '../types/incidents';
import { seedIncidentsRecords } from '../seeds/incidents';

class IncidentsMemoryStore {
  private data = new Map<string, IncidentsRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedIncidentsRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): IncidentsRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: IncidentsId | string): IncidentsRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: IncidentsRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: IncidentsId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const incidentsStore = new IncidentsMemoryStore();
