/** Operational task catalog for Inventory */

export type InventoryTaskState = 'todo' | 'in_progress' | 'blocked' | 'done' | 'cancelled';

export interface InventoryTask {
  id: string;
  title: string;
  description: string;
  state: InventoryTaskState;
  ownerRole: string;
  dueInHours: number;
  checklist: string[];
  dependsOn: string[];
}

export const inventoryTaskCatalog: InventoryTask[] = [
  {
    id: 'inventory-task-001',
    title: 'Review overnight notes (Inventory #1)',
    description: 'CareNest operational task for inventory: review overnight notes — step 1.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm inventory context #1',
      'Capture outcome for inventory task 1',
      'Log follow-up owner for inventory-1',
    ],
    dependsOn: [],
  },
  {
    id: 'inventory-task-002',
    title: 'Reconcile open items (Inventory #2)',
    description: 'CareNest operational task for inventory: reconcile open items — step 2.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm inventory context #2',
      'Capture outcome for inventory task 2',
      'Log follow-up owner for inventory-2',
    ],
    dependsOn: ['inventory-task-001'],
  },
  {
    id: 'inventory-task-003',
    title: 'Escalate overdue cases (Inventory #3)',
    description: 'CareNest operational task for inventory: escalate overdue cases — step 3.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm inventory context #3',
      'Capture outcome for inventory task 3',
      'Log follow-up owner for inventory-3',
    ],
    dependsOn: ['inventory-task-002'],
  },
  {
    id: 'inventory-task-004',
    title: 'Prepare family update (Inventory #4)',
    description: 'CareNest operational task for inventory: prepare family update — step 4.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm inventory context #4',
      'Capture outcome for inventory task 4',
      'Log follow-up owner for inventory-4',
    ],
    dependsOn: ['inventory-task-003'],
  },
  {
    id: 'inventory-task-005',
    title: 'Audit documentation completeness (Inventory #5)',
    description: 'CareNest operational task for inventory: audit documentation completeness — step 5.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm inventory context #5',
      'Capture outcome for inventory task 5',
      'Log follow-up owner for inventory-5',
    ],
    dependsOn: ['inventory-task-004'],
  },
  {
    id: 'inventory-task-006',
    title: 'Sync with pharmacy / vendor (Inventory #6)',
    description: 'CareNest operational task for inventory: sync with pharmacy / vendor — step 6.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm inventory context #6',
      'Capture outcome for inventory task 6',
      'Log follow-up owner for inventory-6',
    ],
    dependsOn: ['inventory-task-005'],
  },
  {
    id: 'inventory-task-007',
    title: 'Validate schedule conflicts (Inventory #7)',
    description: 'CareNest operational task for inventory: validate schedule conflicts — step 7.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm inventory context #7',
      'Capture outcome for inventory task 7',
      'Log follow-up owner for inventory-7',
    ],
    dependsOn: ['inventory-task-006'],
  },
  {
    id: 'inventory-task-008',
    title: 'Close completed workflows (Inventory #8)',
    description: 'CareNest operational task for inventory: close completed workflows — step 8.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm inventory context #8',
      'Capture outcome for inventory task 8',
      'Log follow-up owner for inventory-8',
    ],
    dependsOn: ['inventory-task-007'],
  },
  {
    id: 'inventory-task-009',
    title: 'Generate shift handoff summary (Inventory #9)',
    description: 'CareNest operational task for inventory: generate shift handoff summary — step 9.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm inventory context #9',
      'Capture outcome for inventory task 9',
      'Log follow-up owner for inventory-9',
    ],
    dependsOn: ['inventory-task-008'],
  },
  {
    id: 'inventory-task-010',
    title: 'Confirm consent / privacy flags (Inventory #10)',
    description: 'CareNest operational task for inventory: confirm consent / privacy flags — step 10.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm inventory context #10',
      'Capture outcome for inventory task 10',
      'Log follow-up owner for inventory-10',
    ],
    dependsOn: ['inventory-task-009'],
  },
  {
    id: 'inventory-task-011',
    title: 'Run compliance checklist (Inventory #11)',
    description: 'CareNest operational task for inventory: run compliance checklist — step 11.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm inventory context #11',
      'Capture outcome for inventory task 11',
      'Log follow-up owner for inventory-11',
    ],
    dependsOn: ['inventory-task-010'],
  },
  {
    id: 'inventory-task-012',
    title: 'Update risk scores (Inventory #12)',
    description: 'CareNest operational task for inventory: update risk scores — step 12.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm inventory context #12',
      'Capture outcome for inventory task 12',
      'Log follow-up owner for inventory-12',
    ],
    dependsOn: ['inventory-task-011'],
  },
  {
    id: 'inventory-task-013',
    title: 'Notify on-call clinician (Inventory #13)',
    description: 'CareNest operational task for inventory: notify on-call clinician — step 13.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm inventory context #13',
      'Capture outcome for inventory task 13',
      'Log follow-up owner for inventory-13',
    ],
    dependsOn: ['inventory-task-012'],
  },
  {
    id: 'inventory-task-014',
    title: 'Archive stale drafts (Inventory #14)',
    description: 'CareNest operational task for inventory: archive stale drafts — step 14.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm inventory context #14',
      'Capture outcome for inventory task 14',
      'Log follow-up owner for inventory-14',
    ],
    dependsOn: ['inventory-task-013'],
  },
  {
    id: 'inventory-task-015',
    title: 'Export weekly digest (Inventory #15)',
    description: 'CareNest operational task for inventory: export weekly digest — step 15.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm inventory context #15',
      'Capture outcome for inventory task 15',
      'Log follow-up owner for inventory-15',
    ],
    dependsOn: ['inventory-task-014'],
  },
  {
    id: 'inventory-task-016',
    title: 'Train new caregiver on module (Inventory #16)',
    description: 'CareNest operational task for inventory: train new caregiver on module — step 16.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm inventory context #16',
      'Capture outcome for inventory task 16',
      'Log follow-up owner for inventory-16',
    ],
    dependsOn: ['inventory-task-015'],
  },
  {
    id: 'inventory-task-017',
    title: 'Verify device integrations (Inventory #17)',
    description: 'CareNest operational task for inventory: verify device integrations — step 17.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm inventory context #17',
      'Capture outcome for inventory task 17',
      'Log follow-up owner for inventory-17',
    ],
    dependsOn: ['inventory-task-016'],
  },
  {
    id: 'inventory-task-018',
    title: 'Spot-check critical priorities (Inventory #18)',
    description: 'CareNest operational task for inventory: spot-check critical priorities — step 18.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm inventory context #18',
      'Capture outcome for inventory task 18',
      'Log follow-up owner for inventory-18',
    ],
    dependsOn: ['inventory-task-017'],
  },
  {
    id: 'inventory-task-019',
    title: 'Align meal / care constraints (Inventory #19)',
    description: 'CareNest operational task for inventory: align meal / care constraints — step 19.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm inventory context #19',
      'Capture outcome for inventory task 19',
      'Log follow-up owner for inventory-19',
    ],
    dependsOn: ['inventory-task-018'],
  },
  {
    id: 'inventory-task-020',
    title: 'Publish dashboard widgets (Inventory #20)',
    description: 'CareNest operational task for inventory: publish dashboard widgets — step 20.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm inventory context #20',
      'Capture outcome for inventory task 20',
      'Log follow-up owner for inventory-20',
    ],
    dependsOn: ['inventory-task-019'],
  },
  {
    id: 'inventory-task-021',
    title: 'Review overnight notes (Inventory #21)',
    description: 'CareNest operational task for inventory: review overnight notes — step 21.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm inventory context #21',
      'Capture outcome for inventory task 21',
      'Log follow-up owner for inventory-21',
    ],
    dependsOn: ['inventory-task-020'],
  },
  {
    id: 'inventory-task-022',
    title: 'Reconcile open items (Inventory #22)',
    description: 'CareNest operational task for inventory: reconcile open items — step 22.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm inventory context #22',
      'Capture outcome for inventory task 22',
      'Log follow-up owner for inventory-22',
    ],
    dependsOn: ['inventory-task-021'],
  },
  {
    id: 'inventory-task-023',
    title: 'Escalate overdue cases (Inventory #23)',
    description: 'CareNest operational task for inventory: escalate overdue cases — step 23.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm inventory context #23',
      'Capture outcome for inventory task 23',
      'Log follow-up owner for inventory-23',
    ],
    dependsOn: ['inventory-task-022'],
  },
  {
    id: 'inventory-task-024',
    title: 'Prepare family update (Inventory #24)',
    description: 'CareNest operational task for inventory: prepare family update — step 24.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm inventory context #24',
      'Capture outcome for inventory task 24',
      'Log follow-up owner for inventory-24',
    ],
    dependsOn: ['inventory-task-023'],
  },
  {
    id: 'inventory-task-025',
    title: 'Audit documentation completeness (Inventory #25)',
    description: 'CareNest operational task for inventory: audit documentation completeness — step 25.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm inventory context #25',
      'Capture outcome for inventory task 25',
      'Log follow-up owner for inventory-25',
    ],
    dependsOn: ['inventory-task-024'],
  },
  {
    id: 'inventory-task-026',
    title: 'Sync with pharmacy / vendor (Inventory #26)',
    description: 'CareNest operational task for inventory: sync with pharmacy / vendor — step 26.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm inventory context #26',
      'Capture outcome for inventory task 26',
      'Log follow-up owner for inventory-26',
    ],
    dependsOn: ['inventory-task-025'],
  },
  {
    id: 'inventory-task-027',
    title: 'Validate schedule conflicts (Inventory #27)',
    description: 'CareNest operational task for inventory: validate schedule conflicts — step 27.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm inventory context #27',
      'Capture outcome for inventory task 27',
      'Log follow-up owner for inventory-27',
    ],
    dependsOn: ['inventory-task-026'],
  },
  {
    id: 'inventory-task-028',
    title: 'Close completed workflows (Inventory #28)',
    description: 'CareNest operational task for inventory: close completed workflows — step 28.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm inventory context #28',
      'Capture outcome for inventory task 28',
      'Log follow-up owner for inventory-28',
    ],
    dependsOn: ['inventory-task-027'],
  },
  {
    id: 'inventory-task-029',
    title: 'Generate shift handoff summary (Inventory #29)',
    description: 'CareNest operational task for inventory: generate shift handoff summary — step 29.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm inventory context #29',
      'Capture outcome for inventory task 29',
      'Log follow-up owner for inventory-29',
    ],
    dependsOn: ['inventory-task-028'],
  },
  {
    id: 'inventory-task-030',
    title: 'Confirm consent / privacy flags (Inventory #30)',
    description: 'CareNest operational task for inventory: confirm consent / privacy flags — step 30.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm inventory context #30',
      'Capture outcome for inventory task 30',
      'Log follow-up owner for inventory-30',
    ],
    dependsOn: ['inventory-task-029'],
  },
  {
    id: 'inventory-task-031',
    title: 'Run compliance checklist (Inventory #31)',
    description: 'CareNest operational task for inventory: run compliance checklist — step 31.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm inventory context #31',
      'Capture outcome for inventory task 31',
      'Log follow-up owner for inventory-31',
    ],
    dependsOn: ['inventory-task-030'],
  },
  {
    id: 'inventory-task-032',
    title: 'Update risk scores (Inventory #32)',
    description: 'CareNest operational task for inventory: update risk scores — step 32.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm inventory context #32',
      'Capture outcome for inventory task 32',
      'Log follow-up owner for inventory-32',
    ],
    dependsOn: ['inventory-task-031'],
  },
  {
    id: 'inventory-task-033',
    title: 'Notify on-call clinician (Inventory #33)',
    description: 'CareNest operational task for inventory: notify on-call clinician — step 33.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 37,
    checklist: [
      'Confirm inventory context #33',
      'Capture outcome for inventory task 33',
      'Log follow-up owner for inventory-33',
    ],
    dependsOn: ['inventory-task-032'],
  },
  {
    id: 'inventory-task-034',
    title: 'Archive stale drafts (Inventory #34)',
    description: 'CareNest operational task for inventory: archive stale drafts — step 34.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 38,
    checklist: [
      'Confirm inventory context #34',
      'Capture outcome for inventory task 34',
      'Log follow-up owner for inventory-34',
    ],
    dependsOn: ['inventory-task-033'],
  },
  {
    id: 'inventory-task-035',
    title: 'Export weekly digest (Inventory #35)',
    description: 'CareNest operational task for inventory: export weekly digest — step 35.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 39,
    checklist: [
      'Confirm inventory context #35',
      'Capture outcome for inventory task 35',
      'Log follow-up owner for inventory-35',
    ],
    dependsOn: ['inventory-task-034'],
  },
  {
    id: 'inventory-task-036',
    title: 'Train new caregiver on module (Inventory #36)',
    description: 'CareNest operational task for inventory: train new caregiver on module — step 36.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 40,
    checklist: [
      'Confirm inventory context #36',
      'Capture outcome for inventory task 36',
      'Log follow-up owner for inventory-36',
    ],
    dependsOn: ['inventory-task-035'],
  },
  {
    id: 'inventory-task-037',
    title: 'Verify device integrations (Inventory #37)',
    description: 'CareNest operational task for inventory: verify device integrations — step 37.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 41,
    checklist: [
      'Confirm inventory context #37',
      'Capture outcome for inventory task 37',
      'Log follow-up owner for inventory-37',
    ],
    dependsOn: ['inventory-task-036'],
  },
  {
    id: 'inventory-task-038',
    title: 'Spot-check critical priorities (Inventory #38)',
    description: 'CareNest operational task for inventory: spot-check critical priorities — step 38.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 42,
    checklist: [
      'Confirm inventory context #38',
      'Capture outcome for inventory task 38',
      'Log follow-up owner for inventory-38',
    ],
    dependsOn: ['inventory-task-037'],
  },
  {
    id: 'inventory-task-039',
    title: 'Align meal / care constraints (Inventory #39)',
    description: 'CareNest operational task for inventory: align meal / care constraints — step 39.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 43,
    checklist: [
      'Confirm inventory context #39',
      'Capture outcome for inventory task 39',
      'Log follow-up owner for inventory-39',
    ],
    dependsOn: ['inventory-task-038'],
  },
  {
    id: 'inventory-task-040',
    title: 'Publish dashboard widgets (Inventory #40)',
    description: 'CareNest operational task for inventory: publish dashboard widgets — step 40.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 44,
    checklist: [
      'Confirm inventory context #40',
      'Capture outcome for inventory task 40',
      'Log follow-up owner for inventory-40',
    ],
    dependsOn: ['inventory-task-039'],
  },
  {
    id: 'inventory-task-041',
    title: 'Review overnight notes (Inventory #41)',
    description: 'CareNest operational task for inventory: review overnight notes — step 41.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 45,
    checklist: [
      'Confirm inventory context #41',
      'Capture outcome for inventory task 41',
      'Log follow-up owner for inventory-41',
    ],
    dependsOn: ['inventory-task-040'],
  },
  {
    id: 'inventory-task-042',
    title: 'Reconcile open items (Inventory #42)',
    description: 'CareNest operational task for inventory: reconcile open items — step 42.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 46,
    checklist: [
      'Confirm inventory context #42',
      'Capture outcome for inventory task 42',
      'Log follow-up owner for inventory-42',
    ],
    dependsOn: ['inventory-task-041'],
  },
  {
    id: 'inventory-task-043',
    title: 'Escalate overdue cases (Inventory #43)',
    description: 'CareNest operational task for inventory: escalate overdue cases — step 43.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 47,
    checklist: [
      'Confirm inventory context #43',
      'Capture outcome for inventory task 43',
      'Log follow-up owner for inventory-43',
    ],
    dependsOn: ['inventory-task-042'],
  },
  {
    id: 'inventory-task-044',
    title: 'Prepare family update (Inventory #44)',
    description: 'CareNest operational task for inventory: prepare family update — step 44.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 48,
    checklist: [
      'Confirm inventory context #44',
      'Capture outcome for inventory task 44',
      'Log follow-up owner for inventory-44',
    ],
    dependsOn: ['inventory-task-043'],
  },
  {
    id: 'inventory-task-045',
    title: 'Audit documentation completeness (Inventory #45)',
    description: 'CareNest operational task for inventory: audit documentation completeness — step 45.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 49,
    checklist: [
      'Confirm inventory context #45',
      'Capture outcome for inventory task 45',
      'Log follow-up owner for inventory-45',
    ],
    dependsOn: ['inventory-task-044'],
  },
  {
    id: 'inventory-task-046',
    title: 'Sync with pharmacy / vendor (Inventory #46)',
    description: 'CareNest operational task for inventory: sync with pharmacy / vendor — step 46.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 50,
    checklist: [
      'Confirm inventory context #46',
      'Capture outcome for inventory task 46',
      'Log follow-up owner for inventory-46',
    ],
    dependsOn: ['inventory-task-045'],
  },
  {
    id: 'inventory-task-047',
    title: 'Validate schedule conflicts (Inventory #47)',
    description: 'CareNest operational task for inventory: validate schedule conflicts — step 47.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 51,
    checklist: [
      'Confirm inventory context #47',
      'Capture outcome for inventory task 47',
      'Log follow-up owner for inventory-47',
    ],
    dependsOn: ['inventory-task-046'],
  },
  {
    id: 'inventory-task-048',
    title: 'Close completed workflows (Inventory #48)',
    description: 'CareNest operational task for inventory: close completed workflows — step 48.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 4,
    checklist: [
      'Confirm inventory context #48',
      'Capture outcome for inventory task 48',
      'Log follow-up owner for inventory-48',
    ],
    dependsOn: ['inventory-task-047'],
  },
  {
    id: 'inventory-task-049',
    title: 'Generate shift handoff summary (Inventory #49)',
    description: 'CareNest operational task for inventory: generate shift handoff summary — step 49.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 5,
    checklist: [
      'Confirm inventory context #49',
      'Capture outcome for inventory task 49',
      'Log follow-up owner for inventory-49',
    ],
    dependsOn: ['inventory-task-048'],
  },
  {
    id: 'inventory-task-050',
    title: 'Confirm consent / privacy flags (Inventory #50)',
    description: 'CareNest operational task for inventory: confirm consent / privacy flags — step 50.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 6,
    checklist: [
      'Confirm inventory context #50',
      'Capture outcome for inventory task 50',
      'Log follow-up owner for inventory-50',
    ],
    dependsOn: ['inventory-task-049'],
  },
  {
    id: 'inventory-task-051',
    title: 'Run compliance checklist (Inventory #51)',
    description: 'CareNest operational task for inventory: run compliance checklist — step 51.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 7,
    checklist: [
      'Confirm inventory context #51',
      'Capture outcome for inventory task 51',
      'Log follow-up owner for inventory-51',
    ],
    dependsOn: ['inventory-task-050'],
  },
  {
    id: 'inventory-task-052',
    title: 'Update risk scores (Inventory #52)',
    description: 'CareNest operational task for inventory: update risk scores — step 52.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 8,
    checklist: [
      'Confirm inventory context #52',
      'Capture outcome for inventory task 52',
      'Log follow-up owner for inventory-52',
    ],
    dependsOn: ['inventory-task-051'],
  },
  {
    id: 'inventory-task-053',
    title: 'Notify on-call clinician (Inventory #53)',
    description: 'CareNest operational task for inventory: notify on-call clinician — step 53.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 9,
    checklist: [
      'Confirm inventory context #53',
      'Capture outcome for inventory task 53',
      'Log follow-up owner for inventory-53',
    ],
    dependsOn: ['inventory-task-052'],
  },
  {
    id: 'inventory-task-054',
    title: 'Archive stale drafts (Inventory #54)',
    description: 'CareNest operational task for inventory: archive stale drafts — step 54.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 10,
    checklist: [
      'Confirm inventory context #54',
      'Capture outcome for inventory task 54',
      'Log follow-up owner for inventory-54',
    ],
    dependsOn: ['inventory-task-053'],
  },
  {
    id: 'inventory-task-055',
    title: 'Export weekly digest (Inventory #55)',
    description: 'CareNest operational task for inventory: export weekly digest — step 55.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 11,
    checklist: [
      'Confirm inventory context #55',
      'Capture outcome for inventory task 55',
      'Log follow-up owner for inventory-55',
    ],
    dependsOn: ['inventory-task-054'],
  },
  {
    id: 'inventory-task-056',
    title: 'Train new caregiver on module (Inventory #56)',
    description: 'CareNest operational task for inventory: train new caregiver on module — step 56.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 12,
    checklist: [
      'Confirm inventory context #56',
      'Capture outcome for inventory task 56',
      'Log follow-up owner for inventory-56',
    ],
    dependsOn: ['inventory-task-055'],
  },
  {
    id: 'inventory-task-057',
    title: 'Verify device integrations (Inventory #57)',
    description: 'CareNest operational task for inventory: verify device integrations — step 57.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 13,
    checklist: [
      'Confirm inventory context #57',
      'Capture outcome for inventory task 57',
      'Log follow-up owner for inventory-57',
    ],
    dependsOn: ['inventory-task-056'],
  },
  {
    id: 'inventory-task-058',
    title: 'Spot-check critical priorities (Inventory #58)',
    description: 'CareNest operational task for inventory: spot-check critical priorities — step 58.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 14,
    checklist: [
      'Confirm inventory context #58',
      'Capture outcome for inventory task 58',
      'Log follow-up owner for inventory-58',
    ],
    dependsOn: ['inventory-task-057'],
  },
  {
    id: 'inventory-task-059',
    title: 'Align meal / care constraints (Inventory #59)',
    description: 'CareNest operational task for inventory: align meal / care constraints — step 59.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 15,
    checklist: [
      'Confirm inventory context #59',
      'Capture outcome for inventory task 59',
      'Log follow-up owner for inventory-59',
    ],
    dependsOn: ['inventory-task-058'],
  },
  {
    id: 'inventory-task-060',
    title: 'Publish dashboard widgets (Inventory #60)',
    description: 'CareNest operational task for inventory: publish dashboard widgets — step 60.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 16,
    checklist: [
      'Confirm inventory context #60',
      'Capture outcome for inventory task 60',
      'Log follow-up owner for inventory-60',
    ],
    dependsOn: ['inventory-task-059'],
  },
  {
    id: 'inventory-task-061',
    title: 'Review overnight notes (Inventory #61)',
    description: 'CareNest operational task for inventory: review overnight notes — step 61.',
    state: 'in_progress',
    ownerRole: 'nurse',
    dueInHours: 17,
    checklist: [
      'Confirm inventory context #61',
      'Capture outcome for inventory task 61',
      'Log follow-up owner for inventory-61',
    ],
    dependsOn: ['inventory-task-060'],
  },
  {
    id: 'inventory-task-062',
    title: 'Reconcile open items (Inventory #62)',
    description: 'CareNest operational task for inventory: reconcile open items — step 62.',
    state: 'blocked',
    ownerRole: 'admin',
    dueInHours: 18,
    checklist: [
      'Confirm inventory context #62',
      'Capture outcome for inventory task 62',
      'Log follow-up owner for inventory-62',
    ],
    dependsOn: ['inventory-task-061'],
  },
  {
    id: 'inventory-task-063',
    title: 'Escalate overdue cases (Inventory #63)',
    description: 'CareNest operational task for inventory: escalate overdue cases — step 63.',
    state: 'done',
    ownerRole: 'owner',
    dueInHours: 19,
    checklist: [
      'Confirm inventory context #63',
      'Capture outcome for inventory task 63',
      'Log follow-up owner for inventory-63',
    ],
    dependsOn: ['inventory-task-062'],
  },
  {
    id: 'inventory-task-064',
    title: 'Prepare family update (Inventory #64)',
    description: 'CareNest operational task for inventory: prepare family update — step 64.',
    state: 'cancelled',
    ownerRole: 'caregiver',
    dueInHours: 20,
    checklist: [
      'Confirm inventory context #64',
      'Capture outcome for inventory task 64',
      'Log follow-up owner for inventory-64',
    ],
    dependsOn: ['inventory-task-063'],
  },
  {
    id: 'inventory-task-065',
    title: 'Audit documentation completeness (Inventory #65)',
    description: 'CareNest operational task for inventory: audit documentation completeness — step 65.',
    state: 'todo',
    ownerRole: 'nurse',
    dueInHours: 21,
    checklist: [
      'Confirm inventory context #65',
      'Capture outcome for inventory task 65',
      'Log follow-up owner for inventory-65',
    ],
    dependsOn: ['inventory-task-064'],
  },
  {
    id: 'inventory-task-066',
    title: 'Sync with pharmacy / vendor (Inventory #66)',
    description: 'CareNest operational task for inventory: sync with pharmacy / vendor — step 66.',
    state: 'in_progress',
    ownerRole: 'admin',
    dueInHours: 22,
    checklist: [
      'Confirm inventory context #66',
      'Capture outcome for inventory task 66',
      'Log follow-up owner for inventory-66',
    ],
    dependsOn: ['inventory-task-065'],
  },
  {
    id: 'inventory-task-067',
    title: 'Validate schedule conflicts (Inventory #67)',
    description: 'CareNest operational task for inventory: validate schedule conflicts — step 67.',
    state: 'blocked',
    ownerRole: 'owner',
    dueInHours: 23,
    checklist: [
      'Confirm inventory context #67',
      'Capture outcome for inventory task 67',
      'Log follow-up owner for inventory-67',
    ],
    dependsOn: ['inventory-task-066'],
  },
  {
    id: 'inventory-task-068',
    title: 'Close completed workflows (Inventory #68)',
    description: 'CareNest operational task for inventory: close completed workflows — step 68.',
    state: 'done',
    ownerRole: 'caregiver',
    dueInHours: 24,
    checklist: [
      'Confirm inventory context #68',
      'Capture outcome for inventory task 68',
      'Log follow-up owner for inventory-68',
    ],
    dependsOn: ['inventory-task-067'],
  },
  {
    id: 'inventory-task-069',
    title: 'Generate shift handoff summary (Inventory #69)',
    description: 'CareNest operational task for inventory: generate shift handoff summary — step 69.',
    state: 'cancelled',
    ownerRole: 'nurse',
    dueInHours: 25,
    checklist: [
      'Confirm inventory context #69',
      'Capture outcome for inventory task 69',
      'Log follow-up owner for inventory-69',
    ],
    dependsOn: ['inventory-task-068'],
  },
  {
    id: 'inventory-task-070',
    title: 'Confirm consent / privacy flags (Inventory #70)',
    description: 'CareNest operational task for inventory: confirm consent / privacy flags — step 70.',
    state: 'todo',
    ownerRole: 'admin',
    dueInHours: 26,
    checklist: [
      'Confirm inventory context #70',
      'Capture outcome for inventory task 70',
      'Log follow-up owner for inventory-70',
    ],
    dependsOn: ['inventory-task-069'],
  },
  {
    id: 'inventory-task-071',
    title: 'Run compliance checklist (Inventory #71)',
    description: 'CareNest operational task for inventory: run compliance checklist — step 71.',
    state: 'in_progress',
    ownerRole: 'owner',
    dueInHours: 27,
    checklist: [
      'Confirm inventory context #71',
      'Capture outcome for inventory task 71',
      'Log follow-up owner for inventory-71',
    ],
    dependsOn: ['inventory-task-070'],
  },
  {
    id: 'inventory-task-072',
    title: 'Update risk scores (Inventory #72)',
    description: 'CareNest operational task for inventory: update risk scores — step 72.',
    state: 'blocked',
    ownerRole: 'caregiver',
    dueInHours: 28,
    checklist: [
      'Confirm inventory context #72',
      'Capture outcome for inventory task 72',
      'Log follow-up owner for inventory-72',
    ],
    dependsOn: ['inventory-task-071'],
  },
  {
    id: 'inventory-task-073',
    title: 'Notify on-call clinician (Inventory #73)',
    description: 'CareNest operational task for inventory: notify on-call clinician — step 73.',
    state: 'done',
    ownerRole: 'nurse',
    dueInHours: 29,
    checklist: [
      'Confirm inventory context #73',
      'Capture outcome for inventory task 73',
      'Log follow-up owner for inventory-73',
    ],
    dependsOn: ['inventory-task-072'],
  },
  {
    id: 'inventory-task-074',
    title: 'Archive stale drafts (Inventory #74)',
    description: 'CareNest operational task for inventory: archive stale drafts — step 74.',
    state: 'cancelled',
    ownerRole: 'admin',
    dueInHours: 30,
    checklist: [
      'Confirm inventory context #74',
      'Capture outcome for inventory task 74',
      'Log follow-up owner for inventory-74',
    ],
    dependsOn: ['inventory-task-073'],
  },
  {
    id: 'inventory-task-075',
    title: 'Export weekly digest (Inventory #75)',
    description: 'CareNest operational task for inventory: export weekly digest — step 75.',
    state: 'todo',
    ownerRole: 'owner',
    dueInHours: 31,
    checklist: [
      'Confirm inventory context #75',
      'Capture outcome for inventory task 75',
      'Log follow-up owner for inventory-75',
    ],
    dependsOn: ['inventory-task-074'],
  },
  {
    id: 'inventory-task-076',
    title: 'Train new caregiver on module (Inventory #76)',
    description: 'CareNest operational task for inventory: train new caregiver on module — step 76.',
    state: 'in_progress',
    ownerRole: 'caregiver',
    dueInHours: 32,
    checklist: [
      'Confirm inventory context #76',
      'Capture outcome for inventory task 76',
      'Log follow-up owner for inventory-76',
    ],
    dependsOn: ['inventory-task-075'],
  },
  {
    id: 'inventory-task-077',
    title: 'Verify device integrations (Inventory #77)',
    description: 'CareNest operational task for inventory: verify device integrations — step 77.',
    state: 'blocked',
    ownerRole: 'nurse',
    dueInHours: 33,
    checklist: [
      'Confirm inventory context #77',
      'Capture outcome for inventory task 77',
      'Log follow-up owner for inventory-77',
    ],
    dependsOn: ['inventory-task-076'],
  },
  {
    id: 'inventory-task-078',
    title: 'Spot-check critical priorities (Inventory #78)',
    description: 'CareNest operational task for inventory: spot-check critical priorities — step 78.',
    state: 'done',
    ownerRole: 'admin',
    dueInHours: 34,
    checklist: [
      'Confirm inventory context #78',
      'Capture outcome for inventory task 78',
      'Log follow-up owner for inventory-78',
    ],
    dependsOn: ['inventory-task-077'],
  },
  {
    id: 'inventory-task-079',
    title: 'Align meal / care constraints (Inventory #79)',
    description: 'CareNest operational task for inventory: align meal / care constraints — step 79.',
    state: 'cancelled',
    ownerRole: 'owner',
    dueInHours: 35,
    checklist: [
      'Confirm inventory context #79',
      'Capture outcome for inventory task 79',
      'Log follow-up owner for inventory-79',
    ],
    dependsOn: ['inventory-task-078'],
  },
  {
    id: 'inventory-task-080',
    title: 'Publish dashboard widgets (Inventory #80)',
    description: 'CareNest operational task for inventory: publish dashboard widgets — step 80.',
    state: 'todo',
    ownerRole: 'caregiver',
    dueInHours: 36,
    checklist: [
      'Confirm inventory context #80',
      'Capture outcome for inventory task 80',
      'Log follow-up owner for inventory-80',
    ],
    dependsOn: ['inventory-task-079'],
  },
];

export function listOpenInventoryTasks(): InventoryTask[] {
  return inventoryTaskCatalog.filter((t) => t.state === 'todo' || t.state === 'in_progress');
}

export function countInventoryTasksByState(): Record<InventoryTaskState, number> {
  const base = { todo: 0, in_progress: 0, blocked: 0, done: 0, cancelled: 0 };
  for (const t of inventoryTaskCatalog) base[t.state] += 1;
  return base;
}

export function estimateInventoryWorkload1(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 1, 0);
}

export function estimateInventoryWorkload2(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 2, 0);
}

export function estimateInventoryWorkload3(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 3, 0);
}

export function estimateInventoryWorkload4(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 4, 0);
}

export function estimateInventoryWorkload5(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 5, 0);
}

export function estimateInventoryWorkload6(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 6, 0);
}

export function estimateInventoryWorkload7(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 7, 0);
}

export function estimateInventoryWorkload8(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 8, 0);
}

export function estimateInventoryWorkload9(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 9, 0);
}

export function estimateInventoryWorkload10(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 10, 0);
}

export function estimateInventoryWorkload11(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 11, 0);
}

export function estimateInventoryWorkload12(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 12, 0);
}

export function estimateInventoryWorkload13(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 13, 0);
}

export function estimateInventoryWorkload14(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 14, 0);
}

export function estimateInventoryWorkload15(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 15, 0);
}

export function estimateInventoryWorkload16(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 16, 0);
}

export function estimateInventoryWorkload17(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 17, 0);
}

export function estimateInventoryWorkload18(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 18, 0);
}

export function estimateInventoryWorkload19(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 19, 0);
}

export function estimateInventoryWorkload20(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 20, 0);
}

export function estimateInventoryWorkload21(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 21, 0);
}

export function estimateInventoryWorkload22(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 22, 0);
}

export function estimateInventoryWorkload23(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 23, 0);
}

export function estimateInventoryWorkload24(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 24, 0);
}

export function estimateInventoryWorkload25(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 25, 0);
}

export function estimateInventoryWorkload26(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 26, 0);
}

export function estimateInventoryWorkload27(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 27, 0);
}

export function estimateInventoryWorkload28(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 28, 0);
}

export function estimateInventoryWorkload29(tasks: InventoryTask[] = inventoryTaskCatalog): number {
  return tasks.reduce((sum, t) => sum + t.dueInHours + t.checklist.length * 29, 0);
}
