import { describe, expect, it } from 'vitest';
import { seedAppointmentsRecords } from '../seeds/appointments';
import { scoreAppointmentsRisk1, buildAppointmentsId } from '../utils/appointments';
import { listOpenAppointmentsTasks, countAppointmentsTasksByState } from '../tasks/appointments-tasks';
import { canAppointments } from '../permissions/appointments';

describe('CareNest Appointments module', () => {
  it('seeds records', () => {
    const rows = seedAppointmentsRecords(10);
    expect(rows).toHaveLength(10);
    expect(rows[0].title).toContain('case');
  });

  it('builds branded ids', () => {
    const id = buildAppointmentsId();
    expect(String(id)).toContain('appointments');
  });

  it('scores risk', () => {
    const [row] = seedAppointmentsRecords(1);
    expect(scoreAppointmentsRisk1(row)).toBeGreaterThan(0);
  });

  it('exposes operational tasks', () => {
    expect(listOpenAppointmentsTasks().length).toBeGreaterThan(0);
    const counts = countAppointmentsTasksByState();
    expect(counts.todo + counts.in_progress + counts.blocked + counts.done + counts.cancelled).toBeGreaterThan(0);
  });

  it('enforces permissions', () => {
    expect(canAppointments('viewer', 'read')).toBe(true);
    expect(canAppointments('viewer', 'delete')).toBe(false);
    expect(canAppointments('admin', 'delete')).toBe(true);
  });
});

describe('Appointments extended suite 1', () => {
  it('validates seed batch 1', () => {
    const rows = seedAppointmentsRecords(6);
    expect(rows.length).toBe(6);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Appointments extended suite 2', () => {
  it('validates seed batch 2', () => {
    const rows = seedAppointmentsRecords(7);
    expect(rows.length).toBe(7);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Appointments extended suite 3', () => {
  it('validates seed batch 3', () => {
    const rows = seedAppointmentsRecords(8);
    expect(rows.length).toBe(8);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Appointments extended suite 4', () => {
  it('validates seed batch 4', () => {
    const rows = seedAppointmentsRecords(9);
    expect(rows.length).toBe(9);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Appointments extended suite 5', () => {
  it('validates seed batch 5', () => {
    const rows = seedAppointmentsRecords(10);
    expect(rows.length).toBe(10);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Appointments extended suite 6', () => {
  it('validates seed batch 6', () => {
    const rows = seedAppointmentsRecords(11);
    expect(rows.length).toBe(11);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Appointments extended suite 7', () => {
  it('validates seed batch 7', () => {
    const rows = seedAppointmentsRecords(12);
    expect(rows.length).toBe(12);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Appointments extended suite 8', () => {
  it('validates seed batch 8', () => {
    const rows = seedAppointmentsRecords(13);
    expect(rows.length).toBe(13);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Appointments extended suite 9', () => {
  it('validates seed batch 9', () => {
    const rows = seedAppointmentsRecords(14);
    expect(rows.length).toBe(14);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Appointments extended suite 10', () => {
  it('validates seed batch 10', () => {
    const rows = seedAppointmentsRecords(15);
    expect(rows.length).toBe(15);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Appointments extended suite 11', () => {
  it('validates seed batch 11', () => {
    const rows = seedAppointmentsRecords(16);
    expect(rows.length).toBe(16);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Appointments extended suite 12', () => {
  it('validates seed batch 12', () => {
    const rows = seedAppointmentsRecords(17);
    expect(rows.length).toBe(17);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Appointments extended suite 13', () => {
  it('validates seed batch 13', () => {
    const rows = seedAppointmentsRecords(18);
    expect(rows.length).toBe(18);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Appointments extended suite 14', () => {
  it('validates seed batch 14', () => {
    const rows = seedAppointmentsRecords(19);
    expect(rows.length).toBe(19);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Appointments extended suite 15', () => {
  it('validates seed batch 15', () => {
    const rows = seedAppointmentsRecords(20);
    expect(rows.length).toBe(20);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Appointments extended suite 16', () => {
  it('validates seed batch 16', () => {
    const rows = seedAppointmentsRecords(21);
    expect(rows.length).toBe(21);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Appointments extended suite 17', () => {
  it('validates seed batch 17', () => {
    const rows = seedAppointmentsRecords(22);
    expect(rows.length).toBe(22);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Appointments extended suite 18', () => {
  it('validates seed batch 18', () => {
    const rows = seedAppointmentsRecords(23);
    expect(rows.length).toBe(23);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Appointments extended suite 19', () => {
  it('validates seed batch 19', () => {
    const rows = seedAppointmentsRecords(24);
    expect(rows.length).toBe(24);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});
