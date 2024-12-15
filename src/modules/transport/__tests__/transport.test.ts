import { describe, expect, it } from 'vitest';
import { seedTransportRecords } from '../seeds/transport';
import { scoreTransportRisk1, buildTransportId } from '../utils/transport';
import { listOpenTransportTasks, countTransportTasksByState } from '../tasks/transport-tasks';
import { canTransport } from '../permissions/transport';

describe('CareNest Transport module', () => {
  it('seeds records', () => {
    const rows = seedTransportRecords(10);
    expect(rows).toHaveLength(10);
    expect(rows[0].title).toContain('case');
  });

  it('builds branded ids', () => {
    const id = buildTransportId();
    expect(String(id)).toContain('transport');
  });

  it('scores risk', () => {
    const [row] = seedTransportRecords(1);
    expect(scoreTransportRisk1(row)).toBeGreaterThan(0);
  });

  it('exposes operational tasks', () => {
    expect(listOpenTransportTasks().length).toBeGreaterThan(0);
    const counts = countTransportTasksByState();
    expect(counts.todo + counts.in_progress + counts.blocked + counts.done + counts.cancelled).toBeGreaterThan(0);
  });

  it('enforces permissions', () => {
    expect(canTransport('viewer', 'read')).toBe(true);
    expect(canTransport('viewer', 'delete')).toBe(false);
    expect(canTransport('admin', 'delete')).toBe(true);
  });
});

describe('Transport extended suite 1', () => {
  it('validates seed batch 1', () => {
    const rows = seedTransportRecords(6);
    expect(rows.length).toBe(6);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Transport extended suite 2', () => {
  it('validates seed batch 2', () => {
    const rows = seedTransportRecords(7);
    expect(rows.length).toBe(7);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Transport extended suite 3', () => {
  it('validates seed batch 3', () => {
    const rows = seedTransportRecords(8);
    expect(rows.length).toBe(8);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Transport extended suite 4', () => {
  it('validates seed batch 4', () => {
    const rows = seedTransportRecords(9);
    expect(rows.length).toBe(9);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Transport extended suite 5', () => {
  it('validates seed batch 5', () => {
    const rows = seedTransportRecords(10);
    expect(rows.length).toBe(10);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Transport extended suite 6', () => {
  it('validates seed batch 6', () => {
    const rows = seedTransportRecords(11);
    expect(rows.length).toBe(11);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Transport extended suite 7', () => {
  it('validates seed batch 7', () => {
    const rows = seedTransportRecords(12);
    expect(rows.length).toBe(12);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Transport extended suite 8', () => {
  it('validates seed batch 8', () => {
    const rows = seedTransportRecords(13);
    expect(rows.length).toBe(13);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Transport extended suite 9', () => {
  it('validates seed batch 9', () => {
    const rows = seedTransportRecords(14);
    expect(rows.length).toBe(14);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Transport extended suite 10', () => {
  it('validates seed batch 10', () => {
    const rows = seedTransportRecords(15);
    expect(rows.length).toBe(15);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Transport extended suite 11', () => {
  it('validates seed batch 11', () => {
    const rows = seedTransportRecords(16);
    expect(rows.length).toBe(16);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Transport extended suite 12', () => {
  it('validates seed batch 12', () => {
    const rows = seedTransportRecords(17);
    expect(rows.length).toBe(17);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Transport extended suite 13', () => {
  it('validates seed batch 13', () => {
    const rows = seedTransportRecords(18);
    expect(rows.length).toBe(18);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Transport extended suite 14', () => {
  it('validates seed batch 14', () => {
    const rows = seedTransportRecords(19);
    expect(rows.length).toBe(19);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Transport extended suite 15', () => {
  it('validates seed batch 15', () => {
    const rows = seedTransportRecords(20);
    expect(rows.length).toBe(20);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Transport extended suite 16', () => {
  it('validates seed batch 16', () => {
    const rows = seedTransportRecords(21);
    expect(rows.length).toBe(21);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Transport extended suite 17', () => {
  it('validates seed batch 17', () => {
    const rows = seedTransportRecords(22);
    expect(rows.length).toBe(22);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Transport extended suite 18', () => {
  it('validates seed batch 18', () => {
    const rows = seedTransportRecords(23);
    expect(rows.length).toBe(23);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Transport extended suite 19', () => {
  it('validates seed batch 19', () => {
    const rows = seedTransportRecords(24);
    expect(rows.length).toBe(24);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});
