/** Operational task catalog for ShiftHandoff */

export type ShiftHandoffTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface ShiftHandoffTask {
  id: string;
  title: string;
  description: string;
  state: ShiftHandoffTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const shiftHandoffTaskCatalog: ShiftHandoffTask[] = [
  {
    id: 'shift-handoff-task-001',
    title: 'Review overnight notes (ShiftHandoff #1)',
    description: 'CareNest operational task for shift-handoff: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm shift-handoff context #1',
      'Capture outcome for shift-handoff task 1',
      'Log follow-up owner for shift-handoff-1',
    ],
    dependsOn: [],
  },
  {
    id: 'shift-handoff-task-002',
    title: 'Reconcile open items (ShiftHandoff #2)',
    description: 'CareNest operational task for shift-handoff: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm shift-handoff context #2',
      'Capture outcome for shift-handoff task 2',
      'Log follow-up owner for shift-handoff-2',
    ],
    dependsOn: ['shift-handoff-task-001'],
  },
  {
    id: 'shift-handoff-task-003',
    title: 'Escalate overdue cases (ShiftHandoff #3)',
    description: 'CareNest operational task for shift-handoff: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm shift-handoff context #3',
      'Capture outcome for shift-handoff task 3',
      'Log follow-up owner for shift-handoff-3',
    ],
    dependsOn: ['shift-handoff-task-002'],
  },
  {
    id: 'shift-handoff-task-004',
    title: 'Prepare family update (ShiftHandoff #4)',
    description: 'CareNest operational task for shift-handoff: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm shift-handoff context #4',
      'Capture outcome for shift-handoff task 4',
      'Log follow-up owner for shift-handoff-4',
    ],
    dependsOn: ['shift-handoff-task-003'],
  },
  {
    id: 'shift-handoff-task-005',
    title: 'Audit documentation completeness (ShiftHandoff #5)',
    description: 'CareNest operational task for shift-handoff: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm shift-handoff context #5',
      'Capture outcome for shift-handoff task 5',
      'Log follow-up owner for shift-handoff-5',
    ],
    dependsOn: ['shift-handoff-task-004'],
  },
  {
    id: 'shift-handoff-task-006',
    title: 'Sync with pharmacy / vendor (ShiftHandoff #6)',
    description: 'CareNest operational task for shift-handoff: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm shift-handoff context #6',
      'Capture outcome for shift-handoff task 6',
      'Log follow-up owner for shift-handoff-6',
    ],
    dependsOn: ['shift-handoff-task-005'],
  },
  {
    id: 'shift-handoff-task-007',
    title: 'Validate schedule conflicts (ShiftHandoff #7)',
    description: 'CareNest operational task for shift-handoff: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm shift-handoff context #7',
      'Capture outcome for shift-handoff task 7',
      'Log follow-up owner for shift-handoff-7',
    ],
    dependsOn: ['shift-handoff-task-006'],
  },
  {
    id: 'shift-handoff-task-008',
    title: 'Close completed workflows (ShiftHandoff #8)',
    description: 'CareNest operational task for shift-handoff: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm shift-handoff context #8',
      'Capture outcome for shift-handoff task 8',
      'Log follow-up owner for shift-handoff-8',
    ],
    dependsOn: ['shift-handoff-task-007'],
  },
  {
    id: 'shift-handoff-task-009',
    title: 'Generate shift handoff summary (ShiftHandoff #9)',
    description: 'CareNest operational task for shift-handoff: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm shift-handoff context #9',
      'Capture outcome for shift-handoff task 9',
      'Log follow-up owner for shift-handoff-9',
    ],
    dependsOn: ['shift-handoff-task-008'],
  },
  {
    id: 'shift-handoff-task-010',
    title: 'Confirm consent / privacy flags (ShiftHandoff #10)',
    description: 'CareNest operational task for shift-handoff: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm shift-handoff context #10',
      'Capture outcome for shift-handoff task 10',
      'Log follow-up owner for shift-handoff-10',
    ],
    dependsOn: ['shift-handoff-task-009'],
  },
  {
    id: 'shift-handoff-task-011',
    title: 'Run compliance checklist (ShiftHandoff #11)',
    description: 'CareNest operational task for shift-handoff: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm shift-handoff context #11',
      'Capture outcome for shift-handoff task 11',
      'Log follow-up owner for shift-handoff-11',
    ],
    dependsOn: ['shift-handoff-task-010'],
  },
  {
    id: 'shift-handoff-task-012',
    title: 'Update risk scores (ShiftHandoff #12)',
    description: 'CareNest operational task for shift-handoff: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm shift-handoff context #12',
      'Capture outcome for shift-handoff task 12',
      'Log follow-up owner for shift-handoff-12',
    ],
    dependsOn: ['shift-handoff-task-011'],
  },
  {
    id: 'shift-handoff-task-013',
    title: 'Notify on-call clinician (ShiftHandoff #13)',
    description: 'CareNest operational task for shift-handoff: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm shift-handoff context #13',
      'Capture outcome for shift-handoff task 13',
      'Log follow-up owner for shift-handoff-13',
    ],
    dependsOn: ['shift-handoff-task-012'],
  },
  {
    id: 'shift-handoff-task-014',
    title: 'Archive stale drafts (ShiftHandoff #14)',
    description: 'CareNest operational task for shift-handoff: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm shift-handoff context #14',
      'Capture outcome for shift-handoff task 14',
      'Log follow-up owner for shift-handoff-14',
    ],
    dependsOn: ['shift-handoff-task-013'],
  },
  {
    id: 'shift-handoff-task-015',
    title: 'Export weekly digest (ShiftHandoff #15)',
    description: 'CareNest operational task for shift-handoff: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm shift-handoff context #15',
      'Capture outcome for shift-handoff task 15',
      'Log follow-up owner for shift-handoff-15',
    ],
    dependsOn: ['shift-handoff-task-014'],
  },
  {
    id: 'shift-handoff-task-016',
    title: 'Train new caregiver on module (ShiftHandoff #16)',
    description: 'CareNest operational task for shift-handoff: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm shift-handoff context #16',
      'Capture outcome for shift-handoff task 16',
      'Log follow-up owner for shift-handoff-16',
    ],
    dependsOn: ['shift-handoff-task-015'],
  },
  {
    id: 'shift-handoff-task-017',
    title: 'Verify device integrations (ShiftHandoff #17)',
    description: 'CareNest operational task for shift-handoff: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm shift-handoff context #17',
      'Capture outcome for shift-handoff task 17',
      'Log follow-up owner for shift-handoff-17',
    ],
    dependsOn: ['shift-handoff-task-016'],
  },
  {
    id: 'shift-handoff-task-018',
    title: 'Spot-check critical priorities (ShiftHandoff #18)',
    description: 'CareNest operational task for shift-handoff: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm shift-handoff context #18',
      'Capture outcome for shift-handoff task 18',
      'Log follow-up owner for shift-handoff-18',
    ],
    dependsOn: ['shift-handoff-task-017'],
  },
  {
    id: 'shift-handoff-task-019',
    title: 'Align meal / care constraints (ShiftHandoff #19)',
    description: 'CareNest operational task for shift-handoff: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm shift-handoff context #19',
      'Capture outcome for shift-handoff task 19',
      'Log follow-up owner for shift-handoff-19',
    ],
    dependsOn: ['shift-handoff-task-018'],
  },
  {
    id: 'shift-handoff-task-020',
    title: 'Publish dashboard widgets (ShiftHandoff #20)',
    description: 'CareNest operational task for shift-handoff: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm shift-handoff context #20',
      'Capture outcome for shift-handoff task 20',
      'Log follow-up owner for shift-handoff-20',
    ],
    dependsOn: ['shift-handoff-task-019'],
  },
  {
    id: 'shift-handoff-task-021',
    title: 'Review overnight notes (ShiftHandoff #21)',
    description: 'CareNest operational task for shift-handoff: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm shift-handoff context #21',
      'Capture outcome for shift-handoff task 21',
      'Log follow-up owner for shift-handoff-21',
    ],
    dependsOn: ['shift-handoff-task-020'],
  },
  {
    id: 'shift-handoff-task-022',
    title: 'Reconcile open items (ShiftHandoff #22)',
    description: 'CareNest operational task for shift-handoff: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm shift-handoff context #22',
      'Capture outcome for shift-handoff task 22',
      'Log follow-up owner for shift-handoff-22',
    ],
    dependsOn: ['shift-handoff-task-021'],
  },
  {
    id: 'shift-handoff-task-023',
    title: 'Escalate overdue cases (ShiftHandoff #23)',
    description: 'CareNest operational task for shift-handoff: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm shift-handoff context #23',
      'Capture outcome for shift-handoff task 23',
      'Log follow-up owner for shift-handoff-23',
    ],
    dependsOn: ['shift-handoff-task-022'],
  },
  {
    id: 'shift-handoff-task-024',
    title: 'Prepare family update (ShiftHandoff #24)',
    description: 'CareNest operational task for shift-handoff: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm shift-handoff context #24',
      'Capture outcome for shift-handoff task 24',
      'Log follow-up owner for shift-handoff-24',
    ],
    dependsOn: ['shift-handoff-task-023'],
  },
  {
    id: 'shift-handoff-task-025',
    title: 'Audit documentation completeness (ShiftHandoff #25)',
    description: 'CareNest operational task for shift-handoff: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm shift-handoff context #25',
      'Capture outcome for shift-handoff task 25',
      'Log follow-up owner for shift-handoff-25',
    ],
    dependsOn: ['shift-handoff-task-024'],
  },
  {
    id: 'shift-handoff-task-026',
    title: 'Sync with pharmacy / vendor (ShiftHandoff #26)',
    description: 'CareNest operational task for shift-handoff: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm shift-handoff context #26',
      'Capture outcome for shift-handoff task 26',
      'Log follow-up owner for shift-handoff-26',
    ],
    dependsOn: ['shift-handoff-task-025'],
  },
  {
    id: 'shift-handoff-task-027',
    title: 'Validate schedule conflicts (ShiftHandoff #27)',
    description: 'CareNest operational task for shift-handoff: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm shift-handoff context #27',
      'Capture outcome for shift-handoff task 27',
      'Log follow-up owner for shift-handoff-27',
    ],
    dependsOn: ['shift-handoff-task-026'],
  },
  {
    id: 'shift-handoff-task-028',
    title: 'Close completed workflows (ShiftHandoff #28)',
    description: 'CareNest operational task for shift-handoff: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm shift-handoff context #28',
      'Capture outcome for shift-handoff task 28',
      'Log follow-up owner for shift-handoff-28',
    ],
    dependsOn: ['shift-handoff-task-027'],
  },
  {
    id: 'shift-handoff-task-029',
    title: 'Generate shift handoff summary (ShiftHandoff #29)',
    description: 'CareNest operational task for shift-handoff: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm shift-handoff context #29',
      'Capture outcome for shift-handoff task 29',
      'Log follow-up owner for shift-handoff-29',
    ],
    dependsOn: ['shift-handoff-task-028'],
  },
  {
    id: 'shift-handoff-task-030',
    title: 'Confirm consent / privacy flags (ShiftHandoff #30)',
    description: 'CareNest operational task for shift-handoff: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm shift-handoff context #30',
      'Capture outcome for shift-handoff task 30',
      'Log follow-up owner for shift-handoff-30',
    ],
    dependsOn: ['shift-handoff-task-029'],
  },
  {
    id: 'shift-handoff-task-031',
    title: 'Run compliance checklist (ShiftHandoff #31)',
    description: 'CareNest operational task for shift-handoff: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm shift-handoff context #31',
      'Capture outcome for shift-handoff task 31',
      'Log follow-up owner for shift-handoff-31',
    ],
    dependsOn: ['shift-handoff-task-030'],
  },
  {
    id: 'shift-handoff-task-032',
    title: 'Update risk scores (ShiftHandoff #32)',
    description: 'CareNest operational task for shift-handoff: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm shift-handoff context #32',
      'Capture outcome for shift-handoff task 32',
      'Log follow-up owner for shift-handoff-32',
    ],
    dependsOn: ['shift-handoff-task-031'],
  },
  {
    id: 'shift-handoff-task-033',
    title: 'Notify on-call clinician (ShiftHandoff #33)',
    description: 'CareNest operational task for shift-handoff: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm shift-handoff context #33',
      'Capture outcome for shift-handoff task 33',
      'Log follow-up owner for shift-handoff-33',
    ],
    dependsOn: ['shift-handoff-task-032'],
  },
  {
    id: 'shift-handoff-task-034',
    title: 'Archive stale drafts (ShiftHandoff #34)',
    description: 'CareNest operational task for shift-handoff: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm shift-handoff context #34',
      'Capture outcome for shift-handoff task 34',
      'Log follow-up owner for shift-handoff-34',
    ],
    dependsOn: ['shift-handoff-task-033'],
  },
  {
    id: 'shift-handoff-task-035',
    title: 'Export weekly digest (ShiftHandoff #35)',
    description: 'CareNest operational task for shift-handoff: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm shift-handoff context #35',
      'Capture outcome for shift-handoff task 35',
      'Log follow-up owner for shift-handoff-35',
    ],
    dependsOn: ['shift-handoff-task-034'],
  },
  {
    id: 'shift-handoff-task-036',
    title: 'Train new caregiver on module (ShiftHandoff #36)',
    description: 'CareNest operational task for shift-handoff: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm shift-handoff context #36',
      'Capture outcome for shift-handoff task 36',
      'Log follow-up owner for shift-handoff-36',
    ],
    dependsOn: ['shift-handoff-task-035'],
  },
  {
    id: 'shift-handoff-task-037',
    title: 'Verify device integrations (ShiftHandoff #37)',
    description: 'CareNest operational task for shift-handoff: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm shift-handoff context #37',
      'Capture outcome for shift-handoff task 37',
      'Log follow-up owner for shift-handoff-37',
    ],
    dependsOn: ['shift-handoff-task-036'],
  },
  {
    id: 'shift-handoff-task-038',
    title: 'Spot-check critical priorities (ShiftHandoff #38)',
    description: 'CareNest operational task for shift-handoff: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm shift-handoff context #38',
      'Capture outcome for shift-handoff task 38',
      'Log follow-up owner for shift-handoff-38',
    ],
    dependsOn: ['shift-handoff-task-037'],
  },
  {
    id: 'shift-handoff-task-039',
    title: 'Align meal / care constraints (ShiftHandoff #39)',
    description: 'CareNest operational task for shift-handoff: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm shift-handoff context #39',
      'Capture outcome for shift-handoff task 39',
      'Log follow-up owner for shift-handoff-39',
    ],
    dependsOn: ['shift-handoff-task-038'],
  },
  {
    id: 'shift-handoff-task-040',
    title: 'Publish dashboard widgets (ShiftHandoff #40)',
    description: 'CareNest operational task for shift-handoff: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm shift-handoff context #40',
      'Capture outcome for shift-handoff task 40',
      'Log follow-up owner for shift-handoff-40',
    ],
    dependsOn: ['shift-handoff-task-039'],
  },
  {
    id: 'shift-handoff-task-041',
    title: 'Review overnight notes (ShiftHandoff #41)',
    description: 'CareNest operational task for shift-handoff: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm shift-handoff context #41',
      'Capture outcome for shift-handoff task 41',
      'Log follow-up owner for shift-handoff-41',
    ],
    dependsOn: ['shift-handoff-task-040'],
  },
  {
    id: 'shift-handoff-task-042',
    title: 'Reconcile open items (ShiftHandoff #42)',
    description: 'CareNest operational task for shift-handoff: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm shift-handoff context #42',
      'Capture outcome for shift-handoff task 42',
      'Log follow-up owner for shift-handoff-42',
    ],
    dependsOn: ['shift-handoff-task-041'],
  },
  {
    id: 'shift-handoff-task-043',
    title: 'Escalate overdue cases (ShiftHandoff #43)',
    description: 'CareNest operational task for shift-handoff: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm shift-handoff context #43',
      'Capture outcome for shift-handoff task 43',
      'Log follow-up owner for shift-handoff-43',
    ],
    dependsOn: ['shift-handoff-task-042'],
  },
  {
    id: 'shift-handoff-task-044',
    title: 'Prepare family update (ShiftHandoff #44)',
    description: 'CareNest operational task for shift-handoff: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm shift-handoff context #44',
      'Capture outcome for shift-handoff task 44',
      'Log follow-up owner for shift-handoff-44',
    ],
    dependsOn: ['shift-handoff-task-043'],
  },
  {
    id: 'shift-handoff-task-045',
    title: 'Audit documentation completeness (ShiftHandoff #45)',
    description: 'CareNest operational task for shift-handoff: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm shift-handoff context #45',
      'Capture outcome for shift-handoff task 45',
      'Log follow-up owner for shift-handoff-45',
    ],
    dependsOn: ['shift-handoff-task-044'],
  },
  {
    id: 'shift-handoff-task-046',
    title: 'Sync with pharmacy / vendor (ShiftHandoff #46)',
    description: 'CareNest operational task for shift-handoff: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm shift-handoff context #46',
      'Capture outcome for shift-handoff task 46',
      'Log follow-up owner for shift-handoff-46',
    ],
    dependsOn: ['shift-handoff-task-045'],
  },
  {
    id: 'shift-handoff-task-047',
    title: 'Validate schedule conflicts (ShiftHandoff #47)',
    description: 'CareNest operational task for shift-handoff: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm shift-handoff context #47',
      'Capture outcome for shift-handoff task 47',
      'Log follow-up owner for shift-handoff-47',
    ],
    dependsOn: ['shift-handoff-task-046'],
  },
  {
    id: 'shift-handoff-task-048',
    title: 'Close completed workflows (ShiftHandoff #48)',
    description: 'CareNest operational task for shift-handoff: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm shift-handoff context #48',
      'Capture outcome for shift-handoff task 48',
      'Log follow-up owner for shift-handoff-48',
    ],
    dependsOn: ['shift-handoff-task-047'],
  },
  {
    id: 'shift-handoff-task-049',
    title: 'Generate shift handoff summary (ShiftHandoff #49)',
    description: 'CareNest operational task for shift-handoff: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm shift-handoff context #49',
      'Capture outcome for shift-handoff task 49',
      'Log follow-up owner for shift-handoff-49',
    ],
    dependsOn: ['shift-handoff-task-048'],
  },
  {
    id: 'shift-handoff-task-050',
    title: 'Confirm consent / privacy flags (ShiftHandoff #50)',
    description: 'CareNest operational task for shift-handoff: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm shift-handoff context #50',
      'Capture outcome for shift-handoff task 50',
      'Log follow-up owner for shift-handoff-50',
    ],
    dependsOn: ['shift-handoff-task-049'],
  },
  {
    id: 'shift-handoff-task-051',
    title: 'Run compliance checklist (ShiftHandoff #51)',
    description: 'CareNest operational task for shift-handoff: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm shift-handoff context #51',
      'Capture outcome for shift-handoff task 51',
      'Log follow-up owner for shift-handoff-51',
    ],
    dependsOn: ['shift-handoff-task-050'],
  },
  {
    id: 'shift-handoff-task-052',
    title: 'Update risk scores (ShiftHandoff #52)',
    description: 'CareNest operational task for shift-handoff: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm shift-handoff context #52',
      'Capture outcome for shift-handoff task 52',
      'Log follow-up owner for shift-handoff-52',
    ],
    dependsOn: ['shift-handoff-task-051'],
  },
  {
    id: 'shift-handoff-task-053',
    title: 'Notify on-call clinician (ShiftHandoff #53)',
    description: 'CareNest operational task for shift-handoff: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm shift-handoff context #53',
      'Capture outcome for shift-handoff task 53',
      'Log follow-up owner for shift-handoff-53',
    ],
    dependsOn: ['shift-handoff-task-052'],
  },
  {
    id: 'shift-handoff-task-054',
    title: 'Archive stale drafts (ShiftHandoff #54)',
    description: 'CareNest operational task for shift-handoff: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm shift-handoff context #54',
      'Capture outcome for shift-handoff task 54',
      'Log follow-up owner for shift-handoff-54',
    ],
    dependsOn: ['shift-handoff-task-053'],
  },
  {
    id: 'shift-handoff-task-055',
    title: 'Export weekly digest (ShiftHandoff #55)',
    description: 'CareNest operational task for shift-handoff: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm shift-handoff context #55',
      'Capture outcome for shift-handoff task 55',
      'Log follow-up owner for shift-handoff-55',
    ],
    dependsOn: ['shift-handoff-task-054'],
  },
  {
    id: 'shift-handoff-task-056',
    title: 'Train new caregiver on module (ShiftHandoff #56)',
    description: 'CareNest operational task for shift-handoff: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm shift-handoff context #56',
      'Capture outcome for shift-handoff task 56',
      'Log follow-up owner for shift-handoff-56',
    ],
    dependsOn: ['shift-handoff-task-055'],
  },
  {
    id: 'shift-handoff-task-057',
    title: 'Verify device integrations (ShiftHandoff #57)',
    description: 'CareNest operational task for shift-handoff: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm shift-handoff context #57',
      'Capture outcome for shift-handoff task 57',
      'Log follow-up owner for shift-handoff-57',
    ],
    dependsOn: ['shift-handoff-task-056'],
  },
  {
    id: 'shift-handoff-task-058',
    title: 'Spot-check critical priorities (ShiftHandoff #58)',
    description: 'CareNest operational task for shift-handoff: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm shift-handoff context #58',
      'Capture outcome for shift-handoff task 58',
      'Log follow-up owner for shift-handoff-58',
    ],
    dependsOn: ['shift-handoff-task-057'],
  },
  {
    id: 'shift-handoff-task-059',
    title: 'Align meal / care constraints (ShiftHandoff #59)',
    description: 'CareNest operational task for shift-handoff: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm shift-handoff context #59',
      'Capture outcome for shift-handoff task 59',
      'Log follow-up owner for shift-handoff-59',
    ],
    dependsOn: ['shift-handoff-task-058'],
  },
  {
    id: 'shift-handoff-task-060',
    title: 'Publish dashboard widgets (ShiftHandoff #60)',
    description: 'CareNest operational task for shift-handoff: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm shift-handoff context #60',
      'Capture outcome for shift-handoff task 60',
      'Log follow-up owner for shift-handoff-60',
    ],
    dependsOn: ['shift-handoff-task-059'],
  },
  {
    id: 'shift-handoff-task-061',
    title: 'Review overnight notes (ShiftHandoff #61)',
    description: 'CareNest operational task for shift-handoff: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm shift-handoff context #61',
      'Capture outcome for shift-handoff task 61',
      'Log follow-up owner for shift-handoff-61',
    ],
    dependsOn: ['shift-handoff-task-060'],
  },
  {
    id: 'shift-handoff-task-062',
    title: 'Reconcile open items (ShiftHandoff #62)',
    description: 'CareNest operational task for shift-handoff: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm shift-handoff context #62',
      'Capture outcome for shift-handoff task 62',
      'Log follow-up owner for shift-handoff-62',
    ],
    dependsOn: ['shift-handoff-task-061'],
  },
  {
    id: 'shift-handoff-task-063',
    title: 'Escalate overdue cases (ShiftHandoff #63)',
    description: 'CareNest operational task for shift-handoff: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm shift-handoff context #63',
      'Capture outcome for shift-handoff task 63',
      'Log follow-up owner for shift-handoff-63',
    ],
    dependsOn: ['shift-handoff-task-062'],
  },
  {
    id: 'shift-handoff-task-064',
    title: 'Prepare family update (ShiftHandoff #64)',
    description: 'CareNest operational task for shift-handoff: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm shift-handoff context #64',
      'Capture outcome for shift-handoff task 64',
      'Log follow-up owner for shift-handoff-64',
    ],
    dependsOn: ['shift-handoff-task-063'],
  },
  {
    id: 'shift-handoff-task-065',
    title: 'Audit documentation completeness (ShiftHandoff #65)',
    description: 'CareNest operational task for shift-handoff: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm shift-handoff context #65',
      'Capture outcome for shift-handoff task 65',
      'Log follow-up owner for shift-handoff-65',
    ],
    dependsOn: ['shift-handoff-task-064'],
  },
  {
    id: 'shift-handoff-task-066',
    title: 'Sync with pharmacy / vendor (ShiftHandoff #66)',
    description: 'CareNest operational task for shift-handoff: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm shift-handoff context #66',
      'Capture outcome for shift-handoff task 66',
      'Log follow-up owner for shift-handoff-66',
    ],
    dependsOn: ['shift-handoff-task-065'],
  },
  {
    id: 'shift-handoff-task-067',
    title: 'Validate schedule conflicts (ShiftHandoff #67)',
    description: 'CareNest operational task for shift-handoff: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm shift-handoff context #67',
      'Capture outcome for shift-handoff task 67',
      'Log follow-up owner for shift-handoff-67',
    ],
    dependsOn: ['shift-handoff-task-066'],
  },
  {
    id: 'shift-handoff-task-068',
    title: 'Close completed workflows (ShiftHandoff #68)',
    description: 'CareNest operational task for shift-handoff: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm shift-handoff context #68',
      'Capture outcome for shift-handoff task 68',
      'Log follow-up owner for shift-handoff-68',
    ],
    dependsOn: ['shift-handoff-task-067'],
  },
  {
    id: 'shift-handoff-task-069',
    title: 'Generate shift handoff summary (ShiftHandoff #69)',
    description: 'CareNest operational task for shift-handoff: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm shift-handoff context #69',
      'Capture outcome for shift-handoff task 69',
      'Log follow-up owner for shift-handoff-69',
    ],
    dependsOn: ['shift-handoff-task-068'],
  },
  {
    id: 'shift-handoff-task-070',
    title: 'Confirm consent / privacy flags (ShiftHandoff #70)',
    description: 'CareNest operational task for shift-handoff: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm shift-handoff context #70',
      'Capture outcome for shift-handoff task 70',
      'Log follow-up owner for shift-handoff-70',
    ],
    dependsOn: ['shift-handoff-task-069'],
  },
  {
    id: 'shift-handoff-task-071',
    title: 'Run compliance checklist (ShiftHandoff #71)',
    description: 'CareNest operational task for shift-handoff: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm shift-handoff context #71',
      'Capture outcome for shift-handoff task 71',
      'Log follow-up owner for shift-handoff-71',
    ],
    dependsOn: ['shift-handoff-task-070'],
  },
  {
    id: 'shift-handoff-task-072',
    title: 'Update risk scores (ShiftHandoff #72)',
    description: 'CareNest operational task for shift-handoff: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm shift-handoff context #72',
      'Capture outcome for shift-handoff task 72',
      'Log follow-up owner for shift-handoff-72',
    ],
    dependsOn: ['shift-handoff-task-071'],
  },
  {
    id: 'shift-handoff-task-073',
    title: 'Notify on-call clinician (ShiftHandoff #73)',
    description: 'CareNest operational task for shift-handoff: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm shift-handoff context #73',
      'Capture outcome for shift-handoff task 73',
      'Log follow-up owner for shift-handoff-73',
    ],
    dependsOn: ['shift-handoff-task-072'],
  },
  {
    id: 'shift-handoff-task-074',
    title: 'Archive stale drafts (ShiftHandoff #74)',
    description: 'CareNest operational task for shift-handoff: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm shift-handoff context #74',
      'Capture outcome for shift-handoff task 74',
      'Log follow-up owner for shift-handoff-74',
    ],
    dependsOn: ['shift-handoff-task-073'],
  },
  {
    id: 'shift-handoff-task-075',
    title: 'Export weekly digest (ShiftHandoff #75)',
    description: 'CareNest operational task for shift-handoff: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm shift-handoff context #75',
      'Capture outcome for shift-handoff task 75',
      'Log follow-up owner for shift-handoff-75',
    ],
    dependsOn: ['shift-handoff-task-074'],
  },
  {
    id: 'shift-handoff-task-076',
    title: 'Train new caregiver on module (ShiftHandoff #76)',
    description: 'CareNest operational task for shift-handoff: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm shift-handoff context #76',
      'Capture outcome for shift-handoff task 76',
      'Log follow-up owner for shift-handoff-76',
    ],
    dependsOn: ['shift-handoff-task-075'],
  },
  {
    id: 'shift-handoff-task-077',
    title: 'Verify device integrations (ShiftHandoff #77)',
    description: 'CareNest operational task for shift-handoff: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm shift-handoff context #77',
      'Capture outcome for shift-handoff task 77',
      'Log follow-up owner for shift-handoff-77',
    ],
    dependsOn: ['shift-handoff-task-076'],
  },
  {
    id: 'shift-handoff-task-078',
    title: 'Spot-check critical priorities (ShiftHandoff #78)',
    description: 'CareNest operational task for shift-handoff: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm shift-handoff context #78',
      'Capture outcome for shift-handoff task 78',
      'Log follow-up owner for shift-handoff-78',
    ],
    dependsOn: ['shift-handoff-task-077'],
  },
  {
    id: 'shift-handoff-task-079',
    title: 'Align meal / care constraints (ShiftHandoff #79)',
    description: 'CareNest operational task for shift-handoff: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm shift-handoff context #79',
      'Capture outcome for shift-handoff task 79',
      'Log follow-up owner for shift-handoff-79',
    ],
    dependsOn: ['shift-handoff-task-078'],
  },
  {
    id: 'shift-handoff-task-080',
    title: 'Publish dashboard widgets (ShiftHandoff #80)',
    description: 'CareNest operational task for shift-handoff: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm shift-handoff context #80',
      'Capture outcome for shift-handoff task 80',
      'Log follow-up owner for shift-handoff-80',
    ],
    dependsOn: ['shift-handoff-task-079'],
  },
];

export function listOpenShiftHandoffTasks(): ShiftHandoffTask[] {
  return shiftHandoffTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countShiftHandoffTasksByState(): Record<ShiftHandoffTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of shiftHandoffTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateShiftHandoffWorkload1(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateShiftHandoffWorkload2(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateShiftHandoffWorkload3(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateShiftHandoffWorkload4(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateShiftHandoffWorkload5(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateShiftHandoffWorkload6(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateShiftHandoffWorkload7(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateShiftHandoffWorkload8(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateShiftHandoffWorkload9(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateShiftHandoffWorkload10(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateShiftHandoffWorkload11(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateShiftHandoffWorkload12(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateShiftHandoffWorkload13(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateShiftHandoffWorkload14(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateShiftHandoffWorkload15(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateShiftHandoffWorkload16(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateShiftHandoffWorkload17(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateShiftHandoffWorkload18(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateShiftHandoffWorkload19(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateShiftHandoffWorkload20(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateShiftHandoffWorkload21(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateShiftHandoffWorkload22(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateShiftHandoffWorkload23(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateShiftHandoffWorkload24(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateShiftHandoffWorkload25(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateShiftHandoffWorkload26(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateShiftHandoffWorkload27(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateShiftHandoffWorkload28(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateShiftHandoffWorkload29(tasks: ShiftHandoffTask[] = shiftHandoffTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
