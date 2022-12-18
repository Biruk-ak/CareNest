import { describe, expect, it } from 'vitest';
import { seedCareScheduleRecords } from '../seeds/care-schedule';
import { scoreCareScheduleRisk1, buildCareScheduleId } from '../utils/care-schedule';
import { listOpenCareScheduleTasks, countCareScheduleTasksByState } from '../tasks/care-schedule-tasks';
import { canCareSchedule } from '../permissions/care-schedule';

describe('CareNest CareSchedule module', () => {
  it('seeds records', () => {
    const rows = seedCareScheduleRecords(10);
    expect(rows).toHaveLength(10);
    expect(rows[0].title).toContain('case');
  });

  it('builds branded ids', () => {
    const id = buildCareScheduleId();
    expect(String(id)).toContain('care-schedule');
  });

  it('scores risk', () => {
    const [row] = seedCareScheduleRecords(1);
    expect(scoreCareScheduleRisk1(row)).toBeGreaterThan(0);
  });

  it('exposes operational tasks', () => {
    expect(listOpenCareScheduleTasks().length).toBeGreaterThan(0);
    const counts = countCareScheduleTasksByState();
    expect(counts.todo + counts.in_progress + counts.blocked + counts.done + counts.cancelled).toBeGreaterThan(0);
  });

  it('enforces permissions', () => {
    expect(canCareSchedule('viewer', 'read')).toBe(true);
    expect(canCareSchedule('viewer', 'delete')).toBe(false);
    expect(canCareSchedule('admin', 'delete')).toBe(true);
  });
});

describe('CareSchedule extended suite 1', () => {
  it('validates seed batch 1', () => {
    const rows = seedCareScheduleRecords(6);
    expect(rows.length).toBe(6);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('CareSchedule extended suite 2', () => {
  it('validates seed batch 2', () => {
    const rows = seedCareScheduleRecords(7);
    expect(rows.length).toBe(7);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('CareSchedule extended suite 3', () => {
  it('validates seed batch 3', () => {
    const rows = seedCareScheduleRecords(8);
    expect(rows.length).toBe(8);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('CareSchedule extended suite 4', () => {
  it('validates seed batch 4', () => {
    const rows = seedCareScheduleRecords(9);
    expect(rows.length).toBe(9);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('CareSchedule extended suite 5', () => {
  it('validates seed batch 5', () => {
    const rows = seedCareScheduleRecords(10);
    expect(rows.length).toBe(10);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('CareSchedule extended suite 6', () => {
  it('validates seed batch 6', () => {
    const rows = seedCareScheduleRecords(11);
    expect(rows.length).toBe(11);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('CareSchedule extended suite 7', () => {
  it('validates seed batch 7', () => {
    const rows = seedCareScheduleRecords(12);
    expect(rows.length).toBe(12);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('CareSchedule extended suite 8', () => {
  it('validates seed batch 8', () => {
    const rows = seedCareScheduleRecords(13);
    expect(rows.length).toBe(13);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('CareSchedule extended suite 9', () => {
  it('validates seed batch 9', () => {
    const rows = seedCareScheduleRecords(14);
    expect(rows.length).toBe(14);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('CareSchedule extended suite 10', () => {
  it('validates seed batch 10', () => {
    const rows = seedCareScheduleRecords(15);
    expect(rows.length).toBe(15);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('CareSchedule extended suite 11', () => {
  it('validates seed batch 11', () => {
    const rows = seedCareScheduleRecords(16);
    expect(rows.length).toBe(16);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('CareSchedule extended suite 12', () => {
  it('validates seed batch 12', () => {
    const rows = seedCareScheduleRecords(17);
    expect(rows.length).toBe(17);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('CareSchedule extended suite 13', () => {
  it('validates seed batch 13', () => {
    const rows = seedCareScheduleRecords(18);
    expect(rows.length).toBe(18);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('CareSchedule extended suite 14', () => {
  it('validates seed batch 14', () => {
    const rows = seedCareScheduleRecords(19);
    expect(rows.length).toBe(19);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('CareSchedule extended suite 15', () => {
  it('validates seed batch 15', () => {
    const rows = seedCareScheduleRecords(20);
    expect(rows.length).toBe(20);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('CareSchedule extended suite 16', () => {
  it('validates seed batch 16', () => {
    const rows = seedCareScheduleRecords(21);
    expect(rows.length).toBe(21);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('CareSchedule extended suite 17', () => {
  it('validates seed batch 17', () => {
    const rows = seedCareScheduleRecords(22);
    expect(rows.length).toBe(22);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('CareSchedule extended suite 18', () => {
  it('validates seed batch 18', () => {
    const rows = seedCareScheduleRecords(23);
    expect(rows.length).toBe(23);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('CareSchedule extended suite 19', () => {
  it('validates seed batch 19', () => {
    const rows = seedCareScheduleRecords(24);
    expect(rows.length).toBe(24);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});
