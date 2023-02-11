/** Operational task catalog for Payments */

export type PaymentsTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface PaymentsTask {
  id: string;
  title: string;
  description: string;
  state: PaymentsTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const paymentsTaskCatalog: PaymentsTask[] = [
  {
    id: 'payments-task-001',
    title: 'Review overnight notes (Payments #1)',
    description: 'CareNest operational task for payments: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm payments context #1',
      'Capture outcome for payments task 1',
      'Log follow-up owner for payments-1',
    ],
    dependsOn: [],
  },
  {
    id: 'payments-task-002',
    title: 'Reconcile open items (Payments #2)',
    description: 'CareNest operational task for payments: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm payments context #2',
      'Capture outcome for payments task 2',
      'Log follow-up owner for payments-2',
    ],
    dependsOn: ['payments-task-001'],
  },
  {
    id: 'payments-task-003',
    title: 'Escalate overdue cases (Payments #3)',
    description: 'CareNest operational task for payments: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm payments context #3',
      'Capture outcome for payments task 3',
      'Log follow-up owner for payments-3',
    ],
    dependsOn: ['payments-task-002'],
  },
  {
    id: 'payments-task-004',
    title: 'Prepare family update (Payments #4)',
    description: 'CareNest operational task for payments: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm payments context #4',
      'Capture outcome for payments task 4',
      'Log follow-up owner for payments-4',
    ],
    dependsOn: ['payments-task-003'],
  },
  {
    id: 'payments-task-005',
    title: 'Audit documentation completeness (Payments #5)',
    description: 'CareNest operational task for payments: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm payments context #5',
      'Capture outcome for payments task 5',
      'Log follow-up owner for payments-5',
    ],
    dependsOn: ['payments-task-004'],
  },
  {
    id: 'payments-task-006',
    title: 'Sync with pharmacy / vendor (Payments #6)',
    description: 'CareNest operational task for payments: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm payments context #6',
      'Capture outcome for payments task 6',
      'Log follow-up owner for payments-6',
    ],
    dependsOn: ['payments-task-005'],
  },
  {
    id: 'payments-task-007',
    title: 'Validate schedule conflicts (Payments #7)',
    description: 'CareNest operational task for payments: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm payments context #7',
      'Capture outcome for payments task 7',
      'Log follow-up owner for payments-7',
    ],
    dependsOn: ['payments-task-006'],
  },
  {
    id: 'payments-task-008',
    title: 'Close completed workflows (Payments #8)',
    description: 'CareNest operational task for payments: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm payments context #8',
      'Capture outcome for payments task 8',
      'Log follow-up owner for payments-8',
    ],
    dependsOn: ['payments-task-007'],
  },
  {
    id: 'payments-task-009',
    title: 'Generate shift handoff summary (Payments #9)',
    description: 'CareNest operational task for payments: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm payments context #9',
      'Capture outcome for payments task 9',
      'Log follow-up owner for payments-9',
    ],
    dependsOn: ['payments-task-008'],
  },
  {
    id: 'payments-task-010',
    title: 'Confirm consent / privacy flags (Payments #10)',
    description: 'CareNest operational task for payments: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm payments context #10',
      'Capture outcome for payments task 10',
      'Log follow-up owner for payments-10',
    ],
    dependsOn: ['payments-task-009'],
  },
  {
    id: 'payments-task-011',
    title: 'Run compliance checklist (Payments #11)',
    description: 'CareNest operational task for payments: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm payments context #11',
      'Capture outcome for payments task 11',
      'Log follow-up owner for payments-11',
    ],
    dependsOn: ['payments-task-010'],
  },
  {
    id: 'payments-task-012',
    title: 'Update risk scores (Payments #12)',
    description: 'CareNest operational task for payments: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm payments context #12',
      'Capture outcome for payments task 12',
      'Log follow-up owner for payments-12',
    ],
    dependsOn: ['payments-task-011'],
  },
  {
    id: 'payments-task-013',
    title: 'Notify on-call clinician (Payments #13)',
    description: 'CareNest operational task for payments: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm payments context #13',
      'Capture outcome for payments task 13',
      'Log follow-up owner for payments-13',
    ],
    dependsOn: ['payments-task-012'],
  },
  {
    id: 'payments-task-014',
    title: 'Archive stale drafts (Payments #14)',
    description: 'CareNest operational task for payments: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm payments context #14',
      'Capture outcome for payments task 14',
      'Log follow-up owner for payments-14',
    ],
    dependsOn: ['payments-task-013'],
  },
  {
    id: 'payments-task-015',
    title: 'Export weekly digest (Payments #15)',
    description: 'CareNest operational task for payments: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm payments context #15',
      'Capture outcome for payments task 15',
      'Log follow-up owner for payments-15',
    ],
    dependsOn: ['payments-task-014'],
  },
  {
    id: 'payments-task-016',
    title: 'Train new caregiver on module (Payments #16)',
    description: 'CareNest operational task for payments: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm payments context #16',
      'Capture outcome for payments task 16',
      'Log follow-up owner for payments-16',
    ],
    dependsOn: ['payments-task-015'],
  },
  {
    id: 'payments-task-017',
    title: 'Verify device integrations (Payments #17)',
    description: 'CareNest operational task for payments: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm payments context #17',
      'Capture outcome for payments task 17',
      'Log follow-up owner for payments-17',
    ],
    dependsOn: ['payments-task-016'],
  },
  {
    id: 'payments-task-018',
    title: 'Spot-check critical priorities (Payments #18)',
    description: 'CareNest operational task for payments: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm payments context #18',
      'Capture outcome for payments task 18',
      'Log follow-up owner for payments-18',
    ],
    dependsOn: ['payments-task-017'],
  },
  {
    id: 'payments-task-019',
    title: 'Align meal / care constraints (Payments #19)',
    description: 'CareNest operational task for payments: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm payments context #19',
      'Capture outcome for payments task 19',
      'Log follow-up owner for payments-19',
    ],
    dependsOn: ['payments-task-018'],
  },
  {
    id: 'payments-task-020',
    title: 'Publish dashboard widgets (Payments #20)',
    description: 'CareNest operational task for payments: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm payments context #20',
      'Capture outcome for payments task 20',
      'Log follow-up owner for payments-20',
    ],
    dependsOn: ['payments-task-019'],
  },
  {
    id: 'payments-task-021',
    title: 'Review overnight notes (Payments #21)',
    description: 'CareNest operational task for payments: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm payments context #21',
      'Capture outcome for payments task 21',
      'Log follow-up owner for payments-21',
    ],
    dependsOn: ['payments-task-020'],
  },
  {
    id: 'payments-task-022',
    title: 'Reconcile open items (Payments #22)',
    description: 'CareNest operational task for payments: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm payments context #22',
      'Capture outcome for payments task 22',
      'Log follow-up owner for payments-22',
    ],
    dependsOn: ['payments-task-021'],
  },
  {
    id: 'payments-task-023',
    title: 'Escalate overdue cases (Payments #23)',
    description: 'CareNest operational task for payments: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm payments context #23',
      'Capture outcome for payments task 23',
      'Log follow-up owner for payments-23',
    ],
    dependsOn: ['payments-task-022'],
  },
  {
    id: 'payments-task-024',
    title: 'Prepare family update (Payments #24)',
    description: 'CareNest operational task for payments: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm payments context #24',
      'Capture outcome for payments task 24',
      'Log follow-up owner for payments-24',
    ],
    dependsOn: ['payments-task-023'],
  },
  {
    id: 'payments-task-025',
    title: 'Audit documentation completeness (Payments #25)',
    description: 'CareNest operational task for payments: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm payments context #25',
      'Capture outcome for payments task 25',
      'Log follow-up owner for payments-25',
    ],
    dependsOn: ['payments-task-024'],
  },
  {
    id: 'payments-task-026',
    title: 'Sync with pharmacy / vendor (Payments #26)',
    description: 'CareNest operational task for payments: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm payments context #26',
      'Capture outcome for payments task 26',
      'Log follow-up owner for payments-26',
    ],
    dependsOn: ['payments-task-025'],
  },
  {
    id: 'payments-task-027',
    title: 'Validate schedule conflicts (Payments #27)',
    description: 'CareNest operational task for payments: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm payments context #27',
      'Capture outcome for payments task 27',
      'Log follow-up owner for payments-27',
    ],
    dependsOn: ['payments-task-026'],
  },
  {
    id: 'payments-task-028',
    title: 'Close completed workflows (Payments #28)',
    description: 'CareNest operational task for payments: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm payments context #28',
      'Capture outcome for payments task 28',
      'Log follow-up owner for payments-28',
    ],
    dependsOn: ['payments-task-027'],
  },
  {
    id: 'payments-task-029',
    title: 'Generate shift handoff summary (Payments #29)',
    description: 'CareNest operational task for payments: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm payments context #29',
      'Capture outcome for payments task 29',
      'Log follow-up owner for payments-29',
    ],
    dependsOn: ['payments-task-028'],
  },
  {
    id: 'payments-task-030',
    title: 'Confirm consent / privacy flags (Payments #30)',
    description: 'CareNest operational task for payments: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm payments context #30',
      'Capture outcome for payments task 30',
      'Log follow-up owner for payments-30',
    ],
    dependsOn: ['payments-task-029'],
  },
  {
    id: 'payments-task-031',
    title: 'Run compliance checklist (Payments #31)',
    description: 'CareNest operational task for payments: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm payments context #31',
      'Capture outcome for payments task 31',
      'Log follow-up owner for payments-31',
    ],
    dependsOn: ['payments-task-030'],
  },
  {
    id: 'payments-task-032',
    title: 'Update risk scores (Payments #32)',
    description: 'CareNest operational task for payments: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm payments context #32',
      'Capture outcome for payments task 32',
      'Log follow-up owner for payments-32',
    ],
    dependsOn: ['payments-task-031'],
  },
  {
    id: 'payments-task-033',
    title: 'Notify on-call clinician (Payments #33)',
    description: 'CareNest operational task for payments: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm payments context #33',
      'Capture outcome for payments task 33',
      'Log follow-up owner for payments-33',
    ],
    dependsOn: ['payments-task-032'],
  },
  {
    id: 'payments-task-034',
    title: 'Archive stale drafts (Payments #34)',
    description: 'CareNest operational task for payments: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm payments context #34',
      'Capture outcome for payments task 34',
      'Log follow-up owner for payments-34',
    ],
    dependsOn: ['payments-task-033'],
  },
  {
    id: 'payments-task-035',
    title: 'Export weekly digest (Payments #35)',
    description: 'CareNest operational task for payments: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm payments context #35',
      'Capture outcome for payments task 35',
      'Log follow-up owner for payments-35',
    ],
    dependsOn: ['payments-task-034'],
  },
  {
    id: 'payments-task-036',
    title: 'Train new caregiver on module (Payments #36)',
    description: 'CareNest operational task for payments: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm payments context #36',
      'Capture outcome for payments task 36',
      'Log follow-up owner for payments-36',
    ],
    dependsOn: ['payments-task-035'],
  },
  {
    id: 'payments-task-037',
    title: 'Verify device integrations (Payments #37)',
    description: 'CareNest operational task for payments: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm payments context #37',
      'Capture outcome for payments task 37',
      'Log follow-up owner for payments-37',
    ],
    dependsOn: ['payments-task-036'],
  },
  {
    id: 'payments-task-038',
    title: 'Spot-check critical priorities (Payments #38)',
    description: 'CareNest operational task for payments: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm payments context #38',
      'Capture outcome for payments task 38',
      'Log follow-up owner for payments-38',
    ],
    dependsOn: ['payments-task-037'],
  },
  {
    id: 'payments-task-039',
    title: 'Align meal / care constraints (Payments #39)',
    description: 'CareNest operational task for payments: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm payments context #39',
      'Capture outcome for payments task 39',
      'Log follow-up owner for payments-39',
    ],
    dependsOn: ['payments-task-038'],
  },
  {
    id: 'payments-task-040',
    title: 'Publish dashboard widgets (Payments #40)',
    description: 'CareNest operational task for payments: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm payments context #40',
      'Capture outcome for payments task 40',
      'Log follow-up owner for payments-40',
    ],
    dependsOn: ['payments-task-039'],
  },
  {
    id: 'payments-task-041',
    title: 'Review overnight notes (Payments #41)',
    description: 'CareNest operational task for payments: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm payments context #41',
      'Capture outcome for payments task 41',
      'Log follow-up owner for payments-41',
    ],
    dependsOn: ['payments-task-040'],
  },
  {
    id: 'payments-task-042',
    title: 'Reconcile open items (Payments #42)',
    description: 'CareNest operational task for payments: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm payments context #42',
      'Capture outcome for payments task 42',
      'Log follow-up owner for payments-42',
    ],
    dependsOn: ['payments-task-041'],
  },
  {
    id: 'payments-task-043',
    title: 'Escalate overdue cases (Payments #43)',
    description: 'CareNest operational task for payments: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm payments context #43',
      'Capture outcome for payments task 43',
      'Log follow-up owner for payments-43',
    ],
    dependsOn: ['payments-task-042'],
  },
  {
    id: 'payments-task-044',
    title: 'Prepare family update (Payments #44)',
    description: 'CareNest operational task for payments: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm payments context #44',
      'Capture outcome for payments task 44',
      'Log follow-up owner for payments-44',
    ],
    dependsOn: ['payments-task-043'],
  },
  {
    id: 'payments-task-045',
    title: 'Audit documentation completeness (Payments #45)',
    description: 'CareNest operational task for payments: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm payments context #45',
      'Capture outcome for payments task 45',
      'Log follow-up owner for payments-45',
    ],
    dependsOn: ['payments-task-044'],
  },
  {
    id: 'payments-task-046',
    title: 'Sync with pharmacy / vendor (Payments #46)',
    description: 'CareNest operational task for payments: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm payments context #46',
      'Capture outcome for payments task 46',
      'Log follow-up owner for payments-46',
    ],
    dependsOn: ['payments-task-045'],
  },
  {
    id: 'payments-task-047',
    title: 'Validate schedule conflicts (Payments #47)',
    description: 'CareNest operational task for payments: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm payments context #47',
      'Capture outcome for payments task 47',
      'Log follow-up owner for payments-47',
    ],
    dependsOn: ['payments-task-046'],
  },
  {
    id: 'payments-task-048',
    title: 'Close completed workflows (Payments #48)',
    description: 'CareNest operational task for payments: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm payments context #48',
      'Capture outcome for payments task 48',
      'Log follow-up owner for payments-48',
    ],
    dependsOn: ['payments-task-047'],
  },
  {
    id: 'payments-task-049',
    title: 'Generate shift handoff summary (Payments #49)',
    description: 'CareNest operational task for payments: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm payments context #49',
      'Capture outcome for payments task 49',
      'Log follow-up owner for payments-49',
    ],
    dependsOn: ['payments-task-048'],
  },
  {
    id: 'payments-task-050',
    title: 'Confirm consent / privacy flags (Payments #50)',
    description: 'CareNest operational task for payments: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm payments context #50',
      'Capture outcome for payments task 50',
      'Log follow-up owner for payments-50',
    ],
    dependsOn: ['payments-task-049'],
  },
  {
    id: 'payments-task-051',
    title: 'Run compliance checklist (Payments #51)',
    description: 'CareNest operational task for payments: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm payments context #51',
      'Capture outcome for payments task 51',
      'Log follow-up owner for payments-51',
    ],
    dependsOn: ['payments-task-050'],
  },
  {
    id: 'payments-task-052',
    title: 'Update risk scores (Payments #52)',
    description: 'CareNest operational task for payments: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm payments context #52',
      'Capture outcome for payments task 52',
      'Log follow-up owner for payments-52',
    ],
    dependsOn: ['payments-task-051'],
  },
  {
    id: 'payments-task-053',
    title: 'Notify on-call clinician (Payments #53)',
    description: 'CareNest operational task for payments: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm payments context #53',
      'Capture outcome for payments task 53',
      'Log follow-up owner for payments-53',
    ],
    dependsOn: ['payments-task-052'],
  },
  {
    id: 'payments-task-054',
    title: 'Archive stale drafts (Payments #54)',
    description: 'CareNest operational task for payments: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm payments context #54',
      'Capture outcome for payments task 54',
      'Log follow-up owner for payments-54',
    ],
    dependsOn: ['payments-task-053'],
  },
  {
    id: 'payments-task-055',
    title: 'Export weekly digest (Payments #55)',
    description: 'CareNest operational task for payments: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm payments context #55',
      'Capture outcome for payments task 55',
      'Log follow-up owner for payments-55',
    ],
    dependsOn: ['payments-task-054'],
  },
  {
    id: 'payments-task-056',
    title: 'Train new caregiver on module (Payments #56)',
    description: 'CareNest operational task for payments: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm payments context #56',
      'Capture outcome for payments task 56',
      'Log follow-up owner for payments-56',
    ],
    dependsOn: ['payments-task-055'],
  },
  {
    id: 'payments-task-057',
    title: 'Verify device integrations (Payments #57)',
    description: 'CareNest operational task for payments: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm payments context #57',
      'Capture outcome for payments task 57',
      'Log follow-up owner for payments-57',
    ],
    dependsOn: ['payments-task-056'],
  },
  {
    id: 'payments-task-058',
    title: 'Spot-check critical priorities (Payments #58)',
    description: 'CareNest operational task for payments: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm payments context #58',
      'Capture outcome for payments task 58',
      'Log follow-up owner for payments-58',
    ],
    dependsOn: ['payments-task-057'],
  },
  {
    id: 'payments-task-059',
    title: 'Align meal / care constraints (Payments #59)',
    description: 'CareNest operational task for payments: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm payments context #59',
      'Capture outcome for payments task 59',
      'Log follow-up owner for payments-59',
    ],
    dependsOn: ['payments-task-058'],
  },
  {
    id: 'payments-task-060',
    title: 'Publish dashboard widgets (Payments #60)',
    description: 'CareNest operational task for payments: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm payments context #60',
      'Capture outcome for payments task 60',
      'Log follow-up owner for payments-60',
    ],
    dependsOn: ['payments-task-059'],
  },
  {
    id: 'payments-task-061',
    title: 'Review overnight notes (Payments #61)',
    description: 'CareNest operational task for payments: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm payments context #61',
      'Capture outcome for payments task 61',
      'Log follow-up owner for payments-61',
    ],
    dependsOn: ['payments-task-060'],
  },
  {
    id: 'payments-task-062',
    title: 'Reconcile open items (Payments #62)',
    description: 'CareNest operational task for payments: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm payments context #62',
      'Capture outcome for payments task 62',
      'Log follow-up owner for payments-62',
    ],
    dependsOn: ['payments-task-061'],
  },
  {
    id: 'payments-task-063',
    title: 'Escalate overdue cases (Payments #63)',
    description: 'CareNest operational task for payments: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm payments context #63',
      'Capture outcome for payments task 63',
      'Log follow-up owner for payments-63',
    ],
    dependsOn: ['payments-task-062'],
  },
  {
    id: 'payments-task-064',
    title: 'Prepare family update (Payments #64)',
    description: 'CareNest operational task for payments: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm payments context #64',
      'Capture outcome for payments task 64',
      'Log follow-up owner for payments-64',
    ],
    dependsOn: ['payments-task-063'],
  },
  {
    id: 'payments-task-065',
    title: 'Audit documentation completeness (Payments #65)',
    description: 'CareNest operational task for payments: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm payments context #65',
      'Capture outcome for payments task 65',
      'Log follow-up owner for payments-65',
    ],
    dependsOn: ['payments-task-064'],
  },
  {
    id: 'payments-task-066',
    title: 'Sync with pharmacy / vendor (Payments #66)',
    description: 'CareNest operational task for payments: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm payments context #66',
      'Capture outcome for payments task 66',
      'Log follow-up owner for payments-66',
    ],
    dependsOn: ['payments-task-065'],
  },
  {
    id: 'payments-task-067',
    title: 'Validate schedule conflicts (Payments #67)',
    description: 'CareNest operational task for payments: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm payments context #67',
      'Capture outcome for payments task 67',
      'Log follow-up owner for payments-67',
    ],
    dependsOn: ['payments-task-066'],
  },
  {
    id: 'payments-task-068',
    title: 'Close completed workflows (Payments #68)',
    description: 'CareNest operational task for payments: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm payments context #68',
      'Capture outcome for payments task 68',
      'Log follow-up owner for payments-68',
    ],
    dependsOn: ['payments-task-067'],
  },
  {
    id: 'payments-task-069',
    title: 'Generate shift handoff summary (Payments #69)',
    description: 'CareNest operational task for payments: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm payments context #69',
      'Capture outcome for payments task 69',
      'Log follow-up owner for payments-69',
    ],
    dependsOn: ['payments-task-068'],
  },
  {
    id: 'payments-task-070',
    title: 'Confirm consent / privacy flags (Payments #70)',
    description: 'CareNest operational task for payments: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm payments context #70',
      'Capture outcome for payments task 70',
      'Log follow-up owner for payments-70',
    ],
    dependsOn: ['payments-task-069'],
  },
  {
    id: 'payments-task-071',
    title: 'Run compliance checklist (Payments #71)',
    description: 'CareNest operational task for payments: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm payments context #71',
      'Capture outcome for payments task 71',
      'Log follow-up owner for payments-71',
    ],
    dependsOn: ['payments-task-070'],
  },
  {
    id: 'payments-task-072',
    title: 'Update risk scores (Payments #72)',
    description: 'CareNest operational task for payments: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm payments context #72',
      'Capture outcome for payments task 72',
      'Log follow-up owner for payments-72',
    ],
    dependsOn: ['payments-task-071'],
  },
  {
    id: 'payments-task-073',
    title: 'Notify on-call clinician (Payments #73)',
    description: 'CareNest operational task for payments: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm payments context #73',
      'Capture outcome for payments task 73',
      'Log follow-up owner for payments-73',
    ],
    dependsOn: ['payments-task-072'],
  },
  {
    id: 'payments-task-074',
    title: 'Archive stale drafts (Payments #74)',
    description: 'CareNest operational task for payments: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm payments context #74',
      'Capture outcome for payments task 74',
      'Log follow-up owner for payments-74',
    ],
    dependsOn: ['payments-task-073'],
  },
  {
    id: 'payments-task-075',
    title: 'Export weekly digest (Payments #75)',
    description: 'CareNest operational task for payments: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm payments context #75',
      'Capture outcome for payments task 75',
      'Log follow-up owner for payments-75',
    ],
    dependsOn: ['payments-task-074'],
  },
  {
    id: 'payments-task-076',
    title: 'Train new caregiver on module (Payments #76)',
    description: 'CareNest operational task for payments: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm payments context #76',
      'Capture outcome for payments task 76',
      'Log follow-up owner for payments-76',
    ],
    dependsOn: ['payments-task-075'],
  },
  {
    id: 'payments-task-077',
    title: 'Verify device integrations (Payments #77)',
    description: 'CareNest operational task for payments: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm payments context #77',
      'Capture outcome for payments task 77',
      'Log follow-up owner for payments-77',
    ],
    dependsOn: ['payments-task-076'],
  },
  {
    id: 'payments-task-078',
    title: 'Spot-check critical priorities (Payments #78)',
    description: 'CareNest operational task for payments: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm payments context #78',
      'Capture outcome for payments task 78',
      'Log follow-up owner for payments-78',
    ],
    dependsOn: ['payments-task-077'],
  },
  {
    id: 'payments-task-079',
    title: 'Align meal / care constraints (Payments #79)',
    description: 'CareNest operational task for payments: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm payments context #79',
      'Capture outcome for payments task 79',
      'Log follow-up owner for payments-79',
    ],
    dependsOn: ['payments-task-078'],
  },
  {
    id: 'payments-task-080',
    title: 'Publish dashboard widgets (Payments #80)',
    description: 'CareNest operational task for payments: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm payments context #80',
      'Capture outcome for payments task 80',
      'Log follow-up owner for payments-80',
    ],
    dependsOn: ['payments-task-079'],
  },
];

export function listOpenPaymentsTasks(): PaymentsTask[] {
  return paymentsTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countPaymentsTasksByState(): Record<PaymentsTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of paymentsTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimatePaymentsWorkload1(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimatePaymentsWorkload2(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimatePaymentsWorkload3(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimatePaymentsWorkload4(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimatePaymentsWorkload5(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimatePaymentsWorkload6(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimatePaymentsWorkload7(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimatePaymentsWorkload8(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimatePaymentsWorkload9(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimatePaymentsWorkload10(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimatePaymentsWorkload11(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimatePaymentsWorkload12(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimatePaymentsWorkload13(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimatePaymentsWorkload14(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimatePaymentsWorkload15(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimatePaymentsWorkload16(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimatePaymentsWorkload17(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimatePaymentsWorkload18(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimatePaymentsWorkload19(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimatePaymentsWorkload20(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimatePaymentsWorkload21(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimatePaymentsWorkload22(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimatePaymentsWorkload23(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimatePaymentsWorkload24(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimatePaymentsWorkload25(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimatePaymentsWorkload26(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimatePaymentsWorkload27(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimatePaymentsWorkload28(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimatePaymentsWorkload29(tasks: PaymentsTask[] = paymentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
