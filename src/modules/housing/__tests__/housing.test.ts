import { describe, expect, it } from 'vitest';
import { seedHousingRecords } from '../seeds/housing';
import { scoreHousingRisk1, buildHousingId } from '../utils/housing';
import { listOpenHousingTasks, countHousingTasksByState } from '../tasks/housing-tasks';
import { canHousing } from '../permissions/housing';

describe('CareNest Housing module', () => {
  it('seeds records', () => {
    const rows = seedHousingRecords(10);
    expect(rows).toHaveLength(10);
    expect(rows[0].title).toContain('case');
  });

  it('builds branded ids', () => {
    const id = buildHousingId();
    expect(String(id)).toContain('housing');
  });

  it('scores risk', () => {
    const [row] = seedHousingRecords(1);
    expect(scoreHousingRisk1(row)).toBeGreaterThan(0);
  });

  it('exposes operational tasks', () => {
    expect(listOpenHousingTasks().length).toBeGreaterThan(0);
    const counts = countHousingTasksByState();
    expect(counts.todo + counts.in_progress + counts.blocked + counts.done + counts.cancelled).toBeGreaterThan(0);
  });

  it('enforces permissions', () => {
    expect(canHousing('viewer', 'read')).toBe(true);
    expect(canHousing('viewer', 'delete')).toBe(false);
    expect(canHousing('admin', 'delete')).toBe(true);
  });
});

describe('Housing extended suite 1', () => {
  it('validates seed batch 1', () => {
    const rows = seedHousingRecords(6);
    expect(rows.length).toBe(6);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Housing extended suite 2', () => {
  it('validates seed batch 2', () => {
    const rows = seedHousingRecords(7);
    expect(rows.length).toBe(7);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Housing extended suite 3', () => {
  it('validates seed batch 3', () => {
    const rows = seedHousingRecords(8);
    expect(rows.length).toBe(8);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Housing extended suite 4', () => {
  it('validates seed batch 4', () => {
    const rows = seedHousingRecords(9);
    expect(rows.length).toBe(9);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Housing extended suite 5', () => {
  it('validates seed batch 5', () => {
    const rows = seedHousingRecords(10);
    expect(rows.length).toBe(10);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Housing extended suite 6', () => {
  it('validates seed batch 6', () => {
    const rows = seedHousingRecords(11);
    expect(rows.length).toBe(11);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Housing extended suite 7', () => {
  it('validates seed batch 7', () => {
    const rows = seedHousingRecords(12);
    expect(rows.length).toBe(12);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Housing extended suite 8', () => {
  it('validates seed batch 8', () => {
    const rows = seedHousingRecords(13);
    expect(rows.length).toBe(13);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Housing extended suite 9', () => {
  it('validates seed batch 9', () => {
    const rows = seedHousingRecords(14);
    expect(rows.length).toBe(14);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Housing extended suite 10', () => {
  it('validates seed batch 10', () => {
    const rows = seedHousingRecords(15);
    expect(rows.length).toBe(15);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Housing extended suite 11', () => {
  it('validates seed batch 11', () => {
    const rows = seedHousingRecords(16);
    expect(rows.length).toBe(16);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Housing extended suite 12', () => {
  it('validates seed batch 12', () => {
    const rows = seedHousingRecords(17);
    expect(rows.length).toBe(17);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Housing extended suite 13', () => {
  it('validates seed batch 13', () => {
    const rows = seedHousingRecords(18);
    expect(rows.length).toBe(18);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Housing extended suite 14', () => {
  it('validates seed batch 14', () => {
    const rows = seedHousingRecords(19);
    expect(rows.length).toBe(19);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Housing extended suite 15', () => {
  it('validates seed batch 15', () => {
    const rows = seedHousingRecords(20);
    expect(rows.length).toBe(20);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Housing extended suite 16', () => {
  it('validates seed batch 16', () => {
    const rows = seedHousingRecords(21);
    expect(rows.length).toBe(21);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Housing extended suite 17', () => {
  it('validates seed batch 17', () => {
    const rows = seedHousingRecords(22);
    expect(rows.length).toBe(22);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Housing extended suite 18', () => {
  it('validates seed batch 18', () => {
    const rows = seedHousingRecords(23);
    expect(rows.length).toBe(23);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Housing extended suite 19', () => {
  it('validates seed batch 19', () => {
    const rows = seedHousingRecords(24);
    expect(rows.length).toBe(24);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});
