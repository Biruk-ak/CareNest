/** Operational task catalog for Pharmacy */

export type PharmacyTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface PharmacyTask {
  id: string;
  title: string;
  description: string;
  state: PharmacyTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const pharmacyTaskCatalog: PharmacyTask[] = [
  {
    id: 'pharmacy-task-001',
    title: 'Review overnight notes (Pharmacy #1)',
    description: 'CareNest operational task for pharmacy: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm pharmacy context #1',
      'Capture outcome for pharmacy task 1',
      'Log follow-up owner for pharmacy-1',
    ],
    dependsOn: [],
  },
  {
    id: 'pharmacy-task-002',
    title: 'Reconcile open items (Pharmacy #2)',
    description: 'CareNest operational task for pharmacy: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm pharmacy context #2',
      'Capture outcome for pharmacy task 2',
      'Log follow-up owner for pharmacy-2',
    ],
    dependsOn: ['pharmacy-task-001'],
  },
  {
    id: 'pharmacy-task-003',
    title: 'Escalate overdue cases (Pharmacy #3)',
    description: 'CareNest operational task for pharmacy: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm pharmacy context #3',
      'Capture outcome for pharmacy task 3',
      'Log follow-up owner for pharmacy-3',
    ],
    dependsOn: ['pharmacy-task-002'],
  },
  {
    id: 'pharmacy-task-004',
    title: 'Prepare family update (Pharmacy #4)',
    description: 'CareNest operational task for pharmacy: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm pharmacy context #4',
      'Capture outcome for pharmacy task 4',
      'Log follow-up owner for pharmacy-4',
    ],
    dependsOn: ['pharmacy-task-003'],
  },
  {
    id: 'pharmacy-task-005',
    title: 'Audit documentation completeness (Pharmacy #5)',
    description: 'CareNest operational task for pharmacy: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm pharmacy context #5',
      'Capture outcome for pharmacy task 5',
      'Log follow-up owner for pharmacy-5',
    ],
    dependsOn: ['pharmacy-task-004'],
  },
  {
    id: 'pharmacy-task-006',
    title: 'Sync with pharmacy / vendor (Pharmacy #6)',
    description: 'CareNest operational task for pharmacy: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm pharmacy context #6',
      'Capture outcome for pharmacy task 6',
      'Log follow-up owner for pharmacy-6',
    ],
    dependsOn: ['pharmacy-task-005'],
  },
  {
    id: 'pharmacy-task-007',
    title: 'Validate schedule conflicts (Pharmacy #7)',
    description: 'CareNest operational task for pharmacy: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm pharmacy context #7',
      'Capture outcome for pharmacy task 7',
      'Log follow-up owner for pharmacy-7',
    ],
    dependsOn: ['pharmacy-task-006'],
  },
  {
    id: 'pharmacy-task-008',
    title: 'Close completed workflows (Pharmacy #8)',
    description: 'CareNest operational task for pharmacy: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm pharmacy context #8',
      'Capture outcome for pharmacy task 8',
      'Log follow-up owner for pharmacy-8',
    ],
    dependsOn: ['pharmacy-task-007'],
  },
  {
    id: 'pharmacy-task-009',
    title: 'Generate shift handoff summary (Pharmacy #9)',
    description: 'CareNest operational task for pharmacy: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm pharmacy context #9',
      'Capture outcome for pharmacy task 9',
      'Log follow-up owner for pharmacy-9',
    ],
    dependsOn: ['pharmacy-task-008'],
  },
  {
    id: 'pharmacy-task-010',
    title: 'Confirm consent / privacy flags (Pharmacy #10)',
    description: 'CareNest operational task for pharmacy: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm pharmacy context #10',
      'Capture outcome for pharmacy task 10',
      'Log follow-up owner for pharmacy-10',
    ],
    dependsOn: ['pharmacy-task-009'],
  },
  {
    id: 'pharmacy-task-011',
    title: 'Run compliance checklist (Pharmacy #11)',
    description: 'CareNest operational task for pharmacy: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm pharmacy context #11',
      'Capture outcome for pharmacy task 11',
      'Log follow-up owner for pharmacy-11',
    ],
    dependsOn: ['pharmacy-task-010'],
  },
  {
    id: 'pharmacy-task-012',
    title: 'Update risk scores (Pharmacy #12)',
    description: 'CareNest operational task for pharmacy: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm pharmacy context #12',
      'Capture outcome for pharmacy task 12',
      'Log follow-up owner for pharmacy-12',
    ],
    dependsOn: ['pharmacy-task-011'],
  },
  {
    id: 'pharmacy-task-013',
    title: 'Notify on-call clinician (Pharmacy #13)',
    description: 'CareNest operational task for pharmacy: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm pharmacy context #13',
      'Capture outcome for pharmacy task 13',
      'Log follow-up owner for pharmacy-13',
    ],
    dependsOn: ['pharmacy-task-012'],
  },
  {
    id: 'pharmacy-task-014',
    title: 'Archive stale drafts (Pharmacy #14)',
    description: 'CareNest operational task for pharmacy: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm pharmacy context #14',
      'Capture outcome for pharmacy task 14',
      'Log follow-up owner for pharmacy-14',
    ],
    dependsOn: ['pharmacy-task-013'],
  },
  {
    id: 'pharmacy-task-015',
    title: 'Export weekly digest (Pharmacy #15)',
    description: 'CareNest operational task for pharmacy: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm pharmacy context #15',
      'Capture outcome for pharmacy task 15',
      'Log follow-up owner for pharmacy-15',
    ],
    dependsOn: ['pharmacy-task-014'],
  },
  {
    id: 'pharmacy-task-016',
    title: 'Train new caregiver on module (Pharmacy #16)',
    description: 'CareNest operational task for pharmacy: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm pharmacy context #16',
      'Capture outcome for pharmacy task 16',
      'Log follow-up owner for pharmacy-16',
    ],
    dependsOn: ['pharmacy-task-015'],
  },
  {
    id: 'pharmacy-task-017',
    title: 'Verify device integrations (Pharmacy #17)',
    description: 'CareNest operational task for pharmacy: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm pharmacy context #17',
      'Capture outcome for pharmacy task 17',
      'Log follow-up owner for pharmacy-17',
    ],
    dependsOn: ['pharmacy-task-016'],
  },
  {
    id: 'pharmacy-task-018',
    title: 'Spot-check critical priorities (Pharmacy #18)',
    description: 'CareNest operational task for pharmacy: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm pharmacy context #18',
      'Capture outcome for pharmacy task 18',
      'Log follow-up owner for pharmacy-18',
    ],
    dependsOn: ['pharmacy-task-017'],
  },
  {
    id: 'pharmacy-task-019',
    title: 'Align meal / care constraints (Pharmacy #19)',
    description: 'CareNest operational task for pharmacy: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm pharmacy context #19',
      'Capture outcome for pharmacy task 19',
      'Log follow-up owner for pharmacy-19',
    ],
    dependsOn: ['pharmacy-task-018'],
  },
  {
    id: 'pharmacy-task-020',
    title: 'Publish dashboard widgets (Pharmacy #20)',
    description: 'CareNest operational task for pharmacy: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm pharmacy context #20',
      'Capture outcome for pharmacy task 20',
      'Log follow-up owner for pharmacy-20',
    ],
    dependsOn: ['pharmacy-task-019'],
  },
  {
    id: 'pharmacy-task-021',
    title: 'Review overnight notes (Pharmacy #21)',
    description: 'CareNest operational task for pharmacy: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm pharmacy context #21',
      'Capture outcome for pharmacy task 21',
      'Log follow-up owner for pharmacy-21',
    ],
    dependsOn: ['pharmacy-task-020'],
  },
  {
    id: 'pharmacy-task-022',
    title: 'Reconcile open items (Pharmacy #22)',
    description: 'CareNest operational task for pharmacy: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm pharmacy context #22',
      'Capture outcome for pharmacy task 22',
      'Log follow-up owner for pharmacy-22',
    ],
    dependsOn: ['pharmacy-task-021'],
  },
  {
    id: 'pharmacy-task-023',
    title: 'Escalate overdue cases (Pharmacy #23)',
    description: 'CareNest operational task for pharmacy: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm pharmacy context #23',
      'Capture outcome for pharmacy task 23',
      'Log follow-up owner for pharmacy-23',
    ],
    dependsOn: ['pharmacy-task-022'],
  },
  {
    id: 'pharmacy-task-024',
    title: 'Prepare family update (Pharmacy #24)',
    description: 'CareNest operational task for pharmacy: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm pharmacy context #24',
      'Capture outcome for pharmacy task 24',
      'Log follow-up owner for pharmacy-24',
    ],
    dependsOn: ['pharmacy-task-023'],
  },
  {
    id: 'pharmacy-task-025',
    title: 'Audit documentation completeness (Pharmacy #25)',
    description: 'CareNest operational task for pharmacy: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm pharmacy context #25',
      'Capture outcome for pharmacy task 25',
      'Log follow-up owner for pharmacy-25',
    ],
    dependsOn: ['pharmacy-task-024'],
  },
  {
    id: 'pharmacy-task-026',
    title: 'Sync with pharmacy / vendor (Pharmacy #26)',
    description: 'CareNest operational task for pharmacy: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm pharmacy context #26',
      'Capture outcome for pharmacy task 26',
      'Log follow-up owner for pharmacy-26',
    ],
    dependsOn: ['pharmacy-task-025'],
  },
  {
    id: 'pharmacy-task-027',
    title: 'Validate schedule conflicts (Pharmacy #27)',
    description: 'CareNest operational task for pharmacy: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm pharmacy context #27',
      'Capture outcome for pharmacy task 27',
      'Log follow-up owner for pharmacy-27',
    ],
    dependsOn: ['pharmacy-task-026'],
  },
  {
    id: 'pharmacy-task-028',
    title: 'Close completed workflows (Pharmacy #28)',
    description: 'CareNest operational task for pharmacy: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm pharmacy context #28',
      'Capture outcome for pharmacy task 28',
      'Log follow-up owner for pharmacy-28',
    ],
    dependsOn: ['pharmacy-task-027'],
  },
  {
    id: 'pharmacy-task-029',
    title: 'Generate shift handoff summary (Pharmacy #29)',
    description: 'CareNest operational task for pharmacy: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm pharmacy context #29',
      'Capture outcome for pharmacy task 29',
      'Log follow-up owner for pharmacy-29',
    ],
    dependsOn: ['pharmacy-task-028'],
  },
  {
    id: 'pharmacy-task-030',
    title: 'Confirm consent / privacy flags (Pharmacy #30)',
    description: 'CareNest operational task for pharmacy: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm pharmacy context #30',
      'Capture outcome for pharmacy task 30',
      'Log follow-up owner for pharmacy-30',
    ],
    dependsOn: ['pharmacy-task-029'],
  },
  {
    id: 'pharmacy-task-031',
    title: 'Run compliance checklist (Pharmacy #31)',
    description: 'CareNest operational task for pharmacy: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm pharmacy context #31',
      'Capture outcome for pharmacy task 31',
      'Log follow-up owner for pharmacy-31',
    ],
    dependsOn: ['pharmacy-task-030'],
  },
  {
    id: 'pharmacy-task-032',
    title: 'Update risk scores (Pharmacy #32)',
    description: 'CareNest operational task for pharmacy: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm pharmacy context #32',
      'Capture outcome for pharmacy task 32',
      'Log follow-up owner for pharmacy-32',
    ],
    dependsOn: ['pharmacy-task-031'],
  },
  {
    id: 'pharmacy-task-033',
    title: 'Notify on-call clinician (Pharmacy #33)',
    description: 'CareNest operational task for pharmacy: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm pharmacy context #33',
      'Capture outcome for pharmacy task 33',
      'Log follow-up owner for pharmacy-33',
    ],
    dependsOn: ['pharmacy-task-032'],
  },
  {
    id: 'pharmacy-task-034',
    title: 'Archive stale drafts (Pharmacy #34)',
    description: 'CareNest operational task for pharmacy: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm pharmacy context #34',
      'Capture outcome for pharmacy task 34',
      'Log follow-up owner for pharmacy-34',
    ],
    dependsOn: ['pharmacy-task-033'],
  },
  {
    id: 'pharmacy-task-035',
    title: 'Export weekly digest (Pharmacy #35)',
    description: 'CareNest operational task for pharmacy: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm pharmacy context #35',
      'Capture outcome for pharmacy task 35',
      'Log follow-up owner for pharmacy-35',
    ],
    dependsOn: ['pharmacy-task-034'],
  },
  {
    id: 'pharmacy-task-036',
    title: 'Train new caregiver on module (Pharmacy #36)',
    description: 'CareNest operational task for pharmacy: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm pharmacy context #36',
      'Capture outcome for pharmacy task 36',
      'Log follow-up owner for pharmacy-36',
    ],
    dependsOn: ['pharmacy-task-035'],
  },
  {
    id: 'pharmacy-task-037',
    title: 'Verify device integrations (Pharmacy #37)',
    description: 'CareNest operational task for pharmacy: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm pharmacy context #37',
      'Capture outcome for pharmacy task 37',
      'Log follow-up owner for pharmacy-37',
    ],
    dependsOn: ['pharmacy-task-036'],
  },
  {
    id: 'pharmacy-task-038',
    title: 'Spot-check critical priorities (Pharmacy #38)',
    description: 'CareNest operational task for pharmacy: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm pharmacy context #38',
      'Capture outcome for pharmacy task 38',
      'Log follow-up owner for pharmacy-38',
    ],
    dependsOn: ['pharmacy-task-037'],
  },
  {
    id: 'pharmacy-task-039',
    title: 'Align meal / care constraints (Pharmacy #39)',
    description: 'CareNest operational task for pharmacy: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm pharmacy context #39',
      'Capture outcome for pharmacy task 39',
      'Log follow-up owner for pharmacy-39',
    ],
    dependsOn: ['pharmacy-task-038'],
  },
  {
    id: 'pharmacy-task-040',
    title: 'Publish dashboard widgets (Pharmacy #40)',
    description: 'CareNest operational task for pharmacy: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm pharmacy context #40',
      'Capture outcome for pharmacy task 40',
      'Log follow-up owner for pharmacy-40',
    ],
    dependsOn: ['pharmacy-task-039'],
  },
  {
    id: 'pharmacy-task-041',
    title: 'Review overnight notes (Pharmacy #41)',
    description: 'CareNest operational task for pharmacy: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm pharmacy context #41',
      'Capture outcome for pharmacy task 41',
      'Log follow-up owner for pharmacy-41',
    ],
    dependsOn: ['pharmacy-task-040'],
  },
  {
    id: 'pharmacy-task-042',
    title: 'Reconcile open items (Pharmacy #42)',
    description: 'CareNest operational task for pharmacy: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm pharmacy context #42',
      'Capture outcome for pharmacy task 42',
      'Log follow-up owner for pharmacy-42',
    ],
    dependsOn: ['pharmacy-task-041'],
  },
  {
    id: 'pharmacy-task-043',
    title: 'Escalate overdue cases (Pharmacy #43)',
    description: 'CareNest operational task for pharmacy: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm pharmacy context #43',
      'Capture outcome for pharmacy task 43',
      'Log follow-up owner for pharmacy-43',
    ],
    dependsOn: ['pharmacy-task-042'],
  },
  {
    id: 'pharmacy-task-044',
    title: 'Prepare family update (Pharmacy #44)',
    description: 'CareNest operational task for pharmacy: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm pharmacy context #44',
      'Capture outcome for pharmacy task 44',
      'Log follow-up owner for pharmacy-44',
    ],
    dependsOn: ['pharmacy-task-043'],
  },
  {
    id: 'pharmacy-task-045',
    title: 'Audit documentation completeness (Pharmacy #45)',
    description: 'CareNest operational task for pharmacy: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm pharmacy context #45',
      'Capture outcome for pharmacy task 45',
      'Log follow-up owner for pharmacy-45',
    ],
    dependsOn: ['pharmacy-task-044'],
  },
  {
    id: 'pharmacy-task-046',
    title: 'Sync with pharmacy / vendor (Pharmacy #46)',
    description: 'CareNest operational task for pharmacy: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm pharmacy context #46',
      'Capture outcome for pharmacy task 46',
      'Log follow-up owner for pharmacy-46',
    ],
    dependsOn: ['pharmacy-task-045'],
  },
  {
    id: 'pharmacy-task-047',
    title: 'Validate schedule conflicts (Pharmacy #47)',
    description: 'CareNest operational task for pharmacy: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm pharmacy context #47',
      'Capture outcome for pharmacy task 47',
      'Log follow-up owner for pharmacy-47',
    ],
    dependsOn: ['pharmacy-task-046'],
  },
  {
    id: 'pharmacy-task-048',
    title: 'Close completed workflows (Pharmacy #48)',
    description: 'CareNest operational task for pharmacy: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm pharmacy context #48',
      'Capture outcome for pharmacy task 48',
      'Log follow-up owner for pharmacy-48',
    ],
    dependsOn: ['pharmacy-task-047'],
  },
  {
    id: 'pharmacy-task-049',
    title: 'Generate shift handoff summary (Pharmacy #49)',
    description: 'CareNest operational task for pharmacy: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm pharmacy context #49',
      'Capture outcome for pharmacy task 49',
      'Log follow-up owner for pharmacy-49',
    ],
    dependsOn: ['pharmacy-task-048'],
  },
  {
    id: 'pharmacy-task-050',
    title: 'Confirm consent / privacy flags (Pharmacy #50)',
    description: 'CareNest operational task for pharmacy: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm pharmacy context #50',
      'Capture outcome for pharmacy task 50',
      'Log follow-up owner for pharmacy-50',
    ],
    dependsOn: ['pharmacy-task-049'],
  },
  {
    id: 'pharmacy-task-051',
    title: 'Run compliance checklist (Pharmacy #51)',
    description: 'CareNest operational task for pharmacy: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm pharmacy context #51',
      'Capture outcome for pharmacy task 51',
      'Log follow-up owner for pharmacy-51',
    ],
    dependsOn: ['pharmacy-task-050'],
  },
  {
    id: 'pharmacy-task-052',
    title: 'Update risk scores (Pharmacy #52)',
    description: 'CareNest operational task for pharmacy: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm pharmacy context #52',
      'Capture outcome for pharmacy task 52',
      'Log follow-up owner for pharmacy-52',
    ],
    dependsOn: ['pharmacy-task-051'],
  },
  {
    id: 'pharmacy-task-053',
    title: 'Notify on-call clinician (Pharmacy #53)',
    description: 'CareNest operational task for pharmacy: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm pharmacy context #53',
      'Capture outcome for pharmacy task 53',
      'Log follow-up owner for pharmacy-53',
    ],
    dependsOn: ['pharmacy-task-052'],
  },
  {
    id: 'pharmacy-task-054',
    title: 'Archive stale drafts (Pharmacy #54)',
    description: 'CareNest operational task for pharmacy: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm pharmacy context #54',
      'Capture outcome for pharmacy task 54',
      'Log follow-up owner for pharmacy-54',
    ],
    dependsOn: ['pharmacy-task-053'],
  },
  {
    id: 'pharmacy-task-055',
    title: 'Export weekly digest (Pharmacy #55)',
    description: 'CareNest operational task for pharmacy: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm pharmacy context #55',
      'Capture outcome for pharmacy task 55',
      'Log follow-up owner for pharmacy-55',
    ],
    dependsOn: ['pharmacy-task-054'],
  },
  {
    id: 'pharmacy-task-056',
    title: 'Train new caregiver on module (Pharmacy #56)',
    description: 'CareNest operational task for pharmacy: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm pharmacy context #56',
      'Capture outcome for pharmacy task 56',
      'Log follow-up owner for pharmacy-56',
    ],
    dependsOn: ['pharmacy-task-055'],
  },
  {
    id: 'pharmacy-task-057',
    title: 'Verify device integrations (Pharmacy #57)',
    description: 'CareNest operational task for pharmacy: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm pharmacy context #57',
      'Capture outcome for pharmacy task 57',
      'Log follow-up owner for pharmacy-57',
    ],
    dependsOn: ['pharmacy-task-056'],
  },
  {
    id: 'pharmacy-task-058',
    title: 'Spot-check critical priorities (Pharmacy #58)',
    description: 'CareNest operational task for pharmacy: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm pharmacy context #58',
      'Capture outcome for pharmacy task 58',
      'Log follow-up owner for pharmacy-58',
    ],
    dependsOn: ['pharmacy-task-057'],
  },
  {
    id: 'pharmacy-task-059',
    title: 'Align meal / care constraints (Pharmacy #59)',
    description: 'CareNest operational task for pharmacy: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm pharmacy context #59',
      'Capture outcome for pharmacy task 59',
      'Log follow-up owner for pharmacy-59',
    ],
    dependsOn: ['pharmacy-task-058'],
  },
  {
    id: 'pharmacy-task-060',
    title: 'Publish dashboard widgets (Pharmacy #60)',
    description: 'CareNest operational task for pharmacy: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm pharmacy context #60',
      'Capture outcome for pharmacy task 60',
      'Log follow-up owner for pharmacy-60',
    ],
    dependsOn: ['pharmacy-task-059'],
  },
  {
    id: 'pharmacy-task-061',
    title: 'Review overnight notes (Pharmacy #61)',
    description: 'CareNest operational task for pharmacy: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm pharmacy context #61',
      'Capture outcome for pharmacy task 61',
      'Log follow-up owner for pharmacy-61',
    ],
    dependsOn: ['pharmacy-task-060'],
  },
  {
    id: 'pharmacy-task-062',
    title: 'Reconcile open items (Pharmacy #62)',
    description: 'CareNest operational task for pharmacy: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm pharmacy context #62',
      'Capture outcome for pharmacy task 62',
      'Log follow-up owner for pharmacy-62',
    ],
    dependsOn: ['pharmacy-task-061'],
  },
  {
    id: 'pharmacy-task-063',
    title: 'Escalate overdue cases (Pharmacy #63)',
    description: 'CareNest operational task for pharmacy: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm pharmacy context #63',
      'Capture outcome for pharmacy task 63',
      'Log follow-up owner for pharmacy-63',
    ],
    dependsOn: ['pharmacy-task-062'],
  },
  {
    id: 'pharmacy-task-064',
    title: 'Prepare family update (Pharmacy #64)',
    description: 'CareNest operational task for pharmacy: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm pharmacy context #64',
      'Capture outcome for pharmacy task 64',
      'Log follow-up owner for pharmacy-64',
    ],
    dependsOn: ['pharmacy-task-063'],
  },
  {
    id: 'pharmacy-task-065',
    title: 'Audit documentation completeness (Pharmacy #65)',
    description: 'CareNest operational task for pharmacy: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm pharmacy context #65',
      'Capture outcome for pharmacy task 65',
      'Log follow-up owner for pharmacy-65',
    ],
    dependsOn: ['pharmacy-task-064'],
  },
  {
    id: 'pharmacy-task-066',
    title: 'Sync with pharmacy / vendor (Pharmacy #66)',
    description: 'CareNest operational task for pharmacy: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm pharmacy context #66',
      'Capture outcome for pharmacy task 66',
      'Log follow-up owner for pharmacy-66',
    ],
    dependsOn: ['pharmacy-task-065'],
  },
  {
    id: 'pharmacy-task-067',
    title: 'Validate schedule conflicts (Pharmacy #67)',
    description: 'CareNest operational task for pharmacy: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm pharmacy context #67',
      'Capture outcome for pharmacy task 67',
      'Log follow-up owner for pharmacy-67',
    ],
    dependsOn: ['pharmacy-task-066'],
  },
  {
    id: 'pharmacy-task-068',
    title: 'Close completed workflows (Pharmacy #68)',
    description: 'CareNest operational task for pharmacy: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm pharmacy context #68',
      'Capture outcome for pharmacy task 68',
      'Log follow-up owner for pharmacy-68',
    ],
    dependsOn: ['pharmacy-task-067'],
  },
  {
    id: 'pharmacy-task-069',
    title: 'Generate shift handoff summary (Pharmacy #69)',
    description: 'CareNest operational task for pharmacy: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm pharmacy context #69',
      'Capture outcome for pharmacy task 69',
      'Log follow-up owner for pharmacy-69',
    ],
    dependsOn: ['pharmacy-task-068'],
  },
  {
    id: 'pharmacy-task-070',
    title: 'Confirm consent / privacy flags (Pharmacy #70)',
    description: 'CareNest operational task for pharmacy: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm pharmacy context #70',
      'Capture outcome for pharmacy task 70',
      'Log follow-up owner for pharmacy-70',
    ],
    dependsOn: ['pharmacy-task-069'],
  },
  {
    id: 'pharmacy-task-071',
    title: 'Run compliance checklist (Pharmacy #71)',
    description: 'CareNest operational task for pharmacy: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm pharmacy context #71',
      'Capture outcome for pharmacy task 71',
      'Log follow-up owner for pharmacy-71',
    ],
    dependsOn: ['pharmacy-task-070'],
  },
  {
    id: 'pharmacy-task-072',
    title: 'Update risk scores (Pharmacy #72)',
    description: 'CareNest operational task for pharmacy: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm pharmacy context #72',
      'Capture outcome for pharmacy task 72',
      'Log follow-up owner for pharmacy-72',
    ],
    dependsOn: ['pharmacy-task-071'],
  },
  {
    id: 'pharmacy-task-073',
    title: 'Notify on-call clinician (Pharmacy #73)',
    description: 'CareNest operational task for pharmacy: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm pharmacy context #73',
      'Capture outcome for pharmacy task 73',
      'Log follow-up owner for pharmacy-73',
    ],
    dependsOn: ['pharmacy-task-072'],
  },
  {
    id: 'pharmacy-task-074',
    title: 'Archive stale drafts (Pharmacy #74)',
    description: 'CareNest operational task for pharmacy: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm pharmacy context #74',
      'Capture outcome for pharmacy task 74',
      'Log follow-up owner for pharmacy-74',
    ],
    dependsOn: ['pharmacy-task-073'],
  },
  {
    id: 'pharmacy-task-075',
    title: 'Export weekly digest (Pharmacy #75)',
    description: 'CareNest operational task for pharmacy: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm pharmacy context #75',
      'Capture outcome for pharmacy task 75',
      'Log follow-up owner for pharmacy-75',
    ],
    dependsOn: ['pharmacy-task-074'],
  },
  {
    id: 'pharmacy-task-076',
    title: 'Train new caregiver on module (Pharmacy #76)',
    description: 'CareNest operational task for pharmacy: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm pharmacy context #76',
      'Capture outcome for pharmacy task 76',
      'Log follow-up owner for pharmacy-76',
    ],
    dependsOn: ['pharmacy-task-075'],
  },
  {
    id: 'pharmacy-task-077',
    title: 'Verify device integrations (Pharmacy #77)',
    description: 'CareNest operational task for pharmacy: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm pharmacy context #77',
      'Capture outcome for pharmacy task 77',
      'Log follow-up owner for pharmacy-77',
    ],
    dependsOn: ['pharmacy-task-076'],
  },
  {
    id: 'pharmacy-task-078',
    title: 'Spot-check critical priorities (Pharmacy #78)',
    description: 'CareNest operational task for pharmacy: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm pharmacy context #78',
      'Capture outcome for pharmacy task 78',
      'Log follow-up owner for pharmacy-78',
    ],
    dependsOn: ['pharmacy-task-077'],
  },
  {
    id: 'pharmacy-task-079',
    title: 'Align meal / care constraints (Pharmacy #79)',
    description: 'CareNest operational task for pharmacy: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm pharmacy context #79',
      'Capture outcome for pharmacy task 79',
      'Log follow-up owner for pharmacy-79',
    ],
    dependsOn: ['pharmacy-task-078'],
  },
  {
    id: 'pharmacy-task-080',
    title: 'Publish dashboard widgets (Pharmacy #80)',
    description: 'CareNest operational task for pharmacy: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm pharmacy context #80',
      'Capture outcome for pharmacy task 80',
      'Log follow-up owner for pharmacy-80',
    ],
    dependsOn: ['pharmacy-task-079'],
  },
];

export function listOpenPharmacyTasks(): PharmacyTask[] {
  return pharmacyTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countPharmacyTasksByState(): Record<PharmacyTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of pharmacyTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimatePharmacyWorkload1(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimatePharmacyWorkload2(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimatePharmacyWorkload3(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimatePharmacyWorkload4(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimatePharmacyWorkload5(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimatePharmacyWorkload6(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimatePharmacyWorkload7(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimatePharmacyWorkload8(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimatePharmacyWorkload9(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimatePharmacyWorkload10(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimatePharmacyWorkload11(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimatePharmacyWorkload12(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimatePharmacyWorkload13(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimatePharmacyWorkload14(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimatePharmacyWorkload15(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimatePharmacyWorkload16(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimatePharmacyWorkload17(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimatePharmacyWorkload18(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimatePharmacyWorkload19(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimatePharmacyWorkload20(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimatePharmacyWorkload21(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimatePharmacyWorkload22(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimatePharmacyWorkload23(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimatePharmacyWorkload24(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimatePharmacyWorkload25(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimatePharmacyWorkload26(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimatePharmacyWorkload27(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimatePharmacyWorkload28(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimatePharmacyWorkload29(tasks: PharmacyTask[] = pharmacyTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
