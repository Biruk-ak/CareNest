/** CareNest domain types — Incidents */
export type IncidentsId = string & { readonly __brand: 'IncidentsId' };
export type IncidentsStatus = 'draft' | 'active' | 'paused' | 'completed' | 'cancelled' | 'archived';
export type IncidentsPriority = 'low' | 'normal' | 'high' | 'critical';
export type IncidentsVisibility = 'private' | 'care-team' | 'facility' | 'admin';

export interface IncidentsAuditMeta {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  version: number;
  facilityId: string;
}

export interface IncidentsRecord extends IncidentsAuditMeta {
  id: IncidentsId;
  title: string;
  description: string;
  status: IncidentsStatus;
  priority: IncidentsPriority;
  visibility: IncidentsVisibility;
  residentId: string;
  caregiverId?: string;
  tags: string[];
  notes: string[];
  metadata: Record<string, string | number | boolean | null>;
}

export interface IncidentsFilter {
  status?: IncidentsStatus[];
  priority?: IncidentsPriority[];
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

export interface IncidentsPage {
  items: IncidentsRecord[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IncidentsCreateInput {
  title: string;
  description: string;
  status?: IncidentsStatus;
  priority?: IncidentsPriority;
  visibility?: IncidentsVisibility;
  residentId: string;
  caregiverId?: string;
  tags?: string[];
  notes?: string[];
  metadata?: Record<string, string | number | boolean | null>;
}

export interface IncidentsUpdateInput extends Partial<IncidentsCreateInput> {
  id: IncidentsId;
}

export interface IncidentsSummary {
  total: number;
  active: number;
  critical: number;
  completedThisWeek: number;
  overdue: number;
}

export interface IncidentsDetailBlock1 {
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

export interface IncidentsDetailBlock2 {
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

export interface IncidentsDetailBlock3 {
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

export interface IncidentsDetailBlock4 {
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

export interface IncidentsDetailBlock5 {
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

export interface IncidentsDetailBlock6 {
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

export interface IncidentsDetailBlock7 {
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

export interface IncidentsDetailBlock8 {
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

export interface IncidentsDetailBlock9 {
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

export interface IncidentsDetailBlock10 {
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

export interface IncidentsDetailBlock11 {
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

export interface IncidentsDetailBlock12 {
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

export interface IncidentsDetailBlock13 {
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

export interface IncidentsDetailBlock14 {
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

export interface IncidentsDetailBlock15 {
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

export interface IncidentsDetailBlock16 {
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

export interface IncidentsDetailBlock17 {
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

export interface IncidentsDetailBlock18 {
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

export interface IncidentsDetailBlock19 {
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

export interface IncidentsDetailBlock20 {
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

export interface IncidentsDetailBlock21 {
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

export interface IncidentsDetailBlock22 {
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

export interface IncidentsDetailBlock23 {
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

export interface IncidentsDetailBlock24 {
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

export interface IncidentsDetailBlock25 {
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

export interface IncidentsDetailBlock26 {
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

export interface IncidentsDetailBlock27 {
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

export interface IncidentsDetailBlock28 {
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

export interface IncidentsDetailBlock29 {
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

export interface IncidentsDetailBlock30 {
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

export interface IncidentsDetailBlock31 {
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

export interface IncidentsDetailBlock32 {
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

export interface IncidentsDetailBlock33 {
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

export interface IncidentsDetailBlock34 {
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

export interface IncidentsDetailBlock35 {
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

export interface IncidentsDetailBlock36 {
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

export interface IncidentsDetailBlock37 {
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

export interface IncidentsDetailBlock38 {
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

export interface IncidentsDetailBlock39 {
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

export interface IncidentsDetailBlock40 {
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

export interface IncidentsDetailBlock41 {
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

export interface IncidentsDetailBlock42 {
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

export interface IncidentsDetailBlock43 {
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

export interface IncidentsDetailBlock44 {
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

export interface IncidentsDetailBlock45 {
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

export interface IncidentsDetailBlock46 {
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

export interface IncidentsDetailBlock47 {
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

export interface IncidentsDetailBlock48 {
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

export interface IncidentsDetailBlock49 {
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

export interface IncidentsDetailBlock50 {
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

export interface IncidentsDetailBlock51 {
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

export interface IncidentsDetailBlock52 {
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

export interface IncidentsDetailBlock53 {
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

export interface IncidentsDetailBlock54 {
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

export type IncidentsEventKind1 = 'incidents-event-1-created' | 'incidents-event-1-updated' | 'incidents-event-1-resolved';
export interface IncidentsDomainEvent1 {
  kind: IncidentsEventKind1;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind2 = 'incidents-event-2-created' | 'incidents-event-2-updated' | 'incidents-event-2-resolved';
export interface IncidentsDomainEvent2 {
  kind: IncidentsEventKind2;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind3 = 'incidents-event-3-created' | 'incidents-event-3-updated' | 'incidents-event-3-resolved';
export interface IncidentsDomainEvent3 {
  kind: IncidentsEventKind3;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind4 = 'incidents-event-4-created' | 'incidents-event-4-updated' | 'incidents-event-4-resolved';
export interface IncidentsDomainEvent4 {
  kind: IncidentsEventKind4;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind5 = 'incidents-event-5-created' | 'incidents-event-5-updated' | 'incidents-event-5-resolved';
export interface IncidentsDomainEvent5 {
  kind: IncidentsEventKind5;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind6 = 'incidents-event-6-created' | 'incidents-event-6-updated' | 'incidents-event-6-resolved';
export interface IncidentsDomainEvent6 {
  kind: IncidentsEventKind6;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind7 = 'incidents-event-7-created' | 'incidents-event-7-updated' | 'incidents-event-7-resolved';
export interface IncidentsDomainEvent7 {
  kind: IncidentsEventKind7;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind8 = 'incidents-event-8-created' | 'incidents-event-8-updated' | 'incidents-event-8-resolved';
export interface IncidentsDomainEvent8 {
  kind: IncidentsEventKind8;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind9 = 'incidents-event-9-created' | 'incidents-event-9-updated' | 'incidents-event-9-resolved';
export interface IncidentsDomainEvent9 {
  kind: IncidentsEventKind9;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind10 = 'incidents-event-10-created' | 'incidents-event-10-updated' | 'incidents-event-10-resolved';
export interface IncidentsDomainEvent10 {
  kind: IncidentsEventKind10;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind11 = 'incidents-event-11-created' | 'incidents-event-11-updated' | 'incidents-event-11-resolved';
export interface IncidentsDomainEvent11 {
  kind: IncidentsEventKind11;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind12 = 'incidents-event-12-created' | 'incidents-event-12-updated' | 'incidents-event-12-resolved';
export interface IncidentsDomainEvent12 {
  kind: IncidentsEventKind12;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind13 = 'incidents-event-13-created' | 'incidents-event-13-updated' | 'incidents-event-13-resolved';
export interface IncidentsDomainEvent13 {
  kind: IncidentsEventKind13;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind14 = 'incidents-event-14-created' | 'incidents-event-14-updated' | 'incidents-event-14-resolved';
export interface IncidentsDomainEvent14 {
  kind: IncidentsEventKind14;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind15 = 'incidents-event-15-created' | 'incidents-event-15-updated' | 'incidents-event-15-resolved';
export interface IncidentsDomainEvent15 {
  kind: IncidentsEventKind15;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind16 = 'incidents-event-16-created' | 'incidents-event-16-updated' | 'incidents-event-16-resolved';
export interface IncidentsDomainEvent16 {
  kind: IncidentsEventKind16;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind17 = 'incidents-event-17-created' | 'incidents-event-17-updated' | 'incidents-event-17-resolved';
export interface IncidentsDomainEvent17 {
  kind: IncidentsEventKind17;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind18 = 'incidents-event-18-created' | 'incidents-event-18-updated' | 'incidents-event-18-resolved';
export interface IncidentsDomainEvent18 {
  kind: IncidentsEventKind18;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind19 = 'incidents-event-19-created' | 'incidents-event-19-updated' | 'incidents-event-19-resolved';
export interface IncidentsDomainEvent19 {
  kind: IncidentsEventKind19;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind20 = 'incidents-event-20-created' | 'incidents-event-20-updated' | 'incidents-event-20-resolved';
export interface IncidentsDomainEvent20 {
  kind: IncidentsEventKind20;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind21 = 'incidents-event-21-created' | 'incidents-event-21-updated' | 'incidents-event-21-resolved';
export interface IncidentsDomainEvent21 {
  kind: IncidentsEventKind21;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind22 = 'incidents-event-22-created' | 'incidents-event-22-updated' | 'incidents-event-22-resolved';
export interface IncidentsDomainEvent22 {
  kind: IncidentsEventKind22;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind23 = 'incidents-event-23-created' | 'incidents-event-23-updated' | 'incidents-event-23-resolved';
export interface IncidentsDomainEvent23 {
  kind: IncidentsEventKind23;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind24 = 'incidents-event-24-created' | 'incidents-event-24-updated' | 'incidents-event-24-resolved';
export interface IncidentsDomainEvent24 {
  kind: IncidentsEventKind24;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind25 = 'incidents-event-25-created' | 'incidents-event-25-updated' | 'incidents-event-25-resolved';
export interface IncidentsDomainEvent25 {
  kind: IncidentsEventKind25;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind26 = 'incidents-event-26-created' | 'incidents-event-26-updated' | 'incidents-event-26-resolved';
export interface IncidentsDomainEvent26 {
  kind: IncidentsEventKind26;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind27 = 'incidents-event-27-created' | 'incidents-event-27-updated' | 'incidents-event-27-resolved';
export interface IncidentsDomainEvent27 {
  kind: IncidentsEventKind27;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind28 = 'incidents-event-28-created' | 'incidents-event-28-updated' | 'incidents-event-28-resolved';
export interface IncidentsDomainEvent28 {
  kind: IncidentsEventKind28;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind29 = 'incidents-event-29-created' | 'incidents-event-29-updated' | 'incidents-event-29-resolved';
export interface IncidentsDomainEvent29 {
  kind: IncidentsEventKind29;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind30 = 'incidents-event-30-created' | 'incidents-event-30-updated' | 'incidents-event-30-resolved';
export interface IncidentsDomainEvent30 {
  kind: IncidentsEventKind30;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind31 = 'incidents-event-31-created' | 'incidents-event-31-updated' | 'incidents-event-31-resolved';
export interface IncidentsDomainEvent31 {
  kind: IncidentsEventKind31;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind32 = 'incidents-event-32-created' | 'incidents-event-32-updated' | 'incidents-event-32-resolved';
export interface IncidentsDomainEvent32 {
  kind: IncidentsEventKind32;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind33 = 'incidents-event-33-created' | 'incidents-event-33-updated' | 'incidents-event-33-resolved';
export interface IncidentsDomainEvent33 {
  kind: IncidentsEventKind33;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind34 = 'incidents-event-34-created' | 'incidents-event-34-updated' | 'incidents-event-34-resolved';
export interface IncidentsDomainEvent34 {
  kind: IncidentsEventKind34;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind35 = 'incidents-event-35-created' | 'incidents-event-35-updated' | 'incidents-event-35-resolved';
export interface IncidentsDomainEvent35 {
  kind: IncidentsEventKind35;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind36 = 'incidents-event-36-created' | 'incidents-event-36-updated' | 'incidents-event-36-resolved';
export interface IncidentsDomainEvent36 {
  kind: IncidentsEventKind36;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind37 = 'incidents-event-37-created' | 'incidents-event-37-updated' | 'incidents-event-37-resolved';
export interface IncidentsDomainEvent37 {
  kind: IncidentsEventKind37;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind38 = 'incidents-event-38-created' | 'incidents-event-38-updated' | 'incidents-event-38-resolved';
export interface IncidentsDomainEvent38 {
  kind: IncidentsEventKind38;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type IncidentsEventKind39 = 'incidents-event-39-created' | 'incidents-event-39-updated' | 'incidents-event-39-resolved';
export interface IncidentsDomainEvent39 {
  kind: IncidentsEventKind39;
  aggregateId: IncidentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}
