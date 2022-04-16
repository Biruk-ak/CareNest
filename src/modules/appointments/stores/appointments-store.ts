import type { AppointmentsId, AppointmentsRecord } from '../types/appointments';
import { seedAppointmentsRecords } from '../seeds/appointments';

class AppointmentsMemoryStore {
  private data = new Map<string, AppointmentsRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedAppointmentsRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): AppointmentsRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: AppointmentsId | string): AppointmentsRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: AppointmentsRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: AppointmentsId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const appointmentsStore = new AppointmentsMemoryStore();
