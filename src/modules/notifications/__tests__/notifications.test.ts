import { describe, expect, it } from 'vitest';
import { seedNotificationsRecords } from '../seeds/notifications';
import { scoreNotificationsRisk1, buildNotificationsId } from '../utils/notifications';
import { listOpenNotificationsTasks, countNotificationsTasksByState } from '../tasks/notifications-tasks';
import { canNotifications } from '../permissions/notifications';

describe('CareNest Notifications module', () => {
  it('seeds records', () => {
    const rows = seedNotificationsRecords(10);
    expect(rows).toHaveLength(10);
    expect(rows[0].title).toContain('case');
  });

  it('builds branded ids', () => {
    const id = buildNotificationsId();
    expect(String(id)).toContain('notifications');
  });

  it('scores risk', () => {
    const [row] = seedNotificationsRecords(1);
    expect(scoreNotificationsRisk1(row)).toBeGreaterThan(0);
  });

  it('exposes operational tasks', () => {
    expect(listOpenNotificationsTasks().length).toBeGreaterThan(0);
    const counts = countNotificationsTasksByState();
    expect(counts.todo + counts.in_progress + counts.blocked + counts.done + counts.cancelled).toBeGreaterThan(0);
  });

  it('enforces permissions', () => {
    expect(canNotifications('viewer', 'read')).toBe(true);
    expect(canNotifications('viewer', 'delete')).toBe(false);
    expect(canNotifications('admin', 'delete')).toBe(true);
  });
});

describe('Notifications extended suite 1', () => {
  it('validates seed batch 1', () => {
    const rows = seedNotificationsRecords(6);
    expect(rows.length).toBe(6);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Notifications extended suite 2', () => {
  it('validates seed batch 2', () => {
    const rows = seedNotificationsRecords(7);
    expect(rows.length).toBe(7);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Notifications extended suite 3', () => {
  it('validates seed batch 3', () => {
    const rows = seedNotificationsRecords(8);
    expect(rows.length).toBe(8);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Notifications extended suite 4', () => {
  it('validates seed batch 4', () => {
    const rows = seedNotificationsRecords(9);
    expect(rows.length).toBe(9);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Notifications extended suite 5', () => {
  it('validates seed batch 5', () => {
    const rows = seedNotificationsRecords(10);
    expect(rows.length).toBe(10);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Notifications extended suite 6', () => {
  it('validates seed batch 6', () => {
    const rows = seedNotificationsRecords(11);
    expect(rows.length).toBe(11);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Notifications extended suite 7', () => {
  it('validates seed batch 7', () => {
    const rows = seedNotificationsRecords(12);
    expect(rows.length).toBe(12);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Notifications extended suite 8', () => {
  it('validates seed batch 8', () => {
    const rows = seedNotificationsRecords(13);
    expect(rows.length).toBe(13);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Notifications extended suite 9', () => {
  it('validates seed batch 9', () => {
    const rows = seedNotificationsRecords(14);
    expect(rows.length).toBe(14);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Notifications extended suite 10', () => {
  it('validates seed batch 10', () => {
    const rows = seedNotificationsRecords(15);
    expect(rows.length).toBe(15);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Notifications extended suite 11', () => {
  it('validates seed batch 11', () => {
    const rows = seedNotificationsRecords(16);
    expect(rows.length).toBe(16);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Notifications extended suite 12', () => {
  it('validates seed batch 12', () => {
    const rows = seedNotificationsRecords(17);
    expect(rows.length).toBe(17);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Notifications extended suite 13', () => {
  it('validates seed batch 13', () => {
    const rows = seedNotificationsRecords(18);
    expect(rows.length).toBe(18);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Notifications extended suite 14', () => {
  it('validates seed batch 14', () => {
    const rows = seedNotificationsRecords(19);
    expect(rows.length).toBe(19);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Notifications extended suite 15', () => {
  it('validates seed batch 15', () => {
    const rows = seedNotificationsRecords(20);
    expect(rows.length).toBe(20);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Notifications extended suite 16', () => {
  it('validates seed batch 16', () => {
    const rows = seedNotificationsRecords(21);
    expect(rows.length).toBe(21);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Notifications extended suite 17', () => {
  it('validates seed batch 17', () => {
    const rows = seedNotificationsRecords(22);
    expect(rows.length).toBe(22);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Notifications extended suite 18', () => {
  it('validates seed batch 18', () => {
    const rows = seedNotificationsRecords(23);
    expect(rows.length).toBe(23);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});

describe('Notifications extended suite 19', () => {
  it('validates seed batch 19', () => {
    const rows = seedNotificationsRecords(24);
    expect(rows.length).toBe(24);
    expect(rows.every((r) => r.facilityId.startsWith('facility-'))).toBe(true);
  });
});
