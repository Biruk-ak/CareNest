/** Operational task catalog for Housing */

export type HousingTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface HousingTask {
  id: string;
  title: string;
  description: string;
  state: HousingTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const housingTaskCatalog: HousingTask[] = [
  {
    id: 'housing-task-001',
    title: 'Review overnight notes (Housing #1)',
    description: 'CareNest operational task for housing: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm housing context #1',
      'Capture outcome for housing task 1',
      'Log follow-up owner for housing-1',
    ],
    dependsOn: [],
  },
  {
    id: 'housing-task-002',
    title: 'Reconcile open items (Housing #2)',
    description: 'CareNest operational task for housing: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm housing context #2',
      'Capture outcome for housing task 2',
      'Log follow-up owner for housing-2',
    ],
    dependsOn: ['housing-task-001'],
  },
  {
    id: 'housing-task-003',
    title: 'Escalate overdue cases (Housing #3)',
    description: 'CareNest operational task for housing: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm housing context #3',
      'Capture outcome for housing task 3',
      'Log follow-up owner for housing-3',
    ],
    dependsOn: ['housing-task-002'],
  },
  {
    id: 'housing-task-004',
    title: 'Prepare family update (Housing #4)',
    description: 'CareNest operational task for housing: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm housing context #4',
      'Capture outcome for housing task 4',
      'Log follow-up owner for housing-4',
    ],
    dependsOn: ['housing-task-003'],
  },
  {
    id: 'housing-task-005',
    title: 'Audit documentation completeness (Housing #5)',
    description: 'CareNest operational task for housing: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm housing context #5',
      'Capture outcome for housing task 5',
      'Log follow-up owner for housing-5',
    ],
    dependsOn: ['housing-task-004'],
  },
  {
    id: 'housing-task-006',
    title: 'Sync with pharmacy / vendor (Housing #6)',
    description: 'CareNest operational task for housing: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm housing context #6',
      'Capture outcome for housing task 6',
      'Log follow-up owner for housing-6',
    ],
    dependsOn: ['housing-task-005'],
  },
  {
    id: 'housing-task-007',
    title: 'Validate schedule conflicts (Housing #7)',
    description: 'CareNest operational task for housing: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm housing context #7',
      'Capture outcome for housing task 7',
      'Log follow-up owner for housing-7',
    ],
    dependsOn: ['housing-task-006'],
  },
  {
    id: 'housing-task-008',
    title: 'Close completed workflows (Housing #8)',
    description: 'CareNest operational task for housing: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm housing context #8',
      'Capture outcome for housing task 8',
      'Log follow-up owner for housing-8',
    ],
    dependsOn: ['housing-task-007'],
  },
  {
    id: 'housing-task-009',
    title: 'Generate shift handoff summary (Housing #9)',
    description: 'CareNest operational task for housing: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm housing context #9',
      'Capture outcome for housing task 9',
      'Log follow-up owner for housing-9',
    ],
    dependsOn: ['housing-task-008'],
  },
  {
    id: 'housing-task-010',
    title: 'Confirm consent / privacy flags (Housing #10)',
    description: 'CareNest operational task for housing: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm housing context #10',
      'Capture outcome for housing task 10',
      'Log follow-up owner for housing-10',
    ],
    dependsOn: ['housing-task-009'],
  },
  {
    id: 'housing-task-011',
    title: 'Run compliance checklist (Housing #11)',
    description: 'CareNest operational task for housing: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm housing context #11',
      'Capture outcome for housing task 11',
      'Log follow-up owner for housing-11',
    ],
    dependsOn: ['housing-task-010'],
  },
  {
    id: 'housing-task-012',
    title: 'Update risk scores (Housing #12)',
    description: 'CareNest operational task for housing: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm housing context #12',
      'Capture outcome for housing task 12',
      'Log follow-up owner for housing-12',
    ],
    dependsOn: ['housing-task-011'],
  },
  {
    id: 'housing-task-013',
    title: 'Notify on-call clinician (Housing #13)',
    description: 'CareNest operational task for housing: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm housing context #13',
      'Capture outcome for housing task 13',
      'Log follow-up owner for housing-13',
    ],
    dependsOn: ['housing-task-012'],
  },
  {
    id: 'housing-task-014',
    title: 'Archive stale drafts (Housing #14)',
    description: 'CareNest operational task for housing: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm housing context #14',
      'Capture outcome for housing task 14',
      'Log follow-up owner for housing-14',
    ],
    dependsOn: ['housing-task-013'],
  },
  {
    id: 'housing-task-015',
    title: 'Export weekly digest (Housing #15)',
    description: 'CareNest operational task for housing: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm housing context #15',
      'Capture outcome for housing task 15',
      'Log follow-up owner for housing-15',
    ],
    dependsOn: ['housing-task-014'],
  },
  {
    id: 'housing-task-016',
    title: 'Train new caregiver on module (Housing #16)',
    description: 'CareNest operational task for housing: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm housing context #16',
      'Capture outcome for housing task 16',
      'Log follow-up owner for housing-16',
    ],
    dependsOn: ['housing-task-015'],
  },
  {
    id: 'housing-task-017',
    title: 'Verify device integrations (Housing #17)',
    description: 'CareNest operational task for housing: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm housing context #17',
      'Capture outcome for housing task 17',
      'Log follow-up owner for housing-17',
    ],
    dependsOn: ['housing-task-016'],
  },
  {
    id: 'housing-task-018',
    title: 'Spot-check critical priorities (Housing #18)',
    description: 'CareNest operational task for housing: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm housing context #18',
      'Capture outcome for housing task 18',
      'Log follow-up owner for housing-18',
    ],
    dependsOn: ['housing-task-017'],
  },
  {
    id: 'housing-task-019',
    title: 'Align meal / care constraints (Housing #19)',
    description: 'CareNest operational task for housing: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm housing context #19',
      'Capture outcome for housing task 19',
      'Log follow-up owner for housing-19',
    ],
    dependsOn: ['housing-task-018'],
  },
  {
    id: 'housing-task-020',
    title: 'Publish dashboard widgets (Housing #20)',
    description: 'CareNest operational task for housing: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm housing context #20',
      'Capture outcome for housing task 20',
      'Log follow-up owner for housing-20',
    ],
    dependsOn: ['housing-task-019'],
  },
  {
    id: 'housing-task-021',
    title: 'Review overnight notes (Housing #21)',
    description: 'CareNest operational task for housing: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm housing context #21',
      'Capture outcome for housing task 21',
      'Log follow-up owner for housing-21',
    ],
    dependsOn: ['housing-task-020'],
  },
  {
    id: 'housing-task-022',
    title: 'Reconcile open items (Housing #22)',
    description: 'CareNest operational task for housing: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm housing context #22',
      'Capture outcome for housing task 22',
      'Log follow-up owner for housing-22',
    ],
    dependsOn: ['housing-task-021'],
  },
  {
    id: 'housing-task-023',
    title: 'Escalate overdue cases (Housing #23)',
    description: 'CareNest operational task for housing: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm housing context #23',
      'Capture outcome for housing task 23',
      'Log follow-up owner for housing-23',
    ],
    dependsOn: ['housing-task-022'],
  },
  {
    id: 'housing-task-024',
    title: 'Prepare family update (Housing #24)',
    description: 'CareNest operational task for housing: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm housing context #24',
      'Capture outcome for housing task 24',
      'Log follow-up owner for housing-24',
    ],
    dependsOn: ['housing-task-023'],
  },
  {
    id: 'housing-task-025',
    title: 'Audit documentation completeness (Housing #25)',
    description: 'CareNest operational task for housing: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm housing context #25',
      'Capture outcome for housing task 25',
      'Log follow-up owner for housing-25',
    ],
    dependsOn: ['housing-task-024'],
  },
  {
    id: 'housing-task-026',
    title: 'Sync with pharmacy / vendor (Housing #26)',
    description: 'CareNest operational task for housing: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm housing context #26',
      'Capture outcome for housing task 26',
      'Log follow-up owner for housing-26',
    ],
    dependsOn: ['housing-task-025'],
  },
  {
    id: 'housing-task-027',
    title: 'Validate schedule conflicts (Housing #27)',
    description: 'CareNest operational task for housing: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm housing context #27',
      'Capture outcome for housing task 27',
      'Log follow-up owner for housing-27',
    ],
    dependsOn: ['housing-task-026'],
  },
  {
    id: 'housing-task-028',
    title: 'Close completed workflows (Housing #28)',
    description: 'CareNest operational task for housing: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm housing context #28',
      'Capture outcome for housing task 28',
      'Log follow-up owner for housing-28',
    ],
    dependsOn: ['housing-task-027'],
  },
  {
    id: 'housing-task-029',
    title: 'Generate shift handoff summary (Housing #29)',
    description: 'CareNest operational task for housing: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm housing context #29',
      'Capture outcome for housing task 29',
      'Log follow-up owner for housing-29',
    ],
    dependsOn: ['housing-task-028'],
  },
  {
    id: 'housing-task-030',
    title: 'Confirm consent / privacy flags (Housing #30)',
    description: 'CareNest operational task for housing: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm housing context #30',
      'Capture outcome for housing task 30',
      'Log follow-up owner for housing-30',
    ],
    dependsOn: ['housing-task-029'],
  },
  {
    id: 'housing-task-031',
    title: 'Run compliance checklist (Housing #31)',
    description: 'CareNest operational task for housing: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm housing context #31',
      'Capture outcome for housing task 31',
      'Log follow-up owner for housing-31',
    ],
    dependsOn: ['housing-task-030'],
  },
  {
    id: 'housing-task-032',
    title: 'Update risk scores (Housing #32)',
    description: 'CareNest operational task for housing: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm housing context #32',
      'Capture outcome for housing task 32',
      'Log follow-up owner for housing-32',
    ],
    dependsOn: ['housing-task-031'],
  },
  {
    id: 'housing-task-033',
    title: 'Notify on-call clinician (Housing #33)',
    description: 'CareNest operational task for housing: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm housing context #33',
      'Capture outcome for housing task 33',
      'Log follow-up owner for housing-33',
    ],
    dependsOn: ['housing-task-032'],
  },
  {
    id: 'housing-task-034',
    title: 'Archive stale drafts (Housing #34)',
    description: 'CareNest operational task for housing: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm housing context #34',
      'Capture outcome for housing task 34',
      'Log follow-up owner for housing-34',
    ],
    dependsOn: ['housing-task-033'],
  },
  {
    id: 'housing-task-035',
    title: 'Export weekly digest (Housing #35)',
    description: 'CareNest operational task for housing: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm housing context #35',
      'Capture outcome for housing task 35',
      'Log follow-up owner for housing-35',
    ],
    dependsOn: ['housing-task-034'],
  },
  {
    id: 'housing-task-036',
    title: 'Train new caregiver on module (Housing #36)',
    description: 'CareNest operational task for housing: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm housing context #36',
      'Capture outcome for housing task 36',
      'Log follow-up owner for housing-36',
    ],
    dependsOn: ['housing-task-035'],
  },
  {
    id: 'housing-task-037',
    title: 'Verify device integrations (Housing #37)',
    description: 'CareNest operational task for housing: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm housing context #37',
      'Capture outcome for housing task 37',
      'Log follow-up owner for housing-37',
    ],
    dependsOn: ['housing-task-036'],
  },
  {
    id: 'housing-task-038',
    title: 'Spot-check critical priorities (Housing #38)',
    description: 'CareNest operational task for housing: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm housing context #38',
      'Capture outcome for housing task 38',
      'Log follow-up owner for housing-38',
    ],
    dependsOn: ['housing-task-037'],
  },
  {
    id: 'housing-task-039',
    title: 'Align meal / care constraints (Housing #39)',
    description: 'CareNest operational task for housing: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm housing context #39',
      'Capture outcome for housing task 39',
      'Log follow-up owner for housing-39',
    ],
    dependsOn: ['housing-task-038'],
  },
  {
    id: 'housing-task-040',
    title: 'Publish dashboard widgets (Housing #40)',
    description: 'CareNest operational task for housing: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm housing context #40',
      'Capture outcome for housing task 40',
      'Log follow-up owner for housing-40',
    ],
    dependsOn: ['housing-task-039'],
  },
  {
    id: 'housing-task-041',
    title: 'Review overnight notes (Housing #41)',
    description: 'CareNest operational task for housing: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm housing context #41',
      'Capture outcome for housing task 41',
      'Log follow-up owner for housing-41',
    ],
    dependsOn: ['housing-task-040'],
  },
  {
    id: 'housing-task-042',
    title: 'Reconcile open items (Housing #42)',
    description: 'CareNest operational task for housing: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm housing context #42',
      'Capture outcome for housing task 42',
      'Log follow-up owner for housing-42',
    ],
    dependsOn: ['housing-task-041'],
  },
  {
    id: 'housing-task-043',
    title: 'Escalate overdue cases (Housing #43)',
    description: 'CareNest operational task for housing: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm housing context #43',
      'Capture outcome for housing task 43',
      'Log follow-up owner for housing-43',
    ],
    dependsOn: ['housing-task-042'],
  },
  {
    id: 'housing-task-044',
    title: 'Prepare family update (Housing #44)',
    description: 'CareNest operational task for housing: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm housing context #44',
      'Capture outcome for housing task 44',
      'Log follow-up owner for housing-44',
    ],
    dependsOn: ['housing-task-043'],
  },
  {
    id: 'housing-task-045',
    title: 'Audit documentation completeness (Housing #45)',
    description: 'CareNest operational task for housing: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm housing context #45',
      'Capture outcome for housing task 45',
      'Log follow-up owner for housing-45',
    ],
    dependsOn: ['housing-task-044'],
  },
  {
    id: 'housing-task-046',
    title: 'Sync with pharmacy / vendor (Housing #46)',
    description: 'CareNest operational task for housing: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm housing context #46',
      'Capture outcome for housing task 46',
      'Log follow-up owner for housing-46',
    ],
    dependsOn: ['housing-task-045'],
  },
  {
    id: 'housing-task-047',
    title: 'Validate schedule conflicts (Housing #47)',
    description: 'CareNest operational task for housing: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm housing context #47',
      'Capture outcome for housing task 47',
      'Log follow-up owner for housing-47',
    ],
    dependsOn: ['housing-task-046'],
  },
  {
    id: 'housing-task-048',
    title: 'Close completed workflows (Housing #48)',
    description: 'CareNest operational task for housing: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm housing context #48',
      'Capture outcome for housing task 48',
      'Log follow-up owner for housing-48',
    ],
    dependsOn: ['housing-task-047'],
  },
  {
    id: 'housing-task-049',
    title: 'Generate shift handoff summary (Housing #49)',
    description: 'CareNest operational task for housing: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm housing context #49',
      'Capture outcome for housing task 49',
      'Log follow-up owner for housing-49',
    ],
    dependsOn: ['housing-task-048'],
  },
  {
    id: 'housing-task-050',
    title: 'Confirm consent / privacy flags (Housing #50)',
    description: 'CareNest operational task for housing: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm housing context #50',
      'Capture outcome for housing task 50',
      'Log follow-up owner for housing-50',
    ],
    dependsOn: ['housing-task-049'],
  },
  {
    id: 'housing-task-051',
    title: 'Run compliance checklist (Housing #51)',
    description: 'CareNest operational task for housing: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm housing context #51',
      'Capture outcome for housing task 51',
      'Log follow-up owner for housing-51',
    ],
    dependsOn: ['housing-task-050'],
  },
  {
    id: 'housing-task-052',
    title: 'Update risk scores (Housing #52)',
    description: 'CareNest operational task for housing: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm housing context #52',
      'Capture outcome for housing task 52',
      'Log follow-up owner for housing-52',
    ],
    dependsOn: ['housing-task-051'],
  },
  {
    id: 'housing-task-053',
    title: 'Notify on-call clinician (Housing #53)',
    description: 'CareNest operational task for housing: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm housing context #53',
      'Capture outcome for housing task 53',
      'Log follow-up owner for housing-53',
    ],
    dependsOn: ['housing-task-052'],
  },
  {
    id: 'housing-task-054',
    title: 'Archive stale drafts (Housing #54)',
    description: 'CareNest operational task for housing: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm housing context #54',
      'Capture outcome for housing task 54',
      'Log follow-up owner for housing-54',
    ],
    dependsOn: ['housing-task-053'],
  },
  {
    id: 'housing-task-055',
    title: 'Export weekly digest (Housing #55)',
    description: 'CareNest operational task for housing: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm housing context #55',
      'Capture outcome for housing task 55',
      'Log follow-up owner for housing-55',
    ],
    dependsOn: ['housing-task-054'],
  },
  {
    id: 'housing-task-056',
    title: 'Train new caregiver on module (Housing #56)',
    description: 'CareNest operational task for housing: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm housing context #56',
      'Capture outcome for housing task 56',
      'Log follow-up owner for housing-56',
    ],
    dependsOn: ['housing-task-055'],
  },
  {
    id: 'housing-task-057',
    title: 'Verify device integrations (Housing #57)',
    description: 'CareNest operational task for housing: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm housing context #57',
      'Capture outcome for housing task 57',
      'Log follow-up owner for housing-57',
    ],
    dependsOn: ['housing-task-056'],
  },
  {
    id: 'housing-task-058',
    title: 'Spot-check critical priorities (Housing #58)',
    description: 'CareNest operational task for housing: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm housing context #58',
      'Capture outcome for housing task 58',
      'Log follow-up owner for housing-58',
    ],
    dependsOn: ['housing-task-057'],
  },
  {
    id: 'housing-task-059',
    title: 'Align meal / care constraints (Housing #59)',
    description: 'CareNest operational task for housing: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm housing context #59',
      'Capture outcome for housing task 59',
      'Log follow-up owner for housing-59',
    ],
    dependsOn: ['housing-task-058'],
  },
  {
    id: 'housing-task-060',
    title: 'Publish dashboard widgets (Housing #60)',
    description: 'CareNest operational task for housing: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm housing context #60',
      'Capture outcome for housing task 60',
      'Log follow-up owner for housing-60',
    ],
    dependsOn: ['housing-task-059'],
  },
  {
    id: 'housing-task-061',
    title: 'Review overnight notes (Housing #61)',
    description: 'CareNest operational task for housing: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm housing context #61',
      'Capture outcome for housing task 61',
      'Log follow-up owner for housing-61',
    ],
    dependsOn: ['housing-task-060'],
  },
  {
    id: 'housing-task-062',
    title: 'Reconcile open items (Housing #62)',
    description: 'CareNest operational task for housing: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm housing context #62',
      'Capture outcome for housing task 62',
      'Log follow-up owner for housing-62',
    ],
    dependsOn: ['housing-task-061'],
  },
  {
    id: 'housing-task-063',
    title: 'Escalate overdue cases (Housing #63)',
    description: 'CareNest operational task for housing: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm housing context #63',
      'Capture outcome for housing task 63',
      'Log follow-up owner for housing-63',
    ],
    dependsOn: ['housing-task-062'],
  },
  {
    id: 'housing-task-064',
    title: 'Prepare family update (Housing #64)',
    description: 'CareNest operational task for housing: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm housing context #64',
      'Capture outcome for housing task 64',
      'Log follow-up owner for housing-64',
    ],
    dependsOn: ['housing-task-063'],
  },
  {
    id: 'housing-task-065',
    title: 'Audit documentation completeness (Housing #65)',
    description: 'CareNest operational task for housing: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm housing context #65',
      'Capture outcome for housing task 65',
      'Log follow-up owner for housing-65',
    ],
    dependsOn: ['housing-task-064'],
  },
  {
    id: 'housing-task-066',
    title: 'Sync with pharmacy / vendor (Housing #66)',
    description: 'CareNest operational task for housing: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm housing context #66',
      'Capture outcome for housing task 66',
      'Log follow-up owner for housing-66',
    ],
    dependsOn: ['housing-task-065'],
  },
  {
    id: 'housing-task-067',
    title: 'Validate schedule conflicts (Housing #67)',
    description: 'CareNest operational task for housing: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm housing context #67',
      'Capture outcome for housing task 67',
      'Log follow-up owner for housing-67',
    ],
    dependsOn: ['housing-task-066'],
  },
  {
    id: 'housing-task-068',
    title: 'Close completed workflows (Housing #68)',
    description: 'CareNest operational task for housing: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm housing context #68',
      'Capture outcome for housing task 68',
      'Log follow-up owner for housing-68',
    ],
    dependsOn: ['housing-task-067'],
  },
  {
    id: 'housing-task-069',
    title: 'Generate shift handoff summary (Housing #69)',
    description: 'CareNest operational task for housing: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm housing context #69',
      'Capture outcome for housing task 69',
      'Log follow-up owner for housing-69',
    ],
    dependsOn: ['housing-task-068'],
  },
  {
    id: 'housing-task-070',
    title: 'Confirm consent / privacy flags (Housing #70)',
    description: 'CareNest operational task for housing: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm housing context #70',
      'Capture outcome for housing task 70',
      'Log follow-up owner for housing-70',
    ],
    dependsOn: ['housing-task-069'],
  },
  {
    id: 'housing-task-071',
    title: 'Run compliance checklist (Housing #71)',
    description: 'CareNest operational task for housing: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm housing context #71',
      'Capture outcome for housing task 71',
      'Log follow-up owner for housing-71',
    ],
    dependsOn: ['housing-task-070'],
  },
  {
    id: 'housing-task-072',
    title: 'Update risk scores (Housing #72)',
    description: 'CareNest operational task for housing: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm housing context #72',
      'Capture outcome for housing task 72',
      'Log follow-up owner for housing-72',
    ],
    dependsOn: ['housing-task-071'],
  },
  {
    id: 'housing-task-073',
    title: 'Notify on-call clinician (Housing #73)',
    description: 'CareNest operational task for housing: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm housing context #73',
      'Capture outcome for housing task 73',
      'Log follow-up owner for housing-73',
    ],
    dependsOn: ['housing-task-072'],
  },
  {
    id: 'housing-task-074',
    title: 'Archive stale drafts (Housing #74)',
    description: 'CareNest operational task for housing: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm housing context #74',
      'Capture outcome for housing task 74',
      'Log follow-up owner for housing-74',
    ],
    dependsOn: ['housing-task-073'],
  },
  {
    id: 'housing-task-075',
    title: 'Export weekly digest (Housing #75)',
    description: 'CareNest operational task for housing: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm housing context #75',
      'Capture outcome for housing task 75',
      'Log follow-up owner for housing-75',
    ],
    dependsOn: ['housing-task-074'],
  },
  {
    id: 'housing-task-076',
    title: 'Train new caregiver on module (Housing #76)',
    description: 'CareNest operational task for housing: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm housing context #76',
      'Capture outcome for housing task 76',
      'Log follow-up owner for housing-76',
    ],
    dependsOn: ['housing-task-075'],
  },
  {
    id: 'housing-task-077',
    title: 'Verify device integrations (Housing #77)',
    description: 'CareNest operational task for housing: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm housing context #77',
      'Capture outcome for housing task 77',
      'Log follow-up owner for housing-77',
    ],
    dependsOn: ['housing-task-076'],
  },
  {
    id: 'housing-task-078',
    title: 'Spot-check critical priorities (Housing #78)',
    description: 'CareNest operational task for housing: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm housing context #78',
      'Capture outcome for housing task 78',
      'Log follow-up owner for housing-78',
    ],
    dependsOn: ['housing-task-077'],
  },
  {
    id: 'housing-task-079',
    title: 'Align meal / care constraints (Housing #79)',
    description: 'CareNest operational task for housing: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm housing context #79',
      'Capture outcome for housing task 79',
      'Log follow-up owner for housing-79',
    ],
    dependsOn: ['housing-task-078'],
  },
  {
    id: 'housing-task-080',
    title: 'Publish dashboard widgets (Housing #80)',
    description: 'CareNest operational task for housing: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm housing context #80',
      'Capture outcome for housing task 80',
      'Log follow-up owner for housing-80',
    ],
    dependsOn: ['housing-task-079'],
  },
];

export function listOpenHousingTasks(): HousingTask[] {
  return housingTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countHousingTasksByState(): Record<HousingTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of housingTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateHousingWorkload1(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateHousingWorkload2(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateHousingWorkload3(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateHousingWorkload4(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateHousingWorkload5(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateHousingWorkload6(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateHousingWorkload7(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateHousingWorkload8(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateHousingWorkload9(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateHousingWorkload10(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateHousingWorkload11(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateHousingWorkload12(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateHousingWorkload13(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateHousingWorkload14(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateHousingWorkload15(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateHousingWorkload16(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateHousingWorkload17(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateHousingWorkload18(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateHousingWorkload19(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateHousingWorkload20(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateHousingWorkload21(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateHousingWorkload22(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateHousingWorkload23(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateHousingWorkload24(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateHousingWorkload25(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateHousingWorkload26(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateHousingWorkload27(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateHousingWorkload28(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateHousingWorkload29(tasks: HousingTask[] = housingTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
