/** Operational task catalog for Reports */

export type ReportsTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface ReportsTask {
  id: string;
  title: string;
  description: string;
  state: ReportsTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const reportsTaskCatalog: ReportsTask[] = [
  {
    id: 'reports-task-001',
    title: 'Review overnight notes (Reports #1)',
    description: 'CareNest operational task for reports: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm reports context #1',
      'Capture outcome for reports task 1',
      'Log follow-up owner for reports-1',
    ],
    dependsOn: [],
  },
  {
    id: 'reports-task-002',
    title: 'Reconcile open items (Reports #2)',
    description: 'CareNest operational task for reports: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm reports context #2',
      'Capture outcome for reports task 2',
      'Log follow-up owner for reports-2',
    ],
    dependsOn: ['reports-task-001'],
  },
  {
    id: 'reports-task-003',
    title: 'Escalate overdue cases (Reports #3)',
    description: 'CareNest operational task for reports: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm reports context #3',
      'Capture outcome for reports task 3',
      'Log follow-up owner for reports-3',
    ],
    dependsOn: ['reports-task-002'],
  },
  {
    id: 'reports-task-004',
    title: 'Prepare family update (Reports #4)',
    description: 'CareNest operational task for reports: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm reports context #4',
      'Capture outcome for reports task 4',
      'Log follow-up owner for reports-4',
    ],
    dependsOn: ['reports-task-003'],
  },
  {
    id: 'reports-task-005',
    title: 'Audit documentation completeness (Reports #5)',
    description: 'CareNest operational task for reports: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm reports context #5',
      'Capture outcome for reports task 5',
      'Log follow-up owner for reports-5',
    ],
    dependsOn: ['reports-task-004'],
  },
  {
    id: 'reports-task-006',
    title: 'Sync with pharmacy / vendor (Reports #6)',
    description: 'CareNest operational task for reports: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm reports context #6',
      'Capture outcome for reports task 6',
      'Log follow-up owner for reports-6',
    ],
    dependsOn: ['reports-task-005'],
  },
  {
    id: 'reports-task-007',
    title: 'Validate schedule conflicts (Reports #7)',
    description: 'CareNest operational task for reports: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm reports context #7',
      'Capture outcome for reports task 7',
      'Log follow-up owner for reports-7',
    ],
    dependsOn: ['reports-task-006'],
  },
  {
    id: 'reports-task-008',
    title: 'Close completed workflows (Reports #8)',
    description: 'CareNest operational task for reports: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm reports context #8',
      'Capture outcome for reports task 8',
      'Log follow-up owner for reports-8',
    ],
    dependsOn: ['reports-task-007'],
  },
  {
    id: 'reports-task-009',
    title: 'Generate shift handoff summary (Reports #9)',
    description: 'CareNest operational task for reports: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm reports context #9',
      'Capture outcome for reports task 9',
      'Log follow-up owner for reports-9',
    ],
    dependsOn: ['reports-task-008'],
  },
  {
    id: 'reports-task-010',
    title: 'Confirm consent / privacy flags (Reports #10)',
    description: 'CareNest operational task for reports: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm reports context #10',
      'Capture outcome for reports task 10',
      'Log follow-up owner for reports-10',
    ],
    dependsOn: ['reports-task-009'],
  },
  {
    id: 'reports-task-011',
    title: 'Run compliance checklist (Reports #11)',
    description: 'CareNest operational task for reports: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm reports context #11',
      'Capture outcome for reports task 11',
      'Log follow-up owner for reports-11',
    ],
    dependsOn: ['reports-task-010'],
  },
  {
    id: 'reports-task-012',
    title: 'Update risk scores (Reports #12)',
    description: 'CareNest operational task for reports: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm reports context #12',
      'Capture outcome for reports task 12',
      'Log follow-up owner for reports-12',
    ],
    dependsOn: ['reports-task-011'],
  },
  {
    id: 'reports-task-013',
    title: 'Notify on-call clinician (Reports #13)',
    description: 'CareNest operational task for reports: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm reports context #13',
      'Capture outcome for reports task 13',
      'Log follow-up owner for reports-13',
    ],
    dependsOn: ['reports-task-012'],
  },
  {
    id: 'reports-task-014',
    title: 'Archive stale drafts (Reports #14)',
    description: 'CareNest operational task for reports: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm reports context #14',
      'Capture outcome for reports task 14',
      'Log follow-up owner for reports-14',
    ],
    dependsOn: ['reports-task-013'],
  },
  {
    id: 'reports-task-015',
    title: 'Export weekly digest (Reports #15)',
    description: 'CareNest operational task for reports: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm reports context #15',
      'Capture outcome for reports task 15',
      'Log follow-up owner for reports-15',
    ],
    dependsOn: ['reports-task-014'],
  },
  {
    id: 'reports-task-016',
    title: 'Train new caregiver on module (Reports #16)',
    description: 'CareNest operational task for reports: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm reports context #16',
      'Capture outcome for reports task 16',
      'Log follow-up owner for reports-16',
    ],
    dependsOn: ['reports-task-015'],
  },
  {
    id: 'reports-task-017',
    title: 'Verify device integrations (Reports #17)',
    description: 'CareNest operational task for reports: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm reports context #17',
      'Capture outcome for reports task 17',
      'Log follow-up owner for reports-17',
    ],
    dependsOn: ['reports-task-016'],
  },
  {
    id: 'reports-task-018',
    title: 'Spot-check critical priorities (Reports #18)',
    description: 'CareNest operational task for reports: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm reports context #18',
      'Capture outcome for reports task 18',
      'Log follow-up owner for reports-18',
    ],
    dependsOn: ['reports-task-017'],
  },
  {
    id: 'reports-task-019',
    title: 'Align meal / care constraints (Reports #19)',
    description: 'CareNest operational task for reports: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm reports context #19',
      'Capture outcome for reports task 19',
      'Log follow-up owner for reports-19',
    ],
    dependsOn: ['reports-task-018'],
  },
  {
    id: 'reports-task-020',
    title: 'Publish dashboard widgets (Reports #20)',
    description: 'CareNest operational task for reports: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm reports context #20',
      'Capture outcome for reports task 20',
      'Log follow-up owner for reports-20',
    ],
    dependsOn: ['reports-task-019'],
  },
  {
    id: 'reports-task-021',
    title: 'Review overnight notes (Reports #21)',
    description: 'CareNest operational task for reports: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm reports context #21',
      'Capture outcome for reports task 21',
      'Log follow-up owner for reports-21',
    ],
    dependsOn: ['reports-task-020'],
  },
  {
    id: 'reports-task-022',
    title: 'Reconcile open items (Reports #22)',
    description: 'CareNest operational task for reports: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm reports context #22',
      'Capture outcome for reports task 22',
      'Log follow-up owner for reports-22',
    ],
    dependsOn: ['reports-task-021'],
  },
  {
    id: 'reports-task-023',
    title: 'Escalate overdue cases (Reports #23)',
    description: 'CareNest operational task for reports: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm reports context #23',
      'Capture outcome for reports task 23',
      'Log follow-up owner for reports-23',
    ],
    dependsOn: ['reports-task-022'],
  },
  {
    id: 'reports-task-024',
    title: 'Prepare family update (Reports #24)',
    description: 'CareNest operational task for reports: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm reports context #24',
      'Capture outcome for reports task 24',
      'Log follow-up owner for reports-24',
    ],
    dependsOn: ['reports-task-023'],
  },
  {
    id: 'reports-task-025',
    title: 'Audit documentation completeness (Reports #25)',
    description: 'CareNest operational task for reports: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm reports context #25',
      'Capture outcome for reports task 25',
      'Log follow-up owner for reports-25',
    ],
    dependsOn: ['reports-task-024'],
  },
  {
    id: 'reports-task-026',
    title: 'Sync with pharmacy / vendor (Reports #26)',
    description: 'CareNest operational task for reports: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm reports context #26',
      'Capture outcome for reports task 26',
      'Log follow-up owner for reports-26',
    ],
    dependsOn: ['reports-task-025'],
  },
  {
    id: 'reports-task-027',
    title: 'Validate schedule conflicts (Reports #27)',
    description: 'CareNest operational task for reports: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm reports context #27',
      'Capture outcome for reports task 27',
      'Log follow-up owner for reports-27',
    ],
    dependsOn: ['reports-task-026'],
  },
  {
    id: 'reports-task-028',
    title: 'Close completed workflows (Reports #28)',
    description: 'CareNest operational task for reports: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm reports context #28',
      'Capture outcome for reports task 28',
      'Log follow-up owner for reports-28',
    ],
    dependsOn: ['reports-task-027'],
  },
  {
    id: 'reports-task-029',
    title: 'Generate shift handoff summary (Reports #29)',
    description: 'CareNest operational task for reports: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm reports context #29',
      'Capture outcome for reports task 29',
      'Log follow-up owner for reports-29',
    ],
    dependsOn: ['reports-task-028'],
  },
  {
    id: 'reports-task-030',
    title: 'Confirm consent / privacy flags (Reports #30)',
    description: 'CareNest operational task for reports: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm reports context #30',
      'Capture outcome for reports task 30',
      'Log follow-up owner for reports-30',
    ],
    dependsOn: ['reports-task-029'],
  },
  {
    id: 'reports-task-031',
    title: 'Run compliance checklist (Reports #31)',
    description: 'CareNest operational task for reports: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm reports context #31',
      'Capture outcome for reports task 31',
      'Log follow-up owner for reports-31',
    ],
    dependsOn: ['reports-task-030'],
  },
  {
    id: 'reports-task-032',
    title: 'Update risk scores (Reports #32)',
    description: 'CareNest operational task for reports: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm reports context #32',
      'Capture outcome for reports task 32',
      'Log follow-up owner for reports-32',
    ],
    dependsOn: ['reports-task-031'],
  },
  {
    id: 'reports-task-033',
    title: 'Notify on-call clinician (Reports #33)',
    description: 'CareNest operational task for reports: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm reports context #33',
      'Capture outcome for reports task 33',
      'Log follow-up owner for reports-33',
    ],
    dependsOn: ['reports-task-032'],
  },
  {
    id: 'reports-task-034',
    title: 'Archive stale drafts (Reports #34)',
    description: 'CareNest operational task for reports: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm reports context #34',
      'Capture outcome for reports task 34',
      'Log follow-up owner for reports-34',
    ],
    dependsOn: ['reports-task-033'],
  },
  {
    id: 'reports-task-035',
    title: 'Export weekly digest (Reports #35)',
    description: 'CareNest operational task for reports: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm reports context #35',
      'Capture outcome for reports task 35',
      'Log follow-up owner for reports-35',
    ],
    dependsOn: ['reports-task-034'],
  },
  {
    id: 'reports-task-036',
    title: 'Train new caregiver on module (Reports #36)',
    description: 'CareNest operational task for reports: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm reports context #36',
      'Capture outcome for reports task 36',
      'Log follow-up owner for reports-36',
    ],
    dependsOn: ['reports-task-035'],
  },
  {
    id: 'reports-task-037',
    title: 'Verify device integrations (Reports #37)',
    description: 'CareNest operational task for reports: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm reports context #37',
      'Capture outcome for reports task 37',
      'Log follow-up owner for reports-37',
    ],
    dependsOn: ['reports-task-036'],
  },
  {
    id: 'reports-task-038',
    title: 'Spot-check critical priorities (Reports #38)',
    description: 'CareNest operational task for reports: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm reports context #38',
      'Capture outcome for reports task 38',
      'Log follow-up owner for reports-38',
    ],
    dependsOn: ['reports-task-037'],
  },
  {
    id: 'reports-task-039',
    title: 'Align meal / care constraints (Reports #39)',
    description: 'CareNest operational task for reports: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm reports context #39',
      'Capture outcome for reports task 39',
      'Log follow-up owner for reports-39',
    ],
    dependsOn: ['reports-task-038'],
  },
  {
    id: 'reports-task-040',
    title: 'Publish dashboard widgets (Reports #40)',
    description: 'CareNest operational task for reports: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm reports context #40',
      'Capture outcome for reports task 40',
      'Log follow-up owner for reports-40',
    ],
    dependsOn: ['reports-task-039'],
  },
  {
    id: 'reports-task-041',
    title: 'Review overnight notes (Reports #41)',
    description: 'CareNest operational task for reports: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm reports context #41',
      'Capture outcome for reports task 41',
      'Log follow-up owner for reports-41',
    ],
    dependsOn: ['reports-task-040'],
  },
  {
    id: 'reports-task-042',
    title: 'Reconcile open items (Reports #42)',
    description: 'CareNest operational task for reports: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm reports context #42',
      'Capture outcome for reports task 42',
      'Log follow-up owner for reports-42',
    ],
    dependsOn: ['reports-task-041'],
  },
  {
    id: 'reports-task-043',
    title: 'Escalate overdue cases (Reports #43)',
    description: 'CareNest operational task for reports: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm reports context #43',
      'Capture outcome for reports task 43',
      'Log follow-up owner for reports-43',
    ],
    dependsOn: ['reports-task-042'],
  },
  {
    id: 'reports-task-044',
    title: 'Prepare family update (Reports #44)',
    description: 'CareNest operational task for reports: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm reports context #44',
      'Capture outcome for reports task 44',
      'Log follow-up owner for reports-44',
    ],
    dependsOn: ['reports-task-043'],
  },
  {
    id: 'reports-task-045',
    title: 'Audit documentation completeness (Reports #45)',
    description: 'CareNest operational task for reports: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm reports context #45',
      'Capture outcome for reports task 45',
      'Log follow-up owner for reports-45',
    ],
    dependsOn: ['reports-task-044'],
  },
  {
    id: 'reports-task-046',
    title: 'Sync with pharmacy / vendor (Reports #46)',
    description: 'CareNest operational task for reports: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm reports context #46',
      'Capture outcome for reports task 46',
      'Log follow-up owner for reports-46',
    ],
    dependsOn: ['reports-task-045'],
  },
  {
    id: 'reports-task-047',
    title: 'Validate schedule conflicts (Reports #47)',
    description: 'CareNest operational task for reports: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm reports context #47',
      'Capture outcome for reports task 47',
      'Log follow-up owner for reports-47',
    ],
    dependsOn: ['reports-task-046'],
  },
  {
    id: 'reports-task-048',
    title: 'Close completed workflows (Reports #48)',
    description: 'CareNest operational task for reports: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm reports context #48',
      'Capture outcome for reports task 48',
      'Log follow-up owner for reports-48',
    ],
    dependsOn: ['reports-task-047'],
  },
  {
    id: 'reports-task-049',
    title: 'Generate shift handoff summary (Reports #49)',
    description: 'CareNest operational task for reports: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm reports context #49',
      'Capture outcome for reports task 49',
      'Log follow-up owner for reports-49',
    ],
    dependsOn: ['reports-task-048'],
  },
  {
    id: 'reports-task-050',
    title: 'Confirm consent / privacy flags (Reports #50)',
    description: 'CareNest operational task for reports: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm reports context #50',
      'Capture outcome for reports task 50',
      'Log follow-up owner for reports-50',
    ],
    dependsOn: ['reports-task-049'],
  },
  {
    id: 'reports-task-051',
    title: 'Run compliance checklist (Reports #51)',
    description: 'CareNest operational task for reports: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm reports context #51',
      'Capture outcome for reports task 51',
      'Log follow-up owner for reports-51',
    ],
    dependsOn: ['reports-task-050'],
  },
  {
    id: 'reports-task-052',
    title: 'Update risk scores (Reports #52)',
    description: 'CareNest operational task for reports: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm reports context #52',
      'Capture outcome for reports task 52',
      'Log follow-up owner for reports-52',
    ],
    dependsOn: ['reports-task-051'],
  },
  {
    id: 'reports-task-053',
    title: 'Notify on-call clinician (Reports #53)',
    description: 'CareNest operational task for reports: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm reports context #53',
      'Capture outcome for reports task 53',
      'Log follow-up owner for reports-53',
    ],
    dependsOn: ['reports-task-052'],
  },
  {
    id: 'reports-task-054',
    title: 'Archive stale drafts (Reports #54)',
    description: 'CareNest operational task for reports: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm reports context #54',
      'Capture outcome for reports task 54',
      'Log follow-up owner for reports-54',
    ],
    dependsOn: ['reports-task-053'],
  },
  {
    id: 'reports-task-055',
    title: 'Export weekly digest (Reports #55)',
    description: 'CareNest operational task for reports: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm reports context #55',
      'Capture outcome for reports task 55',
      'Log follow-up owner for reports-55',
    ],
    dependsOn: ['reports-task-054'],
  },
  {
    id: 'reports-task-056',
    title: 'Train new caregiver on module (Reports #56)',
    description: 'CareNest operational task for reports: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm reports context #56',
      'Capture outcome for reports task 56',
      'Log follow-up owner for reports-56',
    ],
    dependsOn: ['reports-task-055'],
  },
  {
    id: 'reports-task-057',
    title: 'Verify device integrations (Reports #57)',
    description: 'CareNest operational task for reports: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm reports context #57',
      'Capture outcome for reports task 57',
      'Log follow-up owner for reports-57',
    ],
    dependsOn: ['reports-task-056'],
  },
  {
    id: 'reports-task-058',
    title: 'Spot-check critical priorities (Reports #58)',
    description: 'CareNest operational task for reports: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm reports context #58',
      'Capture outcome for reports task 58',
      'Log follow-up owner for reports-58',
    ],
    dependsOn: ['reports-task-057'],
  },
  {
    id: 'reports-task-059',
    title: 'Align meal / care constraints (Reports #59)',
    description: 'CareNest operational task for reports: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm reports context #59',
      'Capture outcome for reports task 59',
      'Log follow-up owner for reports-59',
    ],
    dependsOn: ['reports-task-058'],
  },
  {
    id: 'reports-task-060',
    title: 'Publish dashboard widgets (Reports #60)',
    description: 'CareNest operational task for reports: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm reports context #60',
      'Capture outcome for reports task 60',
      'Log follow-up owner for reports-60',
    ],
    dependsOn: ['reports-task-059'],
  },
  {
    id: 'reports-task-061',
    title: 'Review overnight notes (Reports #61)',
    description: 'CareNest operational task for reports: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm reports context #61',
      'Capture outcome for reports task 61',
      'Log follow-up owner for reports-61',
    ],
    dependsOn: ['reports-task-060'],
  },
  {
    id: 'reports-task-062',
    title: 'Reconcile open items (Reports #62)',
    description: 'CareNest operational task for reports: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm reports context #62',
      'Capture outcome for reports task 62',
      'Log follow-up owner for reports-62',
    ],
    dependsOn: ['reports-task-061'],
  },
  {
    id: 'reports-task-063',
    title: 'Escalate overdue cases (Reports #63)',
    description: 'CareNest operational task for reports: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm reports context #63',
      'Capture outcome for reports task 63',
      'Log follow-up owner for reports-63',
    ],
    dependsOn: ['reports-task-062'],
  },
  {
    id: 'reports-task-064',
    title: 'Prepare family update (Reports #64)',
    description: 'CareNest operational task for reports: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm reports context #64',
      'Capture outcome for reports task 64',
      'Log follow-up owner for reports-64',
    ],
    dependsOn: ['reports-task-063'],
  },
  {
    id: 'reports-task-065',
    title: 'Audit documentation completeness (Reports #65)',
    description: 'CareNest operational task for reports: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm reports context #65',
      'Capture outcome for reports task 65',
      'Log follow-up owner for reports-65',
    ],
    dependsOn: ['reports-task-064'],
  },
  {
    id: 'reports-task-066',
    title: 'Sync with pharmacy / vendor (Reports #66)',
    description: 'CareNest operational task for reports: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm reports context #66',
      'Capture outcome for reports task 66',
      'Log follow-up owner for reports-66',
    ],
    dependsOn: ['reports-task-065'],
  },
  {
    id: 'reports-task-067',
    title: 'Validate schedule conflicts (Reports #67)',
    description: 'CareNest operational task for reports: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm reports context #67',
      'Capture outcome for reports task 67',
      'Log follow-up owner for reports-67',
    ],
    dependsOn: ['reports-task-066'],
  },
  {
    id: 'reports-task-068',
    title: 'Close completed workflows (Reports #68)',
    description: 'CareNest operational task for reports: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm reports context #68',
      'Capture outcome for reports task 68',
      'Log follow-up owner for reports-68',
    ],
    dependsOn: ['reports-task-067'],
  },
  {
    id: 'reports-task-069',
    title: 'Generate shift handoff summary (Reports #69)',
    description: 'CareNest operational task for reports: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm reports context #69',
      'Capture outcome for reports task 69',
      'Log follow-up owner for reports-69',
    ],
    dependsOn: ['reports-task-068'],
  },
  {
    id: 'reports-task-070',
    title: 'Confirm consent / privacy flags (Reports #70)',
    description: 'CareNest operational task for reports: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm reports context #70',
      'Capture outcome for reports task 70',
      'Log follow-up owner for reports-70',
    ],
    dependsOn: ['reports-task-069'],
  },
  {
    id: 'reports-task-071',
    title: 'Run compliance checklist (Reports #71)',
    description: 'CareNest operational task for reports: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm reports context #71',
      'Capture outcome for reports task 71',
      'Log follow-up owner for reports-71',
    ],
    dependsOn: ['reports-task-070'],
  },
  {
    id: 'reports-task-072',
    title: 'Update risk scores (Reports #72)',
    description: 'CareNest operational task for reports: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm reports context #72',
      'Capture outcome for reports task 72',
      'Log follow-up owner for reports-72',
    ],
    dependsOn: ['reports-task-071'],
  },
  {
    id: 'reports-task-073',
    title: 'Notify on-call clinician (Reports #73)',
    description: 'CareNest operational task for reports: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm reports context #73',
      'Capture outcome for reports task 73',
      'Log follow-up owner for reports-73',
    ],
    dependsOn: ['reports-task-072'],
  },
  {
    id: 'reports-task-074',
    title: 'Archive stale drafts (Reports #74)',
    description: 'CareNest operational task for reports: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm reports context #74',
      'Capture outcome for reports task 74',
      'Log follow-up owner for reports-74',
    ],
    dependsOn: ['reports-task-073'],
  },
  {
    id: 'reports-task-075',
    title: 'Export weekly digest (Reports #75)',
    description: 'CareNest operational task for reports: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm reports context #75',
      'Capture outcome for reports task 75',
      'Log follow-up owner for reports-75',
    ],
    dependsOn: ['reports-task-074'],
  },
  {
    id: 'reports-task-076',
    title: 'Train new caregiver on module (Reports #76)',
    description: 'CareNest operational task for reports: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm reports context #76',
      'Capture outcome for reports task 76',
      'Log follow-up owner for reports-76',
    ],
    dependsOn: ['reports-task-075'],
  },
  {
    id: 'reports-task-077',
    title: 'Verify device integrations (Reports #77)',
    description: 'CareNest operational task for reports: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm reports context #77',
      'Capture outcome for reports task 77',
      'Log follow-up owner for reports-77',
    ],
    dependsOn: ['reports-task-076'],
  },
  {
    id: 'reports-task-078',
    title: 'Spot-check critical priorities (Reports #78)',
    description: 'CareNest operational task for reports: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm reports context #78',
      'Capture outcome for reports task 78',
      'Log follow-up owner for reports-78',
    ],
    dependsOn: ['reports-task-077'],
  },
  {
    id: 'reports-task-079',
    title: 'Align meal / care constraints (Reports #79)',
    description: 'CareNest operational task for reports: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm reports context #79',
      'Capture outcome for reports task 79',
      'Log follow-up owner for reports-79',
    ],
    dependsOn: ['reports-task-078'],
  },
  {
    id: 'reports-task-080',
    title: 'Publish dashboard widgets (Reports #80)',
    description: 'CareNest operational task for reports: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm reports context #80',
      'Capture outcome for reports task 80',
      'Log follow-up owner for reports-80',
    ],
    dependsOn: ['reports-task-079'],
  },
];

export function listOpenReportsTasks(): ReportsTask[] {
  return reportsTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countReportsTasksByState(): Record<ReportsTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of reportsTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateReportsWorkload1(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateReportsWorkload2(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateReportsWorkload3(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateReportsWorkload4(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateReportsWorkload5(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateReportsWorkload6(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateReportsWorkload7(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateReportsWorkload8(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateReportsWorkload9(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateReportsWorkload10(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateReportsWorkload11(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateReportsWorkload12(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateReportsWorkload13(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateReportsWorkload14(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateReportsWorkload15(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateReportsWorkload16(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateReportsWorkload17(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateReportsWorkload18(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateReportsWorkload19(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateReportsWorkload20(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateReportsWorkload21(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateReportsWorkload22(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateReportsWorkload23(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateReportsWorkload24(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateReportsWorkload25(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateReportsWorkload26(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateReportsWorkload27(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateReportsWorkload28(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateReportsWorkload29(tasks: ReportsTask[] = reportsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
