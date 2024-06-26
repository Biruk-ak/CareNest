import { describe, expect, it } from 'vitest';
import { seedIncidentsRecords } from '../seeds/incidents';
import { scoreIncidentsRisk1, buildIncidentsId } from '../utils/incidents';
import { listOpenIncidentsTasks, countIncidentsTasksByState } from '../tasks/incidents-tasks';
import { canIncidents } from '../permissions/incidents';

describe('CareNest Incidents module', () => {
  it('seeds records', () => {
    const rows = seedIncidentsRecords(10);
    expect(rows).toHaveLength(10);
    expect(rows[0].title).toContain('case');
  });

  it('builds branded ids', () => {
    const id = buildIncidentsId();
    expect(String(id)).toContain('incidents');
  });

  it('scores risk', () => {
    const [row] = seedIncidentsRecords(1);
    expect(scoreIncidentsRisk1(row)).toBeGreaterThan(0);
  });

  it('exposes operational tasks', () => {
    expect(listOpenIncidentsTasks().length).toBeGreaterThan(0);
    const counts = countIncidentsTasksByState();
    expect(counts.todo + counts.in_progress + counts.blocked + counts.done + counts.cancelled).toBeGreaterThan(0);
  });

  it('enforces permissions', () => {
    expect(canIncidents('viewer', 'read')).toBe(true);
    expect(canIncidents('viewer', 'delete')).toBe(false);
    expect(canIncidents('admin', 'delete')).toBe(true);
  });
});

describe('Incidents extended suite 1', () => {
  it('validates seed batch 1', () => {
    const rows = seedIncidentsRecords(6);
    expect(rows.length).toBe(6);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Incidents extended suite 2', () => {
  it('validates seed batch 2', () => {
    const rows = seedIncidentsRecords(7);
    expect(rows.length).toBe(7);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Incidents extended suite 3', () => {
  it('validates seed batch 3', () => {
    const rows = seedIncidentsRecords(8);
    expect(rows.length).toBe(8);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Incidents extended suite 4', () => {
  it('validates seed batch 4', () => {
    const rows = seedIncidentsRecords(9);
    expect(rows.length).toBe(9);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Incidents extended suite 5', () => {
  it('validates seed batch 5', () => {
    const rows = seedIncidentsRecords(10);
    expect(rows.length).toBe(10);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Incidents extended suite 6', () => {
  it('validates seed batch 6', () => {
    const rows = seedIncidentsRecords(11);
    expect(rows.length).toBe(11);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Incidents extended suite 7', () => {
  it('validates seed batch 7', () => {
    const rows = seedIncidentsRecords(12);
    expect(rows.length).toBe(12);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Incidents extended suite 8', () => {
  it('validates seed batch 8', () => {
    const rows = seedIncidentsRecords(13);
    expect(rows.length).toBe(13);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Incidents extended suite 9', () => {
  it('validates seed batch 9', () => {
    const rows = seedIncidentsRecords(14);
    expect(rows.length).toBe(14);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Incidents extended suite 10', () => {
  it('validates seed batch 10', () => {
    const rows = seedIncidentsRecords(15);
    expect(rows.length).toBe(15);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Incidents extended suite 11', () => {
  it('validates seed batch 11', () => {
    const rows = seedIncidentsRecords(16);
    expect(rows.length).toBe(16);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Incidents extended suite 12', () => {
  it('validates seed batch 12', () => {
    const rows = seedIncidentsRecords(17);
    expect(rows.length).toBe(17);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Incidents extended suite 13', () => {
  it('validates seed batch 13', () => {
    const rows = seedIncidentsRecords(18);
    expect(rows.length).toBe(18);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Incidents extended suite 14', () => {
  it('validates seed batch 14', () => {
    const rows = seedIncidentsRecords(19);
    expect(rows.length).toBe(19);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Incidents extended suite 15', () => {
  it('validates seed batch 15', () => {
    const rows = seedIncidentsRecords(20);
    expect(rows.length).toBe(20);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Incidents extended suite 16', () => {
  it('validates seed batch 16', () => {
    const rows = seedIncidentsRecords(21);
    expect(rows.length).toBe(21);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Incidents extended suite 17', () => {
  it('validates seed batch 17', () => {
    const rows = seedIncidentsRecords(22);
    expect(rows.length).toBe(22);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Incidents extended suite 18', () => {
  it('validates seed batch 18', () => {
    const rows = seedIncidentsRecords(23);
    expect(rows.length).toBe(23);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Incidents extended suite 19', () => {
  it('validates seed batch 19', () => {
    const rows = seedIncidentsRecords(24);
    expect(rows.length).toBe(24);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});
