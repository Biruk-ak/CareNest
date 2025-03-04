/** Operational task catalog for QualityMetrics */

export type QualityMetricsTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface QualityMetricsTask {
  id: string;
  title: string;
  description: string;
  state: QualityMetricsTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const qualityMetricsTaskCatalog: QualityMetricsTask[] = [
  {
    id: 'quality-metrics-task-001',
    title: 'Review overnight notes (QualityMetrics #1)',
    description: 'CareNest operational task for quality-metrics: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm quality-metrics context #1',
      'Capture outcome for quality-metrics task 1',
      'Log follow-up owner for quality-metrics-1',
    ],
    dependsOn: [],
  },
  {
    id: 'quality-metrics-task-002',
    title: 'Reconcile open items (QualityMetrics #2)',
    description: 'CareNest operational task for quality-metrics: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm quality-metrics context #2',
      'Capture outcome for quality-metrics task 2',
      'Log follow-up owner for quality-metrics-2',
    ],
    dependsOn: ['quality-metrics-task-001'],
  },
  {
    id: 'quality-metrics-task-003',
    title: 'Escalate overdue cases (QualityMetrics #3)',
    description: 'CareNest operational task for quality-metrics: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm quality-metrics context #3',
      'Capture outcome for quality-metrics task 3',
      'Log follow-up owner for quality-metrics-3',
    ],
    dependsOn: ['quality-metrics-task-002'],
  },
  {
    id: 'quality-metrics-task-004',
    title: 'Prepare family update (QualityMetrics #4)',
    description: 'CareNest operational task for quality-metrics: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm quality-metrics context #4',
      'Capture outcome for quality-metrics task 4',
      'Log follow-up owner for quality-metrics-4',
    ],
    dependsOn: ['quality-metrics-task-003'],
  },
  {
    id: 'quality-metrics-task-005',
    title: 'Audit documentation completeness (QualityMetrics #5)',
    description: 'CareNest operational task for quality-metrics: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm quality-metrics context #5',
      'Capture outcome for quality-metrics task 5',
      'Log follow-up owner for quality-metrics-5',
    ],
    dependsOn: ['quality-metrics-task-004'],
  },
  {
    id: 'quality-metrics-task-006',
    title: 'Sync with pharmacy / vendor (QualityMetrics #6)',
    description: 'CareNest operational task for quality-metrics: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm quality-metrics context #6',
      'Capture outcome for quality-metrics task 6',
      'Log follow-up owner for quality-metrics-6',
    ],
    dependsOn: ['quality-metrics-task-005'],
  },
  {
    id: 'quality-metrics-task-007',
    title: 'Validate schedule conflicts (QualityMetrics #7)',
    description: 'CareNest operational task for quality-metrics: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm quality-metrics context #7',
      'Capture outcome for quality-metrics task 7',
      'Log follow-up owner for quality-metrics-7',
    ],
    dependsOn: ['quality-metrics-task-006'],
  },
  {
    id: 'quality-metrics-task-008',
    title: 'Close completed workflows (QualityMetrics #8)',
    description: 'CareNest operational task for quality-metrics: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm quality-metrics context #8',
      'Capture outcome for quality-metrics task 8',
      'Log follow-up owner for quality-metrics-8',
    ],
    dependsOn: ['quality-metrics-task-007'],
  },
  {
    id: 'quality-metrics-task-009',
    title: 'Generate shift handoff summary (QualityMetrics #9)',
    description: 'CareNest operational task for quality-metrics: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm quality-metrics context #9',
      'Capture outcome for quality-metrics task 9',
      'Log follow-up owner for quality-metrics-9',
    ],
    dependsOn: ['quality-metrics-task-008'],
  },
  {
    id: 'quality-metrics-task-010',
    title: 'Confirm consent / privacy flags (QualityMetrics #10)',
    description: 'CareNest operational task for quality-metrics: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm quality-metrics context #10',
      'Capture outcome for quality-metrics task 10',
      'Log follow-up owner for quality-metrics-10',
    ],
    dependsOn: ['quality-metrics-task-009'],
  },
  {
    id: 'quality-metrics-task-011',
    title: 'Run compliance checklist (QualityMetrics #11)',
    description: 'CareNest operational task for quality-metrics: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm quality-metrics context #11',
      'Capture outcome for quality-metrics task 11',
      'Log follow-up owner for quality-metrics-11',
    ],
    dependsOn: ['quality-metrics-task-010'],
  },
  {
    id: 'quality-metrics-task-012',
    title: 'Update risk scores (QualityMetrics #12)',
    description: 'CareNest operational task for quality-metrics: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm quality-metrics context #12',
      'Capture outcome for quality-metrics task 12',
      'Log follow-up owner for quality-metrics-12',
    ],
    dependsOn: ['quality-metrics-task-011'],
  },
  {
    id: 'quality-metrics-task-013',
    title: 'Notify on-call clinician (QualityMetrics #13)',
    description: 'CareNest operational task for quality-metrics: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm quality-metrics context #13',
      'Capture outcome for quality-metrics task 13',
      'Log follow-up owner for quality-metrics-13',
    ],
    dependsOn: ['quality-metrics-task-012'],
  },
  {
    id: 'quality-metrics-task-014',
    title: 'Archive stale drafts (QualityMetrics #14)',
    description: 'CareNest operational task for quality-metrics: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm quality-metrics context #14',
      'Capture outcome for quality-metrics task 14',
      'Log follow-up owner for quality-metrics-14',
    ],
    dependsOn: ['quality-metrics-task-013'],
  },
  {
    id: 'quality-metrics-task-015',
    title: 'Export weekly digest (QualityMetrics #15)',
    description: 'CareNest operational task for quality-metrics: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm quality-metrics context #15',
      'Capture outcome for quality-metrics task 15',
      'Log follow-up owner for quality-metrics-15',
    ],
    dependsOn: ['quality-metrics-task-014'],
  },
  {
    id: 'quality-metrics-task-016',
    title: 'Train new caregiver on module (QualityMetrics #16)',
    description: 'CareNest operational task for quality-metrics: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm quality-metrics context #16',
      'Capture outcome for quality-metrics task 16',
      'Log follow-up owner for quality-metrics-16',
    ],
    dependsOn: ['quality-metrics-task-015'],
  },
  {
    id: 'quality-metrics-task-017',
    title: 'Verify device integrations (QualityMetrics #17)',
    description: 'CareNest operational task for quality-metrics: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm quality-metrics context #17',
      'Capture outcome for quality-metrics task 17',
      'Log follow-up owner for quality-metrics-17',
    ],
    dependsOn: ['quality-metrics-task-016'],
  },
  {
    id: 'quality-metrics-task-018',
    title: 'Spot-check critical priorities (QualityMetrics #18)',
    description: 'CareNest operational task for quality-metrics: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm quality-metrics context #18',
      'Capture outcome for quality-metrics task 18',
      'Log follow-up owner for quality-metrics-18',
    ],
    dependsOn: ['quality-metrics-task-017'],
  },
  {
    id: 'quality-metrics-task-019',
    title: 'Align meal / care constraints (QualityMetrics #19)',
    description: 'CareNest operational task for quality-metrics: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm quality-metrics context #19',
      'Capture outcome for quality-metrics task 19',
      'Log follow-up owner for quality-metrics-19',
    ],
    dependsOn: ['quality-metrics-task-018'],
  },
  {
    id: 'quality-metrics-task-020',
    title: 'Publish dashboard widgets (QualityMetrics #20)',
    description: 'CareNest operational task for quality-metrics: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm quality-metrics context #20',
      'Capture outcome for quality-metrics task 20',
      'Log follow-up owner for quality-metrics-20',
    ],
    dependsOn: ['quality-metrics-task-019'],
  },
  {
    id: 'quality-metrics-task-021',
    title: 'Review overnight notes (QualityMetrics #21)',
    description: 'CareNest operational task for quality-metrics: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm quality-metrics context #21',
      'Capture outcome for quality-metrics task 21',
      'Log follow-up owner for quality-metrics-21',
    ],
    dependsOn: ['quality-metrics-task-020'],
  },
  {
    id: 'quality-metrics-task-022',
    title: 'Reconcile open items (QualityMetrics #22)',
    description: 'CareNest operational task for quality-metrics: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm quality-metrics context #22',
      'Capture outcome for quality-metrics task 22',
      'Log follow-up owner for quality-metrics-22',
    ],
    dependsOn: ['quality-metrics-task-021'],
  },
  {
    id: 'quality-metrics-task-023',
    title: 'Escalate overdue cases (QualityMetrics #23)',
    description: 'CareNest operational task for quality-metrics: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm quality-metrics context #23',
      'Capture outcome for quality-metrics task 23',
      'Log follow-up owner for quality-metrics-23',
    ],
    dependsOn: ['quality-metrics-task-022'],
  },
  {
    id: 'quality-metrics-task-024',
    title: 'Prepare family update (QualityMetrics #24)',
    description: 'CareNest operational task for quality-metrics: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm quality-metrics context #24',
      'Capture outcome for quality-metrics task 24',
      'Log follow-up owner for quality-metrics-24',
    ],
    dependsOn: ['quality-metrics-task-023'],
  },
  {
    id: 'quality-metrics-task-025',
    title: 'Audit documentation completeness (QualityMetrics #25)',
    description: 'CareNest operational task for quality-metrics: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm quality-metrics context #25',
      'Capture outcome for quality-metrics task 25',
      'Log follow-up owner for quality-metrics-25',
    ],
    dependsOn: ['quality-metrics-task-024'],
  },
  {
    id: 'quality-metrics-task-026',
    title: 'Sync with pharmacy / vendor (QualityMetrics #26)',
    description: 'CareNest operational task for quality-metrics: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm quality-metrics context #26',
      'Capture outcome for quality-metrics task 26',
      'Log follow-up owner for quality-metrics-26',
    ],
    dependsOn: ['quality-metrics-task-025'],
  },
  {
    id: 'quality-metrics-task-027',
    title: 'Validate schedule conflicts (QualityMetrics #27)',
    description: 'CareNest operational task for quality-metrics: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm quality-metrics context #27',
      'Capture outcome for quality-metrics task 27',
      'Log follow-up owner for quality-metrics-27',
    ],
    dependsOn: ['quality-metrics-task-026'],
  },
  {
    id: 'quality-metrics-task-028',
    title: 'Close completed workflows (QualityMetrics #28)',
    description: 'CareNest operational task for quality-metrics: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm quality-metrics context #28',
      'Capture outcome for quality-metrics task 28',
      'Log follow-up owner for quality-metrics-28',
    ],
    dependsOn: ['quality-metrics-task-027'],
  },
  {
    id: 'quality-metrics-task-029',
    title: 'Generate shift handoff summary (QualityMetrics #29)',
    description: 'CareNest operational task for quality-metrics: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm quality-metrics context #29',
      'Capture outcome for quality-metrics task 29',
      'Log follow-up owner for quality-metrics-29',
    ],
    dependsOn: ['quality-metrics-task-028'],
  },
  {
    id: 'quality-metrics-task-030',
    title: 'Confirm consent / privacy flags (QualityMetrics #30)',
    description: 'CareNest operational task for quality-metrics: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm quality-metrics context #30',
      'Capture outcome for quality-metrics task 30',
      'Log follow-up owner for quality-metrics-30',
    ],
    dependsOn: ['quality-metrics-task-029'],
  },
  {
    id: 'quality-metrics-task-031',
    title: 'Run compliance checklist (QualityMetrics #31)',
    description: 'CareNest operational task for quality-metrics: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm quality-metrics context #31',
      'Capture outcome for quality-metrics task 31',
      'Log follow-up owner for quality-metrics-31',
    ],
    dependsOn: ['quality-metrics-task-030'],
  },
  {
    id: 'quality-metrics-task-032',
    title: 'Update risk scores (QualityMetrics #32)',
    description: 'CareNest operational task for quality-metrics: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm quality-metrics context #32',
      'Capture outcome for quality-metrics task 32',
      'Log follow-up owner for quality-metrics-32',
    ],
    dependsOn: ['quality-metrics-task-031'],
  },
  {
    id: 'quality-metrics-task-033',
    title: 'Notify on-call clinician (QualityMetrics #33)',
    description: 'CareNest operational task for quality-metrics: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm quality-metrics context #33',
      'Capture outcome for quality-metrics task 33',
      'Log follow-up owner for quality-metrics-33',
    ],
    dependsOn: ['quality-metrics-task-032'],
  },
  {
    id: 'quality-metrics-task-034',
    title: 'Archive stale drafts (QualityMetrics #34)',
    description: 'CareNest operational task for quality-metrics: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm quality-metrics context #34',
      'Capture outcome for quality-metrics task 34',
      'Log follow-up owner for quality-metrics-34',
    ],
    dependsOn: ['quality-metrics-task-033'],
  },
  {
    id: 'quality-metrics-task-035',
    title: 'Export weekly digest (QualityMetrics #35)',
    description: 'CareNest operational task for quality-metrics: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm quality-metrics context #35',
      'Capture outcome for quality-metrics task 35',
      'Log follow-up owner for quality-metrics-35',
    ],
    dependsOn: ['quality-metrics-task-034'],
  },
  {
    id: 'quality-metrics-task-036',
    title: 'Train new caregiver on module (QualityMetrics #36)',
    description: 'CareNest operational task for quality-metrics: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm quality-metrics context #36',
      'Capture outcome for quality-metrics task 36',
      'Log follow-up owner for quality-metrics-36',
    ],
    dependsOn: ['quality-metrics-task-035'],
  },
  {
    id: 'quality-metrics-task-037',
    title: 'Verify device integrations (QualityMetrics #37)',
    description: 'CareNest operational task for quality-metrics: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm quality-metrics context #37',
      'Capture outcome for quality-metrics task 37',
      'Log follow-up owner for quality-metrics-37',
    ],
    dependsOn: ['quality-metrics-task-036'],
  },
  {
    id: 'quality-metrics-task-038',
    title: 'Spot-check critical priorities (QualityMetrics #38)',
    description: 'CareNest operational task for quality-metrics: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm quality-metrics context #38',
      'Capture outcome for quality-metrics task 38',
      'Log follow-up owner for quality-metrics-38',
    ],
    dependsOn: ['quality-metrics-task-037'],
  },
  {
    id: 'quality-metrics-task-039',
    title: 'Align meal / care constraints (QualityMetrics #39)',
    description: 'CareNest operational task for quality-metrics: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm quality-metrics context #39',
      'Capture outcome for quality-metrics task 39',
      'Log follow-up owner for quality-metrics-39',
    ],
    dependsOn: ['quality-metrics-task-038'],
  },
  {
    id: 'quality-metrics-task-040',
    title: 'Publish dashboard widgets (QualityMetrics #40)',
    description: 'CareNest operational task for quality-metrics: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm quality-metrics context #40',
      'Capture outcome for quality-metrics task 40',
      'Log follow-up owner for quality-metrics-40',
    ],
    dependsOn: ['quality-metrics-task-039'],
  },
  {
    id: 'quality-metrics-task-041',
    title: 'Review overnight notes (QualityMetrics #41)',
    description: 'CareNest operational task for quality-metrics: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm quality-metrics context #41',
      'Capture outcome for quality-metrics task 41',
      'Log follow-up owner for quality-metrics-41',
    ],
    dependsOn: ['quality-metrics-task-040'],
  },
  {
    id: 'quality-metrics-task-042',
    title: 'Reconcile open items (QualityMetrics #42)',
    description: 'CareNest operational task for quality-metrics: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm quality-metrics context #42',
      'Capture outcome for quality-metrics task 42',
      'Log follow-up owner for quality-metrics-42',
    ],
    dependsOn: ['quality-metrics-task-041'],
  },
  {
    id: 'quality-metrics-task-043',
    title: 'Escalate overdue cases (QualityMetrics #43)',
    description: 'CareNest operational task for quality-metrics: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm quality-metrics context #43',
      'Capture outcome for quality-metrics task 43',
      'Log follow-up owner for quality-metrics-43',
    ],
    dependsOn: ['quality-metrics-task-042'],
  },
  {
    id: 'quality-metrics-task-044',
    title: 'Prepare family update (QualityMetrics #44)',
    description: 'CareNest operational task for quality-metrics: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm quality-metrics context #44',
      'Capture outcome for quality-metrics task 44',
      'Log follow-up owner for quality-metrics-44',
    ],
    dependsOn: ['quality-metrics-task-043'],
  },
  {
    id: 'quality-metrics-task-045',
    title: 'Audit documentation completeness (QualityMetrics #45)',
    description: 'CareNest operational task for quality-metrics: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm quality-metrics context #45',
      'Capture outcome for quality-metrics task 45',
      'Log follow-up owner for quality-metrics-45',
    ],
    dependsOn: ['quality-metrics-task-044'],
  },
  {
    id: 'quality-metrics-task-046',
    title: 'Sync with pharmacy / vendor (QualityMetrics #46)',
    description: 'CareNest operational task for quality-metrics: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm quality-metrics context #46',
      'Capture outcome for quality-metrics task 46',
      'Log follow-up owner for quality-metrics-46',
    ],
    dependsOn: ['quality-metrics-task-045'],
  },
  {
    id: 'quality-metrics-task-047',
    title: 'Validate schedule conflicts (QualityMetrics #47)',
    description: 'CareNest operational task for quality-metrics: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm quality-metrics context #47',
      'Capture outcome for quality-metrics task 47',
      'Log follow-up owner for quality-metrics-47',
    ],
    dependsOn: ['quality-metrics-task-046'],
  },
  {
    id: 'quality-metrics-task-048',
    title: 'Close completed workflows (QualityMetrics #48)',
    description: 'CareNest operational task for quality-metrics: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm quality-metrics context #48',
      'Capture outcome for quality-metrics task 48',
      'Log follow-up owner for quality-metrics-48',
    ],
    dependsOn: ['quality-metrics-task-047'],
  },
  {
    id: 'quality-metrics-task-049',
    title: 'Generate shift handoff summary (QualityMetrics #49)',
    description: 'CareNest operational task for quality-metrics: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm quality-metrics context #49',
      'Capture outcome for quality-metrics task 49',
      'Log follow-up owner for quality-metrics-49',
    ],
    dependsOn: ['quality-metrics-task-048'],
  },
  {
    id: 'quality-metrics-task-050',
    title: 'Confirm consent / privacy flags (QualityMetrics #50)',
    description: 'CareNest operational task for quality-metrics: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm quality-metrics context #50',
      'Capture outcome for quality-metrics task 50',
      'Log follow-up owner for quality-metrics-50',
    ],
    dependsOn: ['quality-metrics-task-049'],
  },
  {
    id: 'quality-metrics-task-051',
    title: 'Run compliance checklist (QualityMetrics #51)',
    description: 'CareNest operational task for quality-metrics: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm quality-metrics context #51',
      'Capture outcome for quality-metrics task 51',
      'Log follow-up owner for quality-metrics-51',
    ],
    dependsOn: ['quality-metrics-task-050'],
  },
  {
    id: 'quality-metrics-task-052',
    title: 'Update risk scores (QualityMetrics #52)',
    description: 'CareNest operational task for quality-metrics: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm quality-metrics context #52',
      'Capture outcome for quality-metrics task 52',
      'Log follow-up owner for quality-metrics-52',
    ],
    dependsOn: ['quality-metrics-task-051'],
  },
  {
    id: 'quality-metrics-task-053',
    title: 'Notify on-call clinician (QualityMetrics #53)',
    description: 'CareNest operational task for quality-metrics: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm quality-metrics context #53',
      'Capture outcome for quality-metrics task 53',
      'Log follow-up owner for quality-metrics-53',
    ],
    dependsOn: ['quality-metrics-task-052'],
  },
  {
    id: 'quality-metrics-task-054',
    title: 'Archive stale drafts (QualityMetrics #54)',
    description: 'CareNest operational task for quality-metrics: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm quality-metrics context #54',
      'Capture outcome for quality-metrics task 54',
      'Log follow-up owner for quality-metrics-54',
    ],
    dependsOn: ['quality-metrics-task-053'],
  },
  {
    id: 'quality-metrics-task-055',
    title: 'Export weekly digest (QualityMetrics #55)',
    description: 'CareNest operational task for quality-metrics: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm quality-metrics context #55',
      'Capture outcome for quality-metrics task 55',
      'Log follow-up owner for quality-metrics-55',
    ],
    dependsOn: ['quality-metrics-task-054'],
  },
  {
    id: 'quality-metrics-task-056',
    title: 'Train new caregiver on module (QualityMetrics #56)',
    description: 'CareNest operational task for quality-metrics: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm quality-metrics context #56',
      'Capture outcome for quality-metrics task 56',
      'Log follow-up owner for quality-metrics-56',
    ],
    dependsOn: ['quality-metrics-task-055'],
  },
  {
    id: 'quality-metrics-task-057',
    title: 'Verify device integrations (QualityMetrics #57)',
    description: 'CareNest operational task for quality-metrics: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm quality-metrics context #57',
      'Capture outcome for quality-metrics task 57',
      'Log follow-up owner for quality-metrics-57',
    ],
    dependsOn: ['quality-metrics-task-056'],
  },
  {
    id: 'quality-metrics-task-058',
    title: 'Spot-check critical priorities (QualityMetrics #58)',
    description: 'CareNest operational task for quality-metrics: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm quality-metrics context #58',
      'Capture outcome for quality-metrics task 58',
      'Log follow-up owner for quality-metrics-58',
    ],
    dependsOn: ['quality-metrics-task-057'],
  },
  {
    id: 'quality-metrics-task-059',
    title: 'Align meal / care constraints (QualityMetrics #59)',
    description: 'CareNest operational task for quality-metrics: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm quality-metrics context #59',
      'Capture outcome for quality-metrics task 59',
      'Log follow-up owner for quality-metrics-59',
    ],
    dependsOn: ['quality-metrics-task-058'],
  },
  {
    id: 'quality-metrics-task-060',
    title: 'Publish dashboard widgets (QualityMetrics #60)',
    description: 'CareNest operational task for quality-metrics: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm quality-metrics context #60',
      'Capture outcome for quality-metrics task 60',
      'Log follow-up owner for quality-metrics-60',
    ],
    dependsOn: ['quality-metrics-task-059'],
  },
  {
    id: 'quality-metrics-task-061',
    title: 'Review overnight notes (QualityMetrics #61)',
    description: 'CareNest operational task for quality-metrics: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm quality-metrics context #61',
      'Capture outcome for quality-metrics task 61',
      'Log follow-up owner for quality-metrics-61',
    ],
    dependsOn: ['quality-metrics-task-060'],
  },
  {
    id: 'quality-metrics-task-062',
    title: 'Reconcile open items (QualityMetrics #62)',
    description: 'CareNest operational task for quality-metrics: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm quality-metrics context #62',
      'Capture outcome for quality-metrics task 62',
      'Log follow-up owner for quality-metrics-62',
    ],
    dependsOn: ['quality-metrics-task-061'],
  },
  {
    id: 'quality-metrics-task-063',
    title: 'Escalate overdue cases (QualityMetrics #63)',
    description: 'CareNest operational task for quality-metrics: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm quality-metrics context #63',
      'Capture outcome for quality-metrics task 63',
      'Log follow-up owner for quality-metrics-63',
    ],
    dependsOn: ['quality-metrics-task-062'],
  },
  {
    id: 'quality-metrics-task-064',
    title: 'Prepare family update (QualityMetrics #64)',
    description: 'CareNest operational task for quality-metrics: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm quality-metrics context #64',
      'Capture outcome for quality-metrics task 64',
      'Log follow-up owner for quality-metrics-64',
    ],
    dependsOn: ['quality-metrics-task-063'],
  },
  {
    id: 'quality-metrics-task-065',
    title: 'Audit documentation completeness (QualityMetrics #65)',
    description: 'CareNest operational task for quality-metrics: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm quality-metrics context #65',
      'Capture outcome for quality-metrics task 65',
      'Log follow-up owner for quality-metrics-65',
    ],
    dependsOn: ['quality-metrics-task-064'],
  },
  {
    id: 'quality-metrics-task-066',
    title: 'Sync with pharmacy / vendor (QualityMetrics #66)',
    description: 'CareNest operational task for quality-metrics: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm quality-metrics context #66',
      'Capture outcome for quality-metrics task 66',
      'Log follow-up owner for quality-metrics-66',
    ],
    dependsOn: ['quality-metrics-task-065'],
  },
  {
    id: 'quality-metrics-task-067',
    title: 'Validate schedule conflicts (QualityMetrics #67)',
    description: 'CareNest operational task for quality-metrics: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm quality-metrics context #67',
      'Capture outcome for quality-metrics task 67',
      'Log follow-up owner for quality-metrics-67',
    ],
    dependsOn: ['quality-metrics-task-066'],
  },
  {
    id: 'quality-metrics-task-068',
    title: 'Close completed workflows (QualityMetrics #68)',
    description: 'CareNest operational task for quality-metrics: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm quality-metrics context #68',
      'Capture outcome for quality-metrics task 68',
      'Log follow-up owner for quality-metrics-68',
    ],
    dependsOn: ['quality-metrics-task-067'],
  },
  {
    id: 'quality-metrics-task-069',
    title: 'Generate shift handoff summary (QualityMetrics #69)',
    description: 'CareNest operational task for quality-metrics: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm quality-metrics context #69',
      'Capture outcome for quality-metrics task 69',
      'Log follow-up owner for quality-metrics-69',
    ],
    dependsOn: ['quality-metrics-task-068'],
  },
  {
    id: 'quality-metrics-task-070',
    title: 'Confirm consent / privacy flags (QualityMetrics #70)',
    description: 'CareNest operational task for quality-metrics: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm quality-metrics context #70',
      'Capture outcome for quality-metrics task 70',
      'Log follow-up owner for quality-metrics-70',
    ],
    dependsOn: ['quality-metrics-task-069'],
  },
  {
    id: 'quality-metrics-task-071',
    title: 'Run compliance checklist (QualityMetrics #71)',
    description: 'CareNest operational task for quality-metrics: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm quality-metrics context #71',
      'Capture outcome for quality-metrics task 71',
      'Log follow-up owner for quality-metrics-71',
    ],
    dependsOn: ['quality-metrics-task-070'],
  },
  {
    id: 'quality-metrics-task-072',
    title: 'Update risk scores (QualityMetrics #72)',
    description: 'CareNest operational task for quality-metrics: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm quality-metrics context #72',
      'Capture outcome for quality-metrics task 72',
      'Log follow-up owner for quality-metrics-72',
    ],
    dependsOn: ['quality-metrics-task-071'],
  },
  {
    id: 'quality-metrics-task-073',
    title: 'Notify on-call clinician (QualityMetrics #73)',
    description: 'CareNest operational task for quality-metrics: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm quality-metrics context #73',
      'Capture outcome for quality-metrics task 73',
      'Log follow-up owner for quality-metrics-73',
    ],
    dependsOn: ['quality-metrics-task-072'],
  },
  {
    id: 'quality-metrics-task-074',
    title: 'Archive stale drafts (QualityMetrics #74)',
    description: 'CareNest operational task for quality-metrics: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm quality-metrics context #74',
      'Capture outcome for quality-metrics task 74',
      'Log follow-up owner for quality-metrics-74',
    ],
    dependsOn: ['quality-metrics-task-073'],
  },
  {
    id: 'quality-metrics-task-075',
    title: 'Export weekly digest (QualityMetrics #75)',
    description: 'CareNest operational task for quality-metrics: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm quality-metrics context #75',
      'Capture outcome for quality-metrics task 75',
      'Log follow-up owner for quality-metrics-75',
    ],
    dependsOn: ['quality-metrics-task-074'],
  },
  {
    id: 'quality-metrics-task-076',
    title: 'Train new caregiver on module (QualityMetrics #76)',
    description: 'CareNest operational task for quality-metrics: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm quality-metrics context #76',
      'Capture outcome for quality-metrics task 76',
      'Log follow-up owner for quality-metrics-76',
    ],
    dependsOn: ['quality-metrics-task-075'],
  },
  {
    id: 'quality-metrics-task-077',
    title: 'Verify device integrations (QualityMetrics #77)',
    description: 'CareNest operational task for quality-metrics: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm quality-metrics context #77',
      'Capture outcome for quality-metrics task 77',
      'Log follow-up owner for quality-metrics-77',
    ],
    dependsOn: ['quality-metrics-task-076'],
  },
  {
    id: 'quality-metrics-task-078',
    title: 'Spot-check critical priorities (QualityMetrics #78)',
    description: 'CareNest operational task for quality-metrics: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm quality-metrics context #78',
      'Capture outcome for quality-metrics task 78',
      'Log follow-up owner for quality-metrics-78',
    ],
    dependsOn: ['quality-metrics-task-077'],
  },
  {
    id: 'quality-metrics-task-079',
    title: 'Align meal / care constraints (QualityMetrics #79)',
    description: 'CareNest operational task for quality-metrics: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm quality-metrics context #79',
      'Capture outcome for quality-metrics task 79',
      'Log follow-up owner for quality-metrics-79',
    ],
    dependsOn: ['quality-metrics-task-078'],
  },
  {
    id: 'quality-metrics-task-080',
    title: 'Publish dashboard widgets (QualityMetrics #80)',
    description: 'CareNest operational task for quality-metrics: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm quality-metrics context #80',
      'Capture outcome for quality-metrics task 80',
      'Log follow-up owner for quality-metrics-80',
    ],
    dependsOn: ['quality-metrics-task-079'],
  },
];

export function listOpenQualityMetricsTasks(): QualityMetricsTask[] {
  return qualityMetricsTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countQualityMetricsTasksByState(): Record<QualityMetricsTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of qualityMetricsTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateQualityMetricsWorkload1(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateQualityMetricsWorkload2(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateQualityMetricsWorkload3(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateQualityMetricsWorkload4(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateQualityMetricsWorkload5(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateQualityMetricsWorkload6(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateQualityMetricsWorkload7(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateQualityMetricsWorkload8(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateQualityMetricsWorkload9(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateQualityMetricsWorkload10(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateQualityMetricsWorkload11(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateQualityMetricsWorkload12(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateQualityMetricsWorkload13(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateQualityMetricsWorkload14(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateQualityMetricsWorkload15(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateQualityMetricsWorkload16(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateQualityMetricsWorkload17(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateQualityMetricsWorkload18(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateQualityMetricsWorkload19(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateQualityMetricsWorkload20(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateQualityMetricsWorkload21(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateQualityMetricsWorkload22(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateQualityMetricsWorkload23(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateQualityMetricsWorkload24(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateQualityMetricsWorkload25(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateQualityMetricsWorkload26(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateQualityMetricsWorkload27(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateQualityMetricsWorkload28(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateQualityMetricsWorkload29(tasks: QualityMetricsTask[] = qualityMetricsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
