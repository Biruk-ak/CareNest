import type { InventoryId, InventoryRecord } from '../types/inventory';

const STATUSES = ['draft', 'active', 'paused', 'completed', 'cancelled', 'archived'] as const;
const PRIORITIES = ['low', 'normal', 'high', 'critical'] as const;
const VIS = ['private', 'care-team', 'facility', 'admin'] as const;

export function seedInventoryRecords(count = 48): InventoryRecord[] {
  const rows: InventoryRecord[] = [];
  for (let i = 0; i < count; i++) {
    const id = `seed-inventory-${String(i + 1).padStart(4, '0')}` as InventoryId;
    const created = new Date(Date.UTC(2024, i % 12, (i % 27) + 1, 8 + (i % 10))).toISOString();
    rows.push({
      id,
      title: `Inventory case #${i + 1}`,
      description: `Seeded inventory workflow item #${i + 1} for CareNest facility operations.`,
      status: STATUSES[i % STATUSES.length],
      priority: PRIORITIES[i % PRIORITIES.length],
      visibility: VIS[i % VIS.length],
      residentId: `resident-${(i % 20) + 1}`,
      caregiverId: `caregiver-${(i % 12) + 1}`,
      tags: ['inventory', `batch-${i % 5}`, i % 2 === 0 ? 'monitored' : 'routine'],
      notes: [`Initial note for inventory #${i + 1}`, `Follow-up checkpoint ${(i % 3) + 1}`],
      metadata: { seedIndex: i, module: 'inventory', weight: i * 1.5 },
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
