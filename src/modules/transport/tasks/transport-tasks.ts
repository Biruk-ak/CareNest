/** Operational task catalog for Transport */

export type TransportTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface TransportTask {
  id: string;
  title: string;
  description: string;
  state: TransportTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const transportTaskCatalog: TransportTask[] = [
  {
    id: 'transport-task-001',
    title: 'Review overnight notes (Transport #1)',
    description: 'CareNest operational task for transport: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm transport context #1',
      'Capture outcome for transport task 1',
      'Log follow-up owner for transport-1',
    ],
    dependsOn: [],
  },
  {
    id: 'transport-task-002',
    title: 'Reconcile open items (Transport #2)',
    description: 'CareNest operational task for transport: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm transport context #2',
      'Capture outcome for transport task 2',
      'Log follow-up owner for transport-2',
    ],
    dependsOn: ['transport-task-001'],
  },
  {
    id: 'transport-task-003',
    title: 'Escalate overdue cases (Transport #3)',
    description: 'CareNest operational task for transport: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm transport context #3',
      'Capture outcome for transport task 3',
      'Log follow-up owner for transport-3',
    ],
    dependsOn: ['transport-task-002'],
  },
  {
    id: 'transport-task-004',
    title: 'Prepare family update (Transport #4)',
    description: 'CareNest operational task for transport: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm transport context #4',
      'Capture outcome for transport task 4',
      'Log follow-up owner for transport-4',
    ],
    dependsOn: ['transport-task-003'],
  },
  {
    id: 'transport-task-005',
    title: 'Audit documentation completeness (Transport #5)',
    description: 'CareNest operational task for transport: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm transport context #5',
      'Capture outcome for transport task 5',
      'Log follow-up owner for transport-5',
    ],
    dependsOn: ['transport-task-004'],
  },
  {
    id: 'transport-task-006',
    title: 'Sync with pharmacy / vendor (Transport #6)',
    description: 'CareNest operational task for transport: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm transport context #6',
      'Capture outcome for transport task 6',
      'Log follow-up owner for transport-6',
    ],
    dependsOn: ['transport-task-005'],
  },
  {
    id: 'transport-task-007',
    title: 'Validate schedule conflicts (Transport #7)',
    description: 'CareNest operational task for transport: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm transport context #7',
      'Capture outcome for transport task 7',
      'Log follow-up owner for transport-7',
    ],
    dependsOn: ['transport-task-006'],
  },
  {
    id: 'transport-task-008',
    title: 'Close completed workflows (Transport #8)',
    description: 'CareNest operational task for transport: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm transport context #8',
      'Capture outcome for transport task 8',
      'Log follow-up owner for transport-8',
    ],
    dependsOn: ['transport-task-007'],
  },
  {
    id: 'transport-task-009',
    title: 'Generate shift handoff summary (Transport #9)',
    description: 'CareNest operational task for transport: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm transport context #9',
      'Capture outcome for transport task 9',
      'Log follow-up owner for transport-9',
    ],
    dependsOn: ['transport-task-008'],
  },
  {
    id: 'transport-task-010',
    title: 'Confirm consent / privacy flags (Transport #10)',
    description: 'CareNest operational task for transport: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm transport context #10',
      'Capture outcome for transport task 10',
      'Log follow-up owner for transport-10',
    ],
    dependsOn: ['transport-task-009'],
  },
  {
    id: 'transport-task-011',
    title: 'Run compliance checklist (Transport #11)',
    description: 'CareNest operational task for transport: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm transport context #11',
      'Capture outcome for transport task 11',
      'Log follow-up owner for transport-11',
    ],
    dependsOn: ['transport-task-010'],
  },
  {
    id: 'transport-task-012',
    title: 'Update risk scores (Transport #12)',
    description: 'CareNest operational task for transport: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm transport context #12',
      'Capture outcome for transport task 12',
      'Log follow-up owner for transport-12',
    ],
    dependsOn: ['transport-task-011'],
  },
  {
    id: 'transport-task-013',
    title: 'Notify on-call clinician (Transport #13)',
    description: 'CareNest operational task for transport: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm transport context #13',
      'Capture outcome for transport task 13',
      'Log follow-up owner for transport-13',
    ],
    dependsOn: ['transport-task-012'],
  },
  {
    id: 'transport-task-014',
    title: 'Archive stale drafts (Transport #14)',
    description: 'CareNest operational task for transport: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm transport context #14',
      'Capture outcome for transport task 14',
      'Log follow-up owner for transport-14',
    ],
    dependsOn: ['transport-task-013'],
  },
  {
    id: 'transport-task-015',
    title: 'Export weekly digest (Transport #15)',
    description: 'CareNest operational task for transport: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm transport context #15',
      'Capture outcome for transport task 15',
      'Log follow-up owner for transport-15',
    ],
    dependsOn: ['transport-task-014'],
  },
  {
    id: 'transport-task-016',
    title: 'Train new caregiver on module (Transport #16)',
    description: 'CareNest operational task for transport: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm transport context #16',
      'Capture outcome for transport task 16',
      'Log follow-up owner for transport-16',
    ],
    dependsOn: ['transport-task-015'],
  },
  {
    id: 'transport-task-017',
    title: 'Verify device integrations (Transport #17)',
    description: 'CareNest operational task for transport: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm transport context #17',
      'Capture outcome for transport task 17',
      'Log follow-up owner for transport-17',
    ],
    dependsOn: ['transport-task-016'],
  },
  {
    id: 'transport-task-018',
    title: 'Spot-check critical priorities (Transport #18)',
    description: 'CareNest operational task for transport: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm transport context #18',
      'Capture outcome for transport task 18',
      'Log follow-up owner for transport-18',
    ],
    dependsOn: ['transport-task-017'],
  },
  {
    id: 'transport-task-019',
    title: 'Align meal / care constraints (Transport #19)',
    description: 'CareNest operational task for transport: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm transport context #19',
      'Capture outcome for transport task 19',
      'Log follow-up owner for transport-19',
    ],
    dependsOn: ['transport-task-018'],
  },
  {
    id: 'transport-task-020',
    title: 'Publish dashboard widgets (Transport #20)',
    description: 'CareNest operational task for transport: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm transport context #20',
      'Capture outcome for transport task 20',
      'Log follow-up owner for transport-20',
    ],
    dependsOn: ['transport-task-019'],
  },
  {
    id: 'transport-task-021',
    title: 'Review overnight notes (Transport #21)',
    description: 'CareNest operational task for transport: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm transport context #21',
      'Capture outcome for transport task 21',
      'Log follow-up owner for transport-21',
    ],
    dependsOn: ['transport-task-020'],
  },
  {
    id: 'transport-task-022',
    title: 'Reconcile open items (Transport #22)',
    description: 'CareNest operational task for transport: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm transport context #22',
      'Capture outcome for transport task 22',
      'Log follow-up owner for transport-22',
    ],
    dependsOn: ['transport-task-021'],
  },
  {
    id: 'transport-task-023',
    title: 'Escalate overdue cases (Transport #23)',
    description: 'CareNest operational task for transport: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm transport context #23',
      'Capture outcome for transport task 23',
      'Log follow-up owner for transport-23',
    ],
    dependsOn: ['transport-task-022'],
  },
  {
    id: 'transport-task-024',
    title: 'Prepare family update (Transport #24)',
    description: 'CareNest operational task for transport: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm transport context #24',
      'Capture outcome for transport task 24',
      'Log follow-up owner for transport-24',
    ],
    dependsOn: ['transport-task-023'],
  },
  {
    id: 'transport-task-025',
    title: 'Audit documentation completeness (Transport #25)',
    description: 'CareNest operational task for transport: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm transport context #25',
      'Capture outcome for transport task 25',
      'Log follow-up owner for transport-25',
    ],
    dependsOn: ['transport-task-024'],
  },
  {
    id: 'transport-task-026',
    title: 'Sync with pharmacy / vendor (Transport #26)',
    description: 'CareNest operational task for transport: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm transport context #26',
      'Capture outcome for transport task 26',
      'Log follow-up owner for transport-26',
    ],
    dependsOn: ['transport-task-025'],
  },
  {
    id: 'transport-task-027',
    title: 'Validate schedule conflicts (Transport #27)',
    description: 'CareNest operational task for transport: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm transport context #27',
      'Capture outcome for transport task 27',
      'Log follow-up owner for transport-27',
    ],
    dependsOn: ['transport-task-026'],
  },
  {
    id: 'transport-task-028',
    title: 'Close completed workflows (Transport #28)',
    description: 'CareNest operational task for transport: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm transport context #28',
      'Capture outcome for transport task 28',
      'Log follow-up owner for transport-28',
    ],
    dependsOn: ['transport-task-027'],
  },
  {
    id: 'transport-task-029',
    title: 'Generate shift handoff summary (Transport #29)',
    description: 'CareNest operational task for transport: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm transport context #29',
      'Capture outcome for transport task 29',
      'Log follow-up owner for transport-29',
    ],
    dependsOn: ['transport-task-028'],
  },
  {
    id: 'transport-task-030',
    title: 'Confirm consent / privacy flags (Transport #30)',
    description: 'CareNest operational task for transport: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm transport context #30',
      'Capture outcome for transport task 30',
      'Log follow-up owner for transport-30',
    ],
    dependsOn: ['transport-task-029'],
  },
  {
    id: 'transport-task-031',
    title: 'Run compliance checklist (Transport #31)',
    description: 'CareNest operational task for transport: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm transport context #31',
      'Capture outcome for transport task 31',
      'Log follow-up owner for transport-31',
    ],
    dependsOn: ['transport-task-030'],
  },
  {
    id: 'transport-task-032',
    title: 'Update risk scores (Transport #32)',
    description: 'CareNest operational task for transport: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm transport context #32',
      'Capture outcome for transport task 32',
      'Log follow-up owner for transport-32',
    ],
    dependsOn: ['transport-task-031'],
  },
  {
    id: 'transport-task-033',
    title: 'Notify on-call clinician (Transport #33)',
    description: 'CareNest operational task for transport: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm transport context #33',
      'Capture outcome for transport task 33',
      'Log follow-up owner for transport-33',
    ],
    dependsOn: ['transport-task-032'],
  },
  {
    id: 'transport-task-034',
    title: 'Archive stale drafts (Transport #34)',
    description: 'CareNest operational task for transport: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm transport context #34',
      'Capture outcome for transport task 34',
      'Log follow-up owner for transport-34',
    ],
    dependsOn: ['transport-task-033'],
  },
  {
    id: 'transport-task-035',
    title: 'Export weekly digest (Transport #35)',
    description: 'CareNest operational task for transport: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm transport context #35',
      'Capture outcome for transport task 35',
      'Log follow-up owner for transport-35',
    ],
    dependsOn: ['transport-task-034'],
  },
  {
    id: 'transport-task-036',
    title: 'Train new caregiver on module (Transport #36)',
    description: 'CareNest operational task for transport: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm transport context #36',
      'Capture outcome for transport task 36',
      'Log follow-up owner for transport-36',
    ],
    dependsOn: ['transport-task-035'],
  },
  {
    id: 'transport-task-037',
    title: 'Verify device integrations (Transport #37)',
    description: 'CareNest operational task for transport: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm transport context #37',
      'Capture outcome for transport task 37',
      'Log follow-up owner for transport-37',
    ],
    dependsOn: ['transport-task-036'],
  },
  {
    id: 'transport-task-038',
    title: 'Spot-check critical priorities (Transport #38)',
    description: 'CareNest operational task for transport: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm transport context #38',
      'Capture outcome for transport task 38',
      'Log follow-up owner for transport-38',
    ],
    dependsOn: ['transport-task-037'],
  },
  {
    id: 'transport-task-039',
    title: 'Align meal / care constraints (Transport #39)',
    description: 'CareNest operational task for transport: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm transport context #39',
      'Capture outcome for transport task 39',
      'Log follow-up owner for transport-39',
    ],
    dependsOn: ['transport-task-038'],
  },
  {
    id: 'transport-task-040',
    title: 'Publish dashboard widgets (Transport #40)',
    description: 'CareNest operational task for transport: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm transport context #40',
      'Capture outcome for transport task 40',
      'Log follow-up owner for transport-40',
    ],
    dependsOn: ['transport-task-039'],
  },
  {
    id: 'transport-task-041',
    title: 'Review overnight notes (Transport #41)',
    description: 'CareNest operational task for transport: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm transport context #41',
      'Capture outcome for transport task 41',
      'Log follow-up owner for transport-41',
    ],
    dependsOn: ['transport-task-040'],
  },
  {
    id: 'transport-task-042',
    title: 'Reconcile open items (Transport #42)',
    description: 'CareNest operational task for transport: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm transport context #42',
      'Capture outcome for transport task 42',
      'Log follow-up owner for transport-42',
    ],
    dependsOn: ['transport-task-041'],
  },
  {
    id: 'transport-task-043',
    title: 'Escalate overdue cases (Transport #43)',
    description: 'CareNest operational task for transport: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm transport context #43',
      'Capture outcome for transport task 43',
      'Log follow-up owner for transport-43',
    ],
    dependsOn: ['transport-task-042'],
  },
  {
    id: 'transport-task-044',
    title: 'Prepare family update (Transport #44)',
    description: 'CareNest operational task for transport: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm transport context #44',
      'Capture outcome for transport task 44',
      'Log follow-up owner for transport-44',
    ],
    dependsOn: ['transport-task-043'],
  },
  {
    id: 'transport-task-045',
    title: 'Audit documentation completeness (Transport #45)',
    description: 'CareNest operational task for transport: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm transport context #45',
      'Capture outcome for transport task 45',
      'Log follow-up owner for transport-45',
    ],
    dependsOn: ['transport-task-044'],
  },
  {
    id: 'transport-task-046',
    title: 'Sync with pharmacy / vendor (Transport #46)',
    description: 'CareNest operational task for transport: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm transport context #46',
      'Capture outcome for transport task 46',
      'Log follow-up owner for transport-46',
    ],
    dependsOn: ['transport-task-045'],
  },
  {
    id: 'transport-task-047',
    title: 'Validate schedule conflicts (Transport #47)',
    description: 'CareNest operational task for transport: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm transport context #47',
      'Capture outcome for transport task 47',
      'Log follow-up owner for transport-47',
    ],
    dependsOn: ['transport-task-046'],
  },
  {
    id: 'transport-task-048',
    title: 'Close completed workflows (Transport #48)',
    description: 'CareNest operational task for transport: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm transport context #48',
      'Capture outcome for transport task 48',
      'Log follow-up owner for transport-48',
    ],
    dependsOn: ['transport-task-047'],
  },
  {
    id: 'transport-task-049',
    title: 'Generate shift handoff summary (Transport #49)',
    description: 'CareNest operational task for transport: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm transport context #49',
      'Capture outcome for transport task 49',
      'Log follow-up owner for transport-49',
    ],
    dependsOn: ['transport-task-048'],
  },
  {
    id: 'transport-task-050',
    title: 'Confirm consent / privacy flags (Transport #50)',
    description: 'CareNest operational task for transport: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm transport context #50',
      'Capture outcome for transport task 50',
      'Log follow-up owner for transport-50',
    ],
    dependsOn: ['transport-task-049'],
  },
  {
    id: 'transport-task-051',
    title: 'Run compliance checklist (Transport #51)',
    description: 'CareNest operational task for transport: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm transport context #51',
      'Capture outcome for transport task 51',
      'Log follow-up owner for transport-51',
    ],
    dependsOn: ['transport-task-050'],
  },
  {
    id: 'transport-task-052',
    title: 'Update risk scores (Transport #52)',
    description: 'CareNest operational task for transport: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm transport context #52',
      'Capture outcome for transport task 52',
      'Log follow-up owner for transport-52',
    ],
    dependsOn: ['transport-task-051'],
  },
  {
    id: 'transport-task-053',
    title: 'Notify on-call clinician (Transport #53)',
    description: 'CareNest operational task for transport: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm transport context #53',
      'Capture outcome for transport task 53',
      'Log follow-up owner for transport-53',
    ],
    dependsOn: ['transport-task-052'],
  },
  {
    id: 'transport-task-054',
    title: 'Archive stale drafts (Transport #54)',
    description: 'CareNest operational task for transport: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm transport context #54',
      'Capture outcome for transport task 54',
      'Log follow-up owner for transport-54',
    ],
    dependsOn: ['transport-task-053'],
  },
  {
    id: 'transport-task-055',
    title: 'Export weekly digest (Transport #55)',
    description: 'CareNest operational task for transport: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm transport context #55',
      'Capture outcome for transport task 55',
      'Log follow-up owner for transport-55',
    ],
    dependsOn: ['transport-task-054'],
  },
  {
    id: 'transport-task-056',
    title: 'Train new caregiver on module (Transport #56)',
    description: 'CareNest operational task for transport: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm transport context #56',
      'Capture outcome for transport task 56',
      'Log follow-up owner for transport-56',
    ],
    dependsOn: ['transport-task-055'],
  },
  {
    id: 'transport-task-057',
    title: 'Verify device integrations (Transport #57)',
    description: 'CareNest operational task for transport: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm transport context #57',
      'Capture outcome for transport task 57',
      'Log follow-up owner for transport-57',
    ],
    dependsOn: ['transport-task-056'],
  },
  {
    id: 'transport-task-058',
    title: 'Spot-check critical priorities (Transport #58)',
    description: 'CareNest operational task for transport: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm transport context #58',
      'Capture outcome for transport task 58',
      'Log follow-up owner for transport-58',
    ],
    dependsOn: ['transport-task-057'],
  },
  {
    id: 'transport-task-059',
    title: 'Align meal / care constraints (Transport #59)',
    description: 'CareNest operational task for transport: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm transport context #59',
      'Capture outcome for transport task 59',
      'Log follow-up owner for transport-59',
    ],
    dependsOn: ['transport-task-058'],
  },
  {
    id: 'transport-task-060',
    title: 'Publish dashboard widgets (Transport #60)',
    description: 'CareNest operational task for transport: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm transport context #60',
      'Capture outcome for transport task 60',
      'Log follow-up owner for transport-60',
    ],
    dependsOn: ['transport-task-059'],
  },
  {
    id: 'transport-task-061',
    title: 'Review overnight notes (Transport #61)',
    description: 'CareNest operational task for transport: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm transport context #61',
      'Capture outcome for transport task 61',
      'Log follow-up owner for transport-61',
    ],
    dependsOn: ['transport-task-060'],
  },
  {
    id: 'transport-task-062',
    title: 'Reconcile open items (Transport #62)',
    description: 'CareNest operational task for transport: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm transport context #62',
      'Capture outcome for transport task 62',
      'Log follow-up owner for transport-62',
    ],
    dependsOn: ['transport-task-061'],
  },
  {
    id: 'transport-task-063',
    title: 'Escalate overdue cases (Transport #63)',
    description: 'CareNest operational task for transport: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm transport context #63',
      'Capture outcome for transport task 63',
      'Log follow-up owner for transport-63',
    ],
    dependsOn: ['transport-task-062'],
  },
  {
    id: 'transport-task-064',
    title: 'Prepare family update (Transport #64)',
    description: 'CareNest operational task for transport: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm transport context #64',
      'Capture outcome for transport task 64',
      'Log follow-up owner for transport-64',
    ],
    dependsOn: ['transport-task-063'],
  },
  {
    id: 'transport-task-065',
    title: 'Audit documentation completeness (Transport #65)',
    description: 'CareNest operational task for transport: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm transport context #65',
      'Capture outcome for transport task 65',
      'Log follow-up owner for transport-65',
    ],
    dependsOn: ['transport-task-064'],
  },
  {
    id: 'transport-task-066',
    title: 'Sync with pharmacy / vendor (Transport #66)',
    description: 'CareNest operational task for transport: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm transport context #66',
      'Capture outcome for transport task 66',
      'Log follow-up owner for transport-66',
    ],
    dependsOn: ['transport-task-065'],
  },
  {
    id: 'transport-task-067',
    title: 'Validate schedule conflicts (Transport #67)',
    description: 'CareNest operational task for transport: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm transport context #67',
      'Capture outcome for transport task 67',
      'Log follow-up owner for transport-67',
    ],
    dependsOn: ['transport-task-066'],
  },
  {
    id: 'transport-task-068',
    title: 'Close completed workflows (Transport #68)',
    description: 'CareNest operational task for transport: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm transport context #68',
      'Capture outcome for transport task 68',
      'Log follow-up owner for transport-68',
    ],
    dependsOn: ['transport-task-067'],
  },
  {
    id: 'transport-task-069',
    title: 'Generate shift handoff summary (Transport #69)',
    description: 'CareNest operational task for transport: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm transport context #69',
      'Capture outcome for transport task 69',
      'Log follow-up owner for transport-69',
    ],
    dependsOn: ['transport-task-068'],
  },
  {
    id: 'transport-task-070',
    title: 'Confirm consent / privacy flags (Transport #70)',
    description: 'CareNest operational task for transport: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm transport context #70',
      'Capture outcome for transport task 70',
      'Log follow-up owner for transport-70',
    ],
    dependsOn: ['transport-task-069'],
  },
  {
    id: 'transport-task-071',
    title: 'Run compliance checklist (Transport #71)',
    description: 'CareNest operational task for transport: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm transport context #71',
      'Capture outcome for transport task 71',
      'Log follow-up owner for transport-71',
    ],
    dependsOn: ['transport-task-070'],
  },
  {
    id: 'transport-task-072',
    title: 'Update risk scores (Transport #72)',
    description: 'CareNest operational task for transport: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm transport context #72',
      'Capture outcome for transport task 72',
      'Log follow-up owner for transport-72',
    ],
    dependsOn: ['transport-task-071'],
  },
  {
    id: 'transport-task-073',
    title: 'Notify on-call clinician (Transport #73)',
    description: 'CareNest operational task for transport: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm transport context #73',
      'Capture outcome for transport task 73',
      'Log follow-up owner for transport-73',
    ],
    dependsOn: ['transport-task-072'],
  },
  {
    id: 'transport-task-074',
    title: 'Archive stale drafts (Transport #74)',
    description: 'CareNest operational task for transport: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm transport context #74',
      'Capture outcome for transport task 74',
      'Log follow-up owner for transport-74',
    ],
    dependsOn: ['transport-task-073'],
  },
  {
    id: 'transport-task-075',
    title: 'Export weekly digest (Transport #75)',
    description: 'CareNest operational task for transport: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm transport context #75',
      'Capture outcome for transport task 75',
      'Log follow-up owner for transport-75',
    ],
    dependsOn: ['transport-task-074'],
  },
  {
    id: 'transport-task-076',
    title: 'Train new caregiver on module (Transport #76)',
    description: 'CareNest operational task for transport: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm transport context #76',
      'Capture outcome for transport task 76',
      'Log follow-up owner for transport-76',
    ],
    dependsOn: ['transport-task-075'],
  },
  {
    id: 'transport-task-077',
    title: 'Verify device integrations (Transport #77)',
    description: 'CareNest operational task for transport: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm transport context #77',
      'Capture outcome for transport task 77',
      'Log follow-up owner for transport-77',
    ],
    dependsOn: ['transport-task-076'],
  },
  {
    id: 'transport-task-078',
    title: 'Spot-check critical priorities (Transport #78)',
    description: 'CareNest operational task for transport: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm transport context #78',
      'Capture outcome for transport task 78',
      'Log follow-up owner for transport-78',
    ],
    dependsOn: ['transport-task-077'],
  },
  {
    id: 'transport-task-079',
    title: 'Align meal / care constraints (Transport #79)',
    description: 'CareNest operational task for transport: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm transport context #79',
      'Capture outcome for transport task 79',
      'Log follow-up owner for transport-79',
    ],
    dependsOn: ['transport-task-078'],
  },
  {
    id: 'transport-task-080',
    title: 'Publish dashboard widgets (Transport #80)',
    description: 'CareNest operational task for transport: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm transport context #80',
      'Capture outcome for transport task 80',
      'Log follow-up owner for transport-80',
    ],
    dependsOn: ['transport-task-079'],
  },
];

export function listOpenTransportTasks(): TransportTask[] {
  return transportTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countTransportTasksByState(): Record<TransportTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of transportTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateTransportWorkload1(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateTransportWorkload2(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateTransportWorkload3(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateTransportWorkload4(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateTransportWorkload5(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateTransportWorkload6(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateTransportWorkload7(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateTransportWorkload8(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateTransportWorkload9(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateTransportWorkload10(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateTransportWorkload11(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateTransportWorkload12(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateTransportWorkload13(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateTransportWorkload14(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateTransportWorkload15(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateTransportWorkload16(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateTransportWorkload17(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateTransportWorkload18(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateTransportWorkload19(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateTransportWorkload20(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateTransportWorkload21(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateTransportWorkload22(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateTransportWorkload23(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateTransportWorkload24(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateTransportWorkload25(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateTransportWorkload26(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateTransportWorkload27(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateTransportWorkload28(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateTransportWorkload29(tasks: TransportTask[] = transportTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
