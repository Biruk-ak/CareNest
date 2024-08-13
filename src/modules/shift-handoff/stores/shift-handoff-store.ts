import type { ShiftHandoffId, ShiftHandoffRecord } from '../types/shift-handoff';
import { seedShiftHandoffRecords } from '../seeds/shift-handoff';

class ShiftHandoffMemoryStore {
  private data = new Map<string, ShiftHandoffRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedShiftHandoffRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): ShiftHandoffRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: ShiftHandoffId | string): ShiftHandoffRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: ShiftHandoffRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: ShiftHandoffId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const shiftHandoffStore = new ShiftHandoffMemoryStore();
