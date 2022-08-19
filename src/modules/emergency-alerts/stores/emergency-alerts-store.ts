import type { EmergencyAlertsId, EmergencyAlertsRecord } from '../types/emergency-alerts';
import { seedEmergencyAlertsRecords } from '../seeds/emergency-alerts';

class EmergencyAlertsMemoryStore {
  private data = new Map<string, EmergencyAlertsRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedEmergencyAlertsRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): EmergencyAlertsRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: EmergencyAlertsId | string): EmergencyAlertsRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: EmergencyAlertsRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: EmergencyAlertsId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const emergencyAlertsStore = new EmergencyAlertsMemoryStore();
