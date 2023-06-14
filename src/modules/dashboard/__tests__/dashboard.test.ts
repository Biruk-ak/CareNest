import { describe, expect, it } from 'vitest';
import { seedDashboardRecords } from '../seeds/dashboard';
import { scoreDashboardRisk1, buildDashboardId } from '../utils/dashboard';
import { listOpenDashboardTasks, countDashboardTasksByState } from '../tasks/dashboard-tasks';
import { canDashboard } from '../permissions/dashboard';

describe('CareNest Dashboard module', () => {
  it('seeds records', () => {
    const rows = seedDashboardRecords(10);
    expect(rows).toHaveLength(10);
    expect(rows[0].title).toContain('case');
  });

  it('builds branded ids', () => {
    const id = buildDashboardId();
    expect(String(id)).toContain('dashboard');
  });

  it('scores risk', () => {
    const [row] = seedDashboardRecords(1);
    expect(scoreDashboardRisk1(row)).toBeGreaterThan(0);
  });

  it('exposes operational tasks', () => {
    expect(listOpenDashboardTasks().length).toBeGreaterThan(0);
    const counts = countDashboardTasksByState();
    expect(counts.todo + counts.in_progress + counts.blocked + counts.done + counts.cancelled).toBeGreaterThan(0);
  });

  it('enforces permissions', () => {
    expect(canDashboard('viewer', 'read')).toBe(true);
    expect(canDashboard('viewer', 'delete')).toBe(false);
    expect(canDashboard('admin', 'delete')).toBe(true);
  });
});

describe('Dashboard extended suite 1', () => {
  it('validates seed batch 1', () => {
    const rows = seedDashboardRecords(6);
    expect(rows.length).toBe(6);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Dashboard extended suite 2', () => {
  it('validates seed batch 2', () => {
    const rows = seedDashboardRecords(7);
    expect(rows.length).toBe(7);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Dashboard extended suite 3', () => {
  it('validates seed batch 3', () => {
    const rows = seedDashboardRecords(8);
    expect(rows.length).toBe(8);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Dashboard extended suite 4', () => {
  it('validates seed batch 4', () => {
    const rows = seedDashboardRecords(9);
    expect(rows.length).toBe(9);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Dashboard extended suite 5', () => {
  it('validates seed batch 5', () => {
    const rows = seedDashboardRecords(10);
    expect(rows.length).toBe(10);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Dashboard extended suite 6', () => {
  it('validates seed batch 6', () => {
    const rows = seedDashboardRecords(11);
    expect(rows.length).toBe(11);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Dashboard extended suite 7', () => {
  it('validates seed batch 7', () => {
    const rows = seedDashboardRecords(12);
    expect(rows.length).toBe(12);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Dashboard extended suite 8', () => {
  it('validates seed batch 8', () => {
    const rows = seedDashboardRecords(13);
    expect(rows.length).toBe(13);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Dashboard extended suite 9', () => {
  it('validates seed batch 9', () => {
    const rows = seedDashboardRecords(14);
    expect(rows.length).toBe(14);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Dashboard extended suite 10', () => {
  it('validates seed batch 10', () => {
    const rows = seedDashboardRecords(15);
    expect(rows.length).toBe(15);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Dashboard extended suite 11', () => {
  it('validates seed batch 11', () => {
    const rows = seedDashboardRecords(16);
    expect(rows.length).toBe(16);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Dashboard extended suite 12', () => {
  it('validates seed batch 12', () => {
    const rows = seedDashboardRecords(17);
    expect(rows.length).toBe(17);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Dashboard extended suite 13', () => {
  it('validates seed batch 13', () => {
    const rows = seedDashboardRecords(18);
    expect(rows.length).toBe(18);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Dashboard extended suite 14', () => {
  it('validates seed batch 14', () => {
    const rows = seedDashboardRecords(19);
    expect(rows.length).toBe(19);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Dashboard extended suite 15', () => {
  it('validates seed batch 15', () => {
    const rows = seedDashboardRecords(20);
    expect(rows.length).toBe(20);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Dashboard extended suite 16', () => {
  it('validates seed batch 16', () => {
    const rows = seedDashboardRecords(21);
    expect(rows.length).toBe(21);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Dashboard extended suite 17', () => {
  it('validates seed batch 17', () => {
    const rows = seedDashboardRecords(22);
    expect(rows.length).toBe(22);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Dashboard extended suite 18', () => {
  it('validates seed batch 18', () => {
    const rows = seedDashboardRecords(23);
    expect(rows.length).toBe(23);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Dashboard extended suite 19', () => {
  it('validates seed batch 19', () => {
    const rows = seedDashboardRecords(24);
    expect(rows.length).toBe(24);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});
