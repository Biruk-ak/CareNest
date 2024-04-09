/** Operational task catalog for Compliance */

export type ComplianceTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface ComplianceTask {
  id: string;
  title: string;
  description: string;
  state: ComplianceTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const complianceTaskCatalog: ComplianceTask[] = [
  {
    id: 'compliance-task-001',
    title: 'Review overnight notes (Compliance #1)',
    description: 'CareNest operational task for compliance: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm compliance context #1',
      'Capture outcome for compliance task 1',
      'Log follow-up owner for compliance-1',
    ],
    dependsOn: [],
  },
  {
    id: 'compliance-task-002',
    title: 'Reconcile open items (Compliance #2)',
    description: 'CareNest operational task for compliance: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm compliance context #2',
      'Capture outcome for compliance task 2',
      'Log follow-up owner for compliance-2',
    ],
    dependsOn: ['compliance-task-001'],
  },
  {
    id: 'compliance-task-003',
    title: 'Escalate overdue cases (Compliance #3)',
    description: 'CareNest operational task for compliance: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm compliance context #3',
      'Capture outcome for compliance task 3',
      'Log follow-up owner for compliance-3',
    ],
    dependsOn: ['compliance-task-002'],
  },
  {
    id: 'compliance-task-004',
    title: 'Prepare family update (Compliance #4)',
    description: 'CareNest operational task for compliance: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm compliance context #4',
      'Capture outcome for compliance task 4',
      'Log follow-up owner for compliance-4',
    ],
    dependsOn: ['compliance-task-003'],
  },
  {
    id: 'compliance-task-005',
    title: 'Audit documentation completeness (Compliance #5)',
    description: 'CareNest operational task for compliance: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm compliance context #5',
      'Capture outcome for compliance task 5',
      'Log follow-up owner for compliance-5',
    ],
    dependsOn: ['compliance-task-004'],
  },
  {
    id: 'compliance-task-006',
    title: 'Sync with pharmacy / vendor (Compliance #6)',
    description: 'CareNest operational task for compliance: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm compliance context #6',
      'Capture outcome for compliance task 6',
      'Log follow-up owner for compliance-6',
    ],
    dependsOn: ['compliance-task-005'],
  },
  {
    id: 'compliance-task-007',
    title: 'Validate schedule conflicts (Compliance #7)',
    description: 'CareNest operational task for compliance: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm compliance context #7',
      'Capture outcome for compliance task 7',
      'Log follow-up owner for compliance-7',
    ],
    dependsOn: ['compliance-task-006'],
  },
  {
    id: 'compliance-task-008',
    title: 'Close completed workflows (Compliance #8)',
    description: 'CareNest operational task for compliance: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm compliance context #8',
      'Capture outcome for compliance task 8',
      'Log follow-up owner for compliance-8',
    ],
    dependsOn: ['compliance-task-007'],
  },
  {
    id: 'compliance-task-009',
    title: 'Generate shift handoff summary (Compliance #9)',
    description: 'CareNest operational task for compliance: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm compliance context #9',
      'Capture outcome for compliance task 9',
      'Log follow-up owner for compliance-9',
    ],
    dependsOn: ['compliance-task-008'],
  },
  {
    id: 'compliance-task-010',
    title: 'Confirm consent / privacy flags (Compliance #10)',
    description: 'CareNest operational task for compliance: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm compliance context #10',
      'Capture outcome for compliance task 10',
      'Log follow-up owner for compliance-10',
    ],
    dependsOn: ['compliance-task-009'],
  },
  {
    id: 'compliance-task-011',
    title: 'Run compliance checklist (Compliance #11)',
    description: 'CareNest operational task for compliance: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm compliance context #11',
      'Capture outcome for compliance task 11',
      'Log follow-up owner for compliance-11',
    ],
    dependsOn: ['compliance-task-010'],
  },
  {
    id: 'compliance-task-012',
    title: 'Update risk scores (Compliance #12)',
    description: 'CareNest operational task for compliance: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm compliance context #12',
      'Capture outcome for compliance task 12',
      'Log follow-up owner for compliance-12',
    ],
    dependsOn: ['compliance-task-011'],
  },
  {
    id: 'compliance-task-013',
    title: 'Notify on-call clinician (Compliance #13)',
    description: 'CareNest operational task for compliance: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm compliance context #13',
      'Capture outcome for compliance task 13',
      'Log follow-up owner for compliance-13',
    ],
    dependsOn: ['compliance-task-012'],
  },
  {
    id: 'compliance-task-014',
    title: 'Archive stale drafts (Compliance #14)',
    description: 'CareNest operational task for compliance: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm compliance context #14',
      'Capture outcome for compliance task 14',
      'Log follow-up owner for compliance-14',
    ],
    dependsOn: ['compliance-task-013'],
  },
  {
    id: 'compliance-task-015',
    title: 'Export weekly digest (Compliance #15)',
    description: 'CareNest operational task for compliance: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm compliance context #15',
      'Capture outcome for compliance task 15',
      'Log follow-up owner for compliance-15',
    ],
    dependsOn: ['compliance-task-014'],
  },
  {
    id: 'compliance-task-016',
    title: 'Train new caregiver on module (Compliance #16)',
    description: 'CareNest operational task for compliance: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm compliance context #16',
      'Capture outcome for compliance task 16',
      'Log follow-up owner for compliance-16',
    ],
    dependsOn: ['compliance-task-015'],
  },
  {
    id: 'compliance-task-017',
    title: 'Verify device integrations (Compliance #17)',
    description: 'CareNest operational task for compliance: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm compliance context #17',
      'Capture outcome for compliance task 17',
      'Log follow-up owner for compliance-17',
    ],
    dependsOn: ['compliance-task-016'],
  },
  {
    id: 'compliance-task-018',
    title: 'Spot-check critical priorities (Compliance #18)',
    description: 'CareNest operational task for compliance: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm compliance context #18',
      'Capture outcome for compliance task 18',
      'Log follow-up owner for compliance-18',
    ],
    dependsOn: ['compliance-task-017'],
  },
  {
    id: 'compliance-task-019',
    title: 'Align meal / care constraints (Compliance #19)',
    description: 'CareNest operational task for compliance: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm compliance context #19',
      'Capture outcome for compliance task 19',
      'Log follow-up owner for compliance-19',
    ],
    dependsOn: ['compliance-task-018'],
  },
  {
    id: 'compliance-task-020',
    title: 'Publish dashboard widgets (Compliance #20)',
    description: 'CareNest operational task for compliance: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm compliance context #20',
      'Capture outcome for compliance task 20',
      'Log follow-up owner for compliance-20',
    ],
    dependsOn: ['compliance-task-019'],
  },
  {
    id: 'compliance-task-021',
    title: 'Review overnight notes (Compliance #21)',
    description: 'CareNest operational task for compliance: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm compliance context #21',
      'Capture outcome for compliance task 21',
      'Log follow-up owner for compliance-21',
    ],
    dependsOn: ['compliance-task-020'],
  },
  {
    id: 'compliance-task-022',
    title: 'Reconcile open items (Compliance #22)',
    description: 'CareNest operational task for compliance: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm compliance context #22',
      'Capture outcome for compliance task 22',
      'Log follow-up owner for compliance-22',
    ],
    dependsOn: ['compliance-task-021'],
  },
  {
    id: 'compliance-task-023',
    title: 'Escalate overdue cases (Compliance #23)',
    description: 'CareNest operational task for compliance: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm compliance context #23',
      'Capture outcome for compliance task 23',
      'Log follow-up owner for compliance-23',
    ],
    dependsOn: ['compliance-task-022'],
  },
  {
    id: 'compliance-task-024',
    title: 'Prepare family update (Compliance #24)',
    description: 'CareNest operational task for compliance: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm compliance context #24',
      'Capture outcome for compliance task 24',
      'Log follow-up owner for compliance-24',
    ],
    dependsOn: ['compliance-task-023'],
  },
  {
    id: 'compliance-task-025',
    title: 'Audit documentation completeness (Compliance #25)',
    description: 'CareNest operational task for compliance: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm compliance context #25',
      'Capture outcome for compliance task 25',
      'Log follow-up owner for compliance-25',
    ],
    dependsOn: ['compliance-task-024'],
  },
  {
    id: 'compliance-task-026',
    title: 'Sync with pharmacy / vendor (Compliance #26)',
    description: 'CareNest operational task for compliance: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm compliance context #26',
      'Capture outcome for compliance task 26',
      'Log follow-up owner for compliance-26',
    ],
    dependsOn: ['compliance-task-025'],
  },
  {
    id: 'compliance-task-027',
    title: 'Validate schedule conflicts (Compliance #27)',
    description: 'CareNest operational task for compliance: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm compliance context #27',
      'Capture outcome for compliance task 27',
      'Log follow-up owner for compliance-27',
    ],
    dependsOn: ['compliance-task-026'],
  },
  {
    id: 'compliance-task-028',
    title: 'Close completed workflows (Compliance #28)',
    description: 'CareNest operational task for compliance: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm compliance context #28',
      'Capture outcome for compliance task 28',
      'Log follow-up owner for compliance-28',
    ],
    dependsOn: ['compliance-task-027'],
  },
  {
    id: 'compliance-task-029',
    title: 'Generate shift handoff summary (Compliance #29)',
    description: 'CareNest operational task for compliance: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm compliance context #29',
      'Capture outcome for compliance task 29',
      'Log follow-up owner for compliance-29',
    ],
    dependsOn: ['compliance-task-028'],
  },
  {
    id: 'compliance-task-030',
    title: 'Confirm consent / privacy flags (Compliance #30)',
    description: 'CareNest operational task for compliance: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm compliance context #30',
      'Capture outcome for compliance task 30',
      'Log follow-up owner for compliance-30',
    ],
    dependsOn: ['compliance-task-029'],
  },
  {
    id: 'compliance-task-031',
    title: 'Run compliance checklist (Compliance #31)',
    description: 'CareNest operational task for compliance: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm compliance context #31',
      'Capture outcome for compliance task 31',
      'Log follow-up owner for compliance-31',
    ],
    dependsOn: ['compliance-task-030'],
  },
  {
    id: 'compliance-task-032',
    title: 'Update risk scores (Compliance #32)',
    description: 'CareNest operational task for compliance: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm compliance context #32',
      'Capture outcome for compliance task 32',
      'Log follow-up owner for compliance-32',
    ],
    dependsOn: ['compliance-task-031'],
  },
  {
    id: 'compliance-task-033',
    title: 'Notify on-call clinician (Compliance #33)',
    description: 'CareNest operational task for compliance: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm compliance context #33',
      'Capture outcome for compliance task 33',
      'Log follow-up owner for compliance-33',
    ],
    dependsOn: ['compliance-task-032'],
  },
  {
    id: 'compliance-task-034',
    title: 'Archive stale drafts (Compliance #34)',
    description: 'CareNest operational task for compliance: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm compliance context #34',
      'Capture outcome for compliance task 34',
      'Log follow-up owner for compliance-34',
    ],
    dependsOn: ['compliance-task-033'],
  },
  {
    id: 'compliance-task-035',
    title: 'Export weekly digest (Compliance #35)',
    description: 'CareNest operational task for compliance: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm compliance context #35',
      'Capture outcome for compliance task 35',
      'Log follow-up owner for compliance-35',
    ],
    dependsOn: ['compliance-task-034'],
  },
  {
    id: 'compliance-task-036',
    title: 'Train new caregiver on module (Compliance #36)',
    description: 'CareNest operational task for compliance: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm compliance context #36',
      'Capture outcome for compliance task 36',
      'Log follow-up owner for compliance-36',
    ],
    dependsOn: ['compliance-task-035'],
  },
  {
    id: 'compliance-task-037',
    title: 'Verify device integrations (Compliance #37)',
    description: 'CareNest operational task for compliance: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm compliance context #37',
      'Capture outcome for compliance task 37',
      'Log follow-up owner for compliance-37',
    ],
    dependsOn: ['compliance-task-036'],
  },
  {
    id: 'compliance-task-038',
    title: 'Spot-check critical priorities (Compliance #38)',
    description: 'CareNest operational task for compliance: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm compliance context #38',
      'Capture outcome for compliance task 38',
      'Log follow-up owner for compliance-38',
    ],
    dependsOn: ['compliance-task-037'],
  },
  {
    id: 'compliance-task-039',
    title: 'Align meal / care constraints (Compliance #39)',
    description: 'CareNest operational task for compliance: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm compliance context #39',
      'Capture outcome for compliance task 39',
      'Log follow-up owner for compliance-39',
    ],
    dependsOn: ['compliance-task-038'],
  },
  {
    id: 'compliance-task-040',
    title: 'Publish dashboard widgets (Compliance #40)',
    description: 'CareNest operational task for compliance: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm compliance context #40',
      'Capture outcome for compliance task 40',
      'Log follow-up owner for compliance-40',
    ],
    dependsOn: ['compliance-task-039'],
  },
  {
    id: 'compliance-task-041',
    title: 'Review overnight notes (Compliance #41)',
    description: 'CareNest operational task for compliance: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm compliance context #41',
      'Capture outcome for compliance task 41',
      'Log follow-up owner for compliance-41',
    ],
    dependsOn: ['compliance-task-040'],
  },
  {
    id: 'compliance-task-042',
    title: 'Reconcile open items (Compliance #42)',
    description: 'CareNest operational task for compliance: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm compliance context #42',
      'Capture outcome for compliance task 42',
      'Log follow-up owner for compliance-42',
    ],
    dependsOn: ['compliance-task-041'],
  },
  {
    id: 'compliance-task-043',
    title: 'Escalate overdue cases (Compliance #43)',
    description: 'CareNest operational task for compliance: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm compliance context #43',
      'Capture outcome for compliance task 43',
      'Log follow-up owner for compliance-43',
    ],
    dependsOn: ['compliance-task-042'],
  },
  {
    id: 'compliance-task-044',
    title: 'Prepare family update (Compliance #44)',
    description: 'CareNest operational task for compliance: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm compliance context #44',
      'Capture outcome for compliance task 44',
      'Log follow-up owner for compliance-44',
    ],
    dependsOn: ['compliance-task-043'],
  },
  {
    id: 'compliance-task-045',
    title: 'Audit documentation completeness (Compliance #45)',
    description: 'CareNest operational task for compliance: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm compliance context #45',
      'Capture outcome for compliance task 45',
      'Log follow-up owner for compliance-45',
    ],
    dependsOn: ['compliance-task-044'],
  },
  {
    id: 'compliance-task-046',
    title: 'Sync with pharmacy / vendor (Compliance #46)',
    description: 'CareNest operational task for compliance: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm compliance context #46',
      'Capture outcome for compliance task 46',
      'Log follow-up owner for compliance-46',
    ],
    dependsOn: ['compliance-task-045'],
  },
  {
    id: 'compliance-task-047',
    title: 'Validate schedule conflicts (Compliance #47)',
    description: 'CareNest operational task for compliance: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm compliance context #47',
      'Capture outcome for compliance task 47',
      'Log follow-up owner for compliance-47',
    ],
    dependsOn: ['compliance-task-046'],
  },
  {
    id: 'compliance-task-048',
    title: 'Close completed workflows (Compliance #48)',
    description: 'CareNest operational task for compliance: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm compliance context #48',
      'Capture outcome for compliance task 48',
      'Log follow-up owner for compliance-48',
    ],
    dependsOn: ['compliance-task-047'],
  },
  {
    id: 'compliance-task-049',
    title: 'Generate shift handoff summary (Compliance #49)',
    description: 'CareNest operational task for compliance: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm compliance context #49',
      'Capture outcome for compliance task 49',
      'Log follow-up owner for compliance-49',
    ],
    dependsOn: ['compliance-task-048'],
  },
  {
    id: 'compliance-task-050',
    title: 'Confirm consent / privacy flags (Compliance #50)',
    description: 'CareNest operational task for compliance: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm compliance context #50',
      'Capture outcome for compliance task 50',
      'Log follow-up owner for compliance-50',
    ],
    dependsOn: ['compliance-task-049'],
  },
  {
    id: 'compliance-task-051',
    title: 'Run compliance checklist (Compliance #51)',
    description: 'CareNest operational task for compliance: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm compliance context #51',
      'Capture outcome for compliance task 51',
      'Log follow-up owner for compliance-51',
    ],
    dependsOn: ['compliance-task-050'],
  },
  {
    id: 'compliance-task-052',
    title: 'Update risk scores (Compliance #52)',
    description: 'CareNest operational task for compliance: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm compliance context #52',
      'Capture outcome for compliance task 52',
      'Log follow-up owner for compliance-52',
    ],
    dependsOn: ['compliance-task-051'],
  },
  {
    id: 'compliance-task-053',
    title: 'Notify on-call clinician (Compliance #53)',
    description: 'CareNest operational task for compliance: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm compliance context #53',
      'Capture outcome for compliance task 53',
      'Log follow-up owner for compliance-53',
    ],
    dependsOn: ['compliance-task-052'],
  },
  {
    id: 'compliance-task-054',
    title: 'Archive stale drafts (Compliance #54)',
    description: 'CareNest operational task for compliance: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm compliance context #54',
      'Capture outcome for compliance task 54',
      'Log follow-up owner for compliance-54',
    ],
    dependsOn: ['compliance-task-053'],
  },
  {
    id: 'compliance-task-055',
    title: 'Export weekly digest (Compliance #55)',
    description: 'CareNest operational task for compliance: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm compliance context #55',
      'Capture outcome for compliance task 55',
      'Log follow-up owner for compliance-55',
    ],
    dependsOn: ['compliance-task-054'],
  },
  {
    id: 'compliance-task-056',
    title: 'Train new caregiver on module (Compliance #56)',
    description: 'CareNest operational task for compliance: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm compliance context #56',
      'Capture outcome for compliance task 56',
      'Log follow-up owner for compliance-56',
    ],
    dependsOn: ['compliance-task-055'],
  },
  {
    id: 'compliance-task-057',
    title: 'Verify device integrations (Compliance #57)',
    description: 'CareNest operational task for compliance: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm compliance context #57',
      'Capture outcome for compliance task 57',
      'Log follow-up owner for compliance-57',
    ],
    dependsOn: ['compliance-task-056'],
  },
  {
    id: 'compliance-task-058',
    title: 'Spot-check critical priorities (Compliance #58)',
    description: 'CareNest operational task for compliance: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm compliance context #58',
      'Capture outcome for compliance task 58',
      'Log follow-up owner for compliance-58',
    ],
    dependsOn: ['compliance-task-057'],
  },
  {
    id: 'compliance-task-059',
    title: 'Align meal / care constraints (Compliance #59)',
    description: 'CareNest operational task for compliance: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm compliance context #59',
      'Capture outcome for compliance task 59',
      'Log follow-up owner for compliance-59',
    ],
    dependsOn: ['compliance-task-058'],
  },
  {
    id: 'compliance-task-060',
    title: 'Publish dashboard widgets (Compliance #60)',
    description: 'CareNest operational task for compliance: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm compliance context #60',
      'Capture outcome for compliance task 60',
      'Log follow-up owner for compliance-60',
    ],
    dependsOn: ['compliance-task-059'],
  },
  {
    id: 'compliance-task-061',
    title: 'Review overnight notes (Compliance #61)',
    description: 'CareNest operational task for compliance: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm compliance context #61',
      'Capture outcome for compliance task 61',
      'Log follow-up owner for compliance-61',
    ],
    dependsOn: ['compliance-task-060'],
  },
  {
    id: 'compliance-task-062',
    title: 'Reconcile open items (Compliance #62)',
    description: 'CareNest operational task for compliance: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm compliance context #62',
      'Capture outcome for compliance task 62',
      'Log follow-up owner for compliance-62',
    ],
    dependsOn: ['compliance-task-061'],
  },
  {
    id: 'compliance-task-063',
    title: 'Escalate overdue cases (Compliance #63)',
    description: 'CareNest operational task for compliance: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm compliance context #63',
      'Capture outcome for compliance task 63',
      'Log follow-up owner for compliance-63',
    ],
    dependsOn: ['compliance-task-062'],
  },
  {
    id: 'compliance-task-064',
    title: 'Prepare family update (Compliance #64)',
    description: 'CareNest operational task for compliance: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm compliance context #64',
      'Capture outcome for compliance task 64',
      'Log follow-up owner for compliance-64',
    ],
    dependsOn: ['compliance-task-063'],
  },
  {
    id: 'compliance-task-065',
    title: 'Audit documentation completeness (Compliance #65)',
    description: 'CareNest operational task for compliance: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm compliance context #65',
      'Capture outcome for compliance task 65',
      'Log follow-up owner for compliance-65',
    ],
    dependsOn: ['compliance-task-064'],
  },
  {
    id: 'compliance-task-066',
    title: 'Sync with pharmacy / vendor (Compliance #66)',
    description: 'CareNest operational task for compliance: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm compliance context #66',
      'Capture outcome for compliance task 66',
      'Log follow-up owner for compliance-66',
    ],
    dependsOn: ['compliance-task-065'],
  },
  {
    id: 'compliance-task-067',
    title: 'Validate schedule conflicts (Compliance #67)',
    description: 'CareNest operational task for compliance: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm compliance context #67',
      'Capture outcome for compliance task 67',
      'Log follow-up owner for compliance-67',
    ],
    dependsOn: ['compliance-task-066'],
  },
  {
    id: 'compliance-task-068',
    title: 'Close completed workflows (Compliance #68)',
    description: 'CareNest operational task for compliance: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm compliance context #68',
      'Capture outcome for compliance task 68',
      'Log follow-up owner for compliance-68',
    ],
    dependsOn: ['compliance-task-067'],
  },
  {
    id: 'compliance-task-069',
    title: 'Generate shift handoff summary (Compliance #69)',
    description: 'CareNest operational task for compliance: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm compliance context #69',
      'Capture outcome for compliance task 69',
      'Log follow-up owner for compliance-69',
    ],
    dependsOn: ['compliance-task-068'],
  },
  {
    id: 'compliance-task-070',
    title: 'Confirm consent / privacy flags (Compliance #70)',
    description: 'CareNest operational task for compliance: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm compliance context #70',
      'Capture outcome for compliance task 70',
      'Log follow-up owner for compliance-70',
    ],
    dependsOn: ['compliance-task-069'],
  },
  {
    id: 'compliance-task-071',
    title: 'Run compliance checklist (Compliance #71)',
    description: 'CareNest operational task for compliance: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm compliance context #71',
      'Capture outcome for compliance task 71',
      'Log follow-up owner for compliance-71',
    ],
    dependsOn: ['compliance-task-070'],
  },
  {
    id: 'compliance-task-072',
    title: 'Update risk scores (Compliance #72)',
    description: 'CareNest operational task for compliance: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm compliance context #72',
      'Capture outcome for compliance task 72',
      'Log follow-up owner for compliance-72',
    ],
    dependsOn: ['compliance-task-071'],
  },
  {
    id: 'compliance-task-073',
    title: 'Notify on-call clinician (Compliance #73)',
    description: 'CareNest operational task for compliance: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm compliance context #73',
      'Capture outcome for compliance task 73',
      'Log follow-up owner for compliance-73',
    ],
    dependsOn: ['compliance-task-072'],
  },
  {
    id: 'compliance-task-074',
    title: 'Archive stale drafts (Compliance #74)',
    description: 'CareNest operational task for compliance: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm compliance context #74',
      'Capture outcome for compliance task 74',
      'Log follow-up owner for compliance-74',
    ],
    dependsOn: ['compliance-task-073'],
  },
  {
    id: 'compliance-task-075',
    title: 'Export weekly digest (Compliance #75)',
    description: 'CareNest operational task for compliance: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm compliance context #75',
      'Capture outcome for compliance task 75',
      'Log follow-up owner for compliance-75',
    ],
    dependsOn: ['compliance-task-074'],
  },
  {
    id: 'compliance-task-076',
    title: 'Train new caregiver on module (Compliance #76)',
    description: 'CareNest operational task for compliance: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm compliance context #76',
      'Capture outcome for compliance task 76',
      'Log follow-up owner for compliance-76',
    ],
    dependsOn: ['compliance-task-075'],
  },
  {
    id: 'compliance-task-077',
    title: 'Verify device integrations (Compliance #77)',
    description: 'CareNest operational task for compliance: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm compliance context #77',
      'Capture outcome for compliance task 77',
      'Log follow-up owner for compliance-77',
    ],
    dependsOn: ['compliance-task-076'],
  },
  {
    id: 'compliance-task-078',
    title: 'Spot-check critical priorities (Compliance #78)',
    description: 'CareNest operational task for compliance: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm compliance context #78',
      'Capture outcome for compliance task 78',
      'Log follow-up owner for compliance-78',
    ],
    dependsOn: ['compliance-task-077'],
  },
  {
    id: 'compliance-task-079',
    title: 'Align meal / care constraints (Compliance #79)',
    description: 'CareNest operational task for compliance: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm compliance context #79',
      'Capture outcome for compliance task 79',
      'Log follow-up owner for compliance-79',
    ],
    dependsOn: ['compliance-task-078'],
  },
  {
    id: 'compliance-task-080',
    title: 'Publish dashboard widgets (Compliance #80)',
    description: 'CareNest operational task for compliance: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm compliance context #80',
      'Capture outcome for compliance task 80',
      'Log follow-up owner for compliance-80',
    ],
    dependsOn: ['compliance-task-079'],
  },
];

export function listOpenComplianceTasks(): ComplianceTask[] {
  return complianceTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countComplianceTasksByState(): Record<ComplianceTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of complianceTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateComplianceWorkload1(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateComplianceWorkload2(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateComplianceWorkload3(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateComplianceWorkload4(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateComplianceWorkload5(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateComplianceWorkload6(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateComplianceWorkload7(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateComplianceWorkload8(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateComplianceWorkload9(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateComplianceWorkload10(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateComplianceWorkload11(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateComplianceWorkload12(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateComplianceWorkload13(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateComplianceWorkload14(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateComplianceWorkload15(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateComplianceWorkload16(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateComplianceWorkload17(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateComplianceWorkload18(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateComplianceWorkload19(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateComplianceWorkload20(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateComplianceWorkload21(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateComplianceWorkload22(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateComplianceWorkload23(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateComplianceWorkload24(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateComplianceWorkload25(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateComplianceWorkload26(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateComplianceWorkload27(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateComplianceWorkload28(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateComplianceWorkload29(tasks: ComplianceTask[] = complianceTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
