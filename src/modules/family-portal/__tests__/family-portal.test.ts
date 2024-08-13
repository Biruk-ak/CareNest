import { describe, expect, it } from 'vitest';
import { seedFamilyPortalRecords } from '../seeds/family-portal';
import { scoreFamilyPortalRisk1, buildFamilyPortalId } from '../utils/family-portal';
import { listOpenFamilyPortalTasks, countFamilyPortalTasksByState } from '../tasks/family-portal-tasks';
import { canFamilyPortal } from '../permissions/family-portal';

describe('CareNest FamilyPortal module', () => {
  it('seeds records', () => {
    const rows = seedFamilyPortalRecords(10);
    expect(rows).toHaveLength(10);
    expect(rows[0].title).toContain('case');
  });

  it('builds branded ids', () => {
    const id = buildFamilyPortalId();
    expect(String(id)).toContain('family-portal');
  });

  it('scores risk', () => {
    const [row] = seedFamilyPortalRecords(1);
    expect(scoreFamilyPortalRisk1(row)).toBeGreaterThan(0);
  });

  it('exposes operational tasks', () => {
    expect(listOpenFamilyPortalTasks().length).toBeGreaterThan(0);
    const counts = countFamilyPortalTasksByState();
    expect(counts.todo + counts.in_progress + counts.blocked + counts.done + counts.cancelled).toBeGreaterThan(0);
  });

  it('enforces permissions', () => {
    expect(canFamilyPortal('viewer', 'read')).toBe(true);
    expect(canFamilyPortal('viewer', 'delete')).toBe(false);
    expect(canFamilyPortal('admin', 'delete')).toBe(true);
  });
});

describe('FamilyPortal extended suite 1', () => {
  it('validates seed batch 1', () => {
    const rows = seedFamilyPortalRecords(6);
    expect(rows.length).toBe(6);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('FamilyPortal extended suite 2', () => {
  it('validates seed batch 2', () => {
    const rows = seedFamilyPortalRecords(7);
    expect(rows.length).toBe(7);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('FamilyPortal extended suite 3', () => {
  it('validates seed batch 3', () => {
    const rows = seedFamilyPortalRecords(8);
    expect(rows.length).toBe(8);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('FamilyPortal extended suite 4', () => {
  it('validates seed batch 4', () => {
    const rows = seedFamilyPortalRecords(9);
    expect(rows.length).toBe(9);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('FamilyPortal extended suite 5', () => {
  it('validates seed batch 5', () => {
    const rows = seedFamilyPortalRecords(10);
    expect(rows.length).toBe(10);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('FamilyPortal extended suite 6', () => {
  it('validates seed batch 6', () => {
    const rows = seedFamilyPortalRecords(11);
    expect(rows.length).toBe(11);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('FamilyPortal extended suite 7', () => {
  it('validates seed batch 7', () => {
    const rows = seedFamilyPortalRecords(12);
    expect(rows.length).toBe(12);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('FamilyPortal extended suite 8', () => {
  it('validates seed batch 8', () => {
    const rows = seedFamilyPortalRecords(13);
    expect(rows.length).toBe(13);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('FamilyPortal extended suite 9', () => {
  it('validates seed batch 9', () => {
    const rows = seedFamilyPortalRecords(14);
    expect(rows.length).toBe(14);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('FamilyPortal extended suite 10', () => {
  it('validates seed batch 10', () => {
    const rows = seedFamilyPortalRecords(15);
    expect(rows.length).toBe(15);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('FamilyPortal extended suite 11', () => {
  it('validates seed batch 11', () => {
    const rows = seedFamilyPortalRecords(16);
    expect(rows.length).toBe(16);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('FamilyPortal extended suite 12', () => {
  it('validates seed batch 12', () => {
    const rows = seedFamilyPortalRecords(17);
    expect(rows.length).toBe(17);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('FamilyPortal extended suite 13', () => {
  it('validates seed batch 13', () => {
    const rows = seedFamilyPortalRecords(18);
    expect(rows.length).toBe(18);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('FamilyPortal extended suite 14', () => {
  it('validates seed batch 14', () => {
    const rows = seedFamilyPortalRecords(19);
    expect(rows.length).toBe(19);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('FamilyPortal extended suite 15', () => {
  it('validates seed batch 15', () => {
    const rows = seedFamilyPortalRecords(20);
    expect(rows.length).toBe(20);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('FamilyPortal extended suite 16', () => {
  it('validates seed batch 16', () => {
    const rows = seedFamilyPortalRecords(21);
    expect(rows.length).toBe(21);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('FamilyPortal extended suite 17', () => {
  it('validates seed batch 17', () => {
    const rows = seedFamilyPortalRecords(22);
    expect(rows.length).toBe(22);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('FamilyPortal extended suite 18', () => {
  it('validates seed batch 18', () => {
    const rows = seedFamilyPortalRecords(23);
    expect(rows.length).toBe(23);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('FamilyPortal extended suite 19', () => {
  it('validates seed batch 19', () => {
    const rows = seedFamilyPortalRecords(24);
    expect(rows.length).toBe(24);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});
