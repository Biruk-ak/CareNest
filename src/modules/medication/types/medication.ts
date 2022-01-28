/** CareNest domain types — Medication */
export type MedicationId = string & { readonly __brand: 'MedicationId' };
export type MedicationStatus = 'draft' | 'active' | 'paused' | 'completed' | 'cancelled' | 'archived';
export type MedicationPriority = 'low' | 'normal' | 'high' | 'critical';
export type MedicationVisibility = 'private' | 'care-team' | 'facility' | 'admin';

export interface MedicationAuditMeta {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  version: number;
  facilityId: string;
}

export interface MedicationRecord extends MedicationAuditMeta {
  id: MedicationId;
  title: string;
  description: string;
  status: MedicationStatus;
  priority: MedicationPriority;
  visibility: MedicationVisibility;
  residentId: string;
  caregiverId?: string;
  tags: string[];
  notes: string[];
  metadata: Record<string, string | number | boolean | null>;
}

export interface MedicationFilter {
  status?: MedicationStatus[];
  priority?: MedicationPriority[];
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

export interface MedicationPage {
  items: MedicationRecord[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface MedicationCreateInput {
  title: string;
  description: string;
  status?: MedicationStatus;
  priority?: MedicationPriority;
  visibility?: MedicationVisibility;
  residentId: string;
  caregiverId?: string;
  tags?: string[];
  notes?: string[];
  metadata?: Record<string, string | number | boolean | null>;
}

export interface MedicationUpdateInput extends Partial<MedicationCreateInput> {
  id: MedicationId;
}

export interface MedicationSummary {
  total: number;
  active: number;
  critical: number;
  completedThisWeek: number;
  overdue: number;
}

export interface MedicationDetailBlock1 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock2 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock3 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock4 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock5 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock6 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock7 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock8 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock9 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock10 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock11 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock12 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock13 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock14 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock15 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock16 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock17 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock18 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock19 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock20 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock21 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock22 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock23 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock24 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock25 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock26 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock27 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock28 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock29 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock30 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock31 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock32 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock33 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock34 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock35 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock36 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock37 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock38 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock39 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock40 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock41 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock42 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock43 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock44 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock45 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock46 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock47 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock48 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock49 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock50 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock51 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock52 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock53 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface MedicationDetailBlock54 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export type MedicationEventKind1 = 'medication-event-1-created' | 'medication-event-1-updated' | 'medication-event-1-resolved';
export interface MedicationDomainEvent1 {
  kind: MedicationEventKind1;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind2 = 'medication-event-2-created' | 'medication-event-2-updated' | 'medication-event-2-resolved';
export interface MedicationDomainEvent2 {
  kind: MedicationEventKind2;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind3 = 'medication-event-3-created' | 'medication-event-3-updated' | 'medication-event-3-resolved';
export interface MedicationDomainEvent3 {
  kind: MedicationEventKind3;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind4 = 'medication-event-4-created' | 'medication-event-4-updated' | 'medication-event-4-resolved';
export interface MedicationDomainEvent4 {
  kind: MedicationEventKind4;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind5 = 'medication-event-5-created' | 'medication-event-5-updated' | 'medication-event-5-resolved';
export interface MedicationDomainEvent5 {
  kind: MedicationEventKind5;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind6 = 'medication-event-6-created' | 'medication-event-6-updated' | 'medication-event-6-resolved';
export interface MedicationDomainEvent6 {
  kind: MedicationEventKind6;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind7 = 'medication-event-7-created' | 'medication-event-7-updated' | 'medication-event-7-resolved';
export interface MedicationDomainEvent7 {
  kind: MedicationEventKind7;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind8 = 'medication-event-8-created' | 'medication-event-8-updated' | 'medication-event-8-resolved';
export interface MedicationDomainEvent8 {
  kind: MedicationEventKind8;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind9 = 'medication-event-9-created' | 'medication-event-9-updated' | 'medication-event-9-resolved';
export interface MedicationDomainEvent9 {
  kind: MedicationEventKind9;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind10 = 'medication-event-10-created' | 'medication-event-10-updated' | 'medication-event-10-resolved';
export interface MedicationDomainEvent10 {
  kind: MedicationEventKind10;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind11 = 'medication-event-11-created' | 'medication-event-11-updated' | 'medication-event-11-resolved';
export interface MedicationDomainEvent11 {
  kind: MedicationEventKind11;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind12 = 'medication-event-12-created' | 'medication-event-12-updated' | 'medication-event-12-resolved';
export interface MedicationDomainEvent12 {
  kind: MedicationEventKind12;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind13 = 'medication-event-13-created' | 'medication-event-13-updated' | 'medication-event-13-resolved';
export interface MedicationDomainEvent13 {
  kind: MedicationEventKind13;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind14 = 'medication-event-14-created' | 'medication-event-14-updated' | 'medication-event-14-resolved';
export interface MedicationDomainEvent14 {
  kind: MedicationEventKind14;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind15 = 'medication-event-15-created' | 'medication-event-15-updated' | 'medication-event-15-resolved';
export interface MedicationDomainEvent15 {
  kind: MedicationEventKind15;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind16 = 'medication-event-16-created' | 'medication-event-16-updated' | 'medication-event-16-resolved';
export interface MedicationDomainEvent16 {
  kind: MedicationEventKind16;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind17 = 'medication-event-17-created' | 'medication-event-17-updated' | 'medication-event-17-resolved';
export interface MedicationDomainEvent17 {
  kind: MedicationEventKind17;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind18 = 'medication-event-18-created' | 'medication-event-18-updated' | 'medication-event-18-resolved';
export interface MedicationDomainEvent18 {
  kind: MedicationEventKind18;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind19 = 'medication-event-19-created' | 'medication-event-19-updated' | 'medication-event-19-resolved';
export interface MedicationDomainEvent19 {
  kind: MedicationEventKind19;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind20 = 'medication-event-20-created' | 'medication-event-20-updated' | 'medication-event-20-resolved';
export interface MedicationDomainEvent20 {
  kind: MedicationEventKind20;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind21 = 'medication-event-21-created' | 'medication-event-21-updated' | 'medication-event-21-resolved';
export interface MedicationDomainEvent21 {
  kind: MedicationEventKind21;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind22 = 'medication-event-22-created' | 'medication-event-22-updated' | 'medication-event-22-resolved';
export interface MedicationDomainEvent22 {
  kind: MedicationEventKind22;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind23 = 'medication-event-23-created' | 'medication-event-23-updated' | 'medication-event-23-resolved';
export interface MedicationDomainEvent23 {
  kind: MedicationEventKind23;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind24 = 'medication-event-24-created' | 'medication-event-24-updated' | 'medication-event-24-resolved';
export interface MedicationDomainEvent24 {
  kind: MedicationEventKind24;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind25 = 'medication-event-25-created' | 'medication-event-25-updated' | 'medication-event-25-resolved';
export interface MedicationDomainEvent25 {
  kind: MedicationEventKind25;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind26 = 'medication-event-26-created' | 'medication-event-26-updated' | 'medication-event-26-resolved';
export interface MedicationDomainEvent26 {
  kind: MedicationEventKind26;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind27 = 'medication-event-27-created' | 'medication-event-27-updated' | 'medication-event-27-resolved';
export interface MedicationDomainEvent27 {
  kind: MedicationEventKind27;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind28 = 'medication-event-28-created' | 'medication-event-28-updated' | 'medication-event-28-resolved';
export interface MedicationDomainEvent28 {
  kind: MedicationEventKind28;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind29 = 'medication-event-29-created' | 'medication-event-29-updated' | 'medication-event-29-resolved';
export interface MedicationDomainEvent29 {
  kind: MedicationEventKind29;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind30 = 'medication-event-30-created' | 'medication-event-30-updated' | 'medication-event-30-resolved';
export interface MedicationDomainEvent30 {
  kind: MedicationEventKind30;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind31 = 'medication-event-31-created' | 'medication-event-31-updated' | 'medication-event-31-resolved';
export interface MedicationDomainEvent31 {
  kind: MedicationEventKind31;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind32 = 'medication-event-32-created' | 'medication-event-32-updated' | 'medication-event-32-resolved';
export interface MedicationDomainEvent32 {
  kind: MedicationEventKind32;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind33 = 'medication-event-33-created' | 'medication-event-33-updated' | 'medication-event-33-resolved';
export interface MedicationDomainEvent33 {
  kind: MedicationEventKind33;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind34 = 'medication-event-34-created' | 'medication-event-34-updated' | 'medication-event-34-resolved';
export interface MedicationDomainEvent34 {
  kind: MedicationEventKind34;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind35 = 'medication-event-35-created' | 'medication-event-35-updated' | 'medication-event-35-resolved';
export interface MedicationDomainEvent35 {
  kind: MedicationEventKind35;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind36 = 'medication-event-36-created' | 'medication-event-36-updated' | 'medication-event-36-resolved';
export interface MedicationDomainEvent36 {
  kind: MedicationEventKind36;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind37 = 'medication-event-37-created' | 'medication-event-37-updated' | 'medication-event-37-resolved';
export interface MedicationDomainEvent37 {
  kind: MedicationEventKind37;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind38 = 'medication-event-38-created' | 'medication-event-38-updated' | 'medication-event-38-resolved';
export interface MedicationDomainEvent38 {
  kind: MedicationEventKind38;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type MedicationEventKind39 = 'medication-event-39-created' | 'medication-event-39-updated' | 'medication-event-39-resolved';
export interface MedicationDomainEvent39 {
  kind: MedicationEventKind39;
  aggregateId: MedicationId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}
