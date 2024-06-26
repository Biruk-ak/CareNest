/** Operational task catalog for Incidents */

export type IncidentsTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface IncidentsTask {
  id: string;
  title: string;
  description: string;
  state: IncidentsTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const incidentsTaskCatalog: IncidentsTask[] = [
  {
    id: 'incidents-task-001',
    title: 'Review overnight notes (Incidents #1)',
    description: 'CareNest operational task for incidents: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm incidents context #1',
      'Capture outcome for incidents task 1',
      'Log follow-up owner for incidents-1',
    ],
    dependsOn: [],
  },
  {
    id: 'incidents-task-002',
    title: 'Reconcile open items (Incidents #2)',
    description: 'CareNest operational task for incidents: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm incidents context #2',
      'Capture outcome for incidents task 2',
      'Log follow-up owner for incidents-2',
    ],
    dependsOn: ['incidents-task-001'],
  },
  {
    id: 'incidents-task-003',
    title: 'Escalate overdue cases (Incidents #3)',
    description: 'CareNest operational task for incidents: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm incidents context #3',
      'Capture outcome for incidents task 3',
      'Log follow-up owner for incidents-3',
    ],
    dependsOn: ['incidents-task-002'],
  },
  {
    id: 'incidents-task-004',
    title: 'Prepare family update (Incidents #4)',
    description: 'CareNest operational task for incidents: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm incidents context #4',
      'Capture outcome for incidents task 4',
      'Log follow-up owner for incidents-4',
    ],
    dependsOn: ['incidents-task-003'],
  },
  {
    id: 'incidents-task-005',
    title: 'Audit documentation completeness (Incidents #5)',
    description: 'CareNest operational task for incidents: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm incidents context #5',
      'Capture outcome for incidents task 5',
      'Log follow-up owner for incidents-5',
    ],
    dependsOn: ['incidents-task-004'],
  },
  {
    id: 'incidents-task-006',
    title: 'Sync with pharmacy / vendor (Incidents #6)',
    description: 'CareNest operational task for incidents: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm incidents context #6',
      'Capture outcome for incidents task 6',
      'Log follow-up owner for incidents-6',
    ],
    dependsOn: ['incidents-task-005'],
  },
  {
    id: 'incidents-task-007',
    title: 'Validate schedule conflicts (Incidents #7)',
    description: 'CareNest operational task for incidents: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm incidents context #7',
      'Capture outcome for incidents task 7',
      'Log follow-up owner for incidents-7',
    ],
    dependsOn: ['incidents-task-006'],
  },
  {
    id: 'incidents-task-008',
    title: 'Close completed workflows (Incidents #8)',
    description: 'CareNest operational task for incidents: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm incidents context #8',
      'Capture outcome for incidents task 8',
      'Log follow-up owner for incidents-8',
    ],
    dependsOn: ['incidents-task-007'],
  },
  {
    id: 'incidents-task-009',
    title: 'Generate shift handoff summary (Incidents #9)',
    description: 'CareNest operational task for incidents: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm incidents context #9',
      'Capture outcome for incidents task 9',
      'Log follow-up owner for incidents-9',
    ],
    dependsOn: ['incidents-task-008'],
  },
  {
    id: 'incidents-task-010',
    title: 'Confirm consent / privacy flags (Incidents #10)',
    description: 'CareNest operational task for incidents: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm incidents context #10',
      'Capture outcome for incidents task 10',
      'Log follow-up owner for incidents-10',
    ],
    dependsOn: ['incidents-task-009'],
  },
  {
    id: 'incidents-task-011',
    title: 'Run compliance checklist (Incidents #11)',
    description: 'CareNest operational task for incidents: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm incidents context #11',
      'Capture outcome for incidents task 11',
      'Log follow-up owner for incidents-11',
    ],
    dependsOn: ['incidents-task-010'],
  },
  {
    id: 'incidents-task-012',
    title: 'Update risk scores (Incidents #12)',
    description: 'CareNest operational task for incidents: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm incidents context #12',
      'Capture outcome for incidents task 12',
      'Log follow-up owner for incidents-12',
    ],
    dependsOn: ['incidents-task-011'],
  },
  {
    id: 'incidents-task-013',
    title: 'Notify on-call clinician (Incidents #13)',
    description: 'CareNest operational task for incidents: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm incidents context #13',
      'Capture outcome for incidents task 13',
      'Log follow-up owner for incidents-13',
    ],
    dependsOn: ['incidents-task-012'],
  },
  {
    id: 'incidents-task-014',
    title: 'Archive stale drafts (Incidents #14)',
    description: 'CareNest operational task for incidents: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm incidents context #14',
      'Capture outcome for incidents task 14',
      'Log follow-up owner for incidents-14',
    ],
    dependsOn: ['incidents-task-013'],
  },
  {
    id: 'incidents-task-015',
    title: 'Export weekly digest (Incidents #15)',
    description: 'CareNest operational task for incidents: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm incidents context #15',
      'Capture outcome for incidents task 15',
      'Log follow-up owner for incidents-15',
    ],
    dependsOn: ['incidents-task-014'],
  },
  {
    id: 'incidents-task-016',
    title: 'Train new caregiver on module (Incidents #16)',
    description: 'CareNest operational task for incidents: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm incidents context #16',
      'Capture outcome for incidents task 16',
      'Log follow-up owner for incidents-16',
    ],
    dependsOn: ['incidents-task-015'],
  },
  {
    id: 'incidents-task-017',
    title: 'Verify device integrations (Incidents #17)',
    description: 'CareNest operational task for incidents: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm incidents context #17',
      'Capture outcome for incidents task 17',
      'Log follow-up owner for incidents-17',
    ],
    dependsOn: ['incidents-task-016'],
  },
  {
    id: 'incidents-task-018',
    title: 'Spot-check critical priorities (Incidents #18)',
    description: 'CareNest operational task for incidents: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm incidents context #18',
      'Capture outcome for incidents task 18',
      'Log follow-up owner for incidents-18',
    ],
    dependsOn: ['incidents-task-017'],
  },
  {
    id: 'incidents-task-019',
    title: 'Align meal / care constraints (Incidents #19)',
    description: 'CareNest operational task for incidents: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm incidents context #19',
      'Capture outcome for incidents task 19',
      'Log follow-up owner for incidents-19',
    ],
    dependsOn: ['incidents-task-018'],
  },
  {
    id: 'incidents-task-020',
    title: 'Publish dashboard widgets (Incidents #20)',
    description: 'CareNest operational task for incidents: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm incidents context #20',
      'Capture outcome for incidents task 20',
      'Log follow-up owner for incidents-20',
    ],
    dependsOn: ['incidents-task-019'],
  },
  {
    id: 'incidents-task-021',
    title: 'Review overnight notes (Incidents #21)',
    description: 'CareNest operational task for incidents: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm incidents context #21',
      'Capture outcome for incidents task 21',
      'Log follow-up owner for incidents-21',
    ],
    dependsOn: ['incidents-task-020'],
  },
  {
    id: 'incidents-task-022',
    title: 'Reconcile open items (Incidents #22)',
    description: 'CareNest operational task for incidents: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm incidents context #22',
      'Capture outcome for incidents task 22',
      'Log follow-up owner for incidents-22',
    ],
    dependsOn: ['incidents-task-021'],
  },
  {
    id: 'incidents-task-023',
    title: 'Escalate overdue cases (Incidents #23)',
    description: 'CareNest operational task for incidents: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm incidents context #23',
      'Capture outcome for incidents task 23',
      'Log follow-up owner for incidents-23',
    ],
    dependsOn: ['incidents-task-022'],
  },
  {
    id: 'incidents-task-024',
    title: 'Prepare family update (Incidents #24)',
    description: 'CareNest operational task for incidents: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm incidents context #24',
      'Capture outcome for incidents task 24',
      'Log follow-up owner for incidents-24',
    ],
    dependsOn: ['incidents-task-023'],
  },
  {
    id: 'incidents-task-025',
    title: 'Audit documentation completeness (Incidents #25)',
    description: 'CareNest operational task for incidents: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm incidents context #25',
      'Capture outcome for incidents task 25',
      'Log follow-up owner for incidents-25',
    ],
    dependsOn: ['incidents-task-024'],
  },
  {
    id: 'incidents-task-026',
    title: 'Sync with pharmacy / vendor (Incidents #26)',
    description: 'CareNest operational task for incidents: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm incidents context #26',
      'Capture outcome for incidents task 26',
      'Log follow-up owner for incidents-26',
    ],
    dependsOn: ['incidents-task-025'],
  },
  {
    id: 'incidents-task-027',
    title: 'Validate schedule conflicts (Incidents #27)',
    description: 'CareNest operational task for incidents: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm incidents context #27',
      'Capture outcome for incidents task 27',
      'Log follow-up owner for incidents-27',
    ],
    dependsOn: ['incidents-task-026'],
  },
  {
    id: 'incidents-task-028',
    title: 'Close completed workflows (Incidents #28)',
    description: 'CareNest operational task for incidents: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm incidents context #28',
      'Capture outcome for incidents task 28',
      'Log follow-up owner for incidents-28',
    ],
    dependsOn: ['incidents-task-027'],
  },
  {
    id: 'incidents-task-029',
    title: 'Generate shift handoff summary (Incidents #29)',
    description: 'CareNest operational task for incidents: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm incidents context #29',
      'Capture outcome for incidents task 29',
      'Log follow-up owner for incidents-29',
    ],
    dependsOn: ['incidents-task-028'],
  },
  {
    id: 'incidents-task-030',
    title: 'Confirm consent / privacy flags (Incidents #30)',
    description: 'CareNest operational task for incidents: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm incidents context #30',
      'Capture outcome for incidents task 30',
      'Log follow-up owner for incidents-30',
    ],
    dependsOn: ['incidents-task-029'],
  },
  {
    id: 'incidents-task-031',
    title: 'Run compliance checklist (Incidents #31)',
    description: 'CareNest operational task for incidents: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm incidents context #31',
      'Capture outcome for incidents task 31',
      'Log follow-up owner for incidents-31',
    ],
    dependsOn: ['incidents-task-030'],
  },
  {
    id: 'incidents-task-032',
    title: 'Update risk scores (Incidents #32)',
    description: 'CareNest operational task for incidents: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm incidents context #32',
      'Capture outcome for incidents task 32',
      'Log follow-up owner for incidents-32',
    ],
    dependsOn: ['incidents-task-031'],
  },
  {
    id: 'incidents-task-033',
    title: 'Notify on-call clinician (Incidents #33)',
    description: 'CareNest operational task for incidents: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm incidents context #33',
      'Capture outcome for incidents task 33',
      'Log follow-up owner for incidents-33',
    ],
    dependsOn: ['incidents-task-032'],
  },
  {
    id: 'incidents-task-034',
    title: 'Archive stale drafts (Incidents #34)',
    description: 'CareNest operational task for incidents: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm incidents context #34',
      'Capture outcome for incidents task 34',
      'Log follow-up owner for incidents-34',
    ],
    dependsOn: ['incidents-task-033'],
  },
  {
    id: 'incidents-task-035',
    title: 'Export weekly digest (Incidents #35)',
    description: 'CareNest operational task for incidents: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm incidents context #35',
      'Capture outcome for incidents task 35',
      'Log follow-up owner for incidents-35',
    ],
    dependsOn: ['incidents-task-034'],
  },
  {
    id: 'incidents-task-036',
    title: 'Train new caregiver on module (Incidents #36)',
    description: 'CareNest operational task for incidents: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm incidents context #36',
      'Capture outcome for incidents task 36',
      'Log follow-up owner for incidents-36',
    ],
    dependsOn: ['incidents-task-035'],
  },
  {
    id: 'incidents-task-037',
    title: 'Verify device integrations (Incidents #37)',
    description: 'CareNest operational task for incidents: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm incidents context #37',
      'Capture outcome for incidents task 37',
      'Log follow-up owner for incidents-37',
    ],
    dependsOn: ['incidents-task-036'],
  },
  {
    id: 'incidents-task-038',
    title: 'Spot-check critical priorities (Incidents #38)',
    description: 'CareNest operational task for incidents: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm incidents context #38',
      'Capture outcome for incidents task 38',
      'Log follow-up owner for incidents-38',
    ],
    dependsOn: ['incidents-task-037'],
  },
  {
    id: 'incidents-task-039',
    title: 'Align meal / care constraints (Incidents #39)',
    description: 'CareNest operational task for incidents: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm incidents context #39',
      'Capture outcome for incidents task 39',
      'Log follow-up owner for incidents-39',
    ],
    dependsOn: ['incidents-task-038'],
  },
  {
    id: 'incidents-task-040',
    title: 'Publish dashboard widgets (Incidents #40)',
    description: 'CareNest operational task for incidents: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm incidents context #40',
      'Capture outcome for incidents task 40',
      'Log follow-up owner for incidents-40',
    ],
    dependsOn: ['incidents-task-039'],
  },
  {
    id: 'incidents-task-041',
    title: 'Review overnight notes (Incidents #41)',
    description: 'CareNest operational task for incidents: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm incidents context #41',
      'Capture outcome for incidents task 41',
      'Log follow-up owner for incidents-41',
    ],
    dependsOn: ['incidents-task-040'],
  },
  {
    id: 'incidents-task-042',
    title: 'Reconcile open items (Incidents #42)',
    description: 'CareNest operational task for incidents: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm incidents context #42',
      'Capture outcome for incidents task 42',
      'Log follow-up owner for incidents-42',
    ],
    dependsOn: ['incidents-task-041'],
  },
  {
    id: 'incidents-task-043',
    title: 'Escalate overdue cases (Incidents #43)',
    description: 'CareNest operational task for incidents: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm incidents context #43',
      'Capture outcome for incidents task 43',
      'Log follow-up owner for incidents-43',
    ],
    dependsOn: ['incidents-task-042'],
  },
  {
    id: 'incidents-task-044',
    title: 'Prepare family update (Incidents #44)',
    description: 'CareNest operational task for incidents: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm incidents context #44',
      'Capture outcome for incidents task 44',
      'Log follow-up owner for incidents-44',
    ],
    dependsOn: ['incidents-task-043'],
  },
  {
    id: 'incidents-task-045',
    title: 'Audit documentation completeness (Incidents #45)',
    description: 'CareNest operational task for incidents: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm incidents context #45',
      'Capture outcome for incidents task 45',
      'Log follow-up owner for incidents-45',
    ],
    dependsOn: ['incidents-task-044'],
  },
  {
    id: 'incidents-task-046',
    title: 'Sync with pharmacy / vendor (Incidents #46)',
    description: 'CareNest operational task for incidents: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm incidents context #46',
      'Capture outcome for incidents task 46',
      'Log follow-up owner for incidents-46',
    ],
    dependsOn: ['incidents-task-045'],
  },
  {
    id: 'incidents-task-047',
    title: 'Validate schedule conflicts (Incidents #47)',
    description: 'CareNest operational task for incidents: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm incidents context #47',
      'Capture outcome for incidents task 47',
      'Log follow-up owner for incidents-47',
    ],
    dependsOn: ['incidents-task-046'],
  },
  {
    id: 'incidents-task-048',
    title: 'Close completed workflows (Incidents #48)',
    description: 'CareNest operational task for incidents: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm incidents context #48',
      'Capture outcome for incidents task 48',
      'Log follow-up owner for incidents-48',
    ],
    dependsOn: ['incidents-task-047'],
  },
  {
    id: 'incidents-task-049',
    title: 'Generate shift handoff summary (Incidents #49)',
    description: 'CareNest operational task for incidents: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm incidents context #49',
      'Capture outcome for incidents task 49',
      'Log follow-up owner for incidents-49',
    ],
    dependsOn: ['incidents-task-048'],
  },
  {
    id: 'incidents-task-050',
    title: 'Confirm consent / privacy flags (Incidents #50)',
    description: 'CareNest operational task for incidents: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm incidents context #50',
      'Capture outcome for incidents task 50',
      'Log follow-up owner for incidents-50',
    ],
    dependsOn: ['incidents-task-049'],
  },
  {
    id: 'incidents-task-051',
    title: 'Run compliance checklist (Incidents #51)',
    description: 'CareNest operational task for incidents: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm incidents context #51',
      'Capture outcome for incidents task 51',
      'Log follow-up owner for incidents-51',
    ],
    dependsOn: ['incidents-task-050'],
  },
  {
    id: 'incidents-task-052',
    title: 'Update risk scores (Incidents #52)',
    description: 'CareNest operational task for incidents: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm incidents context #52',
      'Capture outcome for incidents task 52',
      'Log follow-up owner for incidents-52',
    ],
    dependsOn: ['incidents-task-051'],
  },
  {
    id: 'incidents-task-053',
    title: 'Notify on-call clinician (Incidents #53)',
    description: 'CareNest operational task for incidents: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm incidents context #53',
      'Capture outcome for incidents task 53',
      'Log follow-up owner for incidents-53',
    ],
    dependsOn: ['incidents-task-052'],
  },
  {
    id: 'incidents-task-054',
    title: 'Archive stale drafts (Incidents #54)',
    description: 'CareNest operational task for incidents: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm incidents context #54',
      'Capture outcome for incidents task 54',
      'Log follow-up owner for incidents-54',
    ],
    dependsOn: ['incidents-task-053'],
  },
  {
    id: 'incidents-task-055',
    title: 'Export weekly digest (Incidents #55)',
    description: 'CareNest operational task for incidents: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm incidents context #55',
      'Capture outcome for incidents task 55',
      'Log follow-up owner for incidents-55',
    ],
    dependsOn: ['incidents-task-054'],
  },
  {
    id: 'incidents-task-056',
    title: 'Train new caregiver on module (Incidents #56)',
    description: 'CareNest operational task for incidents: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm incidents context #56',
      'Capture outcome for incidents task 56',
      'Log follow-up owner for incidents-56',
    ],
    dependsOn: ['incidents-task-055'],
  },
  {
    id: 'incidents-task-057',
    title: 'Verify device integrations (Incidents #57)',
    description: 'CareNest operational task for incidents: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm incidents context #57',
      'Capture outcome for incidents task 57',
      'Log follow-up owner for incidents-57',
    ],
    dependsOn: ['incidents-task-056'],
  },
  {
    id: 'incidents-task-058',
    title: 'Spot-check critical priorities (Incidents #58)',
    description: 'CareNest operational task for incidents: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm incidents context #58',
      'Capture outcome for incidents task 58',
      'Log follow-up owner for incidents-58',
    ],
    dependsOn: ['incidents-task-057'],
  },
  {
    id: 'incidents-task-059',
    title: 'Align meal / care constraints (Incidents #59)',
    description: 'CareNest operational task for incidents: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm incidents context #59',
      'Capture outcome for incidents task 59',
      'Log follow-up owner for incidents-59',
    ],
    dependsOn: ['incidents-task-058'],
  },
  {
    id: 'incidents-task-060',
    title: 'Publish dashboard widgets (Incidents #60)',
    description: 'CareNest operational task for incidents: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm incidents context #60',
      'Capture outcome for incidents task 60',
      'Log follow-up owner for incidents-60',
    ],
    dependsOn: ['incidents-task-059'],
  },
  {
    id: 'incidents-task-061',
    title: 'Review overnight notes (Incidents #61)',
    description: 'CareNest operational task for incidents: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm incidents context #61',
      'Capture outcome for incidents task 61',
      'Log follow-up owner for incidents-61',
    ],
    dependsOn: ['incidents-task-060'],
  },
  {
    id: 'incidents-task-062',
    title: 'Reconcile open items (Incidents #62)',
    description: 'CareNest operational task for incidents: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm incidents context #62',
      'Capture outcome for incidents task 62',
      'Log follow-up owner for incidents-62',
    ],
    dependsOn: ['incidents-task-061'],
  },
  {
    id: 'incidents-task-063',
    title: 'Escalate overdue cases (Incidents #63)',
    description: 'CareNest operational task for incidents: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm incidents context #63',
      'Capture outcome for incidents task 63',
      'Log follow-up owner for incidents-63',
    ],
    dependsOn: ['incidents-task-062'],
  },
  {
    id: 'incidents-task-064',
    title: 'Prepare family update (Incidents #64)',
    description: 'CareNest operational task for incidents: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm incidents context #64',
      'Capture outcome for incidents task 64',
      'Log follow-up owner for incidents-64',
    ],
    dependsOn: ['incidents-task-063'],
  },
  {
    id: 'incidents-task-065',
    title: 'Audit documentation completeness (Incidents #65)',
    description: 'CareNest operational task for incidents: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm incidents context #65',
      'Capture outcome for incidents task 65',
      'Log follow-up owner for incidents-65',
    ],
    dependsOn: ['incidents-task-064'],
  },
  {
    id: 'incidents-task-066',
    title: 'Sync with pharmacy / vendor (Incidents #66)',
    description: 'CareNest operational task for incidents: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm incidents context #66',
      'Capture outcome for incidents task 66',
      'Log follow-up owner for incidents-66',
    ],
    dependsOn: ['incidents-task-065'],
  },
  {
    id: 'incidents-task-067',
    title: 'Validate schedule conflicts (Incidents #67)',
    description: 'CareNest operational task for incidents: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm incidents context #67',
      'Capture outcome for incidents task 67',
      'Log follow-up owner for incidents-67',
    ],
    dependsOn: ['incidents-task-066'],
  },
  {
    id: 'incidents-task-068',
    title: 'Close completed workflows (Incidents #68)',
    description: 'CareNest operational task for incidents: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm incidents context #68',
      'Capture outcome for incidents task 68',
      'Log follow-up owner for incidents-68',
    ],
    dependsOn: ['incidents-task-067'],
  },
  {
    id: 'incidents-task-069',
    title: 'Generate shift handoff summary (Incidents #69)',
    description: 'CareNest operational task for incidents: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm incidents context #69',
      'Capture outcome for incidents task 69',
      'Log follow-up owner for incidents-69',
    ],
    dependsOn: ['incidents-task-068'],
  },
  {
    id: 'incidents-task-070',
    title: 'Confirm consent / privacy flags (Incidents #70)',
    description: 'CareNest operational task for incidents: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm incidents context #70',
      'Capture outcome for incidents task 70',
      'Log follow-up owner for incidents-70',
    ],
    dependsOn: ['incidents-task-069'],
  },
  {
    id: 'incidents-task-071',
    title: 'Run compliance checklist (Incidents #71)',
    description: 'CareNest operational task for incidents: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm incidents context #71',
      'Capture outcome for incidents task 71',
      'Log follow-up owner for incidents-71',
    ],
    dependsOn: ['incidents-task-070'],
  },
  {
    id: 'incidents-task-072',
    title: 'Update risk scores (Incidents #72)',
    description: 'CareNest operational task for incidents: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm incidents context #72',
      'Capture outcome for incidents task 72',
      'Log follow-up owner for incidents-72',
    ],
    dependsOn: ['incidents-task-071'],
  },
  {
    id: 'incidents-task-073',
    title: 'Notify on-call clinician (Incidents #73)',
    description: 'CareNest operational task for incidents: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm incidents context #73',
      'Capture outcome for incidents task 73',
      'Log follow-up owner for incidents-73',
    ],
    dependsOn: ['incidents-task-072'],
  },
  {
    id: 'incidents-task-074',
    title: 'Archive stale drafts (Incidents #74)',
    description: 'CareNest operational task for incidents: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm incidents context #74',
      'Capture outcome for incidents task 74',
      'Log follow-up owner for incidents-74',
    ],
    dependsOn: ['incidents-task-073'],
  },
  {
    id: 'incidents-task-075',
    title: 'Export weekly digest (Incidents #75)',
    description: 'CareNest operational task for incidents: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm incidents context #75',
      'Capture outcome for incidents task 75',
      'Log follow-up owner for incidents-75',
    ],
    dependsOn: ['incidents-task-074'],
  },
  {
    id: 'incidents-task-076',
    title: 'Train new caregiver on module (Incidents #76)',
    description: 'CareNest operational task for incidents: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm incidents context #76',
      'Capture outcome for incidents task 76',
      'Log follow-up owner for incidents-76',
    ],
    dependsOn: ['incidents-task-075'],
  },
  {
    id: 'incidents-task-077',
    title: 'Verify device integrations (Incidents #77)',
    description: 'CareNest operational task for incidents: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm incidents context #77',
      'Capture outcome for incidents task 77',
      'Log follow-up owner for incidents-77',
    ],
    dependsOn: ['incidents-task-076'],
  },
  {
    id: 'incidents-task-078',
    title: 'Spot-check critical priorities (Incidents #78)',
    description: 'CareNest operational task for incidents: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm incidents context #78',
      'Capture outcome for incidents task 78',
      'Log follow-up owner for incidents-78',
    ],
    dependsOn: ['incidents-task-077'],
  },
  {
    id: 'incidents-task-079',
    title: 'Align meal / care constraints (Incidents #79)',
    description: 'CareNest operational task for incidents: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm incidents context #79',
      'Capture outcome for incidents task 79',
      'Log follow-up owner for incidents-79',
    ],
    dependsOn: ['incidents-task-078'],
  },
  {
    id: 'incidents-task-080',
    title: 'Publish dashboard widgets (Incidents #80)',
    description: 'CareNest operational task for incidents: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm incidents context #80',
      'Capture outcome for incidents task 80',
      'Log follow-up owner for incidents-80',
    ],
    dependsOn: ['incidents-task-079'],
  },
];

export function listOpenIncidentsTasks(): IncidentsTask[] {
  return incidentsTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countIncidentsTasksByState(): Record<IncidentsTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of incidentsTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateIncidentsWorkload1(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateIncidentsWorkload2(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateIncidentsWorkload3(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateIncidentsWorkload4(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateIncidentsWorkload5(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateIncidentsWorkload6(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateIncidentsWorkload7(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateIncidentsWorkload8(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateIncidentsWorkload9(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateIncidentsWorkload10(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateIncidentsWorkload11(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateIncidentsWorkload12(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateIncidentsWorkload13(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateIncidentsWorkload14(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateIncidentsWorkload15(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateIncidentsWorkload16(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateIncidentsWorkload17(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateIncidentsWorkload18(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateIncidentsWorkload19(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateIncidentsWorkload20(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateIncidentsWorkload21(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateIncidentsWorkload22(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateIncidentsWorkload23(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateIncidentsWorkload24(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateIncidentsWorkload25(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateIncidentsWorkload26(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateIncidentsWorkload27(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateIncidentsWorkload28(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateIncidentsWorkload29(tasks: IncidentsTask[] = incidentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
