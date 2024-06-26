/** Operational task catalog for Vitals */

export type VitalsTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface VitalsTask {
  id: string;
  title: string;
  description: string;
  state: VitalsTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const vitalsTaskCatalog: VitalsTask[] = [
  {
    id: 'vitals-task-001',
    title: 'Review overnight notes (Vitals #1)',
    description: 'CareNest operational task for vitals: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm vitals context #1',
      'Capture outcome for vitals task 1',
      'Log follow-up owner for vitals-1',
    ],
    dependsOn: [],
  },
  {
    id: 'vitals-task-002',
    title: 'Reconcile open items (Vitals #2)',
    description: 'CareNest operational task for vitals: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm vitals context #2',
      'Capture outcome for vitals task 2',
      'Log follow-up owner for vitals-2',
    ],
    dependsOn: ['vitals-task-001'],
  },
  {
    id: 'vitals-task-003',
    title: 'Escalate overdue cases (Vitals #3)',
    description: 'CareNest operational task for vitals: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm vitals context #3',
      'Capture outcome for vitals task 3',
      'Log follow-up owner for vitals-3',
    ],
    dependsOn: ['vitals-task-002'],
  },
  {
    id: 'vitals-task-004',
    title: 'Prepare family update (Vitals #4)',
    description: 'CareNest operational task for vitals: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm vitals context #4',
      'Capture outcome for vitals task 4',
      'Log follow-up owner for vitals-4',
    ],
    dependsOn: ['vitals-task-003'],
  },
  {
    id: 'vitals-task-005',
    title: 'Audit documentation completeness (Vitals #5)',
    description: 'CareNest operational task for vitals: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm vitals context #5',
      'Capture outcome for vitals task 5',
      'Log follow-up owner for vitals-5',
    ],
    dependsOn: ['vitals-task-004'],
  },
  {
    id: 'vitals-task-006',
    title: 'Sync with pharmacy / vendor (Vitals #6)',
    description: 'CareNest operational task for vitals: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm vitals context #6',
      'Capture outcome for vitals task 6',
      'Log follow-up owner for vitals-6',
    ],
    dependsOn: ['vitals-task-005'],
  },
  {
    id: 'vitals-task-007',
    title: 'Validate schedule conflicts (Vitals #7)',
    description: 'CareNest operational task for vitals: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm vitals context #7',
      'Capture outcome for vitals task 7',
      'Log follow-up owner for vitals-7',
    ],
    dependsOn: ['vitals-task-006'],
  },
  {
    id: 'vitals-task-008',
    title: 'Close completed workflows (Vitals #8)',
    description: 'CareNest operational task for vitals: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm vitals context #8',
      'Capture outcome for vitals task 8',
      'Log follow-up owner for vitals-8',
    ],
    dependsOn: ['vitals-task-007'],
  },
  {
    id: 'vitals-task-009',
    title: 'Generate shift handoff summary (Vitals #9)',
    description: 'CareNest operational task for vitals: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm vitals context #9',
      'Capture outcome for vitals task 9',
      'Log follow-up owner for vitals-9',
    ],
    dependsOn: ['vitals-task-008'],
  },
  {
    id: 'vitals-task-010',
    title: 'Confirm consent / privacy flags (Vitals #10)',
    description: 'CareNest operational task for vitals: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm vitals context #10',
      'Capture outcome for vitals task 10',
      'Log follow-up owner for vitals-10',
    ],
    dependsOn: ['vitals-task-009'],
  },
  {
    id: 'vitals-task-011',
    title: 'Run compliance checklist (Vitals #11)',
    description: 'CareNest operational task for vitals: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm vitals context #11',
      'Capture outcome for vitals task 11',
      'Log follow-up owner for vitals-11',
    ],
    dependsOn: ['vitals-task-010'],
  },
  {
    id: 'vitals-task-012',
    title: 'Update risk scores (Vitals #12)',
    description: 'CareNest operational task for vitals: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm vitals context #12',
      'Capture outcome for vitals task 12',
      'Log follow-up owner for vitals-12',
    ],
    dependsOn: ['vitals-task-011'],
  },
  {
    id: 'vitals-task-013',
    title: 'Notify on-call clinician (Vitals #13)',
    description: 'CareNest operational task for vitals: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm vitals context #13',
      'Capture outcome for vitals task 13',
      'Log follow-up owner for vitals-13',
    ],
    dependsOn: ['vitals-task-012'],
  },
  {
    id: 'vitals-task-014',
    title: 'Archive stale drafts (Vitals #14)',
    description: 'CareNest operational task for vitals: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm vitals context #14',
      'Capture outcome for vitals task 14',
      'Log follow-up owner for vitals-14',
    ],
    dependsOn: ['vitals-task-013'],
  },
  {
    id: 'vitals-task-015',
    title: 'Export weekly digest (Vitals #15)',
    description: 'CareNest operational task for vitals: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm vitals context #15',
      'Capture outcome for vitals task 15',
      'Log follow-up owner for vitals-15',
    ],
    dependsOn: ['vitals-task-014'],
  },
  {
    id: 'vitals-task-016',
    title: 'Train new caregiver on module (Vitals #16)',
    description: 'CareNest operational task for vitals: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm vitals context #16',
      'Capture outcome for vitals task 16',
      'Log follow-up owner for vitals-16',
    ],
    dependsOn: ['vitals-task-015'],
  },
  {
    id: 'vitals-task-017',
    title: 'Verify device integrations (Vitals #17)',
    description: 'CareNest operational task for vitals: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm vitals context #17',
      'Capture outcome for vitals task 17',
      'Log follow-up owner for vitals-17',
    ],
    dependsOn: ['vitals-task-016'],
  },
  {
    id: 'vitals-task-018',
    title: 'Spot-check critical priorities (Vitals #18)',
    description: 'CareNest operational task for vitals: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm vitals context #18',
      'Capture outcome for vitals task 18',
      'Log follow-up owner for vitals-18',
    ],
    dependsOn: ['vitals-task-017'],
  },
  {
    id: 'vitals-task-019',
    title: 'Align meal / care constraints (Vitals #19)',
    description: 'CareNest operational task for vitals: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm vitals context #19',
      'Capture outcome for vitals task 19',
      'Log follow-up owner for vitals-19',
    ],
    dependsOn: ['vitals-task-018'],
  },
  {
    id: 'vitals-task-020',
    title: 'Publish dashboard widgets (Vitals #20)',
    description: 'CareNest operational task for vitals: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm vitals context #20',
      'Capture outcome for vitals task 20',
      'Log follow-up owner for vitals-20',
    ],
    dependsOn: ['vitals-task-019'],
  },
  {
    id: 'vitals-task-021',
    title: 'Review overnight notes (Vitals #21)',
    description: 'CareNest operational task for vitals: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm vitals context #21',
      'Capture outcome for vitals task 21',
      'Log follow-up owner for vitals-21',
    ],
    dependsOn: ['vitals-task-020'],
  },
  {
    id: 'vitals-task-022',
    title: 'Reconcile open items (Vitals #22)',
    description: 'CareNest operational task for vitals: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm vitals context #22',
      'Capture outcome for vitals task 22',
      'Log follow-up owner for vitals-22',
    ],
    dependsOn: ['vitals-task-021'],
  },
  {
    id: 'vitals-task-023',
    title: 'Escalate overdue cases (Vitals #23)',
    description: 'CareNest operational task for vitals: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm vitals context #23',
      'Capture outcome for vitals task 23',
      'Log follow-up owner for vitals-23',
    ],
    dependsOn: ['vitals-task-022'],
  },
  {
    id: 'vitals-task-024',
    title: 'Prepare family update (Vitals #24)',
    description: 'CareNest operational task for vitals: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm vitals context #24',
      'Capture outcome for vitals task 24',
      'Log follow-up owner for vitals-24',
    ],
    dependsOn: ['vitals-task-023'],
  },
  {
    id: 'vitals-task-025',
    title: 'Audit documentation completeness (Vitals #25)',
    description: 'CareNest operational task for vitals: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm vitals context #25',
      'Capture outcome for vitals task 25',
      'Log follow-up owner for vitals-25',
    ],
    dependsOn: ['vitals-task-024'],
  },
  {
    id: 'vitals-task-026',
    title: 'Sync with pharmacy / vendor (Vitals #26)',
    description: 'CareNest operational task for vitals: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm vitals context #26',
      'Capture outcome for vitals task 26',
      'Log follow-up owner for vitals-26',
    ],
    dependsOn: ['vitals-task-025'],
  },
  {
    id: 'vitals-task-027',
    title: 'Validate schedule conflicts (Vitals #27)',
    description: 'CareNest operational task for vitals: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm vitals context #27',
      'Capture outcome for vitals task 27',
      'Log follow-up owner for vitals-27',
    ],
    dependsOn: ['vitals-task-026'],
  },
  {
    id: 'vitals-task-028',
    title: 'Close completed workflows (Vitals #28)',
    description: 'CareNest operational task for vitals: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm vitals context #28',
      'Capture outcome for vitals task 28',
      'Log follow-up owner for vitals-28',
    ],
    dependsOn: ['vitals-task-027'],
  },
  {
    id: 'vitals-task-029',
    title: 'Generate shift handoff summary (Vitals #29)',
    description: 'CareNest operational task for vitals: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm vitals context #29',
      'Capture outcome for vitals task 29',
      'Log follow-up owner for vitals-29',
    ],
    dependsOn: ['vitals-task-028'],
  },
  {
    id: 'vitals-task-030',
    title: 'Confirm consent / privacy flags (Vitals #30)',
    description: 'CareNest operational task for vitals: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm vitals context #30',
      'Capture outcome for vitals task 30',
      'Log follow-up owner for vitals-30',
    ],
    dependsOn: ['vitals-task-029'],
  },
  {
    id: 'vitals-task-031',
    title: 'Run compliance checklist (Vitals #31)',
    description: 'CareNest operational task for vitals: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm vitals context #31',
      'Capture outcome for vitals task 31',
      'Log follow-up owner for vitals-31',
    ],
    dependsOn: ['vitals-task-030'],
  },
  {
    id: 'vitals-task-032',
    title: 'Update risk scores (Vitals #32)',
    description: 'CareNest operational task for vitals: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm vitals context #32',
      'Capture outcome for vitals task 32',
      'Log follow-up owner for vitals-32',
    ],
    dependsOn: ['vitals-task-031'],
  },
  {
    id: 'vitals-task-033',
    title: 'Notify on-call clinician (Vitals #33)',
    description: 'CareNest operational task for vitals: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm vitals context #33',
      'Capture outcome for vitals task 33',
      'Log follow-up owner for vitals-33',
    ],
    dependsOn: ['vitals-task-032'],
  },
  {
    id: 'vitals-task-034',
    title: 'Archive stale drafts (Vitals #34)',
    description: 'CareNest operational task for vitals: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm vitals context #34',
      'Capture outcome for vitals task 34',
      'Log follow-up owner for vitals-34',
    ],
    dependsOn: ['vitals-task-033'],
  },
  {
    id: 'vitals-task-035',
    title: 'Export weekly digest (Vitals #35)',
    description: 'CareNest operational task for vitals: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm vitals context #35',
      'Capture outcome for vitals task 35',
      'Log follow-up owner for vitals-35',
    ],
    dependsOn: ['vitals-task-034'],
  },
  {
    id: 'vitals-task-036',
    title: 'Train new caregiver on module (Vitals #36)',
    description: 'CareNest operational task for vitals: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm vitals context #36',
      'Capture outcome for vitals task 36',
      'Log follow-up owner for vitals-36',
    ],
    dependsOn: ['vitals-task-035'],
  },
  {
    id: 'vitals-task-037',
    title: 'Verify device integrations (Vitals #37)',
    description: 'CareNest operational task for vitals: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm vitals context #37',
      'Capture outcome for vitals task 37',
      'Log follow-up owner for vitals-37',
    ],
    dependsOn: ['vitals-task-036'],
  },
  {
    id: 'vitals-task-038',
    title: 'Spot-check critical priorities (Vitals #38)',
    description: 'CareNest operational task for vitals: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm vitals context #38',
      'Capture outcome for vitals task 38',
      'Log follow-up owner for vitals-38',
    ],
    dependsOn: ['vitals-task-037'],
  },
  {
    id: 'vitals-task-039',
    title: 'Align meal / care constraints (Vitals #39)',
    description: 'CareNest operational task for vitals: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm vitals context #39',
      'Capture outcome for vitals task 39',
      'Log follow-up owner for vitals-39',
    ],
    dependsOn: ['vitals-task-038'],
  },
  {
    id: 'vitals-task-040',
    title: 'Publish dashboard widgets (Vitals #40)',
    description: 'CareNest operational task for vitals: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm vitals context #40',
      'Capture outcome for vitals task 40',
      'Log follow-up owner for vitals-40',
    ],
    dependsOn: ['vitals-task-039'],
  },
  {
    id: 'vitals-task-041',
    title: 'Review overnight notes (Vitals #41)',
    description: 'CareNest operational task for vitals: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm vitals context #41',
      'Capture outcome for vitals task 41',
      'Log follow-up owner for vitals-41',
    ],
    dependsOn: ['vitals-task-040'],
  },
  {
    id: 'vitals-task-042',
    title: 'Reconcile open items (Vitals #42)',
    description: 'CareNest operational task for vitals: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm vitals context #42',
      'Capture outcome for vitals task 42',
      'Log follow-up owner for vitals-42',
    ],
    dependsOn: ['vitals-task-041'],
  },
  {
    id: 'vitals-task-043',
    title: 'Escalate overdue cases (Vitals #43)',
    description: 'CareNest operational task for vitals: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm vitals context #43',
      'Capture outcome for vitals task 43',
      'Log follow-up owner for vitals-43',
    ],
    dependsOn: ['vitals-task-042'],
  },
  {
    id: 'vitals-task-044',
    title: 'Prepare family update (Vitals #44)',
    description: 'CareNest operational task for vitals: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm vitals context #44',
      'Capture outcome for vitals task 44',
      'Log follow-up owner for vitals-44',
    ],
    dependsOn: ['vitals-task-043'],
  },
  {
    id: 'vitals-task-045',
    title: 'Audit documentation completeness (Vitals #45)',
    description: 'CareNest operational task for vitals: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm vitals context #45',
      'Capture outcome for vitals task 45',
      'Log follow-up owner for vitals-45',
    ],
    dependsOn: ['vitals-task-044'],
  },
  {
    id: 'vitals-task-046',
    title: 'Sync with pharmacy / vendor (Vitals #46)',
    description: 'CareNest operational task for vitals: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm vitals context #46',
      'Capture outcome for vitals task 46',
      'Log follow-up owner for vitals-46',
    ],
    dependsOn: ['vitals-task-045'],
  },
  {
    id: 'vitals-task-047',
    title: 'Validate schedule conflicts (Vitals #47)',
    description: 'CareNest operational task for vitals: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm vitals context #47',
      'Capture outcome for vitals task 47',
      'Log follow-up owner for vitals-47',
    ],
    dependsOn: ['vitals-task-046'],
  },
  {
    id: 'vitals-task-048',
    title: 'Close completed workflows (Vitals #48)',
    description: 'CareNest operational task for vitals: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm vitals context #48',
      'Capture outcome for vitals task 48',
      'Log follow-up owner for vitals-48',
    ],
    dependsOn: ['vitals-task-047'],
  },
  {
    id: 'vitals-task-049',
    title: 'Generate shift handoff summary (Vitals #49)',
    description: 'CareNest operational task for vitals: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm vitals context #49',
      'Capture outcome for vitals task 49',
      'Log follow-up owner for vitals-49',
    ],
    dependsOn: ['vitals-task-048'],
  },
  {
    id: 'vitals-task-050',
    title: 'Confirm consent / privacy flags (Vitals #50)',
    description: 'CareNest operational task for vitals: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm vitals context #50',
      'Capture outcome for vitals task 50',
      'Log follow-up owner for vitals-50',
    ],
    dependsOn: ['vitals-task-049'],
  },
  {
    id: 'vitals-task-051',
    title: 'Run compliance checklist (Vitals #51)',
    description: 'CareNest operational task for vitals: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm vitals context #51',
      'Capture outcome for vitals task 51',
      'Log follow-up owner for vitals-51',
    ],
    dependsOn: ['vitals-task-050'],
  },
  {
    id: 'vitals-task-052',
    title: 'Update risk scores (Vitals #52)',
    description: 'CareNest operational task for vitals: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm vitals context #52',
      'Capture outcome for vitals task 52',
      'Log follow-up owner for vitals-52',
    ],
    dependsOn: ['vitals-task-051'],
  },
  {
    id: 'vitals-task-053',
    title: 'Notify on-call clinician (Vitals #53)',
    description: 'CareNest operational task for vitals: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm vitals context #53',
      'Capture outcome for vitals task 53',
      'Log follow-up owner for vitals-53',
    ],
    dependsOn: ['vitals-task-052'],
  },
  {
    id: 'vitals-task-054',
    title: 'Archive stale drafts (Vitals #54)',
    description: 'CareNest operational task for vitals: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm vitals context #54',
      'Capture outcome for vitals task 54',
      'Log follow-up owner for vitals-54',
    ],
    dependsOn: ['vitals-task-053'],
  },
  {
    id: 'vitals-task-055',
    title: 'Export weekly digest (Vitals #55)',
    description: 'CareNest operational task for vitals: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm vitals context #55',
      'Capture outcome for vitals task 55',
      'Log follow-up owner for vitals-55',
    ],
    dependsOn: ['vitals-task-054'],
  },
  {
    id: 'vitals-task-056',
    title: 'Train new caregiver on module (Vitals #56)',
    description: 'CareNest operational task for vitals: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm vitals context #56',
      'Capture outcome for vitals task 56',
      'Log follow-up owner for vitals-56',
    ],
    dependsOn: ['vitals-task-055'],
  },
  {
    id: 'vitals-task-057',
    title: 'Verify device integrations (Vitals #57)',
    description: 'CareNest operational task for vitals: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm vitals context #57',
      'Capture outcome for vitals task 57',
      'Log follow-up owner for vitals-57',
    ],
    dependsOn: ['vitals-task-056'],
  },
  {
    id: 'vitals-task-058',
    title: 'Spot-check critical priorities (Vitals #58)',
    description: 'CareNest operational task for vitals: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm vitals context #58',
      'Capture outcome for vitals task 58',
      'Log follow-up owner for vitals-58',
    ],
    dependsOn: ['vitals-task-057'],
  },
  {
    id: 'vitals-task-059',
    title: 'Align meal / care constraints (Vitals #59)',
    description: 'CareNest operational task for vitals: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm vitals context #59',
      'Capture outcome for vitals task 59',
      'Log follow-up owner for vitals-59',
    ],
    dependsOn: ['vitals-task-058'],
  },
  {
    id: 'vitals-task-060',
    title: 'Publish dashboard widgets (Vitals #60)',
    description: 'CareNest operational task for vitals: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm vitals context #60',
      'Capture outcome for vitals task 60',
      'Log follow-up owner for vitals-60',
    ],
    dependsOn: ['vitals-task-059'],
  },
  {
    id: 'vitals-task-061',
    title: 'Review overnight notes (Vitals #61)',
    description: 'CareNest operational task for vitals: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm vitals context #61',
      'Capture outcome for vitals task 61',
      'Log follow-up owner for vitals-61',
    ],
    dependsOn: ['vitals-task-060'],
  },
  {
    id: 'vitals-task-062',
    title: 'Reconcile open items (Vitals #62)',
    description: 'CareNest operational task for vitals: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm vitals context #62',
      'Capture outcome for vitals task 62',
      'Log follow-up owner for vitals-62',
    ],
    dependsOn: ['vitals-task-061'],
  },
  {
    id: 'vitals-task-063',
    title: 'Escalate overdue cases (Vitals #63)',
    description: 'CareNest operational task for vitals: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm vitals context #63',
      'Capture outcome for vitals task 63',
      'Log follow-up owner for vitals-63',
    ],
    dependsOn: ['vitals-task-062'],
  },
  {
    id: 'vitals-task-064',
    title: 'Prepare family update (Vitals #64)',
    description: 'CareNest operational task for vitals: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm vitals context #64',
      'Capture outcome for vitals task 64',
      'Log follow-up owner for vitals-64',
    ],
    dependsOn: ['vitals-task-063'],
  },
  {
    id: 'vitals-task-065',
    title: 'Audit documentation completeness (Vitals #65)',
    description: 'CareNest operational task for vitals: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm vitals context #65',
      'Capture outcome for vitals task 65',
      'Log follow-up owner for vitals-65',
    ],
    dependsOn: ['vitals-task-064'],
  },
  {
    id: 'vitals-task-066',
    title: 'Sync with pharmacy / vendor (Vitals #66)',
    description: 'CareNest operational task for vitals: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm vitals context #66',
      'Capture outcome for vitals task 66',
      'Log follow-up owner for vitals-66',
    ],
    dependsOn: ['vitals-task-065'],
  },
  {
    id: 'vitals-task-067',
    title: 'Validate schedule conflicts (Vitals #67)',
    description: 'CareNest operational task for vitals: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm vitals context #67',
      'Capture outcome for vitals task 67',
      'Log follow-up owner for vitals-67',
    ],
    dependsOn: ['vitals-task-066'],
  },
  {
    id: 'vitals-task-068',
    title: 'Close completed workflows (Vitals #68)',
    description: 'CareNest operational task for vitals: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm vitals context #68',
      'Capture outcome for vitals task 68',
      'Log follow-up owner for vitals-68',
    ],
    dependsOn: ['vitals-task-067'],
  },
  {
    id: 'vitals-task-069',
    title: 'Generate shift handoff summary (Vitals #69)',
    description: 'CareNest operational task for vitals: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm vitals context #69',
      'Capture outcome for vitals task 69',
      'Log follow-up owner for vitals-69',
    ],
    dependsOn: ['vitals-task-068'],
  },
  {
    id: 'vitals-task-070',
    title: 'Confirm consent / privacy flags (Vitals #70)',
    description: 'CareNest operational task for vitals: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm vitals context #70',
      'Capture outcome for vitals task 70',
      'Log follow-up owner for vitals-70',
    ],
    dependsOn: ['vitals-task-069'],
  },
  {
    id: 'vitals-task-071',
    title: 'Run compliance checklist (Vitals #71)',
    description: 'CareNest operational task for vitals: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm vitals context #71',
      'Capture outcome for vitals task 71',
      'Log follow-up owner for vitals-71',
    ],
    dependsOn: ['vitals-task-070'],
  },
  {
    id: 'vitals-task-072',
    title: 'Update risk scores (Vitals #72)',
    description: 'CareNest operational task for vitals: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm vitals context #72',
      'Capture outcome for vitals task 72',
      'Log follow-up owner for vitals-72',
    ],
    dependsOn: ['vitals-task-071'],
  },
  {
    id: 'vitals-task-073',
    title: 'Notify on-call clinician (Vitals #73)',
    description: 'CareNest operational task for vitals: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm vitals context #73',
      'Capture outcome for vitals task 73',
      'Log follow-up owner for vitals-73',
    ],
    dependsOn: ['vitals-task-072'],
  },
  {
    id: 'vitals-task-074',
    title: 'Archive stale drafts (Vitals #74)',
    description: 'CareNest operational task for vitals: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm vitals context #74',
      'Capture outcome for vitals task 74',
      'Log follow-up owner for vitals-74',
    ],
    dependsOn: ['vitals-task-073'],
  },
  {
    id: 'vitals-task-075',
    title: 'Export weekly digest (Vitals #75)',
    description: 'CareNest operational task for vitals: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm vitals context #75',
      'Capture outcome for vitals task 75',
      'Log follow-up owner for vitals-75',
    ],
    dependsOn: ['vitals-task-074'],
  },
  {
    id: 'vitals-task-076',
    title: 'Train new caregiver on module (Vitals #76)',
    description: 'CareNest operational task for vitals: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm vitals context #76',
      'Capture outcome for vitals task 76',
      'Log follow-up owner for vitals-76',
    ],
    dependsOn: ['vitals-task-075'],
  },
  {
    id: 'vitals-task-077',
    title: 'Verify device integrations (Vitals #77)',
    description: 'CareNest operational task for vitals: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm vitals context #77',
      'Capture outcome for vitals task 77',
      'Log follow-up owner for vitals-77',
    ],
    dependsOn: ['vitals-task-076'],
  },
  {
    id: 'vitals-task-078',
    title: 'Spot-check critical priorities (Vitals #78)',
    description: 'CareNest operational task for vitals: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm vitals context #78',
      'Capture outcome for vitals task 78',
      'Log follow-up owner for vitals-78',
    ],
    dependsOn: ['vitals-task-077'],
  },
  {
    id: 'vitals-task-079',
    title: 'Align meal / care constraints (Vitals #79)',
    description: 'CareNest operational task for vitals: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm vitals context #79',
      'Capture outcome for vitals task 79',
      'Log follow-up owner for vitals-79',
    ],
    dependsOn: ['vitals-task-078'],
  },
  {
    id: 'vitals-task-080',
    title: 'Publish dashboard widgets (Vitals #80)',
    description: 'CareNest operational task for vitals: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm vitals context #80',
      'Capture outcome for vitals task 80',
      'Log follow-up owner for vitals-80',
    ],
    dependsOn: ['vitals-task-079'],
  },
];

export function listOpenVitalsTasks(): VitalsTask[] {
  return vitalsTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countVitalsTasksByState(): Record<VitalsTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of vitalsTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateVitalsWorkload1(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateVitalsWorkload2(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateVitalsWorkload3(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateVitalsWorkload4(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateVitalsWorkload5(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateVitalsWorkload6(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateVitalsWorkload7(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateVitalsWorkload8(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateVitalsWorkload9(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateVitalsWorkload10(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateVitalsWorkload11(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateVitalsWorkload12(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateVitalsWorkload13(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateVitalsWorkload14(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateVitalsWorkload15(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateVitalsWorkload16(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateVitalsWorkload17(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateVitalsWorkload18(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateVitalsWorkload19(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateVitalsWorkload20(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateVitalsWorkload21(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateVitalsWorkload22(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateVitalsWorkload23(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateVitalsWorkload24(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateVitalsWorkload25(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateVitalsWorkload26(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateVitalsWorkload27(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateVitalsWorkload28(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateVitalsWorkload29(tasks: VitalsTask[] = vitalsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
