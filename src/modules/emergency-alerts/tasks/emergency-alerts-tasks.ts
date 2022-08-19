/** Operational task catalog for EmergencyAlerts */

export type EmergencyAlertsTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface EmergencyAlertsTask {
  id: string;
  title: string;
  description: string;
  state: EmergencyAlertsTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const emergencyAlertsTaskCatalog: EmergencyAlertsTask[] = [
  {
    id: 'emergency-alerts-task-001',
    title: 'Review overnight notes (EmergencyAlerts #1)',
    description: 'CareNest operational task for emergency-alerts: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm emergency-alerts context #1',
      'Capture outcome for emergency-alerts task 1',
      'Log follow-up owner for emergency-alerts-1',
    ],
    dependsOn: [],
  },
  {
    id: 'emergency-alerts-task-002',
    title: 'Reconcile open items (EmergencyAlerts #2)',
    description: 'CareNest operational task for emergency-alerts: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm emergency-alerts context #2',
      'Capture outcome for emergency-alerts task 2',
      'Log follow-up owner for emergency-alerts-2',
    ],
    dependsOn: ['emergency-alerts-task-001'],
  },
  {
    id: 'emergency-alerts-task-003',
    title: 'Escalate overdue cases (EmergencyAlerts #3)',
    description: 'CareNest operational task for emergency-alerts: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm emergency-alerts context #3',
      'Capture outcome for emergency-alerts task 3',
      'Log follow-up owner for emergency-alerts-3',
    ],
    dependsOn: ['emergency-alerts-task-002'],
  },
  {
    id: 'emergency-alerts-task-004',
    title: 'Prepare family update (EmergencyAlerts #4)',
    description: 'CareNest operational task for emergency-alerts: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm emergency-alerts context #4',
      'Capture outcome for emergency-alerts task 4',
      'Log follow-up owner for emergency-alerts-4',
    ],
    dependsOn: ['emergency-alerts-task-003'],
  },
  {
    id: 'emergency-alerts-task-005',
    title: 'Audit documentation completeness (EmergencyAlerts #5)',
    description: 'CareNest operational task for emergency-alerts: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm emergency-alerts context #5',
      'Capture outcome for emergency-alerts task 5',
      'Log follow-up owner for emergency-alerts-5',
    ],
    dependsOn: ['emergency-alerts-task-004'],
  },
  {
    id: 'emergency-alerts-task-006',
    title: 'Sync with pharmacy / vendor (EmergencyAlerts #6)',
    description: 'CareNest operational task for emergency-alerts: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm emergency-alerts context #6',
      'Capture outcome for emergency-alerts task 6',
      'Log follow-up owner for emergency-alerts-6',
    ],
    dependsOn: ['emergency-alerts-task-005'],
  },
  {
    id: 'emergency-alerts-task-007',
    title: 'Validate schedule conflicts (EmergencyAlerts #7)',
    description: 'CareNest operational task for emergency-alerts: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm emergency-alerts context #7',
      'Capture outcome for emergency-alerts task 7',
      'Log follow-up owner for emergency-alerts-7',
    ],
    dependsOn: ['emergency-alerts-task-006'],
  },
  {
    id: 'emergency-alerts-task-008',
    title: 'Close completed workflows (EmergencyAlerts #8)',
    description: 'CareNest operational task for emergency-alerts: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm emergency-alerts context #8',
      'Capture outcome for emergency-alerts task 8',
      'Log follow-up owner for emergency-alerts-8',
    ],
    dependsOn: ['emergency-alerts-task-007'],
  },
  {
    id: 'emergency-alerts-task-009',
    title: 'Generate shift handoff summary (EmergencyAlerts #9)',
    description: 'CareNest operational task for emergency-alerts: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm emergency-alerts context #9',
      'Capture outcome for emergency-alerts task 9',
      'Log follow-up owner for emergency-alerts-9',
    ],
    dependsOn: ['emergency-alerts-task-008'],
  },
  {
    id: 'emergency-alerts-task-010',
    title: 'Confirm consent / privacy flags (EmergencyAlerts #10)',
    description: 'CareNest operational task for emergency-alerts: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm emergency-alerts context #10',
      'Capture outcome for emergency-alerts task 10',
      'Log follow-up owner for emergency-alerts-10',
    ],
    dependsOn: ['emergency-alerts-task-009'],
  },
  {
    id: 'emergency-alerts-task-011',
    title: 'Run compliance checklist (EmergencyAlerts #11)',
    description: 'CareNest operational task for emergency-alerts: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm emergency-alerts context #11',
      'Capture outcome for emergency-alerts task 11',
      'Log follow-up owner for emergency-alerts-11',
    ],
    dependsOn: ['emergency-alerts-task-010'],
  },
  {
    id: 'emergency-alerts-task-012',
    title: 'Update risk scores (EmergencyAlerts #12)',
    description: 'CareNest operational task for emergency-alerts: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm emergency-alerts context #12',
      'Capture outcome for emergency-alerts task 12',
      'Log follow-up owner for emergency-alerts-12',
    ],
    dependsOn: ['emergency-alerts-task-011'],
  },
  {
    id: 'emergency-alerts-task-013',
    title: 'Notify on-call clinician (EmergencyAlerts #13)',
    description: 'CareNest operational task for emergency-alerts: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm emergency-alerts context #13',
      'Capture outcome for emergency-alerts task 13',
      'Log follow-up owner for emergency-alerts-13',
    ],
    dependsOn: ['emergency-alerts-task-012'],
  },
  {
    id: 'emergency-alerts-task-014',
    title: 'Archive stale drafts (EmergencyAlerts #14)',
    description: 'CareNest operational task for emergency-alerts: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm emergency-alerts context #14',
      'Capture outcome for emergency-alerts task 14',
      'Log follow-up owner for emergency-alerts-14',
    ],
    dependsOn: ['emergency-alerts-task-013'],
  },
  {
    id: 'emergency-alerts-task-015',
    title: 'Export weekly digest (EmergencyAlerts #15)',
    description: 'CareNest operational task for emergency-alerts: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm emergency-alerts context #15',
      'Capture outcome for emergency-alerts task 15',
      'Log follow-up owner for emergency-alerts-15',
    ],
    dependsOn: ['emergency-alerts-task-014'],
  },
  {
    id: 'emergency-alerts-task-016',
    title: 'Train new caregiver on module (EmergencyAlerts #16)',
    description: 'CareNest operational task for emergency-alerts: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm emergency-alerts context #16',
      'Capture outcome for emergency-alerts task 16',
      'Log follow-up owner for emergency-alerts-16',
    ],
    dependsOn: ['emergency-alerts-task-015'],
  },
  {
    id: 'emergency-alerts-task-017',
    title: 'Verify device integrations (EmergencyAlerts #17)',
    description: 'CareNest operational task for emergency-alerts: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm emergency-alerts context #17',
      'Capture outcome for emergency-alerts task 17',
      'Log follow-up owner for emergency-alerts-17',
    ],
    dependsOn: ['emergency-alerts-task-016'],
  },
  {
    id: 'emergency-alerts-task-018',
    title: 'Spot-check critical priorities (EmergencyAlerts #18)',
    description: 'CareNest operational task for emergency-alerts: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm emergency-alerts context #18',
      'Capture outcome for emergency-alerts task 18',
      'Log follow-up owner for emergency-alerts-18',
    ],
    dependsOn: ['emergency-alerts-task-017'],
  },
  {
    id: 'emergency-alerts-task-019',
    title: 'Align meal / care constraints (EmergencyAlerts #19)',
    description: 'CareNest operational task for emergency-alerts: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm emergency-alerts context #19',
      'Capture outcome for emergency-alerts task 19',
      'Log follow-up owner for emergency-alerts-19',
    ],
    dependsOn: ['emergency-alerts-task-018'],
  },
  {
    id: 'emergency-alerts-task-020',
    title: 'Publish dashboard widgets (EmergencyAlerts #20)',
    description: 'CareNest operational task for emergency-alerts: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm emergency-alerts context #20',
      'Capture outcome for emergency-alerts task 20',
      'Log follow-up owner for emergency-alerts-20',
    ],
    dependsOn: ['emergency-alerts-task-019'],
  },
  {
    id: 'emergency-alerts-task-021',
    title: 'Review overnight notes (EmergencyAlerts #21)',
    description: 'CareNest operational task for emergency-alerts: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm emergency-alerts context #21',
      'Capture outcome for emergency-alerts task 21',
      'Log follow-up owner for emergency-alerts-21',
    ],
    dependsOn: ['emergency-alerts-task-020'],
  },
  {
    id: 'emergency-alerts-task-022',
    title: 'Reconcile open items (EmergencyAlerts #22)',
    description: 'CareNest operational task for emergency-alerts: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm emergency-alerts context #22',
      'Capture outcome for emergency-alerts task 22',
      'Log follow-up owner for emergency-alerts-22',
    ],
    dependsOn: ['emergency-alerts-task-021'],
  },
  {
    id: 'emergency-alerts-task-023',
    title: 'Escalate overdue cases (EmergencyAlerts #23)',
    description: 'CareNest operational task for emergency-alerts: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm emergency-alerts context #23',
      'Capture outcome for emergency-alerts task 23',
      'Log follow-up owner for emergency-alerts-23',
    ],
    dependsOn: ['emergency-alerts-task-022'],
  },
  {
    id: 'emergency-alerts-task-024',
    title: 'Prepare family update (EmergencyAlerts #24)',
    description: 'CareNest operational task for emergency-alerts: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm emergency-alerts context #24',
      'Capture outcome for emergency-alerts task 24',
      'Log follow-up owner for emergency-alerts-24',
    ],
    dependsOn: ['emergency-alerts-task-023'],
  },
  {
    id: 'emergency-alerts-task-025',
    title: 'Audit documentation completeness (EmergencyAlerts #25)',
    description: 'CareNest operational task for emergency-alerts: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm emergency-alerts context #25',
      'Capture outcome for emergency-alerts task 25',
      'Log follow-up owner for emergency-alerts-25',
    ],
    dependsOn: ['emergency-alerts-task-024'],
  },
  {
    id: 'emergency-alerts-task-026',
    title: 'Sync with pharmacy / vendor (EmergencyAlerts #26)',
    description: 'CareNest operational task for emergency-alerts: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm emergency-alerts context #26',
      'Capture outcome for emergency-alerts task 26',
      'Log follow-up owner for emergency-alerts-26',
    ],
    dependsOn: ['emergency-alerts-task-025'],
  },
  {
    id: 'emergency-alerts-task-027',
    title: 'Validate schedule conflicts (EmergencyAlerts #27)',
    description: 'CareNest operational task for emergency-alerts: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm emergency-alerts context #27',
      'Capture outcome for emergency-alerts task 27',
      'Log follow-up owner for emergency-alerts-27',
    ],
    dependsOn: ['emergency-alerts-task-026'],
  },
  {
    id: 'emergency-alerts-task-028',
    title: 'Close completed workflows (EmergencyAlerts #28)',
    description: 'CareNest operational task for emergency-alerts: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm emergency-alerts context #28',
      'Capture outcome for emergency-alerts task 28',
      'Log follow-up owner for emergency-alerts-28',
    ],
    dependsOn: ['emergency-alerts-task-027'],
  },
  {
    id: 'emergency-alerts-task-029',
    title: 'Generate shift handoff summary (EmergencyAlerts #29)',
    description: 'CareNest operational task for emergency-alerts: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm emergency-alerts context #29',
      'Capture outcome for emergency-alerts task 29',
      'Log follow-up owner for emergency-alerts-29',
    ],
    dependsOn: ['emergency-alerts-task-028'],
  },
  {
    id: 'emergency-alerts-task-030',
    title: 'Confirm consent / privacy flags (EmergencyAlerts #30)',
    description: 'CareNest operational task for emergency-alerts: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm emergency-alerts context #30',
      'Capture outcome for emergency-alerts task 30',
      'Log follow-up owner for emergency-alerts-30',
    ],
    dependsOn: ['emergency-alerts-task-029'],
  },
  {
    id: 'emergency-alerts-task-031',
    title: 'Run compliance checklist (EmergencyAlerts #31)',
    description: 'CareNest operational task for emergency-alerts: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm emergency-alerts context #31',
      'Capture outcome for emergency-alerts task 31',
      'Log follow-up owner for emergency-alerts-31',
    ],
    dependsOn: ['emergency-alerts-task-030'],
  },
  {
    id: 'emergency-alerts-task-032',
    title: 'Update risk scores (EmergencyAlerts #32)',
    description: 'CareNest operational task for emergency-alerts: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm emergency-alerts context #32',
      'Capture outcome for emergency-alerts task 32',
      'Log follow-up owner for emergency-alerts-32',
    ],
    dependsOn: ['emergency-alerts-task-031'],
  },
  {
    id: 'emergency-alerts-task-033',
    title: 'Notify on-call clinician (EmergencyAlerts #33)',
    description: 'CareNest operational task for emergency-alerts: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm emergency-alerts context #33',
      'Capture outcome for emergency-alerts task 33',
      'Log follow-up owner for emergency-alerts-33',
    ],
    dependsOn: ['emergency-alerts-task-032'],
  },
  {
    id: 'emergency-alerts-task-034',
    title: 'Archive stale drafts (EmergencyAlerts #34)',
    description: 'CareNest operational task for emergency-alerts: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm emergency-alerts context #34',
      'Capture outcome for emergency-alerts task 34',
      'Log follow-up owner for emergency-alerts-34',
    ],
    dependsOn: ['emergency-alerts-task-033'],
  },
  {
    id: 'emergency-alerts-task-035',
    title: 'Export weekly digest (EmergencyAlerts #35)',
    description: 'CareNest operational task for emergency-alerts: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm emergency-alerts context #35',
      'Capture outcome for emergency-alerts task 35',
      'Log follow-up owner for emergency-alerts-35',
    ],
    dependsOn: ['emergency-alerts-task-034'],
  },
  {
    id: 'emergency-alerts-task-036',
    title: 'Train new caregiver on module (EmergencyAlerts #36)',
    description: 'CareNest operational task for emergency-alerts: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm emergency-alerts context #36',
      'Capture outcome for emergency-alerts task 36',
      'Log follow-up owner for emergency-alerts-36',
    ],
    dependsOn: ['emergency-alerts-task-035'],
  },
  {
    id: 'emergency-alerts-task-037',
    title: 'Verify device integrations (EmergencyAlerts #37)',
    description: 'CareNest operational task for emergency-alerts: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm emergency-alerts context #37',
      'Capture outcome for emergency-alerts task 37',
      'Log follow-up owner for emergency-alerts-37',
    ],
    dependsOn: ['emergency-alerts-task-036'],
  },
  {
    id: 'emergency-alerts-task-038',
    title: 'Spot-check critical priorities (EmergencyAlerts #38)',
    description: 'CareNest operational task for emergency-alerts: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm emergency-alerts context #38',
      'Capture outcome for emergency-alerts task 38',
      'Log follow-up owner for emergency-alerts-38',
    ],
    dependsOn: ['emergency-alerts-task-037'],
  },
  {
    id: 'emergency-alerts-task-039',
    title: 'Align meal / care constraints (EmergencyAlerts #39)',
    description: 'CareNest operational task for emergency-alerts: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm emergency-alerts context #39',
      'Capture outcome for emergency-alerts task 39',
      'Log follow-up owner for emergency-alerts-39',
    ],
    dependsOn: ['emergency-alerts-task-038'],
  },
  {
    id: 'emergency-alerts-task-040',
    title: 'Publish dashboard widgets (EmergencyAlerts #40)',
    description: 'CareNest operational task for emergency-alerts: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm emergency-alerts context #40',
      'Capture outcome for emergency-alerts task 40',
      'Log follow-up owner for emergency-alerts-40',
    ],
    dependsOn: ['emergency-alerts-task-039'],
  },
  {
    id: 'emergency-alerts-task-041',
    title: 'Review overnight notes (EmergencyAlerts #41)',
    description: 'CareNest operational task for emergency-alerts: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm emergency-alerts context #41',
      'Capture outcome for emergency-alerts task 41',
      'Log follow-up owner for emergency-alerts-41',
    ],
    dependsOn: ['emergency-alerts-task-040'],
  },
  {
    id: 'emergency-alerts-task-042',
    title: 'Reconcile open items (EmergencyAlerts #42)',
    description: 'CareNest operational task for emergency-alerts: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm emergency-alerts context #42',
      'Capture outcome for emergency-alerts task 42',
      'Log follow-up owner for emergency-alerts-42',
    ],
    dependsOn: ['emergency-alerts-task-041'],
  },
  {
    id: 'emergency-alerts-task-043',
    title: 'Escalate overdue cases (EmergencyAlerts #43)',
    description: 'CareNest operational task for emergency-alerts: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm emergency-alerts context #43',
      'Capture outcome for emergency-alerts task 43',
      'Log follow-up owner for emergency-alerts-43',
    ],
    dependsOn: ['emergency-alerts-task-042'],
  },
  {
    id: 'emergency-alerts-task-044',
    title: 'Prepare family update (EmergencyAlerts #44)',
    description: 'CareNest operational task for emergency-alerts: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm emergency-alerts context #44',
      'Capture outcome for emergency-alerts task 44',
      'Log follow-up owner for emergency-alerts-44',
    ],
    dependsOn: ['emergency-alerts-task-043'],
  },
  {
    id: 'emergency-alerts-task-045',
    title: 'Audit documentation completeness (EmergencyAlerts #45)',
    description: 'CareNest operational task for emergency-alerts: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm emergency-alerts context #45',
      'Capture outcome for emergency-alerts task 45',
      'Log follow-up owner for emergency-alerts-45',
    ],
    dependsOn: ['emergency-alerts-task-044'],
  },
  {
    id: 'emergency-alerts-task-046',
    title: 'Sync with pharmacy / vendor (EmergencyAlerts #46)',
    description: 'CareNest operational task for emergency-alerts: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm emergency-alerts context #46',
      'Capture outcome for emergency-alerts task 46',
      'Log follow-up owner for emergency-alerts-46',
    ],
    dependsOn: ['emergency-alerts-task-045'],
  },
  {
    id: 'emergency-alerts-task-047',
    title: 'Validate schedule conflicts (EmergencyAlerts #47)',
    description: 'CareNest operational task for emergency-alerts: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm emergency-alerts context #47',
      'Capture outcome for emergency-alerts task 47',
      'Log follow-up owner for emergency-alerts-47',
    ],
    dependsOn: ['emergency-alerts-task-046'],
  },
  {
    id: 'emergency-alerts-task-048',
    title: 'Close completed workflows (EmergencyAlerts #48)',
    description: 'CareNest operational task for emergency-alerts: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm emergency-alerts context #48',
      'Capture outcome for emergency-alerts task 48',
      'Log follow-up owner for emergency-alerts-48',
    ],
    dependsOn: ['emergency-alerts-task-047'],
  },
  {
    id: 'emergency-alerts-task-049',
    title: 'Generate shift handoff summary (EmergencyAlerts #49)',
    description: 'CareNest operational task for emergency-alerts: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm emergency-alerts context #49',
      'Capture outcome for emergency-alerts task 49',
      'Log follow-up owner for emergency-alerts-49',
    ],
    dependsOn: ['emergency-alerts-task-048'],
  },
  {
    id: 'emergency-alerts-task-050',
    title: 'Confirm consent / privacy flags (EmergencyAlerts #50)',
    description: 'CareNest operational task for emergency-alerts: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm emergency-alerts context #50',
      'Capture outcome for emergency-alerts task 50',
      'Log follow-up owner for emergency-alerts-50',
    ],
    dependsOn: ['emergency-alerts-task-049'],
  },
  {
    id: 'emergency-alerts-task-051',
    title: 'Run compliance checklist (EmergencyAlerts #51)',
    description: 'CareNest operational task for emergency-alerts: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm emergency-alerts context #51',
      'Capture outcome for emergency-alerts task 51',
      'Log follow-up owner for emergency-alerts-51',
    ],
    dependsOn: ['emergency-alerts-task-050'],
  },
  {
    id: 'emergency-alerts-task-052',
    title: 'Update risk scores (EmergencyAlerts #52)',
    description: 'CareNest operational task for emergency-alerts: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm emergency-alerts context #52',
      'Capture outcome for emergency-alerts task 52',
      'Log follow-up owner for emergency-alerts-52',
    ],
    dependsOn: ['emergency-alerts-task-051'],
  },
  {
    id: 'emergency-alerts-task-053',
    title: 'Notify on-call clinician (EmergencyAlerts #53)',
    description: 'CareNest operational task for emergency-alerts: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm emergency-alerts context #53',
      'Capture outcome for emergency-alerts task 53',
      'Log follow-up owner for emergency-alerts-53',
    ],
    dependsOn: ['emergency-alerts-task-052'],
  },
  {
    id: 'emergency-alerts-task-054',
    title: 'Archive stale drafts (EmergencyAlerts #54)',
    description: 'CareNest operational task for emergency-alerts: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm emergency-alerts context #54',
      'Capture outcome for emergency-alerts task 54',
      'Log follow-up owner for emergency-alerts-54',
    ],
    dependsOn: ['emergency-alerts-task-053'],
  },
  {
    id: 'emergency-alerts-task-055',
    title: 'Export weekly digest (EmergencyAlerts #55)',
    description: 'CareNest operational task for emergency-alerts: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm emergency-alerts context #55',
      'Capture outcome for emergency-alerts task 55',
      'Log follow-up owner for emergency-alerts-55',
    ],
    dependsOn: ['emergency-alerts-task-054'],
  },
  {
    id: 'emergency-alerts-task-056',
    title: 'Train new caregiver on module (EmergencyAlerts #56)',
    description: 'CareNest operational task for emergency-alerts: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm emergency-alerts context #56',
      'Capture outcome for emergency-alerts task 56',
      'Log follow-up owner for emergency-alerts-56',
    ],
    dependsOn: ['emergency-alerts-task-055'],
  },
  {
    id: 'emergency-alerts-task-057',
    title: 'Verify device integrations (EmergencyAlerts #57)',
    description: 'CareNest operational task for emergency-alerts: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm emergency-alerts context #57',
      'Capture outcome for emergency-alerts task 57',
      'Log follow-up owner for emergency-alerts-57',
    ],
    dependsOn: ['emergency-alerts-task-056'],
  },
  {
    id: 'emergency-alerts-task-058',
    title: 'Spot-check critical priorities (EmergencyAlerts #58)',
    description: 'CareNest operational task for emergency-alerts: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm emergency-alerts context #58',
      'Capture outcome for emergency-alerts task 58',
      'Log follow-up owner for emergency-alerts-58',
    ],
    dependsOn: ['emergency-alerts-task-057'],
  },
  {
    id: 'emergency-alerts-task-059',
    title: 'Align meal / care constraints (EmergencyAlerts #59)',
    description: 'CareNest operational task for emergency-alerts: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm emergency-alerts context #59',
      'Capture outcome for emergency-alerts task 59',
      'Log follow-up owner for emergency-alerts-59',
    ],
    dependsOn: ['emergency-alerts-task-058'],
  },
  {
    id: 'emergency-alerts-task-060',
    title: 'Publish dashboard widgets (EmergencyAlerts #60)',
    description: 'CareNest operational task for emergency-alerts: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm emergency-alerts context #60',
      'Capture outcome for emergency-alerts task 60',
      'Log follow-up owner for emergency-alerts-60',
    ],
    dependsOn: ['emergency-alerts-task-059'],
  },
  {
    id: 'emergency-alerts-task-061',
    title: 'Review overnight notes (EmergencyAlerts #61)',
    description: 'CareNest operational task for emergency-alerts: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm emergency-alerts context #61',
      'Capture outcome for emergency-alerts task 61',
      'Log follow-up owner for emergency-alerts-61',
    ],
    dependsOn: ['emergency-alerts-task-060'],
  },
  {
    id: 'emergency-alerts-task-062',
    title: 'Reconcile open items (EmergencyAlerts #62)',
    description: 'CareNest operational task for emergency-alerts: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm emergency-alerts context #62',
      'Capture outcome for emergency-alerts task 62',
      'Log follow-up owner for emergency-alerts-62',
    ],
    dependsOn: ['emergency-alerts-task-061'],
  },
  {
    id: 'emergency-alerts-task-063',
    title: 'Escalate overdue cases (EmergencyAlerts #63)',
    description: 'CareNest operational task for emergency-alerts: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm emergency-alerts context #63',
      'Capture outcome for emergency-alerts task 63',
      'Log follow-up owner for emergency-alerts-63',
    ],
    dependsOn: ['emergency-alerts-task-062'],
  },
  {
    id: 'emergency-alerts-task-064',
    title: 'Prepare family update (EmergencyAlerts #64)',
    description: 'CareNest operational task for emergency-alerts: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm emergency-alerts context #64',
      'Capture outcome for emergency-alerts task 64',
      'Log follow-up owner for emergency-alerts-64',
    ],
    dependsOn: ['emergency-alerts-task-063'],
  },
  {
    id: 'emergency-alerts-task-065',
    title: 'Audit documentation completeness (EmergencyAlerts #65)',
    description: 'CareNest operational task for emergency-alerts: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm emergency-alerts context #65',
      'Capture outcome for emergency-alerts task 65',
      'Log follow-up owner for emergency-alerts-65',
    ],
    dependsOn: ['emergency-alerts-task-064'],
  },
  {
    id: 'emergency-alerts-task-066',
    title: 'Sync with pharmacy / vendor (EmergencyAlerts #66)',
    description: 'CareNest operational task for emergency-alerts: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm emergency-alerts context #66',
      'Capture outcome for emergency-alerts task 66',
      'Log follow-up owner for emergency-alerts-66',
    ],
    dependsOn: ['emergency-alerts-task-065'],
  },
  {
    id: 'emergency-alerts-task-067',
    title: 'Validate schedule conflicts (EmergencyAlerts #67)',
    description: 'CareNest operational task for emergency-alerts: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm emergency-alerts context #67',
      'Capture outcome for emergency-alerts task 67',
      'Log follow-up owner for emergency-alerts-67',
    ],
    dependsOn: ['emergency-alerts-task-066'],
  },
  {
    id: 'emergency-alerts-task-068',
    title: 'Close completed workflows (EmergencyAlerts #68)',
    description: 'CareNest operational task for emergency-alerts: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm emergency-alerts context #68',
      'Capture outcome for emergency-alerts task 68',
      'Log follow-up owner for emergency-alerts-68',
    ],
    dependsOn: ['emergency-alerts-task-067'],
  },
  {
    id: 'emergency-alerts-task-069',
    title: 'Generate shift handoff summary (EmergencyAlerts #69)',
    description: 'CareNest operational task for emergency-alerts: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm emergency-alerts context #69',
      'Capture outcome for emergency-alerts task 69',
      'Log follow-up owner for emergency-alerts-69',
    ],
    dependsOn: ['emergency-alerts-task-068'],
  },
  {
    id: 'emergency-alerts-task-070',
    title: 'Confirm consent / privacy flags (EmergencyAlerts #70)',
    description: 'CareNest operational task for emergency-alerts: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm emergency-alerts context #70',
      'Capture outcome for emergency-alerts task 70',
      'Log follow-up owner for emergency-alerts-70',
    ],
    dependsOn: ['emergency-alerts-task-069'],
  },
  {
    id: 'emergency-alerts-task-071',
    title: 'Run compliance checklist (EmergencyAlerts #71)',
    description: 'CareNest operational task for emergency-alerts: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm emergency-alerts context #71',
      'Capture outcome for emergency-alerts task 71',
      'Log follow-up owner for emergency-alerts-71',
    ],
    dependsOn: ['emergency-alerts-task-070'],
  },
  {
    id: 'emergency-alerts-task-072',
    title: 'Update risk scores (EmergencyAlerts #72)',
    description: 'CareNest operational task for emergency-alerts: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm emergency-alerts context #72',
      'Capture outcome for emergency-alerts task 72',
      'Log follow-up owner for emergency-alerts-72',
    ],
    dependsOn: ['emergency-alerts-task-071'],
  },
  {
    id: 'emergency-alerts-task-073',
    title: 'Notify on-call clinician (EmergencyAlerts #73)',
    description: 'CareNest operational task for emergency-alerts: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm emergency-alerts context #73',
      'Capture outcome for emergency-alerts task 73',
      'Log follow-up owner for emergency-alerts-73',
    ],
    dependsOn: ['emergency-alerts-task-072'],
  },
  {
    id: 'emergency-alerts-task-074',
    title: 'Archive stale drafts (EmergencyAlerts #74)',
    description: 'CareNest operational task for emergency-alerts: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm emergency-alerts context #74',
      'Capture outcome for emergency-alerts task 74',
      'Log follow-up owner for emergency-alerts-74',
    ],
    dependsOn: ['emergency-alerts-task-073'],
  },
  {
    id: 'emergency-alerts-task-075',
    title: 'Export weekly digest (EmergencyAlerts #75)',
    description: 'CareNest operational task for emergency-alerts: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm emergency-alerts context #75',
      'Capture outcome for emergency-alerts task 75',
      'Log follow-up owner for emergency-alerts-75',
    ],
    dependsOn: ['emergency-alerts-task-074'],
  },
  {
    id: 'emergency-alerts-task-076',
    title: 'Train new caregiver on module (EmergencyAlerts #76)',
    description: 'CareNest operational task for emergency-alerts: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm emergency-alerts context #76',
      'Capture outcome for emergency-alerts task 76',
      'Log follow-up owner for emergency-alerts-76',
    ],
    dependsOn: ['emergency-alerts-task-075'],
  },
  {
    id: 'emergency-alerts-task-077',
    title: 'Verify device integrations (EmergencyAlerts #77)',
    description: 'CareNest operational task for emergency-alerts: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm emergency-alerts context #77',
      'Capture outcome for emergency-alerts task 77',
      'Log follow-up owner for emergency-alerts-77',
    ],
    dependsOn: ['emergency-alerts-task-076'],
  },
  {
    id: 'emergency-alerts-task-078',
    title: 'Spot-check critical priorities (EmergencyAlerts #78)',
    description: 'CareNest operational task for emergency-alerts: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm emergency-alerts context #78',
      'Capture outcome for emergency-alerts task 78',
      'Log follow-up owner for emergency-alerts-78',
    ],
    dependsOn: ['emergency-alerts-task-077'],
  },
  {
    id: 'emergency-alerts-task-079',
    title: 'Align meal / care constraints (EmergencyAlerts #79)',
    description: 'CareNest operational task for emergency-alerts: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm emergency-alerts context #79',
      'Capture outcome for emergency-alerts task 79',
      'Log follow-up owner for emergency-alerts-79',
    ],
    dependsOn: ['emergency-alerts-task-078'],
  },
  {
    id: 'emergency-alerts-task-080',
    title: 'Publish dashboard widgets (EmergencyAlerts #80)',
    description: 'CareNest operational task for emergency-alerts: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm emergency-alerts context #80',
      'Capture outcome for emergency-alerts task 80',
      'Log follow-up owner for emergency-alerts-80',
    ],
    dependsOn: ['emergency-alerts-task-079'],
  },
];

export function listOpenEmergencyAlertsTasks(): EmergencyAlertsTask[] {
  return emergencyAlertsTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countEmergencyAlertsTasksByState(): Record<EmergencyAlertsTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of emergencyAlertsTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateEmergencyAlertsWorkload1(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateEmergencyAlertsWorkload2(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateEmergencyAlertsWorkload3(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateEmergencyAlertsWorkload4(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateEmergencyAlertsWorkload5(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateEmergencyAlertsWorkload6(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateEmergencyAlertsWorkload7(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateEmergencyAlertsWorkload8(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateEmergencyAlertsWorkload9(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateEmergencyAlertsWorkload10(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateEmergencyAlertsWorkload11(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateEmergencyAlertsWorkload12(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateEmergencyAlertsWorkload13(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateEmergencyAlertsWorkload14(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateEmergencyAlertsWorkload15(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateEmergencyAlertsWorkload16(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateEmergencyAlertsWorkload17(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateEmergencyAlertsWorkload18(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateEmergencyAlertsWorkload19(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateEmergencyAlertsWorkload20(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateEmergencyAlertsWorkload21(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateEmergencyAlertsWorkload22(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateEmergencyAlertsWorkload23(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateEmergencyAlertsWorkload24(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateEmergencyAlertsWorkload25(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateEmergencyAlertsWorkload26(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateEmergencyAlertsWorkload27(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateEmergencyAlertsWorkload28(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateEmergencyAlertsWorkload29(tasks: EmergencyAlertsTask[] = emergencyAlertsTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
