/** Operational task catalog for MealPlanning */

export type MealPlanningTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface MealPlanningTask {
  id: string;
  title: string;
  description: string;
  state: MealPlanningTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const mealPlanningTaskCatalog: MealPlanningTask[] = [
  {
    id: 'meal-planning-task-001',
    title: 'Review overnight notes (MealPlanning #1)',
    description: 'CareNest operational task for meal-planning: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm meal-planning context #1',
      'Capture outcome for meal-planning task 1',
      'Log follow-up owner for meal-planning-1',
    ],
    dependsOn: [],
  },
  {
    id: 'meal-planning-task-002',
    title: 'Reconcile open items (MealPlanning #2)',
    description: 'CareNest operational task for meal-planning: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm meal-planning context #2',
      'Capture outcome for meal-planning task 2',
      'Log follow-up owner for meal-planning-2',
    ],
    dependsOn: ['meal-planning-task-001'],
  },
  {
    id: 'meal-planning-task-003',
    title: 'Escalate overdue cases (MealPlanning #3)',
    description: 'CareNest operational task for meal-planning: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm meal-planning context #3',
      'Capture outcome for meal-planning task 3',
      'Log follow-up owner for meal-planning-3',
    ],
    dependsOn: ['meal-planning-task-002'],
  },
  {
    id: 'meal-planning-task-004',
    title: 'Prepare family update (MealPlanning #4)',
    description: 'CareNest operational task for meal-planning: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm meal-planning context #4',
      'Capture outcome for meal-planning task 4',
      'Log follow-up owner for meal-planning-4',
    ],
    dependsOn: ['meal-planning-task-003'],
  },
  {
    id: 'meal-planning-task-005',
    title: 'Audit documentation completeness (MealPlanning #5)',
    description: 'CareNest operational task for meal-planning: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm meal-planning context #5',
      'Capture outcome for meal-planning task 5',
      'Log follow-up owner for meal-planning-5',
    ],
    dependsOn: ['meal-planning-task-004'],
  },
  {
    id: 'meal-planning-task-006',
    title: 'Sync with pharmacy / vendor (MealPlanning #6)',
    description: 'CareNest operational task for meal-planning: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm meal-planning context #6',
      'Capture outcome for meal-planning task 6',
      'Log follow-up owner for meal-planning-6',
    ],
    dependsOn: ['meal-planning-task-005'],
  },
  {
    id: 'meal-planning-task-007',
    title: 'Validate schedule conflicts (MealPlanning #7)',
    description: 'CareNest operational task for meal-planning: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm meal-planning context #7',
      'Capture outcome for meal-planning task 7',
      'Log follow-up owner for meal-planning-7',
    ],
    dependsOn: ['meal-planning-task-006'],
  },
  {
    id: 'meal-planning-task-008',
    title: 'Close completed workflows (MealPlanning #8)',
    description: 'CareNest operational task for meal-planning: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm meal-planning context #8',
      'Capture outcome for meal-planning task 8',
      'Log follow-up owner for meal-planning-8',
    ],
    dependsOn: ['meal-planning-task-007'],
  },
  {
    id: 'meal-planning-task-009',
    title: 'Generate shift handoff summary (MealPlanning #9)',
    description: 'CareNest operational task for meal-planning: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm meal-planning context #9',
      'Capture outcome for meal-planning task 9',
      'Log follow-up owner for meal-planning-9',
    ],
    dependsOn: ['meal-planning-task-008'],
  },
  {
    id: 'meal-planning-task-010',
    title: 'Confirm consent / privacy flags (MealPlanning #10)',
    description: 'CareNest operational task for meal-planning: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm meal-planning context #10',
      'Capture outcome for meal-planning task 10',
      'Log follow-up owner for meal-planning-10',
    ],
    dependsOn: ['meal-planning-task-009'],
  },
  {
    id: 'meal-planning-task-011',
    title: 'Run compliance checklist (MealPlanning #11)',
    description: 'CareNest operational task for meal-planning: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm meal-planning context #11',
      'Capture outcome for meal-planning task 11',
      'Log follow-up owner for meal-planning-11',
    ],
    dependsOn: ['meal-planning-task-010'],
  },
  {
    id: 'meal-planning-task-012',
    title: 'Update risk scores (MealPlanning #12)',
    description: 'CareNest operational task for meal-planning: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm meal-planning context #12',
      'Capture outcome for meal-planning task 12',
      'Log follow-up owner for meal-planning-12',
    ],
    dependsOn: ['meal-planning-task-011'],
  },
  {
    id: 'meal-planning-task-013',
    title: 'Notify on-call clinician (MealPlanning #13)',
    description: 'CareNest operational task for meal-planning: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm meal-planning context #13',
      'Capture outcome for meal-planning task 13',
      'Log follow-up owner for meal-planning-13',
    ],
    dependsOn: ['meal-planning-task-012'],
  },
  {
    id: 'meal-planning-task-014',
    title: 'Archive stale drafts (MealPlanning #14)',
    description: 'CareNest operational task for meal-planning: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm meal-planning context #14',
      'Capture outcome for meal-planning task 14',
      'Log follow-up owner for meal-planning-14',
    ],
    dependsOn: ['meal-planning-task-013'],
  },
  {
    id: 'meal-planning-task-015',
    title: 'Export weekly digest (MealPlanning #15)',
    description: 'CareNest operational task for meal-planning: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm meal-planning context #15',
      'Capture outcome for meal-planning task 15',
      'Log follow-up owner for meal-planning-15',
    ],
    dependsOn: ['meal-planning-task-014'],
  },
  {
    id: 'meal-planning-task-016',
    title: 'Train new caregiver on module (MealPlanning #16)',
    description: 'CareNest operational task for meal-planning: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm meal-planning context #16',
      'Capture outcome for meal-planning task 16',
      'Log follow-up owner for meal-planning-16',
    ],
    dependsOn: ['meal-planning-task-015'],
  },
  {
    id: 'meal-planning-task-017',
    title: 'Verify device integrations (MealPlanning #17)',
    description: 'CareNest operational task for meal-planning: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm meal-planning context #17',
      'Capture outcome for meal-planning task 17',
      'Log follow-up owner for meal-planning-17',
    ],
    dependsOn: ['meal-planning-task-016'],
  },
  {
    id: 'meal-planning-task-018',
    title: 'Spot-check critical priorities (MealPlanning #18)',
    description: 'CareNest operational task for meal-planning: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm meal-planning context #18',
      'Capture outcome for meal-planning task 18',
      'Log follow-up owner for meal-planning-18',
    ],
    dependsOn: ['meal-planning-task-017'],
  },
  {
    id: 'meal-planning-task-019',
    title: 'Align meal / care constraints (MealPlanning #19)',
    description: 'CareNest operational task for meal-planning: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm meal-planning context #19',
      'Capture outcome for meal-planning task 19',
      'Log follow-up owner for meal-planning-19',
    ],
    dependsOn: ['meal-planning-task-018'],
  },
  {
    id: 'meal-planning-task-020',
    title: 'Publish dashboard widgets (MealPlanning #20)',
    description: 'CareNest operational task for meal-planning: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm meal-planning context #20',
      'Capture outcome for meal-planning task 20',
      'Log follow-up owner for meal-planning-20',
    ],
    dependsOn: ['meal-planning-task-019'],
  },
  {
    id: 'meal-planning-task-021',
    title: 'Review overnight notes (MealPlanning #21)',
    description: 'CareNest operational task for meal-planning: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm meal-planning context #21',
      'Capture outcome for meal-planning task 21',
      'Log follow-up owner for meal-planning-21',
    ],
    dependsOn: ['meal-planning-task-020'],
  },
  {
    id: 'meal-planning-task-022',
    title: 'Reconcile open items (MealPlanning #22)',
    description: 'CareNest operational task for meal-planning: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm meal-planning context #22',
      'Capture outcome for meal-planning task 22',
      'Log follow-up owner for meal-planning-22',
    ],
    dependsOn: ['meal-planning-task-021'],
  },
  {
    id: 'meal-planning-task-023',
    title: 'Escalate overdue cases (MealPlanning #23)',
    description: 'CareNest operational task for meal-planning: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm meal-planning context #23',
      'Capture outcome for meal-planning task 23',
      'Log follow-up owner for meal-planning-23',
    ],
    dependsOn: ['meal-planning-task-022'],
  },
  {
    id: 'meal-planning-task-024',
    title: 'Prepare family update (MealPlanning #24)',
    description: 'CareNest operational task for meal-planning: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm meal-planning context #24',
      'Capture outcome for meal-planning task 24',
      'Log follow-up owner for meal-planning-24',
    ],
    dependsOn: ['meal-planning-task-023'],
  },
  {
    id: 'meal-planning-task-025',
    title: 'Audit documentation completeness (MealPlanning #25)',
    description: 'CareNest operational task for meal-planning: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm meal-planning context #25',
      'Capture outcome for meal-planning task 25',
      'Log follow-up owner for meal-planning-25',
    ],
    dependsOn: ['meal-planning-task-024'],
  },
  {
    id: 'meal-planning-task-026',
    title: 'Sync with pharmacy / vendor (MealPlanning #26)',
    description: 'CareNest operational task for meal-planning: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm meal-planning context #26',
      'Capture outcome for meal-planning task 26',
      'Log follow-up owner for meal-planning-26',
    ],
    dependsOn: ['meal-planning-task-025'],
  },
  {
    id: 'meal-planning-task-027',
    title: 'Validate schedule conflicts (MealPlanning #27)',
    description: 'CareNest operational task for meal-planning: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm meal-planning context #27',
      'Capture outcome for meal-planning task 27',
      'Log follow-up owner for meal-planning-27',
    ],
    dependsOn: ['meal-planning-task-026'],
  },
  {
    id: 'meal-planning-task-028',
    title: 'Close completed workflows (MealPlanning #28)',
    description: 'CareNest operational task for meal-planning: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm meal-planning context #28',
      'Capture outcome for meal-planning task 28',
      'Log follow-up owner for meal-planning-28',
    ],
    dependsOn: ['meal-planning-task-027'],
  },
  {
    id: 'meal-planning-task-029',
    title: 'Generate shift handoff summary (MealPlanning #29)',
    description: 'CareNest operational task for meal-planning: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm meal-planning context #29',
      'Capture outcome for meal-planning task 29',
      'Log follow-up owner for meal-planning-29',
    ],
    dependsOn: ['meal-planning-task-028'],
  },
  {
    id: 'meal-planning-task-030',
    title: 'Confirm consent / privacy flags (MealPlanning #30)',
    description: 'CareNest operational task for meal-planning: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm meal-planning context #30',
      'Capture outcome for meal-planning task 30',
      'Log follow-up owner for meal-planning-30',
    ],
    dependsOn: ['meal-planning-task-029'],
  },
  {
    id: 'meal-planning-task-031',
    title: 'Run compliance checklist (MealPlanning #31)',
    description: 'CareNest operational task for meal-planning: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm meal-planning context #31',
      'Capture outcome for meal-planning task 31',
      'Log follow-up owner for meal-planning-31',
    ],
    dependsOn: ['meal-planning-task-030'],
  },
  {
    id: 'meal-planning-task-032',
    title: 'Update risk scores (MealPlanning #32)',
    description: 'CareNest operational task for meal-planning: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm meal-planning context #32',
      'Capture outcome for meal-planning task 32',
      'Log follow-up owner for meal-planning-32',
    ],
    dependsOn: ['meal-planning-task-031'],
  },
  {
    id: 'meal-planning-task-033',
    title: 'Notify on-call clinician (MealPlanning #33)',
    description: 'CareNest operational task for meal-planning: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm meal-planning context #33',
      'Capture outcome for meal-planning task 33',
      'Log follow-up owner for meal-planning-33',
    ],
    dependsOn: ['meal-planning-task-032'],
  },
  {
    id: 'meal-planning-task-034',
    title: 'Archive stale drafts (MealPlanning #34)',
    description: 'CareNest operational task for meal-planning: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm meal-planning context #34',
      'Capture outcome for meal-planning task 34',
      'Log follow-up owner for meal-planning-34',
    ],
    dependsOn: ['meal-planning-task-033'],
  },
  {
    id: 'meal-planning-task-035',
    title: 'Export weekly digest (MealPlanning #35)',
    description: 'CareNest operational task for meal-planning: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm meal-planning context #35',
      'Capture outcome for meal-planning task 35',
      'Log follow-up owner for meal-planning-35',
    ],
    dependsOn: ['meal-planning-task-034'],
  },
  {
    id: 'meal-planning-task-036',
    title: 'Train new caregiver on module (MealPlanning #36)',
    description: 'CareNest operational task for meal-planning: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm meal-planning context #36',
      'Capture outcome for meal-planning task 36',
      'Log follow-up owner for meal-planning-36',
    ],
    dependsOn: ['meal-planning-task-035'],
  },
  {
    id: 'meal-planning-task-037',
    title: 'Verify device integrations (MealPlanning #37)',
    description: 'CareNest operational task for meal-planning: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm meal-planning context #37',
      'Capture outcome for meal-planning task 37',
      'Log follow-up owner for meal-planning-37',
    ],
    dependsOn: ['meal-planning-task-036'],
  },
  {
    id: 'meal-planning-task-038',
    title: 'Spot-check critical priorities (MealPlanning #38)',
    description: 'CareNest operational task for meal-planning: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm meal-planning context #38',
      'Capture outcome for meal-planning task 38',
      'Log follow-up owner for meal-planning-38',
    ],
    dependsOn: ['meal-planning-task-037'],
  },
  {
    id: 'meal-planning-task-039',
    title: 'Align meal / care constraints (MealPlanning #39)',
    description: 'CareNest operational task for meal-planning: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm meal-planning context #39',
      'Capture outcome for meal-planning task 39',
      'Log follow-up owner for meal-planning-39',
    ],
    dependsOn: ['meal-planning-task-038'],
  },
  {
    id: 'meal-planning-task-040',
    title: 'Publish dashboard widgets (MealPlanning #40)',
    description: 'CareNest operational task for meal-planning: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm meal-planning context #40',
      'Capture outcome for meal-planning task 40',
      'Log follow-up owner for meal-planning-40',
    ],
    dependsOn: ['meal-planning-task-039'],
  },
  {
    id: 'meal-planning-task-041',
    title: 'Review overnight notes (MealPlanning #41)',
    description: 'CareNest operational task for meal-planning: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm meal-planning context #41',
      'Capture outcome for meal-planning task 41',
      'Log follow-up owner for meal-planning-41',
    ],
    dependsOn: ['meal-planning-task-040'],
  },
  {
    id: 'meal-planning-task-042',
    title: 'Reconcile open items (MealPlanning #42)',
    description: 'CareNest operational task for meal-planning: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm meal-planning context #42',
      'Capture outcome for meal-planning task 42',
      'Log follow-up owner for meal-planning-42',
    ],
    dependsOn: ['meal-planning-task-041'],
  },
  {
    id: 'meal-planning-task-043',
    title: 'Escalate overdue cases (MealPlanning #43)',
    description: 'CareNest operational task for meal-planning: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm meal-planning context #43',
      'Capture outcome for meal-planning task 43',
      'Log follow-up owner for meal-planning-43',
    ],
    dependsOn: ['meal-planning-task-042'],
  },
  {
    id: 'meal-planning-task-044',
    title: 'Prepare family update (MealPlanning #44)',
    description: 'CareNest operational task for meal-planning: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm meal-planning context #44',
      'Capture outcome for meal-planning task 44',
      'Log follow-up owner for meal-planning-44',
    ],
    dependsOn: ['meal-planning-task-043'],
  },
  {
    id: 'meal-planning-task-045',
    title: 'Audit documentation completeness (MealPlanning #45)',
    description: 'CareNest operational task for meal-planning: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm meal-planning context #45',
      'Capture outcome for meal-planning task 45',
      'Log follow-up owner for meal-planning-45',
    ],
    dependsOn: ['meal-planning-task-044'],
  },
  {
    id: 'meal-planning-task-046',
    title: 'Sync with pharmacy / vendor (MealPlanning #46)',
    description: 'CareNest operational task for meal-planning: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm meal-planning context #46',
      'Capture outcome for meal-planning task 46',
      'Log follow-up owner for meal-planning-46',
    ],
    dependsOn: ['meal-planning-task-045'],
  },
  {
    id: 'meal-planning-task-047',
    title: 'Validate schedule conflicts (MealPlanning #47)',
    description: 'CareNest operational task for meal-planning: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm meal-planning context #47',
      'Capture outcome for meal-planning task 47',
      'Log follow-up owner for meal-planning-47',
    ],
    dependsOn: ['meal-planning-task-046'],
  },
  {
    id: 'meal-planning-task-048',
    title: 'Close completed workflows (MealPlanning #48)',
    description: 'CareNest operational task for meal-planning: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm meal-planning context #48',
      'Capture outcome for meal-planning task 48',
      'Log follow-up owner for meal-planning-48',
    ],
    dependsOn: ['meal-planning-task-047'],
  },
  {
    id: 'meal-planning-task-049',
    title: 'Generate shift handoff summary (MealPlanning #49)',
    description: 'CareNest operational task for meal-planning: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm meal-planning context #49',
      'Capture outcome for meal-planning task 49',
      'Log follow-up owner for meal-planning-49',
    ],
    dependsOn: ['meal-planning-task-048'],
  },
  {
    id: 'meal-planning-task-050',
    title: 'Confirm consent / privacy flags (MealPlanning #50)',
    description: 'CareNest operational task for meal-planning: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm meal-planning context #50',
      'Capture outcome for meal-planning task 50',
      'Log follow-up owner for meal-planning-50',
    ],
    dependsOn: ['meal-planning-task-049'],
  },
  {
    id: 'meal-planning-task-051',
    title: 'Run compliance checklist (MealPlanning #51)',
    description: 'CareNest operational task for meal-planning: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm meal-planning context #51',
      'Capture outcome for meal-planning task 51',
      'Log follow-up owner for meal-planning-51',
    ],
    dependsOn: ['meal-planning-task-050'],
  },
  {
    id: 'meal-planning-task-052',
    title: 'Update risk scores (MealPlanning #52)',
    description: 'CareNest operational task for meal-planning: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm meal-planning context #52',
      'Capture outcome for meal-planning task 52',
      'Log follow-up owner for meal-planning-52',
    ],
    dependsOn: ['meal-planning-task-051'],
  },
  {
    id: 'meal-planning-task-053',
    title: 'Notify on-call clinician (MealPlanning #53)',
    description: 'CareNest operational task for meal-planning: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm meal-planning context #53',
      'Capture outcome for meal-planning task 53',
      'Log follow-up owner for meal-planning-53',
    ],
    dependsOn: ['meal-planning-task-052'],
  },
  {
    id: 'meal-planning-task-054',
    title: 'Archive stale drafts (MealPlanning #54)',
    description: 'CareNest operational task for meal-planning: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm meal-planning context #54',
      'Capture outcome for meal-planning task 54',
      'Log follow-up owner for meal-planning-54',
    ],
    dependsOn: ['meal-planning-task-053'],
  },
  {
    id: 'meal-planning-task-055',
    title: 'Export weekly digest (MealPlanning #55)',
    description: 'CareNest operational task for meal-planning: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm meal-planning context #55',
      'Capture outcome for meal-planning task 55',
      'Log follow-up owner for meal-planning-55',
    ],
    dependsOn: ['meal-planning-task-054'],
  },
  {
    id: 'meal-planning-task-056',
    title: 'Train new caregiver on module (MealPlanning #56)',
    description: 'CareNest operational task for meal-planning: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm meal-planning context #56',
      'Capture outcome for meal-planning task 56',
      'Log follow-up owner for meal-planning-56',
    ],
    dependsOn: ['meal-planning-task-055'],
  },
  {
    id: 'meal-planning-task-057',
    title: 'Verify device integrations (MealPlanning #57)',
    description: 'CareNest operational task for meal-planning: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm meal-planning context #57',
      'Capture outcome for meal-planning task 57',
      'Log follow-up owner for meal-planning-57',
    ],
    dependsOn: ['meal-planning-task-056'],
  },
  {
    id: 'meal-planning-task-058',
    title: 'Spot-check critical priorities (MealPlanning #58)',
    description: 'CareNest operational task for meal-planning: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm meal-planning context #58',
      'Capture outcome for meal-planning task 58',
      'Log follow-up owner for meal-planning-58',
    ],
    dependsOn: ['meal-planning-task-057'],
  },
  {
    id: 'meal-planning-task-059',
    title: 'Align meal / care constraints (MealPlanning #59)',
    description: 'CareNest operational task for meal-planning: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm meal-planning context #59',
      'Capture outcome for meal-planning task 59',
      'Log follow-up owner for meal-planning-59',
    ],
    dependsOn: ['meal-planning-task-058'],
  },
  {
    id: 'meal-planning-task-060',
    title: 'Publish dashboard widgets (MealPlanning #60)',
    description: 'CareNest operational task for meal-planning: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm meal-planning context #60',
      'Capture outcome for meal-planning task 60',
      'Log follow-up owner for meal-planning-60',
    ],
    dependsOn: ['meal-planning-task-059'],
  },
  {
    id: 'meal-planning-task-061',
    title: 'Review overnight notes (MealPlanning #61)',
    description: 'CareNest operational task for meal-planning: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm meal-planning context #61',
      'Capture outcome for meal-planning task 61',
      'Log follow-up owner for meal-planning-61',
    ],
    dependsOn: ['meal-planning-task-060'],
  },
  {
    id: 'meal-planning-task-062',
    title: 'Reconcile open items (MealPlanning #62)',
    description: 'CareNest operational task for meal-planning: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm meal-planning context #62',
      'Capture outcome for meal-planning task 62',
      'Log follow-up owner for meal-planning-62',
    ],
    dependsOn: ['meal-planning-task-061'],
  },
  {
    id: 'meal-planning-task-063',
    title: 'Escalate overdue cases (MealPlanning #63)',
    description: 'CareNest operational task for meal-planning: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm meal-planning context #63',
      'Capture outcome for meal-planning task 63',
      'Log follow-up owner for meal-planning-63',
    ],
    dependsOn: ['meal-planning-task-062'],
  },
  {
    id: 'meal-planning-task-064',
    title: 'Prepare family update (MealPlanning #64)',
    description: 'CareNest operational task for meal-planning: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm meal-planning context #64',
      'Capture outcome for meal-planning task 64',
      'Log follow-up owner for meal-planning-64',
    ],
    dependsOn: ['meal-planning-task-063'],
  },
  {
    id: 'meal-planning-task-065',
    title: 'Audit documentation completeness (MealPlanning #65)',
    description: 'CareNest operational task for meal-planning: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm meal-planning context #65',
      'Capture outcome for meal-planning task 65',
      'Log follow-up owner for meal-planning-65',
    ],
    dependsOn: ['meal-planning-task-064'],
  },
  {
    id: 'meal-planning-task-066',
    title: 'Sync with pharmacy / vendor (MealPlanning #66)',
    description: 'CareNest operational task for meal-planning: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm meal-planning context #66',
      'Capture outcome for meal-planning task 66',
      'Log follow-up owner for meal-planning-66',
    ],
    dependsOn: ['meal-planning-task-065'],
  },
  {
    id: 'meal-planning-task-067',
    title: 'Validate schedule conflicts (MealPlanning #67)',
    description: 'CareNest operational task for meal-planning: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm meal-planning context #67',
      'Capture outcome for meal-planning task 67',
      'Log follow-up owner for meal-planning-67',
    ],
    dependsOn: ['meal-planning-task-066'],
  },
  {
    id: 'meal-planning-task-068',
    title: 'Close completed workflows (MealPlanning #68)',
    description: 'CareNest operational task for meal-planning: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm meal-planning context #68',
      'Capture outcome for meal-planning task 68',
      'Log follow-up owner for meal-planning-68',
    ],
    dependsOn: ['meal-planning-task-067'],
  },
  {
    id: 'meal-planning-task-069',
    title: 'Generate shift handoff summary (MealPlanning #69)',
    description: 'CareNest operational task for meal-planning: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm meal-planning context #69',
      'Capture outcome for meal-planning task 69',
      'Log follow-up owner for meal-planning-69',
    ],
    dependsOn: ['meal-planning-task-068'],
  },
  {
    id: 'meal-planning-task-070',
    title: 'Confirm consent / privacy flags (MealPlanning #70)',
    description: 'CareNest operational task for meal-planning: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm meal-planning context #70',
      'Capture outcome for meal-planning task 70',
      'Log follow-up owner for meal-planning-70',
    ],
    dependsOn: ['meal-planning-task-069'],
  },
  {
    id: 'meal-planning-task-071',
    title: 'Run compliance checklist (MealPlanning #71)',
    description: 'CareNest operational task for meal-planning: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm meal-planning context #71',
      'Capture outcome for meal-planning task 71',
      'Log follow-up owner for meal-planning-71',
    ],
    dependsOn: ['meal-planning-task-070'],
  },
  {
    id: 'meal-planning-task-072',
    title: 'Update risk scores (MealPlanning #72)',
    description: 'CareNest operational task for meal-planning: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm meal-planning context #72',
      'Capture outcome for meal-planning task 72',
      'Log follow-up owner for meal-planning-72',
    ],
    dependsOn: ['meal-planning-task-071'],
  },
  {
    id: 'meal-planning-task-073',
    title: 'Notify on-call clinician (MealPlanning #73)',
    description: 'CareNest operational task for meal-planning: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm meal-planning context #73',
      'Capture outcome for meal-planning task 73',
      'Log follow-up owner for meal-planning-73',
    ],
    dependsOn: ['meal-planning-task-072'],
  },
  {
    id: 'meal-planning-task-074',
    title: 'Archive stale drafts (MealPlanning #74)',
    description: 'CareNest operational task for meal-planning: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm meal-planning context #74',
      'Capture outcome for meal-planning task 74',
      'Log follow-up owner for meal-planning-74',
    ],
    dependsOn: ['meal-planning-task-073'],
  },
  {
    id: 'meal-planning-task-075',
    title: 'Export weekly digest (MealPlanning #75)',
    description: 'CareNest operational task for meal-planning: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm meal-planning context #75',
      'Capture outcome for meal-planning task 75',
      'Log follow-up owner for meal-planning-75',
    ],
    dependsOn: ['meal-planning-task-074'],
  },
  {
    id: 'meal-planning-task-076',
    title: 'Train new caregiver on module (MealPlanning #76)',
    description: 'CareNest operational task for meal-planning: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm meal-planning context #76',
      'Capture outcome for meal-planning task 76',
      'Log follow-up owner for meal-planning-76',
    ],
    dependsOn: ['meal-planning-task-075'],
  },
  {
    id: 'meal-planning-task-077',
    title: 'Verify device integrations (MealPlanning #77)',
    description: 'CareNest operational task for meal-planning: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm meal-planning context #77',
      'Capture outcome for meal-planning task 77',
      'Log follow-up owner for meal-planning-77',
    ],
    dependsOn: ['meal-planning-task-076'],
  },
  {
    id: 'meal-planning-task-078',
    title: 'Spot-check critical priorities (MealPlanning #78)',
    description: 'CareNest operational task for meal-planning: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm meal-planning context #78',
      'Capture outcome for meal-planning task 78',
      'Log follow-up owner for meal-planning-78',
    ],
    dependsOn: ['meal-planning-task-077'],
  },
  {
    id: 'meal-planning-task-079',
    title: 'Align meal / care constraints (MealPlanning #79)',
    description: 'CareNest operational task for meal-planning: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm meal-planning context #79',
      'Capture outcome for meal-planning task 79',
      'Log follow-up owner for meal-planning-79',
    ],
    dependsOn: ['meal-planning-task-078'],
  },
  {
    id: 'meal-planning-task-080',
    title: 'Publish dashboard widgets (MealPlanning #80)',
    description: 'CareNest operational task for meal-planning: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm meal-planning context #80',
      'Capture outcome for meal-planning task 80',
      'Log follow-up owner for meal-planning-80',
    ],
    dependsOn: ['meal-planning-task-079'],
  },
];

export function listOpenMealPlanningTasks(): MealPlanningTask[] {
  return mealPlanningTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countMealPlanningTasksByState(): Record<MealPlanningTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of mealPlanningTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateMealPlanningWorkload1(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateMealPlanningWorkload2(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateMealPlanningWorkload3(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateMealPlanningWorkload4(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateMealPlanningWorkload5(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateMealPlanningWorkload6(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateMealPlanningWorkload7(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateMealPlanningWorkload8(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateMealPlanningWorkload9(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateMealPlanningWorkload10(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateMealPlanningWorkload11(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateMealPlanningWorkload12(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateMealPlanningWorkload13(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateMealPlanningWorkload14(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateMealPlanningWorkload15(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateMealPlanningWorkload16(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateMealPlanningWorkload17(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateMealPlanningWorkload18(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateMealPlanningWorkload19(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateMealPlanningWorkload20(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateMealPlanningWorkload21(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateMealPlanningWorkload22(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateMealPlanningWorkload23(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateMealPlanningWorkload24(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateMealPlanningWorkload25(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateMealPlanningWorkload26(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateMealPlanningWorkload27(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateMealPlanningWorkload28(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateMealPlanningWorkload29(tasks: MealPlanningTask[] = mealPlanningTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
