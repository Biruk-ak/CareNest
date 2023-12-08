import type { NotificationsId, NotificationsRecord } from '../types/notifications';
import { seedNotificationsRecords } from '../seeds/notifications';

class NotificationsMemoryStore {
  private data = new Map<string, NotificationsRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedNotificationsRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): NotificationsRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: NotificationsId | string): NotificationsRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: NotificationsRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: NotificationsId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const notificationsStore = new NotificationsMemoryStore();
