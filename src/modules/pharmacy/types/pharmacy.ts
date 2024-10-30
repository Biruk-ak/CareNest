/** CareNest domain types — Pharmacy */
export type PharmacyId = string & { readonly __brand: 'PharmacyId' };
export type PharmacyStatus = 'draft' | 'active' | 'paused' | 'completed' | 'cancelled' | 'archived';
export type PharmacyPriority = 'low' | 'normal' | 'high' | 'critical';
export type PharmacyVisibility = 'private' | 'care-team' | 'facility' | 'admin';

export interface PharmacyAuditMeta {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  version: number;
  facilityId: string;
}

export interface PharmacyRecord extends PharmacyAuditMeta {
  id: PharmacyId;
  title: string;
  description: string;
  status: PharmacyStatus;
  priority: PharmacyPriority;
  visibility: PharmacyVisibility;
  residentId: string;
  caregiverId?: string;
  tags: string[];
  notes: string[];
  metadata: Record<string, string | number | boolean | null>;
}

export interface PharmacyFilter {
  status?: PharmacyStatus[];
  priority?: PharmacyPriority[];
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

export interface PharmacyPage {
  items: PharmacyRecord[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface PharmacyCreateInput {
  title: string;
  description: string;
  status?: PharmacyStatus;
  priority?: PharmacyPriority;
  visibility?: PharmacyVisibility;
  residentId: string;
  caregiverId?: string;
  tags?: string[];
  notes?: string[];
  metadata?: Record<string, string | number | boolean | null>;
}

export interface PharmacyUpdateInput extends Partial<PharmacyCreateInput> {
  id: PharmacyId;
}

export interface PharmacySummary {
  total: number;
  active: number;
  critical: number;
  completedThisWeek: number;
  overdue: number;
}

export interface PharmacyDetailBlock1 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock2 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock3 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock4 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock5 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock6 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock7 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock8 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock9 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock10 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock11 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock12 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock13 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock14 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock15 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock16 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock17 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock18 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock19 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock20 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock21 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock22 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock23 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock24 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock25 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock26 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock27 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock28 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock29 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock30 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock31 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock32 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock33 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock34 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock35 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock36 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock37 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock38 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock39 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock40 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock41 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock42 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock43 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock44 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock45 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock46 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock47 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock48 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock49 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock50 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock51 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock52 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock53 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PharmacyDetailBlock54 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export type PharmacyEventKind1 = 'pharmacy-event-1-created' | 'pharmacy-event-1-updated' | 'pharmacy-event-1-resolved';
export interface PharmacyDomainEvent1 {
  kind: PharmacyEventKind1;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind2 = 'pharmacy-event-2-created' | 'pharmacy-event-2-updated' | 'pharmacy-event-2-resolved';
export interface PharmacyDomainEvent2 {
  kind: PharmacyEventKind2;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind3 = 'pharmacy-event-3-created' | 'pharmacy-event-3-updated' | 'pharmacy-event-3-resolved';
export interface PharmacyDomainEvent3 {
  kind: PharmacyEventKind3;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind4 = 'pharmacy-event-4-created' | 'pharmacy-event-4-updated' | 'pharmacy-event-4-resolved';
export interface PharmacyDomainEvent4 {
  kind: PharmacyEventKind4;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind5 = 'pharmacy-event-5-created' | 'pharmacy-event-5-updated' | 'pharmacy-event-5-resolved';
export interface PharmacyDomainEvent5 {
  kind: PharmacyEventKind5;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind6 = 'pharmacy-event-6-created' | 'pharmacy-event-6-updated' | 'pharmacy-event-6-resolved';
export interface PharmacyDomainEvent6 {
  kind: PharmacyEventKind6;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind7 = 'pharmacy-event-7-created' | 'pharmacy-event-7-updated' | 'pharmacy-event-7-resolved';
export interface PharmacyDomainEvent7 {
  kind: PharmacyEventKind7;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind8 = 'pharmacy-event-8-created' | 'pharmacy-event-8-updated' | 'pharmacy-event-8-resolved';
export interface PharmacyDomainEvent8 {
  kind: PharmacyEventKind8;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind9 = 'pharmacy-event-9-created' | 'pharmacy-event-9-updated' | 'pharmacy-event-9-resolved';
export interface PharmacyDomainEvent9 {
  kind: PharmacyEventKind9;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind10 = 'pharmacy-event-10-created' | 'pharmacy-event-10-updated' | 'pharmacy-event-10-resolved';
export interface PharmacyDomainEvent10 {
  kind: PharmacyEventKind10;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind11 = 'pharmacy-event-11-created' | 'pharmacy-event-11-updated' | 'pharmacy-event-11-resolved';
export interface PharmacyDomainEvent11 {
  kind: PharmacyEventKind11;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind12 = 'pharmacy-event-12-created' | 'pharmacy-event-12-updated' | 'pharmacy-event-12-resolved';
export interface PharmacyDomainEvent12 {
  kind: PharmacyEventKind12;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind13 = 'pharmacy-event-13-created' | 'pharmacy-event-13-updated' | 'pharmacy-event-13-resolved';
export interface PharmacyDomainEvent13 {
  kind: PharmacyEventKind13;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind14 = 'pharmacy-event-14-created' | 'pharmacy-event-14-updated' | 'pharmacy-event-14-resolved';
export interface PharmacyDomainEvent14 {
  kind: PharmacyEventKind14;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind15 = 'pharmacy-event-15-created' | 'pharmacy-event-15-updated' | 'pharmacy-event-15-resolved';
export interface PharmacyDomainEvent15 {
  kind: PharmacyEventKind15;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind16 = 'pharmacy-event-16-created' | 'pharmacy-event-16-updated' | 'pharmacy-event-16-resolved';
export interface PharmacyDomainEvent16 {
  kind: PharmacyEventKind16;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind17 = 'pharmacy-event-17-created' | 'pharmacy-event-17-updated' | 'pharmacy-event-17-resolved';
export interface PharmacyDomainEvent17 {
  kind: PharmacyEventKind17;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind18 = 'pharmacy-event-18-created' | 'pharmacy-event-18-updated' | 'pharmacy-event-18-resolved';
export interface PharmacyDomainEvent18 {
  kind: PharmacyEventKind18;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind19 = 'pharmacy-event-19-created' | 'pharmacy-event-19-updated' | 'pharmacy-event-19-resolved';
export interface PharmacyDomainEvent19 {
  kind: PharmacyEventKind19;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind20 = 'pharmacy-event-20-created' | 'pharmacy-event-20-updated' | 'pharmacy-event-20-resolved';
export interface PharmacyDomainEvent20 {
  kind: PharmacyEventKind20;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind21 = 'pharmacy-event-21-created' | 'pharmacy-event-21-updated' | 'pharmacy-event-21-resolved';
export interface PharmacyDomainEvent21 {
  kind: PharmacyEventKind21;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind22 = 'pharmacy-event-22-created' | 'pharmacy-event-22-updated' | 'pharmacy-event-22-resolved';
export interface PharmacyDomainEvent22 {
  kind: PharmacyEventKind22;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind23 = 'pharmacy-event-23-created' | 'pharmacy-event-23-updated' | 'pharmacy-event-23-resolved';
export interface PharmacyDomainEvent23 {
  kind: PharmacyEventKind23;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind24 = 'pharmacy-event-24-created' | 'pharmacy-event-24-updated' | 'pharmacy-event-24-resolved';
export interface PharmacyDomainEvent24 {
  kind: PharmacyEventKind24;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind25 = 'pharmacy-event-25-created' | 'pharmacy-event-25-updated' | 'pharmacy-event-25-resolved';
export interface PharmacyDomainEvent25 {
  kind: PharmacyEventKind25;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind26 = 'pharmacy-event-26-created' | 'pharmacy-event-26-updated' | 'pharmacy-event-26-resolved';
export interface PharmacyDomainEvent26 {
  kind: PharmacyEventKind26;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind27 = 'pharmacy-event-27-created' | 'pharmacy-event-27-updated' | 'pharmacy-event-27-resolved';
export interface PharmacyDomainEvent27 {
  kind: PharmacyEventKind27;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind28 = 'pharmacy-event-28-created' | 'pharmacy-event-28-updated' | 'pharmacy-event-28-resolved';
export interface PharmacyDomainEvent28 {
  kind: PharmacyEventKind28;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind29 = 'pharmacy-event-29-created' | 'pharmacy-event-29-updated' | 'pharmacy-event-29-resolved';
export interface PharmacyDomainEvent29 {
  kind: PharmacyEventKind29;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind30 = 'pharmacy-event-30-created' | 'pharmacy-event-30-updated' | 'pharmacy-event-30-resolved';
export interface PharmacyDomainEvent30 {
  kind: PharmacyEventKind30;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind31 = 'pharmacy-event-31-created' | 'pharmacy-event-31-updated' | 'pharmacy-event-31-resolved';
export interface PharmacyDomainEvent31 {
  kind: PharmacyEventKind31;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind32 = 'pharmacy-event-32-created' | 'pharmacy-event-32-updated' | 'pharmacy-event-32-resolved';
export interface PharmacyDomainEvent32 {
  kind: PharmacyEventKind32;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind33 = 'pharmacy-event-33-created' | 'pharmacy-event-33-updated' | 'pharmacy-event-33-resolved';
export interface PharmacyDomainEvent33 {
  kind: PharmacyEventKind33;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind34 = 'pharmacy-event-34-created' | 'pharmacy-event-34-updated' | 'pharmacy-event-34-resolved';
export interface PharmacyDomainEvent34 {
  kind: PharmacyEventKind34;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind35 = 'pharmacy-event-35-created' | 'pharmacy-event-35-updated' | 'pharmacy-event-35-resolved';
export interface PharmacyDomainEvent35 {
  kind: PharmacyEventKind35;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind36 = 'pharmacy-event-36-created' | 'pharmacy-event-36-updated' | 'pharmacy-event-36-resolved';
export interface PharmacyDomainEvent36 {
  kind: PharmacyEventKind36;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind37 = 'pharmacy-event-37-created' | 'pharmacy-event-37-updated' | 'pharmacy-event-37-resolved';
export interface PharmacyDomainEvent37 {
  kind: PharmacyEventKind37;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind38 = 'pharmacy-event-38-created' | 'pharmacy-event-38-updated' | 'pharmacy-event-38-resolved';
export interface PharmacyDomainEvent38 {
  kind: PharmacyEventKind38;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PharmacyEventKind39 = 'pharmacy-event-39-created' | 'pharmacy-event-39-updated' | 'pharmacy-event-39-resolved';
export interface PharmacyDomainEvent39 {
  kind: PharmacyEventKind39;
  aggregateId: PharmacyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}
