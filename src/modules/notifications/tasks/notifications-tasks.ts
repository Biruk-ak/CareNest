/** Operational task catalog for Notifications */

export type NotificationsTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface NotificationsTask {
  id: string;
  title: string;
  description: string;
  state: NotificationsTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const notificationsTaskCatalog: NotificationsTask[] = [
  {
    id: 'notifications-task-001',
    title: 'Review overnight notes (Notifications #1)',
    description: 'CareNest operational task for notifications: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm notifications context #1',
      'Capture outcome for notifications task 1',
      'Log follow-up owner for notifications-1',
    ],
    dependsOn: [],
  },
  {
    id: 'notifications-task-002',
    title: 'Reconcile open items (Notifications #2)',
    description: 'CareNest operational task for notifications: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm notifications context #2',
      'Capture outcome for notifications task 2',
      'Log follow-up owner for notifications-2',
    ],
    dependsOn: ['notifications-task-001'],
  },
  {
    id: 'notifications-task-003',
    title: 'Escalate overdue cases (Notifications #3)',
    description: 'CareNest operational task for notifications: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm notifications context #3',
      'Capture outcome for notifications task 3',
      'Log follow-up owner for notifications-3',
    ],
    dependsOn: ['notifications-task-002'],
  },
  {
    id: 'notifications-task-004',
    title: 'Prepare family update (Notifications #4)',
    description: 'CareNest operational task for notifications: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm notifications context #4',
      'Capture outcome for notifications task 4',
      'Log follow-up owner for notifications-4',
    ],
    dependsOn: ['notifications-task-003'],
  },
  {
    id: 'notifications-task-005',
    title: 'Audit documentation completeness (Notifications #5)',
    description: 'CareNest operational task for notifications: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm notifications context #5',
      'Capture outcome for notifications task 5',
      'Log follow-up owner for notifications-5',
    ],
    dependsOn: ['notifications-task-004'],
  },
  {
    id: 'notifications-task-006',
    title: 'Sync with pharmacy / vendor (Notifications #6)',
    description: 'CareNest operational task for notifications: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm notifications context #6',
      'Capture outcome for notifications task 6',
      'Log follow-up owner for notifications-6',
    ],
    dependsOn: ['notifications-task-005'],
  },
  {
    id: 'notifications-task-007',
    title: 'Validate schedule conflicts (Notifications #7)',
    description: 'CareNest operational task for notifications: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm notifications context #7',
      'Capture outcome for notifications task 7',
      'Log follow-up owner for notifications-7',
    ],
    dependsOn: ['notifications-task-006'],
  },
  {
    id: 'notifications-task-008',
    title: 'Close completed workflows (Notifications #8)',
    description: 'CareNest operational task for notifications: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm notifications context #8',
      'Capture outcome for notifications task 8',
      'Log follow-up owner for notifications-8',
    ],
    dependsOn: ['notifications-task-007'],
  },
  {
    id: 'notifications-task-009',
    title: 'Generate shift handoff summary (Notifications #9)',
    description: 'CareNest operational task for notifications: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm notifications context #9',
      'Capture outcome for notifications task 9',
      'Log follow-up owner for notifications-9',
    ],
    dependsOn: ['notifications-task-008'],
  },
  {
    id: 'notifications-task-010',
    title: 'Confirm consent / privacy flags (Notifications #10)',
    description: 'CareNest operational task for notifications: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm notifications context #10',
      'Capture outcome for notifications task 10',
      'Log follow-up owner for notifications-10',
    ],
    dependsOn: ['notifications-task-009'],
  },
  {
    id: 'notifications-task-011',
    title: 'Run compliance checklist (Notifications #11)',
    description: 'CareNest operational task for notifications: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm notifications context #11',
      'Capture outcome for notifications task 11',
      'Log follow-up owner for notifications-11',
    ],
    dependsOn: ['notifications-task-010'],
  },
  {
    id: 'notifications-task-012',
    title: 'Update risk scores (Notifications #12)',
    description: 'CareNest operational task for notifications: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm notifications context #12',
      'Capture outcome for notifications task 12',
      'Log follow-up owner for notifications-12',
    ],
    dependsOn: ['notifications-task-011'],
  },
  {
    id: 'notifications-task-013',
    title: 'Notify on-call clinician (Notifications #13)',
    description: 'CareNest operational task for notifications: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm notifications context #13',
      'Capture outcome for notifications task 13',
      'Log follow-up owner for notifications-13',
    ],
    dependsOn: ['notifications-task-012'],
  },
  {
    id: 'notifications-task-014',
    title: 'Archive stale drafts (Notifications #14)',
    description: 'CareNest operational task for notifications: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm notifications context #14',
      'Capture outcome for notifications task 14',
      'Log follow-up owner for notifications-14',
    ],
    dependsOn: ['notifications-task-013'],
  },
  {
    id: 'notifications-task-015',
    title: 'Export weekly digest (Notifications #15)',
    description: 'CareNest operational task for notifications: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm notifications context #15',
      'Capture outcome for notifications task 15',
      'Log follow-up owner for notifications-15',
    ],
    dependsOn: ['notifications-task-014'],
  },
  {
    id: 'notifications-task-016',
    title: 'Train new caregiver on module (Notifications #16)',
    description: 'CareNest operational task for notifications: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm notifications context #16',
      'Capture outcome for notifications task 16',
      'Log follow-up owner for notifications-16',
    ],
    dependsOn: ['notifications-task-015'],
  },
  {
    id: 'notifications-task-017',
    title: 'Verify device integrations (Notifications #17)',
    description: 'CareNest operational task for notifications: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm notifications context #17',
      'Capture outcome for notifications task 17',
      'Log follow-up owner for notifications-17',
    ],
    dependsOn: ['notifications-task-016'],
  },
  {
    id: 'notifications-task-018',
    title: 'Spot-check critical priorities (Notifications #18)',
    description: 'CareNest operational task for notifications: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm notifications context #18',
      'Capture outcome for notifications task 18',
      'Log follow-up owner for notifications-18',
    ],
    dependsOn: ['notifications-task-017'],
  },
  {
    id: 'notifications-task-019',
    title: 'Align meal / care constraints (Notifications #19)',
    description: 'CareNest operational task for notifications: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm notifications context #19',
      'Capture outcome for notifications task 19',
      'Log follow-up owner for notifications-19',
    ],
    dependsOn: ['notifications-task-018'],
  },
  {
    id: 'notifications-task-020',
    title: 'Publish dashboard widgets (Notifications #20)',
    description: 'CareNest operational task for notifications: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm notifications context #20',
      'Capture outcome for notifications task 20',
      'Log follow-up owner for notifications-20',
    ],
    dependsOn: ['notifications-task-019'],
  },
  {
    id: 'notifications-task-021',
    title: 'Review overnight notes (Notifications #21)',
    description: 'CareNest operational task for notifications: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm notifications context #21',
      'Capture outcome for notifications task 21',
      'Log follow-up owner for notifications-21',
    ],
    dependsOn: ['notifications-task-020'],
  },
  {
    id: 'notifications-task-022',
    title: 'Reconcile open items (Notifications #22)',
    description: 'CareNest operational task for notifications: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm notifications context #22',
      'Capture outcome for notifications task 22',
      'Log follow-up owner for notifications-22',
    ],
    dependsOn: ['notifications-task-021'],
  },
  {
    id: 'notifications-task-023',
    title: 'Escalate overdue cases (Notifications #23)',
    description: 'CareNest operational task for notifications: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm notifications context #23',
      'Capture outcome for notifications task 23',
      'Log follow-up owner for notifications-23',
    ],
    dependsOn: ['notifications-task-022'],
  },
  {
    id: 'notifications-task-024',
    title: 'Prepare family update (Notifications #24)',
    description: 'CareNest operational task for notifications: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm notifications context #24',
      'Capture outcome for notifications task 24',
      'Log follow-up owner for notifications-24',
    ],
    dependsOn: ['notifications-task-023'],
  },
  {
    id: 'notifications-task-025',
    title: 'Audit documentation completeness (Notifications #25)',
    description: 'CareNest operational task for notifications: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm notifications context #25',
      'Capture outcome for notifications task 25',
      'Log follow-up owner for notifications-25',
    ],
    dependsOn: ['notifications-task-024'],
  },
  {
    id: 'notifications-task-026',
    title: 'Sync with pharmacy / vendor (Notifications #26)',
    description: 'CareNest operational task for notifications: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm notifications context #26',
      'Capture outcome for notifications task 26',
      'Log follow-up owner for notifications-26',
    ],
    dependsOn: ['notifications-task-025'],
  },
  {
    id: 'notifications-task-027',
    title: 'Validate schedule conflicts (Notifications #27)',
    description: 'CareNest operational task for notifications: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm notifications context #27',
      'Capture outcome for notifications task 27',
      'Log follow-up owner for notifications-27',
    ],
    dependsOn: ['notifications-task-026'],
  },
  {
    id: 'notifications-task-028',
    title: 'Close completed workflows (Notifications #28)',
    description: 'CareNest operational task for notifications: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm notifications context #28',
      'Capture outcome for notifications task 28',
      'Log follow-up owner for notifications-28',
    ],
    dependsOn: ['notifications-task-027'],
  },
  {
    id: 'notifications-task-029',
    title: 'Generate shift handoff summary (Notifications #29)',
    description: 'CareNest operational task for notifications: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm notifications context #29',
      'Capture outcome for notifications task 29',
      'Log follow-up owner for notifications-29',
    ],
    dependsOn: ['notifications-task-028'],
  },
  {
    id: 'notifications-task-030',
    title: 'Confirm consent / privacy flags (Notifications #30)',
    description: 'CareNest operational task for notifications: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm notifications context #30',
      'Capture outcome for notifications task 30',
      'Log follow-up owner for notifications-30',
    ],
    dependsOn: ['notifications-task-029'],
  },
  {
    id: 'notifications-task-031',
    title: 'Run compliance checklist (Notifications #31)',
    description: 'CareNest operational task for notifications: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm notifications context #31',
      'Capture outcome for notifications task 31',
      'Log follow-up owner for notifications-31',
    ],
    dependsOn: ['notifications-task-030'],
  },
  {
    id: 'notifications-task-032',
    title: 'Update risk scores (Notifications #32)',
    description: 'CareNest operational task for notifications: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm notifications context #32',
      'Capture outcome for notifications task 32',
      'Log follow-up owner for notifications-32',
    ],
    dependsOn: ['notifications-task-031'],
  },
  {
    id: 'notifications-task-033',
    title: 'Notify on-call clinician (Notifications #33)',
    description: 'CareNest operational task for notifications: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm notifications context #33',
      'Capture outcome for notifications task 33',
      'Log follow-up owner for notifications-33',
    ],
    dependsOn: ['notifications-task-032'],
  },
  {
    id: 'notifications-task-034',
    title: 'Archive stale drafts (Notifications #34)',
    description: 'CareNest operational task for notifications: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm notifications context #34',
      'Capture outcome for notifications task 34',
      'Log follow-up owner for notifications-34',
    ],
    dependsOn: ['notifications-task-033'],
  },
  {
    id: 'notifications-task-035',
    title: 'Export weekly digest (Notifications #35)',
    description: 'CareNest operational task for notifications: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm notifications context #35',
      'Capture outcome for notifications task 35',
      'Log follow-up owner for notifications-35',
    ],
    dependsOn: ['notifications-task-034'],
  },
  {
    id: 'notifications-task-036',
    title: 'Train new caregiver on module (Notifications #36)',
    description: 'CareNest operational task for notifications: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm notifications context #36',
      'Capture outcome for notifications task 36',
      'Log follow-up owner for notifications-36',
    ],
    dependsOn: ['notifications-task-035'],
  },
  {
    id: 'notifications-task-037',
    title: 'Verify device integrations (Notifications #37)',
    description: 'CareNest operational task for notifications: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm notifications context #37',
      'Capture outcome for notifications task 37',
      'Log follow-up owner for notifications-37',
    ],
    dependsOn: ['notifications-task-036'],
  },
  {
    id: 'notifications-task-038',
    title: 'Spot-check critical priorities (Notifications #38)',
    description: 'CareNest operational task for notifications: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm notifications context #38',
      'Capture outcome for notifications task 38',
      'Log follow-up owner for notifications-38',
    ],
    dependsOn: ['notifications-task-037'],
  },
  {
    id: 'notifications-task-039',
    title: 'Align meal / care constraints (Notifications #39)',
    description: 'CareNest operational task for notifications: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm notifications context #39',
      'Capture outcome for notifications task 39',
      'Log follow-up owner for notifications-39',
    ],
    dependsOn: ['notifications-task-038'],
  },
  {
    id: 'notifications-task-040',
    title: 'Publish dashboard widgets (Notifications #40)',
    description: 'CareNest operational task for notifications: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm notifications context #40',
      'Capture outcome for notifications task 40',
      'Log follow-up owner for notifications-40',
    ],
    dependsOn: ['notifications-task-039'],
  },
  {
    id: 'notifications-task-041',
    title: 'Review overnight notes (Notifications #41)',
    description: 'CareNest operational task for notifications: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm notifications context #41',
      'Capture outcome for notifications task 41',
      'Log follow-up owner for notifications-41',
    ],
    dependsOn: ['notifications-task-040'],
  },
  {
    id: 'notifications-task-042',
    title: 'Reconcile open items (Notifications #42)',
    description: 'CareNest operational task for notifications: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm notifications context #42',
      'Capture outcome for notifications task 42',
      'Log follow-up owner for notifications-42',
    ],
    dependsOn: ['notifications-task-041'],
  },
  {
    id: 'notifications-task-043',
    title: 'Escalate overdue cases (Notifications #43)',
    description: 'CareNest operational task for notifications: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm notifications context #43',
      'Capture outcome for notifications task 43',
      'Log follow-up owner for notifications-43',
    ],
    dependsOn: ['notifications-task-042'],
  },
  {
    id: 'notifications-task-044',
    title: 'Prepare family update (Notifications #44)',
    description: 'CareNest operational task for notifications: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm notifications context #44',
      'Capture outcome for notifications task 44',
      'Log follow-up owner for notifications-44',
    ],
    dependsOn: ['notifications-task-043'],
  },
  {
    id: 'notifications-task-045',
    title: 'Audit documentation completeness (Notifications #45)',
    description: 'CareNest operational task for notifications: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm notifications context #45',
      'Capture outcome for notifications task 45',
      'Log follow-up owner for notifications-45',
    ],
    dependsOn: ['notifications-task-044'],
  },
  {
    id: 'notifications-task-046',
    title: 'Sync with pharmacy / vendor (Notifications #46)',
    description: 'CareNest operational task for notifications: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm notifications context #46',
      'Capture outcome for notifications task 46',
      'Log follow-up owner for notifications-46',
    ],
    dependsOn: ['notifications-task-045'],
  },
  {
    id: 'notifications-task-047',
    title: 'Validate schedule conflicts (Notifications #47)',
    description: 'CareNest operational task for notifications: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm notifications context #47',
      'Capture outcome for notifications task 47',
      'Log follow-up owner for notifications-47',
    ],
    dependsOn: ['notifications-task-046'],
  },
  {
    id: 'notifications-task-048',
    title: 'Close completed workflows (Notifications #48)',
    description: 'CareNest operational task for notifications: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm notifications context #48',
      'Capture outcome for notifications task 48',
      'Log follow-up owner for notifications-48',
    ],
    dependsOn: ['notifications-task-047'],
  },
  {
    id: 'notifications-task-049',
    title: 'Generate shift handoff summary (Notifications #49)',
    description: 'CareNest operational task for notifications: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm notifications context #49',
      'Capture outcome for notifications task 49',
      'Log follow-up owner for notifications-49',
    ],
    dependsOn: ['notifications-task-048'],
  },
  {
    id: 'notifications-task-050',
    title: 'Confirm consent / privacy flags (Notifications #50)',
    description: 'CareNest operational task for notifications: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm notifications context #50',
      'Capture outcome for notifications task 50',
      'Log follow-up owner for notifications-50',
    ],
    dependsOn: ['notifications-task-049'],
  },
  {
    id: 'notifications-task-051',
    title: 'Run compliance checklist (Notifications #51)',
    description: 'CareNest operational task for notifications: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm notifications context #51',
      'Capture outcome for notifications task 51',
      'Log follow-up owner for notifications-51',
    ],
    dependsOn: ['notifications-task-050'],
  },
  {
    id: 'notifications-task-052',
    title: 'Update risk scores (Notifications #52)',
    description: 'CareNest operational task for notifications: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm notifications context #52',
      'Capture outcome for notifications task 52',
      'Log follow-up owner for notifications-52',
    ],
    dependsOn: ['notifications-task-051'],
  },
  {
    id: 'notifications-task-053',
    title: 'Notify on-call clinician (Notifications #53)',
    description: 'CareNest operational task for notifications: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm notifications context #53',
      'Capture outcome for notifications task 53',
      'Log follow-up owner for notifications-53',
    ],
    dependsOn: ['notifications-task-052'],
  },
  {
    id: 'notifications-task-054',
    title: 'Archive stale drafts (Notifications #54)',
    description: 'CareNest operational task for notifications: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm notifications context #54',
      'Capture outcome for notifications task 54',
      'Log follow-up owner for notifications-54',
    ],
    dependsOn: ['notifications-task-053'],
  },
  {
    id: 'notifications-task-055',
    title: 'Export weekly digest (Notifications #55)',
    description: 'CareNest operational task for notifications: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm notifications context #55',
      'Capture outcome for notifications task 55',
      'Log follow-up owner for notifications-55',
    ],
    dependsOn: ['notifications-task-054'],
  },
  {
    id: 'notifications-task-056',
    title: 'Train new caregiver on module (Notifications #56)',
    description: 'CareNest operational task for notifications: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm notifications context #56',
      'Capture outcome for notifications task 56',
      'Log follow-up owner for notifications-56',
    ],
    dependsOn: ['notifications-task-055'],
  },
  {
    id: 'notifications-task-057',
    title: 'Verify device integrations (Notifications #57)',
    description: 'CareNest operational task for notifications: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm notifications context #57',
      'Capture outcome for notifications task 57',
      'Log follow-up owner for notifications-57',
    ],
    dependsOn: ['notifications-task-056'],
  },
  {
    id: 'notifications-task-058',
    title: 'Spot-check critical priorities (Notifications #58)',
    description: 'CareNest operational task for notifications: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm notifications context #58',
      'Capture outcome for notifications task 58',
      'Log follow-up owner for notifications-58',
    ],
    dependsOn: ['notifications-task-057'],
  },
  {
    id: 'notifications-task-059',
    title: 'Align meal / care constraints (Notifications #59)',
    description: 'CareNest operational task for notifications: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm notifications context #59',
      'Capture outcome for notifications task 59',
      'Log follow-up owner for notifications-59',
    ],
    dependsOn: ['notifications-task-058'],
  },
  {
    id: 'notifications-task-060',
    title: 'Publish dashboard widgets (Notifications #60)',
    description: 'CareNest operational task for notifications: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm notifications context #60',
      'Capture outcome for notifications task 60',
      'Log follow-up owner for notifications-60',
    ],
    dependsOn: ['notifications-task-059'],
  },
  {
    id: 'notifications-task-061',
    title: 'Review overnight notes (Notifications #61)',
    description: 'CareNest operational task for notifications: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm notifications context #61',
      'Capture outcome for notifications task 61',
      'Log follow-up owner for notifications-61',
    ],
    dependsOn: ['notifications-task-060'],
  },
  {
    id: 'notifications-task-062',
    title: 'Reconcile open items (Notifications #62)',
    description: 'CareNest operational task for notifications: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm notifications context #62',
      'Capture outcome for notifications task 62',
      'Log follow-up owner for notifications-62',
    ],
    dependsOn: ['notifications-task-061'],
  },
  {
    id: 'notifications-task-063',
    title: 'Escalate overdue cases (Notifications #63)',
    description: 'CareNest operational task for notifications: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm notifications context #63',
      'Capture outcome for notifications task 63',
      'Log follow-up owner for notifications-63',
    ],
    dependsOn: ['notifications-task-062'],
  },
  {
    id: 'notifications-task-064',
    title: 'Prepare family update (Notifications #64)',
    description: 'CareNest operational task for notifications: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm notifications context #64',
      'Capture outcome for notifications task 64',
      'Log follow-up owner for notifications-64',
    ],
    dependsOn: ['notifications-task-063'],
  },
  {
    id: 'notifications-task-065',
    title: 'Audit documentation completeness (Notifications #65)',
    description: 'CareNest operational task for notifications: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm notifications context #65',
      'Capture outcome for notifications task 65',
      'Log follow-up owner for notifications-65',
    ],
    dependsOn: ['notifications-task-064'],
  },
  {
    id: 'notifications-task-066',
    title: 'Sync with pharmacy / vendor (Notifications #66)',
    description: 'CareNest operational task for notifications: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm notifications context #66',
      'Capture outcome for notifications task 66',
      'Log follow-up owner for notifications-66',
    ],
    dependsOn: ['notifications-task-065'],
  },
  {
    id: 'notifications-task-067',
    title: 'Validate schedule conflicts (Notifications #67)',
    description: 'CareNest operational task for notifications: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm notifications context #67',
      'Capture outcome for notifications task 67',
      'Log follow-up owner for notifications-67',
    ],
    dependsOn: ['notifications-task-066'],
  },
  {
    id: 'notifications-task-068',
    title: 'Close completed workflows (Notifications #68)',
    description: 'CareNest operational task for notifications: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm notifications context #68',
      'Capture outcome for notifications task 68',
      'Log follow-up owner for notifications-68',
    ],
    dependsOn: ['notifications-task-067'],
  },
  {
    id: 'notifications-task-069',
    title: 'Generate shift handoff summary (Notifications #69)',
    description: 'CareNest operational task for notifications: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm notifications context #69',
      'Capture outcome for notifications task 69',
      'Log follow-up owner for notifications-69',
    ],
    dependsOn: ['notifications-task-068'],
  },
  {
    id: 'notifications-task-070',
    title: 'Confirm consent / privacy flags (Notifications #70)',
    description: 'CareNest operational task for notifications: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm notifications context #70',
      'Capture outcome for notifications task 70',
      'Log follow-up owner for notifications-70',
    ],
    dependsOn: ['notifications-task-069'],
  },
  {
    id: 'notifications-task-071',
    title: 'Run compliance checklist (Notifications #71)',
    description: 'CareNest operational task for notifications: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm notifications context #71',
      'Capture outcome for notifications task 71',
      'Log follow-up owner for notifications-71',
    ],
    dependsOn: ['notifications-task-070'],
  },
  {
    id: 'notifications-task-072',
    title: 'Update risk scores (Notifications #72)',
    description: 'CareNest operational task for notifications: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm notifications context #72',
      'Capture outcome for notifications task 72',
      'Log follow-up owner for notifications-72',
    ],
    dependsOn: ['notifications-task-071'],
  },
  {
    id: 'notifications-task-073',
    title: 'Notify on-call clinician (Notifications #73)',
    description: 'CareNest operational task for notifications: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm notifications context #73',
      'Capture outcome for notifications task 73',
      'Log follow-up owner for notifications-73',
    ],
    dependsOn: ['notifications-task-072'],
  },
  {
    id: 'notifications-task-074',
    title: 'Archive stale drafts (Notifications #74)',
    description: 'CareNest operational task for notifications: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm notifications context #74',
      'Capture outcome for notifications task 74',
      'Log follow-up owner for notifications-74',
    ],
    dependsOn: ['notifications-task-073'],
  },
  {
    id: 'notifications-task-075',
    title: 'Export weekly digest (Notifications #75)',
    description: 'CareNest operational task for notifications: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm notifications context #75',
      'Capture outcome for notifications task 75',
      'Log follow-up owner for notifications-75',
    ],
    dependsOn: ['notifications-task-074'],
  },
  {
    id: 'notifications-task-076',
    title: 'Train new caregiver on module (Notifications #76)',
    description: 'CareNest operational task for notifications: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm notifications context #76',
      'Capture outcome for notifications task 76',
      'Log follow-up owner for notifications-76',
    ],
    dependsOn: ['notifications-task-075'],
  },
  {
    id: 'notifications-task-077',
    title: 'Verify device integrations (Notifications #77)',
    description: 'CareNest operational task for notifications: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm notifications context #77',
      'Capture outcome for notifications task 77',
      'Log follow-up owner for notifications-77',
    ],
    dependsOn: ['notifications-task-076'],
  },
  {
    id: 'notifications-task-078',
    title: 'Spot-check critical priorities (Notifications #78)',
    description: 'CareNest operational task for notifications: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm notifications context #78',
      'Capture outcome for notifications task 78',
      'Log follow-up owner for notifications-78',
    ],
    dependsOn: ['notifications-task-077'],
  },
  {
    id: 'notifications-task-079',
    title: 'Align meal / care constraints (Notifications #79)',
    description: 'CareNest operational task for notifications: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm notifications context #79',
      'Capture outcome for notifications task 79',
      'Log follow-up owner for notifications-79',
    ],
    dependsOn: ['notifications-task-078'],
  },
  {
    id: 'notifications-task-080',
    title: 'Publish dashboard widgets (Notifications #80)',
    description: 'CareNest operational task for notifications: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm notifications context #80',
      'Capture outcome for notifications task 80',
      'Log follow-up owner for notifications-80',
    ],
    dependsOn: ['notifications-task-079'],
  },
];

export function listOpenNotificationsTasks(): NotificationsTask[] {
  return notificationsTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countNotificationsTasksByState(): Record<NotificationsTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of notificationsTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateNotificationsWorkload1(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateNotificationsWorkload2(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateNotificationsWorkload3(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateNotificationsWorkload4(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateNotificationsWorkload5(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateNotificationsWorkload6(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateNotificationsWorkload7(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateNotificationsWorkload8(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateNotificationsWorkload9(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateNotificationsWorkload10(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateNotificationsWorkload11(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateNotificationsWorkload12(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateNotificationsWorkload13(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateNotificationsWorkload14(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateNotificationsWorkload15(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateNotificationsWorkload16(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateNotificationsWorkload17(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateNotificationsWorkload18(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateNotificationsWorkload19(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateNotificationsWorkload20(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateNotificationsWorkload21(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateNotificationsWorkload22(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateNotificationsWorkload23(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateNotificationsWorkload24(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateNotificationsWorkload25(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateNotificationsWorkload26(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateNotificationsWorkload27(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateNotificationsWorkload28(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateNotificationsWorkload29(tasks: NotificationsTask[] = notificationsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
