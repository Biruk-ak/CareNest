/** Operational task catalog for FamilyPortal */

export type FamilyPortalTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface FamilyPortalTask {
  id: string;
  title: string;
  description: string;
  state: FamilyPortalTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const familyPortalTaskCatalog: FamilyPortalTask[] = [
  {
    id: 'family-portal-task-001',
    title: 'Review overnight notes (FamilyPortal #1)',
    description: 'CareNest operational task for family-portal: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm family-portal context #1',
      'Capture outcome for family-portal task 1',
      'Log follow-up owner for family-portal-1',
    ],
    dependsOn: [],
  },
  {
    id: 'family-portal-task-002',
    title: 'Reconcile open items (FamilyPortal #2)',
    description: 'CareNest operational task for family-portal: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm family-portal context #2',
      'Capture outcome for family-portal task 2',
      'Log follow-up owner for family-portal-2',
    ],
    dependsOn: ['family-portal-task-001'],
  },
  {
    id: 'family-portal-task-003',
    title: 'Escalate overdue cases (FamilyPortal #3)',
    description: 'CareNest operational task for family-portal: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm family-portal context #3',
      'Capture outcome for family-portal task 3',
      'Log follow-up owner for family-portal-3',
    ],
    dependsOn: ['family-portal-task-002'],
  },
  {
    id: 'family-portal-task-004',
    title: 'Prepare family update (FamilyPortal #4)',
    description: 'CareNest operational task for family-portal: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm family-portal context #4',
      'Capture outcome for family-portal task 4',
      'Log follow-up owner for family-portal-4',
    ],
    dependsOn: ['family-portal-task-003'],
  },
  {
    id: 'family-portal-task-005',
    title: 'Audit documentation completeness (FamilyPortal #5)',
    description: 'CareNest operational task for family-portal: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm family-portal context #5',
      'Capture outcome for family-portal task 5',
      'Log follow-up owner for family-portal-5',
    ],
    dependsOn: ['family-portal-task-004'],
  },
  {
    id: 'family-portal-task-006',
    title: 'Sync with pharmacy / vendor (FamilyPortal #6)',
    description: 'CareNest operational task for family-portal: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm family-portal context #6',
      'Capture outcome for family-portal task 6',
      'Log follow-up owner for family-portal-6',
    ],
    dependsOn: ['family-portal-task-005'],
  },
  {
    id: 'family-portal-task-007',
    title: 'Validate schedule conflicts (FamilyPortal #7)',
    description: 'CareNest operational task for family-portal: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm family-portal context #7',
      'Capture outcome for family-portal task 7',
      'Log follow-up owner for family-portal-7',
    ],
    dependsOn: ['family-portal-task-006'],
  },
  {
    id: 'family-portal-task-008',
    title: 'Close completed workflows (FamilyPortal #8)',
    description: 'CareNest operational task for family-portal: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm family-portal context #8',
      'Capture outcome for family-portal task 8',
      'Log follow-up owner for family-portal-8',
    ],
    dependsOn: ['family-portal-task-007'],
  },
  {
    id: 'family-portal-task-009',
    title: 'Generate shift handoff summary (FamilyPortal #9)',
    description: 'CareNest operational task for family-portal: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm family-portal context #9',
      'Capture outcome for family-portal task 9',
      'Log follow-up owner for family-portal-9',
    ],
    dependsOn: ['family-portal-task-008'],
  },
  {
    id: 'family-portal-task-010',
    title: 'Confirm consent / privacy flags (FamilyPortal #10)',
    description: 'CareNest operational task for family-portal: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm family-portal context #10',
      'Capture outcome for family-portal task 10',
      'Log follow-up owner for family-portal-10',
    ],
    dependsOn: ['family-portal-task-009'],
  },
  {
    id: 'family-portal-task-011',
    title: 'Run compliance checklist (FamilyPortal #11)',
    description: 'CareNest operational task for family-portal: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm family-portal context #11',
      'Capture outcome for family-portal task 11',
      'Log follow-up owner for family-portal-11',
    ],
    dependsOn: ['family-portal-task-010'],
  },
  {
    id: 'family-portal-task-012',
    title: 'Update risk scores (FamilyPortal #12)',
    description: 'CareNest operational task for family-portal: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm family-portal context #12',
      'Capture outcome for family-portal task 12',
      'Log follow-up owner for family-portal-12',
    ],
    dependsOn: ['family-portal-task-011'],
  },
  {
    id: 'family-portal-task-013',
    title: 'Notify on-call clinician (FamilyPortal #13)',
    description: 'CareNest operational task for family-portal: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm family-portal context #13',
      'Capture outcome for family-portal task 13',
      'Log follow-up owner for family-portal-13',
    ],
    dependsOn: ['family-portal-task-012'],
  },
  {
    id: 'family-portal-task-014',
    title: 'Archive stale drafts (FamilyPortal #14)',
    description: 'CareNest operational task for family-portal: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm family-portal context #14',
      'Capture outcome for family-portal task 14',
      'Log follow-up owner for family-portal-14',
    ],
    dependsOn: ['family-portal-task-013'],
  },
  {
    id: 'family-portal-task-015',
    title: 'Export weekly digest (FamilyPortal #15)',
    description: 'CareNest operational task for family-portal: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm family-portal context #15',
      'Capture outcome for family-portal task 15',
      'Log follow-up owner for family-portal-15',
    ],
    dependsOn: ['family-portal-task-014'],
  },
  {
    id: 'family-portal-task-016',
    title: 'Train new caregiver on module (FamilyPortal #16)',
    description: 'CareNest operational task for family-portal: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm family-portal context #16',
      'Capture outcome for family-portal task 16',
      'Log follow-up owner for family-portal-16',
    ],
    dependsOn: ['family-portal-task-015'],
  },
  {
    id: 'family-portal-task-017',
    title: 'Verify device integrations (FamilyPortal #17)',
    description: 'CareNest operational task for family-portal: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm family-portal context #17',
      'Capture outcome for family-portal task 17',
      'Log follow-up owner for family-portal-17',
    ],
    dependsOn: ['family-portal-task-016'],
  },
  {
    id: 'family-portal-task-018',
    title: 'Spot-check critical priorities (FamilyPortal #18)',
    description: 'CareNest operational task for family-portal: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm family-portal context #18',
      'Capture outcome for family-portal task 18',
      'Log follow-up owner for family-portal-18',
    ],
    dependsOn: ['family-portal-task-017'],
  },
  {
    id: 'family-portal-task-019',
    title: 'Align meal / care constraints (FamilyPortal #19)',
    description: 'CareNest operational task for family-portal: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm family-portal context #19',
      'Capture outcome for family-portal task 19',
      'Log follow-up owner for family-portal-19',
    ],
    dependsOn: ['family-portal-task-018'],
  },
  {
    id: 'family-portal-task-020',
    title: 'Publish dashboard widgets (FamilyPortal #20)',
    description: 'CareNest operational task for family-portal: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm family-portal context #20',
      'Capture outcome for family-portal task 20',
      'Log follow-up owner for family-portal-20',
    ],
    dependsOn: ['family-portal-task-019'],
  },
  {
    id: 'family-portal-task-021',
    title: 'Review overnight notes (FamilyPortal #21)',
    description: 'CareNest operational task for family-portal: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm family-portal context #21',
      'Capture outcome for family-portal task 21',
      'Log follow-up owner for family-portal-21',
    ],
    dependsOn: ['family-portal-task-020'],
  },
  {
    id: 'family-portal-task-022',
    title: 'Reconcile open items (FamilyPortal #22)',
    description: 'CareNest operational task for family-portal: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm family-portal context #22',
      'Capture outcome for family-portal task 22',
      'Log follow-up owner for family-portal-22',
    ],
    dependsOn: ['family-portal-task-021'],
  },
  {
    id: 'family-portal-task-023',
    title: 'Escalate overdue cases (FamilyPortal #23)',
    description: 'CareNest operational task for family-portal: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm family-portal context #23',
      'Capture outcome for family-portal task 23',
      'Log follow-up owner for family-portal-23',
    ],
    dependsOn: ['family-portal-task-022'],
  },
  {
    id: 'family-portal-task-024',
    title: 'Prepare family update (FamilyPortal #24)',
    description: 'CareNest operational task for family-portal: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm family-portal context #24',
      'Capture outcome for family-portal task 24',
      'Log follow-up owner for family-portal-24',
    ],
    dependsOn: ['family-portal-task-023'],
  },
  {
    id: 'family-portal-task-025',
    title: 'Audit documentation completeness (FamilyPortal #25)',
    description: 'CareNest operational task for family-portal: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm family-portal context #25',
      'Capture outcome for family-portal task 25',
      'Log follow-up owner for family-portal-25',
    ],
    dependsOn: ['family-portal-task-024'],
  },
  {
    id: 'family-portal-task-026',
    title: 'Sync with pharmacy / vendor (FamilyPortal #26)',
    description: 'CareNest operational task for family-portal: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm family-portal context #26',
      'Capture outcome for family-portal task 26',
      'Log follow-up owner for family-portal-26',
    ],
    dependsOn: ['family-portal-task-025'],
  },
  {
    id: 'family-portal-task-027',
    title: 'Validate schedule conflicts (FamilyPortal #27)',
    description: 'CareNest operational task for family-portal: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm family-portal context #27',
      'Capture outcome for family-portal task 27',
      'Log follow-up owner for family-portal-27',
    ],
    dependsOn: ['family-portal-task-026'],
  },
  {
    id: 'family-portal-task-028',
    title: 'Close completed workflows (FamilyPortal #28)',
    description: 'CareNest operational task for family-portal: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm family-portal context #28',
      'Capture outcome for family-portal task 28',
      'Log follow-up owner for family-portal-28',
    ],
    dependsOn: ['family-portal-task-027'],
  },
  {
    id: 'family-portal-task-029',
    title: 'Generate shift handoff summary (FamilyPortal #29)',
    description: 'CareNest operational task for family-portal: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm family-portal context #29',
      'Capture outcome for family-portal task 29',
      'Log follow-up owner for family-portal-29',
    ],
    dependsOn: ['family-portal-task-028'],
  },
  {
    id: 'family-portal-task-030',
    title: 'Confirm consent / privacy flags (FamilyPortal #30)',
    description: 'CareNest operational task for family-portal: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm family-portal context #30',
      'Capture outcome for family-portal task 30',
      'Log follow-up owner for family-portal-30',
    ],
    dependsOn: ['family-portal-task-029'],
  },
  {
    id: 'family-portal-task-031',
    title: 'Run compliance checklist (FamilyPortal #31)',
    description: 'CareNest operational task for family-portal: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm family-portal context #31',
      'Capture outcome for family-portal task 31',
      'Log follow-up owner for family-portal-31',
    ],
    dependsOn: ['family-portal-task-030'],
  },
  {
    id: 'family-portal-task-032',
    title: 'Update risk scores (FamilyPortal #32)',
    description: 'CareNest operational task for family-portal: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm family-portal context #32',
      'Capture outcome for family-portal task 32',
      'Log follow-up owner for family-portal-32',
    ],
    dependsOn: ['family-portal-task-031'],
  },
  {
    id: 'family-portal-task-033',
    title: 'Notify on-call clinician (FamilyPortal #33)',
    description: 'CareNest operational task for family-portal: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm family-portal context #33',
      'Capture outcome for family-portal task 33',
      'Log follow-up owner for family-portal-33',
    ],
    dependsOn: ['family-portal-task-032'],
  },
  {
    id: 'family-portal-task-034',
    title: 'Archive stale drafts (FamilyPortal #34)',
    description: 'CareNest operational task for family-portal: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm family-portal context #34',
      'Capture outcome for family-portal task 34',
      'Log follow-up owner for family-portal-34',
    ],
    dependsOn: ['family-portal-task-033'],
  },
  {
    id: 'family-portal-task-035',
    title: 'Export weekly digest (FamilyPortal #35)',
    description: 'CareNest operational task for family-portal: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm family-portal context #35',
      'Capture outcome for family-portal task 35',
      'Log follow-up owner for family-portal-35',
    ],
    dependsOn: ['family-portal-task-034'],
  },
  {
    id: 'family-portal-task-036',
    title: 'Train new caregiver on module (FamilyPortal #36)',
    description: 'CareNest operational task for family-portal: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm family-portal context #36',
      'Capture outcome for family-portal task 36',
      'Log follow-up owner for family-portal-36',
    ],
    dependsOn: ['family-portal-task-035'],
  },
  {
    id: 'family-portal-task-037',
    title: 'Verify device integrations (FamilyPortal #37)',
    description: 'CareNest operational task for family-portal: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm family-portal context #37',
      'Capture outcome for family-portal task 37',
      'Log follow-up owner for family-portal-37',
    ],
    dependsOn: ['family-portal-task-036'],
  },
  {
    id: 'family-portal-task-038',
    title: 'Spot-check critical priorities (FamilyPortal #38)',
    description: 'CareNest operational task for family-portal: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm family-portal context #38',
      'Capture outcome for family-portal task 38',
      'Log follow-up owner for family-portal-38',
    ],
    dependsOn: ['family-portal-task-037'],
  },
  {
    id: 'family-portal-task-039',
    title: 'Align meal / care constraints (FamilyPortal #39)',
    description: 'CareNest operational task for family-portal: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm family-portal context #39',
      'Capture outcome for family-portal task 39',
      'Log follow-up owner for family-portal-39',
    ],
    dependsOn: ['family-portal-task-038'],
  },
  {
    id: 'family-portal-task-040',
    title: 'Publish dashboard widgets (FamilyPortal #40)',
    description: 'CareNest operational task for family-portal: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm family-portal context #40',
      'Capture outcome for family-portal task 40',
      'Log follow-up owner for family-portal-40',
    ],
    dependsOn: ['family-portal-task-039'],
  },
  {
    id: 'family-portal-task-041',
    title: 'Review overnight notes (FamilyPortal #41)',
    description: 'CareNest operational task for family-portal: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm family-portal context #41',
      'Capture outcome for family-portal task 41',
      'Log follow-up owner for family-portal-41',
    ],
    dependsOn: ['family-portal-task-040'],
  },
  {
    id: 'family-portal-task-042',
    title: 'Reconcile open items (FamilyPortal #42)',
    description: 'CareNest operational task for family-portal: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm family-portal context #42',
      'Capture outcome for family-portal task 42',
      'Log follow-up owner for family-portal-42',
    ],
    dependsOn: ['family-portal-task-041'],
  },
  {
    id: 'family-portal-task-043',
    title: 'Escalate overdue cases (FamilyPortal #43)',
    description: 'CareNest operational task for family-portal: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm family-portal context #43',
      'Capture outcome for family-portal task 43',
      'Log follow-up owner for family-portal-43',
    ],
    dependsOn: ['family-portal-task-042'],
  },
  {
    id: 'family-portal-task-044',
    title: 'Prepare family update (FamilyPortal #44)',
    description: 'CareNest operational task for family-portal: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm family-portal context #44',
      'Capture outcome for family-portal task 44',
      'Log follow-up owner for family-portal-44',
    ],
    dependsOn: ['family-portal-task-043'],
  },
  {
    id: 'family-portal-task-045',
    title: 'Audit documentation completeness (FamilyPortal #45)',
    description: 'CareNest operational task for family-portal: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm family-portal context #45',
      'Capture outcome for family-portal task 45',
      'Log follow-up owner for family-portal-45',
    ],
    dependsOn: ['family-portal-task-044'],
  },
  {
    id: 'family-portal-task-046',
    title: 'Sync with pharmacy / vendor (FamilyPortal #46)',
    description: 'CareNest operational task for family-portal: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm family-portal context #46',
      'Capture outcome for family-portal task 46',
      'Log follow-up owner for family-portal-46',
    ],
    dependsOn: ['family-portal-task-045'],
  },
  {
    id: 'family-portal-task-047',
    title: 'Validate schedule conflicts (FamilyPortal #47)',
    description: 'CareNest operational task for family-portal: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm family-portal context #47',
      'Capture outcome for family-portal task 47',
      'Log follow-up owner for family-portal-47',
    ],
    dependsOn: ['family-portal-task-046'],
  },
  {
    id: 'family-portal-task-048',
    title: 'Close completed workflows (FamilyPortal #48)',
    description: 'CareNest operational task for family-portal: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm family-portal context #48',
      'Capture outcome for family-portal task 48',
      'Log follow-up owner for family-portal-48',
    ],
    dependsOn: ['family-portal-task-047'],
  },
  {
    id: 'family-portal-task-049',
    title: 'Generate shift handoff summary (FamilyPortal #49)',
    description: 'CareNest operational task for family-portal: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm family-portal context #49',
      'Capture outcome for family-portal task 49',
      'Log follow-up owner for family-portal-49',
    ],
    dependsOn: ['family-portal-task-048'],
  },
  {
    id: 'family-portal-task-050',
    title: 'Confirm consent / privacy flags (FamilyPortal #50)',
    description: 'CareNest operational task for family-portal: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm family-portal context #50',
      'Capture outcome for family-portal task 50',
      'Log follow-up owner for family-portal-50',
    ],
    dependsOn: ['family-portal-task-049'],
  },
  {
    id: 'family-portal-task-051',
    title: 'Run compliance checklist (FamilyPortal #51)',
    description: 'CareNest operational task for family-portal: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm family-portal context #51',
      'Capture outcome for family-portal task 51',
      'Log follow-up owner for family-portal-51',
    ],
    dependsOn: ['family-portal-task-050'],
  },
  {
    id: 'family-portal-task-052',
    title: 'Update risk scores (FamilyPortal #52)',
    description: 'CareNest operational task for family-portal: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm family-portal context #52',
      'Capture outcome for family-portal task 52',
      'Log follow-up owner for family-portal-52',
    ],
    dependsOn: ['family-portal-task-051'],
  },
  {
    id: 'family-portal-task-053',
    title: 'Notify on-call clinician (FamilyPortal #53)',
    description: 'CareNest operational task for family-portal: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm family-portal context #53',
      'Capture outcome for family-portal task 53',
      'Log follow-up owner for family-portal-53',
    ],
    dependsOn: ['family-portal-task-052'],
  },
  {
    id: 'family-portal-task-054',
    title: 'Archive stale drafts (FamilyPortal #54)',
    description: 'CareNest operational task for family-portal: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm family-portal context #54',
      'Capture outcome for family-portal task 54',
      'Log follow-up owner for family-portal-54',
    ],
    dependsOn: ['family-portal-task-053'],
  },
  {
    id: 'family-portal-task-055',
    title: 'Export weekly digest (FamilyPortal #55)',
    description: 'CareNest operational task for family-portal: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm family-portal context #55',
      'Capture outcome for family-portal task 55',
      'Log follow-up owner for family-portal-55',
    ],
    dependsOn: ['family-portal-task-054'],
  },
  {
    id: 'family-portal-task-056',
    title: 'Train new caregiver on module (FamilyPortal #56)',
    description: 'CareNest operational task for family-portal: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm family-portal context #56',
      'Capture outcome for family-portal task 56',
      'Log follow-up owner for family-portal-56',
    ],
    dependsOn: ['family-portal-task-055'],
  },
  {
    id: 'family-portal-task-057',
    title: 'Verify device integrations (FamilyPortal #57)',
    description: 'CareNest operational task for family-portal: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm family-portal context #57',
      'Capture outcome for family-portal task 57',
      'Log follow-up owner for family-portal-57',
    ],
    dependsOn: ['family-portal-task-056'],
  },
  {
    id: 'family-portal-task-058',
    title: 'Spot-check critical priorities (FamilyPortal #58)',
    description: 'CareNest operational task for family-portal: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm family-portal context #58',
      'Capture outcome for family-portal task 58',
      'Log follow-up owner for family-portal-58',
    ],
    dependsOn: ['family-portal-task-057'],
  },
  {
    id: 'family-portal-task-059',
    title: 'Align meal / care constraints (FamilyPortal #59)',
    description: 'CareNest operational task for family-portal: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm family-portal context #59',
      'Capture outcome for family-portal task 59',
      'Log follow-up owner for family-portal-59',
    ],
    dependsOn: ['family-portal-task-058'],
  },
  {
    id: 'family-portal-task-060',
    title: 'Publish dashboard widgets (FamilyPortal #60)',
    description: 'CareNest operational task for family-portal: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm family-portal context #60',
      'Capture outcome for family-portal task 60',
      'Log follow-up owner for family-portal-60',
    ],
    dependsOn: ['family-portal-task-059'],
  },
  {
    id: 'family-portal-task-061',
    title: 'Review overnight notes (FamilyPortal #61)',
    description: 'CareNest operational task for family-portal: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm family-portal context #61',
      'Capture outcome for family-portal task 61',
      'Log follow-up owner for family-portal-61',
    ],
    dependsOn: ['family-portal-task-060'],
  },
  {
    id: 'family-portal-task-062',
    title: 'Reconcile open items (FamilyPortal #62)',
    description: 'CareNest operational task for family-portal: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm family-portal context #62',
      'Capture outcome for family-portal task 62',
      'Log follow-up owner for family-portal-62',
    ],
    dependsOn: ['family-portal-task-061'],
  },
  {
    id: 'family-portal-task-063',
    title: 'Escalate overdue cases (FamilyPortal #63)',
    description: 'CareNest operational task for family-portal: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm family-portal context #63',
      'Capture outcome for family-portal task 63',
      'Log follow-up owner for family-portal-63',
    ],
    dependsOn: ['family-portal-task-062'],
  },
  {
    id: 'family-portal-task-064',
    title: 'Prepare family update (FamilyPortal #64)',
    description: 'CareNest operational task for family-portal: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm family-portal context #64',
      'Capture outcome for family-portal task 64',
      'Log follow-up owner for family-portal-64',
    ],
    dependsOn: ['family-portal-task-063'],
  },
  {
    id: 'family-portal-task-065',
    title: 'Audit documentation completeness (FamilyPortal #65)',
    description: 'CareNest operational task for family-portal: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm family-portal context #65',
      'Capture outcome for family-portal task 65',
      'Log follow-up owner for family-portal-65',
    ],
    dependsOn: ['family-portal-task-064'],
  },
  {
    id: 'family-portal-task-066',
    title: 'Sync with pharmacy / vendor (FamilyPortal #66)',
    description: 'CareNest operational task for family-portal: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm family-portal context #66',
      'Capture outcome for family-portal task 66',
      'Log follow-up owner for family-portal-66',
    ],
    dependsOn: ['family-portal-task-065'],
  },
  {
    id: 'family-portal-task-067',
    title: 'Validate schedule conflicts (FamilyPortal #67)',
    description: 'CareNest operational task for family-portal: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm family-portal context #67',
      'Capture outcome for family-portal task 67',
      'Log follow-up owner for family-portal-67',
    ],
    dependsOn: ['family-portal-task-066'],
  },
  {
    id: 'family-portal-task-068',
    title: 'Close completed workflows (FamilyPortal #68)',
    description: 'CareNest operational task for family-portal: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm family-portal context #68',
      'Capture outcome for family-portal task 68',
      'Log follow-up owner for family-portal-68',
    ],
    dependsOn: ['family-portal-task-067'],
  },
  {
    id: 'family-portal-task-069',
    title: 'Generate shift handoff summary (FamilyPortal #69)',
    description: 'CareNest operational task for family-portal: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm family-portal context #69',
      'Capture outcome for family-portal task 69',
      'Log follow-up owner for family-portal-69',
    ],
    dependsOn: ['family-portal-task-068'],
  },
  {
    id: 'family-portal-task-070',
    title: 'Confirm consent / privacy flags (FamilyPortal #70)',
    description: 'CareNest operational task for family-portal: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm family-portal context #70',
      'Capture outcome for family-portal task 70',
      'Log follow-up owner for family-portal-70',
    ],
    dependsOn: ['family-portal-task-069'],
  },
  {
    id: 'family-portal-task-071',
    title: 'Run compliance checklist (FamilyPortal #71)',
    description: 'CareNest operational task for family-portal: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm family-portal context #71',
      'Capture outcome for family-portal task 71',
      'Log follow-up owner for family-portal-71',
    ],
    dependsOn: ['family-portal-task-070'],
  },
  {
    id: 'family-portal-task-072',
    title: 'Update risk scores (FamilyPortal #72)',
    description: 'CareNest operational task for family-portal: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm family-portal context #72',
      'Capture outcome for family-portal task 72',
      'Log follow-up owner for family-portal-72',
    ],
    dependsOn: ['family-portal-task-071'],
  },
  {
    id: 'family-portal-task-073',
    title: 'Notify on-call clinician (FamilyPortal #73)',
    description: 'CareNest operational task for family-portal: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm family-portal context #73',
      'Capture outcome for family-portal task 73',
      'Log follow-up owner for family-portal-73',
    ],
    dependsOn: ['family-portal-task-072'],
  },
  {
    id: 'family-portal-task-074',
    title: 'Archive stale drafts (FamilyPortal #74)',
    description: 'CareNest operational task for family-portal: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm family-portal context #74',
      'Capture outcome for family-portal task 74',
      'Log follow-up owner for family-portal-74',
    ],
    dependsOn: ['family-portal-task-073'],
  },
  {
    id: 'family-portal-task-075',
    title: 'Export weekly digest (FamilyPortal #75)',
    description: 'CareNest operational task for family-portal: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm family-portal context #75',
      'Capture outcome for family-portal task 75',
      'Log follow-up owner for family-portal-75',
    ],
    dependsOn: ['family-portal-task-074'],
  },
  {
    id: 'family-portal-task-076',
    title: 'Train new caregiver on module (FamilyPortal #76)',
    description: 'CareNest operational task for family-portal: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm family-portal context #76',
      'Capture outcome for family-portal task 76',
      'Log follow-up owner for family-portal-76',
    ],
    dependsOn: ['family-portal-task-075'],
  },
  {
    id: 'family-portal-task-077',
    title: 'Verify device integrations (FamilyPortal #77)',
    description: 'CareNest operational task for family-portal: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm family-portal context #77',
      'Capture outcome for family-portal task 77',
      'Log follow-up owner for family-portal-77',
    ],
    dependsOn: ['family-portal-task-076'],
  },
  {
    id: 'family-portal-task-078',
    title: 'Spot-check critical priorities (FamilyPortal #78)',
    description: 'CareNest operational task for family-portal: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm family-portal context #78',
      'Capture outcome for family-portal task 78',
      'Log follow-up owner for family-portal-78',
    ],
    dependsOn: ['family-portal-task-077'],
  },
  {
    id: 'family-portal-task-079',
    title: 'Align meal / care constraints (FamilyPortal #79)',
    description: 'CareNest operational task for family-portal: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm family-portal context #79',
      'Capture outcome for family-portal task 79',
      'Log follow-up owner for family-portal-79',
    ],
    dependsOn: ['family-portal-task-078'],
  },
  {
    id: 'family-portal-task-080',
    title: 'Publish dashboard widgets (FamilyPortal #80)',
    description: 'CareNest operational task for family-portal: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm family-portal context #80',
      'Capture outcome for family-portal task 80',
      'Log follow-up owner for family-portal-80',
    ],
    dependsOn: ['family-portal-task-079'],
  },
];

export function listOpenFamilyPortalTasks(): FamilyPortalTask[] {
  return familyPortalTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countFamilyPortalTasksByState(): Record<FamilyPortalTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of familyPortalTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateFamilyPortalWorkload1(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateFamilyPortalWorkload2(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateFamilyPortalWorkload3(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateFamilyPortalWorkload4(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateFamilyPortalWorkload5(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateFamilyPortalWorkload6(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateFamilyPortalWorkload7(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateFamilyPortalWorkload8(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateFamilyPortalWorkload9(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateFamilyPortalWorkload10(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateFamilyPortalWorkload11(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateFamilyPortalWorkload12(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateFamilyPortalWorkload13(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateFamilyPortalWorkload14(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateFamilyPortalWorkload15(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateFamilyPortalWorkload16(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateFamilyPortalWorkload17(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateFamilyPortalWorkload18(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateFamilyPortalWorkload19(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateFamilyPortalWorkload20(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateFamilyPortalWorkload21(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateFamilyPortalWorkload22(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateFamilyPortalWorkload23(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateFamilyPortalWorkload24(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateFamilyPortalWorkload25(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateFamilyPortalWorkload26(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateFamilyPortalWorkload27(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateFamilyPortalWorkload28(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateFamilyPortalWorkload29(tasks: FamilyPortalTask[] = familyPortalTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
