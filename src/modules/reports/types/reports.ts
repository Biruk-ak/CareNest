/** CareNest domain types — Reports */
export type ReportsId = string & { readonly __brand: 'ReportsId' };
export type ReportsStatus = 'draft' | 'active' | 'paused' | 'completed' | 'cancelled' | 'archived';
export type ReportsPriority = 'low' | 'normal' | 'high' | 'critical';
export type ReportsVisibility = 'private' | 'care-team' | 'facility' | 'admin';

export interface ReportsAuditMeta {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  version: number;
  facilityId: string;
}

export interface ReportsRecord extends ReportsAuditMeta {
  id: ReportsId;
  title: string;
  description: string;
  status: ReportsStatus;
  priority: ReportsPriority;
  visibility: ReportsVisibility;
  residentId: string;
  caregiverId?: string;
  tags: string[];
  notes: string[];
  metadata: Record<string, string | number | boolean | null>;
}

export interface ReportsFilter {
  status?: ReportsStatus[];
  priority?: ReportsPriority[];
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

export interface ReportsPage {
  items: ReportsRecord[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ReportsCreateInput {
  title: string;
  description: string;
  status?: ReportsStatus;
  priority?: ReportsPriority;
  visibility?: ReportsVisibility;
  residentId: string;
  caregiverId?: string;
  tags?: string[];
  notes?: string[];
  metadata?: Record<string, string | number | boolean | null>;
}

export interface ReportsUpdateInput extends Partial<ReportsCreateInput> {
  id: ReportsId;
}

export interface ReportsSummary {
  total: number;
  active: number;
  critical: number;
  completedThisWeek: number;
  overdue: number;
}

export interface ReportsDetailBlock1 {
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

export interface ReportsDetailBlock2 {
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

export interface ReportsDetailBlock3 {
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

export interface ReportsDetailBlock4 {
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

export interface ReportsDetailBlock5 {
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

export interface ReportsDetailBlock6 {
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

export interface ReportsDetailBlock7 {
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

export interface ReportsDetailBlock8 {
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

export interface ReportsDetailBlock9 {
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

export interface ReportsDetailBlock10 {
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

export interface ReportsDetailBlock11 {
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

export interface ReportsDetailBlock12 {
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

export interface ReportsDetailBlock13 {
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

export interface ReportsDetailBlock14 {
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

export interface ReportsDetailBlock15 {
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

export interface ReportsDetailBlock16 {
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

export interface ReportsDetailBlock17 {
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

export interface ReportsDetailBlock18 {
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

export interface ReportsDetailBlock19 {
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

export interface ReportsDetailBlock20 {
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

export interface ReportsDetailBlock21 {
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

export interface ReportsDetailBlock22 {
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

export interface ReportsDetailBlock23 {
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

export interface ReportsDetailBlock24 {
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

export interface ReportsDetailBlock25 {
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

export interface ReportsDetailBlock26 {
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

export interface ReportsDetailBlock27 {
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

export interface ReportsDetailBlock28 {
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

export interface ReportsDetailBlock29 {
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

export interface ReportsDetailBlock30 {
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

export interface ReportsDetailBlock31 {
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

export interface ReportsDetailBlock32 {
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

export interface ReportsDetailBlock33 {
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

export interface ReportsDetailBlock34 {
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

export interface ReportsDetailBlock35 {
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

export interface ReportsDetailBlock36 {
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

export interface ReportsDetailBlock37 {
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

export interface ReportsDetailBlock38 {
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

export interface ReportsDetailBlock39 {
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

export interface ReportsDetailBlock40 {
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

export interface ReportsDetailBlock41 {
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

export interface ReportsDetailBlock42 {
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

export interface ReportsDetailBlock43 {
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

export interface ReportsDetailBlock44 {
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

export interface ReportsDetailBlock45 {
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

export interface ReportsDetailBlock46 {
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

export interface ReportsDetailBlock47 {
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

export interface ReportsDetailBlock48 {
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

export interface ReportsDetailBlock49 {
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

export interface ReportsDetailBlock50 {
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

export interface ReportsDetailBlock51 {
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

export interface ReportsDetailBlock52 {
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

export interface ReportsDetailBlock53 {
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

export interface ReportsDetailBlock54 {
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

export type ReportsEventKind1 = 'reports-event-1-created' | 'reports-event-1-updated' | 'reports-event-1-resolved';
export interface ReportsDomainEvent1 {
  kind: ReportsEventKind1;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind2 = 'reports-event-2-created' | 'reports-event-2-updated' | 'reports-event-2-resolved';
export interface ReportsDomainEvent2 {
  kind: ReportsEventKind2;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind3 = 'reports-event-3-created' | 'reports-event-3-updated' | 'reports-event-3-resolved';
export interface ReportsDomainEvent3 {
  kind: ReportsEventKind3;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind4 = 'reports-event-4-created' | 'reports-event-4-updated' | 'reports-event-4-resolved';
export interface ReportsDomainEvent4 {
  kind: ReportsEventKind4;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind5 = 'reports-event-5-created' | 'reports-event-5-updated' | 'reports-event-5-resolved';
export interface ReportsDomainEvent5 {
  kind: ReportsEventKind5;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind6 = 'reports-event-6-created' | 'reports-event-6-updated' | 'reports-event-6-resolved';
export interface ReportsDomainEvent6 {
  kind: ReportsEventKind6;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind7 = 'reports-event-7-created' | 'reports-event-7-updated' | 'reports-event-7-resolved';
export interface ReportsDomainEvent7 {
  kind: ReportsEventKind7;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind8 = 'reports-event-8-created' | 'reports-event-8-updated' | 'reports-event-8-resolved';
export interface ReportsDomainEvent8 {
  kind: ReportsEventKind8;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind9 = 'reports-event-9-created' | 'reports-event-9-updated' | 'reports-event-9-resolved';
export interface ReportsDomainEvent9 {
  kind: ReportsEventKind9;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind10 = 'reports-event-10-created' | 'reports-event-10-updated' | 'reports-event-10-resolved';
export interface ReportsDomainEvent10 {
  kind: ReportsEventKind10;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind11 = 'reports-event-11-created' | 'reports-event-11-updated' | 'reports-event-11-resolved';
export interface ReportsDomainEvent11 {
  kind: ReportsEventKind11;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind12 = 'reports-event-12-created' | 'reports-event-12-updated' | 'reports-event-12-resolved';
export interface ReportsDomainEvent12 {
  kind: ReportsEventKind12;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind13 = 'reports-event-13-created' | 'reports-event-13-updated' | 'reports-event-13-resolved';
export interface ReportsDomainEvent13 {
  kind: ReportsEventKind13;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind14 = 'reports-event-14-created' | 'reports-event-14-updated' | 'reports-event-14-resolved';
export interface ReportsDomainEvent14 {
  kind: ReportsEventKind14;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind15 = 'reports-event-15-created' | 'reports-event-15-updated' | 'reports-event-15-resolved';
export interface ReportsDomainEvent15 {
  kind: ReportsEventKind15;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind16 = 'reports-event-16-created' | 'reports-event-16-updated' | 'reports-event-16-resolved';
export interface ReportsDomainEvent16 {
  kind: ReportsEventKind16;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind17 = 'reports-event-17-created' | 'reports-event-17-updated' | 'reports-event-17-resolved';
export interface ReportsDomainEvent17 {
  kind: ReportsEventKind17;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind18 = 'reports-event-18-created' | 'reports-event-18-updated' | 'reports-event-18-resolved';
export interface ReportsDomainEvent18 {
  kind: ReportsEventKind18;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind19 = 'reports-event-19-created' | 'reports-event-19-updated' | 'reports-event-19-resolved';
export interface ReportsDomainEvent19 {
  kind: ReportsEventKind19;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind20 = 'reports-event-20-created' | 'reports-event-20-updated' | 'reports-event-20-resolved';
export interface ReportsDomainEvent20 {
  kind: ReportsEventKind20;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind21 = 'reports-event-21-created' | 'reports-event-21-updated' | 'reports-event-21-resolved';
export interface ReportsDomainEvent21 {
  kind: ReportsEventKind21;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind22 = 'reports-event-22-created' | 'reports-event-22-updated' | 'reports-event-22-resolved';
export interface ReportsDomainEvent22 {
  kind: ReportsEventKind22;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind23 = 'reports-event-23-created' | 'reports-event-23-updated' | 'reports-event-23-resolved';
export interface ReportsDomainEvent23 {
  kind: ReportsEventKind23;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind24 = 'reports-event-24-created' | 'reports-event-24-updated' | 'reports-event-24-resolved';
export interface ReportsDomainEvent24 {
  kind: ReportsEventKind24;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind25 = 'reports-event-25-created' | 'reports-event-25-updated' | 'reports-event-25-resolved';
export interface ReportsDomainEvent25 {
  kind: ReportsEventKind25;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind26 = 'reports-event-26-created' | 'reports-event-26-updated' | 'reports-event-26-resolved';
export interface ReportsDomainEvent26 {
  kind: ReportsEventKind26;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind27 = 'reports-event-27-created' | 'reports-event-27-updated' | 'reports-event-27-resolved';
export interface ReportsDomainEvent27 {
  kind: ReportsEventKind27;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind28 = 'reports-event-28-created' | 'reports-event-28-updated' | 'reports-event-28-resolved';
export interface ReportsDomainEvent28 {
  kind: ReportsEventKind28;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind29 = 'reports-event-29-created' | 'reports-event-29-updated' | 'reports-event-29-resolved';
export interface ReportsDomainEvent29 {
  kind: ReportsEventKind29;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind30 = 'reports-event-30-created' | 'reports-event-30-updated' | 'reports-event-30-resolved';
export interface ReportsDomainEvent30 {
  kind: ReportsEventKind30;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind31 = 'reports-event-31-created' | 'reports-event-31-updated' | 'reports-event-31-resolved';
export interface ReportsDomainEvent31 {
  kind: ReportsEventKind31;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind32 = 'reports-event-32-created' | 'reports-event-32-updated' | 'reports-event-32-resolved';
export interface ReportsDomainEvent32 {
  kind: ReportsEventKind32;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind33 = 'reports-event-33-created' | 'reports-event-33-updated' | 'reports-event-33-resolved';
export interface ReportsDomainEvent33 {
  kind: ReportsEventKind33;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind34 = 'reports-event-34-created' | 'reports-event-34-updated' | 'reports-event-34-resolved';
export interface ReportsDomainEvent34 {
  kind: ReportsEventKind34;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind35 = 'reports-event-35-created' | 'reports-event-35-updated' | 'reports-event-35-resolved';
export interface ReportsDomainEvent35 {
  kind: ReportsEventKind35;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind36 = 'reports-event-36-created' | 'reports-event-36-updated' | 'reports-event-36-resolved';
export interface ReportsDomainEvent36 {
  kind: ReportsEventKind36;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind37 = 'reports-event-37-created' | 'reports-event-37-updated' | 'reports-event-37-resolved';
export interface ReportsDomainEvent37 {
  kind: ReportsEventKind37;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind38 = 'reports-event-38-created' | 'reports-event-38-updated' | 'reports-event-38-resolved';
export interface ReportsDomainEvent38 {
  kind: ReportsEventKind38;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type ReportsEventKind39 = 'reports-event-39-created' | 'reports-event-39-updated' | 'reports-event-39-resolved';
export interface ReportsDomainEvent39 {
  kind: ReportsEventKind39;
  aggregateId: ReportsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}
