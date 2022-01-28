/** Operational task catalog for Medication */

export type MedicationTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface MedicationTask {
  id: string;
  title: string;
  description: string;
  state: MedicationTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const medicationTaskCatalog: MedicationTask[] = [
  {
    id: 'medication-task-001',
    title: 'Review overnight notes (Medication #1)',
    description: 'CareNest operational task for medication: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm medication context #1',
      'Capture outcome for medication task 1',
      'Log follow-up owner for medication-1',
    ],
    dependsOn: [],
  },
  {
    id: 'medication-task-002',
    title: 'Reconcile open items (Medication #2)',
    description: 'CareNest operational task for medication: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm medication context #2',
      'Capture outcome for medication task 2',
      'Log follow-up owner for medication-2',
    ],
    dependsOn: ['medication-task-001'],
  },
  {
    id: 'medication-task-003',
    title: 'Escalate overdue cases (Medication #3)',
    description: 'CareNest operational task for medication: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm medication context #3',
      'Capture outcome for medication task 3',
      'Log follow-up owner for medication-3',
    ],
    dependsOn: ['medication-task-002'],
  },
  {
    id: 'medication-task-004',
    title: 'Prepare family update (Medication #4)',
    description: 'CareNest operational task for medication: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm medication context #4',
      'Capture outcome for medication task 4',
      'Log follow-up owner for medication-4',
    ],
    dependsOn: ['medication-task-003'],
  },
  {
    id: 'medication-task-005',
    title: 'Audit documentation completeness (Medication #5)',
    description: 'CareNest operational task for medication: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm medication context #5',
      'Capture outcome for medication task 5',
      'Log follow-up owner for medication-5',
    ],
    dependsOn: ['medication-task-004'],
  },
  {
    id: 'medication-task-006',
    title: 'Sync with pharmacy / vendor (Medication #6)',
    description: 'CareNest operational task for medication: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm medication context #6',
      'Capture outcome for medication task 6',
      'Log follow-up owner for medication-6',
    ],
    dependsOn: ['medication-task-005'],
  },
  {
    id: 'medication-task-007',
    title: 'Validate schedule conflicts (Medication #7)',
    description: 'CareNest operational task for medication: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm medication context #7',
      'Capture outcome for medication task 7',
      'Log follow-up owner for medication-7',
    ],
    dependsOn: ['medication-task-006'],
  },
  {
    id: 'medication-task-008',
    title: 'Close completed workflows (Medication #8)',
    description: 'CareNest operational task for medication: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm medication context #8',
      'Capture outcome for medication task 8',
      'Log follow-up owner for medication-8',
    ],
    dependsOn: ['medication-task-007'],
  },
  {
    id: 'medication-task-009',
    title: 'Generate shift handoff summary (Medication #9)',
    description: 'CareNest operational task for medication: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm medication context #9',
      'Capture outcome for medication task 9',
      'Log follow-up owner for medication-9',
    ],
    dependsOn: ['medication-task-008'],
  },
  {
    id: 'medication-task-010',
    title: 'Confirm consent / privacy flags (Medication #10)',
    description: 'CareNest operational task for medication: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm medication context #10',
      'Capture outcome for medication task 10',
      'Log follow-up owner for medication-10',
    ],
    dependsOn: ['medication-task-009'],
  },
  {
    id: 'medication-task-011',
    title: 'Run compliance checklist (Medication #11)',
    description: 'CareNest operational task for medication: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm medication context #11',
      'Capture outcome for medication task 11',
      'Log follow-up owner for medication-11',
    ],
    dependsOn: ['medication-task-010'],
  },
  {
    id: 'medication-task-012',
    title: 'Update risk scores (Medication #12)',
    description: 'CareNest operational task for medication: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm medication context #12',
      'Capture outcome for medication task 12',
      'Log follow-up owner for medication-12',
    ],
    dependsOn: ['medication-task-011'],
  },
  {
    id: 'medication-task-013',
    title: 'Notify on-call clinician (Medication #13)',
    description: 'CareNest operational task for medication: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm medication context #13',
      'Capture outcome for medication task 13',
      'Log follow-up owner for medication-13',
    ],
    dependsOn: ['medication-task-012'],
  },
  {
    id: 'medication-task-014',
    title: 'Archive stale drafts (Medication #14)',
    description: 'CareNest operational task for medication: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm medication context #14',
      'Capture outcome for medication task 14',
      'Log follow-up owner for medication-14',
    ],
    dependsOn: ['medication-task-013'],
  },
  {
    id: 'medication-task-015',
    title: 'Export weekly digest (Medication #15)',
    description: 'CareNest operational task for medication: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm medication context #15',
      'Capture outcome for medication task 15',
      'Log follow-up owner for medication-15',
    ],
    dependsOn: ['medication-task-014'],
  },
  {
    id: 'medication-task-016',
    title: 'Train new caregiver on module (Medication #16)',
    description: 'CareNest operational task for medication: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm medication context #16',
      'Capture outcome for medication task 16',
      'Log follow-up owner for medication-16',
    ],
    dependsOn: ['medication-task-015'],
  },
  {
    id: 'medication-task-017',
    title: 'Verify device integrations (Medication #17)',
    description: 'CareNest operational task for medication: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm medication context #17',
      'Capture outcome for medication task 17',
      'Log follow-up owner for medication-17',
    ],
    dependsOn: ['medication-task-016'],
  },
  {
    id: 'medication-task-018',
    title: 'Spot-check critical priorities (Medication #18)',
    description: 'CareNest operational task for medication: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm medication context #18',
      'Capture outcome for medication task 18',
      'Log follow-up owner for medication-18',
    ],
    dependsOn: ['medication-task-017'],
  },
  {
    id: 'medication-task-019',
    title: 'Align meal / care constraints (Medication #19)',
    description: 'CareNest operational task for medication: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm medication context #19',
      'Capture outcome for medication task 19',
      'Log follow-up owner for medication-19',
    ],
    dependsOn: ['medication-task-018'],
  },
  {
    id: 'medication-task-020',
    title: 'Publish dashboard widgets (Medication #20)',
    description: 'CareNest operational task for medication: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm medication context #20',
      'Capture outcome for medication task 20',
      'Log follow-up owner for medication-20',
    ],
    dependsOn: ['medication-task-019'],
  },
  {
    id: 'medication-task-021',
    title: 'Review overnight notes (Medication #21)',
    description: 'CareNest operational task for medication: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm medication context #21',
      'Capture outcome for medication task 21',
      'Log follow-up owner for medication-21',
    ],
    dependsOn: ['medication-task-020'],
  },
  {
    id: 'medication-task-022',
    title: 'Reconcile open items (Medication #22)',
    description: 'CareNest operational task for medication: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm medication context #22',
      'Capture outcome for medication task 22',
      'Log follow-up owner for medication-22',
    ],
    dependsOn: ['medication-task-021'],
  },
  {
    id: 'medication-task-023',
    title: 'Escalate overdue cases (Medication #23)',
    description: 'CareNest operational task for medication: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm medication context #23',
      'Capture outcome for medication task 23',
      'Log follow-up owner for medication-23',
    ],
    dependsOn: ['medication-task-022'],
  },
  {
    id: 'medication-task-024',
    title: 'Prepare family update (Medication #24)',
    description: 'CareNest operational task for medication: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm medication context #24',
      'Capture outcome for medication task 24',
      'Log follow-up owner for medication-24',
    ],
    dependsOn: ['medication-task-023'],
  },
  {
    id: 'medication-task-025',
    title: 'Audit documentation completeness (Medication #25)',
    description: 'CareNest operational task for medication: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm medication context #25',
      'Capture outcome for medication task 25',
      'Log follow-up owner for medication-25',
    ],
    dependsOn: ['medication-task-024'],
  },
  {
    id: 'medication-task-026',
    title: 'Sync with pharmacy / vendor (Medication #26)',
    description: 'CareNest operational task for medication: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm medication context #26',
      'Capture outcome for medication task 26',
      'Log follow-up owner for medication-26',
    ],
    dependsOn: ['medication-task-025'],
  },
  {
    id: 'medication-task-027',
    title: 'Validate schedule conflicts (Medication #27)',
    description: 'CareNest operational task for medication: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm medication context #27',
      'Capture outcome for medication task 27',
      'Log follow-up owner for medication-27',
    ],
    dependsOn: ['medication-task-026'],
  },
  {
    id: 'medication-task-028',
    title: 'Close completed workflows (Medication #28)',
    description: 'CareNest operational task for medication: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm medication context #28',
      'Capture outcome for medication task 28',
      'Log follow-up owner for medication-28',
    ],
    dependsOn: ['medication-task-027'],
  },
  {
    id: 'medication-task-029',
    title: 'Generate shift handoff summary (Medication #29)',
    description: 'CareNest operational task for medication: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm medication context #29',
      'Capture outcome for medication task 29',
      'Log follow-up owner for medication-29',
    ],
    dependsOn: ['medication-task-028'],
  },
  {
    id: 'medication-task-030',
    title: 'Confirm consent / privacy flags (Medication #30)',
    description: 'CareNest operational task for medication: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm medication context #30',
      'Capture outcome for medication task 30',
      'Log follow-up owner for medication-30',
    ],
    dependsOn: ['medication-task-029'],
  },
  {
    id: 'medication-task-031',
    title: 'Run compliance checklist (Medication #31)',
    description: 'CareNest operational task for medication: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm medication context #31',
      'Capture outcome for medication task 31',
      'Log follow-up owner for medication-31',
    ],
    dependsOn: ['medication-task-030'],
  },
  {
    id: 'medication-task-032',
    title: 'Update risk scores (Medication #32)',
    description: 'CareNest operational task for medication: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm medication context #32',
      'Capture outcome for medication task 32',
      'Log follow-up owner for medication-32',
    ],
    dependsOn: ['medication-task-031'],
  },
  {
    id: 'medication-task-033',
    title: 'Notify on-call clinician (Medication #33)',
    description: 'CareNest operational task for medication: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm medication context #33',
      'Capture outcome for medication task 33',
      'Log follow-up owner for medication-33',
    ],
    dependsOn: ['medication-task-032'],
  },
  {
    id: 'medication-task-034',
    title: 'Archive stale drafts (Medication #34)',
    description: 'CareNest operational task for medication: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm medication context #34',
      'Capture outcome for medication task 34',
      'Log follow-up owner for medication-34',
    ],
    dependsOn: ['medication-task-033'],
  },
  {
    id: 'medication-task-035',
    title: 'Export weekly digest (Medication #35)',
    description: 'CareNest operational task for medication: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm medication context #35',
      'Capture outcome for medication task 35',
      'Log follow-up owner for medication-35',
    ],
    dependsOn: ['medication-task-034'],
  },
  {
    id: 'medication-task-036',
    title: 'Train new caregiver on module (Medication #36)',
    description: 'CareNest operational task for medication: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm medication context #36',
      'Capture outcome for medication task 36',
      'Log follow-up owner for medication-36',
    ],
    dependsOn: ['medication-task-035'],
  },
  {
    id: 'medication-task-037',
    title: 'Verify device integrations (Medication #37)',
    description: 'CareNest operational task for medication: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm medication context #37',
      'Capture outcome for medication task 37',
      'Log follow-up owner for medication-37',
    ],
    dependsOn: ['medication-task-036'],
  },
  {
    id: 'medication-task-038',
    title: 'Spot-check critical priorities (Medication #38)',
    description: 'CareNest operational task for medication: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm medication context #38',
      'Capture outcome for medication task 38',
      'Log follow-up owner for medication-38',
    ],
    dependsOn: ['medication-task-037'],
  },
  {
    id: 'medication-task-039',
    title: 'Align meal / care constraints (Medication #39)',
    description: 'CareNest operational task for medication: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm medication context #39',
      'Capture outcome for medication task 39',
      'Log follow-up owner for medication-39',
    ],
    dependsOn: ['medication-task-038'],
  },
  {
    id: 'medication-task-040',
    title: 'Publish dashboard widgets (Medication #40)',
    description: 'CareNest operational task for medication: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm medication context #40',
      'Capture outcome for medication task 40',
      'Log follow-up owner for medication-40',
    ],
    dependsOn: ['medication-task-039'],
  },
  {
    id: 'medication-task-041',
    title: 'Review overnight notes (Medication #41)',
    description: 'CareNest operational task for medication: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm medication context #41',
      'Capture outcome for medication task 41',
      'Log follow-up owner for medication-41',
    ],
    dependsOn: ['medication-task-040'],
  },
  {
    id: 'medication-task-042',
    title: 'Reconcile open items (Medication #42)',
    description: 'CareNest operational task for medication: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm medication context #42',
      'Capture outcome for medication task 42',
      'Log follow-up owner for medication-42',
    ],
    dependsOn: ['medication-task-041'],
  },
  {
    id: 'medication-task-043',
    title: 'Escalate overdue cases (Medication #43)',
    description: 'CareNest operational task for medication: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm medication context #43',
      'Capture outcome for medication task 43',
      'Log follow-up owner for medication-43',
    ],
    dependsOn: ['medication-task-042'],
  },
  {
    id: 'medication-task-044',
    title: 'Prepare family update (Medication #44)',
    description: 'CareNest operational task for medication: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm medication context #44',
      'Capture outcome for medication task 44',
      'Log follow-up owner for medication-44',
    ],
    dependsOn: ['medication-task-043'],
  },
  {
    id: 'medication-task-045',
    title: 'Audit documentation completeness (Medication #45)',
    description: 'CareNest operational task for medication: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm medication context #45',
      'Capture outcome for medication task 45',
      'Log follow-up owner for medication-45',
    ],
    dependsOn: ['medication-task-044'],
  },
  {
    id: 'medication-task-046',
    title: 'Sync with pharmacy / vendor (Medication #46)',
    description: 'CareNest operational task for medication: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm medication context #46',
      'Capture outcome for medication task 46',
      'Log follow-up owner for medication-46',
    ],
    dependsOn: ['medication-task-045'],
  },
  {
    id: 'medication-task-047',
    title: 'Validate schedule conflicts (Medication #47)',
    description: 'CareNest operational task for medication: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm medication context #47',
      'Capture outcome for medication task 47',
      'Log follow-up owner for medication-47',
    ],
    dependsOn: ['medication-task-046'],
  },
  {
    id: 'medication-task-048',
    title: 'Close completed workflows (Medication #48)',
    description: 'CareNest operational task for medication: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm medication context #48',
      'Capture outcome for medication task 48',
      'Log follow-up owner for medication-48',
    ],
    dependsOn: ['medication-task-047'],
  },
  {
    id: 'medication-task-049',
    title: 'Generate shift handoff summary (Medication #49)',
    description: 'CareNest operational task for medication: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm medication context #49',
      'Capture outcome for medication task 49',
      'Log follow-up owner for medication-49',
    ],
    dependsOn: ['medication-task-048'],
  },
  {
    id: 'medication-task-050',
    title: 'Confirm consent / privacy flags (Medication #50)',
    description: 'CareNest operational task for medication: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm medication context #50',
      'Capture outcome for medication task 50',
      'Log follow-up owner for medication-50',
    ],
    dependsOn: ['medication-task-049'],
  },
  {
    id: 'medication-task-051',
    title: 'Run compliance checklist (Medication #51)',
    description: 'CareNest operational task for medication: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm medication context #51',
      'Capture outcome for medication task 51',
      'Log follow-up owner for medication-51',
    ],
    dependsOn: ['medication-task-050'],
  },
  {
    id: 'medication-task-052',
    title: 'Update risk scores (Medication #52)',
    description: 'CareNest operational task for medication: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm medication context #52',
      'Capture outcome for medication task 52',
      'Log follow-up owner for medication-52',
    ],
    dependsOn: ['medication-task-051'],
  },
  {
    id: 'medication-task-053',
    title: 'Notify on-call clinician (Medication #53)',
    description: 'CareNest operational task for medication: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm medication context #53',
      'Capture outcome for medication task 53',
      'Log follow-up owner for medication-53',
    ],
    dependsOn: ['medication-task-052'],
  },
  {
    id: 'medication-task-054',
    title: 'Archive stale drafts (Medication #54)',
    description: 'CareNest operational task for medication: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm medication context #54',
      'Capture outcome for medication task 54',
      'Log follow-up owner for medication-54',
    ],
    dependsOn: ['medication-task-053'],
  },
  {
    id: 'medication-task-055',
    title: 'Export weekly digest (Medication #55)',
    description: 'CareNest operational task for medication: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm medication context #55',
      'Capture outcome for medication task 55',
      'Log follow-up owner for medication-55',
    ],
    dependsOn: ['medication-task-054'],
  },
  {
    id: 'medication-task-056',
    title: 'Train new caregiver on module (Medication #56)',
    description: 'CareNest operational task for medication: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm medication context #56',
      'Capture outcome for medication task 56',
      'Log follow-up owner for medication-56',
    ],
    dependsOn: ['medication-task-055'],
  },
  {
    id: 'medication-task-057',
    title: 'Verify device integrations (Medication #57)',
    description: 'CareNest operational task for medication: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm medication context #57',
      'Capture outcome for medication task 57',
      'Log follow-up owner for medication-57',
    ],
    dependsOn: ['medication-task-056'],
  },
  {
    id: 'medication-task-058',
    title: 'Spot-check critical priorities (Medication #58)',
    description: 'CareNest operational task for medication: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm medication context #58',
      'Capture outcome for medication task 58',
      'Log follow-up owner for medication-58',
    ],
    dependsOn: ['medication-task-057'],
  },
  {
    id: 'medication-task-059',
    title: 'Align meal / care constraints (Medication #59)',
    description: 'CareNest operational task for medication: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm medication context #59',
      'Capture outcome for medication task 59',
      'Log follow-up owner for medication-59',
    ],
    dependsOn: ['medication-task-058'],
  },
  {
    id: 'medication-task-060',
    title: 'Publish dashboard widgets (Medication #60)',
    description: 'CareNest operational task for medication: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm medication context #60',
      'Capture outcome for medication task 60',
      'Log follow-up owner for medication-60',
    ],
    dependsOn: ['medication-task-059'],
  },
  {
    id: 'medication-task-061',
    title: 'Review overnight notes (Medication #61)',
    description: 'CareNest operational task for medication: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm medication context #61',
      'Capture outcome for medication task 61',
      'Log follow-up owner for medication-61',
    ],
    dependsOn: ['medication-task-060'],
  },
  {
    id: 'medication-task-062',
    title: 'Reconcile open items (Medication #62)',
    description: 'CareNest operational task for medication: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm medication context #62',
      'Capture outcome for medication task 62',
      'Log follow-up owner for medication-62',
    ],
    dependsOn: ['medication-task-061'],
  },
  {
    id: 'medication-task-063',
    title: 'Escalate overdue cases (Medication #63)',
    description: 'CareNest operational task for medication: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm medication context #63',
      'Capture outcome for medication task 63',
      'Log follow-up owner for medication-63',
    ],
    dependsOn: ['medication-task-062'],
  },
  {
    id: 'medication-task-064',
    title: 'Prepare family update (Medication #64)',
    description: 'CareNest operational task for medication: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm medication context #64',
      'Capture outcome for medication task 64',
      'Log follow-up owner for medication-64',
    ],
    dependsOn: ['medication-task-063'],
  },
  {
    id: 'medication-task-065',
    title: 'Audit documentation completeness (Medication #65)',
    description: 'CareNest operational task for medication: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm medication context #65',
      'Capture outcome for medication task 65',
      'Log follow-up owner for medication-65',
    ],
    dependsOn: ['medication-task-064'],
  },
  {
    id: 'medication-task-066',
    title: 'Sync with pharmacy / vendor (Medication #66)',
    description: 'CareNest operational task for medication: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm medication context #66',
      'Capture outcome for medication task 66',
      'Log follow-up owner for medication-66',
    ],
    dependsOn: ['medication-task-065'],
  },
  {
    id: 'medication-task-067',
    title: 'Validate schedule conflicts (Medication #67)',
    description: 'CareNest operational task for medication: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm medication context #67',
      'Capture outcome for medication task 67',
      'Log follow-up owner for medication-67',
    ],
    dependsOn: ['medication-task-066'],
  },
  {
    id: 'medication-task-068',
    title: 'Close completed workflows (Medication #68)',
    description: 'CareNest operational task for medication: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm medication context #68',
      'Capture outcome for medication task 68',
      'Log follow-up owner for medication-68',
    ],
    dependsOn: ['medication-task-067'],
  },
  {
    id: 'medication-task-069',
    title: 'Generate shift handoff summary (Medication #69)',
    description: 'CareNest operational task for medication: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm medication context #69',
      'Capture outcome for medication task 69',
      'Log follow-up owner for medication-69',
    ],
    dependsOn: ['medication-task-068'],
  },
  {
    id: 'medication-task-070',
    title: 'Confirm consent / privacy flags (Medication #70)',
    description: 'CareNest operational task for medication: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm medication context #70',
      'Capture outcome for medication task 70',
      'Log follow-up owner for medication-70',
    ],
    dependsOn: ['medication-task-069'],
  },
  {
    id: 'medication-task-071',
    title: 'Run compliance checklist (Medication #71)',
    description: 'CareNest operational task for medication: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm medication context #71',
      'Capture outcome for medication task 71',
      'Log follow-up owner for medication-71',
    ],
    dependsOn: ['medication-task-070'],
  },
  {
    id: 'medication-task-072',
    title: 'Update risk scores (Medication #72)',
    description: 'CareNest operational task for medication: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm medication context #72',
      'Capture outcome for medication task 72',
      'Log follow-up owner for medication-72',
    ],
    dependsOn: ['medication-task-071'],
  },
  {
    id: 'medication-task-073',
    title: 'Notify on-call clinician (Medication #73)',
    description: 'CareNest operational task for medication: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm medication context #73',
      'Capture outcome for medication task 73',
      'Log follow-up owner for medication-73',
    ],
    dependsOn: ['medication-task-072'],
  },
  {
    id: 'medication-task-074',
    title: 'Archive stale drafts (Medication #74)',
    description: 'CareNest operational task for medication: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm medication context #74',
      'Capture outcome for medication task 74',
      'Log follow-up owner for medication-74',
    ],
    dependsOn: ['medication-task-073'],
  },
  {
    id: 'medication-task-075',
    title: 'Export weekly digest (Medication #75)',
    description: 'CareNest operational task for medication: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm medication context #75',
      'Capture outcome for medication task 75',
      'Log follow-up owner for medication-75',
    ],
    dependsOn: ['medication-task-074'],
  },
  {
    id: 'medication-task-076',
    title: 'Train new caregiver on module (Medication #76)',
    description: 'CareNest operational task for medication: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm medication context #76',
      'Capture outcome for medication task 76',
      'Log follow-up owner for medication-76',
    ],
    dependsOn: ['medication-task-075'],
  },
  {
    id: 'medication-task-077',
    title: 'Verify device integrations (Medication #77)',
    description: 'CareNest operational task for medication: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm medication context #77',
      'Capture outcome for medication task 77',
      'Log follow-up owner for medication-77',
    ],
    dependsOn: ['medication-task-076'],
  },
  {
    id: 'medication-task-078',
    title: 'Spot-check critical priorities (Medication #78)',
    description: 'CareNest operational task for medication: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm medication context #78',
      'Capture outcome for medication task 78',
      'Log follow-up owner for medication-78',
    ],
    dependsOn: ['medication-task-077'],
  },
  {
    id: 'medication-task-079',
    title: 'Align meal / care constraints (Medication #79)',
    description: 'CareNest operational task for medication: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm medication context #79',
      'Capture outcome for medication task 79',
      'Log follow-up owner for medication-79',
    ],
    dependsOn: ['medication-task-078'],
  },
  {
    id: 'medication-task-080',
    title: 'Publish dashboard widgets (Medication #80)',
    description: 'CareNest operational task for medication: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm medication context #80',
      'Capture outcome for medication task 80',
      'Log follow-up owner for medication-80',
    ],
    dependsOn: ['medication-task-079'],
  },
];

export function listOpenMedicationTasks(): MedicationTask[] {
  return medicationTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countMedicationTasksByState(): Record<MedicationTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of medicationTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateMedicationWorkload1(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateMedicationWorkload2(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateMedicationWorkload3(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateMedicationWorkload4(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateMedicationWorkload5(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateMedicationWorkload6(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateMedicationWorkload7(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateMedicationWorkload8(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateMedicationWorkload9(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateMedicationWorkload10(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateMedicationWorkload11(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateMedicationWorkload12(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateMedicationWorkload13(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateMedicationWorkload14(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateMedicationWorkload15(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateMedicationWorkload16(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateMedicationWorkload17(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateMedicationWorkload18(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateMedicationWorkload19(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateMedicationWorkload20(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateMedicationWorkload21(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateMedicationWorkload22(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateMedicationWorkload23(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateMedicationWorkload24(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateMedicationWorkload25(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateMedicationWorkload26(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateMedicationWorkload27(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateMedicationWorkload28(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateMedicationWorkload29(tasks: MedicationTask[] = medicationTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
