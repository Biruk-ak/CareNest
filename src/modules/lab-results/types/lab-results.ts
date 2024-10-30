/** CareNest domain types — LabResults */
export type LabResultsId = string & { readonly __brand: 'LabResultsId' };
export type LabResultsStatus = 'draft' | 'active' | 'paused' | 'completed' | 'cancelled' | 'archived';
export type LabResultsPriority = 'low' | 'normal' | 'high' | 'critical';
export type LabResultsVisibility = 'private' | 'care-team' | 'facility' | 'admin';

export interface LabResultsAuditMeta {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  version: number;
  facilityId: string;
}

export interface LabResultsRecord extends LabResultsAuditMeta {
  id: LabResultsId;
  title: string;
  description: string;
  status: LabResultsStatus;
  priority: LabResultsPriority;
  visibility: LabResultsVisibility;
  residentId: string;
  caregiverId?: string;
  tags: string[];
  notes: string[];
  metadata: Record<string, string | number | boolean | null>;
}

export interface LabResultsFilter {
  status?: LabResultsStatus[];
  priority?: LabResultsPriority[];
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

export interface LabResultsPage {
  items: LabResultsRecord[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface LabResultsCreateInput {
  title: string;
  description: string;
  status?: LabResultsStatus;
  priority?: LabResultsPriority;
  visibility?: LabResultsVisibility;
  residentId: string;
  caregiverId?: string;
  tags?: string[];
  notes?: string[];
  metadata?: Record<string, string | number | boolean | null>;
}

export interface LabResultsUpdateInput extends Partial<LabResultsCreateInput> {
  id: LabResultsId;
}

export interface LabResultsSummary {
  total: number;
  active: number;
  critical: number;
  completedThisWeek: number;
  overdue: number;
}

export interface LabResultsDetailBlock1 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock2 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock3 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock4 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock5 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock6 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock7 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock8 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock9 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock10 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock11 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock12 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock13 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock14 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock15 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock16 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock17 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock18 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock19 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock20 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock21 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock22 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock23 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock24 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock25 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock26 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock27 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock28 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock29 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock30 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock31 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock32 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock33 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock34 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock35 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock36 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock37 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock38 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock39 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock40 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock41 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock42 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock43 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock44 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock45 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock46 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock47 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock48 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock49 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock50 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock51 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock52 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock53 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface LabResultsDetailBlock54 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export type LabResultsEventKind1 = 'lab-results-event-1-created' | 'lab-results-event-1-updated' | 'lab-results-event-1-resolved';
export interface LabResultsDomainEvent1 {
  kind: LabResultsEventKind1;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind2 = 'lab-results-event-2-created' | 'lab-results-event-2-updated' | 'lab-results-event-2-resolved';
export interface LabResultsDomainEvent2 {
  kind: LabResultsEventKind2;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind3 = 'lab-results-event-3-created' | 'lab-results-event-3-updated' | 'lab-results-event-3-resolved';
export interface LabResultsDomainEvent3 {
  kind: LabResultsEventKind3;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind4 = 'lab-results-event-4-created' | 'lab-results-event-4-updated' | 'lab-results-event-4-resolved';
export interface LabResultsDomainEvent4 {
  kind: LabResultsEventKind4;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind5 = 'lab-results-event-5-created' | 'lab-results-event-5-updated' | 'lab-results-event-5-resolved';
export interface LabResultsDomainEvent5 {
  kind: LabResultsEventKind5;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind6 = 'lab-results-event-6-created' | 'lab-results-event-6-updated' | 'lab-results-event-6-resolved';
export interface LabResultsDomainEvent6 {
  kind: LabResultsEventKind6;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind7 = 'lab-results-event-7-created' | 'lab-results-event-7-updated' | 'lab-results-event-7-resolved';
export interface LabResultsDomainEvent7 {
  kind: LabResultsEventKind7;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind8 = 'lab-results-event-8-created' | 'lab-results-event-8-updated' | 'lab-results-event-8-resolved';
export interface LabResultsDomainEvent8 {
  kind: LabResultsEventKind8;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind9 = 'lab-results-event-9-created' | 'lab-results-event-9-updated' | 'lab-results-event-9-resolved';
export interface LabResultsDomainEvent9 {
  kind: LabResultsEventKind9;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind10 = 'lab-results-event-10-created' | 'lab-results-event-10-updated' | 'lab-results-event-10-resolved';
export interface LabResultsDomainEvent10 {
  kind: LabResultsEventKind10;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind11 = 'lab-results-event-11-created' | 'lab-results-event-11-updated' | 'lab-results-event-11-resolved';
export interface LabResultsDomainEvent11 {
  kind: LabResultsEventKind11;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind12 = 'lab-results-event-12-created' | 'lab-results-event-12-updated' | 'lab-results-event-12-resolved';
export interface LabResultsDomainEvent12 {
  kind: LabResultsEventKind12;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind13 = 'lab-results-event-13-created' | 'lab-results-event-13-updated' | 'lab-results-event-13-resolved';
export interface LabResultsDomainEvent13 {
  kind: LabResultsEventKind13;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind14 = 'lab-results-event-14-created' | 'lab-results-event-14-updated' | 'lab-results-event-14-resolved';
export interface LabResultsDomainEvent14 {
  kind: LabResultsEventKind14;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind15 = 'lab-results-event-15-created' | 'lab-results-event-15-updated' | 'lab-results-event-15-resolved';
export interface LabResultsDomainEvent15 {
  kind: LabResultsEventKind15;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind16 = 'lab-results-event-16-created' | 'lab-results-event-16-updated' | 'lab-results-event-16-resolved';
export interface LabResultsDomainEvent16 {
  kind: LabResultsEventKind16;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind17 = 'lab-results-event-17-created' | 'lab-results-event-17-updated' | 'lab-results-event-17-resolved';
export interface LabResultsDomainEvent17 {
  kind: LabResultsEventKind17;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind18 = 'lab-results-event-18-created' | 'lab-results-event-18-updated' | 'lab-results-event-18-resolved';
export interface LabResultsDomainEvent18 {
  kind: LabResultsEventKind18;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind19 = 'lab-results-event-19-created' | 'lab-results-event-19-updated' | 'lab-results-event-19-resolved';
export interface LabResultsDomainEvent19 {
  kind: LabResultsEventKind19;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind20 = 'lab-results-event-20-created' | 'lab-results-event-20-updated' | 'lab-results-event-20-resolved';
export interface LabResultsDomainEvent20 {
  kind: LabResultsEventKind20;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind21 = 'lab-results-event-21-created' | 'lab-results-event-21-updated' | 'lab-results-event-21-resolved';
export interface LabResultsDomainEvent21 {
  kind: LabResultsEventKind21;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind22 = 'lab-results-event-22-created' | 'lab-results-event-22-updated' | 'lab-results-event-22-resolved';
export interface LabResultsDomainEvent22 {
  kind: LabResultsEventKind22;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind23 = 'lab-results-event-23-created' | 'lab-results-event-23-updated' | 'lab-results-event-23-resolved';
export interface LabResultsDomainEvent23 {
  kind: LabResultsEventKind23;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind24 = 'lab-results-event-24-created' | 'lab-results-event-24-updated' | 'lab-results-event-24-resolved';
export interface LabResultsDomainEvent24 {
  kind: LabResultsEventKind24;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind25 = 'lab-results-event-25-created' | 'lab-results-event-25-updated' | 'lab-results-event-25-resolved';
export interface LabResultsDomainEvent25 {
  kind: LabResultsEventKind25;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind26 = 'lab-results-event-26-created' | 'lab-results-event-26-updated' | 'lab-results-event-26-resolved';
export interface LabResultsDomainEvent26 {
  kind: LabResultsEventKind26;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind27 = 'lab-results-event-27-created' | 'lab-results-event-27-updated' | 'lab-results-event-27-resolved';
export interface LabResultsDomainEvent27 {
  kind: LabResultsEventKind27;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind28 = 'lab-results-event-28-created' | 'lab-results-event-28-updated' | 'lab-results-event-28-resolved';
export interface LabResultsDomainEvent28 {
  kind: LabResultsEventKind28;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind29 = 'lab-results-event-29-created' | 'lab-results-event-29-updated' | 'lab-results-event-29-resolved';
export interface LabResultsDomainEvent29 {
  kind: LabResultsEventKind29;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind30 = 'lab-results-event-30-created' | 'lab-results-event-30-updated' | 'lab-results-event-30-resolved';
export interface LabResultsDomainEvent30 {
  kind: LabResultsEventKind30;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind31 = 'lab-results-event-31-created' | 'lab-results-event-31-updated' | 'lab-results-event-31-resolved';
export interface LabResultsDomainEvent31 {
  kind: LabResultsEventKind31;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind32 = 'lab-results-event-32-created' | 'lab-results-event-32-updated' | 'lab-results-event-32-resolved';
export interface LabResultsDomainEvent32 {
  kind: LabResultsEventKind32;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind33 = 'lab-results-event-33-created' | 'lab-results-event-33-updated' | 'lab-results-event-33-resolved';
export interface LabResultsDomainEvent33 {
  kind: LabResultsEventKind33;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind34 = 'lab-results-event-34-created' | 'lab-results-event-34-updated' | 'lab-results-event-34-resolved';
export interface LabResultsDomainEvent34 {
  kind: LabResultsEventKind34;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind35 = 'lab-results-event-35-created' | 'lab-results-event-35-updated' | 'lab-results-event-35-resolved';
export interface LabResultsDomainEvent35 {
  kind: LabResultsEventKind35;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind36 = 'lab-results-event-36-created' | 'lab-results-event-36-updated' | 'lab-results-event-36-resolved';
export interface LabResultsDomainEvent36 {
  kind: LabResultsEventKind36;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind37 = 'lab-results-event-37-created' | 'lab-results-event-37-updated' | 'lab-results-event-37-resolved';
export interface LabResultsDomainEvent37 {
  kind: LabResultsEventKind37;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind38 = 'lab-results-event-38-created' | 'lab-results-event-38-updated' | 'lab-results-event-38-resolved';
export interface LabResultsDomainEvent38 {
  kind: LabResultsEventKind38;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type LabResultsEventKind39 = 'lab-results-event-39-created' | 'lab-results-event-39-updated' | 'lab-results-event-39-resolved';
export interface LabResultsDomainEvent39 {
  kind: LabResultsEventKind39;
  aggregateId: LabResultsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}
