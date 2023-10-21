/** CareNest domain types — Residents */
export type ResidentsId = string & { readonly __brand: 'ResidentsId' };
export type ResidentsStatus = 'draft' | 'active' | 'paused' | 'completed' | 'cancelled' | 'archived';
export type ResidentsPriority = 'low' | 'normal' | 'high' | 'critical';
export type ResidentsVisibility = 'private' | 'care-team' | 'facility' | 'admin';

export interface ResidentsAuditMeta {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  version: number;
  facilityId: string;
}

export interface ResidentsRecord extends ResidentsAuditMeta {
  id: ResidentsId;
  title: string;
  description: string;
  status: ResidentsStatus;
  priority: ResidentsPriority;
  visibility: ResidentsVisibility;
  residentId: string;
  caregiverId?: string;
  tags: string[];
  notes: string[];
  metadata: Record<string, string | number | boolean | null>;
}

export interface ResidentsFilter {
  status?: ResidentsStatus[];
  priority?: ResidentsPriority[];
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

export interface ResidentsPage {
  items: ResidentsRecord[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ResidentsCreateInput {
  title: string;
  description: string;
  status?: ResidentsStatus;
  priority?: ResidentsPriority;
  visibility?: ResidentsVisibility;
  residentId: string;
  caregiverId?: string;
  tags?: string[];
  notes?: string[];
  metadata?: Record<string, string | number | boolean | null>;
}

export interface ResidentsUpdateInput extends Partial<ResidentsCreateInput> {
  id: ResidentsId;
}

export interface ResidentsSummary {
  total: number;
  active: number;
  critical: number;
  completedThisWeek: number;
  overdue: number;
}

export interface ResidentsDetailBlock1 {
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

export interface ResidentsDetailBlock2 {
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

export interface ResidentsDetailBlock3 {
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

export interface ResidentsDetailBlock4 {
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

export interface ResidentsDetailBlock5 {
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

export interface ResidentsDetailBlock6 {
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

export interface ResidentsDetailBlock7 {
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

export interface ResidentsDetailBlock8 {
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

export interface ResidentsDetailBlock9 {
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

export interface ResidentsDetailBlock10 {
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

export interface ResidentsDetailBlock11 {
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

export interface ResidentsDetailBlock12 {
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

export interface ResidentsDetailBlock13 {
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

export interface ResidentsDetailBlock14 {
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

export interface ResidentsDetailBlock15 {
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

export interface ResidentsDetailBlock16 {
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

export interface ResidentsDetailBlock17 {
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

export interface ResidentsDetailBlock18 {
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

export interface ResidentsDetailBlock19 {
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

export interface ResidentsDetailBlock20 {
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

export interface ResidentsDetailBlock21 {
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

export interface ResidentsDetailBlock22 {
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

export interface ResidentsDetailBlock23 {
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

export interface ResidentsDetailBlock24 {
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

export interface ResidentsDetailBlock25 {
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

export interface ResidentsDetailBlock26 {
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

export interface ResidentsDetailBlock27 {
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

export interface ResidentsDetailBlock28 {
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

export interface ResidentsDetailBlock29 {
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

export interface ResidentsDetailBlock30 {
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

export interface ResidentsDetailBlock31 {
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

export interface ResidentsDetailBlock32 {
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

export interface ResidentsDetailBlock33 {
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

export interface ResidentsDetailBlock34 {
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

export interface ResidentsDetailBlock35 {
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

export interface ResidentsDetailBlock36 {
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

export interface ResidentsDetailBlock37 {
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

export interface ResidentsDetailBlock38 {
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

export interface ResidentsDetailBlock39 {
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

export interface ResidentsDetailBlock40 {
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

export interface ResidentsDetailBlock41 {
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

export interface ResidentsDetailBlock42 {
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

export interface ResidentsDetailBlock43 {
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

export interface ResidentsDetailBlock44 {
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

export interface ResidentsDetailBlock45 {
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

export interface ResidentsDetailBlock46 {
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

export interface ResidentsDetailBlock47 {
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

export interface ResidentsDetailBlock48 {
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

export interface ResidentsDetailBlock49 {
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

export interface ResidentsDetailBlock50 {
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

export interface ResidentsDetailBlock51 {
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

export interface ResidentsDetailBlock52 {
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

export interface ResidentsDetailBlock53 {
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

export interface ResidentsDetailBlock54 {
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

export type ResidentsEventKind1 = 'residents-event-1-created' | 'residents-event-1-updated' | 'residents-event-1-resolved';
export interface ResidentsDomainEvent1 {
  kind: ResidentsEventKind1;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind2 = 'residents-event-2-created' | 'residents-event-2-updated' | 'residents-event-2-resolved';
export interface ResidentsDomainEvent2 {
  kind: ResidentsEventKind2;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind3 = 'residents-event-3-created' | 'residents-event-3-updated' | 'residents-event-3-resolved';
export interface ResidentsDomainEvent3 {
  kind: ResidentsEventKind3;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind4 = 'residents-event-4-created' | 'residents-event-4-updated' | 'residents-event-4-resolved';
export interface ResidentsDomainEvent4 {
  kind: ResidentsEventKind4;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind5 = 'residents-event-5-created' | 'residents-event-5-updated' | 'residents-event-5-resolved';
export interface ResidentsDomainEvent5 {
  kind: ResidentsEventKind5;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind6 = 'residents-event-6-created' | 'residents-event-6-updated' | 'residents-event-6-resolved';
export interface ResidentsDomainEvent6 {
  kind: ResidentsEventKind6;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind7 = 'residents-event-7-created' | 'residents-event-7-updated' | 'residents-event-7-resolved';
export interface ResidentsDomainEvent7 {
  kind: ResidentsEventKind7;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind8 = 'residents-event-8-created' | 'residents-event-8-updated' | 'residents-event-8-resolved';
export interface ResidentsDomainEvent8 {
  kind: ResidentsEventKind8;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind9 = 'residents-event-9-created' | 'residents-event-9-updated' | 'residents-event-9-resolved';
export interface ResidentsDomainEvent9 {
  kind: ResidentsEventKind9;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind10 = 'residents-event-10-created' | 'residents-event-10-updated' | 'residents-event-10-resolved';
export interface ResidentsDomainEvent10 {
  kind: ResidentsEventKind10;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind11 = 'residents-event-11-created' | 'residents-event-11-updated' | 'residents-event-11-resolved';
export interface ResidentsDomainEvent11 {
  kind: ResidentsEventKind11;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind12 = 'residents-event-12-created' | 'residents-event-12-updated' | 'residents-event-12-resolved';
export interface ResidentsDomainEvent12 {
  kind: ResidentsEventKind12;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind13 = 'residents-event-13-created' | 'residents-event-13-updated' | 'residents-event-13-resolved';
export interface ResidentsDomainEvent13 {
  kind: ResidentsEventKind13;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind14 = 'residents-event-14-created' | 'residents-event-14-updated' | 'residents-event-14-resolved';
export interface ResidentsDomainEvent14 {
  kind: ResidentsEventKind14;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind15 = 'residents-event-15-created' | 'residents-event-15-updated' | 'residents-event-15-resolved';
export interface ResidentsDomainEvent15 {
  kind: ResidentsEventKind15;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind16 = 'residents-event-16-created' | 'residents-event-16-updated' | 'residents-event-16-resolved';
export interface ResidentsDomainEvent16 {
  kind: ResidentsEventKind16;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind17 = 'residents-event-17-created' | 'residents-event-17-updated' | 'residents-event-17-resolved';
export interface ResidentsDomainEvent17 {
  kind: ResidentsEventKind17;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind18 = 'residents-event-18-created' | 'residents-event-18-updated' | 'residents-event-18-resolved';
export interface ResidentsDomainEvent18 {
  kind: ResidentsEventKind18;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind19 = 'residents-event-19-created' | 'residents-event-19-updated' | 'residents-event-19-resolved';
export interface ResidentsDomainEvent19 {
  kind: ResidentsEventKind19;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind20 = 'residents-event-20-created' | 'residents-event-20-updated' | 'residents-event-20-resolved';
export interface ResidentsDomainEvent20 {
  kind: ResidentsEventKind20;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind21 = 'residents-event-21-created' | 'residents-event-21-updated' | 'residents-event-21-resolved';
export interface ResidentsDomainEvent21 {
  kind: ResidentsEventKind21;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind22 = 'residents-event-22-created' | 'residents-event-22-updated' | 'residents-event-22-resolved';
export interface ResidentsDomainEvent22 {
  kind: ResidentsEventKind22;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind23 = 'residents-event-23-created' | 'residents-event-23-updated' | 'residents-event-23-resolved';
export interface ResidentsDomainEvent23 {
  kind: ResidentsEventKind23;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind24 = 'residents-event-24-created' | 'residents-event-24-updated' | 'residents-event-24-resolved';
export interface ResidentsDomainEvent24 {
  kind: ResidentsEventKind24;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind25 = 'residents-event-25-created' | 'residents-event-25-updated' | 'residents-event-25-resolved';
export interface ResidentsDomainEvent25 {
  kind: ResidentsEventKind25;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind26 = 'residents-event-26-created' | 'residents-event-26-updated' | 'residents-event-26-resolved';
export interface ResidentsDomainEvent26 {
  kind: ResidentsEventKind26;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind27 = 'residents-event-27-created' | 'residents-event-27-updated' | 'residents-event-27-resolved';
export interface ResidentsDomainEvent27 {
  kind: ResidentsEventKind27;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind28 = 'residents-event-28-created' | 'residents-event-28-updated' | 'residents-event-28-resolved';
export interface ResidentsDomainEvent28 {
  kind: ResidentsEventKind28;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind29 = 'residents-event-29-created' | 'residents-event-29-updated' | 'residents-event-29-resolved';
export interface ResidentsDomainEvent29 {
  kind: ResidentsEventKind29;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind30 = 'residents-event-30-created' | 'residents-event-30-updated' | 'residents-event-30-resolved';
export interface ResidentsDomainEvent30 {
  kind: ResidentsEventKind30;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind31 = 'residents-event-31-created' | 'residents-event-31-updated' | 'residents-event-31-resolved';
export interface ResidentsDomainEvent31 {
  kind: ResidentsEventKind31;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind32 = 'residents-event-32-created' | 'residents-event-32-updated' | 'residents-event-32-resolved';
export interface ResidentsDomainEvent32 {
  kind: ResidentsEventKind32;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind33 = 'residents-event-33-created' | 'residents-event-33-updated' | 'residents-event-33-resolved';
export interface ResidentsDomainEvent33 {
  kind: ResidentsEventKind33;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind34 = 'residents-event-34-created' | 'residents-event-34-updated' | 'residents-event-34-resolved';
export interface ResidentsDomainEvent34 {
  kind: ResidentsEventKind34;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind35 = 'residents-event-35-created' | 'residents-event-35-updated' | 'residents-event-35-resolved';
export interface ResidentsDomainEvent35 {
  kind: ResidentsEventKind35;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind36 = 'residents-event-36-created' | 'residents-event-36-updated' | 'residents-event-36-resolved';
export interface ResidentsDomainEvent36 {
  kind: ResidentsEventKind36;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind37 = 'residents-event-37-created' | 'residents-event-37-updated' | 'residents-event-37-resolved';
export interface ResidentsDomainEvent37 {
  kind: ResidentsEventKind37;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind38 = 'residents-event-38-created' | 'residents-event-38-updated' | 'residents-event-38-resolved';
export interface ResidentsDomainEvent38 {
  kind: ResidentsEventKind38;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ResidentsEventKind39 = 'residents-event-39-created' | 'residents-event-39-updated' | 'residents-event-39-resolved';
export interface ResidentsDomainEvent39 {
  kind: ResidentsEventKind39;
  aggregateId: ResidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}
