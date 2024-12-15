/** Operational task catalog for Therapy */

export type TherapyTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface TherapyTask {
  id: string;
  title: string;
  description: string;
  state: TherapyTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const therapyTaskCatalog: TherapyTask[] = [
  {
    id: 'therapy-task-001',
    title: 'Review overnight notes (Therapy #1)',
    description: 'CareNest operational task for therapy: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm therapy context #1',
      'Capture outcome for therapy task 1',
      'Log follow-up owner for therapy-1',
    ],
    dependsOn: [],
  },
  {
    id: 'therapy-task-002',
    title: 'Reconcile open items (Therapy #2)',
    description: 'CareNest operational task for therapy: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm therapy context #2',
      'Capture outcome for therapy task 2',
      'Log follow-up owner for therapy-2',
    ],
    dependsOn: ['therapy-task-001'],
  },
  {
    id: 'therapy-task-003',
    title: 'Escalate overdue cases (Therapy #3)',
    description: 'CareNest operational task for therapy: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm therapy context #3',
      'Capture outcome for therapy task 3',
      'Log follow-up owner for therapy-3',
    ],
    dependsOn: ['therapy-task-002'],
  },
  {
    id: 'therapy-task-004',
    title: 'Prepare family update (Therapy #4)',
    description: 'CareNest operational task for therapy: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm therapy context #4',
      'Capture outcome for therapy task 4',
      'Log follow-up owner for therapy-4',
    ],
    dependsOn: ['therapy-task-003'],
  },
  {
    id: 'therapy-task-005',
    title: 'Audit documentation completeness (Therapy #5)',
    description: 'CareNest operational task for therapy: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm therapy context #5',
      'Capture outcome for therapy task 5',
      'Log follow-up owner for therapy-5',
    ],
    dependsOn: ['therapy-task-004'],
  },
  {
    id: 'therapy-task-006',
    title: 'Sync with pharmacy / vendor (Therapy #6)',
    description: 'CareNest operational task for therapy: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm therapy context #6',
      'Capture outcome for therapy task 6',
      'Log follow-up owner for therapy-6',
    ],
    dependsOn: ['therapy-task-005'],
  },
  {
    id: 'therapy-task-007',
    title: 'Validate schedule conflicts (Therapy #7)',
    description: 'CareNest operational task for therapy: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm therapy context #7',
      'Capture outcome for therapy task 7',
      'Log follow-up owner for therapy-7',
    ],
    dependsOn: ['therapy-task-006'],
  },
  {
    id: 'therapy-task-008',
    title: 'Close completed workflows (Therapy #8)',
    description: 'CareNest operational task for therapy: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm therapy context #8',
      'Capture outcome for therapy task 8',
      'Log follow-up owner for therapy-8',
    ],
    dependsOn: ['therapy-task-007'],
  },
  {
    id: 'therapy-task-009',
    title: 'Generate shift handoff summary (Therapy #9)',
    description: 'CareNest operational task for therapy: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm therapy context #9',
      'Capture outcome for therapy task 9',
      'Log follow-up owner for therapy-9',
    ],
    dependsOn: ['therapy-task-008'],
  },
  {
    id: 'therapy-task-010',
    title: 'Confirm consent / privacy flags (Therapy #10)',
    description: 'CareNest operational task for therapy: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm therapy context #10',
      'Capture outcome for therapy task 10',
      'Log follow-up owner for therapy-10',
    ],
    dependsOn: ['therapy-task-009'],
  },
  {
    id: 'therapy-task-011',
    title: 'Run compliance checklist (Therapy #11)',
    description: 'CareNest operational task for therapy: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm therapy context #11',
      'Capture outcome for therapy task 11',
      'Log follow-up owner for therapy-11',
    ],
    dependsOn: ['therapy-task-010'],
  },
  {
    id: 'therapy-task-012',
    title: 'Update risk scores (Therapy #12)',
    description: 'CareNest operational task for therapy: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm therapy context #12',
      'Capture outcome for therapy task 12',
      'Log follow-up owner for therapy-12',
    ],
    dependsOn: ['therapy-task-011'],
  },
  {
    id: 'therapy-task-013',
    title: 'Notify on-call clinician (Therapy #13)',
    description: 'CareNest operational task for therapy: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm therapy context #13',
      'Capture outcome for therapy task 13',
      'Log follow-up owner for therapy-13',
    ],
    dependsOn: ['therapy-task-012'],
  },
  {
    id: 'therapy-task-014',
    title: 'Archive stale drafts (Therapy #14)',
    description: 'CareNest operational task for therapy: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm therapy context #14',
      'Capture outcome for therapy task 14',
      'Log follow-up owner for therapy-14',
    ],
    dependsOn: ['therapy-task-013'],
  },
  {
    id: 'therapy-task-015',
    title: 'Export weekly digest (Therapy #15)',
    description: 'CareNest operational task for therapy: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm therapy context #15',
      'Capture outcome for therapy task 15',
      'Log follow-up owner for therapy-15',
    ],
    dependsOn: ['therapy-task-014'],
  },
  {
    id: 'therapy-task-016',
    title: 'Train new caregiver on module (Therapy #16)',
    description: 'CareNest operational task for therapy: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm therapy context #16',
      'Capture outcome for therapy task 16',
      'Log follow-up owner for therapy-16',
    ],
    dependsOn: ['therapy-task-015'],
  },
  {
    id: 'therapy-task-017',
    title: 'Verify device integrations (Therapy #17)',
    description: 'CareNest operational task for therapy: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm therapy context #17',
      'Capture outcome for therapy task 17',
      'Log follow-up owner for therapy-17',
    ],
    dependsOn: ['therapy-task-016'],
  },
  {
    id: 'therapy-task-018',
    title: 'Spot-check critical priorities (Therapy #18)',
    description: 'CareNest operational task for therapy: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm therapy context #18',
      'Capture outcome for therapy task 18',
      'Log follow-up owner for therapy-18',
    ],
    dependsOn: ['therapy-task-017'],
  },
  {
    id: 'therapy-task-019',
    title: 'Align meal / care constraints (Therapy #19)',
    description: 'CareNest operational task for therapy: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm therapy context #19',
      'Capture outcome for therapy task 19',
      'Log follow-up owner for therapy-19',
    ],
    dependsOn: ['therapy-task-018'],
  },
  {
    id: 'therapy-task-020',
    title: 'Publish dashboard widgets (Therapy #20)',
    description: 'CareNest operational task for therapy: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm therapy context #20',
      'Capture outcome for therapy task 20',
      'Log follow-up owner for therapy-20',
    ],
    dependsOn: ['therapy-task-019'],
  },
  {
    id: 'therapy-task-021',
    title: 'Review overnight notes (Therapy #21)',
    description: 'CareNest operational task for therapy: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm therapy context #21',
      'Capture outcome for therapy task 21',
      'Log follow-up owner for therapy-21',
    ],
    dependsOn: ['therapy-task-020'],
  },
  {
    id: 'therapy-task-022',
    title: 'Reconcile open items (Therapy #22)',
    description: 'CareNest operational task for therapy: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm therapy context #22',
      'Capture outcome for therapy task 22',
      'Log follow-up owner for therapy-22',
    ],
    dependsOn: ['therapy-task-021'],
  },
  {
    id: 'therapy-task-023',
    title: 'Escalate overdue cases (Therapy #23)',
    description: 'CareNest operational task for therapy: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm therapy context #23',
      'Capture outcome for therapy task 23',
      'Log follow-up owner for therapy-23',
    ],
    dependsOn: ['therapy-task-022'],
  },
  {
    id: 'therapy-task-024',
    title: 'Prepare family update (Therapy #24)',
    description: 'CareNest operational task for therapy: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm therapy context #24',
      'Capture outcome for therapy task 24',
      'Log follow-up owner for therapy-24',
    ],
    dependsOn: ['therapy-task-023'],
  },
  {
    id: 'therapy-task-025',
    title: 'Audit documentation completeness (Therapy #25)',
    description: 'CareNest operational task for therapy: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm therapy context #25',
      'Capture outcome for therapy task 25',
      'Log follow-up owner for therapy-25',
    ],
    dependsOn: ['therapy-task-024'],
  },
  {
    id: 'therapy-task-026',
    title: 'Sync with pharmacy / vendor (Therapy #26)',
    description: 'CareNest operational task for therapy: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm therapy context #26',
      'Capture outcome for therapy task 26',
      'Log follow-up owner for therapy-26',
    ],
    dependsOn: ['therapy-task-025'],
  },
  {
    id: 'therapy-task-027',
    title: 'Validate schedule conflicts (Therapy #27)',
    description: 'CareNest operational task for therapy: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm therapy context #27',
      'Capture outcome for therapy task 27',
      'Log follow-up owner for therapy-27',
    ],
    dependsOn: ['therapy-task-026'],
  },
  {
    id: 'therapy-task-028',
    title: 'Close completed workflows (Therapy #28)',
    description: 'CareNest operational task for therapy: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm therapy context #28',
      'Capture outcome for therapy task 28',
      'Log follow-up owner for therapy-28',
    ],
    dependsOn: ['therapy-task-027'],
  },
  {
    id: 'therapy-task-029',
    title: 'Generate shift handoff summary (Therapy #29)',
    description: 'CareNest operational task for therapy: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm therapy context #29',
      'Capture outcome for therapy task 29',
      'Log follow-up owner for therapy-29',
    ],
    dependsOn: ['therapy-task-028'],
  },
  {
    id: 'therapy-task-030',
    title: 'Confirm consent / privacy flags (Therapy #30)',
    description: 'CareNest operational task for therapy: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm therapy context #30',
      'Capture outcome for therapy task 30',
      'Log follow-up owner for therapy-30',
    ],
    dependsOn: ['therapy-task-029'],
  },
  {
    id: 'therapy-task-031',
    title: 'Run compliance checklist (Therapy #31)',
    description: 'CareNest operational task for therapy: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm therapy context #31',
      'Capture outcome for therapy task 31',
      'Log follow-up owner for therapy-31',
    ],
    dependsOn: ['therapy-task-030'],
  },
  {
    id: 'therapy-task-032',
    title: 'Update risk scores (Therapy #32)',
    description: 'CareNest operational task for therapy: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm therapy context #32',
      'Capture outcome for therapy task 32',
      'Log follow-up owner for therapy-32',
    ],
    dependsOn: ['therapy-task-031'],
  },
  {
    id: 'therapy-task-033',
    title: 'Notify on-call clinician (Therapy #33)',
    description: 'CareNest operational task for therapy: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm therapy context #33',
      'Capture outcome for therapy task 33',
      'Log follow-up owner for therapy-33',
    ],
    dependsOn: ['therapy-task-032'],
  },
  {
    id: 'therapy-task-034',
    title: 'Archive stale drafts (Therapy #34)',
    description: 'CareNest operational task for therapy: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm therapy context #34',
      'Capture outcome for therapy task 34',
      'Log follow-up owner for therapy-34',
    ],
    dependsOn: ['therapy-task-033'],
  },
  {
    id: 'therapy-task-035',
    title: 'Export weekly digest (Therapy #35)',
    description: 'CareNest operational task for therapy: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm therapy context #35',
      'Capture outcome for therapy task 35',
      'Log follow-up owner for therapy-35',
    ],
    dependsOn: ['therapy-task-034'],
  },
  {
    id: 'therapy-task-036',
    title: 'Train new caregiver on module (Therapy #36)',
    description: 'CareNest operational task for therapy: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm therapy context #36',
      'Capture outcome for therapy task 36',
      'Log follow-up owner for therapy-36',
    ],
    dependsOn: ['therapy-task-035'],
  },
  {
    id: 'therapy-task-037',
    title: 'Verify device integrations (Therapy #37)',
    description: 'CareNest operational task for therapy: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm therapy context #37',
      'Capture outcome for therapy task 37',
      'Log follow-up owner for therapy-37',
    ],
    dependsOn: ['therapy-task-036'],
  },
  {
    id: 'therapy-task-038',
    title: 'Spot-check critical priorities (Therapy #38)',
    description: 'CareNest operational task for therapy: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm therapy context #38',
      'Capture outcome for therapy task 38',
      'Log follow-up owner for therapy-38',
    ],
    dependsOn: ['therapy-task-037'],
  },
  {
    id: 'therapy-task-039',
    title: 'Align meal / care constraints (Therapy #39)',
    description: 'CareNest operational task for therapy: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm therapy context #39',
      'Capture outcome for therapy task 39',
      'Log follow-up owner for therapy-39',
    ],
    dependsOn: ['therapy-task-038'],
  },
  {
    id: 'therapy-task-040',
    title: 'Publish dashboard widgets (Therapy #40)',
    description: 'CareNest operational task for therapy: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm therapy context #40',
      'Capture outcome for therapy task 40',
      'Log follow-up owner for therapy-40',
    ],
    dependsOn: ['therapy-task-039'],
  },
  {
    id: 'therapy-task-041',
    title: 'Review overnight notes (Therapy #41)',
    description: 'CareNest operational task for therapy: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm therapy context #41',
      'Capture outcome for therapy task 41',
      'Log follow-up owner for therapy-41',
    ],
    dependsOn: ['therapy-task-040'],
  },
  {
    id: 'therapy-task-042',
    title: 'Reconcile open items (Therapy #42)',
    description: 'CareNest operational task for therapy: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm therapy context #42',
      'Capture outcome for therapy task 42',
      'Log follow-up owner for therapy-42',
    ],
    dependsOn: ['therapy-task-041'],
  },
  {
    id: 'therapy-task-043',
    title: 'Escalate overdue cases (Therapy #43)',
    description: 'CareNest operational task for therapy: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm therapy context #43',
      'Capture outcome for therapy task 43',
      'Log follow-up owner for therapy-43',
    ],
    dependsOn: ['therapy-task-042'],
  },
  {
    id: 'therapy-task-044',
    title: 'Prepare family update (Therapy #44)',
    description: 'CareNest operational task for therapy: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm therapy context #44',
      'Capture outcome for therapy task 44',
      'Log follow-up owner for therapy-44',
    ],
    dependsOn: ['therapy-task-043'],
  },
  {
    id: 'therapy-task-045',
    title: 'Audit documentation completeness (Therapy #45)',
    description: 'CareNest operational task for therapy: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm therapy context #45',
      'Capture outcome for therapy task 45',
      'Log follow-up owner for therapy-45',
    ],
    dependsOn: ['therapy-task-044'],
  },
  {
    id: 'therapy-task-046',
    title: 'Sync with pharmacy / vendor (Therapy #46)',
    description: 'CareNest operational task for therapy: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm therapy context #46',
      'Capture outcome for therapy task 46',
      'Log follow-up owner for therapy-46',
    ],
    dependsOn: ['therapy-task-045'],
  },
  {
    id: 'therapy-task-047',
    title: 'Validate schedule conflicts (Therapy #47)',
    description: 'CareNest operational task for therapy: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm therapy context #47',
      'Capture outcome for therapy task 47',
      'Log follow-up owner for therapy-47',
    ],
    dependsOn: ['therapy-task-046'],
  },
  {
    id: 'therapy-task-048',
    title: 'Close completed workflows (Therapy #48)',
    description: 'CareNest operational task for therapy: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm therapy context #48',
      'Capture outcome for therapy task 48',
      'Log follow-up owner for therapy-48',
    ],
    dependsOn: ['therapy-task-047'],
  },
  {
    id: 'therapy-task-049',
    title: 'Generate shift handoff summary (Therapy #49)',
    description: 'CareNest operational task for therapy: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm therapy context #49',
      'Capture outcome for therapy task 49',
      'Log follow-up owner for therapy-49',
    ],
    dependsOn: ['therapy-task-048'],
  },
  {
    id: 'therapy-task-050',
    title: 'Confirm consent / privacy flags (Therapy #50)',
    description: 'CareNest operational task for therapy: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm therapy context #50',
      'Capture outcome for therapy task 50',
      'Log follow-up owner for therapy-50',
    ],
    dependsOn: ['therapy-task-049'],
  },
  {
    id: 'therapy-task-051',
    title: 'Run compliance checklist (Therapy #51)',
    description: 'CareNest operational task for therapy: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm therapy context #51',
      'Capture outcome for therapy task 51',
      'Log follow-up owner for therapy-51',
    ],
    dependsOn: ['therapy-task-050'],
  },
  {
    id: 'therapy-task-052',
    title: 'Update risk scores (Therapy #52)',
    description: 'CareNest operational task for therapy: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm therapy context #52',
      'Capture outcome for therapy task 52',
      'Log follow-up owner for therapy-52',
    ],
    dependsOn: ['therapy-task-051'],
  },
  {
    id: 'therapy-task-053',
    title: 'Notify on-call clinician (Therapy #53)',
    description: 'CareNest operational task for therapy: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm therapy context #53',
      'Capture outcome for therapy task 53',
      'Log follow-up owner for therapy-53',
    ],
    dependsOn: ['therapy-task-052'],
  },
  {
    id: 'therapy-task-054',
    title: 'Archive stale drafts (Therapy #54)',
    description: 'CareNest operational task for therapy: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm therapy context #54',
      'Capture outcome for therapy task 54',
      'Log follow-up owner for therapy-54',
    ],
    dependsOn: ['therapy-task-053'],
  },
  {
    id: 'therapy-task-055',
    title: 'Export weekly digest (Therapy #55)',
    description: 'CareNest operational task for therapy: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm therapy context #55',
      'Capture outcome for therapy task 55',
      'Log follow-up owner for therapy-55',
    ],
    dependsOn: ['therapy-task-054'],
  },
  {
    id: 'therapy-task-056',
    title: 'Train new caregiver on module (Therapy #56)',
    description: 'CareNest operational task for therapy: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm therapy context #56',
      'Capture outcome for therapy task 56',
      'Log follow-up owner for therapy-56',
    ],
    dependsOn: ['therapy-task-055'],
  },
  {
    id: 'therapy-task-057',
    title: 'Verify device integrations (Therapy #57)',
    description: 'CareNest operational task for therapy: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm therapy context #57',
      'Capture outcome for therapy task 57',
      'Log follow-up owner for therapy-57',
    ],
    dependsOn: ['therapy-task-056'],
  },
  {
    id: 'therapy-task-058',
    title: 'Spot-check critical priorities (Therapy #58)',
    description: 'CareNest operational task for therapy: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm therapy context #58',
      'Capture outcome for therapy task 58',
      'Log follow-up owner for therapy-58',
    ],
    dependsOn: ['therapy-task-057'],
  },
  {
    id: 'therapy-task-059',
    title: 'Align meal / care constraints (Therapy #59)',
    description: 'CareNest operational task for therapy: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm therapy context #59',
      'Capture outcome for therapy task 59',
      'Log follow-up owner for therapy-59',
    ],
    dependsOn: ['therapy-task-058'],
  },
  {
    id: 'therapy-task-060',
    title: 'Publish dashboard widgets (Therapy #60)',
    description: 'CareNest operational task for therapy: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm therapy context #60',
      'Capture outcome for therapy task 60',
      'Log follow-up owner for therapy-60',
    ],
    dependsOn: ['therapy-task-059'],
  },
  {
    id: 'therapy-task-061',
    title: 'Review overnight notes (Therapy #61)',
    description: 'CareNest operational task for therapy: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm therapy context #61',
      'Capture outcome for therapy task 61',
      'Log follow-up owner for therapy-61',
    ],
    dependsOn: ['therapy-task-060'],
  },
  {
    id: 'therapy-task-062',
    title: 'Reconcile open items (Therapy #62)',
    description: 'CareNest operational task for therapy: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm therapy context #62',
      'Capture outcome for therapy task 62',
      'Log follow-up owner for therapy-62',
    ],
    dependsOn: ['therapy-task-061'],
  },
  {
    id: 'therapy-task-063',
    title: 'Escalate overdue cases (Therapy #63)',
    description: 'CareNest operational task for therapy: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm therapy context #63',
      'Capture outcome for therapy task 63',
      'Log follow-up owner for therapy-63',
    ],
    dependsOn: ['therapy-task-062'],
  },
  {
    id: 'therapy-task-064',
    title: 'Prepare family update (Therapy #64)',
    description: 'CareNest operational task for therapy: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm therapy context #64',
      'Capture outcome for therapy task 64',
      'Log follow-up owner for therapy-64',
    ],
    dependsOn: ['therapy-task-063'],
  },
  {
    id: 'therapy-task-065',
    title: 'Audit documentation completeness (Therapy #65)',
    description: 'CareNest operational task for therapy: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm therapy context #65',
      'Capture outcome for therapy task 65',
      'Log follow-up owner for therapy-65',
    ],
    dependsOn: ['therapy-task-064'],
  },
  {
    id: 'therapy-task-066',
    title: 'Sync with pharmacy / vendor (Therapy #66)',
    description: 'CareNest operational task for therapy: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm therapy context #66',
      'Capture outcome for therapy task 66',
      'Log follow-up owner for therapy-66',
    ],
    dependsOn: ['therapy-task-065'],
  },
  {
    id: 'therapy-task-067',
    title: 'Validate schedule conflicts (Therapy #67)',
    description: 'CareNest operational task for therapy: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm therapy context #67',
      'Capture outcome for therapy task 67',
      'Log follow-up owner for therapy-67',
    ],
    dependsOn: ['therapy-task-066'],
  },
  {
    id: 'therapy-task-068',
    title: 'Close completed workflows (Therapy #68)',
    description: 'CareNest operational task for therapy: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm therapy context #68',
      'Capture outcome for therapy task 68',
      'Log follow-up owner for therapy-68',
    ],
    dependsOn: ['therapy-task-067'],
  },
  {
    id: 'therapy-task-069',
    title: 'Generate shift handoff summary (Therapy #69)',
    description: 'CareNest operational task for therapy: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm therapy context #69',
      'Capture outcome for therapy task 69',
      'Log follow-up owner for therapy-69',
    ],
    dependsOn: ['therapy-task-068'],
  },
  {
    id: 'therapy-task-070',
    title: 'Confirm consent / privacy flags (Therapy #70)',
    description: 'CareNest operational task for therapy: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm therapy context #70',
      'Capture outcome for therapy task 70',
      'Log follow-up owner for therapy-70',
    ],
    dependsOn: ['therapy-task-069'],
  },
  {
    id: 'therapy-task-071',
    title: 'Run compliance checklist (Therapy #71)',
    description: 'CareNest operational task for therapy: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm therapy context #71',
      'Capture outcome for therapy task 71',
      'Log follow-up owner for therapy-71',
    ],
    dependsOn: ['therapy-task-070'],
  },
  {
    id: 'therapy-task-072',
    title: 'Update risk scores (Therapy #72)',
    description: 'CareNest operational task for therapy: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm therapy context #72',
      'Capture outcome for therapy task 72',
      'Log follow-up owner for therapy-72',
    ],
    dependsOn: ['therapy-task-071'],
  },
  {
    id: 'therapy-task-073',
    title: 'Notify on-call clinician (Therapy #73)',
    description: 'CareNest operational task for therapy: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm therapy context #73',
      'Capture outcome for therapy task 73',
      'Log follow-up owner for therapy-73',
    ],
    dependsOn: ['therapy-task-072'],
  },
  {
    id: 'therapy-task-074',
    title: 'Archive stale drafts (Therapy #74)',
    description: 'CareNest operational task for therapy: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm therapy context #74',
      'Capture outcome for therapy task 74',
      'Log follow-up owner for therapy-74',
    ],
    dependsOn: ['therapy-task-073'],
  },
  {
    id: 'therapy-task-075',
    title: 'Export weekly digest (Therapy #75)',
    description: 'CareNest operational task for therapy: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm therapy context #75',
      'Capture outcome for therapy task 75',
      'Log follow-up owner for therapy-75',
    ],
    dependsOn: ['therapy-task-074'],
  },
  {
    id: 'therapy-task-076',
    title: 'Train new caregiver on module (Therapy #76)',
    description: 'CareNest operational task for therapy: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm therapy context #76',
      'Capture outcome for therapy task 76',
      'Log follow-up owner for therapy-76',
    ],
    dependsOn: ['therapy-task-075'],
  },
  {
    id: 'therapy-task-077',
    title: 'Verify device integrations (Therapy #77)',
    description: 'CareNest operational task for therapy: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm therapy context #77',
      'Capture outcome for therapy task 77',
      'Log follow-up owner for therapy-77',
    ],
    dependsOn: ['therapy-task-076'],
  },
  {
    id: 'therapy-task-078',
    title: 'Spot-check critical priorities (Therapy #78)',
    description: 'CareNest operational task for therapy: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm therapy context #78',
      'Capture outcome for therapy task 78',
      'Log follow-up owner for therapy-78',
    ],
    dependsOn: ['therapy-task-077'],
  },
  {
    id: 'therapy-task-079',
    title: 'Align meal / care constraints (Therapy #79)',
    description: 'CareNest operational task for therapy: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm therapy context #79',
      'Capture outcome for therapy task 79',
      'Log follow-up owner for therapy-79',
    ],
    dependsOn: ['therapy-task-078'],
  },
  {
    id: 'therapy-task-080',
    title: 'Publish dashboard widgets (Therapy #80)',
    description: 'CareNest operational task for therapy: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm therapy context #80',
      'Capture outcome for therapy task 80',
      'Log follow-up owner for therapy-80',
    ],
    dependsOn: ['therapy-task-079'],
  },
];

export function listOpenTherapyTasks(): TherapyTask[] {
  return therapyTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countTherapyTasksByState(): Record<TherapyTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of therapyTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateTherapyWorkload1(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateTherapyWorkload2(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateTherapyWorkload3(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateTherapyWorkload4(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateTherapyWorkload5(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateTherapyWorkload6(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateTherapyWorkload7(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateTherapyWorkload8(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateTherapyWorkload9(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateTherapyWorkload10(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateTherapyWorkload11(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateTherapyWorkload12(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateTherapyWorkload13(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateTherapyWorkload14(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateTherapyWorkload15(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateTherapyWorkload16(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateTherapyWorkload17(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateTherapyWorkload18(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateTherapyWorkload19(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateTherapyWorkload20(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateTherapyWorkload21(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateTherapyWorkload22(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateTherapyWorkload23(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateTherapyWorkload24(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateTherapyWorkload25(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateTherapyWorkload26(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateTherapyWorkload27(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateTherapyWorkload28(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateTherapyWorkload29(tasks: TherapyTask[] = therapyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
