/** CareNest domain types — Payments */
export type PaymentsId = string & { readonly __brand: 'PaymentsId' };
export type PaymentsStatus = 'draft' | 'active' | 'paused' | 'completed' | 'cancelled' | 'archived';
export type PaymentsPriority = 'low' | 'normal' | 'high' | 'critical';
export type PaymentsVisibility = 'private' | 'care-team' | 'facility' | 'admin';

export interface PaymentsAuditMeta {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  version: number;
  facilityId: string;
}

export interface PaymentsRecord extends PaymentsAuditMeta {
  id: PaymentsId;
  title: string;
  description: string;
  status: PaymentsStatus;
  priority: PaymentsPriority;
  visibility: PaymentsVisibility;
  residentId: string;
  caregiverId?: string;
  tags: string[];
  notes: string[];
  metadata: Record<string, string | number | boolean | null>;
}

export interface PaymentsFilter {
  status?: PaymentsStatus[];
  priority?: PaymentsPriority[];
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

export interface PaymentsPage {
  items: PaymentsRecord[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface PaymentsCreateInput {
  title: string;
  description: string;
  status?: PaymentsStatus;
  priority?: PaymentsPriority;
  visibility?: PaymentsVisibility;
  residentId: string;
  caregiverId?: string;
  tags?: string[];
  notes?: string[];
  metadata?: Record<string, string | number | boolean | null>;
}

export interface PaymentsUpdateInput extends Partial<PaymentsCreateInput> {
  id: PaymentsId;
}

export interface PaymentsSummary {
  total: number;
  active: number;
  critical: number;
  completedThisWeek: number;
  overdue: number;
}

export interface PaymentsDetailBlock1 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock2 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock3 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock4 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock5 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock6 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock7 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock8 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock9 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock10 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock11 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock12 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock13 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock14 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock15 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock16 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock17 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock18 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock19 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock20 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock21 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock22 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock23 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock24 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock25 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock26 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock27 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock28 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock29 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock30 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock31 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock32 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock33 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock34 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock35 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock36 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock37 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock38 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock39 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock40 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock41 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock42 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock43 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock44 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock45 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock46 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock47 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock48 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock49 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock50 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock51 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock52 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock53 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface PaymentsDetailBlock54 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export type PaymentsEventKind1 = 'payments-event-1-created' | 'payments-event-1-updated' | 'payments-event-1-resolved';
export interface PaymentsDomainEvent1 {
  kind: PaymentsEventKind1;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind2 = 'payments-event-2-created' | 'payments-event-2-updated' | 'payments-event-2-resolved';
export interface PaymentsDomainEvent2 {
  kind: PaymentsEventKind2;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind3 = 'payments-event-3-created' | 'payments-event-3-updated' | 'payments-event-3-resolved';
export interface PaymentsDomainEvent3 {
  kind: PaymentsEventKind3;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind4 = 'payments-event-4-created' | 'payments-event-4-updated' | 'payments-event-4-resolved';
export interface PaymentsDomainEvent4 {
  kind: PaymentsEventKind4;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind5 = 'payments-event-5-created' | 'payments-event-5-updated' | 'payments-event-5-resolved';
export interface PaymentsDomainEvent5 {
  kind: PaymentsEventKind5;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind6 = 'payments-event-6-created' | 'payments-event-6-updated' | 'payments-event-6-resolved';
export interface PaymentsDomainEvent6 {
  kind: PaymentsEventKind6;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind7 = 'payments-event-7-created' | 'payments-event-7-updated' | 'payments-event-7-resolved';
export interface PaymentsDomainEvent7 {
  kind: PaymentsEventKind7;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind8 = 'payments-event-8-created' | 'payments-event-8-updated' | 'payments-event-8-resolved';
export interface PaymentsDomainEvent8 {
  kind: PaymentsEventKind8;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind9 = 'payments-event-9-created' | 'payments-event-9-updated' | 'payments-event-9-resolved';
export interface PaymentsDomainEvent9 {
  kind: PaymentsEventKind9;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind10 = 'payments-event-10-created' | 'payments-event-10-updated' | 'payments-event-10-resolved';
export interface PaymentsDomainEvent10 {
  kind: PaymentsEventKind10;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind11 = 'payments-event-11-created' | 'payments-event-11-updated' | 'payments-event-11-resolved';
export interface PaymentsDomainEvent11 {
  kind: PaymentsEventKind11;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind12 = 'payments-event-12-created' | 'payments-event-12-updated' | 'payments-event-12-resolved';
export interface PaymentsDomainEvent12 {
  kind: PaymentsEventKind12;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind13 = 'payments-event-13-created' | 'payments-event-13-updated' | 'payments-event-13-resolved';
export interface PaymentsDomainEvent13 {
  kind: PaymentsEventKind13;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind14 = 'payments-event-14-created' | 'payments-event-14-updated' | 'payments-event-14-resolved';
export interface PaymentsDomainEvent14 {
  kind: PaymentsEventKind14;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind15 = 'payments-event-15-created' | 'payments-event-15-updated' | 'payments-event-15-resolved';
export interface PaymentsDomainEvent15 {
  kind: PaymentsEventKind15;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind16 = 'payments-event-16-created' | 'payments-event-16-updated' | 'payments-event-16-resolved';
export interface PaymentsDomainEvent16 {
  kind: PaymentsEventKind16;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind17 = 'payments-event-17-created' | 'payments-event-17-updated' | 'payments-event-17-resolved';
export interface PaymentsDomainEvent17 {
  kind: PaymentsEventKind17;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind18 = 'payments-event-18-created' | 'payments-event-18-updated' | 'payments-event-18-resolved';
export interface PaymentsDomainEvent18 {
  kind: PaymentsEventKind18;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind19 = 'payments-event-19-created' | 'payments-event-19-updated' | 'payments-event-19-resolved';
export interface PaymentsDomainEvent19 {
  kind: PaymentsEventKind19;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind20 = 'payments-event-20-created' | 'payments-event-20-updated' | 'payments-event-20-resolved';
export interface PaymentsDomainEvent20 {
  kind: PaymentsEventKind20;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind21 = 'payments-event-21-created' | 'payments-event-21-updated' | 'payments-event-21-resolved';
export interface PaymentsDomainEvent21 {
  kind: PaymentsEventKind21;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind22 = 'payments-event-22-created' | 'payments-event-22-updated' | 'payments-event-22-resolved';
export interface PaymentsDomainEvent22 {
  kind: PaymentsEventKind22;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind23 = 'payments-event-23-created' | 'payments-event-23-updated' | 'payments-event-23-resolved';
export interface PaymentsDomainEvent23 {
  kind: PaymentsEventKind23;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind24 = 'payments-event-24-created' | 'payments-event-24-updated' | 'payments-event-24-resolved';
export interface PaymentsDomainEvent24 {
  kind: PaymentsEventKind24;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind25 = 'payments-event-25-created' | 'payments-event-25-updated' | 'payments-event-25-resolved';
export interface PaymentsDomainEvent25 {
  kind: PaymentsEventKind25;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind26 = 'payments-event-26-created' | 'payments-event-26-updated' | 'payments-event-26-resolved';
export interface PaymentsDomainEvent26 {
  kind: PaymentsEventKind26;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind27 = 'payments-event-27-created' | 'payments-event-27-updated' | 'payments-event-27-resolved';
export interface PaymentsDomainEvent27 {
  kind: PaymentsEventKind27;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind28 = 'payments-event-28-created' | 'payments-event-28-updated' | 'payments-event-28-resolved';
export interface PaymentsDomainEvent28 {
  kind: PaymentsEventKind28;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind29 = 'payments-event-29-created' | 'payments-event-29-updated' | 'payments-event-29-resolved';
export interface PaymentsDomainEvent29 {
  kind: PaymentsEventKind29;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind30 = 'payments-event-30-created' | 'payments-event-30-updated' | 'payments-event-30-resolved';
export interface PaymentsDomainEvent30 {
  kind: PaymentsEventKind30;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind31 = 'payments-event-31-created' | 'payments-event-31-updated' | 'payments-event-31-resolved';
export interface PaymentsDomainEvent31 {
  kind: PaymentsEventKind31;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind32 = 'payments-event-32-created' | 'payments-event-32-updated' | 'payments-event-32-resolved';
export interface PaymentsDomainEvent32 {
  kind: PaymentsEventKind32;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind33 = 'payments-event-33-created' | 'payments-event-33-updated' | 'payments-event-33-resolved';
export interface PaymentsDomainEvent33 {
  kind: PaymentsEventKind33;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind34 = 'payments-event-34-created' | 'payments-event-34-updated' | 'payments-event-34-resolved';
export interface PaymentsDomainEvent34 {
  kind: PaymentsEventKind34;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind35 = 'payments-event-35-created' | 'payments-event-35-updated' | 'payments-event-35-resolved';
export interface PaymentsDomainEvent35 {
  kind: PaymentsEventKind35;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind36 = 'payments-event-36-created' | 'payments-event-36-updated' | 'payments-event-36-resolved';
export interface PaymentsDomainEvent36 {
  kind: PaymentsEventKind36;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind37 = 'payments-event-37-created' | 'payments-event-37-updated' | 'payments-event-37-resolved';
export interface PaymentsDomainEvent37 {
  kind: PaymentsEventKind37;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind38 = 'payments-event-38-created' | 'payments-event-38-updated' | 'payments-event-38-resolved';
export interface PaymentsDomainEvent38 {
  kind: PaymentsEventKind38;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type PaymentsEventKind39 = 'payments-event-39-created' | 'payments-event-39-updated' | 'payments-event-39-resolved';
export interface PaymentsDomainEvent39 {
  kind: PaymentsEventKind39;
  aggregateId: PaymentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}
