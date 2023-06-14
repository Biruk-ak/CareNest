/** Operational task catalog for Dashboard */

export type DashboardTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface DashboardTask {
  id: string;
  title: string;
  description: string;
  state: DashboardTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const dashboardTaskCatalog: DashboardTask[] = [
  {
    id: 'dashboard-task-001',
    title: 'Review overnight notes (Dashboard #1)',
    description: 'CareNest operational task for dashboard: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm dashboard context #1',
      'Capture outcome for dashboard task 1',
      'Log follow-up owner for dashboard-1',
    ],
    dependsOn: [],
  },
  {
    id: 'dashboard-task-002',
    title: 'Reconcile open items (Dashboard #2)',
    description: 'CareNest operational task for dashboard: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm dashboard context #2',
      'Capture outcome for dashboard task 2',
      'Log follow-up owner for dashboard-2',
    ],
    dependsOn: ['dashboard-task-001'],
  },
  {
    id: 'dashboard-task-003',
    title: 'Escalate overdue cases (Dashboard #3)',
    description: 'CareNest operational task for dashboard: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm dashboard context #3',
      'Capture outcome for dashboard task 3',
      'Log follow-up owner for dashboard-3',
    ],
    dependsOn: ['dashboard-task-002'],
  },
  {
    id: 'dashboard-task-004',
    title: 'Prepare family update (Dashboard #4)',
    description: 'CareNest operational task for dashboard: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm dashboard context #4',
      'Capture outcome for dashboard task 4',
      'Log follow-up owner for dashboard-4',
    ],
    dependsOn: ['dashboard-task-003'],
  },
  {
    id: 'dashboard-task-005',
    title: 'Audit documentation completeness (Dashboard #5)',
    description: 'CareNest operational task for dashboard: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm dashboard context #5',
      'Capture outcome for dashboard task 5',
      'Log follow-up owner for dashboard-5',
    ],
    dependsOn: ['dashboard-task-004'],
  },
  {
    id: 'dashboard-task-006',
    title: 'Sync with pharmacy / vendor (Dashboard #6)',
    description: 'CareNest operational task for dashboard: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm dashboard context #6',
      'Capture outcome for dashboard task 6',
      'Log follow-up owner for dashboard-6',
    ],
    dependsOn: ['dashboard-task-005'],
  },
  {
    id: 'dashboard-task-007',
    title: 'Validate schedule conflicts (Dashboard #7)',
    description: 'CareNest operational task for dashboard: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm dashboard context #7',
      'Capture outcome for dashboard task 7',
      'Log follow-up owner for dashboard-7',
    ],
    dependsOn: ['dashboard-task-006'],
  },
  {
    id: 'dashboard-task-008',
    title: 'Close completed workflows (Dashboard #8)',
    description: 'CareNest operational task for dashboard: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm dashboard context #8',
      'Capture outcome for dashboard task 8',
      'Log follow-up owner for dashboard-8',
    ],
    dependsOn: ['dashboard-task-007'],
  },
  {
    id: 'dashboard-task-009',
    title: 'Generate shift handoff summary (Dashboard #9)',
    description: 'CareNest operational task for dashboard: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm dashboard context #9',
      'Capture outcome for dashboard task 9',
      'Log follow-up owner for dashboard-9',
    ],
    dependsOn: ['dashboard-task-008'],
  },
  {
    id: 'dashboard-task-010',
    title: 'Confirm consent / privacy flags (Dashboard #10)',
    description: 'CareNest operational task for dashboard: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm dashboard context #10',
      'Capture outcome for dashboard task 10',
      'Log follow-up owner for dashboard-10',
    ],
    dependsOn: ['dashboard-task-009'],
  },
  {
    id: 'dashboard-task-011',
    title: 'Run compliance checklist (Dashboard #11)',
    description: 'CareNest operational task for dashboard: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm dashboard context #11',
      'Capture outcome for dashboard task 11',
      'Log follow-up owner for dashboard-11',
    ],
    dependsOn: ['dashboard-task-010'],
  },
  {
    id: 'dashboard-task-012',
    title: 'Update risk scores (Dashboard #12)',
    description: 'CareNest operational task for dashboard: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm dashboard context #12',
      'Capture outcome for dashboard task 12',
      'Log follow-up owner for dashboard-12',
    ],
    dependsOn: ['dashboard-task-011'],
  },
  {
    id: 'dashboard-task-013',
    title: 'Notify on-call clinician (Dashboard #13)',
    description: 'CareNest operational task for dashboard: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm dashboard context #13',
      'Capture outcome for dashboard task 13',
      'Log follow-up owner for dashboard-13',
    ],
    dependsOn: ['dashboard-task-012'],
  },
  {
    id: 'dashboard-task-014',
    title: 'Archive stale drafts (Dashboard #14)',
    description: 'CareNest operational task for dashboard: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm dashboard context #14',
      'Capture outcome for dashboard task 14',
      'Log follow-up owner for dashboard-14',
    ],
    dependsOn: ['dashboard-task-013'],
  },
  {
    id: 'dashboard-task-015',
    title: 'Export weekly digest (Dashboard #15)',
    description: 'CareNest operational task for dashboard: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm dashboard context #15',
      'Capture outcome for dashboard task 15',
      'Log follow-up owner for dashboard-15',
    ],
    dependsOn: ['dashboard-task-014'],
  },
  {
    id: 'dashboard-task-016',
    title: 'Train new caregiver on module (Dashboard #16)',
    description: 'CareNest operational task for dashboard: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm dashboard context #16',
      'Capture outcome for dashboard task 16',
      'Log follow-up owner for dashboard-16',
    ],
    dependsOn: ['dashboard-task-015'],
  },
  {
    id: 'dashboard-task-017',
    title: 'Verify device integrations (Dashboard #17)',
    description: 'CareNest operational task for dashboard: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm dashboard context #17',
      'Capture outcome for dashboard task 17',
      'Log follow-up owner for dashboard-17',
    ],
    dependsOn: ['dashboard-task-016'],
  },
  {
    id: 'dashboard-task-018',
    title: 'Spot-check critical priorities (Dashboard #18)',
    description: 'CareNest operational task for dashboard: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm dashboard context #18',
      'Capture outcome for dashboard task 18',
      'Log follow-up owner for dashboard-18',
    ],
    dependsOn: ['dashboard-task-017'],
  },
  {
    id: 'dashboard-task-019',
    title: 'Align meal / care constraints (Dashboard #19)',
    description: 'CareNest operational task for dashboard: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm dashboard context #19',
      'Capture outcome for dashboard task 19',
      'Log follow-up owner for dashboard-19',
    ],
    dependsOn: ['dashboard-task-018'],
  },
  {
    id: 'dashboard-task-020',
    title: 'Publish dashboard widgets (Dashboard #20)',
    description: 'CareNest operational task for dashboard: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm dashboard context #20',
      'Capture outcome for dashboard task 20',
      'Log follow-up owner for dashboard-20',
    ],
    dependsOn: ['dashboard-task-019'],
  },
  {
    id: 'dashboard-task-021',
    title: 'Review overnight notes (Dashboard #21)',
    description: 'CareNest operational task for dashboard: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm dashboard context #21',
      'Capture outcome for dashboard task 21',
      'Log follow-up owner for dashboard-21',
    ],
    dependsOn: ['dashboard-task-020'],
  },
  {
    id: 'dashboard-task-022',
    title: 'Reconcile open items (Dashboard #22)',
    description: 'CareNest operational task for dashboard: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm dashboard context #22',
      'Capture outcome for dashboard task 22',
      'Log follow-up owner for dashboard-22',
    ],
    dependsOn: ['dashboard-task-021'],
  },
  {
    id: 'dashboard-task-023',
    title: 'Escalate overdue cases (Dashboard #23)',
    description: 'CareNest operational task for dashboard: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm dashboard context #23',
      'Capture outcome for dashboard task 23',
      'Log follow-up owner for dashboard-23',
    ],
    dependsOn: ['dashboard-task-022'],
  },
  {
    id: 'dashboard-task-024',
    title: 'Prepare family update (Dashboard #24)',
    description: 'CareNest operational task for dashboard: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm dashboard context #24',
      'Capture outcome for dashboard task 24',
      'Log follow-up owner for dashboard-24',
    ],
    dependsOn: ['dashboard-task-023'],
  },
  {
    id: 'dashboard-task-025',
    title: 'Audit documentation completeness (Dashboard #25)',
    description: 'CareNest operational task for dashboard: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm dashboard context #25',
      'Capture outcome for dashboard task 25',
      'Log follow-up owner for dashboard-25',
    ],
    dependsOn: ['dashboard-task-024'],
  },
  {
    id: 'dashboard-task-026',
    title: 'Sync with pharmacy / vendor (Dashboard #26)',
    description: 'CareNest operational task for dashboard: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm dashboard context #26',
      'Capture outcome for dashboard task 26',
      'Log follow-up owner for dashboard-26',
    ],
    dependsOn: ['dashboard-task-025'],
  },
  {
    id: 'dashboard-task-027',
    title: 'Validate schedule conflicts (Dashboard #27)',
    description: 'CareNest operational task for dashboard: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm dashboard context #27',
      'Capture outcome for dashboard task 27',
      'Log follow-up owner for dashboard-27',
    ],
    dependsOn: ['dashboard-task-026'],
  },
  {
    id: 'dashboard-task-028',
    title: 'Close completed workflows (Dashboard #28)',
    description: 'CareNest operational task for dashboard: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm dashboard context #28',
      'Capture outcome for dashboard task 28',
      'Log follow-up owner for dashboard-28',
    ],
    dependsOn: ['dashboard-task-027'],
  },
  {
    id: 'dashboard-task-029',
    title: 'Generate shift handoff summary (Dashboard #29)',
    description: 'CareNest operational task for dashboard: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm dashboard context #29',
      'Capture outcome for dashboard task 29',
      'Log follow-up owner for dashboard-29',
    ],
    dependsOn: ['dashboard-task-028'],
  },
  {
    id: 'dashboard-task-030',
    title: 'Confirm consent / privacy flags (Dashboard #30)',
    description: 'CareNest operational task for dashboard: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm dashboard context #30',
      'Capture outcome for dashboard task 30',
      'Log follow-up owner for dashboard-30',
    ],
    dependsOn: ['dashboard-task-029'],
  },
  {
    id: 'dashboard-task-031',
    title: 'Run compliance checklist (Dashboard #31)',
    description: 'CareNest operational task for dashboard: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm dashboard context #31',
      'Capture outcome for dashboard task 31',
      'Log follow-up owner for dashboard-31',
    ],
    dependsOn: ['dashboard-task-030'],
  },
  {
    id: 'dashboard-task-032',
    title: 'Update risk scores (Dashboard #32)',
    description: 'CareNest operational task for dashboard: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm dashboard context #32',
      'Capture outcome for dashboard task 32',
      'Log follow-up owner for dashboard-32',
    ],
    dependsOn: ['dashboard-task-031'],
  },
  {
    id: 'dashboard-task-033',
    title: 'Notify on-call clinician (Dashboard #33)',
    description: 'CareNest operational task for dashboard: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm dashboard context #33',
      'Capture outcome for dashboard task 33',
      'Log follow-up owner for dashboard-33',
    ],
    dependsOn: ['dashboard-task-032'],
  },
  {
    id: 'dashboard-task-034',
    title: 'Archive stale drafts (Dashboard #34)',
    description: 'CareNest operational task for dashboard: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm dashboard context #34',
      'Capture outcome for dashboard task 34',
      'Log follow-up owner for dashboard-34',
    ],
    dependsOn: ['dashboard-task-033'],
  },
  {
    id: 'dashboard-task-035',
    title: 'Export weekly digest (Dashboard #35)',
    description: 'CareNest operational task for dashboard: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm dashboard context #35',
      'Capture outcome for dashboard task 35',
      'Log follow-up owner for dashboard-35',
    ],
    dependsOn: ['dashboard-task-034'],
  },
  {
    id: 'dashboard-task-036',
    title: 'Train new caregiver on module (Dashboard #36)',
    description: 'CareNest operational task for dashboard: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm dashboard context #36',
      'Capture outcome for dashboard task 36',
      'Log follow-up owner for dashboard-36',
    ],
    dependsOn: ['dashboard-task-035'],
  },
  {
    id: 'dashboard-task-037',
    title: 'Verify device integrations (Dashboard #37)',
    description: 'CareNest operational task for dashboard: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm dashboard context #37',
      'Capture outcome for dashboard task 37',
      'Log follow-up owner for dashboard-37',
    ],
    dependsOn: ['dashboard-task-036'],
  },
  {
    id: 'dashboard-task-038',
    title: 'Spot-check critical priorities (Dashboard #38)',
    description: 'CareNest operational task for dashboard: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm dashboard context #38',
      'Capture outcome for dashboard task 38',
      'Log follow-up owner for dashboard-38',
    ],
    dependsOn: ['dashboard-task-037'],
  },
  {
    id: 'dashboard-task-039',
    title: 'Align meal / care constraints (Dashboard #39)',
    description: 'CareNest operational task for dashboard: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm dashboard context #39',
      'Capture outcome for dashboard task 39',
      'Log follow-up owner for dashboard-39',
    ],
    dependsOn: ['dashboard-task-038'],
  },
  {
    id: 'dashboard-task-040',
    title: 'Publish dashboard widgets (Dashboard #40)',
    description: 'CareNest operational task for dashboard: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm dashboard context #40',
      'Capture outcome for dashboard task 40',
      'Log follow-up owner for dashboard-40',
    ],
    dependsOn: ['dashboard-task-039'],
  },
  {
    id: 'dashboard-task-041',
    title: 'Review overnight notes (Dashboard #41)',
    description: 'CareNest operational task for dashboard: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm dashboard context #41',
      'Capture outcome for dashboard task 41',
      'Log follow-up owner for dashboard-41',
    ],
    dependsOn: ['dashboard-task-040'],
  },
  {
    id: 'dashboard-task-042',
    title: 'Reconcile open items (Dashboard #42)',
    description: 'CareNest operational task for dashboard: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm dashboard context #42',
      'Capture outcome for dashboard task 42',
      'Log follow-up owner for dashboard-42',
    ],
    dependsOn: ['dashboard-task-041'],
  },
  {
    id: 'dashboard-task-043',
    title: 'Escalate overdue cases (Dashboard #43)',
    description: 'CareNest operational task for dashboard: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm dashboard context #43',
      'Capture outcome for dashboard task 43',
      'Log follow-up owner for dashboard-43',
    ],
    dependsOn: ['dashboard-task-042'],
  },
  {
    id: 'dashboard-task-044',
    title: 'Prepare family update (Dashboard #44)',
    description: 'CareNest operational task for dashboard: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm dashboard context #44',
      'Capture outcome for dashboard task 44',
      'Log follow-up owner for dashboard-44',
    ],
    dependsOn: ['dashboard-task-043'],
  },
  {
    id: 'dashboard-task-045',
    title: 'Audit documentation completeness (Dashboard #45)',
    description: 'CareNest operational task for dashboard: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm dashboard context #45',
      'Capture outcome for dashboard task 45',
      'Log follow-up owner for dashboard-45',
    ],
    dependsOn: ['dashboard-task-044'],
  },
  {
    id: 'dashboard-task-046',
    title: 'Sync with pharmacy / vendor (Dashboard #46)',
    description: 'CareNest operational task for dashboard: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm dashboard context #46',
      'Capture outcome for dashboard task 46',
      'Log follow-up owner for dashboard-46',
    ],
    dependsOn: ['dashboard-task-045'],
  },
  {
    id: 'dashboard-task-047',
    title: 'Validate schedule conflicts (Dashboard #47)',
    description: 'CareNest operational task for dashboard: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm dashboard context #47',
      'Capture outcome for dashboard task 47',
      'Log follow-up owner for dashboard-47',
    ],
    dependsOn: ['dashboard-task-046'],
  },
  {
    id: 'dashboard-task-048',
    title: 'Close completed workflows (Dashboard #48)',
    description: 'CareNest operational task for dashboard: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm dashboard context #48',
      'Capture outcome for dashboard task 48',
      'Log follow-up owner for dashboard-48',
    ],
    dependsOn: ['dashboard-task-047'],
  },
  {
    id: 'dashboard-task-049',
    title: 'Generate shift handoff summary (Dashboard #49)',
    description: 'CareNest operational task for dashboard: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm dashboard context #49',
      'Capture outcome for dashboard task 49',
      'Log follow-up owner for dashboard-49',
    ],
    dependsOn: ['dashboard-task-048'],
  },
  {
    id: 'dashboard-task-050',
    title: 'Confirm consent / privacy flags (Dashboard #50)',
    description: 'CareNest operational task for dashboard: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm dashboard context #50',
      'Capture outcome for dashboard task 50',
      'Log follow-up owner for dashboard-50',
    ],
    dependsOn: ['dashboard-task-049'],
  },
  {
    id: 'dashboard-task-051',
    title: 'Run compliance checklist (Dashboard #51)',
    description: 'CareNest operational task for dashboard: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm dashboard context #51',
      'Capture outcome for dashboard task 51',
      'Log follow-up owner for dashboard-51',
    ],
    dependsOn: ['dashboard-task-050'],
  },
  {
    id: 'dashboard-task-052',
    title: 'Update risk scores (Dashboard #52)',
    description: 'CareNest operational task for dashboard: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm dashboard context #52',
      'Capture outcome for dashboard task 52',
      'Log follow-up owner for dashboard-52',
    ],
    dependsOn: ['dashboard-task-051'],
  },
  {
    id: 'dashboard-task-053',
    title: 'Notify on-call clinician (Dashboard #53)',
    description: 'CareNest operational task for dashboard: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm dashboard context #53',
      'Capture outcome for dashboard task 53',
      'Log follow-up owner for dashboard-53',
    ],
    dependsOn: ['dashboard-task-052'],
  },
  {
    id: 'dashboard-task-054',
    title: 'Archive stale drafts (Dashboard #54)',
    description: 'CareNest operational task for dashboard: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm dashboard context #54',
      'Capture outcome for dashboard task 54',
      'Log follow-up owner for dashboard-54',
    ],
    dependsOn: ['dashboard-task-053'],
  },
  {
    id: 'dashboard-task-055',
    title: 'Export weekly digest (Dashboard #55)',
    description: 'CareNest operational task for dashboard: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm dashboard context #55',
      'Capture outcome for dashboard task 55',
      'Log follow-up owner for dashboard-55',
    ],
    dependsOn: ['dashboard-task-054'],
  },
  {
    id: 'dashboard-task-056',
    title: 'Train new caregiver on module (Dashboard #56)',
    description: 'CareNest operational task for dashboard: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm dashboard context #56',
      'Capture outcome for dashboard task 56',
      'Log follow-up owner for dashboard-56',
    ],
    dependsOn: ['dashboard-task-055'],
  },
  {
    id: 'dashboard-task-057',
    title: 'Verify device integrations (Dashboard #57)',
    description: 'CareNest operational task for dashboard: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm dashboard context #57',
      'Capture outcome for dashboard task 57',
      'Log follow-up owner for dashboard-57',
    ],
    dependsOn: ['dashboard-task-056'],
  },
  {
    id: 'dashboard-task-058',
    title: 'Spot-check critical priorities (Dashboard #58)',
    description: 'CareNest operational task for dashboard: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm dashboard context #58',
      'Capture outcome for dashboard task 58',
      'Log follow-up owner for dashboard-58',
    ],
    dependsOn: ['dashboard-task-057'],
  },
  {
    id: 'dashboard-task-059',
    title: 'Align meal / care constraints (Dashboard #59)',
    description: 'CareNest operational task for dashboard: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm dashboard context #59',
      'Capture outcome for dashboard task 59',
      'Log follow-up owner for dashboard-59',
    ],
    dependsOn: ['dashboard-task-058'],
  },
  {
    id: 'dashboard-task-060',
    title: 'Publish dashboard widgets (Dashboard #60)',
    description: 'CareNest operational task for dashboard: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm dashboard context #60',
      'Capture outcome for dashboard task 60',
      'Log follow-up owner for dashboard-60',
    ],
    dependsOn: ['dashboard-task-059'],
  },
  {
    id: 'dashboard-task-061',
    title: 'Review overnight notes (Dashboard #61)',
    description: 'CareNest operational task for dashboard: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm dashboard context #61',
      'Capture outcome for dashboard task 61',
      'Log follow-up owner for dashboard-61',
    ],
    dependsOn: ['dashboard-task-060'],
  },
  {
    id: 'dashboard-task-062',
    title: 'Reconcile open items (Dashboard #62)',
    description: 'CareNest operational task for dashboard: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm dashboard context #62',
      'Capture outcome for dashboard task 62',
      'Log follow-up owner for dashboard-62',
    ],
    dependsOn: ['dashboard-task-061'],
  },
  {
    id: 'dashboard-task-063',
    title: 'Escalate overdue cases (Dashboard #63)',
    description: 'CareNest operational task for dashboard: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm dashboard context #63',
      'Capture outcome for dashboard task 63',
      'Log follow-up owner for dashboard-63',
    ],
    dependsOn: ['dashboard-task-062'],
  },
  {
    id: 'dashboard-task-064',
    title: 'Prepare family update (Dashboard #64)',
    description: 'CareNest operational task for dashboard: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm dashboard context #64',
      'Capture outcome for dashboard task 64',
      'Log follow-up owner for dashboard-64',
    ],
    dependsOn: ['dashboard-task-063'],
  },
  {
    id: 'dashboard-task-065',
    title: 'Audit documentation completeness (Dashboard #65)',
    description: 'CareNest operational task for dashboard: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm dashboard context #65',
      'Capture outcome for dashboard task 65',
      'Log follow-up owner for dashboard-65',
    ],
    dependsOn: ['dashboard-task-064'],
  },
  {
    id: 'dashboard-task-066',
    title: 'Sync with pharmacy / vendor (Dashboard #66)',
    description: 'CareNest operational task for dashboard: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm dashboard context #66',
      'Capture outcome for dashboard task 66',
      'Log follow-up owner for dashboard-66',
    ],
    dependsOn: ['dashboard-task-065'],
  },
  {
    id: 'dashboard-task-067',
    title: 'Validate schedule conflicts (Dashboard #67)',
    description: 'CareNest operational task for dashboard: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm dashboard context #67',
      'Capture outcome for dashboard task 67',
      'Log follow-up owner for dashboard-67',
    ],
    dependsOn: ['dashboard-task-066'],
  },
  {
    id: 'dashboard-task-068',
    title: 'Close completed workflows (Dashboard #68)',
    description: 'CareNest operational task for dashboard: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm dashboard context #68',
      'Capture outcome for dashboard task 68',
      'Log follow-up owner for dashboard-68',
    ],
    dependsOn: ['dashboard-task-067'],
  },
  {
    id: 'dashboard-task-069',
    title: 'Generate shift handoff summary (Dashboard #69)',
    description: 'CareNest operational task for dashboard: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm dashboard context #69',
      'Capture outcome for dashboard task 69',
      'Log follow-up owner for dashboard-69',
    ],
    dependsOn: ['dashboard-task-068'],
  },
  {
    id: 'dashboard-task-070',
    title: 'Confirm consent / privacy flags (Dashboard #70)',
    description: 'CareNest operational task for dashboard: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm dashboard context #70',
      'Capture outcome for dashboard task 70',
      'Log follow-up owner for dashboard-70',
    ],
    dependsOn: ['dashboard-task-069'],
  },
  {
    id: 'dashboard-task-071',
    title: 'Run compliance checklist (Dashboard #71)',
    description: 'CareNest operational task for dashboard: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm dashboard context #71',
      'Capture outcome for dashboard task 71',
      'Log follow-up owner for dashboard-71',
    ],
    dependsOn: ['dashboard-task-070'],
  },
  {
    id: 'dashboard-task-072',
    title: 'Update risk scores (Dashboard #72)',
    description: 'CareNest operational task for dashboard: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm dashboard context #72',
      'Capture outcome for dashboard task 72',
      'Log follow-up owner for dashboard-72',
    ],
    dependsOn: ['dashboard-task-071'],
  },
  {
    id: 'dashboard-task-073',
    title: 'Notify on-call clinician (Dashboard #73)',
    description: 'CareNest operational task for dashboard: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm dashboard context #73',
      'Capture outcome for dashboard task 73',
      'Log follow-up owner for dashboard-73',
    ],
    dependsOn: ['dashboard-task-072'],
  },
  {
    id: 'dashboard-task-074',
    title: 'Archive stale drafts (Dashboard #74)',
    description: 'CareNest operational task for dashboard: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm dashboard context #74',
      'Capture outcome for dashboard task 74',
      'Log follow-up owner for dashboard-74',
    ],
    dependsOn: ['dashboard-task-073'],
  },
  {
    id: 'dashboard-task-075',
    title: 'Export weekly digest (Dashboard #75)',
    description: 'CareNest operational task for dashboard: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm dashboard context #75',
      'Capture outcome for dashboard task 75',
      'Log follow-up owner for dashboard-75',
    ],
    dependsOn: ['dashboard-task-074'],
  },
  {
    id: 'dashboard-task-076',
    title: 'Train new caregiver on module (Dashboard #76)',
    description: 'CareNest operational task for dashboard: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm dashboard context #76',
      'Capture outcome for dashboard task 76',
      'Log follow-up owner for dashboard-76',
    ],
    dependsOn: ['dashboard-task-075'],
  },
  {
    id: 'dashboard-task-077',
    title: 'Verify device integrations (Dashboard #77)',
    description: 'CareNest operational task for dashboard: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm dashboard context #77',
      'Capture outcome for dashboard task 77',
      'Log follow-up owner for dashboard-77',
    ],
    dependsOn: ['dashboard-task-076'],
  },
  {
    id: 'dashboard-task-078',
    title: 'Spot-check critical priorities (Dashboard #78)',
    description: 'CareNest operational task for dashboard: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm dashboard context #78',
      'Capture outcome for dashboard task 78',
      'Log follow-up owner for dashboard-78',
    ],
    dependsOn: ['dashboard-task-077'],
  },
  {
    id: 'dashboard-task-079',
    title: 'Align meal / care constraints (Dashboard #79)',
    description: 'CareNest operational task for dashboard: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm dashboard context #79',
      'Capture outcome for dashboard task 79',
      'Log follow-up owner for dashboard-79',
    ],
    dependsOn: ['dashboard-task-078'],
  },
  {
    id: 'dashboard-task-080',
    title: 'Publish dashboard widgets (Dashboard #80)',
    description: 'CareNest operational task for dashboard: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm dashboard context #80',
      'Capture outcome for dashboard task 80',
      'Log follow-up owner for dashboard-80',
    ],
    dependsOn: ['dashboard-task-079'],
  },
];

export function listOpenDashboardTasks(): DashboardTask[] {
  return dashboardTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countDashboardTasksByState(): Record<DashboardTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of dashboardTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateDashboardWorkload1(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateDashboardWorkload2(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateDashboardWorkload3(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateDashboardWorkload4(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateDashboardWorkload5(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateDashboardWorkload6(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateDashboardWorkload7(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateDashboardWorkload8(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateDashboardWorkload9(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateDashboardWorkload10(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateDashboardWorkload11(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateDashboardWorkload12(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateDashboardWorkload13(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateDashboardWorkload14(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateDashboardWorkload15(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateDashboardWorkload16(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateDashboardWorkload17(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateDashboardWorkload18(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateDashboardWorkload19(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateDashboardWorkload20(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateDashboardWorkload21(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateDashboardWorkload22(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateDashboardWorkload23(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateDashboardWorkload24(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateDashboardWorkload25(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateDashboardWorkload26(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateDashboardWorkload27(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateDashboardWorkload28(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateDashboardWorkload29(tasks: DashboardTask[] = dashboardTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
