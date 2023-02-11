import type { PaymentsId, PaymentsRecord } from '../types/payments';
import { seedPaymentsRecords } from '../seeds/payments';

class PaymentsMemoryStore {
  private data = new Map<string, PaymentsRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedPaymentsRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): PaymentsRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: PaymentsId | string): PaymentsRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: PaymentsRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: PaymentsId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const paymentsStore = new PaymentsMemoryStore();
