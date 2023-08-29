/** Operational task catalog for Admin */

export type AdminTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface AdminTask {
  id: string;
  title: string;
  description: string;
  state: AdminTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const adminTaskCatalog: AdminTask[] = [
  {
    id: 'admin-task-001',
    title: 'Review overnight notes (Admin #1)',
    description: 'CareNest operational task for admin: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm admin context #1',
      'Capture outcome for admin task 1',
      'Log follow-up owner for admin-1',
    ],
    dependsOn: [],
  },
  {
    id: 'admin-task-002',
    title: 'Reconcile open items (Admin #2)',
    description: 'CareNest operational task for admin: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm admin context #2',
      'Capture outcome for admin task 2',
      'Log follow-up owner for admin-2',
    ],
    dependsOn: ['admin-task-001'],
  },
  {
    id: 'admin-task-003',
    title: 'Escalate overdue cases (Admin #3)',
    description: 'CareNest operational task for admin: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm admin context #3',
      'Capture outcome for admin task 3',
      'Log follow-up owner for admin-3',
    ],
    dependsOn: ['admin-task-002'],
  },
  {
    id: 'admin-task-004',
    title: 'Prepare family update (Admin #4)',
    description: 'CareNest operational task for admin: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm admin context #4',
      'Capture outcome for admin task 4',
      'Log follow-up owner for admin-4',
    ],
    dependsOn: ['admin-task-003'],
  },
  {
    id: 'admin-task-005',
    title: 'Audit documentation completeness (Admin #5)',
    description: 'CareNest operational task for admin: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm admin context #5',
      'Capture outcome for admin task 5',
      'Log follow-up owner for admin-5',
    ],
    dependsOn: ['admin-task-004'],
  },
  {
    id: 'admin-task-006',
    title: 'Sync with pharmacy / vendor (Admin #6)',
    description: 'CareNest operational task for admin: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm admin context #6',
      'Capture outcome for admin task 6',
      'Log follow-up owner for admin-6',
    ],
    dependsOn: ['admin-task-005'],
  },
  {
    id: 'admin-task-007',
    title: 'Validate schedule conflicts (Admin #7)',
    description: 'CareNest operational task for admin: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm admin context #7',
      'Capture outcome for admin task 7',
      'Log follow-up owner for admin-7',
    ],
    dependsOn: ['admin-task-006'],
  },
  {
    id: 'admin-task-008',
    title: 'Close completed workflows (Admin #8)',
    description: 'CareNest operational task for admin: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm admin context #8',
      'Capture outcome for admin task 8',
      'Log follow-up owner for admin-8',
    ],
    dependsOn: ['admin-task-007'],
  },
  {
    id: 'admin-task-009',
    title: 'Generate shift handoff summary (Admin #9)',
    description: 'CareNest operational task for admin: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm admin context #9',
      'Capture outcome for admin task 9',
      'Log follow-up owner for admin-9',
    ],
    dependsOn: ['admin-task-008'],
  },
  {
    id: 'admin-task-010',
    title: 'Confirm consent / privacy flags (Admin #10)',
    description: 'CareNest operational task for admin: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm admin context #10',
      'Capture outcome for admin task 10',
      'Log follow-up owner for admin-10',
    ],
    dependsOn: ['admin-task-009'],
  },
  {
    id: 'admin-task-011',
    title: 'Run compliance checklist (Admin #11)',
    description: 'CareNest operational task for admin: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm admin context #11',
      'Capture outcome for admin task 11',
      'Log follow-up owner for admin-11',
    ],
    dependsOn: ['admin-task-010'],
  },
  {
    id: 'admin-task-012',
    title: 'Update risk scores (Admin #12)',
    description: 'CareNest operational task for admin: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm admin context #12',
      'Capture outcome for admin task 12',
      'Log follow-up owner for admin-12',
    ],
    dependsOn: ['admin-task-011'],
  },
  {
    id: 'admin-task-013',
    title: 'Notify on-call clinician (Admin #13)',
    description: 'CareNest operational task for admin: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm admin context #13',
      'Capture outcome for admin task 13',
      'Log follow-up owner for admin-13',
    ],
    dependsOn: ['admin-task-012'],
  },
  {
    id: 'admin-task-014',
    title: 'Archive stale drafts (Admin #14)',
    description: 'CareNest operational task for admin: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm admin context #14',
      'Capture outcome for admin task 14',
      'Log follow-up owner for admin-14',
    ],
    dependsOn: ['admin-task-013'],
  },
  {
    id: 'admin-task-015',
    title: 'Export weekly digest (Admin #15)',
    description: 'CareNest operational task for admin: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm admin context #15',
      'Capture outcome for admin task 15',
      'Log follow-up owner for admin-15',
    ],
    dependsOn: ['admin-task-014'],
  },
  {
    id: 'admin-task-016',
    title: 'Train new caregiver on module (Admin #16)',
    description: 'CareNest operational task for admin: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm admin context #16',
      'Capture outcome for admin task 16',
      'Log follow-up owner for admin-16',
    ],
    dependsOn: ['admin-task-015'],
  },
  {
    id: 'admin-task-017',
    title: 'Verify device integrations (Admin #17)',
    description: 'CareNest operational task for admin: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm admin context #17',
      'Capture outcome for admin task 17',
      'Log follow-up owner for admin-17',
    ],
    dependsOn: ['admin-task-016'],
  },
  {
    id: 'admin-task-018',
    title: 'Spot-check critical priorities (Admin #18)',
    description: 'CareNest operational task for admin: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm admin context #18',
      'Capture outcome for admin task 18',
      'Log follow-up owner for admin-18',
    ],
    dependsOn: ['admin-task-017'],
  },
  {
    id: 'admin-task-019',
    title: 'Align meal / care constraints (Admin #19)',
    description: 'CareNest operational task for admin: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm admin context #19',
      'Capture outcome for admin task 19',
      'Log follow-up owner for admin-19',
    ],
    dependsOn: ['admin-task-018'],
  },
  {
    id: 'admin-task-020',
    title: 'Publish dashboard widgets (Admin #20)',
    description: 'CareNest operational task for admin: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm admin context #20',
      'Capture outcome for admin task 20',
      'Log follow-up owner for admin-20',
    ],
    dependsOn: ['admin-task-019'],
  },
  {
    id: 'admin-task-021',
    title: 'Review overnight notes (Admin #21)',
    description: 'CareNest operational task for admin: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm admin context #21',
      'Capture outcome for admin task 21',
      'Log follow-up owner for admin-21',
    ],
    dependsOn: ['admin-task-020'],
  },
  {
    id: 'admin-task-022',
    title: 'Reconcile open items (Admin #22)',
    description: 'CareNest operational task for admin: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm admin context #22',
      'Capture outcome for admin task 22',
      'Log follow-up owner for admin-22',
    ],
    dependsOn: ['admin-task-021'],
  },
  {
    id: 'admin-task-023',
    title: 'Escalate overdue cases (Admin #23)',
    description: 'CareNest operational task for admin: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm admin context #23',
      'Capture outcome for admin task 23',
      'Log follow-up owner for admin-23',
    ],
    dependsOn: ['admin-task-022'],
  },
  {
    id: 'admin-task-024',
    title: 'Prepare family update (Admin #24)',
    description: 'CareNest operational task for admin: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm admin context #24',
      'Capture outcome for admin task 24',
      'Log follow-up owner for admin-24',
    ],
    dependsOn: ['admin-task-023'],
  },
  {
    id: 'admin-task-025',
    title: 'Audit documentation completeness (Admin #25)',
    description: 'CareNest operational task for admin: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm admin context #25',
      'Capture outcome for admin task 25',
      'Log follow-up owner for admin-25',
    ],
    dependsOn: ['admin-task-024'],
  },
  {
    id: 'admin-task-026',
    title: 'Sync with pharmacy / vendor (Admin #26)',
    description: 'CareNest operational task for admin: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm admin context #26',
      'Capture outcome for admin task 26',
      'Log follow-up owner for admin-26',
    ],
    dependsOn: ['admin-task-025'],
  },
  {
    id: 'admin-task-027',
    title: 'Validate schedule conflicts (Admin #27)',
    description: 'CareNest operational task for admin: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm admin context #27',
      'Capture outcome for admin task 27',
      'Log follow-up owner for admin-27',
    ],
    dependsOn: ['admin-task-026'],
  },
  {
    id: 'admin-task-028',
    title: 'Close completed workflows (Admin #28)',
    description: 'CareNest operational task for admin: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm admin context #28',
      'Capture outcome for admin task 28',
      'Log follow-up owner for admin-28',
    ],
    dependsOn: ['admin-task-027'],
  },
  {
    id: 'admin-task-029',
    title: 'Generate shift handoff summary (Admin #29)',
    description: 'CareNest operational task for admin: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm admin context #29',
      'Capture outcome for admin task 29',
      'Log follow-up owner for admin-29',
    ],
    dependsOn: ['admin-task-028'],
  },
  {
    id: 'admin-task-030',
    title: 'Confirm consent / privacy flags (Admin #30)',
    description: 'CareNest operational task for admin: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm admin context #30',
      'Capture outcome for admin task 30',
      'Log follow-up owner for admin-30',
    ],
    dependsOn: ['admin-task-029'],
  },
  {
    id: 'admin-task-031',
    title: 'Run compliance checklist (Admin #31)',
    description: 'CareNest operational task for admin: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm admin context #31',
      'Capture outcome for admin task 31',
      'Log follow-up owner for admin-31',
    ],
    dependsOn: ['admin-task-030'],
  },
  {
    id: 'admin-task-032',
    title: 'Update risk scores (Admin #32)',
    description: 'CareNest operational task for admin: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm admin context #32',
      'Capture outcome for admin task 32',
      'Log follow-up owner for admin-32',
    ],
    dependsOn: ['admin-task-031'],
  },
  {
    id: 'admin-task-033',
    title: 'Notify on-call clinician (Admin #33)',
    description: 'CareNest operational task for admin: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm admin context #33',
      'Capture outcome for admin task 33',
      'Log follow-up owner for admin-33',
    ],
    dependsOn: ['admin-task-032'],
  },
  {
    id: 'admin-task-034',
    title: 'Archive stale drafts (Admin #34)',
    description: 'CareNest operational task for admin: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm admin context #34',
      'Capture outcome for admin task 34',
      'Log follow-up owner for admin-34',
    ],
    dependsOn: ['admin-task-033'],
  },
  {
    id: 'admin-task-035',
    title: 'Export weekly digest (Admin #35)',
    description: 'CareNest operational task for admin: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm admin context #35',
      'Capture outcome for admin task 35',
      'Log follow-up owner for admin-35',
    ],
    dependsOn: ['admin-task-034'],
  },
  {
    id: 'admin-task-036',
    title: 'Train new caregiver on module (Admin #36)',
    description: 'CareNest operational task for admin: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm admin context #36',
      'Capture outcome for admin task 36',
      'Log follow-up owner for admin-36',
    ],
    dependsOn: ['admin-task-035'],
  },
  {
    id: 'admin-task-037',
    title: 'Verify device integrations (Admin #37)',
    description: 'CareNest operational task for admin: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm admin context #37',
      'Capture outcome for admin task 37',
      'Log follow-up owner for admin-37',
    ],
    dependsOn: ['admin-task-036'],
  },
  {
    id: 'admin-task-038',
    title: 'Spot-check critical priorities (Admin #38)',
    description: 'CareNest operational task for admin: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm admin context #38',
      'Capture outcome for admin task 38',
      'Log follow-up owner for admin-38',
    ],
    dependsOn: ['admin-task-037'],
  },
  {
    id: 'admin-task-039',
    title: 'Align meal / care constraints (Admin #39)',
    description: 'CareNest operational task for admin: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm admin context #39',
      'Capture outcome for admin task 39',
      'Log follow-up owner for admin-39',
    ],
    dependsOn: ['admin-task-038'],
  },
  {
    id: 'admin-task-040',
    title: 'Publish dashboard widgets (Admin #40)',
    description: 'CareNest operational task for admin: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm admin context #40',
      'Capture outcome for admin task 40',
      'Log follow-up owner for admin-40',
    ],
    dependsOn: ['admin-task-039'],
  },
  {
    id: 'admin-task-041',
    title: 'Review overnight notes (Admin #41)',
    description: 'CareNest operational task for admin: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm admin context #41',
      'Capture outcome for admin task 41',
      'Log follow-up owner for admin-41',
    ],
    dependsOn: ['admin-task-040'],
  },
  {
    id: 'admin-task-042',
    title: 'Reconcile open items (Admin #42)',
    description: 'CareNest operational task for admin: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm admin context #42',
      'Capture outcome for admin task 42',
      'Log follow-up owner for admin-42',
    ],
    dependsOn: ['admin-task-041'],
  },
  {
    id: 'admin-task-043',
    title: 'Escalate overdue cases (Admin #43)',
    description: 'CareNest operational task for admin: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm admin context #43',
      'Capture outcome for admin task 43',
      'Log follow-up owner for admin-43',
    ],
    dependsOn: ['admin-task-042'],
  },
  {
    id: 'admin-task-044',
    title: 'Prepare family update (Admin #44)',
    description: 'CareNest operational task for admin: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm admin context #44',
      'Capture outcome for admin task 44',
      'Log follow-up owner for admin-44',
    ],
    dependsOn: ['admin-task-043'],
  },
  {
    id: 'admin-task-045',
    title: 'Audit documentation completeness (Admin #45)',
    description: 'CareNest operational task for admin: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm admin context #45',
      'Capture outcome for admin task 45',
      'Log follow-up owner for admin-45',
    ],
    dependsOn: ['admin-task-044'],
  },
  {
    id: 'admin-task-046',
    title: 'Sync with pharmacy / vendor (Admin #46)',
    description: 'CareNest operational task for admin: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm admin context #46',
      'Capture outcome for admin task 46',
      'Log follow-up owner for admin-46',
    ],
    dependsOn: ['admin-task-045'],
  },
  {
    id: 'admin-task-047',
    title: 'Validate schedule conflicts (Admin #47)',
    description: 'CareNest operational task for admin: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm admin context #47',
      'Capture outcome for admin task 47',
      'Log follow-up owner for admin-47',
    ],
    dependsOn: ['admin-task-046'],
  },
  {
    id: 'admin-task-048',
    title: 'Close completed workflows (Admin #48)',
    description: 'CareNest operational task for admin: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm admin context #48',
      'Capture outcome for admin task 48',
      'Log follow-up owner for admin-48',
    ],
    dependsOn: ['admin-task-047'],
  },
  {
    id: 'admin-task-049',
    title: 'Generate shift handoff summary (Admin #49)',
    description: 'CareNest operational task for admin: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm admin context #49',
      'Capture outcome for admin task 49',
      'Log follow-up owner for admin-49',
    ],
    dependsOn: ['admin-task-048'],
  },
  {
    id: 'admin-task-050',
    title: 'Confirm consent / privacy flags (Admin #50)',
    description: 'CareNest operational task for admin: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm admin context #50',
      'Capture outcome for admin task 50',
      'Log follow-up owner for admin-50',
    ],
    dependsOn: ['admin-task-049'],
  },
  {
    id: 'admin-task-051',
    title: 'Run compliance checklist (Admin #51)',
    description: 'CareNest operational task for admin: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm admin context #51',
      'Capture outcome for admin task 51',
      'Log follow-up owner for admin-51',
    ],
    dependsOn: ['admin-task-050'],
  },
  {
    id: 'admin-task-052',
    title: 'Update risk scores (Admin #52)',
    description: 'CareNest operational task for admin: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm admin context #52',
      'Capture outcome for admin task 52',
      'Log follow-up owner for admin-52',
    ],
    dependsOn: ['admin-task-051'],
  },
  {
    id: 'admin-task-053',
    title: 'Notify on-call clinician (Admin #53)',
    description: 'CareNest operational task for admin: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm admin context #53',
      'Capture outcome for admin task 53',
      'Log follow-up owner for admin-53',
    ],
    dependsOn: ['admin-task-052'],
  },
  {
    id: 'admin-task-054',
    title: 'Archive stale drafts (Admin #54)',
    description: 'CareNest operational task for admin: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm admin context #54',
      'Capture outcome for admin task 54',
      'Log follow-up owner for admin-54',
    ],
    dependsOn: ['admin-task-053'],
  },
  {
    id: 'admin-task-055',
    title: 'Export weekly digest (Admin #55)',
    description: 'CareNest operational task for admin: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm admin context #55',
      'Capture outcome for admin task 55',
      'Log follow-up owner for admin-55',
    ],
    dependsOn: ['admin-task-054'],
  },
  {
    id: 'admin-task-056',
    title: 'Train new caregiver on module (Admin #56)',
    description: 'CareNest operational task for admin: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm admin context #56',
      'Capture outcome for admin task 56',
      'Log follow-up owner for admin-56',
    ],
    dependsOn: ['admin-task-055'],
  },
  {
    id: 'admin-task-057',
    title: 'Verify device integrations (Admin #57)',
    description: 'CareNest operational task for admin: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm admin context #57',
      'Capture outcome for admin task 57',
      'Log follow-up owner for admin-57',
    ],
    dependsOn: ['admin-task-056'],
  },
  {
    id: 'admin-task-058',
    title: 'Spot-check critical priorities (Admin #58)',
    description: 'CareNest operational task for admin: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm admin context #58',
      'Capture outcome for admin task 58',
      'Log follow-up owner for admin-58',
    ],
    dependsOn: ['admin-task-057'],
  },
  {
    id: 'admin-task-059',
    title: 'Align meal / care constraints (Admin #59)',
    description: 'CareNest operational task for admin: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm admin context #59',
      'Capture outcome for admin task 59',
      'Log follow-up owner for admin-59',
    ],
    dependsOn: ['admin-task-058'],
  },
  {
    id: 'admin-task-060',
    title: 'Publish dashboard widgets (Admin #60)',
    description: 'CareNest operational task for admin: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm admin context #60',
      'Capture outcome for admin task 60',
      'Log follow-up owner for admin-60',
    ],
    dependsOn: ['admin-task-059'],
  },
  {
    id: 'admin-task-061',
    title: 'Review overnight notes (Admin #61)',
    description: 'CareNest operational task for admin: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm admin context #61',
      'Capture outcome for admin task 61',
      'Log follow-up owner for admin-61',
    ],
    dependsOn: ['admin-task-060'],
  },
  {
    id: 'admin-task-062',
    title: 'Reconcile open items (Admin #62)',
    description: 'CareNest operational task for admin: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm admin context #62',
      'Capture outcome for admin task 62',
      'Log follow-up owner for admin-62',
    ],
    dependsOn: ['admin-task-061'],
  },
  {
    id: 'admin-task-063',
    title: 'Escalate overdue cases (Admin #63)',
    description: 'CareNest operational task for admin: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm admin context #63',
      'Capture outcome for admin task 63',
      'Log follow-up owner for admin-63',
    ],
    dependsOn: ['admin-task-062'],
  },
  {
    id: 'admin-task-064',
    title: 'Prepare family update (Admin #64)',
    description: 'CareNest operational task for admin: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm admin context #64',
      'Capture outcome for admin task 64',
      'Log follow-up owner for admin-64',
    ],
    dependsOn: ['admin-task-063'],
  },
  {
    id: 'admin-task-065',
    title: 'Audit documentation completeness (Admin #65)',
    description: 'CareNest operational task for admin: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm admin context #65',
      'Capture outcome for admin task 65',
      'Log follow-up owner for admin-65',
    ],
    dependsOn: ['admin-task-064'],
  },
  {
    id: 'admin-task-066',
    title: 'Sync with pharmacy / vendor (Admin #66)',
    description: 'CareNest operational task for admin: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm admin context #66',
      'Capture outcome for admin task 66',
      'Log follow-up owner for admin-66',
    ],
    dependsOn: ['admin-task-065'],
  },
  {
    id: 'admin-task-067',
    title: 'Validate schedule conflicts (Admin #67)',
    description: 'CareNest operational task for admin: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm admin context #67',
      'Capture outcome for admin task 67',
      'Log follow-up owner for admin-67',
    ],
    dependsOn: ['admin-task-066'],
  },
  {
    id: 'admin-task-068',
    title: 'Close completed workflows (Admin #68)',
    description: 'CareNest operational task for admin: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm admin context #68',
      'Capture outcome for admin task 68',
      'Log follow-up owner for admin-68',
    ],
    dependsOn: ['admin-task-067'],
  },
  {
    id: 'admin-task-069',
    title: 'Generate shift handoff summary (Admin #69)',
    description: 'CareNest operational task for admin: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm admin context #69',
      'Capture outcome for admin task 69',
      'Log follow-up owner for admin-69',
    ],
    dependsOn: ['admin-task-068'],
  },
  {
    id: 'admin-task-070',
    title: 'Confirm consent / privacy flags (Admin #70)',
    description: 'CareNest operational task for admin: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm admin context #70',
      'Capture outcome for admin task 70',
      'Log follow-up owner for admin-70',
    ],
    dependsOn: ['admin-task-069'],
  },
  {
    id: 'admin-task-071',
    title: 'Run compliance checklist (Admin #71)',
    description: 'CareNest operational task for admin: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm admin context #71',
      'Capture outcome for admin task 71',
      'Log follow-up owner for admin-71',
    ],
    dependsOn: ['admin-task-070'],
  },
  {
    id: 'admin-task-072',
    title: 'Update risk scores (Admin #72)',
    description: 'CareNest operational task for admin: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm admin context #72',
      'Capture outcome for admin task 72',
      'Log follow-up owner for admin-72',
    ],
    dependsOn: ['admin-task-071'],
  },
  {
    id: 'admin-task-073',
    title: 'Notify on-call clinician (Admin #73)',
    description: 'CareNest operational task for admin: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm admin context #73',
      'Capture outcome for admin task 73',
      'Log follow-up owner for admin-73',
    ],
    dependsOn: ['admin-task-072'],
  },
  {
    id: 'admin-task-074',
    title: 'Archive stale drafts (Admin #74)',
    description: 'CareNest operational task for admin: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm admin context #74',
      'Capture outcome for admin task 74',
      'Log follow-up owner for admin-74',
    ],
    dependsOn: ['admin-task-073'],
  },
  {
    id: 'admin-task-075',
    title: 'Export weekly digest (Admin #75)',
    description: 'CareNest operational task for admin: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm admin context #75',
      'Capture outcome for admin task 75',
      'Log follow-up owner for admin-75',
    ],
    dependsOn: ['admin-task-074'],
  },
  {
    id: 'admin-task-076',
    title: 'Train new caregiver on module (Admin #76)',
    description: 'CareNest operational task for admin: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm admin context #76',
      'Capture outcome for admin task 76',
      'Log follow-up owner for admin-76',
    ],
    dependsOn: ['admin-task-075'],
  },
  {
    id: 'admin-task-077',
    title: 'Verify device integrations (Admin #77)',
    description: 'CareNest operational task for admin: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm admin context #77',
      'Capture outcome for admin task 77',
      'Log follow-up owner for admin-77',
    ],
    dependsOn: ['admin-task-076'],
  },
  {
    id: 'admin-task-078',
    title: 'Spot-check critical priorities (Admin #78)',
    description: 'CareNest operational task for admin: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm admin context #78',
      'Capture outcome for admin task 78',
      'Log follow-up owner for admin-78',
    ],
    dependsOn: ['admin-task-077'],
  },
  {
    id: 'admin-task-079',
    title: 'Align meal / care constraints (Admin #79)',
    description: 'CareNest operational task for admin: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm admin context #79',
      'Capture outcome for admin task 79',
      'Log follow-up owner for admin-79',
    ],
    dependsOn: ['admin-task-078'],
  },
  {
    id: 'admin-task-080',
    title: 'Publish dashboard widgets (Admin #80)',
    description: 'CareNest operational task for admin: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm admin context #80',
      'Capture outcome for admin task 80',
      'Log follow-up owner for admin-80',
    ],
    dependsOn: ['admin-task-079'],
  },
];

export function listOpenAdminTasks(): AdminTask[] {
  return adminTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countAdminTasksByState(): Record<AdminTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of adminTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateAdminWorkload1(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateAdminWorkload2(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateAdminWorkload3(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateAdminWorkload4(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateAdminWorkload5(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateAdminWorkload6(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateAdminWorkload7(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateAdminWorkload8(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateAdminWorkload9(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateAdminWorkload10(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateAdminWorkload11(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateAdminWorkload12(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateAdminWorkload13(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateAdminWorkload14(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateAdminWorkload15(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateAdminWorkload16(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateAdminWorkload17(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateAdminWorkload18(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateAdminWorkload19(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateAdminWorkload20(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateAdminWorkload21(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateAdminWorkload22(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateAdminWorkload23(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateAdminWorkload24(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateAdminWorkload25(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateAdminWorkload26(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateAdminWorkload27(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateAdminWorkload28(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateAdminWorkload29(tasks: AdminTask[] = adminTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
