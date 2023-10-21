/** Operational task catalog for Caregivers */

export type CaregiversTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface CaregiversTask {
  id: string;
  title: string;
  description: string;
  state: CaregiversTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const caregiversTaskCatalog: CaregiversTask[] = [
  {
    id: 'caregivers-task-001',
    title: 'Review overnight notes (Caregivers #1)',
    description: 'CareNest operational task for caregivers: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm caregivers context #1',
      'Capture outcome for caregivers task 1',
      'Log follow-up owner for caregivers-1',
    ],
    dependsOn: [],
  },
  {
    id: 'caregivers-task-002',
    title: 'Reconcile open items (Caregivers #2)',
    description: 'CareNest operational task for caregivers: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm caregivers context #2',
      'Capture outcome for caregivers task 2',
      'Log follow-up owner for caregivers-2',
    ],
    dependsOn: ['caregivers-task-001'],
  },
  {
    id: 'caregivers-task-003',
    title: 'Escalate overdue cases (Caregivers #3)',
    description: 'CareNest operational task for caregivers: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm caregivers context #3',
      'Capture outcome for caregivers task 3',
      'Log follow-up owner for caregivers-3',
    ],
    dependsOn: ['caregivers-task-002'],
  },
  {
    id: 'caregivers-task-004',
    title: 'Prepare family update (Caregivers #4)',
    description: 'CareNest operational task for caregivers: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm caregivers context #4',
      'Capture outcome for caregivers task 4',
      'Log follow-up owner for caregivers-4',
    ],
    dependsOn: ['caregivers-task-003'],
  },
  {
    id: 'caregivers-task-005',
    title: 'Audit documentation completeness (Caregivers #5)',
    description: 'CareNest operational task for caregivers: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm caregivers context #5',
      'Capture outcome for caregivers task 5',
      'Log follow-up owner for caregivers-5',
    ],
    dependsOn: ['caregivers-task-004'],
  },
  {
    id: 'caregivers-task-006',
    title: 'Sync with pharmacy / vendor (Caregivers #6)',
    description: 'CareNest operational task for caregivers: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm caregivers context #6',
      'Capture outcome for caregivers task 6',
      'Log follow-up owner for caregivers-6',
    ],
    dependsOn: ['caregivers-task-005'],
  },
  {
    id: 'caregivers-task-007',
    title: 'Validate schedule conflicts (Caregivers #7)',
    description: 'CareNest operational task for caregivers: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm caregivers context #7',
      'Capture outcome for caregivers task 7',
      'Log follow-up owner for caregivers-7',
    ],
    dependsOn: ['caregivers-task-006'],
  },
  {
    id: 'caregivers-task-008',
    title: 'Close completed workflows (Caregivers #8)',
    description: 'CareNest operational task for caregivers: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm caregivers context #8',
      'Capture outcome for caregivers task 8',
      'Log follow-up owner for caregivers-8',
    ],
    dependsOn: ['caregivers-task-007'],
  },
  {
    id: 'caregivers-task-009',
    title: 'Generate shift handoff summary (Caregivers #9)',
    description: 'CareNest operational task for caregivers: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm caregivers context #9',
      'Capture outcome for caregivers task 9',
      'Log follow-up owner for caregivers-9',
    ],
    dependsOn: ['caregivers-task-008'],
  },
  {
    id: 'caregivers-task-010',
    title: 'Confirm consent / privacy flags (Caregivers #10)',
    description: 'CareNest operational task for caregivers: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm caregivers context #10',
      'Capture outcome for caregivers task 10',
      'Log follow-up owner for caregivers-10',
    ],
    dependsOn: ['caregivers-task-009'],
  },
  {
    id: 'caregivers-task-011',
    title: 'Run compliance checklist (Caregivers #11)',
    description: 'CareNest operational task for caregivers: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm caregivers context #11',
      'Capture outcome for caregivers task 11',
      'Log follow-up owner for caregivers-11',
    ],
    dependsOn: ['caregivers-task-010'],
  },
  {
    id: 'caregivers-task-012',
    title: 'Update risk scores (Caregivers #12)',
    description: 'CareNest operational task for caregivers: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm caregivers context #12',
      'Capture outcome for caregivers task 12',
      'Log follow-up owner for caregivers-12',
    ],
    dependsOn: ['caregivers-task-011'],
  },
  {
    id: 'caregivers-task-013',
    title: 'Notify on-call clinician (Caregivers #13)',
    description: 'CareNest operational task for caregivers: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm caregivers context #13',
      'Capture outcome for caregivers task 13',
      'Log follow-up owner for caregivers-13',
    ],
    dependsOn: ['caregivers-task-012'],
  },
  {
    id: 'caregivers-task-014',
    title: 'Archive stale drafts (Caregivers #14)',
    description: 'CareNest operational task for caregivers: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm caregivers context #14',
      'Capture outcome for caregivers task 14',
      'Log follow-up owner for caregivers-14',
    ],
    dependsOn: ['caregivers-task-013'],
  },
  {
    id: 'caregivers-task-015',
    title: 'Export weekly digest (Caregivers #15)',
    description: 'CareNest operational task for caregivers: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm caregivers context #15',
      'Capture outcome for caregivers task 15',
      'Log follow-up owner for caregivers-15',
    ],
    dependsOn: ['caregivers-task-014'],
  },
  {
    id: 'caregivers-task-016',
    title: 'Train new caregiver on module (Caregivers #16)',
    description: 'CareNest operational task for caregivers: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm caregivers context #16',
      'Capture outcome for caregivers task 16',
      'Log follow-up owner for caregivers-16',
    ],
    dependsOn: ['caregivers-task-015'],
  },
  {
    id: 'caregivers-task-017',
    title: 'Verify device integrations (Caregivers #17)',
    description: 'CareNest operational task for caregivers: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm caregivers context #17',
      'Capture outcome for caregivers task 17',
      'Log follow-up owner for caregivers-17',
    ],
    dependsOn: ['caregivers-task-016'],
  },
  {
    id: 'caregivers-task-018',
    title: 'Spot-check critical priorities (Caregivers #18)',
    description: 'CareNest operational task for caregivers: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm caregivers context #18',
      'Capture outcome for caregivers task 18',
      'Log follow-up owner for caregivers-18',
    ],
    dependsOn: ['caregivers-task-017'],
  },
  {
    id: 'caregivers-task-019',
    title: 'Align meal / care constraints (Caregivers #19)',
    description: 'CareNest operational task for caregivers: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm caregivers context #19',
      'Capture outcome for caregivers task 19',
      'Log follow-up owner for caregivers-19',
    ],
    dependsOn: ['caregivers-task-018'],
  },
  {
    id: 'caregivers-task-020',
    title: 'Publish dashboard widgets (Caregivers #20)',
    description: 'CareNest operational task for caregivers: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm caregivers context #20',
      'Capture outcome for caregivers task 20',
      'Log follow-up owner for caregivers-20',
    ],
    dependsOn: ['caregivers-task-019'],
  },
  {
    id: 'caregivers-task-021',
    title: 'Review overnight notes (Caregivers #21)',
    description: 'CareNest operational task for caregivers: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm caregivers context #21',
      'Capture outcome for caregivers task 21',
      'Log follow-up owner for caregivers-21',
    ],
    dependsOn: ['caregivers-task-020'],
  },
  {
    id: 'caregivers-task-022',
    title: 'Reconcile open items (Caregivers #22)',
    description: 'CareNest operational task for caregivers: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm caregivers context #22',
      'Capture outcome for caregivers task 22',
      'Log follow-up owner for caregivers-22',
    ],
    dependsOn: ['caregivers-task-021'],
  },
  {
    id: 'caregivers-task-023',
    title: 'Escalate overdue cases (Caregivers #23)',
    description: 'CareNest operational task for caregivers: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm caregivers context #23',
      'Capture outcome for caregivers task 23',
      'Log follow-up owner for caregivers-23',
    ],
    dependsOn: ['caregivers-task-022'],
  },
  {
    id: 'caregivers-task-024',
    title: 'Prepare family update (Caregivers #24)',
    description: 'CareNest operational task for caregivers: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm caregivers context #24',
      'Capture outcome for caregivers task 24',
      'Log follow-up owner for caregivers-24',
    ],
    dependsOn: ['caregivers-task-023'],
  },
  {
    id: 'caregivers-task-025',
    title: 'Audit documentation completeness (Caregivers #25)',
    description: 'CareNest operational task for caregivers: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm caregivers context #25',
      'Capture outcome for caregivers task 25',
      'Log follow-up owner for caregivers-25',
    ],
    dependsOn: ['caregivers-task-024'],
  },
  {
    id: 'caregivers-task-026',
    title: 'Sync with pharmacy / vendor (Caregivers #26)',
    description: 'CareNest operational task for caregivers: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm caregivers context #26',
      'Capture outcome for caregivers task 26',
      'Log follow-up owner for caregivers-26',
    ],
    dependsOn: ['caregivers-task-025'],
  },
  {
    id: 'caregivers-task-027',
    title: 'Validate schedule conflicts (Caregivers #27)',
    description: 'CareNest operational task for caregivers: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm caregivers context #27',
      'Capture outcome for caregivers task 27',
      'Log follow-up owner for caregivers-27',
    ],
    dependsOn: ['caregivers-task-026'],
  },
  {
    id: 'caregivers-task-028',
    title: 'Close completed workflows (Caregivers #28)',
    description: 'CareNest operational task for caregivers: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm caregivers context #28',
      'Capture outcome for caregivers task 28',
      'Log follow-up owner for caregivers-28',
    ],
    dependsOn: ['caregivers-task-027'],
  },
  {
    id: 'caregivers-task-029',
    title: 'Generate shift handoff summary (Caregivers #29)',
    description: 'CareNest operational task for caregivers: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm caregivers context #29',
      'Capture outcome for caregivers task 29',
      'Log follow-up owner for caregivers-29',
    ],
    dependsOn: ['caregivers-task-028'],
  },
  {
    id: 'caregivers-task-030',
    title: 'Confirm consent / privacy flags (Caregivers #30)',
    description: 'CareNest operational task for caregivers: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm caregivers context #30',
      'Capture outcome for caregivers task 30',
      'Log follow-up owner for caregivers-30',
    ],
    dependsOn: ['caregivers-task-029'],
  },
  {
    id: 'caregivers-task-031',
    title: 'Run compliance checklist (Caregivers #31)',
    description: 'CareNest operational task for caregivers: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm caregivers context #31',
      'Capture outcome for caregivers task 31',
      'Log follow-up owner for caregivers-31',
    ],
    dependsOn: ['caregivers-task-030'],
  },
  {
    id: 'caregivers-task-032',
    title: 'Update risk scores (Caregivers #32)',
    description: 'CareNest operational task for caregivers: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm caregivers context #32',
      'Capture outcome for caregivers task 32',
      'Log follow-up owner for caregivers-32',
    ],
    dependsOn: ['caregivers-task-031'],
  },
  {
    id: 'caregivers-task-033',
    title: 'Notify on-call clinician (Caregivers #33)',
    description: 'CareNest operational task for caregivers: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm caregivers context #33',
      'Capture outcome for caregivers task 33',
      'Log follow-up owner for caregivers-33',
    ],
    dependsOn: ['caregivers-task-032'],
  },
  {
    id: 'caregivers-task-034',
    title: 'Archive stale drafts (Caregivers #34)',
    description: 'CareNest operational task for caregivers: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm caregivers context #34',
      'Capture outcome for caregivers task 34',
      'Log follow-up owner for caregivers-34',
    ],
    dependsOn: ['caregivers-task-033'],
  },
  {
    id: 'caregivers-task-035',
    title: 'Export weekly digest (Caregivers #35)',
    description: 'CareNest operational task for caregivers: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm caregivers context #35',
      'Capture outcome for caregivers task 35',
      'Log follow-up owner for caregivers-35',
    ],
    dependsOn: ['caregivers-task-034'],
  },
  {
    id: 'caregivers-task-036',
    title: 'Train new caregiver on module (Caregivers #36)',
    description: 'CareNest operational task for caregivers: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm caregivers context #36',
      'Capture outcome for caregivers task 36',
      'Log follow-up owner for caregivers-36',
    ],
    dependsOn: ['caregivers-task-035'],
  },
  {
    id: 'caregivers-task-037',
    title: 'Verify device integrations (Caregivers #37)',
    description: 'CareNest operational task for caregivers: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm caregivers context #37',
      'Capture outcome for caregivers task 37',
      'Log follow-up owner for caregivers-37',
    ],
    dependsOn: ['caregivers-task-036'],
  },
  {
    id: 'caregivers-task-038',
    title: 'Spot-check critical priorities (Caregivers #38)',
    description: 'CareNest operational task for caregivers: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm caregivers context #38',
      'Capture outcome for caregivers task 38',
      'Log follow-up owner for caregivers-38',
    ],
    dependsOn: ['caregivers-task-037'],
  },
  {
    id: 'caregivers-task-039',
    title: 'Align meal / care constraints (Caregivers #39)',
    description: 'CareNest operational task for caregivers: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm caregivers context #39',
      'Capture outcome for caregivers task 39',
      'Log follow-up owner for caregivers-39',
    ],
    dependsOn: ['caregivers-task-038'],
  },
  {
    id: 'caregivers-task-040',
    title: 'Publish dashboard widgets (Caregivers #40)',
    description: 'CareNest operational task for caregivers: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm caregivers context #40',
      'Capture outcome for caregivers task 40',
      'Log follow-up owner for caregivers-40',
    ],
    dependsOn: ['caregivers-task-039'],
  },
  {
    id: 'caregivers-task-041',
    title: 'Review overnight notes (Caregivers #41)',
    description: 'CareNest operational task for caregivers: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm caregivers context #41',
      'Capture outcome for caregivers task 41',
      'Log follow-up owner for caregivers-41',
    ],
    dependsOn: ['caregivers-task-040'],
  },
  {
    id: 'caregivers-task-042',
    title: 'Reconcile open items (Caregivers #42)',
    description: 'CareNest operational task for caregivers: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm caregivers context #42',
      'Capture outcome for caregivers task 42',
      'Log follow-up owner for caregivers-42',
    ],
    dependsOn: ['caregivers-task-041'],
  },
  {
    id: 'caregivers-task-043',
    title: 'Escalate overdue cases (Caregivers #43)',
    description: 'CareNest operational task for caregivers: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm caregivers context #43',
      'Capture outcome for caregivers task 43',
      'Log follow-up owner for caregivers-43',
    ],
    dependsOn: ['caregivers-task-042'],
  },
  {
    id: 'caregivers-task-044',
    title: 'Prepare family update (Caregivers #44)',
    description: 'CareNest operational task for caregivers: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm caregivers context #44',
      'Capture outcome for caregivers task 44',
      'Log follow-up owner for caregivers-44',
    ],
    dependsOn: ['caregivers-task-043'],
  },
  {
    id: 'caregivers-task-045',
    title: 'Audit documentation completeness (Caregivers #45)',
    description: 'CareNest operational task for caregivers: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm caregivers context #45',
      'Capture outcome for caregivers task 45',
      'Log follow-up owner for caregivers-45',
    ],
    dependsOn: ['caregivers-task-044'],
  },
  {
    id: 'caregivers-task-046',
    title: 'Sync with pharmacy / vendor (Caregivers #46)',
    description: 'CareNest operational task for caregivers: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm caregivers context #46',
      'Capture outcome for caregivers task 46',
      'Log follow-up owner for caregivers-46',
    ],
    dependsOn: ['caregivers-task-045'],
  },
  {
    id: 'caregivers-task-047',
    title: 'Validate schedule conflicts (Caregivers #47)',
    description: 'CareNest operational task for caregivers: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm caregivers context #47',
      'Capture outcome for caregivers task 47',
      'Log follow-up owner for caregivers-47',
    ],
    dependsOn: ['caregivers-task-046'],
  },
  {
    id: 'caregivers-task-048',
    title: 'Close completed workflows (Caregivers #48)',
    description: 'CareNest operational task for caregivers: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm caregivers context #48',
      'Capture outcome for caregivers task 48',
      'Log follow-up owner for caregivers-48',
    ],
    dependsOn: ['caregivers-task-047'],
  },
  {
    id: 'caregivers-task-049',
    title: 'Generate shift handoff summary (Caregivers #49)',
    description: 'CareNest operational task for caregivers: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm caregivers context #49',
      'Capture outcome for caregivers task 49',
      'Log follow-up owner for caregivers-49',
    ],
    dependsOn: ['caregivers-task-048'],
  },
  {
    id: 'caregivers-task-050',
    title: 'Confirm consent / privacy flags (Caregivers #50)',
    description: 'CareNest operational task for caregivers: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm caregivers context #50',
      'Capture outcome for caregivers task 50',
      'Log follow-up owner for caregivers-50',
    ],
    dependsOn: ['caregivers-task-049'],
  },
  {
    id: 'caregivers-task-051',
    title: 'Run compliance checklist (Caregivers #51)',
    description: 'CareNest operational task for caregivers: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm caregivers context #51',
      'Capture outcome for caregivers task 51',
      'Log follow-up owner for caregivers-51',
    ],
    dependsOn: ['caregivers-task-050'],
  },
  {
    id: 'caregivers-task-052',
    title: 'Update risk scores (Caregivers #52)',
    description: 'CareNest operational task for caregivers: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm caregivers context #52',
      'Capture outcome for caregivers task 52',
      'Log follow-up owner for caregivers-52',
    ],
    dependsOn: ['caregivers-task-051'],
  },
  {
    id: 'caregivers-task-053',
    title: 'Notify on-call clinician (Caregivers #53)',
    description: 'CareNest operational task for caregivers: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm caregivers context #53',
      'Capture outcome for caregivers task 53',
      'Log follow-up owner for caregivers-53',
    ],
    dependsOn: ['caregivers-task-052'],
  },
  {
    id: 'caregivers-task-054',
    title: 'Archive stale drafts (Caregivers #54)',
    description: 'CareNest operational task for caregivers: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm caregivers context #54',
      'Capture outcome for caregivers task 54',
      'Log follow-up owner for caregivers-54',
    ],
    dependsOn: ['caregivers-task-053'],
  },
  {
    id: 'caregivers-task-055',
    title: 'Export weekly digest (Caregivers #55)',
    description: 'CareNest operational task for caregivers: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm caregivers context #55',
      'Capture outcome for caregivers task 55',
      'Log follow-up owner for caregivers-55',
    ],
    dependsOn: ['caregivers-task-054'],
  },
  {
    id: 'caregivers-task-056',
    title: 'Train new caregiver on module (Caregivers #56)',
    description: 'CareNest operational task for caregivers: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm caregivers context #56',
      'Capture outcome for caregivers task 56',
      'Log follow-up owner for caregivers-56',
    ],
    dependsOn: ['caregivers-task-055'],
  },
  {
    id: 'caregivers-task-057',
    title: 'Verify device integrations (Caregivers #57)',
    description: 'CareNest operational task for caregivers: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm caregivers context #57',
      'Capture outcome for caregivers task 57',
      'Log follow-up owner for caregivers-57',
    ],
    dependsOn: ['caregivers-task-056'],
  },
  {
    id: 'caregivers-task-058',
    title: 'Spot-check critical priorities (Caregivers #58)',
    description: 'CareNest operational task for caregivers: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm caregivers context #58',
      'Capture outcome for caregivers task 58',
      'Log follow-up owner for caregivers-58',
    ],
    dependsOn: ['caregivers-task-057'],
  },
  {
    id: 'caregivers-task-059',
    title: 'Align meal / care constraints (Caregivers #59)',
    description: 'CareNest operational task for caregivers: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm caregivers context #59',
      'Capture outcome for caregivers task 59',
      'Log follow-up owner for caregivers-59',
    ],
    dependsOn: ['caregivers-task-058'],
  },
  {
    id: 'caregivers-task-060',
    title: 'Publish dashboard widgets (Caregivers #60)',
    description: 'CareNest operational task for caregivers: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm caregivers context #60',
      'Capture outcome for caregivers task 60',
      'Log follow-up owner for caregivers-60',
    ],
    dependsOn: ['caregivers-task-059'],
  },
  {
    id: 'caregivers-task-061',
    title: 'Review overnight notes (Caregivers #61)',
    description: 'CareNest operational task for caregivers: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm caregivers context #61',
      'Capture outcome for caregivers task 61',
      'Log follow-up owner for caregivers-61',
    ],
    dependsOn: ['caregivers-task-060'],
  },
  {
    id: 'caregivers-task-062',
    title: 'Reconcile open items (Caregivers #62)',
    description: 'CareNest operational task for caregivers: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm caregivers context #62',
      'Capture outcome for caregivers task 62',
      'Log follow-up owner for caregivers-62',
    ],
    dependsOn: ['caregivers-task-061'],
  },
  {
    id: 'caregivers-task-063',
    title: 'Escalate overdue cases (Caregivers #63)',
    description: 'CareNest operational task for caregivers: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm caregivers context #63',
      'Capture outcome for caregivers task 63',
      'Log follow-up owner for caregivers-63',
    ],
    dependsOn: ['caregivers-task-062'],
  },
  {
    id: 'caregivers-task-064',
    title: 'Prepare family update (Caregivers #64)',
    description: 'CareNest operational task for caregivers: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm caregivers context #64',
      'Capture outcome for caregivers task 64',
      'Log follow-up owner for caregivers-64',
    ],
    dependsOn: ['caregivers-task-063'],
  },
  {
    id: 'caregivers-task-065',
    title: 'Audit documentation completeness (Caregivers #65)',
    description: 'CareNest operational task for caregivers: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm caregivers context #65',
      'Capture outcome for caregivers task 65',
      'Log follow-up owner for caregivers-65',
    ],
    dependsOn: ['caregivers-task-064'],
  },
  {
    id: 'caregivers-task-066',
    title: 'Sync with pharmacy / vendor (Caregivers #66)',
    description: 'CareNest operational task for caregivers: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm caregivers context #66',
      'Capture outcome for caregivers task 66',
      'Log follow-up owner for caregivers-66',
    ],
    dependsOn: ['caregivers-task-065'],
  },
  {
    id: 'caregivers-task-067',
    title: 'Validate schedule conflicts (Caregivers #67)',
    description: 'CareNest operational task for caregivers: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm caregivers context #67',
      'Capture outcome for caregivers task 67',
      'Log follow-up owner for caregivers-67',
    ],
    dependsOn: ['caregivers-task-066'],
  },
  {
    id: 'caregivers-task-068',
    title: 'Close completed workflows (Caregivers #68)',
    description: 'CareNest operational task for caregivers: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm caregivers context #68',
      'Capture outcome for caregivers task 68',
      'Log follow-up owner for caregivers-68',
    ],
    dependsOn: ['caregivers-task-067'],
  },
  {
    id: 'caregivers-task-069',
    title: 'Generate shift handoff summary (Caregivers #69)',
    description: 'CareNest operational task for caregivers: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm caregivers context #69',
      'Capture outcome for caregivers task 69',
      'Log follow-up owner for caregivers-69',
    ],
    dependsOn: ['caregivers-task-068'],
  },
  {
    id: 'caregivers-task-070',
    title: 'Confirm consent / privacy flags (Caregivers #70)',
    description: 'CareNest operational task for caregivers: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm caregivers context #70',
      'Capture outcome for caregivers task 70',
      'Log follow-up owner for caregivers-70',
    ],
    dependsOn: ['caregivers-task-069'],
  },
  {
    id: 'caregivers-task-071',
    title: 'Run compliance checklist (Caregivers #71)',
    description: 'CareNest operational task for caregivers: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm caregivers context #71',
      'Capture outcome for caregivers task 71',
      'Log follow-up owner for caregivers-71',
    ],
    dependsOn: ['caregivers-task-070'],
  },
  {
    id: 'caregivers-task-072',
    title: 'Update risk scores (Caregivers #72)',
    description: 'CareNest operational task for caregivers: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm caregivers context #72',
      'Capture outcome for caregivers task 72',
      'Log follow-up owner for caregivers-72',
    ],
    dependsOn: ['caregivers-task-071'],
  },
  {
    id: 'caregivers-task-073',
    title: 'Notify on-call clinician (Caregivers #73)',
    description: 'CareNest operational task for caregivers: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm caregivers context #73',
      'Capture outcome for caregivers task 73',
      'Log follow-up owner for caregivers-73',
    ],
    dependsOn: ['caregivers-task-072'],
  },
  {
    id: 'caregivers-task-074',
    title: 'Archive stale drafts (Caregivers #74)',
    description: 'CareNest operational task for caregivers: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm caregivers context #74',
      'Capture outcome for caregivers task 74',
      'Log follow-up owner for caregivers-74',
    ],
    dependsOn: ['caregivers-task-073'],
  },
  {
    id: 'caregivers-task-075',
    title: 'Export weekly digest (Caregivers #75)',
    description: 'CareNest operational task for caregivers: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm caregivers context #75',
      'Capture outcome for caregivers task 75',
      'Log follow-up owner for caregivers-75',
    ],
    dependsOn: ['caregivers-task-074'],
  },
  {
    id: 'caregivers-task-076',
    title: 'Train new caregiver on module (Caregivers #76)',
    description: 'CareNest operational task for caregivers: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm caregivers context #76',
      'Capture outcome for caregivers task 76',
      'Log follow-up owner for caregivers-76',
    ],
    dependsOn: ['caregivers-task-075'],
  },
  {
    id: 'caregivers-task-077',
    title: 'Verify device integrations (Caregivers #77)',
    description: 'CareNest operational task for caregivers: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm caregivers context #77',
      'Capture outcome for caregivers task 77',
      'Log follow-up owner for caregivers-77',
    ],
    dependsOn: ['caregivers-task-076'],
  },
  {
    id: 'caregivers-task-078',
    title: 'Spot-check critical priorities (Caregivers #78)',
    description: 'CareNest operational task for caregivers: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm caregivers context #78',
      'Capture outcome for caregivers task 78',
      'Log follow-up owner for caregivers-78',
    ],
    dependsOn: ['caregivers-task-077'],
  },
  {
    id: 'caregivers-task-079',
    title: 'Align meal / care constraints (Caregivers #79)',
    description: 'CareNest operational task for caregivers: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm caregivers context #79',
      'Capture outcome for caregivers task 79',
      'Log follow-up owner for caregivers-79',
    ],
    dependsOn: ['caregivers-task-078'],
  },
  {
    id: 'caregivers-task-080',
    title: 'Publish dashboard widgets (Caregivers #80)',
    description: 'CareNest operational task for caregivers: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm caregivers context #80',
      'Capture outcome for caregivers task 80',
      'Log follow-up owner for caregivers-80',
    ],
    dependsOn: ['caregivers-task-079'],
  },
];

export function listOpenCaregiversTasks(): CaregiversTask[] {
  return caregiversTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countCaregiversTasksByState(): Record<CaregiversTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of caregiversTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateCaregiversWorkload1(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateCaregiversWorkload2(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateCaregiversWorkload3(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateCaregiversWorkload4(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateCaregiversWorkload5(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateCaregiversWorkload6(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateCaregiversWorkload7(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateCaregiversWorkload8(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateCaregiversWorkload9(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateCaregiversWorkload10(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateCaregiversWorkload11(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateCaregiversWorkload12(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateCaregiversWorkload13(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateCaregiversWorkload14(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateCaregiversWorkload15(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateCaregiversWorkload16(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateCaregiversWorkload17(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateCaregiversWorkload18(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateCaregiversWorkload19(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateCaregiversWorkload20(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateCaregiversWorkload21(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateCaregiversWorkload22(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateCaregiversWorkload23(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateCaregiversWorkload24(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateCaregiversWorkload25(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateCaregiversWorkload26(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateCaregiversWorkload27(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateCaregiversWorkload28(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateCaregiversWorkload29(tasks: CaregiversTask[] = caregiversTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
