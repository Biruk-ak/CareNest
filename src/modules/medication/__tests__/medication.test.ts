import { describe, expect, it } from 'vitest';
import { seedMedicationRecords } from '../seeds/medication';
import { scoreMedicationRisk1, buildMedicationId } from '../utils/medication';
import { listOpenMedicationTasks, countMedicationTasksByState } from '../tasks/medication-tasks';
import { canMedication } from '../permissions/medication';

describe('CareNest Medication module', () => {
  it('seeds records', () => {
    const rows = seedMedicationRecords(10);
    expect(rows).toHaveLength(10);
    expect(rows[0].title).toContain('case');
  });

  it('builds branded ids', () => {
    const id = buildMedicationId();
    expect(String(id)).toContain('medication');
  });

  it('scores risk', () => {
    const [row] = seedMedicationRecords(1);
    expect(scoreMedicationRisk1(row)).toBeGreaterThan(0);
  });

  it('exposes operational tasks', () => {
    expect(listOpenMedicationTasks().length).toBeGreaterThan(0);
    const counts = countMedicationTasksByState();
    expect(counts.todo + counts.in_progress + counts.blocked + counts.done + counts.cancelled).toBeGreaterThan(0);
  });

  it('enforces permissions', () => {
    expect(canMedication('viewer', 'read')).toBe(true);
    expect(canMedication('viewer', 'delete')).toBe(false);
    expect(canMedication('admin', 'delete')).toBe(true);
  });
});

describe('Medication extended suite 1', () => {
  it('validates seed batch 1', () => {
    const rows = seedMedicationRecords(6);
    expect(rows.length).toBe(6);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Medication extended suite 2', () => {
  it('validates seed batch 2', () => {
    const rows = seedMedicationRecords(7);
    expect(rows.length).toBe(7);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Medication extended suite 3', () => {
  it('validates seed batch 3', () => {
    const rows = seedMedicationRecords(8);
    expect(rows.length).toBe(8);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Medication extended suite 4', () => {
  it('validates seed batch 4', () => {
    const rows = seedMedicationRecords(9);
    expect(rows.length).toBe(9);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Medication extended suite 5', () => {
  it('validates seed batch 5', () => {
    const rows = seedMedicationRecords(10);
    expect(rows.length).toBe(10);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Medication extended suite 6', () => {
  it('validates seed batch 6', () => {
    const rows = seedMedicationRecords(11);
    expect(rows.length).toBe(11);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Medication extended suite 7', () => {
  it('validates seed batch 7', () => {
    const rows = seedMedicationRecords(12);
    expect(rows.length).toBe(12);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Medication extended suite 8', () => {
  it('validates seed batch 8', () => {
    const rows = seedMedicationRecords(13);
    expect(rows.length).toBe(13);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Medication extended suite 9', () => {
  it('validates seed batch 9', () => {
    const rows = seedMedicationRecords(14);
    expect(rows.length).toBe(14);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Medication extended suite 10', () => {
  it('validates seed batch 10', () => {
    const rows = seedMedicationRecords(15);
    expect(rows.length).toBe(15);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Medication extended suite 11', () => {
  it('validates seed batch 11', () => {
    const rows = seedMedicationRecords(16);
    expect(rows.length).toBe(16);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Medication extended suite 12', () => {
  it('validates seed batch 12', () => {
    const rows = seedMedicationRecords(17);
    expect(rows.length).toBe(17);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Medication extended suite 13', () => {
  it('validates seed batch 13', () => {
    const rows = seedMedicationRecords(18);
    expect(rows.length).toBe(18);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Medication extended suite 14', () => {
  it('validates seed batch 14', () => {
    const rows = seedMedicationRecords(19);
    expect(rows.length).toBe(19);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Medication extended suite 15', () => {
  it('validates seed batch 15', () => {
    const rows = seedMedicationRecords(20);
    expect(rows.length).toBe(20);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Medication extended suite 16', () => {
  it('validates seed batch 16', () => {
    const rows = seedMedicationRecords(21);
    expect(rows.length).toBe(21);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Medication extended suite 17', () => {
  it('validates seed batch 17', () => {
    const rows = seedMedicationRecords(22);
    expect(rows.length).toBe(22);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Medication extended suite 18', () => {
  it('validates seed batch 18', () => {
    const rows = seedMedicationRecords(23);
    expect(rows.length).toBe(23);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Medication extended suite 19', () => {
  it('validates seed batch 19', () => {
    const rows = seedMedicationRecords(24);
    expect(rows.length).toBe(24);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});
