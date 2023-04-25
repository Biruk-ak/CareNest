import { describe, expect, it } from 'vitest';
import { seedReportsRecords } from '../seeds/reports';
import { scoreReportsRisk1, buildReportsId } from '../utils/reports';
import { listOpenReportsTasks, countReportsTasksByState } from '../tasks/reports-tasks';
import { canReports } from '../permissions/reports';

describe('CareNest Reports module', () => {
  it('seeds records', () => {
    const rows = seedReportsRecords(10);
    expect(rows).toHaveLength(10);
    expect(rows[0].title).toContain('case');
  });

  it('builds branded ids', () => {
    const id = buildReportsId();
    expect(String(id)).toContain('reports');
  });

  it('scores risk', () => {
    const [row] = seedReportsRecords(1);
    expect(scoreReportsRisk1(row)).toBeGreaterThan(0);
  });

  it('exposes operational tasks', () => {
    expect(listOpenReportsTasks().length).toBeGreaterThan(0);
    const counts = countReportsTasksByState();
    expect(counts.todo + counts.in_progress + counts.blocked + counts.done + counts.cancelled).toBeGreaterThan(0);
  });

  it('enforces permissions', () => {
    expect(canReports('viewer', 'read')).toBe(true);
    expect(canReports('viewer', 'delete')).toBe(false);
    expect(canReports('admin', 'delete')).toBe(true);
  });
});

describe('Reports extended suite 1', () => {
  it('validates seed batch 1', () => {
    const rows = seedReportsRecords(6);
    expect(rows.length).toBe(6);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Reports extended suite 2', () => {
  it('validates seed batch 2', () => {
    const rows = seedReportsRecords(7);
    expect(rows.length).toBe(7);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Reports extended suite 3', () => {
  it('validates seed batch 3', () => {
    const rows = seedReportsRecords(8);
    expect(rows.length).toBe(8);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Reports extended suite 4', () => {
  it('validates seed batch 4', () => {
    const rows = seedReportsRecords(9);
    expect(rows.length).toBe(9);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Reports extended suite 5', () => {
  it('validates seed batch 5', () => {
    const rows = seedReportsRecords(10);
    expect(rows.length).toBe(10);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Reports extended suite 6', () => {
  it('validates seed batch 6', () => {
    const rows = seedReportsRecords(11);
    expect(rows.length).toBe(11);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Reports extended suite 7', () => {
  it('validates seed batch 7', () => {
    const rows = seedReportsRecords(12);
    expect(rows.length).toBe(12);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Reports extended suite 8', () => {
  it('validates seed batch 8', () => {
    const rows = seedReportsRecords(13);
    expect(rows.length).toBe(13);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Reports extended suite 9', () => {
  it('validates seed batch 9', () => {
    const rows = seedReportsRecords(14);
    expect(rows.length).toBe(14);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Reports extended suite 10', () => {
  it('validates seed batch 10', () => {
    const rows = seedReportsRecords(15);
    expect(rows.length).toBe(15);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Reports extended suite 11', () => {
  it('validates seed batch 11', () => {
    const rows = seedReportsRecords(16);
    expect(rows.length).toBe(16);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Reports extended suite 12', () => {
  it('validates seed batch 12', () => {
    const rows = seedReportsRecords(17);
    expect(rows.length).toBe(17);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Reports extended suite 13', () => {
  it('validates seed batch 13', () => {
    const rows = seedReportsRecords(18);
    expect(rows.length).toBe(18);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Reports extended suite 14', () => {
  it('validates seed batch 14', () => {
    const rows = seedReportsRecords(19);
    expect(rows.length).toBe(19);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Reports extended suite 15', () => {
  it('validates seed batch 15', () => {
    const rows = seedReportsRecords(20);
    expect(rows.length).toBe(20);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Reports extended suite 16', () => {
  it('validates seed batch 16', () => {
    const rows = seedReportsRecords(21);
    expect(rows.length).toBe(21);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Reports extended suite 17', () => {
  it('validates seed batch 17', () => {
    const rows = seedReportsRecords(22);
    expect(rows.length).toBe(22);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Reports extended suite 18', () => {
  it('validates seed batch 18', () => {
    const rows = seedReportsRecords(23);
    expect(rows.length).toBe(23);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Reports extended suite 19', () => {
  it('validates seed batch 19', () => {
    const rows = seedReportsRecords(24);
    expect(rows.length).toBe(24);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});
