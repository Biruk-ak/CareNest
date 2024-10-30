/** Operational task catalog for LabResults */

export type LabResultsTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface LabResultsTask {
  id: string;
  title: string;
  description: string;
  state: LabResultsTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const labResultsTaskCatalog: LabResultsTask[] = [
  {
    id: 'lab-results-task-001',
    title: 'Review overnight notes (LabResults #1)',
    description: 'CareNest operational task for lab-results: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm lab-results context #1',
      'Capture outcome for lab-results task 1',
      'Log follow-up owner for lab-results-1',
    ],
    dependsOn: [],
  },
  {
    id: 'lab-results-task-002',
    title: 'Reconcile open items (LabResults #2)',
    description: 'CareNest operational task for lab-results: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm lab-results context #2',
      'Capture outcome for lab-results task 2',
      'Log follow-up owner for lab-results-2',
    ],
    dependsOn: ['lab-results-task-001'],
  },
  {
    id: 'lab-results-task-003',
    title: 'Escalate overdue cases (LabResults #3)',
    description: 'CareNest operational task for lab-results: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm lab-results context #3',
      'Capture outcome for lab-results task 3',
      'Log follow-up owner for lab-results-3',
    ],
    dependsOn: ['lab-results-task-002'],
  },
  {
    id: 'lab-results-task-004',
    title: 'Prepare family update (LabResults #4)',
    description: 'CareNest operational task for lab-results: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm lab-results context #4',
      'Capture outcome for lab-results task 4',
      'Log follow-up owner for lab-results-4',
    ],
    dependsOn: ['lab-results-task-003'],
  },
  {
    id: 'lab-results-task-005',
    title: 'Audit documentation completeness (LabResults #5)',
    description: 'CareNest operational task for lab-results: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm lab-results context #5',
      'Capture outcome for lab-results task 5',
      'Log follow-up owner for lab-results-5',
    ],
    dependsOn: ['lab-results-task-004'],
  },
  {
    id: 'lab-results-task-006',
    title: 'Sync with pharmacy / vendor (LabResults #6)',
    description: 'CareNest operational task for lab-results: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm lab-results context #6',
      'Capture outcome for lab-results task 6',
      'Log follow-up owner for lab-results-6',
    ],
    dependsOn: ['lab-results-task-005'],
  },
  {
    id: 'lab-results-task-007',
    title: 'Validate schedule conflicts (LabResults #7)',
    description: 'CareNest operational task for lab-results: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm lab-results context #7',
      'Capture outcome for lab-results task 7',
      'Log follow-up owner for lab-results-7',
    ],
    dependsOn: ['lab-results-task-006'],
  },
  {
    id: 'lab-results-task-008',
    title: 'Close completed workflows (LabResults #8)',
    description: 'CareNest operational task for lab-results: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm lab-results context #8',
      'Capture outcome for lab-results task 8',
      'Log follow-up owner for lab-results-8',
    ],
    dependsOn: ['lab-results-task-007'],
  },
  {
    id: 'lab-results-task-009',
    title: 'Generate shift handoff summary (LabResults #9)',
    description: 'CareNest operational task for lab-results: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm lab-results context #9',
      'Capture outcome for lab-results task 9',
      'Log follow-up owner for lab-results-9',
    ],
    dependsOn: ['lab-results-task-008'],
  },
  {
    id: 'lab-results-task-010',
    title: 'Confirm consent / privacy flags (LabResults #10)',
    description: 'CareNest operational task for lab-results: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm lab-results context #10',
      'Capture outcome for lab-results task 10',
      'Log follow-up owner for lab-results-10',
    ],
    dependsOn: ['lab-results-task-009'],
  },
  {
    id: 'lab-results-task-011',
    title: 'Run compliance checklist (LabResults #11)',
    description: 'CareNest operational task for lab-results: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm lab-results context #11',
      'Capture outcome for lab-results task 11',
      'Log follow-up owner for lab-results-11',
    ],
    dependsOn: ['lab-results-task-010'],
  },
  {
    id: 'lab-results-task-012',
    title: 'Update risk scores (LabResults #12)',
    description: 'CareNest operational task for lab-results: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm lab-results context #12',
      'Capture outcome for lab-results task 12',
      'Log follow-up owner for lab-results-12',
    ],
    dependsOn: ['lab-results-task-011'],
  },
  {
    id: 'lab-results-task-013',
    title: 'Notify on-call clinician (LabResults #13)',
    description: 'CareNest operational task for lab-results: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm lab-results context #13',
      'Capture outcome for lab-results task 13',
      'Log follow-up owner for lab-results-13',
    ],
    dependsOn: ['lab-results-task-012'],
  },
  {
    id: 'lab-results-task-014',
    title: 'Archive stale drafts (LabResults #14)',
    description: 'CareNest operational task for lab-results: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm lab-results context #14',
      'Capture outcome for lab-results task 14',
      'Log follow-up owner for lab-results-14',
    ],
    dependsOn: ['lab-results-task-013'],
  },
  {
    id: 'lab-results-task-015',
    title: 'Export weekly digest (LabResults #15)',
    description: 'CareNest operational task for lab-results: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm lab-results context #15',
      'Capture outcome for lab-results task 15',
      'Log follow-up owner for lab-results-15',
    ],
    dependsOn: ['lab-results-task-014'],
  },
  {
    id: 'lab-results-task-016',
    title: 'Train new caregiver on module (LabResults #16)',
    description: 'CareNest operational task for lab-results: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm lab-results context #16',
      'Capture outcome for lab-results task 16',
      'Log follow-up owner for lab-results-16',
    ],
    dependsOn: ['lab-results-task-015'],
  },
  {
    id: 'lab-results-task-017',
    title: 'Verify device integrations (LabResults #17)',
    description: 'CareNest operational task for lab-results: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm lab-results context #17',
      'Capture outcome for lab-results task 17',
      'Log follow-up owner for lab-results-17',
    ],
    dependsOn: ['lab-results-task-016'],
  },
  {
    id: 'lab-results-task-018',
    title: 'Spot-check critical priorities (LabResults #18)',
    description: 'CareNest operational task for lab-results: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm lab-results context #18',
      'Capture outcome for lab-results task 18',
      'Log follow-up owner for lab-results-18',
    ],
    dependsOn: ['lab-results-task-017'],
  },
  {
    id: 'lab-results-task-019',
    title: 'Align meal / care constraints (LabResults #19)',
    description: 'CareNest operational task for lab-results: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm lab-results context #19',
      'Capture outcome for lab-results task 19',
      'Log follow-up owner for lab-results-19',
    ],
    dependsOn: ['lab-results-task-018'],
  },
  {
    id: 'lab-results-task-020',
    title: 'Publish dashboard widgets (LabResults #20)',
    description: 'CareNest operational task for lab-results: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm lab-results context #20',
      'Capture outcome for lab-results task 20',
      'Log follow-up owner for lab-results-20',
    ],
    dependsOn: ['lab-results-task-019'],
  },
  {
    id: 'lab-results-task-021',
    title: 'Review overnight notes (LabResults #21)',
    description: 'CareNest operational task for lab-results: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm lab-results context #21',
      'Capture outcome for lab-results task 21',
      'Log follow-up owner for lab-results-21',
    ],
    dependsOn: ['lab-results-task-020'],
  },
  {
    id: 'lab-results-task-022',
    title: 'Reconcile open items (LabResults #22)',
    description: 'CareNest operational task for lab-results: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm lab-results context #22',
      'Capture outcome for lab-results task 22',
      'Log follow-up owner for lab-results-22',
    ],
    dependsOn: ['lab-results-task-021'],
  },
  {
    id: 'lab-results-task-023',
    title: 'Escalate overdue cases (LabResults #23)',
    description: 'CareNest operational task for lab-results: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm lab-results context #23',
      'Capture outcome for lab-results task 23',
      'Log follow-up owner for lab-results-23',
    ],
    dependsOn: ['lab-results-task-022'],
  },
  {
    id: 'lab-results-task-024',
    title: 'Prepare family update (LabResults #24)',
    description: 'CareNest operational task for lab-results: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm lab-results context #24',
      'Capture outcome for lab-results task 24',
      'Log follow-up owner for lab-results-24',
    ],
    dependsOn: ['lab-results-task-023'],
  },
  {
    id: 'lab-results-task-025',
    title: 'Audit documentation completeness (LabResults #25)',
    description: 'CareNest operational task for lab-results: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm lab-results context #25',
      'Capture outcome for lab-results task 25',
      'Log follow-up owner for lab-results-25',
    ],
    dependsOn: ['lab-results-task-024'],
  },
  {
    id: 'lab-results-task-026',
    title: 'Sync with pharmacy / vendor (LabResults #26)',
    description: 'CareNest operational task for lab-results: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm lab-results context #26',
      'Capture outcome for lab-results task 26',
      'Log follow-up owner for lab-results-26',
    ],
    dependsOn: ['lab-results-task-025'],
  },
  {
    id: 'lab-results-task-027',
    title: 'Validate schedule conflicts (LabResults #27)',
    description: 'CareNest operational task for lab-results: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm lab-results context #27',
      'Capture outcome for lab-results task 27',
      'Log follow-up owner for lab-results-27',
    ],
    dependsOn: ['lab-results-task-026'],
  },
  {
    id: 'lab-results-task-028',
    title: 'Close completed workflows (LabResults #28)',
    description: 'CareNest operational task for lab-results: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm lab-results context #28',
      'Capture outcome for lab-results task 28',
      'Log follow-up owner for lab-results-28',
    ],
    dependsOn: ['lab-results-task-027'],
  },
  {
    id: 'lab-results-task-029',
    title: 'Generate shift handoff summary (LabResults #29)',
    description: 'CareNest operational task for lab-results: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm lab-results context #29',
      'Capture outcome for lab-results task 29',
      'Log follow-up owner for lab-results-29',
    ],
    dependsOn: ['lab-results-task-028'],
  },
  {
    id: 'lab-results-task-030',
    title: 'Confirm consent / privacy flags (LabResults #30)',
    description: 'CareNest operational task for lab-results: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm lab-results context #30',
      'Capture outcome for lab-results task 30',
      'Log follow-up owner for lab-results-30',
    ],
    dependsOn: ['lab-results-task-029'],
  },
  {
    id: 'lab-results-task-031',
    title: 'Run compliance checklist (LabResults #31)',
    description: 'CareNest operational task for lab-results: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm lab-results context #31',
      'Capture outcome for lab-results task 31',
      'Log follow-up owner for lab-results-31',
    ],
    dependsOn: ['lab-results-task-030'],
  },
  {
    id: 'lab-results-task-032',
    title: 'Update risk scores (LabResults #32)',
    description: 'CareNest operational task for lab-results: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm lab-results context #32',
      'Capture outcome for lab-results task 32',
      'Log follow-up owner for lab-results-32',
    ],
    dependsOn: ['lab-results-task-031'],
  },
  {
    id: 'lab-results-task-033',
    title: 'Notify on-call clinician (LabResults #33)',
    description: 'CareNest operational task for lab-results: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm lab-results context #33',
      'Capture outcome for lab-results task 33',
      'Log follow-up owner for lab-results-33',
    ],
    dependsOn: ['lab-results-task-032'],
  },
  {
    id: 'lab-results-task-034',
    title: 'Archive stale drafts (LabResults #34)',
    description: 'CareNest operational task for lab-results: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm lab-results context #34',
      'Capture outcome for lab-results task 34',
      'Log follow-up owner for lab-results-34',
    ],
    dependsOn: ['lab-results-task-033'],
  },
  {
    id: 'lab-results-task-035',
    title: 'Export weekly digest (LabResults #35)',
    description: 'CareNest operational task for lab-results: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm lab-results context #35',
      'Capture outcome for lab-results task 35',
      'Log follow-up owner for lab-results-35',
    ],
    dependsOn: ['lab-results-task-034'],
  },
  {
    id: 'lab-results-task-036',
    title: 'Train new caregiver on module (LabResults #36)',
    description: 'CareNest operational task for lab-results: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm lab-results context #36',
      'Capture outcome for lab-results task 36',
      'Log follow-up owner for lab-results-36',
    ],
    dependsOn: ['lab-results-task-035'],
  },
  {
    id: 'lab-results-task-037',
    title: 'Verify device integrations (LabResults #37)',
    description: 'CareNest operational task for lab-results: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm lab-results context #37',
      'Capture outcome for lab-results task 37',
      'Log follow-up owner for lab-results-37',
    ],
    dependsOn: ['lab-results-task-036'],
  },
  {
    id: 'lab-results-task-038',
    title: 'Spot-check critical priorities (LabResults #38)',
    description: 'CareNest operational task for lab-results: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm lab-results context #38',
      'Capture outcome for lab-results task 38',
      'Log follow-up owner for lab-results-38',
    ],
    dependsOn: ['lab-results-task-037'],
  },
  {
    id: 'lab-results-task-039',
    title: 'Align meal / care constraints (LabResults #39)',
    description: 'CareNest operational task for lab-results: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm lab-results context #39',
      'Capture outcome for lab-results task 39',
      'Log follow-up owner for lab-results-39',
    ],
    dependsOn: ['lab-results-task-038'],
  },
  {
    id: 'lab-results-task-040',
    title: 'Publish dashboard widgets (LabResults #40)',
    description: 'CareNest operational task for lab-results: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm lab-results context #40',
      'Capture outcome for lab-results task 40',
      'Log follow-up owner for lab-results-40',
    ],
    dependsOn: ['lab-results-task-039'],
  },
  {
    id: 'lab-results-task-041',
    title: 'Review overnight notes (LabResults #41)',
    description: 'CareNest operational task for lab-results: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm lab-results context #41',
      'Capture outcome for lab-results task 41',
      'Log follow-up owner for lab-results-41',
    ],
    dependsOn: ['lab-results-task-040'],
  },
  {
    id: 'lab-results-task-042',
    title: 'Reconcile open items (LabResults #42)',
    description: 'CareNest operational task for lab-results: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm lab-results context #42',
      'Capture outcome for lab-results task 42',
      'Log follow-up owner for lab-results-42',
    ],
    dependsOn: ['lab-results-task-041'],
  },
  {
    id: 'lab-results-task-043',
    title: 'Escalate overdue cases (LabResults #43)',
    description: 'CareNest operational task for lab-results: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm lab-results context #43',
      'Capture outcome for lab-results task 43',
      'Log follow-up owner for lab-results-43',
    ],
    dependsOn: ['lab-results-task-042'],
  },
  {
    id: 'lab-results-task-044',
    title: 'Prepare family update (LabResults #44)',
    description: 'CareNest operational task for lab-results: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm lab-results context #44',
      'Capture outcome for lab-results task 44',
      'Log follow-up owner for lab-results-44',
    ],
    dependsOn: ['lab-results-task-043'],
  },
  {
    id: 'lab-results-task-045',
    title: 'Audit documentation completeness (LabResults #45)',
    description: 'CareNest operational task for lab-results: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm lab-results context #45',
      'Capture outcome for lab-results task 45',
      'Log follow-up owner for lab-results-45',
    ],
    dependsOn: ['lab-results-task-044'],
  },
  {
    id: 'lab-results-task-046',
    title: 'Sync with pharmacy / vendor (LabResults #46)',
    description: 'CareNest operational task for lab-results: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm lab-results context #46',
      'Capture outcome for lab-results task 46',
      'Log follow-up owner for lab-results-46',
    ],
    dependsOn: ['lab-results-task-045'],
  },
  {
    id: 'lab-results-task-047',
    title: 'Validate schedule conflicts (LabResults #47)',
    description: 'CareNest operational task for lab-results: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm lab-results context #47',
      'Capture outcome for lab-results task 47',
      'Log follow-up owner for lab-results-47',
    ],
    dependsOn: ['lab-results-task-046'],
  },
  {
    id: 'lab-results-task-048',
    title: 'Close completed workflows (LabResults #48)',
    description: 'CareNest operational task for lab-results: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm lab-results context #48',
      'Capture outcome for lab-results task 48',
      'Log follow-up owner for lab-results-48',
    ],
    dependsOn: ['lab-results-task-047'],
  },
  {
    id: 'lab-results-task-049',
    title: 'Generate shift handoff summary (LabResults #49)',
    description: 'CareNest operational task for lab-results: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm lab-results context #49',
      'Capture outcome for lab-results task 49',
      'Log follow-up owner for lab-results-49',
    ],
    dependsOn: ['lab-results-task-048'],
  },
  {
    id: 'lab-results-task-050',
    title: 'Confirm consent / privacy flags (LabResults #50)',
    description: 'CareNest operational task for lab-results: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm lab-results context #50',
      'Capture outcome for lab-results task 50',
      'Log follow-up owner for lab-results-50',
    ],
    dependsOn: ['lab-results-task-049'],
  },
  {
    id: 'lab-results-task-051',
    title: 'Run compliance checklist (LabResults #51)',
    description: 'CareNest operational task for lab-results: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm lab-results context #51',
      'Capture outcome for lab-results task 51',
      'Log follow-up owner for lab-results-51',
    ],
    dependsOn: ['lab-results-task-050'],
  },
  {
    id: 'lab-results-task-052',
    title: 'Update risk scores (LabResults #52)',
    description: 'CareNest operational task for lab-results: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm lab-results context #52',
      'Capture outcome for lab-results task 52',
      'Log follow-up owner for lab-results-52',
    ],
    dependsOn: ['lab-results-task-051'],
  },
  {
    id: 'lab-results-task-053',
    title: 'Notify on-call clinician (LabResults #53)',
    description: 'CareNest operational task for lab-results: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm lab-results context #53',
      'Capture outcome for lab-results task 53',
      'Log follow-up owner for lab-results-53',
    ],
    dependsOn: ['lab-results-task-052'],
  },
  {
    id: 'lab-results-task-054',
    title: 'Archive stale drafts (LabResults #54)',
    description: 'CareNest operational task for lab-results: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm lab-results context #54',
      'Capture outcome for lab-results task 54',
      'Log follow-up owner for lab-results-54',
    ],
    dependsOn: ['lab-results-task-053'],
  },
  {
    id: 'lab-results-task-055',
    title: 'Export weekly digest (LabResults #55)',
    description: 'CareNest operational task for lab-results: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm lab-results context #55',
      'Capture outcome for lab-results task 55',
      'Log follow-up owner for lab-results-55',
    ],
    dependsOn: ['lab-results-task-054'],
  },
  {
    id: 'lab-results-task-056',
    title: 'Train new caregiver on module (LabResults #56)',
    description: 'CareNest operational task for lab-results: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm lab-results context #56',
      'Capture outcome for lab-results task 56',
      'Log follow-up owner for lab-results-56',
    ],
    dependsOn: ['lab-results-task-055'],
  },
  {
    id: 'lab-results-task-057',
    title: 'Verify device integrations (LabResults #57)',
    description: 'CareNest operational task for lab-results: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm lab-results context #57',
      'Capture outcome for lab-results task 57',
      'Log follow-up owner for lab-results-57',
    ],
    dependsOn: ['lab-results-task-056'],
  },
  {
    id: 'lab-results-task-058',
    title: 'Spot-check critical priorities (LabResults #58)',
    description: 'CareNest operational task for lab-results: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm lab-results context #58',
      'Capture outcome for lab-results task 58',
      'Log follow-up owner for lab-results-58',
    ],
    dependsOn: ['lab-results-task-057'],
  },
  {
    id: 'lab-results-task-059',
    title: 'Align meal / care constraints (LabResults #59)',
    description: 'CareNest operational task for lab-results: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm lab-results context #59',
      'Capture outcome for lab-results task 59',
      'Log follow-up owner for lab-results-59',
    ],
    dependsOn: ['lab-results-task-058'],
  },
  {
    id: 'lab-results-task-060',
    title: 'Publish dashboard widgets (LabResults #60)',
    description: 'CareNest operational task for lab-results: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm lab-results context #60',
      'Capture outcome for lab-results task 60',
      'Log follow-up owner for lab-results-60',
    ],
    dependsOn: ['lab-results-task-059'],
  },
  {
    id: 'lab-results-task-061',
    title: 'Review overnight notes (LabResults #61)',
    description: 'CareNest operational task for lab-results: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm lab-results context #61',
      'Capture outcome for lab-results task 61',
      'Log follow-up owner for lab-results-61',
    ],
    dependsOn: ['lab-results-task-060'],
  },
  {
    id: 'lab-results-task-062',
    title: 'Reconcile open items (LabResults #62)',
    description: 'CareNest operational task for lab-results: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm lab-results context #62',
      'Capture outcome for lab-results task 62',
      'Log follow-up owner for lab-results-62',
    ],
    dependsOn: ['lab-results-task-061'],
  },
  {
    id: 'lab-results-task-063',
    title: 'Escalate overdue cases (LabResults #63)',
    description: 'CareNest operational task for lab-results: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm lab-results context #63',
      'Capture outcome for lab-results task 63',
      'Log follow-up owner for lab-results-63',
    ],
    dependsOn: ['lab-results-task-062'],
  },
  {
    id: 'lab-results-task-064',
    title: 'Prepare family update (LabResults #64)',
    description: 'CareNest operational task for lab-results: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm lab-results context #64',
      'Capture outcome for lab-results task 64',
      'Log follow-up owner for lab-results-64',
    ],
    dependsOn: ['lab-results-task-063'],
  },
  {
    id: 'lab-results-task-065',
    title: 'Audit documentation completeness (LabResults #65)',
    description: 'CareNest operational task for lab-results: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm lab-results context #65',
      'Capture outcome for lab-results task 65',
      'Log follow-up owner for lab-results-65',
    ],
    dependsOn: ['lab-results-task-064'],
  },
  {
    id: 'lab-results-task-066',
    title: 'Sync with pharmacy / vendor (LabResults #66)',
    description: 'CareNest operational task for lab-results: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm lab-results context #66',
      'Capture outcome for lab-results task 66',
      'Log follow-up owner for lab-results-66',
    ],
    dependsOn: ['lab-results-task-065'],
  },
  {
    id: 'lab-results-task-067',
    title: 'Validate schedule conflicts (LabResults #67)',
    description: 'CareNest operational task for lab-results: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm lab-results context #67',
      'Capture outcome for lab-results task 67',
      'Log follow-up owner for lab-results-67',
    ],
    dependsOn: ['lab-results-task-066'],
  },
  {
    id: 'lab-results-task-068',
    title: 'Close completed workflows (LabResults #68)',
    description: 'CareNest operational task for lab-results: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm lab-results context #68',
      'Capture outcome for lab-results task 68',
      'Log follow-up owner for lab-results-68',
    ],
    dependsOn: ['lab-results-task-067'],
  },
  {
    id: 'lab-results-task-069',
    title: 'Generate shift handoff summary (LabResults #69)',
    description: 'CareNest operational task for lab-results: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm lab-results context #69',
      'Capture outcome for lab-results task 69',
      'Log follow-up owner for lab-results-69',
    ],
    dependsOn: ['lab-results-task-068'],
  },
  {
    id: 'lab-results-task-070',
    title: 'Confirm consent / privacy flags (LabResults #70)',
    description: 'CareNest operational task for lab-results: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm lab-results context #70',
      'Capture outcome for lab-results task 70',
      'Log follow-up owner for lab-results-70',
    ],
    dependsOn: ['lab-results-task-069'],
  },
  {
    id: 'lab-results-task-071',
    title: 'Run compliance checklist (LabResults #71)',
    description: 'CareNest operational task for lab-results: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm lab-results context #71',
      'Capture outcome for lab-results task 71',
      'Log follow-up owner for lab-results-71',
    ],
    dependsOn: ['lab-results-task-070'],
  },
  {
    id: 'lab-results-task-072',
    title: 'Update risk scores (LabResults #72)',
    description: 'CareNest operational task for lab-results: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm lab-results context #72',
      'Capture outcome for lab-results task 72',
      'Log follow-up owner for lab-results-72',
    ],
    dependsOn: ['lab-results-task-071'],
  },
  {
    id: 'lab-results-task-073',
    title: 'Notify on-call clinician (LabResults #73)',
    description: 'CareNest operational task for lab-results: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm lab-results context #73',
      'Capture outcome for lab-results task 73',
      'Log follow-up owner for lab-results-73',
    ],
    dependsOn: ['lab-results-task-072'],
  },
  {
    id: 'lab-results-task-074',
    title: 'Archive stale drafts (LabResults #74)',
    description: 'CareNest operational task for lab-results: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm lab-results context #74',
      'Capture outcome for lab-results task 74',
      'Log follow-up owner for lab-results-74',
    ],
    dependsOn: ['lab-results-task-073'],
  },
  {
    id: 'lab-results-task-075',
    title: 'Export weekly digest (LabResults #75)',
    description: 'CareNest operational task for lab-results: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm lab-results context #75',
      'Capture outcome for lab-results task 75',
      'Log follow-up owner for lab-results-75',
    ],
    dependsOn: ['lab-results-task-074'],
  },
  {
    id: 'lab-results-task-076',
    title: 'Train new caregiver on module (LabResults #76)',
    description: 'CareNest operational task for lab-results: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm lab-results context #76',
      'Capture outcome for lab-results task 76',
      'Log follow-up owner for lab-results-76',
    ],
    dependsOn: ['lab-results-task-075'],
  },
  {
    id: 'lab-results-task-077',
    title: 'Verify device integrations (LabResults #77)',
    description: 'CareNest operational task for lab-results: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm lab-results context #77',
      'Capture outcome for lab-results task 77',
      'Log follow-up owner for lab-results-77',
    ],
    dependsOn: ['lab-results-task-076'],
  },
  {
    id: 'lab-results-task-078',
    title: 'Spot-check critical priorities (LabResults #78)',
    description: 'CareNest operational task for lab-results: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm lab-results context #78',
      'Capture outcome for lab-results task 78',
      'Log follow-up owner for lab-results-78',
    ],
    dependsOn: ['lab-results-task-077'],
  },
  {
    id: 'lab-results-task-079',
    title: 'Align meal / care constraints (LabResults #79)',
    description: 'CareNest operational task for lab-results: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm lab-results context #79',
      'Capture outcome for lab-results task 79',
      'Log follow-up owner for lab-results-79',
    ],
    dependsOn: ['lab-results-task-078'],
  },
  {
    id: 'lab-results-task-080',
    title: 'Publish dashboard widgets (LabResults #80)',
    description: 'CareNest operational task for lab-results: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm lab-results context #80',
      'Capture outcome for lab-results task 80',
      'Log follow-up owner for lab-results-80',
    ],
    dependsOn: ['lab-results-task-079'],
  },
];

export function listOpenLabResultsTasks(): LabResultsTask[] {
  return labResultsTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countLabResultsTasksByState(): Record<LabResultsTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of labResultsTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateLabResultsWorkload1(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateLabResultsWorkload2(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateLabResultsWorkload3(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateLabResultsWorkload4(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateLabResultsWorkload5(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateLabResultsWorkload6(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateLabResultsWorkload7(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateLabResultsWorkload8(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateLabResultsWorkload9(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateLabResultsWorkload10(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateLabResultsWorkload11(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateLabResultsWorkload12(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateLabResultsWorkload13(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateLabResultsWorkload14(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateLabResultsWorkload15(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateLabResultsWorkload16(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateLabResultsWorkload17(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateLabResultsWorkload18(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateLabResultsWorkload19(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateLabResultsWorkload20(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateLabResultsWorkload21(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateLabResultsWorkload22(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateLabResultsWorkload23(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateLabResultsWorkload24(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateLabResultsWorkload25(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateLabResultsWorkload26(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateLabResultsWorkload27(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateLabResultsWorkload28(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateLabResultsWorkload29(tasks: LabResultsTask[] = labResultsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
