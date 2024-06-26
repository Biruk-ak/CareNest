import { describe, expect, it } from 'vitest';
import { seedVitalsRecords } from '../seeds/vitals';
import { scoreVitalsRisk1, buildVitalsId } from '../utils/vitals';
import { listOpenVitalsTasks, countVitalsTasksByState } from '../tasks/vitals-tasks';
import { canVitals } from '../permissions/vitals';

describe('CareNest Vitals module', () => {
  it('seeds records', () => {
    const rows = seedVitalsRecords(10);
    expect(rows).toHaveLength(10);
    expect(rows[0].title).toContain('case');
  });

  it('builds branded ids', () => {
    const id = buildVitalsId();
    expect(String(id)).toContain('vitals');
  });

  it('scores risk', () => {
    const [row] = seedVitalsRecords(1);
    expect(scoreVitalsRisk1(row)).toBeGreaterThan(0);
  });

  it('exposes operational tasks', () => {
    expect(listOpenVitalsTasks().length).toBeGreaterThan(0);
    const counts = countVitalsTasksByState();
    expect(counts.todo + counts.in_progress + counts.blocked + counts.done + counts.cancelled).toBeGreaterThan(0);
  });

  it('enforces permissions', () => {
    expect(canVitals('viewer', 'read')).toBe(true);
    expect(canVitals('viewer', 'delete')).toBe(false);
    expect(canVitals('admin', 'delete')).toBe(true);
  });
});

describe('Vitals extended suite 1', () => {
  it('validates seed batch 1', () => {
    const rows = seedVitalsRecords(6);
    expect(rows.length).toBe(6);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Vitals extended suite 2', () => {
  it('validates seed batch 2', () => {
    const rows = seedVitalsRecords(7);
    expect(rows.length).toBe(7);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Vitals extended suite 3', () => {
  it('validates seed batch 3', () => {
    const rows = seedVitalsRecords(8);
    expect(rows.length).toBe(8);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Vitals extended suite 4', () => {
  it('validates seed batch 4', () => {
    const rows = seedVitalsRecords(9);
    expect(rows.length).toBe(9);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Vitals extended suite 5', () => {
  it('validates seed batch 5', () => {
    const rows = seedVitalsRecords(10);
    expect(rows.length).toBe(10);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Vitals extended suite 6', () => {
  it('validates seed batch 6', () => {
    const rows = seedVitalsRecords(11);
    expect(rows.length).toBe(11);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Vitals extended suite 7', () => {
  it('validates seed batch 7', () => {
    const rows = seedVitalsRecords(12);
    expect(rows.length).toBe(12);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Vitals extended suite 8', () => {
  it('validates seed batch 8', () => {
    const rows = seedVitalsRecords(13);
    expect(rows.length).toBe(13);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Vitals extended suite 9', () => {
  it('validates seed batch 9', () => {
    const rows = seedVitalsRecords(14);
    expect(rows.length).toBe(14);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Vitals extended suite 10', () => {
  it('validates seed batch 10', () => {
    const rows = seedVitalsRecords(15);
    expect(rows.length).toBe(15);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Vitals extended suite 11', () => {
  it('validates seed batch 11', () => {
    const rows = seedVitalsRecords(16);
    expect(rows.length).toBe(16);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Vitals extended suite 12', () => {
  it('validates seed batch 12', () => {
    const rows = seedVitalsRecords(17);
    expect(rows.length).toBe(17);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Vitals extended suite 13', () => {
  it('validates seed batch 13', () => {
    const rows = seedVitalsRecords(18);
    expect(rows.length).toBe(18);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Vitals extended suite 14', () => {
  it('validates seed batch 14', () => {
    const rows = seedVitalsRecords(19);
    expect(rows.length).toBe(19);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Vitals extended suite 15', () => {
  it('validates seed batch 15', () => {
    const rows = seedVitalsRecords(20);
    expect(rows.length).toBe(20);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Vitals extended suite 16', () => {
  it('validates seed batch 16', () => {
    const rows = seedVitalsRecords(21);
    expect(rows.length).toBe(21);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Vitals extended suite 17', () => {
  it('validates seed batch 17', () => {
    const rows = seedVitalsRecords(22);
    expect(rows.length).toBe(22);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Vitals extended suite 18', () => {
  it('validates seed batch 18', () => {
    const rows = seedVitalsRecords(23);
    expect(rows.length).toBe(23);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Vitals extended suite 19', () => {
  it('validates seed batch 19', () => {
    const rows = seedVitalsRecords(24);
    expect(rows.length).toBe(24);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});
