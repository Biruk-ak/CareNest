import { describe, expect, it } from 'vitest';
import { seedLabResultsRecords } from '../seeds/lab-results';
import { scoreLabResultsRisk1, buildLabResultsId } from '../utils/lab-results';
import { listOpenLabResultsTasks, countLabResultsTasksByState } from '../tasks/lab-results-tasks';
import { canLabResults } from '../permissions/lab-results';

describe('CareNest LabResults module', () => {
  it('seeds records', () => {
    const rows = seedLabResultsRecords(10);
    expect(rows).toHaveLength(10);
    expect(rows[0].title).toContain('case');
  });

  it('builds branded ids', () => {
    const id = buildLabResultsId();
    expect(String(id)).toContain('lab-results');
  });

  it('scores risk', () => {
    const [row] = seedLabResultsRecords(1);
    expect(scoreLabResultsRisk1(row)).toBeGreaterThan(0);
  });

  it('exposes operational tasks', () => {
    expect(listOpenLabResultsTasks().length).toBeGreaterThan(0);
    const counts = countLabResultsTasksByState();
    expect(counts.todo + counts.in_progress + counts.blocked + counts.done + counts.cancelled).toBeGreaterThan(0);
  });

  it('enforces permissions', () => {
    expect(canLabResults('viewer', 'read')).toBe(true);
    expect(canLabResults('viewer', 'delete')).toBe(false);
    expect(canLabResults('admin', 'delete')).toBe(true);
  });
});

describe('LabResults extended suite 1', () => {
  it('validates seed batch 1', () => {
    const rows = seedLabResultsRecords(6);
    expect(rows.length).toBe(6);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('LabResults extended suite 2', () => {
  it('validates seed batch 2', () => {
    const rows = seedLabResultsRecords(7);
    expect(rows.length).toBe(7);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('LabResults extended suite 3', () => {
  it('validates seed batch 3', () => {
    const rows = seedLabResultsRecords(8);
    expect(rows.length).toBe(8);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('LabResults extended suite 4', () => {
  it('validates seed batch 4', () => {
    const rows = seedLabResultsRecords(9);
    expect(rows.length).toBe(9);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('LabResults extended suite 5', () => {
  it('validates seed batch 5', () => {
    const rows = seedLabResultsRecords(10);
    expect(rows.length).toBe(10);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('LabResults extended suite 6', () => {
  it('validates seed batch 6', () => {
    const rows = seedLabResultsRecords(11);
    expect(rows.length).toBe(11);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('LabResults extended suite 7', () => {
  it('validates seed batch 7', () => {
    const rows = seedLabResultsRecords(12);
    expect(rows.length).toBe(12);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('LabResults extended suite 8', () => {
  it('validates seed batch 8', () => {
    const rows = seedLabResultsRecords(13);
    expect(rows.length).toBe(13);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('LabResults extended suite 9', () => {
  it('validates seed batch 9', () => {
    const rows = seedLabResultsRecords(14);
    expect(rows.length).toBe(14);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('LabResults extended suite 10', () => {
  it('validates seed batch 10', () => {
    const rows = seedLabResultsRecords(15);
    expect(rows.length).toBe(15);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('LabResults extended suite 11', () => {
  it('validates seed batch 11', () => {
    const rows = seedLabResultsRecords(16);
    expect(rows.length).toBe(16);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('LabResults extended suite 12', () => {
  it('validates seed batch 12', () => {
    const rows = seedLabResultsRecords(17);
    expect(rows.length).toBe(17);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('LabResults extended suite 13', () => {
  it('validates seed batch 13', () => {
    const rows = seedLabResultsRecords(18);
    expect(rows.length).toBe(18);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('LabResults extended suite 14', () => {
  it('validates seed batch 14', () => {
    const rows = seedLabResultsRecords(19);
    expect(rows.length).toBe(19);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('LabResults extended suite 15', () => {
  it('validates seed batch 15', () => {
    const rows = seedLabResultsRecords(20);
    expect(rows.length).toBe(20);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('LabResults extended suite 16', () => {
  it('validates seed batch 16', () => {
    const rows = seedLabResultsRecords(21);
    expect(rows.length).toBe(21);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('LabResults extended suite 17', () => {
  it('validates seed batch 17', () => {
    const rows = seedLabResultsRecords(22);
    expect(rows.length).toBe(22);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('LabResults extended suite 18', () => {
  it('validates seed batch 18', () => {
    const rows = seedLabResultsRecords(23);
    expect(rows.length).toBe(23);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('LabResults extended suite 19', () => {
  it('validates seed batch 19', () => {
    const rows = seedLabResultsRecords(24);
    expect(rows.length).toBe(24);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});
