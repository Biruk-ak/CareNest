import type { InventoryId, InventoryRecord } from '../types/inventory';
import { seedInventoryRecords } from '../seeds/inventory';

class InventoryMemoryStore {
  private data = new Map<string, InventoryRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedInventoryRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): InventoryRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: InventoryId | string): InventoryRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: InventoryRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: InventoryId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const inventoryStore = new InventoryMemoryStore();
