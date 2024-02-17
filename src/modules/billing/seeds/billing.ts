import type { BillingId, BillingRecord } from '../types/billing';

const STATUSES = ['draft', 'active', 'paused', 'completed', 'cancelled', 'archived'] as const;
const PRIORITIES = ['low', 'normal', 'high', 'critical'] as const;
const VIS = ['private', 'care-team', 'facility', 'admin'] as const;

export function seedBillingRecords(count = 48): BillingRecord[] {
  const rows: BillingRecord[] = [];
  for (let i = 0; i < count; i++) {
    const id = `seed-billing-${String(i + 1).padStart(4, '0')}` as BillingId;
    const created = new Date(Date.UTC(2024, i % 12, (i % 27) + 1, 8 + (i % 10))).toISOString();
    rows.push({
      id,
      title: `Billing case #${i + 1}`,
      description: `Seeded billing workflow item #${i + 1} for CareNest facility operations.`,
      status: STATUSES[i % STATUSES.length],
      priority: PRIORITIES[i % PRIORITIES.length],
      visibility: VIS[i % VIS.length],
      residentId: `resident-${(i % 20) + 1}`,
      caregiverId: `caregiver-${(i % 12) + 1}`,
      tags: ['billing', `batch-${i % 5}`, i % 2 === 0 ? 'monitored' : 'routine'],
      notes: [`Initial note for billing #${i + 1}`, `Follow-up checkpoint ${(i % 3) + 1}`],
      metadata: { seedIndex: i, module: 'billing', weight: i * 1.5 },
      createdAt: created,
      updatedAt: created,
      createdBy: 'system-seed',
      updatedBy: 'system-seed',
      version: 1 + (i % 4),
      facilityId: `facility-${(i % 3) + 1}`,
    });
  }
  return rows;
}
