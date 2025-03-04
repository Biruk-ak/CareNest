import type { QualityMetricsId, QualityMetricsRecord } from '../types/quality-metrics';
import { seedQualityMetricsRecords } from '../seeds/quality-metrics';

class QualityMetricsMemoryStore {
  private data = new Map<string, QualityMetricsRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedQualityMetricsRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): QualityMetricsRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: QualityMetricsId | string): QualityMetricsRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: QualityMetricsRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: QualityMetricsId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const qualityMetricsStore = new QualityMetricsMemoryStore();
