/** CareNest domain types — ShiftHandoff */
export type ShiftHandoffId = string & { readonly __brand: 'ShiftHandoffId' };
export type ShiftHandoffStatus = 'draft' | 'active' | 'paused' | 'completed' | 'cancelled' | 'archived';
export type ShiftHandoffPriority = 'low' | 'normal' | 'high' | 'critical';
export type ShiftHandoffVisibility = 'private' | 'care-team' | 'facility' | 'admin';

export interface ShiftHandoffAuditMeta {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  version: number;
  facilityId: string;
}

export interface ShiftHandoffRecord extends ShiftHandoffAuditMeta {
  id: ShiftHandoffId;
  title: string;
  description: string;
  status: ShiftHandoffStatus;
  priority: ShiftHandoffPriority;
  visibility: ShiftHandoffVisibility;
  residentId: string;
  caregiverId?: string;
  tags: string[];
  notes: string[];
  metadata: Record<string, string | number | boolean | null>;
}

export interface ShiftHandoffFilter {
  status?: ShiftHandoffStatus[];
  priority?: ShiftHandoffPriority[];
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

export interface ShiftHandoffPage {
  items: ShiftHandoffRecord[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ShiftHandoffCreateInput {
  title: string;
  description: string;
  status?: ShiftHandoffStatus;
  priority?: ShiftHandoffPriority;
  visibility?: ShiftHandoffVisibility;
  residentId: string;
  caregiverId?: string;
  tags?: string[];
  notes?: string[];
  metadata?: Record<string, string | number | boolean | null>;
}

export interface ShiftHandoffUpdateInput extends Partial<ShiftHandoffCreateInput> {
  id: ShiftHandoffId;
}

export interface ShiftHandoffSummary {
  total: number;
  active: number;
  critical: number;
  completedThisWeek: number;
  overdue: number;
}

export interface ShiftHandoffDetailBlock1 {
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

export interface ShiftHandoffDetailBlock2 {
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

export interface ShiftHandoffDetailBlock3 {
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

export interface ShiftHandoffDetailBlock4 {
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

export interface ShiftHandoffDetailBlock5 {
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

export interface ShiftHandoffDetailBlock6 {
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

export interface ShiftHandoffDetailBlock7 {
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

export interface ShiftHandoffDetailBlock8 {
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

export interface ShiftHandoffDetailBlock9 {
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

export interface ShiftHandoffDetailBlock10 {
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

export interface ShiftHandoffDetailBlock11 {
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

export interface ShiftHandoffDetailBlock12 {
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

export interface ShiftHandoffDetailBlock13 {
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

export interface ShiftHandoffDetailBlock14 {
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

export interface ShiftHandoffDetailBlock15 {
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

export interface ShiftHandoffDetailBlock16 {
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

export interface ShiftHandoffDetailBlock17 {
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

export interface ShiftHandoffDetailBlock18 {
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

export interface ShiftHandoffDetailBlock19 {
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

export interface ShiftHandoffDetailBlock20 {
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

export interface ShiftHandoffDetailBlock21 {
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

export interface ShiftHandoffDetailBlock22 {
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

export interface ShiftHandoffDetailBlock23 {
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

export interface ShiftHandoffDetailBlock24 {
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

export interface ShiftHandoffDetailBlock25 {
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

export interface ShiftHandoffDetailBlock26 {
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

export interface ShiftHandoffDetailBlock27 {
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

export interface ShiftHandoffDetailBlock28 {
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

export interface ShiftHandoffDetailBlock29 {
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

export interface ShiftHandoffDetailBlock30 {
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

export interface ShiftHandoffDetailBlock31 {
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

export interface ShiftHandoffDetailBlock32 {
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

export interface ShiftHandoffDetailBlock33 {
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

export interface ShiftHandoffDetailBlock34 {
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

export interface ShiftHandoffDetailBlock35 {
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

export interface ShiftHandoffDetailBlock36 {
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

export interface ShiftHandoffDetailBlock37 {
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

export interface ShiftHandoffDetailBlock38 {
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

export interface ShiftHandoffDetailBlock39 {
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

export interface ShiftHandoffDetailBlock40 {
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

export interface ShiftHandoffDetailBlock41 {
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

export interface ShiftHandoffDetailBlock42 {
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

export interface ShiftHandoffDetailBlock43 {
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

export interface ShiftHandoffDetailBlock44 {
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

export interface ShiftHandoffDetailBlock45 {
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

export interface ShiftHandoffDetailBlock46 {
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

export interface ShiftHandoffDetailBlock47 {
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

export interface ShiftHandoffDetailBlock48 {
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

export interface ShiftHandoffDetailBlock49 {
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

export interface ShiftHandoffDetailBlock50 {
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

export interface ShiftHandoffDetailBlock51 {
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

export interface ShiftHandoffDetailBlock52 {
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

export interface ShiftHandoffDetailBlock53 {
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

export interface ShiftHandoffDetailBlock54 {
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

export type ShiftHandoffEventKind1 = 'shift-handoff-event-1-created' | 'shift-handoff-event-1-updated' | 'shift-handoff-event-1-resolved';
export interface ShiftHandoffDomainEvent1 {
  kind: ShiftHandoffEventKind1;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind2 = 'shift-handoff-event-2-created' | 'shift-handoff-event-2-updated' | 'shift-handoff-event-2-resolved';
export interface ShiftHandoffDomainEvent2 {
  kind: ShiftHandoffEventKind2;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind3 = 'shift-handoff-event-3-created' | 'shift-handoff-event-3-updated' | 'shift-handoff-event-3-resolved';
export interface ShiftHandoffDomainEvent3 {
  kind: ShiftHandoffEventKind3;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind4 = 'shift-handoff-event-4-created' | 'shift-handoff-event-4-updated' | 'shift-handoff-event-4-resolved';
export interface ShiftHandoffDomainEvent4 {
  kind: ShiftHandoffEventKind4;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind5 = 'shift-handoff-event-5-created' | 'shift-handoff-event-5-updated' | 'shift-handoff-event-5-resolved';
export interface ShiftHandoffDomainEvent5 {
  kind: ShiftHandoffEventKind5;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind6 = 'shift-handoff-event-6-created' | 'shift-handoff-event-6-updated' | 'shift-handoff-event-6-resolved';
export interface ShiftHandoffDomainEvent6 {
  kind: ShiftHandoffEventKind6;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind7 = 'shift-handoff-event-7-created' | 'shift-handoff-event-7-updated' | 'shift-handoff-event-7-resolved';
export interface ShiftHandoffDomainEvent7 {
  kind: ShiftHandoffEventKind7;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind8 = 'shift-handoff-event-8-created' | 'shift-handoff-event-8-updated' | 'shift-handoff-event-8-resolved';
export interface ShiftHandoffDomainEvent8 {
  kind: ShiftHandoffEventKind8;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind9 = 'shift-handoff-event-9-created' | 'shift-handoff-event-9-updated' | 'shift-handoff-event-9-resolved';
export interface ShiftHandoffDomainEvent9 {
  kind: ShiftHandoffEventKind9;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind10 = 'shift-handoff-event-10-created' | 'shift-handoff-event-10-updated' | 'shift-handoff-event-10-resolved';
export interface ShiftHandoffDomainEvent10 {
  kind: ShiftHandoffEventKind10;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind11 = 'shift-handoff-event-11-created' | 'shift-handoff-event-11-updated' | 'shift-handoff-event-11-resolved';
export interface ShiftHandoffDomainEvent11 {
  kind: ShiftHandoffEventKind11;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind12 = 'shift-handoff-event-12-created' | 'shift-handoff-event-12-updated' | 'shift-handoff-event-12-resolved';
export interface ShiftHandoffDomainEvent12 {
  kind: ShiftHandoffEventKind12;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind13 = 'shift-handoff-event-13-created' | 'shift-handoff-event-13-updated' | 'shift-handoff-event-13-resolved';
export interface ShiftHandoffDomainEvent13 {
  kind: ShiftHandoffEventKind13;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind14 = 'shift-handoff-event-14-created' | 'shift-handoff-event-14-updated' | 'shift-handoff-event-14-resolved';
export interface ShiftHandoffDomainEvent14 {
  kind: ShiftHandoffEventKind14;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind15 = 'shift-handoff-event-15-created' | 'shift-handoff-event-15-updated' | 'shift-handoff-event-15-resolved';
export interface ShiftHandoffDomainEvent15 {
  kind: ShiftHandoffEventKind15;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind16 = 'shift-handoff-event-16-created' | 'shift-handoff-event-16-updated' | 'shift-handoff-event-16-resolved';
export interface ShiftHandoffDomainEvent16 {
  kind: ShiftHandoffEventKind16;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind17 = 'shift-handoff-event-17-created' | 'shift-handoff-event-17-updated' | 'shift-handoff-event-17-resolved';
export interface ShiftHandoffDomainEvent17 {
  kind: ShiftHandoffEventKind17;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind18 = 'shift-handoff-event-18-created' | 'shift-handoff-event-18-updated' | 'shift-handoff-event-18-resolved';
export interface ShiftHandoffDomainEvent18 {
  kind: ShiftHandoffEventKind18;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind19 = 'shift-handoff-event-19-created' | 'shift-handoff-event-19-updated' | 'shift-handoff-event-19-resolved';
export interface ShiftHandoffDomainEvent19 {
  kind: ShiftHandoffEventKind19;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind20 = 'shift-handoff-event-20-created' | 'shift-handoff-event-20-updated' | 'shift-handoff-event-20-resolved';
export interface ShiftHandoffDomainEvent20 {
  kind: ShiftHandoffEventKind20;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind21 = 'shift-handoff-event-21-created' | 'shift-handoff-event-21-updated' | 'shift-handoff-event-21-resolved';
export interface ShiftHandoffDomainEvent21 {
  kind: ShiftHandoffEventKind21;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind22 = 'shift-handoff-event-22-created' | 'shift-handoff-event-22-updated' | 'shift-handoff-event-22-resolved';
export interface ShiftHandoffDomainEvent22 {
  kind: ShiftHandoffEventKind22;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind23 = 'shift-handoff-event-23-created' | 'shift-handoff-event-23-updated' | 'shift-handoff-event-23-resolved';
export interface ShiftHandoffDomainEvent23 {
  kind: ShiftHandoffEventKind23;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind24 = 'shift-handoff-event-24-created' | 'shift-handoff-event-24-updated' | 'shift-handoff-event-24-resolved';
export interface ShiftHandoffDomainEvent24 {
  kind: ShiftHandoffEventKind24;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind25 = 'shift-handoff-event-25-created' | 'shift-handoff-event-25-updated' | 'shift-handoff-event-25-resolved';
export interface ShiftHandoffDomainEvent25 {
  kind: ShiftHandoffEventKind25;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind26 = 'shift-handoff-event-26-created' | 'shift-handoff-event-26-updated' | 'shift-handoff-event-26-resolved';
export interface ShiftHandoffDomainEvent26 {
  kind: ShiftHandoffEventKind26;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind27 = 'shift-handoff-event-27-created' | 'shift-handoff-event-27-updated' | 'shift-handoff-event-27-resolved';
export interface ShiftHandoffDomainEvent27 {
  kind: ShiftHandoffEventKind27;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind28 = 'shift-handoff-event-28-created' | 'shift-handoff-event-28-updated' | 'shift-handoff-event-28-resolved';
export interface ShiftHandoffDomainEvent28 {
  kind: ShiftHandoffEventKind28;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind29 = 'shift-handoff-event-29-created' | 'shift-handoff-event-29-updated' | 'shift-handoff-event-29-resolved';
export interface ShiftHandoffDomainEvent29 {
  kind: ShiftHandoffEventKind29;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind30 = 'shift-handoff-event-30-created' | 'shift-handoff-event-30-updated' | 'shift-handoff-event-30-resolved';
export interface ShiftHandoffDomainEvent30 {
  kind: ShiftHandoffEventKind30;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind31 = 'shift-handoff-event-31-created' | 'shift-handoff-event-31-updated' | 'shift-handoff-event-31-resolved';
export interface ShiftHandoffDomainEvent31 {
  kind: ShiftHandoffEventKind31;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind32 = 'shift-handoff-event-32-created' | 'shift-handoff-event-32-updated' | 'shift-handoff-event-32-resolved';
export interface ShiftHandoffDomainEvent32 {
  kind: ShiftHandoffEventKind32;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind33 = 'shift-handoff-event-33-created' | 'shift-handoff-event-33-updated' | 'shift-handoff-event-33-resolved';
export interface ShiftHandoffDomainEvent33 {
  kind: ShiftHandoffEventKind33;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind34 = 'shift-handoff-event-34-created' | 'shift-handoff-event-34-updated' | 'shift-handoff-event-34-resolved';
export interface ShiftHandoffDomainEvent34 {
  kind: ShiftHandoffEventKind34;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind35 = 'shift-handoff-event-35-created' | 'shift-handoff-event-35-updated' | 'shift-handoff-event-35-resolved';
export interface ShiftHandoffDomainEvent35 {
  kind: ShiftHandoffEventKind35;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind36 = 'shift-handoff-event-36-created' | 'shift-handoff-event-36-updated' | 'shift-handoff-event-36-resolved';
export interface ShiftHandoffDomainEvent36 {
  kind: ShiftHandoffEventKind36;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind37 = 'shift-handoff-event-37-created' | 'shift-handoff-event-37-updated' | 'shift-handoff-event-37-resolved';
export interface ShiftHandoffDomainEvent37 {
  kind: ShiftHandoffEventKind37;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind38 = 'shift-handoff-event-38-created' | 'shift-handoff-event-38-updated' | 'shift-handoff-event-38-resolved';
export interface ShiftHandoffDomainEvent38 {
  kind: ShiftHandoffEventKind38;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ShiftHandoffEventKind39 = 'shift-handoff-event-39-created' | 'shift-handoff-event-39-updated' | 'shift-handoff-event-39-resolved';
export interface ShiftHandoffDomainEvent39 {
  kind: ShiftHandoffEventKind39;
  aggregateId: ShiftHandoffId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}
