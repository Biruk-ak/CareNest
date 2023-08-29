import { describe, expect, it } from 'vitest';
import { seedAdminRecords } from '../seeds/admin';
import { scoreAdminRisk1, buildAdminId } from '../utils/admin';
import { listOpenAdminTasks, countAdminTasksByState } from '../tasks/admin-tasks';
import { canAdmin } from '../permissions/admin';

describe('CareNest Admin module', () => {
  it('seeds records', () => {
    const rows = seedAdminRecords(10);
    expect(rows).toHaveLength(10);
    expect(rows[0].title).toContain('case');
  });

  it('builds branded ids', () => {
    const id = buildAdminId();
    expect(String(id)).toContain('admin');
  });

  it('scores risk', () => {
    const [row] = seedAdminRecords(1);
    expect(scoreAdminRisk1(row)).toBeGreaterThan(0);
  });

  it('exposes operational tasks', () => {
    expect(listOpenAdminTasks().length).toBeGreaterThan(0);
    const counts = countAdminTasksByState();
    expect(counts.todo + counts.in_progress + counts.blocked + counts.done + counts.cancelled).toBeGreaterThan(0);
  });

  it('enforces permissions', () => {
    expect(canAdmin('viewer', 'read')).toBe(true);
    expect(canAdmin('viewer', 'delete')).toBe(false);
    expect(canAdmin('admin', 'delete')).toBe(true);
  });
});

describe('Admin extended suite 1', () => {
  it('validates seed batch 1', () => {
    const rows = seedAdminRecords(6);
    expect(rows.length).toBe(6);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Admin extended suite 2', () => {
  it('validates seed batch 2', () => {
    const rows = seedAdminRecords(7);
    expect(rows.length).toBe(7);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Admin extended suite 3', () => {
  it('validates seed batch 3', () => {
    const rows = seedAdminRecords(8);
    expect(rows.length).toBe(8);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Admin extended suite 4', () => {
  it('validates seed batch 4', () => {
    const rows = seedAdminRecords(9);
    expect(rows.length).toBe(9);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Admin extended suite 5', () => {
  it('validates seed batch 5', () => {
    const rows = seedAdminRecords(10);
    expect(rows.length).toBe(10);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Admin extended suite 6', () => {
  it('validates seed batch 6', () => {
    const rows = seedAdminRecords(11);
    expect(rows.length).toBe(11);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Admin extended suite 7', () => {
  it('validates seed batch 7', () => {
    const rows = seedAdminRecords(12);
    expect(rows.length).toBe(12);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Admin extended suite 8', () => {
  it('validates seed batch 8', () => {
    const rows = seedAdminRecords(13);
    expect(rows.length).toBe(13);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Admin extended suite 9', () => {
  it('validates seed batch 9', () => {
    const rows = seedAdminRecords(14);
    expect(rows.length).toBe(14);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Admin extended suite 10', () => {
  it('validates seed batch 10', () => {
    const rows = seedAdminRecords(15);
    expect(rows.length).toBe(15);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Admin extended suite 11', () => {
  it('validates seed batch 11', () => {
    const rows = seedAdminRecords(16);
    expect(rows.length).toBe(16);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Admin extended suite 12', () => {
  it('validates seed batch 12', () => {
    const rows = seedAdminRecords(17);
    expect(rows.length).toBe(17);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Admin extended suite 13', () => {
  it('validates seed batch 13', () => {
    const rows = seedAdminRecords(18);
    expect(rows.length).toBe(18);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Admin extended suite 14', () => {
  it('validates seed batch 14', () => {
    const rows = seedAdminRecords(19);
    expect(rows.length).toBe(19);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Admin extended suite 15', () => {
  it('validates seed batch 15', () => {
    const rows = seedAdminRecords(20);
    expect(rows.length).toBe(20);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Admin extended suite 16', () => {
  it('validates seed batch 16', () => {
    const rows = seedAdminRecords(21);
    expect(rows.length).toBe(21);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Admin extended suite 17', () => {
  it('validates seed batch 17', () => {
    const rows = seedAdminRecords(22);
    expect(rows.length).toBe(22);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Admin extended suite 18', () => {
  it('validates seed batch 18', () => {
    const rows = seedAdminRecords(23);
    expect(rows.length).toBe(23);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Admin extended suite 19', () => {
  it('validates seed batch 19', () => {
    const rows = seedAdminRecords(24);
    expect(rows.length).toBe(24);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});
