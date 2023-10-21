/** Operational task catalog for Residents */

export type ResidentsTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface ResidentsTask {
  id: string;
  title: string;
  description: string;
  state: ResidentsTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const residentsTaskCatalog: ResidentsTask[] = [
  {
    id: 'residents-task-001',
    title: 'Review overnight notes (Residents #1)',
    description: 'CareNest operational task for residents: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm residents context #1',
      'Capture outcome for residents task 1',
      'Log follow-up owner for residents-1',
    ],
    dependsOn: [],
  },
  {
    id: 'residents-task-002',
    title: 'Reconcile open items (Residents #2)',
    description: 'CareNest operational task for residents: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm residents context #2',
      'Capture outcome for residents task 2',
      'Log follow-up owner for residents-2',
    ],
    dependsOn: ['residents-task-001'],
  },
  {
    id: 'residents-task-003',
    title: 'Escalate overdue cases (Residents #3)',
    description: 'CareNest operational task for residents: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm residents context #3',
      'Capture outcome for residents task 3',
      'Log follow-up owner for residents-3',
    ],
    dependsOn: ['residents-task-002'],
  },
  {
    id: 'residents-task-004',
    title: 'Prepare family update (Residents #4)',
    description: 'CareNest operational task for residents: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm residents context #4',
      'Capture outcome for residents task 4',
      'Log follow-up owner for residents-4',
    ],
    dependsOn: ['residents-task-003'],
  },
  {
    id: 'residents-task-005',
    title: 'Audit documentation completeness (Residents #5)',
    description: 'CareNest operational task for residents: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm residents context #5',
      'Capture outcome for residents task 5',
      'Log follow-up owner for residents-5',
    ],
    dependsOn: ['residents-task-004'],
  },
  {
    id: 'residents-task-006',
    title: 'Sync with pharmacy / vendor (Residents #6)',
    description: 'CareNest operational task for residents: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm residents context #6',
      'Capture outcome for residents task 6',
      'Log follow-up owner for residents-6',
    ],
    dependsOn: ['residents-task-005'],
  },
  {
    id: 'residents-task-007',
    title: 'Validate schedule conflicts (Residents #7)',
    description: 'CareNest operational task for residents: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm residents context #7',
      'Capture outcome for residents task 7',
      'Log follow-up owner for residents-7',
    ],
    dependsOn: ['residents-task-006'],
  },
  {
    id: 'residents-task-008',
    title: 'Close completed workflows (Residents #8)',
    description: 'CareNest operational task for residents: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm residents context #8',
      'Capture outcome for residents task 8',
      'Log follow-up owner for residents-8',
    ],
    dependsOn: ['residents-task-007'],
  },
  {
    id: 'residents-task-009',
    title: 'Generate shift handoff summary (Residents #9)',
    description: 'CareNest operational task for residents: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm residents context #9',
      'Capture outcome for residents task 9',
      'Log follow-up owner for residents-9',
    ],
    dependsOn: ['residents-task-008'],
  },
  {
    id: 'residents-task-010',
    title: 'Confirm consent / privacy flags (Residents #10)',
    description: 'CareNest operational task for residents: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm residents context #10',
      'Capture outcome for residents task 10',
      'Log follow-up owner for residents-10',
    ],
    dependsOn: ['residents-task-009'],
  },
  {
    id: 'residents-task-011',
    title: 'Run compliance checklist (Residents #11)',
    description: 'CareNest operational task for residents: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm residents context #11',
      'Capture outcome for residents task 11',
      'Log follow-up owner for residents-11',
    ],
    dependsOn: ['residents-task-010'],
  },
  {
    id: 'residents-task-012',
    title: 'Update risk scores (Residents #12)',
    description: 'CareNest operational task for residents: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm residents context #12',
      'Capture outcome for residents task 12',
      'Log follow-up owner for residents-12',
    ],
    dependsOn: ['residents-task-011'],
  },
  {
    id: 'residents-task-013',
    title: 'Notify on-call clinician (Residents #13)',
    description: 'CareNest operational task for residents: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm residents context #13',
      'Capture outcome for residents task 13',
      'Log follow-up owner for residents-13',
    ],
    dependsOn: ['residents-task-012'],
  },
  {
    id: 'residents-task-014',
    title: 'Archive stale drafts (Residents #14)',
    description: 'CareNest operational task for residents: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm residents context #14',
      'Capture outcome for residents task 14',
      'Log follow-up owner for residents-14',
    ],
    dependsOn: ['residents-task-013'],
  },
  {
    id: 'residents-task-015',
    title: 'Export weekly digest (Residents #15)',
    description: 'CareNest operational task for residents: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm residents context #15',
      'Capture outcome for residents task 15',
      'Log follow-up owner for residents-15',
    ],
    dependsOn: ['residents-task-014'],
  },
  {
    id: 'residents-task-016',
    title: 'Train new caregiver on module (Residents #16)',
    description: 'CareNest operational task for residents: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm residents context #16',
      'Capture outcome for residents task 16',
      'Log follow-up owner for residents-16',
    ],
    dependsOn: ['residents-task-015'],
  },
  {
    id: 'residents-task-017',
    title: 'Verify device integrations (Residents #17)',
    description: 'CareNest operational task for residents: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm residents context #17',
      'Capture outcome for residents task 17',
      'Log follow-up owner for residents-17',
    ],
    dependsOn: ['residents-task-016'],
  },
  {
    id: 'residents-task-018',
    title: 'Spot-check critical priorities (Residents #18)',
    description: 'CareNest operational task for residents: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm residents context #18',
      'Capture outcome for residents task 18',
      'Log follow-up owner for residents-18',
    ],
    dependsOn: ['residents-task-017'],
  },
  {
    id: 'residents-task-019',
    title: 'Align meal / care constraints (Residents #19)',
    description: 'CareNest operational task for residents: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm residents context #19',
      'Capture outcome for residents task 19',
      'Log follow-up owner for residents-19',
    ],
    dependsOn: ['residents-task-018'],
  },
  {
    id: 'residents-task-020',
    title: 'Publish dashboard widgets (Residents #20)',
    description: 'CareNest operational task for residents: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm residents context #20',
      'Capture outcome for residents task 20',
      'Log follow-up owner for residents-20',
    ],
    dependsOn: ['residents-task-019'],
  },
  {
    id: 'residents-task-021',
    title: 'Review overnight notes (Residents #21)',
    description: 'CareNest operational task for residents: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm residents context #21',
      'Capture outcome for residents task 21',
      'Log follow-up owner for residents-21',
    ],
    dependsOn: ['residents-task-020'],
  },
  {
    id: 'residents-task-022',
    title: 'Reconcile open items (Residents #22)',
    description: 'CareNest operational task for residents: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm residents context #22',
      'Capture outcome for residents task 22',
      'Log follow-up owner for residents-22',
    ],
    dependsOn: ['residents-task-021'],
  },
  {
    id: 'residents-task-023',
    title: 'Escalate overdue cases (Residents #23)',
    description: 'CareNest operational task for residents: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm residents context #23',
      'Capture outcome for residents task 23',
      'Log follow-up owner for residents-23',
    ],
    dependsOn: ['residents-task-022'],
  },
  {
    id: 'residents-task-024',
    title: 'Prepare family update (Residents #24)',
    description: 'CareNest operational task for residents: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm residents context #24',
      'Capture outcome for residents task 24',
      'Log follow-up owner for residents-24',
    ],
    dependsOn: ['residents-task-023'],
  },
  {
    id: 'residents-task-025',
    title: 'Audit documentation completeness (Residents #25)',
    description: 'CareNest operational task for residents: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm residents context #25',
      'Capture outcome for residents task 25',
      'Log follow-up owner for residents-25',
    ],
    dependsOn: ['residents-task-024'],
  },
  {
    id: 'residents-task-026',
    title: 'Sync with pharmacy / vendor (Residents #26)',
    description: 'CareNest operational task for residents: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm residents context #26',
      'Capture outcome for residents task 26',
      'Log follow-up owner for residents-26',
    ],
    dependsOn: ['residents-task-025'],
  },
  {
    id: 'residents-task-027',
    title: 'Validate schedule conflicts (Residents #27)',
    description: 'CareNest operational task for residents: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm residents context #27',
      'Capture outcome for residents task 27',
      'Log follow-up owner for residents-27',
    ],
    dependsOn: ['residents-task-026'],
  },
  {
    id: 'residents-task-028',
    title: 'Close completed workflows (Residents #28)',
    description: 'CareNest operational task for residents: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm residents context #28',
      'Capture outcome for residents task 28',
      'Log follow-up owner for residents-28',
    ],
    dependsOn: ['residents-task-027'],
  },
  {
    id: 'residents-task-029',
    title: 'Generate shift handoff summary (Residents #29)',
    description: 'CareNest operational task for residents: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm residents context #29',
      'Capture outcome for residents task 29',
      'Log follow-up owner for residents-29',
    ],
    dependsOn: ['residents-task-028'],
  },
  {
    id: 'residents-task-030',
    title: 'Confirm consent / privacy flags (Residents #30)',
    description: 'CareNest operational task for residents: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm residents context #30',
      'Capture outcome for residents task 30',
      'Log follow-up owner for residents-30',
    ],
    dependsOn: ['residents-task-029'],
  },
  {
    id: 'residents-task-031',
    title: 'Run compliance checklist (Residents #31)',
    description: 'CareNest operational task for residents: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm residents context #31',
      'Capture outcome for residents task 31',
      'Log follow-up owner for residents-31',
    ],
    dependsOn: ['residents-task-030'],
  },
  {
    id: 'residents-task-032',
    title: 'Update risk scores (Residents #32)',
    description: 'CareNest operational task for residents: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm residents context #32',
      'Capture outcome for residents task 32',
      'Log follow-up owner for residents-32',
    ],
    dependsOn: ['residents-task-031'],
  },
  {
    id: 'residents-task-033',
    title: 'Notify on-call clinician (Residents #33)',
    description: 'CareNest operational task for residents: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm residents context #33',
      'Capture outcome for residents task 33',
      'Log follow-up owner for residents-33',
    ],
    dependsOn: ['residents-task-032'],
  },
  {
    id: 'residents-task-034',
    title: 'Archive stale drafts (Residents #34)',
    description: 'CareNest operational task for residents: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm residents context #34',
      'Capture outcome for residents task 34',
      'Log follow-up owner for residents-34',
    ],
    dependsOn: ['residents-task-033'],
  },
  {
    id: 'residents-task-035',
    title: 'Export weekly digest (Residents #35)',
    description: 'CareNest operational task for residents: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm residents context #35',
      'Capture outcome for residents task 35',
      'Log follow-up owner for residents-35',
    ],
    dependsOn: ['residents-task-034'],
  },
  {
    id: 'residents-task-036',
    title: 'Train new caregiver on module (Residents #36)',
    description: 'CareNest operational task for residents: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm residents context #36',
      'Capture outcome for residents task 36',
      'Log follow-up owner for residents-36',
    ],
    dependsOn: ['residents-task-035'],
  },
  {
    id: 'residents-task-037',
    title: 'Verify device integrations (Residents #37)',
    description: 'CareNest operational task for residents: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm residents context #37',
      'Capture outcome for residents task 37',
      'Log follow-up owner for residents-37',
    ],
    dependsOn: ['residents-task-036'],
  },
  {
    id: 'residents-task-038',
    title: 'Spot-check critical priorities (Residents #38)',
    description: 'CareNest operational task for residents: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm residents context #38',
      'Capture outcome for residents task 38',
      'Log follow-up owner for residents-38',
    ],
    dependsOn: ['residents-task-037'],
  },
  {
    id: 'residents-task-039',
    title: 'Align meal / care constraints (Residents #39)',
    description: 'CareNest operational task for residents: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm residents context #39',
      'Capture outcome for residents task 39',
      'Log follow-up owner for residents-39',
    ],
    dependsOn: ['residents-task-038'],
  },
  {
    id: 'residents-task-040',
    title: 'Publish dashboard widgets (Residents #40)',
    description: 'CareNest operational task for residents: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm residents context #40',
      'Capture outcome for residents task 40',
      'Log follow-up owner for residents-40',
    ],
    dependsOn: ['residents-task-039'],
  },
  {
    id: 'residents-task-041',
    title: 'Review overnight notes (Residents #41)',
    description: 'CareNest operational task for residents: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm residents context #41',
      'Capture outcome for residents task 41',
      'Log follow-up owner for residents-41',
    ],
    dependsOn: ['residents-task-040'],
  },
  {
    id: 'residents-task-042',
    title: 'Reconcile open items (Residents #42)',
    description: 'CareNest operational task for residents: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm residents context #42',
      'Capture outcome for residents task 42',
      'Log follow-up owner for residents-42',
    ],
    dependsOn: ['residents-task-041'],
  },
  {
    id: 'residents-task-043',
    title: 'Escalate overdue cases (Residents #43)',
    description: 'CareNest operational task for residents: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm residents context #43',
      'Capture outcome for residents task 43',
      'Log follow-up owner for residents-43',
    ],
    dependsOn: ['residents-task-042'],
  },
  {
    id: 'residents-task-044',
    title: 'Prepare family update (Residents #44)',
    description: 'CareNest operational task for residents: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm residents context #44',
      'Capture outcome for residents task 44',
      'Log follow-up owner for residents-44',
    ],
    dependsOn: ['residents-task-043'],
  },
  {
    id: 'residents-task-045',
    title: 'Audit documentation completeness (Residents #45)',
    description: 'CareNest operational task for residents: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm residents context #45',
      'Capture outcome for residents task 45',
      'Log follow-up owner for residents-45',
    ],
    dependsOn: ['residents-task-044'],
  },
  {
    id: 'residents-task-046',
    title: 'Sync with pharmacy / vendor (Residents #46)',
    description: 'CareNest operational task for residents: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm residents context #46',
      'Capture outcome for residents task 46',
      'Log follow-up owner for residents-46',
    ],
    dependsOn: ['residents-task-045'],
  },
  {
    id: 'residents-task-047',
    title: 'Validate schedule conflicts (Residents #47)',
    description: 'CareNest operational task for residents: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm residents context #47',
      'Capture outcome for residents task 47',
      'Log follow-up owner for residents-47',
    ],
    dependsOn: ['residents-task-046'],
  },
  {
    id: 'residents-task-048',
    title: 'Close completed workflows (Residents #48)',
    description: 'CareNest operational task for residents: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm residents context #48',
      'Capture outcome for residents task 48',
      'Log follow-up owner for residents-48',
    ],
    dependsOn: ['residents-task-047'],
  },
  {
    id: 'residents-task-049',
    title: 'Generate shift handoff summary (Residents #49)',
    description: 'CareNest operational task for residents: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm residents context #49',
      'Capture outcome for residents task 49',
      'Log follow-up owner for residents-49',
    ],
    dependsOn: ['residents-task-048'],
  },
  {
    id: 'residents-task-050',
    title: 'Confirm consent / privacy flags (Residents #50)',
    description: 'CareNest operational task for residents: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm residents context #50',
      'Capture outcome for residents task 50',
      'Log follow-up owner for residents-50',
    ],
    dependsOn: ['residents-task-049'],
  },
  {
    id: 'residents-task-051',
    title: 'Run compliance checklist (Residents #51)',
    description: 'CareNest operational task for residents: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm residents context #51',
      'Capture outcome for residents task 51',
      'Log follow-up owner for residents-51',
    ],
    dependsOn: ['residents-task-050'],
  },
  {
    id: 'residents-task-052',
    title: 'Update risk scores (Residents #52)',
    description: 'CareNest operational task for residents: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm residents context #52',
      'Capture outcome for residents task 52',
      'Log follow-up owner for residents-52',
    ],
    dependsOn: ['residents-task-051'],
  },
  {
    id: 'residents-task-053',
    title: 'Notify on-call clinician (Residents #53)',
    description: 'CareNest operational task for residents: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm residents context #53',
      'Capture outcome for residents task 53',
      'Log follow-up owner for residents-53',
    ],
    dependsOn: ['residents-task-052'],
  },
  {
    id: 'residents-task-054',
    title: 'Archive stale drafts (Residents #54)',
    description: 'CareNest operational task for residents: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm residents context #54',
      'Capture outcome for residents task 54',
      'Log follow-up owner for residents-54',
    ],
    dependsOn: ['residents-task-053'],
  },
  {
    id: 'residents-task-055',
    title: 'Export weekly digest (Residents #55)',
    description: 'CareNest operational task for residents: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm residents context #55',
      'Capture outcome for residents task 55',
      'Log follow-up owner for residents-55',
    ],
    dependsOn: ['residents-task-054'],
  },
  {
    id: 'residents-task-056',
    title: 'Train new caregiver on module (Residents #56)',
    description: 'CareNest operational task for residents: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm residents context #56',
      'Capture outcome for residents task 56',
      'Log follow-up owner for residents-56',
    ],
    dependsOn: ['residents-task-055'],
  },
  {
    id: 'residents-task-057',
    title: 'Verify device integrations (Residents #57)',
    description: 'CareNest operational task for residents: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm residents context #57',
      'Capture outcome for residents task 57',
      'Log follow-up owner for residents-57',
    ],
    dependsOn: ['residents-task-056'],
  },
  {
    id: 'residents-task-058',
    title: 'Spot-check critical priorities (Residents #58)',
    description: 'CareNest operational task for residents: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm residents context #58',
      'Capture outcome for residents task 58',
      'Log follow-up owner for residents-58',
    ],
    dependsOn: ['residents-task-057'],
  },
  {
    id: 'residents-task-059',
    title: 'Align meal / care constraints (Residents #59)',
    description: 'CareNest operational task for residents: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm residents context #59',
      'Capture outcome for residents task 59',
      'Log follow-up owner for residents-59',
    ],
    dependsOn: ['residents-task-058'],
  },
  {
    id: 'residents-task-060',
    title: 'Publish dashboard widgets (Residents #60)',
    description: 'CareNest operational task for residents: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm residents context #60',
      'Capture outcome for residents task 60',
      'Log follow-up owner for residents-60',
    ],
    dependsOn: ['residents-task-059'],
  },
  {
    id: 'residents-task-061',
    title: 'Review overnight notes (Residents #61)',
    description: 'CareNest operational task for residents: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm residents context #61',
      'Capture outcome for residents task 61',
      'Log follow-up owner for residents-61',
    ],
    dependsOn: ['residents-task-060'],
  },
  {
    id: 'residents-task-062',
    title: 'Reconcile open items (Residents #62)',
    description: 'CareNest operational task for residents: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm residents context #62',
      'Capture outcome for residents task 62',
      'Log follow-up owner for residents-62',
    ],
    dependsOn: ['residents-task-061'],
  },
  {
    id: 'residents-task-063',
    title: 'Escalate overdue cases (Residents #63)',
    description: 'CareNest operational task for residents: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm residents context #63',
      'Capture outcome for residents task 63',
      'Log follow-up owner for residents-63',
    ],
    dependsOn: ['residents-task-062'],
  },
  {
    id: 'residents-task-064',
    title: 'Prepare family update (Residents #64)',
    description: 'CareNest operational task for residents: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm residents context #64',
      'Capture outcome for residents task 64',
      'Log follow-up owner for residents-64',
    ],
    dependsOn: ['residents-task-063'],
  },
  {
    id: 'residents-task-065',
    title: 'Audit documentation completeness (Residents #65)',
    description: 'CareNest operational task for residents: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm residents context #65',
      'Capture outcome for residents task 65',
      'Log follow-up owner for residents-65',
    ],
    dependsOn: ['residents-task-064'],
  },
  {
    id: 'residents-task-066',
    title: 'Sync with pharmacy / vendor (Residents #66)',
    description: 'CareNest operational task for residents: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm residents context #66',
      'Capture outcome for residents task 66',
      'Log follow-up owner for residents-66',
    ],
    dependsOn: ['residents-task-065'],
  },
  {
    id: 'residents-task-067',
    title: 'Validate schedule conflicts (Residents #67)',
    description: 'CareNest operational task for residents: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm residents context #67',
      'Capture outcome for residents task 67',
      'Log follow-up owner for residents-67',
    ],
    dependsOn: ['residents-task-066'],
  },
  {
    id: 'residents-task-068',
    title: 'Close completed workflows (Residents #68)',
    description: 'CareNest operational task for residents: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm residents context #68',
      'Capture outcome for residents task 68',
      'Log follow-up owner for residents-68',
    ],
    dependsOn: ['residents-task-067'],
  },
  {
    id: 'residents-task-069',
    title: 'Generate shift handoff summary (Residents #69)',
    description: 'CareNest operational task for residents: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm residents context #69',
      'Capture outcome for residents task 69',
      'Log follow-up owner for residents-69',
    ],
    dependsOn: ['residents-task-068'],
  },
  {
    id: 'residents-task-070',
    title: 'Confirm consent / privacy flags (Residents #70)',
    description: 'CareNest operational task for residents: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm residents context #70',
      'Capture outcome for residents task 70',
      'Log follow-up owner for residents-70',
    ],
    dependsOn: ['residents-task-069'],
  },
  {
    id: 'residents-task-071',
    title: 'Run compliance checklist (Residents #71)',
    description: 'CareNest operational task for residents: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm residents context #71',
      'Capture outcome for residents task 71',
      'Log follow-up owner for residents-71',
    ],
    dependsOn: ['residents-task-070'],
  },
  {
    id: 'residents-task-072',
    title: 'Update risk scores (Residents #72)',
    description: 'CareNest operational task for residents: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm residents context #72',
      'Capture outcome for residents task 72',
      'Log follow-up owner for residents-72',
    ],
    dependsOn: ['residents-task-071'],
  },
  {
    id: 'residents-task-073',
    title: 'Notify on-call clinician (Residents #73)',
    description: 'CareNest operational task for residents: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm residents context #73',
      'Capture outcome for residents task 73',
      'Log follow-up owner for residents-73',
    ],
    dependsOn: ['residents-task-072'],
  },
  {
    id: 'residents-task-074',
    title: 'Archive stale drafts (Residents #74)',
    description: 'CareNest operational task for residents: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm residents context #74',
      'Capture outcome for residents task 74',
      'Log follow-up owner for residents-74',
    ],
    dependsOn: ['residents-task-073'],
  },
  {
    id: 'residents-task-075',
    title: 'Export weekly digest (Residents #75)',
    description: 'CareNest operational task for residents: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm residents context #75',
      'Capture outcome for residents task 75',
      'Log follow-up owner for residents-75',
    ],
    dependsOn: ['residents-task-074'],
  },
  {
    id: 'residents-task-076',
    title: 'Train new caregiver on module (Residents #76)',
    description: 'CareNest operational task for residents: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm residents context #76',
      'Capture outcome for residents task 76',
      'Log follow-up owner for residents-76',
    ],
    dependsOn: ['residents-task-075'],
  },
  {
    id: 'residents-task-077',
    title: 'Verify device integrations (Residents #77)',
    description: 'CareNest operational task for residents: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm residents context #77',
      'Capture outcome for residents task 77',
      'Log follow-up owner for residents-77',
    ],
    dependsOn: ['residents-task-076'],
  },
  {
    id: 'residents-task-078',
    title: 'Spot-check critical priorities (Residents #78)',
    description: 'CareNest operational task for residents: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm residents context #78',
      'Capture outcome for residents task 78',
      'Log follow-up owner for residents-78',
    ],
    dependsOn: ['residents-task-077'],
  },
  {
    id: 'residents-task-079',
    title: 'Align meal / care constraints (Residents #79)',
    description: 'CareNest operational task for residents: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm residents context #79',
      'Capture outcome for residents task 79',
      'Log follow-up owner for residents-79',
    ],
    dependsOn: ['residents-task-078'],
  },
  {
    id: 'residents-task-080',
    title: 'Publish dashboard widgets (Residents #80)',
    description: 'CareNest operational task for residents: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm residents context #80',
      'Capture outcome for residents task 80',
      'Log follow-up owner for residents-80',
    ],
    dependsOn: ['residents-task-079'],
  },
];

export function listOpenResidentsTasks(): ResidentsTask[] {
  return residentsTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countResidentsTasksByState(): Record<ResidentsTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of residentsTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateResidentsWorkload1(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateResidentsWorkload2(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateResidentsWorkload3(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateResidentsWorkload4(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateResidentsWorkload5(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateResidentsWorkload6(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateResidentsWorkload7(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateResidentsWorkload8(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateResidentsWorkload9(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateResidentsWorkload10(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateResidentsWorkload11(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateResidentsWorkload12(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateResidentsWorkload13(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateResidentsWorkload14(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateResidentsWorkload15(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateResidentsWorkload16(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateResidentsWorkload17(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateResidentsWorkload18(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateResidentsWorkload19(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateResidentsWorkload20(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateResidentsWorkload21(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateResidentsWorkload22(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateResidentsWorkload23(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateResidentsWorkload24(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateResidentsWorkload25(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateResidentsWorkload26(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateResidentsWorkload27(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateResidentsWorkload28(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateResidentsWorkload29(tasks: ResidentsTask[] = residentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
