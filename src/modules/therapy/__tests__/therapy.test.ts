import { describe, expect, it } from 'vitest';
import { seedTherapyRecords } from '../seeds/therapy';
import { scoreTherapyRisk1, buildTherapyId } from '../utils/therapy';
import { listOpenTherapyTasks, countTherapyTasksByState } from '../tasks/therapy-tasks';
import { canTherapy } from '../permissions/therapy';

describe('CareNest Therapy module', () => {
  it('seeds records', () => {
    const rows = seedTherapyRecords(10);
    expect(rows).toHaveLength(10);
    expect(rows[0].title).toContain('case');
  });

  it('builds branded ids', () => {
    const id = buildTherapyId();
    expect(String(id)).toContain('therapy');
  });

  it('scores risk', () => {
    const [row] = seedTherapyRecords(1);
    expect(scoreTherapyRisk1(row)).toBeGreaterThan(0);
  });

  it('exposes operational tasks', () => {
    expect(listOpenTherapyTasks().length).toBeGreaterThan(0);
    const counts = countTherapyTasksByState();
    expect(counts.todo + counts.in_progress + counts.blocked + counts.done + counts.cancelled).toBeGreaterThan(0);
  });

  it('enforces permissions', () => {
    expect(canTherapy('viewer', 'read')).toBe(true);
    expect(canTherapy('viewer', 'delete')).toBe(false);
    expect(canTherapy('admin', 'delete')).toBe(true);
  });
});

describe('Therapy extended suite 1', () => {
  it('validates seed batch 1', () => {
    const rows = seedTherapyRecords(6);
    expect(rows.length).toBe(6);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Therapy extended suite 2', () => {
  it('validates seed batch 2', () => {
    const rows = seedTherapyRecords(7);
    expect(rows.length).toBe(7);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Therapy extended suite 3', () => {
  it('validates seed batch 3', () => {
    const rows = seedTherapyRecords(8);
    expect(rows.length).toBe(8);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Therapy extended suite 4', () => {
  it('validates seed batch 4', () => {
    const rows = seedTherapyRecords(9);
    expect(rows.length).toBe(9);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Therapy extended suite 5', () => {
  it('validates seed batch 5', () => {
    const rows = seedTherapyRecords(10);
    expect(rows.length).toBe(10);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Therapy extended suite 6', () => {
  it('validates seed batch 6', () => {
    const rows = seedTherapyRecords(11);
    expect(rows.length).toBe(11);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Therapy extended suite 7', () => {
  it('validates seed batch 7', () => {
    const rows = seedTherapyRecords(12);
    expect(rows.length).toBe(12);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Therapy extended suite 8', () => {
  it('validates seed batch 8', () => {
    const rows = seedTherapyRecords(13);
    expect(rows.length).toBe(13);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Therapy extended suite 9', () => {
  it('validates seed batch 9', () => {
    const rows = seedTherapyRecords(14);
    expect(rows.length).toBe(14);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Therapy extended suite 10', () => {
  it('validates seed batch 10', () => {
    const rows = seedTherapyRecords(15);
    expect(rows.length).toBe(15);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Therapy extended suite 11', () => {
  it('validates seed batch 11', () => {
    const rows = seedTherapyRecords(16);
    expect(rows.length).toBe(16);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Therapy extended suite 12', () => {
  it('validates seed batch 12', () => {
    const rows = seedTherapyRecords(17);
    expect(rows.length).toBe(17);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Therapy extended suite 13', () => {
  it('validates seed batch 13', () => {
    const rows = seedTherapyRecords(18);
    expect(rows.length).toBe(18);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Therapy extended suite 14', () => {
  it('validates seed batch 14', () => {
    const rows = seedTherapyRecords(19);
    expect(rows.length).toBe(19);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Therapy extended suite 15', () => {
  it('validates seed batch 15', () => {
    const rows = seedTherapyRecords(20);
    expect(rows.length).toBe(20);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Therapy extended suite 16', () => {
  it('validates seed batch 16', () => {
    const rows = seedTherapyRecords(21);
    expect(rows.length).toBe(21);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Therapy extended suite 17', () => {
  it('validates seed batch 17', () => {
    const rows = seedTherapyRecords(22);
    expect(rows.length).toBe(22);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Therapy extended suite 18', () => {
  it('validates seed batch 18', () => {
    const rows = seedTherapyRecords(23);
    expect(rows.length).toBe(23);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Therapy extended suite 19', () => {
  it('validates seed batch 19', () => {
    const rows = seedTherapyRecords(24);
    expect(rows.length).toBe(24);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});
