import type { BillingId, BillingRecord } from '../types/billing';
import { seedBillingRecords } from '../seeds/billing';

class BillingMemoryStore {
  private data = new Map<string, BillingRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedBillingRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): BillingRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: BillingId | string): BillingRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: BillingRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: BillingId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const billingStore = new BillingMemoryStore();
