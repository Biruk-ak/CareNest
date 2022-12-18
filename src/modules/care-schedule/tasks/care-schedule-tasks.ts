/** Operational task catalog for CareSchedule */

export type CareScheduleTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface CareScheduleTask {
  id: string;
  title: string;
  description: string;
  state: CareScheduleTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const careScheduleTaskCatalog: CareScheduleTask[] = [
  {
    id: 'care-schedule-task-001',
    title: 'Review overnight notes (CareSchedule #1)',
    description: 'CareNest operational task for care-schedule: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm care-schedule context #1',
      'Capture outcome for care-schedule task 1',
      'Log follow-up owner for care-schedule-1',
    ],
    dependsOn: [],
  },
  {
    id: 'care-schedule-task-002',
    title: 'Reconcile open items (CareSchedule #2)',
    description: 'CareNest operational task for care-schedule: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm care-schedule context #2',
      'Capture outcome for care-schedule task 2',
      'Log follow-up owner for care-schedule-2',
    ],
    dependsOn: ['care-schedule-task-001'],
  },
  {
    id: 'care-schedule-task-003',
    title: 'Escalate overdue cases (CareSchedule #3)',
    description: 'CareNest operational task for care-schedule: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm care-schedule context #3',
      'Capture outcome for care-schedule task 3',
      'Log follow-up owner for care-schedule-3',
    ],
    dependsOn: ['care-schedule-task-002'],
  },
  {
    id: 'care-schedule-task-004',
    title: 'Prepare family update (CareSchedule #4)',
    description: 'CareNest operational task for care-schedule: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm care-schedule context #4',
      'Capture outcome for care-schedule task 4',
      'Log follow-up owner for care-schedule-4',
    ],
    dependsOn: ['care-schedule-task-003'],
  },
  {
    id: 'care-schedule-task-005',
    title: 'Audit documentation completeness (CareSchedule #5)',
    description: 'CareNest operational task for care-schedule: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm care-schedule context #5',
      'Capture outcome for care-schedule task 5',
      'Log follow-up owner for care-schedule-5',
    ],
    dependsOn: ['care-schedule-task-004'],
  },
  {
    id: 'care-schedule-task-006',
    title: 'Sync with pharmacy / vendor (CareSchedule #6)',
    description: 'CareNest operational task for care-schedule: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm care-schedule context #6',
      'Capture outcome for care-schedule task 6',
      'Log follow-up owner for care-schedule-6',
    ],
    dependsOn: ['care-schedule-task-005'],
  },
  {
    id: 'care-schedule-task-007',
    title: 'Validate schedule conflicts (CareSchedule #7)',
    description: 'CareNest operational task for care-schedule: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm care-schedule context #7',
      'Capture outcome for care-schedule task 7',
      'Log follow-up owner for care-schedule-7',
    ],
    dependsOn: ['care-schedule-task-006'],
  },
  {
    id: 'care-schedule-task-008',
    title: 'Close completed workflows (CareSchedule #8)',
    description: 'CareNest operational task for care-schedule: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm care-schedule context #8',
      'Capture outcome for care-schedule task 8',
      'Log follow-up owner for care-schedule-8',
    ],
    dependsOn: ['care-schedule-task-007'],
  },
  {
    id: 'care-schedule-task-009',
    title: 'Generate shift handoff summary (CareSchedule #9)',
    description: 'CareNest operational task for care-schedule: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm care-schedule context #9',
      'Capture outcome for care-schedule task 9',
      'Log follow-up owner for care-schedule-9',
    ],
    dependsOn: ['care-schedule-task-008'],
  },
  {
    id: 'care-schedule-task-010',
    title: 'Confirm consent / privacy flags (CareSchedule #10)',
    description: 'CareNest operational task for care-schedule: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm care-schedule context #10',
      'Capture outcome for care-schedule task 10',
      'Log follow-up owner for care-schedule-10',
    ],
    dependsOn: ['care-schedule-task-009'],
  },
  {
    id: 'care-schedule-task-011',
    title: 'Run compliance checklist (CareSchedule #11)',
    description: 'CareNest operational task for care-schedule: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm care-schedule context #11',
      'Capture outcome for care-schedule task 11',
      'Log follow-up owner for care-schedule-11',
    ],
    dependsOn: ['care-schedule-task-010'],
  },
  {
    id: 'care-schedule-task-012',
    title: 'Update risk scores (CareSchedule #12)',
    description: 'CareNest operational task for care-schedule: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm care-schedule context #12',
      'Capture outcome for care-schedule task 12',
      'Log follow-up owner for care-schedule-12',
    ],
    dependsOn: ['care-schedule-task-011'],
  },
  {
    id: 'care-schedule-task-013',
    title: 'Notify on-call clinician (CareSchedule #13)',
    description: 'CareNest operational task for care-schedule: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm care-schedule context #13',
      'Capture outcome for care-schedule task 13',
      'Log follow-up owner for care-schedule-13',
    ],
    dependsOn: ['care-schedule-task-012'],
  },
  {
    id: 'care-schedule-task-014',
    title: 'Archive stale drafts (CareSchedule #14)',
    description: 'CareNest operational task for care-schedule: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm care-schedule context #14',
      'Capture outcome for care-schedule task 14',
      'Log follow-up owner for care-schedule-14',
    ],
    dependsOn: ['care-schedule-task-013'],
  },
  {
    id: 'care-schedule-task-015',
    title: 'Export weekly digest (CareSchedule #15)',
    description: 'CareNest operational task for care-schedule: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm care-schedule context #15',
      'Capture outcome for care-schedule task 15',
      'Log follow-up owner for care-schedule-15',
    ],
    dependsOn: ['care-schedule-task-014'],
  },
  {
    id: 'care-schedule-task-016',
    title: 'Train new caregiver on module (CareSchedule #16)',
    description: 'CareNest operational task for care-schedule: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm care-schedule context #16',
      'Capture outcome for care-schedule task 16',
      'Log follow-up owner for care-schedule-16',
    ],
    dependsOn: ['care-schedule-task-015'],
  },
  {
    id: 'care-schedule-task-017',
    title: 'Verify device integrations (CareSchedule #17)',
    description: 'CareNest operational task for care-schedule: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm care-schedule context #17',
      'Capture outcome for care-schedule task 17',
      'Log follow-up owner for care-schedule-17',
    ],
    dependsOn: ['care-schedule-task-016'],
  },
  {
    id: 'care-schedule-task-018',
    title: 'Spot-check critical priorities (CareSchedule #18)',
    description: 'CareNest operational task for care-schedule: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm care-schedule context #18',
      'Capture outcome for care-schedule task 18',
      'Log follow-up owner for care-schedule-18',
    ],
    dependsOn: ['care-schedule-task-017'],
  },
  {
    id: 'care-schedule-task-019',
    title: 'Align meal / care constraints (CareSchedule #19)',
    description: 'CareNest operational task for care-schedule: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm care-schedule context #19',
      'Capture outcome for care-schedule task 19',
      'Log follow-up owner for care-schedule-19',
    ],
    dependsOn: ['care-schedule-task-018'],
  },
  {
    id: 'care-schedule-task-020',
    title: 'Publish dashboard widgets (CareSchedule #20)',
    description: 'CareNest operational task for care-schedule: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm care-schedule context #20',
      'Capture outcome for care-schedule task 20',
      'Log follow-up owner for care-schedule-20',
    ],
    dependsOn: ['care-schedule-task-019'],
  },
  {
    id: 'care-schedule-task-021',
    title: 'Review overnight notes (CareSchedule #21)',
    description: 'CareNest operational task for care-schedule: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm care-schedule context #21',
      'Capture outcome for care-schedule task 21',
      'Log follow-up owner for care-schedule-21',
    ],
    dependsOn: ['care-schedule-task-020'],
  },
  {
    id: 'care-schedule-task-022',
    title: 'Reconcile open items (CareSchedule #22)',
    description: 'CareNest operational task for care-schedule: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm care-schedule context #22',
      'Capture outcome for care-schedule task 22',
      'Log follow-up owner for care-schedule-22',
    ],
    dependsOn: ['care-schedule-task-021'],
  },
  {
    id: 'care-schedule-task-023',
    title: 'Escalate overdue cases (CareSchedule #23)',
    description: 'CareNest operational task for care-schedule: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm care-schedule context #23',
      'Capture outcome for care-schedule task 23',
      'Log follow-up owner for care-schedule-23',
    ],
    dependsOn: ['care-schedule-task-022'],
  },
  {
    id: 'care-schedule-task-024',
    title: 'Prepare family update (CareSchedule #24)',
    description: 'CareNest operational task for care-schedule: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm care-schedule context #24',
      'Capture outcome for care-schedule task 24',
      'Log follow-up owner for care-schedule-24',
    ],
    dependsOn: ['care-schedule-task-023'],
  },
  {
    id: 'care-schedule-task-025',
    title: 'Audit documentation completeness (CareSchedule #25)',
    description: 'CareNest operational task for care-schedule: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm care-schedule context #25',
      'Capture outcome for care-schedule task 25',
      'Log follow-up owner for care-schedule-25',
    ],
    dependsOn: ['care-schedule-task-024'],
  },
  {
    id: 'care-schedule-task-026',
    title: 'Sync with pharmacy / vendor (CareSchedule #26)',
    description: 'CareNest operational task for care-schedule: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm care-schedule context #26',
      'Capture outcome for care-schedule task 26',
      'Log follow-up owner for care-schedule-26',
    ],
    dependsOn: ['care-schedule-task-025'],
  },
  {
    id: 'care-schedule-task-027',
    title: 'Validate schedule conflicts (CareSchedule #27)',
    description: 'CareNest operational task for care-schedule: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm care-schedule context #27',
      'Capture outcome for care-schedule task 27',
      'Log follow-up owner for care-schedule-27',
    ],
    dependsOn: ['care-schedule-task-026'],
  },
  {
    id: 'care-schedule-task-028',
    title: 'Close completed workflows (CareSchedule #28)',
    description: 'CareNest operational task for care-schedule: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm care-schedule context #28',
      'Capture outcome for care-schedule task 28',
      'Log follow-up owner for care-schedule-28',
    ],
    dependsOn: ['care-schedule-task-027'],
  },
  {
    id: 'care-schedule-task-029',
    title: 'Generate shift handoff summary (CareSchedule #29)',
    description: 'CareNest operational task for care-schedule: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm care-schedule context #29',
      'Capture outcome for care-schedule task 29',
      'Log follow-up owner for care-schedule-29',
    ],
    dependsOn: ['care-schedule-task-028'],
  },
  {
    id: 'care-schedule-task-030',
    title: 'Confirm consent / privacy flags (CareSchedule #30)',
    description: 'CareNest operational task for care-schedule: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm care-schedule context #30',
      'Capture outcome for care-schedule task 30',
      'Log follow-up owner for care-schedule-30',
    ],
    dependsOn: ['care-schedule-task-029'],
  },
  {
    id: 'care-schedule-task-031',
    title: 'Run compliance checklist (CareSchedule #31)',
    description: 'CareNest operational task for care-schedule: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm care-schedule context #31',
      'Capture outcome for care-schedule task 31',
      'Log follow-up owner for care-schedule-31',
    ],
    dependsOn: ['care-schedule-task-030'],
  },
  {
    id: 'care-schedule-task-032',
    title: 'Update risk scores (CareSchedule #32)',
    description: 'CareNest operational task for care-schedule: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm care-schedule context #32',
      'Capture outcome for care-schedule task 32',
      'Log follow-up owner for care-schedule-32',
    ],
    dependsOn: ['care-schedule-task-031'],
  },
  {
    id: 'care-schedule-task-033',
    title: 'Notify on-call clinician (CareSchedule #33)',
    description: 'CareNest operational task for care-schedule: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm care-schedule context #33',
      'Capture outcome for care-schedule task 33',
      'Log follow-up owner for care-schedule-33',
    ],
    dependsOn: ['care-schedule-task-032'],
  },
  {
    id: 'care-schedule-task-034',
    title: 'Archive stale drafts (CareSchedule #34)',
    description: 'CareNest operational task for care-schedule: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm care-schedule context #34',
      'Capture outcome for care-schedule task 34',
      'Log follow-up owner for care-schedule-34',
    ],
    dependsOn: ['care-schedule-task-033'],
  },
  {
    id: 'care-schedule-task-035',
    title: 'Export weekly digest (CareSchedule #35)',
    description: 'CareNest operational task for care-schedule: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm care-schedule context #35',
      'Capture outcome for care-schedule task 35',
      'Log follow-up owner for care-schedule-35',
    ],
    dependsOn: ['care-schedule-task-034'],
  },
  {
    id: 'care-schedule-task-036',
    title: 'Train new caregiver on module (CareSchedule #36)',
    description: 'CareNest operational task for care-schedule: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm care-schedule context #36',
      'Capture outcome for care-schedule task 36',
      'Log follow-up owner for care-schedule-36',
    ],
    dependsOn: ['care-schedule-task-035'],
  },
  {
    id: 'care-schedule-task-037',
    title: 'Verify device integrations (CareSchedule #37)',
    description: 'CareNest operational task for care-schedule: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm care-schedule context #37',
      'Capture outcome for care-schedule task 37',
      'Log follow-up owner for care-schedule-37',
    ],
    dependsOn: ['care-schedule-task-036'],
  },
  {
    id: 'care-schedule-task-038',
    title: 'Spot-check critical priorities (CareSchedule #38)',
    description: 'CareNest operational task for care-schedule: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm care-schedule context #38',
      'Capture outcome for care-schedule task 38',
      'Log follow-up owner for care-schedule-38',
    ],
    dependsOn: ['care-schedule-task-037'],
  },
  {
    id: 'care-schedule-task-039',
    title: 'Align meal / care constraints (CareSchedule #39)',
    description: 'CareNest operational task for care-schedule: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm care-schedule context #39',
      'Capture outcome for care-schedule task 39',
      'Log follow-up owner for care-schedule-39',
    ],
    dependsOn: ['care-schedule-task-038'],
  },
  {
    id: 'care-schedule-task-040',
    title: 'Publish dashboard widgets (CareSchedule #40)',
    description: 'CareNest operational task for care-schedule: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm care-schedule context #40',
      'Capture outcome for care-schedule task 40',
      'Log follow-up owner for care-schedule-40',
    ],
    dependsOn: ['care-schedule-task-039'],
  },
  {
    id: 'care-schedule-task-041',
    title: 'Review overnight notes (CareSchedule #41)',
    description: 'CareNest operational task for care-schedule: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm care-schedule context #41',
      'Capture outcome for care-schedule task 41',
      'Log follow-up owner for care-schedule-41',
    ],
    dependsOn: ['care-schedule-task-040'],
  },
  {
    id: 'care-schedule-task-042',
    title: 'Reconcile open items (CareSchedule #42)',
    description: 'CareNest operational task for care-schedule: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm care-schedule context #42',
      'Capture outcome for care-schedule task 42',
      'Log follow-up owner for care-schedule-42',
    ],
    dependsOn: ['care-schedule-task-041'],
  },
  {
    id: 'care-schedule-task-043',
    title: 'Escalate overdue cases (CareSchedule #43)',
    description: 'CareNest operational task for care-schedule: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm care-schedule context #43',
      'Capture outcome for care-schedule task 43',
      'Log follow-up owner for care-schedule-43',
    ],
    dependsOn: ['care-schedule-task-042'],
  },
  {
    id: 'care-schedule-task-044',
    title: 'Prepare family update (CareSchedule #44)',
    description: 'CareNest operational task for care-schedule: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm care-schedule context #44',
      'Capture outcome for care-schedule task 44',
      'Log follow-up owner for care-schedule-44',
    ],
    dependsOn: ['care-schedule-task-043'],
  },
  {
    id: 'care-schedule-task-045',
    title: 'Audit documentation completeness (CareSchedule #45)',
    description: 'CareNest operational task for care-schedule: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm care-schedule context #45',
      'Capture outcome for care-schedule task 45',
      'Log follow-up owner for care-schedule-45',
    ],
    dependsOn: ['care-schedule-task-044'],
  },
  {
    id: 'care-schedule-task-046',
    title: 'Sync with pharmacy / vendor (CareSchedule #46)',
    description: 'CareNest operational task for care-schedule: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm care-schedule context #46',
      'Capture outcome for care-schedule task 46',
      'Log follow-up owner for care-schedule-46',
    ],
    dependsOn: ['care-schedule-task-045'],
  },
  {
    id: 'care-schedule-task-047',
    title: 'Validate schedule conflicts (CareSchedule #47)',
    description: 'CareNest operational task for care-schedule: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm care-schedule context #47',
      'Capture outcome for care-schedule task 47',
      'Log follow-up owner for care-schedule-47',
    ],
    dependsOn: ['care-schedule-task-046'],
  },
  {
    id: 'care-schedule-task-048',
    title: 'Close completed workflows (CareSchedule #48)',
    description: 'CareNest operational task for care-schedule: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm care-schedule context #48',
      'Capture outcome for care-schedule task 48',
      'Log follow-up owner for care-schedule-48',
    ],
    dependsOn: ['care-schedule-task-047'],
  },
  {
    id: 'care-schedule-task-049',
    title: 'Generate shift handoff summary (CareSchedule #49)',
    description: 'CareNest operational task for care-schedule: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm care-schedule context #49',
      'Capture outcome for care-schedule task 49',
      'Log follow-up owner for care-schedule-49',
    ],
    dependsOn: ['care-schedule-task-048'],
  },
  {
    id: 'care-schedule-task-050',
    title: 'Confirm consent / privacy flags (CareSchedule #50)',
    description: 'CareNest operational task for care-schedule: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm care-schedule context #50',
      'Capture outcome for care-schedule task 50',
      'Log follow-up owner for care-schedule-50',
    ],
    dependsOn: ['care-schedule-task-049'],
  },
  {
    id: 'care-schedule-task-051',
    title: 'Run compliance checklist (CareSchedule #51)',
    description: 'CareNest operational task for care-schedule: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm care-schedule context #51',
      'Capture outcome for care-schedule task 51',
      'Log follow-up owner for care-schedule-51',
    ],
    dependsOn: ['care-schedule-task-050'],
  },
  {
    id: 'care-schedule-task-052',
    title: 'Update risk scores (CareSchedule #52)',
    description: 'CareNest operational task for care-schedule: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm care-schedule context #52',
      'Capture outcome for care-schedule task 52',
      'Log follow-up owner for care-schedule-52',
    ],
    dependsOn: ['care-schedule-task-051'],
  },
  {
    id: 'care-schedule-task-053',
    title: 'Notify on-call clinician (CareSchedule #53)',
    description: 'CareNest operational task for care-schedule: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm care-schedule context #53',
      'Capture outcome for care-schedule task 53',
      'Log follow-up owner for care-schedule-53',
    ],
    dependsOn: ['care-schedule-task-052'],
  },
  {
    id: 'care-schedule-task-054',
    title: 'Archive stale drafts (CareSchedule #54)',
    description: 'CareNest operational task for care-schedule: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm care-schedule context #54',
      'Capture outcome for care-schedule task 54',
      'Log follow-up owner for care-schedule-54',
    ],
    dependsOn: ['care-schedule-task-053'],
  },
  {
    id: 'care-schedule-task-055',
    title: 'Export weekly digest (CareSchedule #55)',
    description: 'CareNest operational task for care-schedule: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm care-schedule context #55',
      'Capture outcome for care-schedule task 55',
      'Log follow-up owner for care-schedule-55',
    ],
    dependsOn: ['care-schedule-task-054'],
  },
  {
    id: 'care-schedule-task-056',
    title: 'Train new caregiver on module (CareSchedule #56)',
    description: 'CareNest operational task for care-schedule: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm care-schedule context #56',
      'Capture outcome for care-schedule task 56',
      'Log follow-up owner for care-schedule-56',
    ],
    dependsOn: ['care-schedule-task-055'],
  },
  {
    id: 'care-schedule-task-057',
    title: 'Verify device integrations (CareSchedule #57)',
    description: 'CareNest operational task for care-schedule: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm care-schedule context #57',
      'Capture outcome for care-schedule task 57',
      'Log follow-up owner for care-schedule-57',
    ],
    dependsOn: ['care-schedule-task-056'],
  },
  {
    id: 'care-schedule-task-058',
    title: 'Spot-check critical priorities (CareSchedule #58)',
    description: 'CareNest operational task for care-schedule: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm care-schedule context #58',
      'Capture outcome for care-schedule task 58',
      'Log follow-up owner for care-schedule-58',
    ],
    dependsOn: ['care-schedule-task-057'],
  },
  {
    id: 'care-schedule-task-059',
    title: 'Align meal / care constraints (CareSchedule #59)',
    description: 'CareNest operational task for care-schedule: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm care-schedule context #59',
      'Capture outcome for care-schedule task 59',
      'Log follow-up owner for care-schedule-59',
    ],
    dependsOn: ['care-schedule-task-058'],
  },
  {
    id: 'care-schedule-task-060',
    title: 'Publish dashboard widgets (CareSchedule #60)',
    description: 'CareNest operational task for care-schedule: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm care-schedule context #60',
      'Capture outcome for care-schedule task 60',
      'Log follow-up owner for care-schedule-60',
    ],
    dependsOn: ['care-schedule-task-059'],
  },
  {
    id: 'care-schedule-task-061',
    title: 'Review overnight notes (CareSchedule #61)',
    description: 'CareNest operational task for care-schedule: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm care-schedule context #61',
      'Capture outcome for care-schedule task 61',
      'Log follow-up owner for care-schedule-61',
    ],
    dependsOn: ['care-schedule-task-060'],
  },
  {
    id: 'care-schedule-task-062',
    title: 'Reconcile open items (CareSchedule #62)',
    description: 'CareNest operational task for care-schedule: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm care-schedule context #62',
      'Capture outcome for care-schedule task 62',
      'Log follow-up owner for care-schedule-62',
    ],
    dependsOn: ['care-schedule-task-061'],
  },
  {
    id: 'care-schedule-task-063',
    title: 'Escalate overdue cases (CareSchedule #63)',
    description: 'CareNest operational task for care-schedule: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm care-schedule context #63',
      'Capture outcome for care-schedule task 63',
      'Log follow-up owner for care-schedule-63',
    ],
    dependsOn: ['care-schedule-task-062'],
  },
  {
    id: 'care-schedule-task-064',
    title: 'Prepare family update (CareSchedule #64)',
    description: 'CareNest operational task for care-schedule: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm care-schedule context #64',
      'Capture outcome for care-schedule task 64',
      'Log follow-up owner for care-schedule-64',
    ],
    dependsOn: ['care-schedule-task-063'],
  },
  {
    id: 'care-schedule-task-065',
    title: 'Audit documentation completeness (CareSchedule #65)',
    description: 'CareNest operational task for care-schedule: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm care-schedule context #65',
      'Capture outcome for care-schedule task 65',
      'Log follow-up owner for care-schedule-65',
    ],
    dependsOn: ['care-schedule-task-064'],
  },
  {
    id: 'care-schedule-task-066',
    title: 'Sync with pharmacy / vendor (CareSchedule #66)',
    description: 'CareNest operational task for care-schedule: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm care-schedule context #66',
      'Capture outcome for care-schedule task 66',
      'Log follow-up owner for care-schedule-66',
    ],
    dependsOn: ['care-schedule-task-065'],
  },
  {
    id: 'care-schedule-task-067',
    title: 'Validate schedule conflicts (CareSchedule #67)',
    description: 'CareNest operational task for care-schedule: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm care-schedule context #67',
      'Capture outcome for care-schedule task 67',
      'Log follow-up owner for care-schedule-67',
    ],
    dependsOn: ['care-schedule-task-066'],
  },
  {
    id: 'care-schedule-task-068',
    title: 'Close completed workflows (CareSchedule #68)',
    description: 'CareNest operational task for care-schedule: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm care-schedule context #68',
      'Capture outcome for care-schedule task 68',
      'Log follow-up owner for care-schedule-68',
    ],
    dependsOn: ['care-schedule-task-067'],
  },
  {
    id: 'care-schedule-task-069',
    title: 'Generate shift handoff summary (CareSchedule #69)',
    description: 'CareNest operational task for care-schedule: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm care-schedule context #69',
      'Capture outcome for care-schedule task 69',
      'Log follow-up owner for care-schedule-69',
    ],
    dependsOn: ['care-schedule-task-068'],
  },
  {
    id: 'care-schedule-task-070',
    title: 'Confirm consent / privacy flags (CareSchedule #70)',
    description: 'CareNest operational task for care-schedule: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm care-schedule context #70',
      'Capture outcome for care-schedule task 70',
      'Log follow-up owner for care-schedule-70',
    ],
    dependsOn: ['care-schedule-task-069'],
  },
  {
    id: 'care-schedule-task-071',
    title: 'Run compliance checklist (CareSchedule #71)',
    description: 'CareNest operational task for care-schedule: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm care-schedule context #71',
      'Capture outcome for care-schedule task 71',
      'Log follow-up owner for care-schedule-71',
    ],
    dependsOn: ['care-schedule-task-070'],
  },
  {
    id: 'care-schedule-task-072',
    title: 'Update risk scores (CareSchedule #72)',
    description: 'CareNest operational task for care-schedule: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm care-schedule context #72',
      'Capture outcome for care-schedule task 72',
      'Log follow-up owner for care-schedule-72',
    ],
    dependsOn: ['care-schedule-task-071'],
  },
  {
    id: 'care-schedule-task-073',
    title: 'Notify on-call clinician (CareSchedule #73)',
    description: 'CareNest operational task for care-schedule: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm care-schedule context #73',
      'Capture outcome for care-schedule task 73',
      'Log follow-up owner for care-schedule-73',
    ],
    dependsOn: ['care-schedule-task-072'],
  },
  {
    id: 'care-schedule-task-074',
    title: 'Archive stale drafts (CareSchedule #74)',
    description: 'CareNest operational task for care-schedule: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm care-schedule context #74',
      'Capture outcome for care-schedule task 74',
      'Log follow-up owner for care-schedule-74',
    ],
    dependsOn: ['care-schedule-task-073'],
  },
  {
    id: 'care-schedule-task-075',
    title: 'Export weekly digest (CareSchedule #75)',
    description: 'CareNest operational task for care-schedule: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm care-schedule context #75',
      'Capture outcome for care-schedule task 75',
      'Log follow-up owner for care-schedule-75',
    ],
    dependsOn: ['care-schedule-task-074'],
  },
  {
    id: 'care-schedule-task-076',
    title: 'Train new caregiver on module (CareSchedule #76)',
    description: 'CareNest operational task for care-schedule: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm care-schedule context #76',
      'Capture outcome for care-schedule task 76',
      'Log follow-up owner for care-schedule-76',
    ],
    dependsOn: ['care-schedule-task-075'],
  },
  {
    id: 'care-schedule-task-077',
    title: 'Verify device integrations (CareSchedule #77)',
    description: 'CareNest operational task for care-schedule: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm care-schedule context #77',
      'Capture outcome for care-schedule task 77',
      'Log follow-up owner for care-schedule-77',
    ],
    dependsOn: ['care-schedule-task-076'],
  },
  {
    id: 'care-schedule-task-078',
    title: 'Spot-check critical priorities (CareSchedule #78)',
    description: 'CareNest operational task for care-schedule: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm care-schedule context #78',
      'Capture outcome for care-schedule task 78',
      'Log follow-up owner for care-schedule-78',
    ],
    dependsOn: ['care-schedule-task-077'],
  },
  {
    id: 'care-schedule-task-079',
    title: 'Align meal / care constraints (CareSchedule #79)',
    description: 'CareNest operational task for care-schedule: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm care-schedule context #79',
      'Capture outcome for care-schedule task 79',
      'Log follow-up owner for care-schedule-79',
    ],
    dependsOn: ['care-schedule-task-078'],
  },
  {
    id: 'care-schedule-task-080',
    title: 'Publish dashboard widgets (CareSchedule #80)',
    description: 'CareNest operational task for care-schedule: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm care-schedule context #80',
      'Capture outcome for care-schedule task 80',
      'Log follow-up owner for care-schedule-80',
    ],
    dependsOn: ['care-schedule-task-079'],
  },
];

export function listOpenCareScheduleTasks(): CareScheduleTask[] {
  return careScheduleTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countCareScheduleTasksByState(): Record<CareScheduleTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of careScheduleTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateCareScheduleWorkload1(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateCareScheduleWorkload2(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateCareScheduleWorkload3(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateCareScheduleWorkload4(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateCareScheduleWorkload5(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateCareScheduleWorkload6(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateCareScheduleWorkload7(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateCareScheduleWorkload8(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateCareScheduleWorkload9(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateCareScheduleWorkload10(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateCareScheduleWorkload11(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateCareScheduleWorkload12(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateCareScheduleWorkload13(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateCareScheduleWorkload14(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateCareScheduleWorkload15(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateCareScheduleWorkload16(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateCareScheduleWorkload17(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateCareScheduleWorkload18(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateCareScheduleWorkload19(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateCareScheduleWorkload20(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateCareScheduleWorkload21(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateCareScheduleWorkload22(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateCareScheduleWorkload23(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateCareScheduleWorkload24(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateCareScheduleWorkload25(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateCareScheduleWorkload26(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateCareScheduleWorkload27(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateCareScheduleWorkload28(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateCareScheduleWorkload29(tasks: CareScheduleTask[] = careScheduleTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
