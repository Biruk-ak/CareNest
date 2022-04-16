/** Operational task catalog for Appointments */

export type AppointmentsTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface AppointmentsTask {
  id: string;
  title: string;
  description: string;
  state: AppointmentsTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const appointmentsTaskCatalog: AppointmentsTask[] = [
  {
    id: 'appointments-task-001',
    title: 'Review overnight notes (Appointments #1)',
    description: 'CareNest operational task for appointments: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm appointments context #1',
      'Capture outcome for appointments task 1',
      'Log follow-up owner for appointments-1',
    ],
    dependsOn: [],
  },
  {
    id: 'appointments-task-002',
    title: 'Reconcile open items (Appointments #2)',
    description: 'CareNest operational task for appointments: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm appointments context #2',
      'Capture outcome for appointments task 2',
      'Log follow-up owner for appointments-2',
    ],
    dependsOn: ['appointments-task-001'],
  },
  {
    id: 'appointments-task-003',
    title: 'Escalate overdue cases (Appointments #3)',
    description: 'CareNest operational task for appointments: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm appointments context #3',
      'Capture outcome for appointments task 3',
      'Log follow-up owner for appointments-3',
    ],
    dependsOn: ['appointments-task-002'],
  },
  {
    id: 'appointments-task-004',
    title: 'Prepare family update (Appointments #4)',
    description: 'CareNest operational task for appointments: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm appointments context #4',
      'Capture outcome for appointments task 4',
      'Log follow-up owner for appointments-4',
    ],
    dependsOn: ['appointments-task-003'],
  },
  {
    id: 'appointments-task-005',
    title: 'Audit documentation completeness (Appointments #5)',
    description: 'CareNest operational task for appointments: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm appointments context #5',
      'Capture outcome for appointments task 5',
      'Log follow-up owner for appointments-5',
    ],
    dependsOn: ['appointments-task-004'],
  },
  {
    id: 'appointments-task-006',
    title: 'Sync with pharmacy / vendor (Appointments #6)',
    description: 'CareNest operational task for appointments: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm appointments context #6',
      'Capture outcome for appointments task 6',
      'Log follow-up owner for appointments-6',
    ],
    dependsOn: ['appointments-task-005'],
  },
  {
    id: 'appointments-task-007',
    title: 'Validate schedule conflicts (Appointments #7)',
    description: 'CareNest operational task for appointments: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm appointments context #7',
      'Capture outcome for appointments task 7',
      'Log follow-up owner for appointments-7',
    ],
    dependsOn: ['appointments-task-006'],
  },
  {
    id: 'appointments-task-008',
    title: 'Close completed workflows (Appointments #8)',
    description: 'CareNest operational task for appointments: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm appointments context #8',
      'Capture outcome for appointments task 8',
      'Log follow-up owner for appointments-8',
    ],
    dependsOn: ['appointments-task-007'],
  },
  {
    id: 'appointments-task-009',
    title: 'Generate shift handoff summary (Appointments #9)',
    description: 'CareNest operational task for appointments: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm appointments context #9',
      'Capture outcome for appointments task 9',
      'Log follow-up owner for appointments-9',
    ],
    dependsOn: ['appointments-task-008'],
  },
  {
    id: 'appointments-task-010',
    title: 'Confirm consent / privacy flags (Appointments #10)',
    description: 'CareNest operational task for appointments: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm appointments context #10',
      'Capture outcome for appointments task 10',
      'Log follow-up owner for appointments-10',
    ],
    dependsOn: ['appointments-task-009'],
  },
  {
    id: 'appointments-task-011',
    title: 'Run compliance checklist (Appointments #11)',
    description: 'CareNest operational task for appointments: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm appointments context #11',
      'Capture outcome for appointments task 11',
      'Log follow-up owner for appointments-11',
    ],
    dependsOn: ['appointments-task-010'],
  },
  {
    id: 'appointments-task-012',
    title: 'Update risk scores (Appointments #12)',
    description: 'CareNest operational task for appointments: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm appointments context #12',
      'Capture outcome for appointments task 12',
      'Log follow-up owner for appointments-12',
    ],
    dependsOn: ['appointments-task-011'],
  },
  {
    id: 'appointments-task-013',
    title: 'Notify on-call clinician (Appointments #13)',
    description: 'CareNest operational task for appointments: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm appointments context #13',
      'Capture outcome for appointments task 13',
      'Log follow-up owner for appointments-13',
    ],
    dependsOn: ['appointments-task-012'],
  },
  {
    id: 'appointments-task-014',
    title: 'Archive stale drafts (Appointments #14)',
    description: 'CareNest operational task for appointments: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm appointments context #14',
      'Capture outcome for appointments task 14',
      'Log follow-up owner for appointments-14',
    ],
    dependsOn: ['appointments-task-013'],
  },
  {
    id: 'appointments-task-015',
    title: 'Export weekly digest (Appointments #15)',
    description: 'CareNest operational task for appointments: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm appointments context #15',
      'Capture outcome for appointments task 15',
      'Log follow-up owner for appointments-15',
    ],
    dependsOn: ['appointments-task-014'],
  },
  {
    id: 'appointments-task-016',
    title: 'Train new caregiver on module (Appointments #16)',
    description: 'CareNest operational task for appointments: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm appointments context #16',
      'Capture outcome for appointments task 16',
      'Log follow-up owner for appointments-16',
    ],
    dependsOn: ['appointments-task-015'],
  },
  {
    id: 'appointments-task-017',
    title: 'Verify device integrations (Appointments #17)',
    description: 'CareNest operational task for appointments: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm appointments context #17',
      'Capture outcome for appointments task 17',
      'Log follow-up owner for appointments-17',
    ],
    dependsOn: ['appointments-task-016'],
  },
  {
    id: 'appointments-task-018',
    title: 'Spot-check critical priorities (Appointments #18)',
    description: 'CareNest operational task for appointments: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm appointments context #18',
      'Capture outcome for appointments task 18',
      'Log follow-up owner for appointments-18',
    ],
    dependsOn: ['appointments-task-017'],
  },
  {
    id: 'appointments-task-019',
    title: 'Align meal / care constraints (Appointments #19)',
    description: 'CareNest operational task for appointments: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm appointments context #19',
      'Capture outcome for appointments task 19',
      'Log follow-up owner for appointments-19',
    ],
    dependsOn: ['appointments-task-018'],
  },
  {
    id: 'appointments-task-020',
    title: 'Publish dashboard widgets (Appointments #20)',
    description: 'CareNest operational task for appointments: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm appointments context #20',
      'Capture outcome for appointments task 20',
      'Log follow-up owner for appointments-20',
    ],
    dependsOn: ['appointments-task-019'],
  },
  {
    id: 'appointments-task-021',
    title: 'Review overnight notes (Appointments #21)',
    description: 'CareNest operational task for appointments: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm appointments context #21',
      'Capture outcome for appointments task 21',
      'Log follow-up owner for appointments-21',
    ],
    dependsOn: ['appointments-task-020'],
  },
  {
    id: 'appointments-task-022',
    title: 'Reconcile open items (Appointments #22)',
    description: 'CareNest operational task for appointments: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm appointments context #22',
      'Capture outcome for appointments task 22',
      'Log follow-up owner for appointments-22',
    ],
    dependsOn: ['appointments-task-021'],
  },
  {
    id: 'appointments-task-023',
    title: 'Escalate overdue cases (Appointments #23)',
    description: 'CareNest operational task for appointments: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm appointments context #23',
      'Capture outcome for appointments task 23',
      'Log follow-up owner for appointments-23',
    ],
    dependsOn: ['appointments-task-022'],
  },
  {
    id: 'appointments-task-024',
    title: 'Prepare family update (Appointments #24)',
    description: 'CareNest operational task for appointments: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm appointments context #24',
      'Capture outcome for appointments task 24',
      'Log follow-up owner for appointments-24',
    ],
    dependsOn: ['appointments-task-023'],
  },
  {
    id: 'appointments-task-025',
    title: 'Audit documentation completeness (Appointments #25)',
    description: 'CareNest operational task for appointments: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm appointments context #25',
      'Capture outcome for appointments task 25',
      'Log follow-up owner for appointments-25',
    ],
    dependsOn: ['appointments-task-024'],
  },
  {
    id: 'appointments-task-026',
    title: 'Sync with pharmacy / vendor (Appointments #26)',
    description: 'CareNest operational task for appointments: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm appointments context #26',
      'Capture outcome for appointments task 26',
      'Log follow-up owner for appointments-26',
    ],
    dependsOn: ['appointments-task-025'],
  },
  {
    id: 'appointments-task-027',
    title: 'Validate schedule conflicts (Appointments #27)',
    description: 'CareNest operational task for appointments: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm appointments context #27',
      'Capture outcome for appointments task 27',
      'Log follow-up owner for appointments-27',
    ],
    dependsOn: ['appointments-task-026'],
  },
  {
    id: 'appointments-task-028',
    title: 'Close completed workflows (Appointments #28)',
    description: 'CareNest operational task for appointments: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm appointments context #28',
      'Capture outcome for appointments task 28',
      'Log follow-up owner for appointments-28',
    ],
    dependsOn: ['appointments-task-027'],
  },
  {
    id: 'appointments-task-029',
    title: 'Generate shift handoff summary (Appointments #29)',
    description: 'CareNest operational task for appointments: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm appointments context #29',
      'Capture outcome for appointments task 29',
      'Log follow-up owner for appointments-29',
    ],
    dependsOn: ['appointments-task-028'],
  },
  {
    id: 'appointments-task-030',
    title: 'Confirm consent / privacy flags (Appointments #30)',
    description: 'CareNest operational task for appointments: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm appointments context #30',
      'Capture outcome for appointments task 30',
      'Log follow-up owner for appointments-30',
    ],
    dependsOn: ['appointments-task-029'],
  },
  {
    id: 'appointments-task-031',
    title: 'Run compliance checklist (Appointments #31)',
    description: 'CareNest operational task for appointments: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm appointments context #31',
      'Capture outcome for appointments task 31',
      'Log follow-up owner for appointments-31',
    ],
    dependsOn: ['appointments-task-030'],
  },
  {
    id: 'appointments-task-032',
    title: 'Update risk scores (Appointments #32)',
    description: 'CareNest operational task for appointments: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm appointments context #32',
      'Capture outcome for appointments task 32',
      'Log follow-up owner for appointments-32',
    ],
    dependsOn: ['appointments-task-031'],
  },
  {
    id: 'appointments-task-033',
    title: 'Notify on-call clinician (Appointments #33)',
    description: 'CareNest operational task for appointments: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm appointments context #33',
      'Capture outcome for appointments task 33',
      'Log follow-up owner for appointments-33',
    ],
    dependsOn: ['appointments-task-032'],
  },
  {
    id: 'appointments-task-034',
    title: 'Archive stale drafts (Appointments #34)',
    description: 'CareNest operational task for appointments: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm appointments context #34',
      'Capture outcome for appointments task 34',
      'Log follow-up owner for appointments-34',
    ],
    dependsOn: ['appointments-task-033'],
  },
  {
    id: 'appointments-task-035',
    title: 'Export weekly digest (Appointments #35)',
    description: 'CareNest operational task for appointments: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm appointments context #35',
      'Capture outcome for appointments task 35',
      'Log follow-up owner for appointments-35',
    ],
    dependsOn: ['appointments-task-034'],
  },
  {
    id: 'appointments-task-036',
    title: 'Train new caregiver on module (Appointments #36)',
    description: 'CareNest operational task for appointments: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm appointments context #36',
      'Capture outcome for appointments task 36',
      'Log follow-up owner for appointments-36',
    ],
    dependsOn: ['appointments-task-035'],
  },
  {
    id: 'appointments-task-037',
    title: 'Verify device integrations (Appointments #37)',
    description: 'CareNest operational task for appointments: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm appointments context #37',
      'Capture outcome for appointments task 37',
      'Log follow-up owner for appointments-37',
    ],
    dependsOn: ['appointments-task-036'],
  },
  {
    id: 'appointments-task-038',
    title: 'Spot-check critical priorities (Appointments #38)',
    description: 'CareNest operational task for appointments: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm appointments context #38',
      'Capture outcome for appointments task 38',
      'Log follow-up owner for appointments-38',
    ],
    dependsOn: ['appointments-task-037'],
  },
  {
    id: 'appointments-task-039',
    title: 'Align meal / care constraints (Appointments #39)',
    description: 'CareNest operational task for appointments: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm appointments context #39',
      'Capture outcome for appointments task 39',
      'Log follow-up owner for appointments-39',
    ],
    dependsOn: ['appointments-task-038'],
  },
  {
    id: 'appointments-task-040',
    title: 'Publish dashboard widgets (Appointments #40)',
    description: 'CareNest operational task for appointments: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm appointments context #40',
      'Capture outcome for appointments task 40',
      'Log follow-up owner for appointments-40',
    ],
    dependsOn: ['appointments-task-039'],
  },
  {
    id: 'appointments-task-041',
    title: 'Review overnight notes (Appointments #41)',
    description: 'CareNest operational task for appointments: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm appointments context #41',
      'Capture outcome for appointments task 41',
      'Log follow-up owner for appointments-41',
    ],
    dependsOn: ['appointments-task-040'],
  },
  {
    id: 'appointments-task-042',
    title: 'Reconcile open items (Appointments #42)',
    description: 'CareNest operational task for appointments: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm appointments context #42',
      'Capture outcome for appointments task 42',
      'Log follow-up owner for appointments-42',
    ],
    dependsOn: ['appointments-task-041'],
  },
  {
    id: 'appointments-task-043',
    title: 'Escalate overdue cases (Appointments #43)',
    description: 'CareNest operational task for appointments: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm appointments context #43',
      'Capture outcome for appointments task 43',
      'Log follow-up owner for appointments-43',
    ],
    dependsOn: ['appointments-task-042'],
  },
  {
    id: 'appointments-task-044',
    title: 'Prepare family update (Appointments #44)',
    description: 'CareNest operational task for appointments: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm appointments context #44',
      'Capture outcome for appointments task 44',
      'Log follow-up owner for appointments-44',
    ],
    dependsOn: ['appointments-task-043'],
  },
  {
    id: 'appointments-task-045',
    title: 'Audit documentation completeness (Appointments #45)',
    description: 'CareNest operational task for appointments: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm appointments context #45',
      'Capture outcome for appointments task 45',
      'Log follow-up owner for appointments-45',
    ],
    dependsOn: ['appointments-task-044'],
  },
  {
    id: 'appointments-task-046',
    title: 'Sync with pharmacy / vendor (Appointments #46)',
    description: 'CareNest operational task for appointments: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm appointments context #46',
      'Capture outcome for appointments task 46',
      'Log follow-up owner for appointments-46',
    ],
    dependsOn: ['appointments-task-045'],
  },
  {
    id: 'appointments-task-047',
    title: 'Validate schedule conflicts (Appointments #47)',
    description: 'CareNest operational task for appointments: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm appointments context #47',
      'Capture outcome for appointments task 47',
      'Log follow-up owner for appointments-47',
    ],
    dependsOn: ['appointments-task-046'],
  },
  {
    id: 'appointments-task-048',
    title: 'Close completed workflows (Appointments #48)',
    description: 'CareNest operational task for appointments: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm appointments context #48',
      'Capture outcome for appointments task 48',
      'Log follow-up owner for appointments-48',
    ],
    dependsOn: ['appointments-task-047'],
  },
  {
    id: 'appointments-task-049',
    title: 'Generate shift handoff summary (Appointments #49)',
    description: 'CareNest operational task for appointments: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm appointments context #49',
      'Capture outcome for appointments task 49',
      'Log follow-up owner for appointments-49',
    ],
    dependsOn: ['appointments-task-048'],
  },
  {
    id: 'appointments-task-050',
    title: 'Confirm consent / privacy flags (Appointments #50)',
    description: 'CareNest operational task for appointments: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm appointments context #50',
      'Capture outcome for appointments task 50',
      'Log follow-up owner for appointments-50',
    ],
    dependsOn: ['appointments-task-049'],
  },
  {
    id: 'appointments-task-051',
    title: 'Run compliance checklist (Appointments #51)',
    description: 'CareNest operational task for appointments: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm appointments context #51',
      'Capture outcome for appointments task 51',
      'Log follow-up owner for appointments-51',
    ],
    dependsOn: ['appointments-task-050'],
  },
  {
    id: 'appointments-task-052',
    title: 'Update risk scores (Appointments #52)',
    description: 'CareNest operational task for appointments: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm appointments context #52',
      'Capture outcome for appointments task 52',
      'Log follow-up owner for appointments-52',
    ],
    dependsOn: ['appointments-task-051'],
  },
  {
    id: 'appointments-task-053',
    title: 'Notify on-call clinician (Appointments #53)',
    description: 'CareNest operational task for appointments: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm appointments context #53',
      'Capture outcome for appointments task 53',
      'Log follow-up owner for appointments-53',
    ],
    dependsOn: ['appointments-task-052'],
  },
  {
    id: 'appointments-task-054',
    title: 'Archive stale drafts (Appointments #54)',
    description: 'CareNest operational task for appointments: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm appointments context #54',
      'Capture outcome for appointments task 54',
      'Log follow-up owner for appointments-54',
    ],
    dependsOn: ['appointments-task-053'],
  },
  {
    id: 'appointments-task-055',
    title: 'Export weekly digest (Appointments #55)',
    description: 'CareNest operational task for appointments: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm appointments context #55',
      'Capture outcome for appointments task 55',
      'Log follow-up owner for appointments-55',
    ],
    dependsOn: ['appointments-task-054'],
  },
  {
    id: 'appointments-task-056',
    title: 'Train new caregiver on module (Appointments #56)',
    description: 'CareNest operational task for appointments: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm appointments context #56',
      'Capture outcome for appointments task 56',
      'Log follow-up owner for appointments-56',
    ],
    dependsOn: ['appointments-task-055'],
  },
  {
    id: 'appointments-task-057',
    title: 'Verify device integrations (Appointments #57)',
    description: 'CareNest operational task for appointments: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm appointments context #57',
      'Capture outcome for appointments task 57',
      'Log follow-up owner for appointments-57',
    ],
    dependsOn: ['appointments-task-056'],
  },
  {
    id: 'appointments-task-058',
    title: 'Spot-check critical priorities (Appointments #58)',
    description: 'CareNest operational task for appointments: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm appointments context #58',
      'Capture outcome for appointments task 58',
      'Log follow-up owner for appointments-58',
    ],
    dependsOn: ['appointments-task-057'],
  },
  {
    id: 'appointments-task-059',
    title: 'Align meal / care constraints (Appointments #59)',
    description: 'CareNest operational task for appointments: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm appointments context #59',
      'Capture outcome for appointments task 59',
      'Log follow-up owner for appointments-59',
    ],
    dependsOn: ['appointments-task-058'],
  },
  {
    id: 'appointments-task-060',
    title: 'Publish dashboard widgets (Appointments #60)',
    description: 'CareNest operational task for appointments: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm appointments context #60',
      'Capture outcome for appointments task 60',
      'Log follow-up owner for appointments-60',
    ],
    dependsOn: ['appointments-task-059'],
  },
  {
    id: 'appointments-task-061',
    title: 'Review overnight notes (Appointments #61)',
    description: 'CareNest operational task for appointments: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm appointments context #61',
      'Capture outcome for appointments task 61',
      'Log follow-up owner for appointments-61',
    ],
    dependsOn: ['appointments-task-060'],
  },
  {
    id: 'appointments-task-062',
    title: 'Reconcile open items (Appointments #62)',
    description: 'CareNest operational task for appointments: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm appointments context #62',
      'Capture outcome for appointments task 62',
      'Log follow-up owner for appointments-62',
    ],
    dependsOn: ['appointments-task-061'],
  },
  {
    id: 'appointments-task-063',
    title: 'Escalate overdue cases (Appointments #63)',
    description: 'CareNest operational task for appointments: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm appointments context #63',
      'Capture outcome for appointments task 63',
      'Log follow-up owner for appointments-63',
    ],
    dependsOn: ['appointments-task-062'],
  },
  {
    id: 'appointments-task-064',
    title: 'Prepare family update (Appointments #64)',
    description: 'CareNest operational task for appointments: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm appointments context #64',
      'Capture outcome for appointments task 64',
      'Log follow-up owner for appointments-64',
    ],
    dependsOn: ['appointments-task-063'],
  },
  {
    id: 'appointments-task-065',
    title: 'Audit documentation completeness (Appointments #65)',
    description: 'CareNest operational task for appointments: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm appointments context #65',
      'Capture outcome for appointments task 65',
      'Log follow-up owner for appointments-65',
    ],
    dependsOn: ['appointments-task-064'],
  },
  {
    id: 'appointments-task-066',
    title: 'Sync with pharmacy / vendor (Appointments #66)',
    description: 'CareNest operational task for appointments: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm appointments context #66',
      'Capture outcome for appointments task 66',
      'Log follow-up owner for appointments-66',
    ],
    dependsOn: ['appointments-task-065'],
  },
  {
    id: 'appointments-task-067',
    title: 'Validate schedule conflicts (Appointments #67)',
    description: 'CareNest operational task for appointments: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm appointments context #67',
      'Capture outcome for appointments task 67',
      'Log follow-up owner for appointments-67',
    ],
    dependsOn: ['appointments-task-066'],
  },
  {
    id: 'appointments-task-068',
    title: 'Close completed workflows (Appointments #68)',
    description: 'CareNest operational task for appointments: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm appointments context #68',
      'Capture outcome for appointments task 68',
      'Log follow-up owner for appointments-68',
    ],
    dependsOn: ['appointments-task-067'],
  },
  {
    id: 'appointments-task-069',
    title: 'Generate shift handoff summary (Appointments #69)',
    description: 'CareNest operational task for appointments: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm appointments context #69',
      'Capture outcome for appointments task 69',
      'Log follow-up owner for appointments-69',
    ],
    dependsOn: ['appointments-task-068'],
  },
  {
    id: 'appointments-task-070',
    title: 'Confirm consent / privacy flags (Appointments #70)',
    description: 'CareNest operational task for appointments: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm appointments context #70',
      'Capture outcome for appointments task 70',
      'Log follow-up owner for appointments-70',
    ],
    dependsOn: ['appointments-task-069'],
  },
  {
    id: 'appointments-task-071',
    title: 'Run compliance checklist (Appointments #71)',
    description: 'CareNest operational task for appointments: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm appointments context #71',
      'Capture outcome for appointments task 71',
      'Log follow-up owner for appointments-71',
    ],
    dependsOn: ['appointments-task-070'],
  },
  {
    id: 'appointments-task-072',
    title: 'Update risk scores (Appointments #72)',
    description: 'CareNest operational task for appointments: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm appointments context #72',
      'Capture outcome for appointments task 72',
      'Log follow-up owner for appointments-72',
    ],
    dependsOn: ['appointments-task-071'],
  },
  {
    id: 'appointments-task-073',
    title: 'Notify on-call clinician (Appointments #73)',
    description: 'CareNest operational task for appointments: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm appointments context #73',
      'Capture outcome for appointments task 73',
      'Log follow-up owner for appointments-73',
    ],
    dependsOn: ['appointments-task-072'],
  },
  {
    id: 'appointments-task-074',
    title: 'Archive stale drafts (Appointments #74)',
    description: 'CareNest operational task for appointments: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm appointments context #74',
      'Capture outcome for appointments task 74',
      'Log follow-up owner for appointments-74',
    ],
    dependsOn: ['appointments-task-073'],
  },
  {
    id: 'appointments-task-075',
    title: 'Export weekly digest (Appointments #75)',
    description: 'CareNest operational task for appointments: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm appointments context #75',
      'Capture outcome for appointments task 75',
      'Log follow-up owner for appointments-75',
    ],
    dependsOn: ['appointments-task-074'],
  },
  {
    id: 'appointments-task-076',
    title: 'Train new caregiver on module (Appointments #76)',
    description: 'CareNest operational task for appointments: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm appointments context #76',
      'Capture outcome for appointments task 76',
      'Log follow-up owner for appointments-76',
    ],
    dependsOn: ['appointments-task-075'],
  },
  {
    id: 'appointments-task-077',
    title: 'Verify device integrations (Appointments #77)',
    description: 'CareNest operational task for appointments: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm appointments context #77',
      'Capture outcome for appointments task 77',
      'Log follow-up owner for appointments-77',
    ],
    dependsOn: ['appointments-task-076'],
  },
  {
    id: 'appointments-task-078',
    title: 'Spot-check critical priorities (Appointments #78)',
    description: 'CareNest operational task for appointments: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm appointments context #78',
      'Capture outcome for appointments task 78',
      'Log follow-up owner for appointments-78',
    ],
    dependsOn: ['appointments-task-077'],
  },
  {
    id: 'appointments-task-079',
    title: 'Align meal / care constraints (Appointments #79)',
    description: 'CareNest operational task for appointments: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm appointments context #79',
      'Capture outcome for appointments task 79',
      'Log follow-up owner for appointments-79',
    ],
    dependsOn: ['appointments-task-078'],
  },
  {
    id: 'appointments-task-080',
    title: 'Publish dashboard widgets (Appointments #80)',
    description: 'CareNest operational task for appointments: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm appointments context #80',
      'Capture outcome for appointments task 80',
      'Log follow-up owner for appointments-80',
    ],
    dependsOn: ['appointments-task-079'],
  },
];

export function listOpenAppointmentsTasks(): AppointmentsTask[] {
  return appointmentsTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countAppointmentsTasksByState(): Record<AppointmentsTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of appointmentsTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateAppointmentsWorkload1(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateAppointmentsWorkload2(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateAppointmentsWorkload3(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateAppointmentsWorkload4(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateAppointmentsWorkload5(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateAppointmentsWorkload6(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateAppointmentsWorkload7(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateAppointmentsWorkload8(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateAppointmentsWorkload9(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateAppointmentsWorkload10(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateAppointmentsWorkload11(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateAppointmentsWorkload12(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateAppointmentsWorkload13(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateAppointmentsWorkload14(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateAppointmentsWorkload15(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateAppointmentsWorkload16(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateAppointmentsWorkload17(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateAppointmentsWorkload18(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateAppointmentsWorkload19(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateAppointmentsWorkload20(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateAppointmentsWorkload21(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateAppointmentsWorkload22(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateAppointmentsWorkload23(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateAppointmentsWorkload24(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateAppointmentsWorkload25(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateAppointmentsWorkload26(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateAppointmentsWorkload27(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateAppointmentsWorkload28(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateAppointmentsWorkload29(tasks: AppointmentsTask[] = appointmentsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
