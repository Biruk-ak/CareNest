import { describe, expect, it } from 'vitest';
import { seedComplianceRecords } from '../seeds/compliance';
import { scoreComplianceRisk1, buildComplianceId } from '../utils/compliance';
import { listOpenComplianceTasks, countComplianceTasksByState } from '../tasks/compliance-tasks';
import { canCompliance } from '../permissions/compliance';

describe('CareNest Compliance module', () => {
  it('seeds records', () => {
    const rows = seedComplianceRecords(10);
    expect(rows).toHaveLength(10);
    expect(rows[0].title).toContain('case');
  });

  it('builds branded ids', () => {
    const id = buildComplianceId();
    expect(String(id)).toContain('compliance');
  });

  it('scores risk', () => {
    const [row] = seedComplianceRecords(1);
    expect(scoreComplianceRisk1(row)).toBeGreaterThan(0);
  });

  it('exposes operational tasks', () => {
    expect(listOpenComplianceTasks().length).toBeGreaterThan(0);
    const counts = countComplianceTasksByState();
    expect(counts.todo + counts.in_progress + counts.blocked + counts.done + counts.cancelled).toBeGreaterThan(0);
  });

  it('enforces permissions', () => {
    expect(canCompliance('viewer', 'read')).toBe(true);
    expect(canCompliance('viewer', 'delete')).toBe(false);
    expect(canCompliance('admin', 'delete')).toBe(true);
  });
});

describe('Compliance extended suite 1', () => {
  it('validates seed batch 1', () => {
    const rows = seedComplianceRecords(6);
    expect(rows.length).toBe(6);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Compliance extended suite 2', () => {
  it('validates seed batch 2', () => {
    const rows = seedComplianceRecords(7);
    expect(rows.length).toBe(7);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Compliance extended suite 3', () => {
  it('validates seed batch 3', () => {
    const rows = seedComplianceRecords(8);
    expect(rows.length).toBe(8);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Compliance extended suite 4', () => {
  it('validates seed batch 4', () => {
    const rows = seedComplianceRecords(9);
    expect(rows.length).toBe(9);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Compliance extended suite 5', () => {
  it('validates seed batch 5', () => {
    const rows = seedComplianceRecords(10);
    expect(rows.length).toBe(10);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Compliance extended suite 6', () => {
  it('validates seed batch 6', () => {
    const rows = seedComplianceRecords(11);
    expect(rows.length).toBe(11);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Compliance extended suite 7', () => {
  it('validates seed batch 7', () => {
    const rows = seedComplianceRecords(12);
    expect(rows.length).toBe(12);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Compliance extended suite 8', () => {
  it('validates seed batch 8', () => {
    const rows = seedComplianceRecords(13);
    expect(rows.length).toBe(13);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Compliance extended suite 9', () => {
  it('validates seed batch 9', () => {
    const rows = seedComplianceRecords(14);
    expect(rows.length).toBe(14);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Compliance extended suite 10', () => {
  it('validates seed batch 10', () => {
    const rows = seedComplianceRecords(15);
    expect(rows.length).toBe(15);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Compliance extended suite 11', () => {
  it('validates seed batch 11', () => {
    const rows = seedComplianceRecords(16);
    expect(rows.length).toBe(16);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Compliance extended suite 12', () => {
  it('validates seed batch 12', () => {
    const rows = seedComplianceRecords(17);
    expect(rows.length).toBe(17);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Compliance extended suite 13', () => {
  it('validates seed batch 13', () => {
    const rows = seedComplianceRecords(18);
    expect(rows.length).toBe(18);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Compliance extended suite 14', () => {
  it('validates seed batch 14', () => {
    const rows = seedComplianceRecords(19);
    expect(rows.length).toBe(19);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Compliance extended suite 15', () => {
  it('validates seed batch 15', () => {
    const rows = seedComplianceRecords(20);
    expect(rows.length).toBe(20);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Compliance extended suite 16', () => {
  it('validates seed batch 16', () => {
    const rows = seedComplianceRecords(21);
    expect(rows.length).toBe(21);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Compliance extended suite 17', () => {
  it('validates seed batch 17', () => {
    const rows = seedComplianceRecords(22);
    expect(rows.length).toBe(22);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Compliance extended suite 18', () => {
  it('validates seed batch 18', () => {
    const rows = seedComplianceRecords(23);
    expect(rows.length).toBe(23);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Compliance extended suite 19', () => {
  it('validates seed batch 19', () => {
    const rows = seedComplianceRecords(24);
    expect(rows.length).toBe(24);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});
