import { describe, expect, it } from 'vitest';
import { seedPaymentsRecords } from '../seeds/payments';
import { scorePaymentsRisk1, buildPaymentsId } from '../utils/payments';
import { listOpenPaymentsTasks, countPaymentsTasksByState } from '../tasks/payments-tasks';
import { canPayments } from '../permissions/payments';

describe('CareNest Payments module', () => {
  it('seeds records', () => {
    const rows = seedPaymentsRecords(10);
    expect(rows).toHaveLength(10);
    expect(rows[0].title).toContain('case');
  });

  it('builds branded ids', () => {
    const id = buildPaymentsId();
    expect(String(id)).toContain('payments');
  });

  it('scores risk', () => {
    const [row] = seedPaymentsRecords(1);
    expect(scorePaymentsRisk1(row)).toBeGreaterThan(0);
  });

  it('exposes operational tasks', () => {
    expect(listOpenPaymentsTasks().length).toBeGreaterThan(0);
    const counts = countPaymentsTasksByState();
    expect(counts.todo + counts.in_progress + counts.blocked + counts.done + counts.cancelled).toBeGreaterThan(0);
  });

  it('enforces permissions', () => {
    expect(canPayments('viewer', 'read')).toBe(true);
    expect(canPayments('viewer', 'delete')).toBe(false);
    expect(canPayments('admin', 'delete')).toBe(true);
  });
});

describe('Payments extended suite 1', () => {
  it('validates seed batch 1', () => {
    const rows = seedPaymentsRecords(6);
    expect(rows.length).toBe(6);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Payments extended suite 2', () => {
  it('validates seed batch 2', () => {
    const rows = seedPaymentsRecords(7);
    expect(rows.length).toBe(7);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Payments extended suite 3', () => {
  it('validates seed batch 3', () => {
    const rows = seedPaymentsRecords(8);
    expect(rows.length).toBe(8);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Payments extended suite 4', () => {
  it('validates seed batch 4', () => {
    const rows = seedPaymentsRecords(9);
    expect(rows.length).toBe(9);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Payments extended suite 5', () => {
  it('validates seed batch 5', () => {
    const rows = seedPaymentsRecords(10);
    expect(rows.length).toBe(10);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Payments extended suite 6', () => {
  it('validates seed batch 6', () => {
    const rows = seedPaymentsRecords(11);
    expect(rows.length).toBe(11);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Payments extended suite 7', () => {
  it('validates seed batch 7', () => {
    const rows = seedPaymentsRecords(12);
    expect(rows.length).toBe(12);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Payments extended suite 8', () => {
  it('validates seed batch 8', () => {
    const rows = seedPaymentsRecords(13);
    expect(rows.length).toBe(13);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Payments extended suite 9', () => {
  it('validates seed batch 9', () => {
    const rows = seedPaymentsRecords(14);
    expect(rows.length).toBe(14);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Payments extended suite 10', () => {
  it('validates seed batch 10', () => {
    const rows = seedPaymentsRecords(15);
    expect(rows.length).toBe(15);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Payments extended suite 11', () => {
  it('validates seed batch 11', () => {
    const rows = seedPaymentsRecords(16);
    expect(rows.length).toBe(16);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Payments extended suite 12', () => {
  it('validates seed batch 12', () => {
    const rows = seedPaymentsRecords(17);
    expect(rows.length).toBe(17);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Payments extended suite 13', () => {
  it('validates seed batch 13', () => {
    const rows = seedPaymentsRecords(18);
    expect(rows.length).toBe(18);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Payments extended suite 14', () => {
  it('validates seed batch 14', () => {
    const rows = seedPaymentsRecords(19);
    expect(rows.length).toBe(19);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Payments extended suite 15', () => {
  it('validates seed batch 15', () => {
    const rows = seedPaymentsRecords(20);
    expect(rows.length).toBe(20);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Payments extended suite 16', () => {
  it('validates seed batch 16', () => {
    const rows = seedPaymentsRecords(21);
    expect(rows.length).toBe(21);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Payments extended suite 17', () => {
  it('validates seed batch 17', () => {
    const rows = seedPaymentsRecords(22);
    expect(rows.length).toBe(22);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Payments extended suite 18', () => {
  it('validates seed batch 18', () => {
    const rows = seedPaymentsRecords(23);
    expect(rows.length).toBe(23);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Payments extended suite 19', () => {
  it('validates seed batch 19', () => {
    const rows = seedPaymentsRecords(24);
    expect(rows.length).toBe(24);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});
