/** CareNest domain types — Caregivers */
export type CaregiversId = string & { readonly __brand: 'CaregiversId' };
export type CaregiversStatus = 'draft' | 'active' | 'paused' | 'completed' | 'cancelled' | 'archived';
export type CaregiversPriority = 'low' | 'normal' | 'high' | 'critical';
export type CaregiversVisibility = 'private' | 'care-team' | 'facility' | 'admin';

export interface CaregiversAuditMeta {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  version: number;
  facilityId: string;
}

export interface CaregiversRecord extends CaregiversAuditMeta {
  id: CaregiversId;
  title: string;
  description: string;
  status: CaregiversStatus;
  priority: CaregiversPriority;
  visibility: CaregiversVisibility;
  residentId: string;
  caregiverId?: string;
  tags: string[];
  notes: string[];
  metadata: Record<string, string | number | boolean | null>;
}

export interface CaregiversFilter {
  status?: CaregiversStatus[];
  priority?: CaregiversPriority[];
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

export interface CaregiversPage {
  items: CaregiversRecord[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface CaregiversCreateInput {
  title: string;
  description: string;
  status?: CaregiversStatus;
  priority?: CaregiversPriority;
  visibility?: CaregiversVisibility;
  residentId: string;
  caregiverId?: string;
  tags?: string[];
  notes?: string[];
  metadata?: Record<string, string | number | boolean | null>;
}

export interface CaregiversUpdateInput extends Partial<CaregiversCreateInput> {
  id: CaregiversId;
}

export interface CaregiversSummary {
  total: number;
  active: number;
  critical: number;
  completedThisWeek: number;
  overdue: number;
}

export interface CaregiversDetailBlock1 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock2 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock3 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock4 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock5 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock6 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock7 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock8 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock9 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock10 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock11 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock12 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock13 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock14 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock15 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock16 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock17 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock18 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock19 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock20 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock21 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock22 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock23 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock24 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock25 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock26 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock27 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock28 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock29 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock30 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock31 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock32 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock33 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock34 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock35 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock36 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock37 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock38 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock39 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock40 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock41 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock42 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock43 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock44 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock45 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock46 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock47 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock48 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock49 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock50 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock51 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock52 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock53 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CaregiversDetailBlock54 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export type CaregiversEventKind1 = 'caregivers-event-1-created' | 'caregivers-event-1-updated' | 'caregivers-event-1-resolved';
export interface CaregiversDomainEvent1 {
  kind: CaregiversEventKind1;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind2 = 'caregivers-event-2-created' | 'caregivers-event-2-updated' | 'caregivers-event-2-resolved';
export interface CaregiversDomainEvent2 {
  kind: CaregiversEventKind2;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind3 = 'caregivers-event-3-created' | 'caregivers-event-3-updated' | 'caregivers-event-3-resolved';
export interface CaregiversDomainEvent3 {
  kind: CaregiversEventKind3;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind4 = 'caregivers-event-4-created' | 'caregivers-event-4-updated' | 'caregivers-event-4-resolved';
export interface CaregiversDomainEvent4 {
  kind: CaregiversEventKind4;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind5 = 'caregivers-event-5-created' | 'caregivers-event-5-updated' | 'caregivers-event-5-resolved';
export interface CaregiversDomainEvent5 {
  kind: CaregiversEventKind5;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind6 = 'caregivers-event-6-created' | 'caregivers-event-6-updated' | 'caregivers-event-6-resolved';
export interface CaregiversDomainEvent6 {
  kind: CaregiversEventKind6;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind7 = 'caregivers-event-7-created' | 'caregivers-event-7-updated' | 'caregivers-event-7-resolved';
export interface CaregiversDomainEvent7 {
  kind: CaregiversEventKind7;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind8 = 'caregivers-event-8-created' | 'caregivers-event-8-updated' | 'caregivers-event-8-resolved';
export interface CaregiversDomainEvent8 {
  kind: CaregiversEventKind8;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind9 = 'caregivers-event-9-created' | 'caregivers-event-9-updated' | 'caregivers-event-9-resolved';
export interface CaregiversDomainEvent9 {
  kind: CaregiversEventKind9;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind10 = 'caregivers-event-10-created' | 'caregivers-event-10-updated' | 'caregivers-event-10-resolved';
export interface CaregiversDomainEvent10 {
  kind: CaregiversEventKind10;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind11 = 'caregivers-event-11-created' | 'caregivers-event-11-updated' | 'caregivers-event-11-resolved';
export interface CaregiversDomainEvent11 {
  kind: CaregiversEventKind11;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind12 = 'caregivers-event-12-created' | 'caregivers-event-12-updated' | 'caregivers-event-12-resolved';
export interface CaregiversDomainEvent12 {
  kind: CaregiversEventKind12;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind13 = 'caregivers-event-13-created' | 'caregivers-event-13-updated' | 'caregivers-event-13-resolved';
export interface CaregiversDomainEvent13 {
  kind: CaregiversEventKind13;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind14 = 'caregivers-event-14-created' | 'caregivers-event-14-updated' | 'caregivers-event-14-resolved';
export interface CaregiversDomainEvent14 {
  kind: CaregiversEventKind14;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind15 = 'caregivers-event-15-created' | 'caregivers-event-15-updated' | 'caregivers-event-15-resolved';
export interface CaregiversDomainEvent15 {
  kind: CaregiversEventKind15;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind16 = 'caregivers-event-16-created' | 'caregivers-event-16-updated' | 'caregivers-event-16-resolved';
export interface CaregiversDomainEvent16 {
  kind: CaregiversEventKind16;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind17 = 'caregivers-event-17-created' | 'caregivers-event-17-updated' | 'caregivers-event-17-resolved';
export interface CaregiversDomainEvent17 {
  kind: CaregiversEventKind17;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind18 = 'caregivers-event-18-created' | 'caregivers-event-18-updated' | 'caregivers-event-18-resolved';
export interface CaregiversDomainEvent18 {
  kind: CaregiversEventKind18;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind19 = 'caregivers-event-19-created' | 'caregivers-event-19-updated' | 'caregivers-event-19-resolved';
export interface CaregiversDomainEvent19 {
  kind: CaregiversEventKind19;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind20 = 'caregivers-event-20-created' | 'caregivers-event-20-updated' | 'caregivers-event-20-resolved';
export interface CaregiversDomainEvent20 {
  kind: CaregiversEventKind20;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind21 = 'caregivers-event-21-created' | 'caregivers-event-21-updated' | 'caregivers-event-21-resolved';
export interface CaregiversDomainEvent21 {
  kind: CaregiversEventKind21;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind22 = 'caregivers-event-22-created' | 'caregivers-event-22-updated' | 'caregivers-event-22-resolved';
export interface CaregiversDomainEvent22 {
  kind: CaregiversEventKind22;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind23 = 'caregivers-event-23-created' | 'caregivers-event-23-updated' | 'caregivers-event-23-resolved';
export interface CaregiversDomainEvent23 {
  kind: CaregiversEventKind23;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind24 = 'caregivers-event-24-created' | 'caregivers-event-24-updated' | 'caregivers-event-24-resolved';
export interface CaregiversDomainEvent24 {
  kind: CaregiversEventKind24;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind25 = 'caregivers-event-25-created' | 'caregivers-event-25-updated' | 'caregivers-event-25-resolved';
export interface CaregiversDomainEvent25 {
  kind: CaregiversEventKind25;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind26 = 'caregivers-event-26-created' | 'caregivers-event-26-updated' | 'caregivers-event-26-resolved';
export interface CaregiversDomainEvent26 {
  kind: CaregiversEventKind26;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind27 = 'caregivers-event-27-created' | 'caregivers-event-27-updated' | 'caregivers-event-27-resolved';
export interface CaregiversDomainEvent27 {
  kind: CaregiversEventKind27;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind28 = 'caregivers-event-28-created' | 'caregivers-event-28-updated' | 'caregivers-event-28-resolved';
export interface CaregiversDomainEvent28 {
  kind: CaregiversEventKind28;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind29 = 'caregivers-event-29-created' | 'caregivers-event-29-updated' | 'caregivers-event-29-resolved';
export interface CaregiversDomainEvent29 {
  kind: CaregiversEventKind29;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind30 = 'caregivers-event-30-created' | 'caregivers-event-30-updated' | 'caregivers-event-30-resolved';
export interface CaregiversDomainEvent30 {
  kind: CaregiversEventKind30;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind31 = 'caregivers-event-31-created' | 'caregivers-event-31-updated' | 'caregivers-event-31-resolved';
export interface CaregiversDomainEvent31 {
  kind: CaregiversEventKind31;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind32 = 'caregivers-event-32-created' | 'caregivers-event-32-updated' | 'caregivers-event-32-resolved';
export interface CaregiversDomainEvent32 {
  kind: CaregiversEventKind32;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind33 = 'caregivers-event-33-created' | 'caregivers-event-33-updated' | 'caregivers-event-33-resolved';
export interface CaregiversDomainEvent33 {
  kind: CaregiversEventKind33;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind34 = 'caregivers-event-34-created' | 'caregivers-event-34-updated' | 'caregivers-event-34-resolved';
export interface CaregiversDomainEvent34 {
  kind: CaregiversEventKind34;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind35 = 'caregivers-event-35-created' | 'caregivers-event-35-updated' | 'caregivers-event-35-resolved';
export interface CaregiversDomainEvent35 {
  kind: CaregiversEventKind35;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind36 = 'caregivers-event-36-created' | 'caregivers-event-36-updated' | 'caregivers-event-36-resolved';
export interface CaregiversDomainEvent36 {
  kind: CaregiversEventKind36;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind37 = 'caregivers-event-37-created' | 'caregivers-event-37-updated' | 'caregivers-event-37-resolved';
export interface CaregiversDomainEvent37 {
  kind: CaregiversEventKind37;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind38 = 'caregivers-event-38-created' | 'caregivers-event-38-updated' | 'caregivers-event-38-resolved';
export interface CaregiversDomainEvent38 {
  kind: CaregiversEventKind38;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CaregiversEventKind39 = 'caregivers-event-39-created' | 'caregivers-event-39-updated' | 'caregivers-event-39-resolved';
export interface CaregiversDomainEvent39 {
  kind: CaregiversEventKind39;
  aggregateId: CaregiversId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}
