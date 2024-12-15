/** CareNest domain types — Therapy */
export type TherapyId = string & { readonly __brand: 'TherapyId' };
export type TherapyStatus = 'draft' | 'active' | 'paused' | 'completed' | 'cancelled' | 'archived';
export type TherapyPriority = 'low' | 'normal' | 'high' | 'critical';
export type TherapyVisibility = 'private' | 'care-team' | 'facility' | 'admin';

export interface TherapyAuditMeta {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  version: number;
  facilityId: string;
}

export interface TherapyRecord extends TherapyAuditMeta {
  id: TherapyId;
  title: string;
  description: string;
  status: TherapyStatus;
  priority: TherapyPriority;
  visibility: TherapyVisibility;
  residentId: string;
  caregiverId?: string;
  tags: string[];
  notes: string[];
  metadata: Record<string, string | number | boolean | null>;
}

export interface TherapyFilter {
  status?: TherapyStatus[];
  priority?: TherapyPriority[];
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

export interface TherapyPage {
  items: TherapyRecord[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface TherapyCreateInput {
  title: string;
  description: string;
  status?: TherapyStatus;
  priority?: TherapyPriority;
  visibility?: TherapyVisibility;
  residentId: string;
  caregiverId?: string;
  tags?: string[];
  notes?: string[];
  metadata?: Record<string, string | number | boolean | null>;
}

export interface TherapyUpdateInput extends Partial<TherapyCreateInput> {
  id: TherapyId;
}

export interface TherapySummary {
  total: number;
  active: number;
  critical: number;
  completedThisWeek: number;
  overdue: number;
}

export interface TherapyDetailBlock1 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock2 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock3 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock4 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock5 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock6 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock7 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock8 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock9 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock10 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock11 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock12 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock13 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock14 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock15 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock16 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock17 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock18 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock19 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock20 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock21 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock22 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock23 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock24 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock25 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock26 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock27 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock28 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock29 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock30 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock31 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock32 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock33 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock34 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock35 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock36 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock37 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock38 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock39 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock40 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock41 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock42 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock43 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock44 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock45 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock46 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock47 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock48 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock49 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock50 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock51 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock52 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock53 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface TherapyDetailBlock54 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export type TherapyEventKind1 = 'therapy-event-1-created' | 'therapy-event-1-updated' | 'therapy-event-1-resolved';
export interface TherapyDomainEvent1 {
  kind: TherapyEventKind1;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind2 = 'therapy-event-2-created' | 'therapy-event-2-updated' | 'therapy-event-2-resolved';
export interface TherapyDomainEvent2 {
  kind: TherapyEventKind2;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind3 = 'therapy-event-3-created' | 'therapy-event-3-updated' | 'therapy-event-3-resolved';
export interface TherapyDomainEvent3 {
  kind: TherapyEventKind3;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind4 = 'therapy-event-4-created' | 'therapy-event-4-updated' | 'therapy-event-4-resolved';
export interface TherapyDomainEvent4 {
  kind: TherapyEventKind4;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind5 = 'therapy-event-5-created' | 'therapy-event-5-updated' | 'therapy-event-5-resolved';
export interface TherapyDomainEvent5 {
  kind: TherapyEventKind5;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind6 = 'therapy-event-6-created' | 'therapy-event-6-updated' | 'therapy-event-6-resolved';
export interface TherapyDomainEvent6 {
  kind: TherapyEventKind6;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind7 = 'therapy-event-7-created' | 'therapy-event-7-updated' | 'therapy-event-7-resolved';
export interface TherapyDomainEvent7 {
  kind: TherapyEventKind7;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind8 = 'therapy-event-8-created' | 'therapy-event-8-updated' | 'therapy-event-8-resolved';
export interface TherapyDomainEvent8 {
  kind: TherapyEventKind8;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind9 = 'therapy-event-9-created' | 'therapy-event-9-updated' | 'therapy-event-9-resolved';
export interface TherapyDomainEvent9 {
  kind: TherapyEventKind9;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind10 = 'therapy-event-10-created' | 'therapy-event-10-updated' | 'therapy-event-10-resolved';
export interface TherapyDomainEvent10 {
  kind: TherapyEventKind10;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind11 = 'therapy-event-11-created' | 'therapy-event-11-updated' | 'therapy-event-11-resolved';
export interface TherapyDomainEvent11 {
  kind: TherapyEventKind11;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind12 = 'therapy-event-12-created' | 'therapy-event-12-updated' | 'therapy-event-12-resolved';
export interface TherapyDomainEvent12 {
  kind: TherapyEventKind12;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind13 = 'therapy-event-13-created' | 'therapy-event-13-updated' | 'therapy-event-13-resolved';
export interface TherapyDomainEvent13 {
  kind: TherapyEventKind13;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind14 = 'therapy-event-14-created' | 'therapy-event-14-updated' | 'therapy-event-14-resolved';
export interface TherapyDomainEvent14 {
  kind: TherapyEventKind14;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind15 = 'therapy-event-15-created' | 'therapy-event-15-updated' | 'therapy-event-15-resolved';
export interface TherapyDomainEvent15 {
  kind: TherapyEventKind15;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind16 = 'therapy-event-16-created' | 'therapy-event-16-updated' | 'therapy-event-16-resolved';
export interface TherapyDomainEvent16 {
  kind: TherapyEventKind16;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind17 = 'therapy-event-17-created' | 'therapy-event-17-updated' | 'therapy-event-17-resolved';
export interface TherapyDomainEvent17 {
  kind: TherapyEventKind17;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind18 = 'therapy-event-18-created' | 'therapy-event-18-updated' | 'therapy-event-18-resolved';
export interface TherapyDomainEvent18 {
  kind: TherapyEventKind18;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind19 = 'therapy-event-19-created' | 'therapy-event-19-updated' | 'therapy-event-19-resolved';
export interface TherapyDomainEvent19 {
  kind: TherapyEventKind19;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind20 = 'therapy-event-20-created' | 'therapy-event-20-updated' | 'therapy-event-20-resolved';
export interface TherapyDomainEvent20 {
  kind: TherapyEventKind20;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind21 = 'therapy-event-21-created' | 'therapy-event-21-updated' | 'therapy-event-21-resolved';
export interface TherapyDomainEvent21 {
  kind: TherapyEventKind21;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind22 = 'therapy-event-22-created' | 'therapy-event-22-updated' | 'therapy-event-22-resolved';
export interface TherapyDomainEvent22 {
  kind: TherapyEventKind22;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind23 = 'therapy-event-23-created' | 'therapy-event-23-updated' | 'therapy-event-23-resolved';
export interface TherapyDomainEvent23 {
  kind: TherapyEventKind23;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind24 = 'therapy-event-24-created' | 'therapy-event-24-updated' | 'therapy-event-24-resolved';
export interface TherapyDomainEvent24 {
  kind: TherapyEventKind24;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind25 = 'therapy-event-25-created' | 'therapy-event-25-updated' | 'therapy-event-25-resolved';
export interface TherapyDomainEvent25 {
  kind: TherapyEventKind25;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind26 = 'therapy-event-26-created' | 'therapy-event-26-updated' | 'therapy-event-26-resolved';
export interface TherapyDomainEvent26 {
  kind: TherapyEventKind26;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind27 = 'therapy-event-27-created' | 'therapy-event-27-updated' | 'therapy-event-27-resolved';
export interface TherapyDomainEvent27 {
  kind: TherapyEventKind27;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind28 = 'therapy-event-28-created' | 'therapy-event-28-updated' | 'therapy-event-28-resolved';
export interface TherapyDomainEvent28 {
  kind: TherapyEventKind28;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind29 = 'therapy-event-29-created' | 'therapy-event-29-updated' | 'therapy-event-29-resolved';
export interface TherapyDomainEvent29 {
  kind: TherapyEventKind29;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind30 = 'therapy-event-30-created' | 'therapy-event-30-updated' | 'therapy-event-30-resolved';
export interface TherapyDomainEvent30 {
  kind: TherapyEventKind30;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind31 = 'therapy-event-31-created' | 'therapy-event-31-updated' | 'therapy-event-31-resolved';
export interface TherapyDomainEvent31 {
  kind: TherapyEventKind31;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind32 = 'therapy-event-32-created' | 'therapy-event-32-updated' | 'therapy-event-32-resolved';
export interface TherapyDomainEvent32 {
  kind: TherapyEventKind32;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind33 = 'therapy-event-33-created' | 'therapy-event-33-updated' | 'therapy-event-33-resolved';
export interface TherapyDomainEvent33 {
  kind: TherapyEventKind33;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind34 = 'therapy-event-34-created' | 'therapy-event-34-updated' | 'therapy-event-34-resolved';
export interface TherapyDomainEvent34 {
  kind: TherapyEventKind34;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind35 = 'therapy-event-35-created' | 'therapy-event-35-updated' | 'therapy-event-35-resolved';
export interface TherapyDomainEvent35 {
  kind: TherapyEventKind35;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind36 = 'therapy-event-36-created' | 'therapy-event-36-updated' | 'therapy-event-36-resolved';
export interface TherapyDomainEvent36 {
  kind: TherapyEventKind36;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind37 = 'therapy-event-37-created' | 'therapy-event-37-updated' | 'therapy-event-37-resolved';
export interface TherapyDomainEvent37 {
  kind: TherapyEventKind37;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind38 = 'therapy-event-38-created' | 'therapy-event-38-updated' | 'therapy-event-38-resolved';
export interface TherapyDomainEvent38 {
  kind: TherapyEventKind38;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type TherapyEventKind39 = 'therapy-event-39-created' | 'therapy-event-39-updated' | 'therapy-event-39-resolved';
export interface TherapyDomainEvent39 {
  kind: TherapyEventKind39;
  aggregateId: TherapyId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}
