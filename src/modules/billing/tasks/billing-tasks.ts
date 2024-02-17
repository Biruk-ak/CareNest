/** Operational task catalog for Billing */

export type BillingTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface BillingTask {
  id: string;
  title: string;
  description: string;
  state: BillingTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const billingTaskCatalog: BillingTask[] = [
  {
    id: 'billing-task-001',
    title: 'Review overnight notes (Billing #1)',
    description: 'CareNest operational task for billing: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm billing context #1',
      'Capture outcome for billing task 1',
      'Log follow-up owner for billing-1',
    ],
    dependsOn: [],
  },
  {
    id: 'billing-task-002',
    title: 'Reconcile open items (Billing #2)',
    description: 'CareNest operational task for billing: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm billing context #2',
      'Capture outcome for billing task 2',
      'Log follow-up owner for billing-2',
    ],
    dependsOn: ['billing-task-001'],
  },
  {
    id: 'billing-task-003',
    title: 'Escalate overdue cases (Billing #3)',
    description: 'CareNest operational task for billing: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm billing context #3',
      'Capture outcome for billing task 3',
      'Log follow-up owner for billing-3',
    ],
    dependsOn: ['billing-task-002'],
  },
  {
    id: 'billing-task-004',
    title: 'Prepare family update (Billing #4)',
    description: 'CareNest operational task for billing: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm billing context #4',
      'Capture outcome for billing task 4',
      'Log follow-up owner for billing-4',
    ],
    dependsOn: ['billing-task-003'],
  },
  {
    id: 'billing-task-005',
    title: 'Audit documentation completeness (Billing #5)',
    description: 'CareNest operational task for billing: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm billing context #5',
      'Capture outcome for billing task 5',
      'Log follow-up owner for billing-5',
    ],
    dependsOn: ['billing-task-004'],
  },
  {
    id: 'billing-task-006',
    title: 'Sync with pharmacy / vendor (Billing #6)',
    description: 'CareNest operational task for billing: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm billing context #6',
      'Capture outcome for billing task 6',
      'Log follow-up owner for billing-6',
    ],
    dependsOn: ['billing-task-005'],
  },
  {
    id: 'billing-task-007',
    title: 'Validate schedule conflicts (Billing #7)',
    description: 'CareNest operational task for billing: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm billing context #7',
      'Capture outcome for billing task 7',
      'Log follow-up owner for billing-7',
    ],
    dependsOn: ['billing-task-006'],
  },
  {
    id: 'billing-task-008',
    title: 'Close completed workflows (Billing #8)',
    description: 'CareNest operational task for billing: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm billing context #8',
      'Capture outcome for billing task 8',
      'Log follow-up owner for billing-8',
    ],
    dependsOn: ['billing-task-007'],
  },
  {
    id: 'billing-task-009',
    title: 'Generate shift handoff summary (Billing #9)',
    description: 'CareNest operational task for billing: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm billing context #9',
      'Capture outcome for billing task 9',
      'Log follow-up owner for billing-9',
    ],
    dependsOn: ['billing-task-008'],
  },
  {
    id: 'billing-task-010',
    title: 'Confirm consent / privacy flags (Billing #10)',
    description: 'CareNest operational task for billing: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm billing context #10',
      'Capture outcome for billing task 10',
      'Log follow-up owner for billing-10',
    ],
    dependsOn: ['billing-task-009'],
  },
  {
    id: 'billing-task-011',
    title: 'Run compliance checklist (Billing #11)',
    description: 'CareNest operational task for billing: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm billing context #11',
      'Capture outcome for billing task 11',
      'Log follow-up owner for billing-11',
    ],
    dependsOn: ['billing-task-010'],
  },
  {
    id: 'billing-task-012',
    title: 'Update risk scores (Billing #12)',
    description: 'CareNest operational task for billing: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm billing context #12',
      'Capture outcome for billing task 12',
      'Log follow-up owner for billing-12',
    ],
    dependsOn: ['billing-task-011'],
  },
  {
    id: 'billing-task-013',
    title: 'Notify on-call clinician (Billing #13)',
    description: 'CareNest operational task for billing: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm billing context #13',
      'Capture outcome for billing task 13',
      'Log follow-up owner for billing-13',
    ],
    dependsOn: ['billing-task-012'],
  },
  {
    id: 'billing-task-014',
    title: 'Archive stale drafts (Billing #14)',
    description: 'CareNest operational task for billing: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm billing context #14',
      'Capture outcome for billing task 14',
      'Log follow-up owner for billing-14',
    ],
    dependsOn: ['billing-task-013'],
  },
  {
    id: 'billing-task-015',
    title: 'Export weekly digest (Billing #15)',
    description: 'CareNest operational task for billing: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm billing context #15',
      'Capture outcome for billing task 15',
      'Log follow-up owner for billing-15',
    ],
    dependsOn: ['billing-task-014'],
  },
  {
    id: 'billing-task-016',
    title: 'Train new caregiver on module (Billing #16)',
    description: 'CareNest operational task for billing: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm billing context #16',
      'Capture outcome for billing task 16',
      'Log follow-up owner for billing-16',
    ],
    dependsOn: ['billing-task-015'],
  },
  {
    id: 'billing-task-017',
    title: 'Verify device integrations (Billing #17)',
    description: 'CareNest operational task for billing: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm billing context #17',
      'Capture outcome for billing task 17',
      'Log follow-up owner for billing-17',
    ],
    dependsOn: ['billing-task-016'],
  },
  {
    id: 'billing-task-018',
    title: 'Spot-check critical priorities (Billing #18)',
    description: 'CareNest operational task for billing: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm billing context #18',
      'Capture outcome for billing task 18',
      'Log follow-up owner for billing-18',
    ],
    dependsOn: ['billing-task-017'],
  },
  {
    id: 'billing-task-019',
    title: 'Align meal / care constraints (Billing #19)',
    description: 'CareNest operational task for billing: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm billing context #19',
      'Capture outcome for billing task 19',
      'Log follow-up owner for billing-19',
    ],
    dependsOn: ['billing-task-018'],
  },
  {
    id: 'billing-task-020',
    title: 'Publish dashboard widgets (Billing #20)',
    description: 'CareNest operational task for billing: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm billing context #20',
      'Capture outcome for billing task 20',
      'Log follow-up owner for billing-20',
    ],
    dependsOn: ['billing-task-019'],
  },
  {
    id: 'billing-task-021',
    title: 'Review overnight notes (Billing #21)',
    description: 'CareNest operational task for billing: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm billing context #21',
      'Capture outcome for billing task 21',
      'Log follow-up owner for billing-21',
    ],
    dependsOn: ['billing-task-020'],
  },
  {
    id: 'billing-task-022',
    title: 'Reconcile open items (Billing #22)',
    description: 'CareNest operational task for billing: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm billing context #22',
      'Capture outcome for billing task 22',
      'Log follow-up owner for billing-22',
    ],
    dependsOn: ['billing-task-021'],
  },
  {
    id: 'billing-task-023',
    title: 'Escalate overdue cases (Billing #23)',
    description: 'CareNest operational task for billing: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm billing context #23',
      'Capture outcome for billing task 23',
      'Log follow-up owner for billing-23',
    ],
    dependsOn: ['billing-task-022'],
  },
  {
    id: 'billing-task-024',
    title: 'Prepare family update (Billing #24)',
    description: 'CareNest operational task for billing: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm billing context #24',
      'Capture outcome for billing task 24',
      'Log follow-up owner for billing-24',
    ],
    dependsOn: ['billing-task-023'],
  },
  {
    id: 'billing-task-025',
    title: 'Audit documentation completeness (Billing #25)',
    description: 'CareNest operational task for billing: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm billing context #25',
      'Capture outcome for billing task 25',
      'Log follow-up owner for billing-25',
    ],
    dependsOn: ['billing-task-024'],
  },
  {
    id: 'billing-task-026',
    title: 'Sync with pharmacy / vendor (Billing #26)',
    description: 'CareNest operational task for billing: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm billing context #26',
      'Capture outcome for billing task 26',
      'Log follow-up owner for billing-26',
    ],
    dependsOn: ['billing-task-025'],
  },
  {
    id: 'billing-task-027',
    title: 'Validate schedule conflicts (Billing #27)',
    description: 'CareNest operational task for billing: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm billing context #27',
      'Capture outcome for billing task 27',
      'Log follow-up owner for billing-27',
    ],
    dependsOn: ['billing-task-026'],
  },
  {
    id: 'billing-task-028',
    title: 'Close completed workflows (Billing #28)',
    description: 'CareNest operational task for billing: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm billing context #28',
      'Capture outcome for billing task 28',
      'Log follow-up owner for billing-28',
    ],
    dependsOn: ['billing-task-027'],
  },
  {
    id: 'billing-task-029',
    title: 'Generate shift handoff summary (Billing #29)',
    description: 'CareNest operational task for billing: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm billing context #29',
      'Capture outcome for billing task 29',
      'Log follow-up owner for billing-29',
    ],
    dependsOn: ['billing-task-028'],
  },
  {
    id: 'billing-task-030',
    title: 'Confirm consent / privacy flags (Billing #30)',
    description: 'CareNest operational task for billing: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm billing context #30',
      'Capture outcome for billing task 30',
      'Log follow-up owner for billing-30',
    ],
    dependsOn: ['billing-task-029'],
  },
  {
    id: 'billing-task-031',
    title: 'Run compliance checklist (Billing #31)',
    description: 'CareNest operational task for billing: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm billing context #31',
      'Capture outcome for billing task 31',
      'Log follow-up owner for billing-31',
    ],
    dependsOn: ['billing-task-030'],
  },
  {
    id: 'billing-task-032',
    title: 'Update risk scores (Billing #32)',
    description: 'CareNest operational task for billing: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm billing context #32',
      'Capture outcome for billing task 32',
      'Log follow-up owner for billing-32',
    ],
    dependsOn: ['billing-task-031'],
  },
  {
    id: 'billing-task-033',
    title: 'Notify on-call clinician (Billing #33)',
    description: 'CareNest operational task for billing: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm billing context #33',
      'Capture outcome for billing task 33',
      'Log follow-up owner for billing-33',
    ],
    dependsOn: ['billing-task-032'],
  },
  {
    id: 'billing-task-034',
    title: 'Archive stale drafts (Billing #34)',
    description: 'CareNest operational task for billing: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm billing context #34',
      'Capture outcome for billing task 34',
      'Log follow-up owner for billing-34',
    ],
    dependsOn: ['billing-task-033'],
  },
  {
    id: 'billing-task-035',
    title: 'Export weekly digest (Billing #35)',
    description: 'CareNest operational task for billing: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm billing context #35',
      'Capture outcome for billing task 35',
      'Log follow-up owner for billing-35',
    ],
    dependsOn: ['billing-task-034'],
  },
  {
    id: 'billing-task-036',
    title: 'Train new caregiver on module (Billing #36)',
    description: 'CareNest operational task for billing: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm billing context #36',
      'Capture outcome for billing task 36',
      'Log follow-up owner for billing-36',
    ],
    dependsOn: ['billing-task-035'],
  },
  {
    id: 'billing-task-037',
    title: 'Verify device integrations (Billing #37)',
    description: 'CareNest operational task for billing: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm billing context #37',
      'Capture outcome for billing task 37',
      'Log follow-up owner for billing-37',
    ],
    dependsOn: ['billing-task-036'],
  },
  {
    id: 'billing-task-038',
    title: 'Spot-check critical priorities (Billing #38)',
    description: 'CareNest operational task for billing: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm billing context #38',
      'Capture outcome for billing task 38',
      'Log follow-up owner for billing-38',
    ],
    dependsOn: ['billing-task-037'],
  },
  {
    id: 'billing-task-039',
    title: 'Align meal / care constraints (Billing #39)',
    description: 'CareNest operational task for billing: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm billing context #39',
      'Capture outcome for billing task 39',
      'Log follow-up owner for billing-39',
    ],
    dependsOn: ['billing-task-038'],
  },
  {
    id: 'billing-task-040',
    title: 'Publish dashboard widgets (Billing #40)',
    description: 'CareNest operational task for billing: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm billing context #40',
      'Capture outcome for billing task 40',
      'Log follow-up owner for billing-40',
    ],
    dependsOn: ['billing-task-039'],
  },
  {
    id: 'billing-task-041',
    title: 'Review overnight notes (Billing #41)',
    description: 'CareNest operational task for billing: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm billing context #41',
      'Capture outcome for billing task 41',
      'Log follow-up owner for billing-41',
    ],
    dependsOn: ['billing-task-040'],
  },
  {
    id: 'billing-task-042',
    title: 'Reconcile open items (Billing #42)',
    description: 'CareNest operational task for billing: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm billing context #42',
      'Capture outcome for billing task 42',
      'Log follow-up owner for billing-42',
    ],
    dependsOn: ['billing-task-041'],
  },
  {
    id: 'billing-task-043',
    title: 'Escalate overdue cases (Billing #43)',
    description: 'CareNest operational task for billing: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm billing context #43',
      'Capture outcome for billing task 43',
      'Log follow-up owner for billing-43',
    ],
    dependsOn: ['billing-task-042'],
  },
  {
    id: 'billing-task-044',
    title: 'Prepare family update (Billing #44)',
    description: 'CareNest operational task for billing: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm billing context #44',
      'Capture outcome for billing task 44',
      'Log follow-up owner for billing-44',
    ],
    dependsOn: ['billing-task-043'],
  },
  {
    id: 'billing-task-045',
    title: 'Audit documentation completeness (Billing #45)',
    description: 'CareNest operational task for billing: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm billing context #45',
      'Capture outcome for billing task 45',
      'Log follow-up owner for billing-45',
    ],
    dependsOn: ['billing-task-044'],
  },
  {
    id: 'billing-task-046',
    title: 'Sync with pharmacy / vendor (Billing #46)',
    description: 'CareNest operational task for billing: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm billing context #46',
      'Capture outcome for billing task 46',
      'Log follow-up owner for billing-46',
    ],
    dependsOn: ['billing-task-045'],
  },
  {
    id: 'billing-task-047',
    title: 'Validate schedule conflicts (Billing #47)',
    description: 'CareNest operational task for billing: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm billing context #47',
      'Capture outcome for billing task 47',
      'Log follow-up owner for billing-47',
    ],
    dependsOn: ['billing-task-046'],
  },
  {
    id: 'billing-task-048',
    title: 'Close completed workflows (Billing #48)',
    description: 'CareNest operational task for billing: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm billing context #48',
      'Capture outcome for billing task 48',
      'Log follow-up owner for billing-48',
    ],
    dependsOn: ['billing-task-047'],
  },
  {
    id: 'billing-task-049',
    title: 'Generate shift handoff summary (Billing #49)',
    description: 'CareNest operational task for billing: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm billing context #49',
      'Capture outcome for billing task 49',
      'Log follow-up owner for billing-49',
    ],
    dependsOn: ['billing-task-048'],
  },
  {
    id: 'billing-task-050',
    title: 'Confirm consent / privacy flags (Billing #50)',
    description: 'CareNest operational task for billing: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm billing context #50',
      'Capture outcome for billing task 50',
      'Log follow-up owner for billing-50',
    ],
    dependsOn: ['billing-task-049'],
  },
  {
    id: 'billing-task-051',
    title: 'Run compliance checklist (Billing #51)',
    description: 'CareNest operational task for billing: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm billing context #51',
      'Capture outcome for billing task 51',
      'Log follow-up owner for billing-51',
    ],
    dependsOn: ['billing-task-050'],
  },
  {
    id: 'billing-task-052',
    title: 'Update risk scores (Billing #52)',
    description: 'CareNest operational task for billing: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm billing context #52',
      'Capture outcome for billing task 52',
      'Log follow-up owner for billing-52',
    ],
    dependsOn: ['billing-task-051'],
  },
  {
    id: 'billing-task-053',
    title: 'Notify on-call clinician (Billing #53)',
    description: 'CareNest operational task for billing: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm billing context #53',
      'Capture outcome for billing task 53',
      'Log follow-up owner for billing-53',
    ],
    dependsOn: ['billing-task-052'],
  },
  {
    id: 'billing-task-054',
    title: 'Archive stale drafts (Billing #54)',
    description: 'CareNest operational task for billing: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm billing context #54',
      'Capture outcome for billing task 54',
      'Log follow-up owner for billing-54',
    ],
    dependsOn: ['billing-task-053'],
  },
  {
    id: 'billing-task-055',
    title: 'Export weekly digest (Billing #55)',
    description: 'CareNest operational task for billing: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm billing context #55',
      'Capture outcome for billing task 55',
      'Log follow-up owner for billing-55',
    ],
    dependsOn: ['billing-task-054'],
  },
  {
    id: 'billing-task-056',
    title: 'Train new caregiver on module (Billing #56)',
    description: 'CareNest operational task for billing: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm billing context #56',
      'Capture outcome for billing task 56',
      'Log follow-up owner for billing-56',
    ],
    dependsOn: ['billing-task-055'],
  },
  {
    id: 'billing-task-057',
    title: 'Verify device integrations (Billing #57)',
    description: 'CareNest operational task for billing: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm billing context #57',
      'Capture outcome for billing task 57',
      'Log follow-up owner for billing-57',
    ],
    dependsOn: ['billing-task-056'],
  },
  {
    id: 'billing-task-058',
    title: 'Spot-check critical priorities (Billing #58)',
    description: 'CareNest operational task for billing: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm billing context #58',
      'Capture outcome for billing task 58',
      'Log follow-up owner for billing-58',
    ],
    dependsOn: ['billing-task-057'],
  },
  {
    id: 'billing-task-059',
    title: 'Align meal / care constraints (Billing #59)',
    description: 'CareNest operational task for billing: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm billing context #59',
      'Capture outcome for billing task 59',
      'Log follow-up owner for billing-59',
    ],
    dependsOn: ['billing-task-058'],
  },
  {
    id: 'billing-task-060',
    title: 'Publish dashboard widgets (Billing #60)',
    description: 'CareNest operational task for billing: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm billing context #60',
      'Capture outcome for billing task 60',
      'Log follow-up owner for billing-60',
    ],
    dependsOn: ['billing-task-059'],
  },
  {
    id: 'billing-task-061',
    title: 'Review overnight notes (Billing #61)',
    description: 'CareNest operational task for billing: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm billing context #61',
      'Capture outcome for billing task 61',
      'Log follow-up owner for billing-61',
    ],
    dependsOn: ['billing-task-060'],
  },
  {
    id: 'billing-task-062',
    title: 'Reconcile open items (Billing #62)',
    description: 'CareNest operational task for billing: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm billing context #62',
      'Capture outcome for billing task 62',
      'Log follow-up owner for billing-62',
    ],
    dependsOn: ['billing-task-061'],
  },
  {
    id: 'billing-task-063',
    title: 'Escalate overdue cases (Billing #63)',
    description: 'CareNest operational task for billing: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm billing context #63',
      'Capture outcome for billing task 63',
      'Log follow-up owner for billing-63',
    ],
    dependsOn: ['billing-task-062'],
  },
  {
    id: 'billing-task-064',
    title: 'Prepare family update (Billing #64)',
    description: 'CareNest operational task for billing: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm billing context #64',
      'Capture outcome for billing task 64',
      'Log follow-up owner for billing-64',
    ],
    dependsOn: ['billing-task-063'],
  },
  {
    id: 'billing-task-065',
    title: 'Audit documentation completeness (Billing #65)',
    description: 'CareNest operational task for billing: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm billing context #65',
      'Capture outcome for billing task 65',
      'Log follow-up owner for billing-65',
    ],
    dependsOn: ['billing-task-064'],
  },
  {
    id: 'billing-task-066',
    title: 'Sync with pharmacy / vendor (Billing #66)',
    description: 'CareNest operational task for billing: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm billing context #66',
      'Capture outcome for billing task 66',
      'Log follow-up owner for billing-66',
    ],
    dependsOn: ['billing-task-065'],
  },
  {
    id: 'billing-task-067',
    title: 'Validate schedule conflicts (Billing #67)',
    description: 'CareNest operational task for billing: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm billing context #67',
      'Capture outcome for billing task 67',
      'Log follow-up owner for billing-67',
    ],
    dependsOn: ['billing-task-066'],
  },
  {
    id: 'billing-task-068',
    title: 'Close completed workflows (Billing #68)',
    description: 'CareNest operational task for billing: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm billing context #68',
      'Capture outcome for billing task 68',
      'Log follow-up owner for billing-68',
    ],
    dependsOn: ['billing-task-067'],
  },
  {
    id: 'billing-task-069',
    title: 'Generate shift handoff summary (Billing #69)',
    description: 'CareNest operational task for billing: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm billing context #69',
      'Capture outcome for billing task 69',
      'Log follow-up owner for billing-69',
    ],
    dependsOn: ['billing-task-068'],
  },
  {
    id: 'billing-task-070',
    title: 'Confirm consent / privacy flags (Billing #70)',
    description: 'CareNest operational task for billing: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm billing context #70',
      'Capture outcome for billing task 70',
      'Log follow-up owner for billing-70',
    ],
    dependsOn: ['billing-task-069'],
  },
  {
    id: 'billing-task-071',
    title: 'Run compliance checklist (Billing #71)',
    description: 'CareNest operational task for billing: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm billing context #71',
      'Capture outcome for billing task 71',
      'Log follow-up owner for billing-71',
    ],
    dependsOn: ['billing-task-070'],
  },
  {
    id: 'billing-task-072',
    title: 'Update risk scores (Billing #72)',
    description: 'CareNest operational task for billing: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm billing context #72',
      'Capture outcome for billing task 72',
      'Log follow-up owner for billing-72',
    ],
    dependsOn: ['billing-task-071'],
  },
  {
    id: 'billing-task-073',
    title: 'Notify on-call clinician (Billing #73)',
    description: 'CareNest operational task for billing: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm billing context #73',
      'Capture outcome for billing task 73',
      'Log follow-up owner for billing-73',
    ],
    dependsOn: ['billing-task-072'],
  },
  {
    id: 'billing-task-074',
    title: 'Archive stale drafts (Billing #74)',
    description: 'CareNest operational task for billing: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm billing context #74',
      'Capture outcome for billing task 74',
      'Log follow-up owner for billing-74',
    ],
    dependsOn: ['billing-task-073'],
  },
  {
    id: 'billing-task-075',
    title: 'Export weekly digest (Billing #75)',
    description: 'CareNest operational task for billing: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm billing context #75',
      'Capture outcome for billing task 75',
      'Log follow-up owner for billing-75',
    ],
    dependsOn: ['billing-task-074'],
  },
  {
    id: 'billing-task-076',
    title: 'Train new caregiver on module (Billing #76)',
    description: 'CareNest operational task for billing: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm billing context #76',
      'Capture outcome for billing task 76',
      'Log follow-up owner for billing-76',
    ],
    dependsOn: ['billing-task-075'],
  },
  {
    id: 'billing-task-077',
    title: 'Verify device integrations (Billing #77)',
    description: 'CareNest operational task for billing: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm billing context #77',
      'Capture outcome for billing task 77',
      'Log follow-up owner for billing-77',
    ],
    dependsOn: ['billing-task-076'],
  },
  {
    id: 'billing-task-078',
    title: 'Spot-check critical priorities (Billing #78)',
    description: 'CareNest operational task for billing: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm billing context #78',
      'Capture outcome for billing task 78',
      'Log follow-up owner for billing-78',
    ],
    dependsOn: ['billing-task-077'],
  },
  {
    id: 'billing-task-079',
    title: 'Align meal / care constraints (Billing #79)',
    description: 'CareNest operational task for billing: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm billing context #79',
      'Capture outcome for billing task 79',
      'Log follow-up owner for billing-79',
    ],
    dependsOn: ['billing-task-078'],
  },
  {
    id: 'billing-task-080',
    title: 'Publish dashboard widgets (Billing #80)',
    description: 'CareNest operational task for billing: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm billing context #80',
      'Capture outcome for billing task 80',
      'Log follow-up owner for billing-80',
    ],
    dependsOn: ['billing-task-079'],
  },
];

export function listOpenBillingTasks(): BillingTask[] {
  return billingTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countBillingTasksByState(): Record<BillingTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of billingTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateBillingWorkload1(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateBillingWorkload2(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateBillingWorkload3(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateBillingWorkload4(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateBillingWorkload5(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateBillingWorkload6(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateBillingWorkload7(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateBillingWorkload8(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateBillingWorkload9(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateBillingWorkload10(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateBillingWorkload11(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateBillingWorkload12(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateBillingWorkload13(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateBillingWorkload14(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateBillingWorkload15(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateBillingWorkload16(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateBillingWorkload17(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateBillingWorkload18(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateBillingWorkload19(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateBillingWorkload20(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateBillingWorkload21(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateBillingWorkload22(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateBillingWorkload23(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateBillingWorkload24(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateBillingWorkload25(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateBillingWorkload26(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateBillingWorkload27(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateBillingWorkload28(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateBillingWorkload29(tasks: BillingTask[] = billingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
