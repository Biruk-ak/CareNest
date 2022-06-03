/** Operational task catalog for HealthLogs */

export type HealthLogsTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface HealthLogsTask {
  id: string;
  title: string;
  description: string;
  state: HealthLogsTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const healthLogsTaskCatalog: HealthLogsTask[] = [
  {
    id: 'health-logs-task-001',
    title: 'Review overnight notes (HealthLogs #1)',
    description: 'CareNest operational task for health-logs: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm health-logs context #1',
      'Capture outcome for health-logs task 1',
      'Log follow-up owner for health-logs-1',
    ],
    dependsOn: [],
  },
  {
    id: 'health-logs-task-002',
    title: 'Reconcile open items (HealthLogs #2)',
    description: 'CareNest operational task for health-logs: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm health-logs context #2',
      'Capture outcome for health-logs task 2',
      'Log follow-up owner for health-logs-2',
    ],
    dependsOn: ['health-logs-task-001'],
  },
  {
    id: 'health-logs-task-003',
    title: 'Escalate overdue cases (HealthLogs #3)',
    description: 'CareNest operational task for health-logs: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm health-logs context #3',
      'Capture outcome for health-logs task 3',
      'Log follow-up owner for health-logs-3',
    ],
    dependsOn: ['health-logs-task-002'],
  },
  {
    id: 'health-logs-task-004',
    title: 'Prepare family update (HealthLogs #4)',
    description: 'CareNest operational task for health-logs: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm health-logs context #4',
      'Capture outcome for health-logs task 4',
      'Log follow-up owner for health-logs-4',
    ],
    dependsOn: ['health-logs-task-003'],
  },
  {
    id: 'health-logs-task-005',
    title: 'Audit documentation completeness (HealthLogs #5)',
    description: 'CareNest operational task for health-logs: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm health-logs context #5',
      'Capture outcome for health-logs task 5',
      'Log follow-up owner for health-logs-5',
    ],
    dependsOn: ['health-logs-task-004'],
  },
  {
    id: 'health-logs-task-006',
    title: 'Sync with pharmacy / vendor (HealthLogs #6)',
    description: 'CareNest operational task for health-logs: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm health-logs context #6',
      'Capture outcome for health-logs task 6',
      'Log follow-up owner for health-logs-6',
    ],
    dependsOn: ['health-logs-task-005'],
  },
  {
    id: 'health-logs-task-007',
    title: 'Validate schedule conflicts (HealthLogs #7)',
    description: 'CareNest operational task for health-logs: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm health-logs context #7',
      'Capture outcome for health-logs task 7',
      'Log follow-up owner for health-logs-7',
    ],
    dependsOn: ['health-logs-task-006'],
  },
  {
    id: 'health-logs-task-008',
    title: 'Close completed workflows (HealthLogs #8)',
    description: 'CareNest operational task for health-logs: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm health-logs context #8',
      'Capture outcome for health-logs task 8',
      'Log follow-up owner for health-logs-8',
    ],
    dependsOn: ['health-logs-task-007'],
  },
  {
    id: 'health-logs-task-009',
    title: 'Generate shift handoff summary (HealthLogs #9)',
    description: 'CareNest operational task for health-logs: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm health-logs context #9',
      'Capture outcome for health-logs task 9',
      'Log follow-up owner for health-logs-9',
    ],
    dependsOn: ['health-logs-task-008'],
  },
  {
    id: 'health-logs-task-010',
    title: 'Confirm consent / privacy flags (HealthLogs #10)',
    description: 'CareNest operational task for health-logs: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm health-logs context #10',
      'Capture outcome for health-logs task 10',
      'Log follow-up owner for health-logs-10',
    ],
    dependsOn: ['health-logs-task-009'],
  },
  {
    id: 'health-logs-task-011',
    title: 'Run compliance checklist (HealthLogs #11)',
    description: 'CareNest operational task for health-logs: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm health-logs context #11',
      'Capture outcome for health-logs task 11',
      'Log follow-up owner for health-logs-11',
    ],
    dependsOn: ['health-logs-task-010'],
  },
  {
    id: 'health-logs-task-012',
    title: 'Update risk scores (HealthLogs #12)',
    description: 'CareNest operational task for health-logs: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm health-logs context #12',
      'Capture outcome for health-logs task 12',
      'Log follow-up owner for health-logs-12',
    ],
    dependsOn: ['health-logs-task-011'],
  },
  {
    id: 'health-logs-task-013',
    title: 'Notify on-call clinician (HealthLogs #13)',
    description: 'CareNest operational task for health-logs: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm health-logs context #13',
      'Capture outcome for health-logs task 13',
      'Log follow-up owner for health-logs-13',
    ],
    dependsOn: ['health-logs-task-012'],
  },
  {
    id: 'health-logs-task-014',
    title: 'Archive stale drafts (HealthLogs #14)',
    description: 'CareNest operational task for health-logs: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm health-logs context #14',
      'Capture outcome for health-logs task 14',
      'Log follow-up owner for health-logs-14',
    ],
    dependsOn: ['health-logs-task-013'],
  },
  {
    id: 'health-logs-task-015',
    title: 'Export weekly digest (HealthLogs #15)',
    description: 'CareNest operational task for health-logs: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm health-logs context #15',
      'Capture outcome for health-logs task 15',
      'Log follow-up owner for health-logs-15',
    ],
    dependsOn: ['health-logs-task-014'],
  },
  {
    id: 'health-logs-task-016',
    title: 'Train new caregiver on module (HealthLogs #16)',
    description: 'CareNest operational task for health-logs: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm health-logs context #16',
      'Capture outcome for health-logs task 16',
      'Log follow-up owner for health-logs-16',
    ],
    dependsOn: ['health-logs-task-015'],
  },
  {
    id: 'health-logs-task-017',
    title: 'Verify device integrations (HealthLogs #17)',
    description: 'CareNest operational task for health-logs: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm health-logs context #17',
      'Capture outcome for health-logs task 17',
      'Log follow-up owner for health-logs-17',
    ],
    dependsOn: ['health-logs-task-016'],
  },
  {
    id: 'health-logs-task-018',
    title: 'Spot-check critical priorities (HealthLogs #18)',
    description: 'CareNest operational task for health-logs: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm health-logs context #18',
      'Capture outcome for health-logs task 18',
      'Log follow-up owner for health-logs-18',
    ],
    dependsOn: ['health-logs-task-017'],
  },
  {
    id: 'health-logs-task-019',
    title: 'Align meal / care constraints (HealthLogs #19)',
    description: 'CareNest operational task for health-logs: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm health-logs context #19',
      'Capture outcome for health-logs task 19',
      'Log follow-up owner for health-logs-19',
    ],
    dependsOn: ['health-logs-task-018'],
  },
  {
    id: 'health-logs-task-020',
    title: 'Publish dashboard widgets (HealthLogs #20)',
    description: 'CareNest operational task for health-logs: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm health-logs context #20',
      'Capture outcome for health-logs task 20',
      'Log follow-up owner for health-logs-20',
    ],
    dependsOn: ['health-logs-task-019'],
  },
  {
    id: 'health-logs-task-021',
    title: 'Review overnight notes (HealthLogs #21)',
    description: 'CareNest operational task for health-logs: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm health-logs context #21',
      'Capture outcome for health-logs task 21',
      'Log follow-up owner for health-logs-21',
    ],
    dependsOn: ['health-logs-task-020'],
  },
  {
    id: 'health-logs-task-022',
    title: 'Reconcile open items (HealthLogs #22)',
    description: 'CareNest operational task for health-logs: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm health-logs context #22',
      'Capture outcome for health-logs task 22',
      'Log follow-up owner for health-logs-22',
    ],
    dependsOn: ['health-logs-task-021'],
  },
  {
    id: 'health-logs-task-023',
    title: 'Escalate overdue cases (HealthLogs #23)',
    description: 'CareNest operational task for health-logs: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm health-logs context #23',
      'Capture outcome for health-logs task 23',
      'Log follow-up owner for health-logs-23',
    ],
    dependsOn: ['health-logs-task-022'],
  },
  {
    id: 'health-logs-task-024',
    title: 'Prepare family update (HealthLogs #24)',
    description: 'CareNest operational task for health-logs: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm health-logs context #24',
      'Capture outcome for health-logs task 24',
      'Log follow-up owner for health-logs-24',
    ],
    dependsOn: ['health-logs-task-023'],
  },
  {
    id: 'health-logs-task-025',
    title: 'Audit documentation completeness (HealthLogs #25)',
    description: 'CareNest operational task for health-logs: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm health-logs context #25',
      'Capture outcome for health-logs task 25',
      'Log follow-up owner for health-logs-25',
    ],
    dependsOn: ['health-logs-task-024'],
  },
  {
    id: 'health-logs-task-026',
    title: 'Sync with pharmacy / vendor (HealthLogs #26)',
    description: 'CareNest operational task for health-logs: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm health-logs context #26',
      'Capture outcome for health-logs task 26',
      'Log follow-up owner for health-logs-26',
    ],
    dependsOn: ['health-logs-task-025'],
  },
  {
    id: 'health-logs-task-027',
    title: 'Validate schedule conflicts (HealthLogs #27)',
    description: 'CareNest operational task for health-logs: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm health-logs context #27',
      'Capture outcome for health-logs task 27',
      'Log follow-up owner for health-logs-27',
    ],
    dependsOn: ['health-logs-task-026'],
  },
  {
    id: 'health-logs-task-028',
    title: 'Close completed workflows (HealthLogs #28)',
    description: 'CareNest operational task for health-logs: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm health-logs context #28',
      'Capture outcome for health-logs task 28',
      'Log follow-up owner for health-logs-28',
    ],
    dependsOn: ['health-logs-task-027'],
  },
  {
    id: 'health-logs-task-029',
    title: 'Generate shift handoff summary (HealthLogs #29)',
    description: 'CareNest operational task for health-logs: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm health-logs context #29',
      'Capture outcome for health-logs task 29',
      'Log follow-up owner for health-logs-29',
    ],
    dependsOn: ['health-logs-task-028'],
  },
  {
    id: 'health-logs-task-030',
    title: 'Confirm consent / privacy flags (HealthLogs #30)',
    description: 'CareNest operational task for health-logs: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm health-logs context #30',
      'Capture outcome for health-logs task 30',
      'Log follow-up owner for health-logs-30',
    ],
    dependsOn: ['health-logs-task-029'],
  },
  {
    id: 'health-logs-task-031',
    title: 'Run compliance checklist (HealthLogs #31)',
    description: 'CareNest operational task for health-logs: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm health-logs context #31',
      'Capture outcome for health-logs task 31',
      'Log follow-up owner for health-logs-31',
    ],
    dependsOn: ['health-logs-task-030'],
  },
  {
    id: 'health-logs-task-032',
    title: 'Update risk scores (HealthLogs #32)',
    description: 'CareNest operational task for health-logs: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm health-logs context #32',
      'Capture outcome for health-logs task 32',
      'Log follow-up owner for health-logs-32',
    ],
    dependsOn: ['health-logs-task-031'],
  },
  {
    id: 'health-logs-task-033',
    title: 'Notify on-call clinician (HealthLogs #33)',
    description: 'CareNest operational task for health-logs: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm health-logs context #33',
      'Capture outcome for health-logs task 33',
      'Log follow-up owner for health-logs-33',
    ],
    dependsOn: ['health-logs-task-032'],
  },
  {
    id: 'health-logs-task-034',
    title: 'Archive stale drafts (HealthLogs #34)',
    description: 'CareNest operational task for health-logs: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm health-logs context #34',
      'Capture outcome for health-logs task 34',
      'Log follow-up owner for health-logs-34',
    ],
    dependsOn: ['health-logs-task-033'],
  },
  {
    id: 'health-logs-task-035',
    title: 'Export weekly digest (HealthLogs #35)',
    description: 'CareNest operational task for health-logs: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm health-logs context #35',
      'Capture outcome for health-logs task 35',
      'Log follow-up owner for health-logs-35',
    ],
    dependsOn: ['health-logs-task-034'],
  },
  {
    id: 'health-logs-task-036',
    title: 'Train new caregiver on module (HealthLogs #36)',
    description: 'CareNest operational task for health-logs: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm health-logs context #36',
      'Capture outcome for health-logs task 36',
      'Log follow-up owner for health-logs-36',
    ],
    dependsOn: ['health-logs-task-035'],
  },
  {
    id: 'health-logs-task-037',
    title: 'Verify device integrations (HealthLogs #37)',
    description: 'CareNest operational task for health-logs: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm health-logs context #37',
      'Capture outcome for health-logs task 37',
      'Log follow-up owner for health-logs-37',
    ],
    dependsOn: ['health-logs-task-036'],
  },
  {
    id: 'health-logs-task-038',
    title: 'Spot-check critical priorities (HealthLogs #38)',
    description: 'CareNest operational task for health-logs: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm health-logs context #38',
      'Capture outcome for health-logs task 38',
      'Log follow-up owner for health-logs-38',
    ],
    dependsOn: ['health-logs-task-037'],
  },
  {
    id: 'health-logs-task-039',
    title: 'Align meal / care constraints (HealthLogs #39)',
    description: 'CareNest operational task for health-logs: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm health-logs context #39',
      'Capture outcome for health-logs task 39',
      'Log follow-up owner for health-logs-39',
    ],
    dependsOn: ['health-logs-task-038'],
  },
  {
    id: 'health-logs-task-040',
    title: 'Publish dashboard widgets (HealthLogs #40)',
    description: 'CareNest operational task for health-logs: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm health-logs context #40',
      'Capture outcome for health-logs task 40',
      'Log follow-up owner for health-logs-40',
    ],
    dependsOn: ['health-logs-task-039'],
  },
  {
    id: 'health-logs-task-041',
    title: 'Review overnight notes (HealthLogs #41)',
    description: 'CareNest operational task for health-logs: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm health-logs context #41',
      'Capture outcome for health-logs task 41',
      'Log follow-up owner for health-logs-41',
    ],
    dependsOn: ['health-logs-task-040'],
  },
  {
    id: 'health-logs-task-042',
    title: 'Reconcile open items (HealthLogs #42)',
    description: 'CareNest operational task for health-logs: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm health-logs context #42',
      'Capture outcome for health-logs task 42',
      'Log follow-up owner for health-logs-42',
    ],
    dependsOn: ['health-logs-task-041'],
  },
  {
    id: 'health-logs-task-043',
    title: 'Escalate overdue cases (HealthLogs #43)',
    description: 'CareNest operational task for health-logs: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm health-logs context #43',
      'Capture outcome for health-logs task 43',
      'Log follow-up owner for health-logs-43',
    ],
    dependsOn: ['health-logs-task-042'],
  },
  {
    id: 'health-logs-task-044',
    title: 'Prepare family update (HealthLogs #44)',
    description: 'CareNest operational task for health-logs: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm health-logs context #44',
      'Capture outcome for health-logs task 44',
      'Log follow-up owner for health-logs-44',
    ],
    dependsOn: ['health-logs-task-043'],
  },
  {
    id: 'health-logs-task-045',
    title: 'Audit documentation completeness (HealthLogs #45)',
    description: 'CareNest operational task for health-logs: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm health-logs context #45',
      'Capture outcome for health-logs task 45',
      'Log follow-up owner for health-logs-45',
    ],
    dependsOn: ['health-logs-task-044'],
  },
  {
    id: 'health-logs-task-046',
    title: 'Sync with pharmacy / vendor (HealthLogs #46)',
    description: 'CareNest operational task for health-logs: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm health-logs context #46',
      'Capture outcome for health-logs task 46',
      'Log follow-up owner for health-logs-46',
    ],
    dependsOn: ['health-logs-task-045'],
  },
  {
    id: 'health-logs-task-047',
    title: 'Validate schedule conflicts (HealthLogs #47)',
    description: 'CareNest operational task for health-logs: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm health-logs context #47',
      'Capture outcome for health-logs task 47',
      'Log follow-up owner for health-logs-47',
    ],
    dependsOn: ['health-logs-task-046'],
  },
  {
    id: 'health-logs-task-048',
    title: 'Close completed workflows (HealthLogs #48)',
    description: 'CareNest operational task for health-logs: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm health-logs context #48',
      'Capture outcome for health-logs task 48',
      'Log follow-up owner for health-logs-48',
    ],
    dependsOn: ['health-logs-task-047'],
  },
  {
    id: 'health-logs-task-049',
    title: 'Generate shift handoff summary (HealthLogs #49)',
    description: 'CareNest operational task for health-logs: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm health-logs context #49',
      'Capture outcome for health-logs task 49',
      'Log follow-up owner for health-logs-49',
    ],
    dependsOn: ['health-logs-task-048'],
  },
  {
    id: 'health-logs-task-050',
    title: 'Confirm consent / privacy flags (HealthLogs #50)',
    description: 'CareNest operational task for health-logs: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm health-logs context #50',
      'Capture outcome for health-logs task 50',
      'Log follow-up owner for health-logs-50',
    ],
    dependsOn: ['health-logs-task-049'],
  },
  {
    id: 'health-logs-task-051',
    title: 'Run compliance checklist (HealthLogs #51)',
    description: 'CareNest operational task for health-logs: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm health-logs context #51',
      'Capture outcome for health-logs task 51',
      'Log follow-up owner for health-logs-51',
    ],
    dependsOn: ['health-logs-task-050'],
  },
  {
    id: 'health-logs-task-052',
    title: 'Update risk scores (HealthLogs #52)',
    description: 'CareNest operational task for health-logs: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm health-logs context #52',
      'Capture outcome for health-logs task 52',
      'Log follow-up owner for health-logs-52',
    ],
    dependsOn: ['health-logs-task-051'],
  },
  {
    id: 'health-logs-task-053',
    title: 'Notify on-call clinician (HealthLogs #53)',
    description: 'CareNest operational task for health-logs: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm health-logs context #53',
      'Capture outcome for health-logs task 53',
      'Log follow-up owner for health-logs-53',
    ],
    dependsOn: ['health-logs-task-052'],
  },
  {
    id: 'health-logs-task-054',
    title: 'Archive stale drafts (HealthLogs #54)',
    description: 'CareNest operational task for health-logs: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm health-logs context #54',
      'Capture outcome for health-logs task 54',
      'Log follow-up owner for health-logs-54',
    ],
    dependsOn: ['health-logs-task-053'],
  },
  {
    id: 'health-logs-task-055',
    title: 'Export weekly digest (HealthLogs #55)',
    description: 'CareNest operational task for health-logs: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm health-logs context #55',
      'Capture outcome for health-logs task 55',
      'Log follow-up owner for health-logs-55',
    ],
    dependsOn: ['health-logs-task-054'],
  },
  {
    id: 'health-logs-task-056',
    title: 'Train new caregiver on module (HealthLogs #56)',
    description: 'CareNest operational task for health-logs: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm health-logs context #56',
      'Capture outcome for health-logs task 56',
      'Log follow-up owner for health-logs-56',
    ],
    dependsOn: ['health-logs-task-055'],
  },
  {
    id: 'health-logs-task-057',
    title: 'Verify device integrations (HealthLogs #57)',
    description: 'CareNest operational task for health-logs: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm health-logs context #57',
      'Capture outcome for health-logs task 57',
      'Log follow-up owner for health-logs-57',
    ],
    dependsOn: ['health-logs-task-056'],
  },
  {
    id: 'health-logs-task-058',
    title: 'Spot-check critical priorities (HealthLogs #58)',
    description: 'CareNest operational task for health-logs: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm health-logs context #58',
      'Capture outcome for health-logs task 58',
      'Log follow-up owner for health-logs-58',
    ],
    dependsOn: ['health-logs-task-057'],
  },
  {
    id: 'health-logs-task-059',
    title: 'Align meal / care constraints (HealthLogs #59)',
    description: 'CareNest operational task for health-logs: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm health-logs context #59',
      'Capture outcome for health-logs task 59',
      'Log follow-up owner for health-logs-59',
    ],
    dependsOn: ['health-logs-task-058'],
  },
  {
    id: 'health-logs-task-060',
    title: 'Publish dashboard widgets (HealthLogs #60)',
    description: 'CareNest operational task for health-logs: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm health-logs context #60',
      'Capture outcome for health-logs task 60',
      'Log follow-up owner for health-logs-60',
    ],
    dependsOn: ['health-logs-task-059'],
  },
  {
    id: 'health-logs-task-061',
    title: 'Review overnight notes (HealthLogs #61)',
    description: 'CareNest operational task for health-logs: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm health-logs context #61',
      'Capture outcome for health-logs task 61',
      'Log follow-up owner for health-logs-61',
    ],
    dependsOn: ['health-logs-task-060'],
  },
  {
    id: 'health-logs-task-062',
    title: 'Reconcile open items (HealthLogs #62)',
    description: 'CareNest operational task for health-logs: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm health-logs context #62',
      'Capture outcome for health-logs task 62',
      'Log follow-up owner for health-logs-62',
    ],
    dependsOn: ['health-logs-task-061'],
  },
  {
    id: 'health-logs-task-063',
    title: 'Escalate overdue cases (HealthLogs #63)',
    description: 'CareNest operational task for health-logs: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm health-logs context #63',
      'Capture outcome for health-logs task 63',
      'Log follow-up owner for health-logs-63',
    ],
    dependsOn: ['health-logs-task-062'],
  },
  {
    id: 'health-logs-task-064',
    title: 'Prepare family update (HealthLogs #64)',
    description: 'CareNest operational task for health-logs: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm health-logs context #64',
      'Capture outcome for health-logs task 64',
      'Log follow-up owner for health-logs-64',
    ],
    dependsOn: ['health-logs-task-063'],
  },
  {
    id: 'health-logs-task-065',
    title: 'Audit documentation completeness (HealthLogs #65)',
    description: 'CareNest operational task for health-logs: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm health-logs context #65',
      'Capture outcome for health-logs task 65',
      'Log follow-up owner for health-logs-65',
    ],
    dependsOn: ['health-logs-task-064'],
  },
  {
    id: 'health-logs-task-066',
    title: 'Sync with pharmacy / vendor (HealthLogs #66)',
    description: 'CareNest operational task for health-logs: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm health-logs context #66',
      'Capture outcome for health-logs task 66',
      'Log follow-up owner for health-logs-66',
    ],
    dependsOn: ['health-logs-task-065'],
  },
  {
    id: 'health-logs-task-067',
    title: 'Validate schedule conflicts (HealthLogs #67)',
    description: 'CareNest operational task for health-logs: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm health-logs context #67',
      'Capture outcome for health-logs task 67',
      'Log follow-up owner for health-logs-67',
    ],
    dependsOn: ['health-logs-task-066'],
  },
  {
    id: 'health-logs-task-068',
    title: 'Close completed workflows (HealthLogs #68)',
    description: 'CareNest operational task for health-logs: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm health-logs context #68',
      'Capture outcome for health-logs task 68',
      'Log follow-up owner for health-logs-68',
    ],
    dependsOn: ['health-logs-task-067'],
  },
  {
    id: 'health-logs-task-069',
    title: 'Generate shift handoff summary (HealthLogs #69)',
    description: 'CareNest operational task for health-logs: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm health-logs context #69',
      'Capture outcome for health-logs task 69',
      'Log follow-up owner for health-logs-69',
    ],
    dependsOn: ['health-logs-task-068'],
  },
  {
    id: 'health-logs-task-070',
    title: 'Confirm consent / privacy flags (HealthLogs #70)',
    description: 'CareNest operational task for health-logs: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm health-logs context #70',
      'Capture outcome for health-logs task 70',
      'Log follow-up owner for health-logs-70',
    ],
    dependsOn: ['health-logs-task-069'],
  },
  {
    id: 'health-logs-task-071',
    title: 'Run compliance checklist (HealthLogs #71)',
    description: 'CareNest operational task for health-logs: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm health-logs context #71',
      'Capture outcome for health-logs task 71',
      'Log follow-up owner for health-logs-71',
    ],
    dependsOn: ['health-logs-task-070'],
  },
  {
    id: 'health-logs-task-072',
    title: 'Update risk scores (HealthLogs #72)',
    description: 'CareNest operational task for health-logs: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm health-logs context #72',
      'Capture outcome for health-logs task 72',
      'Log follow-up owner for health-logs-72',
    ],
    dependsOn: ['health-logs-task-071'],
  },
  {
    id: 'health-logs-task-073',
    title: 'Notify on-call clinician (HealthLogs #73)',
    description: 'CareNest operational task for health-logs: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm health-logs context #73',
      'Capture outcome for health-logs task 73',
      'Log follow-up owner for health-logs-73',
    ],
    dependsOn: ['health-logs-task-072'],
  },
  {
    id: 'health-logs-task-074',
    title: 'Archive stale drafts (HealthLogs #74)',
    description: 'CareNest operational task for health-logs: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm health-logs context #74',
      'Capture outcome for health-logs task 74',
      'Log follow-up owner for health-logs-74',
    ],
    dependsOn: ['health-logs-task-073'],
  },
  {
    id: 'health-logs-task-075',
    title: 'Export weekly digest (HealthLogs #75)',
    description: 'CareNest operational task for health-logs: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm health-logs context #75',
      'Capture outcome for health-logs task 75',
      'Log follow-up owner for health-logs-75',
    ],
    dependsOn: ['health-logs-task-074'],
  },
  {
    id: 'health-logs-task-076',
    title: 'Train new caregiver on module (HealthLogs #76)',
    description: 'CareNest operational task for health-logs: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm health-logs context #76',
      'Capture outcome for health-logs task 76',
      'Log follow-up owner for health-logs-76',
    ],
    dependsOn: ['health-logs-task-075'],
  },
  {
    id: 'health-logs-task-077',
    title: 'Verify device integrations (HealthLogs #77)',
    description: 'CareNest operational task for health-logs: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm health-logs context #77',
      'Capture outcome for health-logs task 77',
      'Log follow-up owner for health-logs-77',
    ],
    dependsOn: ['health-logs-task-076'],
  },
  {
    id: 'health-logs-task-078',
    title: 'Spot-check critical priorities (HealthLogs #78)',
    description: 'CareNest operational task for health-logs: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm health-logs context #78',
      'Capture outcome for health-logs task 78',
      'Log follow-up owner for health-logs-78',
    ],
    dependsOn: ['health-logs-task-077'],
  },
  {
    id: 'health-logs-task-079',
    title: 'Align meal / care constraints (HealthLogs #79)',
    description: 'CareNest operational task for health-logs: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm health-logs context #79',
      'Capture outcome for health-logs task 79',
      'Log follow-up owner for health-logs-79',
    ],
    dependsOn: ['health-logs-task-078'],
  },
  {
    id: 'health-logs-task-080',
    title: 'Publish dashboard widgets (HealthLogs #80)',
    description: 'CareNest operational task for health-logs: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm health-logs context #80',
      'Capture outcome for health-logs task 80',
      'Log follow-up owner for health-logs-80',
    ],
    dependsOn: ['health-logs-task-079'],
  },
];

export function listOpenHealthLogsTasks(): HealthLogsTask[] {
  return healthLogsTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countHealthLogsTasksByState(): Record<HealthLogsTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of healthLogsTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateHealthLogsWorkload1(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateHealthLogsWorkload2(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateHealthLogsWorkload3(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateHealthLogsWorkload4(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateHealthLogsWorkload5(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateHealthLogsWorkload6(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateHealthLogsWorkload7(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateHealthLogsWorkload8(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateHealthLogsWorkload9(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateHealthLogsWorkload10(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateHealthLogsWorkload11(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateHealthLogsWorkload12(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateHealthLogsWorkload13(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateHealthLogsWorkload14(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateHealthLogsWorkload15(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateHealthLogsWorkload16(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateHealthLogsWorkload17(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateHealthLogsWorkload18(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateHealthLogsWorkload19(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateHealthLogsWorkload20(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateHealthLogsWorkload21(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateHealthLogsWorkload22(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateHealthLogsWorkload23(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateHealthLogsWorkload24(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateHealthLogsWorkload25(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateHealthLogsWorkload26(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateHealthLogsWorkload27(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateHealthLogsWorkload28(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateHealthLogsWorkload29(tasks: HealthLogsTask[] = healthLogsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
