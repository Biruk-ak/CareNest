/** CareNest domain types — MealPlanning */
export type MealPlanningId = string & { readonly __brand: 'MealPlanningId' };
export type MealPlanningStatus = 'draft' | 'active' | 'paused' | 'completed' | 'cancelled' | 'archived';
export type MealPlanningPriority = 'low' | 'normal' | 'high' | 'critical';
export type MealPlanningVisibility = 'private' | 'care-team' | 'facility' | 'admin';

export interface MealPlanningAuditMeta {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  version: number;
  facilityId: string;
}

export interface MealPlanningRecord extends MealPlanningAuditMeta {
  id: MealPlanningId;
  title: string;
  description: string;
  status: MealPlanningStatus;
  priority: MealPlanningPriority;
  visibility: MealPlanningVisibility;
  residentId: string;
  caregiverId?: string;
  tags: string[];
  notes: string[];
  metadata: Record<string, string | number | boolean | null>;
}

export interface MealPlanningFilter {
  status?: MealPlanningStatus[];
  priority?: MealPlanningPriority[];
  residentId?: string;
  caregiverId?: string;
  query?: string;
  from?: string;
  to?: string;
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
}

export interface MealPlanningPage {
  items: MealPlanningRecord[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface MealPlanningCreateInput {
  title: string;
  description: string;
  status?: MealPlanningStatus;
  priority?: MealPlanningPriority;
  visibility?: MealPlanningVisibility;
  residentId: string;
  caregiverId?: string;
  tags?: string[];
  notes?: string[];
  metadata?: Record<string, string | number | boolean | null>;
}

export interface MealPlanningUpdateInput extends Partial<MealPlanningCreateInput> {
  id: MealPlanningId;
}

export interface MealPlanningSummary {
  total: number;
  active: number;
  critical: number;
  completedThisWeek: number;
  overdue: number;
}

export interface MealPlanningDetailBlock1 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock2 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock3 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock4 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock5 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock6 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock7 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock8 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock9 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock10 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock11 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock12 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock13 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock14 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock15 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock16 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock17 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock18 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock19 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock20 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock21 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock22 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock23 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock24 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock25 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock26 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock27 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock28 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock29 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock30 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock31 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock32 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock33 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock34 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock35 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock36 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock37 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock38 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock39 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock40 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock41 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock42 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock43 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock44 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock45 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock46 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock47 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock48 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock49 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock50 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock51 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock52 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock53 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MealPlanningDetailBlock54 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export type MealPlanningEventKind1 = 'meal-planning-event-1-created' | 'meal-planning-event-1-updated' | 'meal-planning-event-1-resolved';
export interface MealPlanningDomainEvent1 {
  kind: MealPlanningEventKind1;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind2 = 'meal-planning-event-2-created' | 'meal-planning-event-2-updated' | 'meal-planning-event-2-resolved';
export interface MealPlanningDomainEvent2 {
  kind: MealPlanningEventKind2;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind3 = 'meal-planning-event-3-created' | 'meal-planning-event-3-updated' | 'meal-planning-event-3-resolved';
export interface MealPlanningDomainEvent3 {
  kind: MealPlanningEventKind3;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind4 = 'meal-planning-event-4-created' | 'meal-planning-event-4-updated' | 'meal-planning-event-4-resolved';
export interface MealPlanningDomainEvent4 {
  kind: MealPlanningEventKind4;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind5 = 'meal-planning-event-5-created' | 'meal-planning-event-5-updated' | 'meal-planning-event-5-resolved';
export interface MealPlanningDomainEvent5 {
  kind: MealPlanningEventKind5;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind6 = 'meal-planning-event-6-created' | 'meal-planning-event-6-updated' | 'meal-planning-event-6-resolved';
export interface MealPlanningDomainEvent6 {
  kind: MealPlanningEventKind6;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind7 = 'meal-planning-event-7-created' | 'meal-planning-event-7-updated' | 'meal-planning-event-7-resolved';
export interface MealPlanningDomainEvent7 {
  kind: MealPlanningEventKind7;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind8 = 'meal-planning-event-8-created' | 'meal-planning-event-8-updated' | 'meal-planning-event-8-resolved';
export interface MealPlanningDomainEvent8 {
  kind: MealPlanningEventKind8;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind9 = 'meal-planning-event-9-created' | 'meal-planning-event-9-updated' | 'meal-planning-event-9-resolved';
export interface MealPlanningDomainEvent9 {
  kind: MealPlanningEventKind9;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind10 = 'meal-planning-event-10-created' | 'meal-planning-event-10-updated' | 'meal-planning-event-10-resolved';
export interface MealPlanningDomainEvent10 {
  kind: MealPlanningEventKind10;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind11 = 'meal-planning-event-11-created' | 'meal-planning-event-11-updated' | 'meal-planning-event-11-resolved';
export interface MealPlanningDomainEvent11 {
  kind: MealPlanningEventKind11;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind12 = 'meal-planning-event-12-created' | 'meal-planning-event-12-updated' | 'meal-planning-event-12-resolved';
export interface MealPlanningDomainEvent12 {
  kind: MealPlanningEventKind12;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind13 = 'meal-planning-event-13-created' | 'meal-planning-event-13-updated' | 'meal-planning-event-13-resolved';
export interface MealPlanningDomainEvent13 {
  kind: MealPlanningEventKind13;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind14 = 'meal-planning-event-14-created' | 'meal-planning-event-14-updated' | 'meal-planning-event-14-resolved';
export interface MealPlanningDomainEvent14 {
  kind: MealPlanningEventKind14;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind15 = 'meal-planning-event-15-created' | 'meal-planning-event-15-updated' | 'meal-planning-event-15-resolved';
export interface MealPlanningDomainEvent15 {
  kind: MealPlanningEventKind15;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind16 = 'meal-planning-event-16-created' | 'meal-planning-event-16-updated' | 'meal-planning-event-16-resolved';
export interface MealPlanningDomainEvent16 {
  kind: MealPlanningEventKind16;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind17 = 'meal-planning-event-17-created' | 'meal-planning-event-17-updated' | 'meal-planning-event-17-resolved';
export interface MealPlanningDomainEvent17 {
  kind: MealPlanningEventKind17;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind18 = 'meal-planning-event-18-created' | 'meal-planning-event-18-updated' | 'meal-planning-event-18-resolved';
export interface MealPlanningDomainEvent18 {
  kind: MealPlanningEventKind18;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind19 = 'meal-planning-event-19-created' | 'meal-planning-event-19-updated' | 'meal-planning-event-19-resolved';
export interface MealPlanningDomainEvent19 {
  kind: MealPlanningEventKind19;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind20 = 'meal-planning-event-20-created' | 'meal-planning-event-20-updated' | 'meal-planning-event-20-resolved';
export interface MealPlanningDomainEvent20 {
  kind: MealPlanningEventKind20;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind21 = 'meal-planning-event-21-created' | 'meal-planning-event-21-updated' | 'meal-planning-event-21-resolved';
export interface MealPlanningDomainEvent21 {
  kind: MealPlanningEventKind21;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind22 = 'meal-planning-event-22-created' | 'meal-planning-event-22-updated' | 'meal-planning-event-22-resolved';
export interface MealPlanningDomainEvent22 {
  kind: MealPlanningEventKind22;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind23 = 'meal-planning-event-23-created' | 'meal-planning-event-23-updated' | 'meal-planning-event-23-resolved';
export interface MealPlanningDomainEvent23 {
  kind: MealPlanningEventKind23;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind24 = 'meal-planning-event-24-created' | 'meal-planning-event-24-updated' | 'meal-planning-event-24-resolved';
export interface MealPlanningDomainEvent24 {
  kind: MealPlanningEventKind24;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind25 = 'meal-planning-event-25-created' | 'meal-planning-event-25-updated' | 'meal-planning-event-25-resolved';
export interface MealPlanningDomainEvent25 {
  kind: MealPlanningEventKind25;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind26 = 'meal-planning-event-26-created' | 'meal-planning-event-26-updated' | 'meal-planning-event-26-resolved';
export interface MealPlanningDomainEvent26 {
  kind: MealPlanningEventKind26;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind27 = 'meal-planning-event-27-created' | 'meal-planning-event-27-updated' | 'meal-planning-event-27-resolved';
export interface MealPlanningDomainEvent27 {
  kind: MealPlanningEventKind27;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind28 = 'meal-planning-event-28-created' | 'meal-planning-event-28-updated' | 'meal-planning-event-28-resolved';
export interface MealPlanningDomainEvent28 {
  kind: MealPlanningEventKind28;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind29 = 'meal-planning-event-29-created' | 'meal-planning-event-29-updated' | 'meal-planning-event-29-resolved';
export interface MealPlanningDomainEvent29 {
  kind: MealPlanningEventKind29;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind30 = 'meal-planning-event-30-created' | 'meal-planning-event-30-updated' | 'meal-planning-event-30-resolved';
export interface MealPlanningDomainEvent30 {
  kind: MealPlanningEventKind30;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind31 = 'meal-planning-event-31-created' | 'meal-planning-event-31-updated' | 'meal-planning-event-31-resolved';
export interface MealPlanningDomainEvent31 {
  kind: MealPlanningEventKind31;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind32 = 'meal-planning-event-32-created' | 'meal-planning-event-32-updated' | 'meal-planning-event-32-resolved';
export interface MealPlanningDomainEvent32 {
  kind: MealPlanningEventKind32;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind33 = 'meal-planning-event-33-created' | 'meal-planning-event-33-updated' | 'meal-planning-event-33-resolved';
export interface MealPlanningDomainEvent33 {
  kind: MealPlanningEventKind33;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind34 = 'meal-planning-event-34-created' | 'meal-planning-event-34-updated' | 'meal-planning-event-34-resolved';
export interface MealPlanningDomainEvent34 {
  kind: MealPlanningEventKind34;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind35 = 'meal-planning-event-35-created' | 'meal-planning-event-35-updated' | 'meal-planning-event-35-resolved';
export interface MealPlanningDomainEvent35 {
  kind: MealPlanningEventKind35;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind36 = 'meal-planning-event-36-created' | 'meal-planning-event-36-updated' | 'meal-planning-event-36-resolved';
export interface MealPlanningDomainEvent36 {
  kind: MealPlanningEventKind36;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind37 = 'meal-planning-event-37-created' | 'meal-planning-event-37-updated' | 'meal-planning-event-37-resolved';
export interface MealPlanningDomainEvent37 {
  kind: MealPlanningEventKind37;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind38 = 'meal-planning-event-38-created' | 'meal-planning-event-38-updated' | 'meal-planning-event-38-resolved';
export interface MealPlanningDomainEvent38 {
  kind: MealPlanningEventKind38;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MealPlanningEventKind39 = 'meal-planning-event-39-created' | 'meal-planning-event-39-updated' | 'meal-planning-event-39-resolved';
export interface MealPlanningDomainEvent39 {
  kind: MealPlanningEventKind39;
  aggregateId: MealPlanningId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}
