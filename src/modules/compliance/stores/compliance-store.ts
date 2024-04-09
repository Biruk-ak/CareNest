import type { ComplianceId, ComplianceRecord } from '../types/compliance';
import { seedComplianceRecords } from '../seeds/compliance';

class ComplianceMemoryStore {
  private data = new Map<string, ComplianceRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedComplianceRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): ComplianceRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: ComplianceId | string): ComplianceRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: ComplianceRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: ComplianceId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const complianceStore = new ComplianceMemoryStore();
