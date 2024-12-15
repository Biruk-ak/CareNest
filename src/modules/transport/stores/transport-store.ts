import type { TransportId, TransportRecord } from '../types/transport';
import { seedTransportRecords } from '../seeds/transport';

class TransportMemoryStore {
  private data = new Map<string, TransportRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedTransportRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): TransportRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: TransportId | string): TransportRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: TransportRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: TransportId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const transportStore = new TransportMemoryStore();
