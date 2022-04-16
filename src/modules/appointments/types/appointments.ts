/** CareNest domain types — Appointments */
export type AppointmentsId = string & { readonly __brand: 'AppointmentsId' };
export type AppointmentsStatus = 'draft' | 'active' | 'paused' | 'completed' | 'cancelled' | 'archived';
export type AppointmentsPriority = 'low' | 'normal' | 'high' | 'critical';
export type AppointmentsVisibility = 'private' | 'care-team' | 'facility' | 'admin';

export interface AppointmentsAuditMeta {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  version: number;
  facilityId: string;
}

export interface AppointmentsRecord extends AppointmentsAuditMeta {
  id: AppointmentsId;
  title: string;
  description: string;
  status: AppointmentsStatus;
  priority: AppointmentsPriority;
  visibility: AppointmentsVisibility;
  residentId: string;
  caregiverId?: string;
  tags: string[];
  notes: string[];
  metadata: Record<string, string | number | boolean | null>;
}

export interface AppointmentsFilter {
  status?: AppointmentsStatus[];
  priority?: AppointmentsPriority[];
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

export interface AppointmentsPage {
  items: AppointmentsRecord[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface AppointmentsCreateInput {
  title: string;
  description: string;
  status?: AppointmentsStatus;
  priority?: AppointmentsPriority;
  visibility?: AppointmentsVisibility;
  residentId: string;
  caregiverId?: string;
  tags?: string[];
  notes?: string[];
  metadata?: Record<string, string | number | boolean | null>;
}

export interface AppointmentsUpdateInput extends Partial<AppointmentsCreateInput> {
  id: AppointmentsId;
}

export interface AppointmentsSummary {
  total: number;
  active: number;
  critical: number;
  completedThisWeek: number;
  overdue: number;
}

export interface AppointmentsDetailBlock1 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock2 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock3 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock4 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock5 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock6 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock7 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock8 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock9 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock10 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock11 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock12 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock13 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock14 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock15 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock16 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock17 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock18 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock19 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock20 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock21 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock22 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock23 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock24 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock25 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock26 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock27 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock28 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock29 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock30 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock31 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock32 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock33 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock34 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock35 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock36 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock37 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock38 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock39 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock40 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock41 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock42 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock43 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock44 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock45 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock46 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock47 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock48 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock49 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock50 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock51 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock52 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock53 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface AppointmentsDetailBlock54 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export type AppointmentsEventKind1 = 'appointments-event-1-created' | 'appointments-event-1-updated' | 'appointments-event-1-resolved';
export interface AppointmentsDomainEvent1 {
  kind: AppointmentsEventKind1;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind2 = 'appointments-event-2-created' | 'appointments-event-2-updated' | 'appointments-event-2-resolved';
export interface AppointmentsDomainEvent2 {
  kind: AppointmentsEventKind2;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind3 = 'appointments-event-3-created' | 'appointments-event-3-updated' | 'appointments-event-3-resolved';
export interface AppointmentsDomainEvent3 {
  kind: AppointmentsEventKind3;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind4 = 'appointments-event-4-created' | 'appointments-event-4-updated' | 'appointments-event-4-resolved';
export interface AppointmentsDomainEvent4 {
  kind: AppointmentsEventKind4;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind5 = 'appointments-event-5-created' | 'appointments-event-5-updated' | 'appointments-event-5-resolved';
export interface AppointmentsDomainEvent5 {
  kind: AppointmentsEventKind5;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind6 = 'appointments-event-6-created' | 'appointments-event-6-updated' | 'appointments-event-6-resolved';
export interface AppointmentsDomainEvent6 {
  kind: AppointmentsEventKind6;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind7 = 'appointments-event-7-created' | 'appointments-event-7-updated' | 'appointments-event-7-resolved';
export interface AppointmentsDomainEvent7 {
  kind: AppointmentsEventKind7;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind8 = 'appointments-event-8-created' | 'appointments-event-8-updated' | 'appointments-event-8-resolved';
export interface AppointmentsDomainEvent8 {
  kind: AppointmentsEventKind8;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind9 = 'appointments-event-9-created' | 'appointments-event-9-updated' | 'appointments-event-9-resolved';
export interface AppointmentsDomainEvent9 {
  kind: AppointmentsEventKind9;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind10 = 'appointments-event-10-created' | 'appointments-event-10-updated' | 'appointments-event-10-resolved';
export interface AppointmentsDomainEvent10 {
  kind: AppointmentsEventKind10;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind11 = 'appointments-event-11-created' | 'appointments-event-11-updated' | 'appointments-event-11-resolved';
export interface AppointmentsDomainEvent11 {
  kind: AppointmentsEventKind11;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind12 = 'appointments-event-12-created' | 'appointments-event-12-updated' | 'appointments-event-12-resolved';
export interface AppointmentsDomainEvent12 {
  kind: AppointmentsEventKind12;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind13 = 'appointments-event-13-created' | 'appointments-event-13-updated' | 'appointments-event-13-resolved';
export interface AppointmentsDomainEvent13 {
  kind: AppointmentsEventKind13;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind14 = 'appointments-event-14-created' | 'appointments-event-14-updated' | 'appointments-event-14-resolved';
export interface AppointmentsDomainEvent14 {
  kind: AppointmentsEventKind14;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind15 = 'appointments-event-15-created' | 'appointments-event-15-updated' | 'appointments-event-15-resolved';
export interface AppointmentsDomainEvent15 {
  kind: AppointmentsEventKind15;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind16 = 'appointments-event-16-created' | 'appointments-event-16-updated' | 'appointments-event-16-resolved';
export interface AppointmentsDomainEvent16 {
  kind: AppointmentsEventKind16;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind17 = 'appointments-event-17-created' | 'appointments-event-17-updated' | 'appointments-event-17-resolved';
export interface AppointmentsDomainEvent17 {
  kind: AppointmentsEventKind17;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind18 = 'appointments-event-18-created' | 'appointments-event-18-updated' | 'appointments-event-18-resolved';
export interface AppointmentsDomainEvent18 {
  kind: AppointmentsEventKind18;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind19 = 'appointments-event-19-created' | 'appointments-event-19-updated' | 'appointments-event-19-resolved';
export interface AppointmentsDomainEvent19 {
  kind: AppointmentsEventKind19;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind20 = 'appointments-event-20-created' | 'appointments-event-20-updated' | 'appointments-event-20-resolved';
export interface AppointmentsDomainEvent20 {
  kind: AppointmentsEventKind20;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind21 = 'appointments-event-21-created' | 'appointments-event-21-updated' | 'appointments-event-21-resolved';
export interface AppointmentsDomainEvent21 {
  kind: AppointmentsEventKind21;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind22 = 'appointments-event-22-created' | 'appointments-event-22-updated' | 'appointments-event-22-resolved';
export interface AppointmentsDomainEvent22 {
  kind: AppointmentsEventKind22;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind23 = 'appointments-event-23-created' | 'appointments-event-23-updated' | 'appointments-event-23-resolved';
export interface AppointmentsDomainEvent23 {
  kind: AppointmentsEventKind23;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind24 = 'appointments-event-24-created' | 'appointments-event-24-updated' | 'appointments-event-24-resolved';
export interface AppointmentsDomainEvent24 {
  kind: AppointmentsEventKind24;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind25 = 'appointments-event-25-created' | 'appointments-event-25-updated' | 'appointments-event-25-resolved';
export interface AppointmentsDomainEvent25 {
  kind: AppointmentsEventKind25;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind26 = 'appointments-event-26-created' | 'appointments-event-26-updated' | 'appointments-event-26-resolved';
export interface AppointmentsDomainEvent26 {
  kind: AppointmentsEventKind26;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind27 = 'appointments-event-27-created' | 'appointments-event-27-updated' | 'appointments-event-27-resolved';
export interface AppointmentsDomainEvent27 {
  kind: AppointmentsEventKind27;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind28 = 'appointments-event-28-created' | 'appointments-event-28-updated' | 'appointments-event-28-resolved';
export interface AppointmentsDomainEvent28 {
  kind: AppointmentsEventKind28;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind29 = 'appointments-event-29-created' | 'appointments-event-29-updated' | 'appointments-event-29-resolved';
export interface AppointmentsDomainEvent29 {
  kind: AppointmentsEventKind29;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind30 = 'appointments-event-30-created' | 'appointments-event-30-updated' | 'appointments-event-30-resolved';
export interface AppointmentsDomainEvent30 {
  kind: AppointmentsEventKind30;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind31 = 'appointments-event-31-created' | 'appointments-event-31-updated' | 'appointments-event-31-resolved';
export interface AppointmentsDomainEvent31 {
  kind: AppointmentsEventKind31;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind32 = 'appointments-event-32-created' | 'appointments-event-32-updated' | 'appointments-event-32-resolved';
export interface AppointmentsDomainEvent32 {
  kind: AppointmentsEventKind32;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind33 = 'appointments-event-33-created' | 'appointments-event-33-updated' | 'appointments-event-33-resolved';
export interface AppointmentsDomainEvent33 {
  kind: AppointmentsEventKind33;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind34 = 'appointments-event-34-created' | 'appointments-event-34-updated' | 'appointments-event-34-resolved';
export interface AppointmentsDomainEvent34 {
  kind: AppointmentsEventKind34;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind35 = 'appointments-event-35-created' | 'appointments-event-35-updated' | 'appointments-event-35-resolved';
export interface AppointmentsDomainEvent35 {
  kind: AppointmentsEventKind35;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind36 = 'appointments-event-36-created' | 'appointments-event-36-updated' | 'appointments-event-36-resolved';
export interface AppointmentsDomainEvent36 {
  kind: AppointmentsEventKind36;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind37 = 'appointments-event-37-created' | 'appointments-event-37-updated' | 'appointments-event-37-resolved';
export interface AppointmentsDomainEvent37 {
  kind: AppointmentsEventKind37;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind38 = 'appointments-event-38-created' | 'appointments-event-38-updated' | 'appointments-event-38-resolved';
export interface AppointmentsDomainEvent38 {
  kind: AppointmentsEventKind38;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type AppointmentsEventKind39 = 'appointments-event-39-created' | 'appointments-event-39-updated' | 'appointments-event-39-resolved';
export interface AppointmentsDomainEvent39 {
  kind: AppointmentsEventKind39;
  aggregateId: AppointmentsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}
