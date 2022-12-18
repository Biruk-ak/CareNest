/** CareNest domain types — CareSchedule */
export type CareScheduleId = string & { readonly __brand: 'CareScheduleId' };
export type CareScheduleStatus = 'draft' | 'active' | 'paused' | 'completed' | 'cancelled' | 'archived';
export type CareSchedulePriority = 'low' | 'normal' | 'high' | 'critical';
export type CareScheduleVisibility = 'private' | 'care-team' | 'facility' | 'admin';

export interface CareScheduleAuditMeta {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  version: number;
  facilityId: string;
}

export interface CareScheduleRecord extends CareScheduleAuditMeta {
  id: CareScheduleId;
  title: string;
  description: string;
  status: CareScheduleStatus;
  priority: CareSchedulePriority;
  visibility: CareScheduleVisibility;
  residentId: string;
  caregiverId?: string;
  tags: string[];
  notes: string[];
  metadata: Record<string, string | number | boolean | null>;
}

export interface CareScheduleFilter {
  status?: CareScheduleStatus[];
  priority?: CareSchedulePriority[];
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

export interface CareSchedulePage {
  items: CareScheduleRecord[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface CareScheduleCreateInput {
  title: string;
  description: string;
  status?: CareScheduleStatus;
  priority?: CareSchedulePriority;
  visibility?: CareScheduleVisibility;
  residentId: string;
  caregiverId?: string;
  tags?: string[];
  notes?: string[];
  metadata?: Record<string, string | number | boolean | null>;
}

export interface CareScheduleUpdateInput extends Partial<CareScheduleCreateInput> {
  id: CareScheduleId;
}

export interface CareScheduleSummary {
  total: number;
  active: number;
  critical: number;
  completedThisWeek: number;
  overdue: number;
}

export interface CareScheduleDetailBlock1 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock2 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock3 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock4 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock5 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock6 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock7 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock8 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock9 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock10 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock11 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock12 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock13 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock14 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock15 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock16 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock17 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock18 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock19 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock20 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock21 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock22 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock23 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock24 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock25 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock26 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock27 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock28 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock29 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock30 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock31 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock32 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock33 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock34 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock35 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock36 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock37 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock38 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock39 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock40 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock41 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock42 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock43 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock44 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock45 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock46 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock47 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock48 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock49 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock50 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock51 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock52 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock53 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface CareScheduleDetailBlock54 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export type CareScheduleEventKind1 = 'care-schedule-event-1-created' | 'care-schedule-event-1-updated' | 'care-schedule-event-1-resolved';
export interface CareScheduleDomainEvent1 {
  kind: CareScheduleEventKind1;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind2 = 'care-schedule-event-2-created' | 'care-schedule-event-2-updated' | 'care-schedule-event-2-resolved';
export interface CareScheduleDomainEvent2 {
  kind: CareScheduleEventKind2;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind3 = 'care-schedule-event-3-created' | 'care-schedule-event-3-updated' | 'care-schedule-event-3-resolved';
export interface CareScheduleDomainEvent3 {
  kind: CareScheduleEventKind3;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind4 = 'care-schedule-event-4-created' | 'care-schedule-event-4-updated' | 'care-schedule-event-4-resolved';
export interface CareScheduleDomainEvent4 {
  kind: CareScheduleEventKind4;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind5 = 'care-schedule-event-5-created' | 'care-schedule-event-5-updated' | 'care-schedule-event-5-resolved';
export interface CareScheduleDomainEvent5 {
  kind: CareScheduleEventKind5;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind6 = 'care-schedule-event-6-created' | 'care-schedule-event-6-updated' | 'care-schedule-event-6-resolved';
export interface CareScheduleDomainEvent6 {
  kind: CareScheduleEventKind6;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind7 = 'care-schedule-event-7-created' | 'care-schedule-event-7-updated' | 'care-schedule-event-7-resolved';
export interface CareScheduleDomainEvent7 {
  kind: CareScheduleEventKind7;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind8 = 'care-schedule-event-8-created' | 'care-schedule-event-8-updated' | 'care-schedule-event-8-resolved';
export interface CareScheduleDomainEvent8 {
  kind: CareScheduleEventKind8;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind9 = 'care-schedule-event-9-created' | 'care-schedule-event-9-updated' | 'care-schedule-event-9-resolved';
export interface CareScheduleDomainEvent9 {
  kind: CareScheduleEventKind9;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind10 = 'care-schedule-event-10-created' | 'care-schedule-event-10-updated' | 'care-schedule-event-10-resolved';
export interface CareScheduleDomainEvent10 {
  kind: CareScheduleEventKind10;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind11 = 'care-schedule-event-11-created' | 'care-schedule-event-11-updated' | 'care-schedule-event-11-resolved';
export interface CareScheduleDomainEvent11 {
  kind: CareScheduleEventKind11;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind12 = 'care-schedule-event-12-created' | 'care-schedule-event-12-updated' | 'care-schedule-event-12-resolved';
export interface CareScheduleDomainEvent12 {
  kind: CareScheduleEventKind12;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind13 = 'care-schedule-event-13-created' | 'care-schedule-event-13-updated' | 'care-schedule-event-13-resolved';
export interface CareScheduleDomainEvent13 {
  kind: CareScheduleEventKind13;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind14 = 'care-schedule-event-14-created' | 'care-schedule-event-14-updated' | 'care-schedule-event-14-resolved';
export interface CareScheduleDomainEvent14 {
  kind: CareScheduleEventKind14;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind15 = 'care-schedule-event-15-created' | 'care-schedule-event-15-updated' | 'care-schedule-event-15-resolved';
export interface CareScheduleDomainEvent15 {
  kind: CareScheduleEventKind15;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind16 = 'care-schedule-event-16-created' | 'care-schedule-event-16-updated' | 'care-schedule-event-16-resolved';
export interface CareScheduleDomainEvent16 {
  kind: CareScheduleEventKind16;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind17 = 'care-schedule-event-17-created' | 'care-schedule-event-17-updated' | 'care-schedule-event-17-resolved';
export interface CareScheduleDomainEvent17 {
  kind: CareScheduleEventKind17;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind18 = 'care-schedule-event-18-created' | 'care-schedule-event-18-updated' | 'care-schedule-event-18-resolved';
export interface CareScheduleDomainEvent18 {
  kind: CareScheduleEventKind18;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind19 = 'care-schedule-event-19-created' | 'care-schedule-event-19-updated' | 'care-schedule-event-19-resolved';
export interface CareScheduleDomainEvent19 {
  kind: CareScheduleEventKind19;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind20 = 'care-schedule-event-20-created' | 'care-schedule-event-20-updated' | 'care-schedule-event-20-resolved';
export interface CareScheduleDomainEvent20 {
  kind: CareScheduleEventKind20;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind21 = 'care-schedule-event-21-created' | 'care-schedule-event-21-updated' | 'care-schedule-event-21-resolved';
export interface CareScheduleDomainEvent21 {
  kind: CareScheduleEventKind21;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind22 = 'care-schedule-event-22-created' | 'care-schedule-event-22-updated' | 'care-schedule-event-22-resolved';
export interface CareScheduleDomainEvent22 {
  kind: CareScheduleEventKind22;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind23 = 'care-schedule-event-23-created' | 'care-schedule-event-23-updated' | 'care-schedule-event-23-resolved';
export interface CareScheduleDomainEvent23 {
  kind: CareScheduleEventKind23;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind24 = 'care-schedule-event-24-created' | 'care-schedule-event-24-updated' | 'care-schedule-event-24-resolved';
export interface CareScheduleDomainEvent24 {
  kind: CareScheduleEventKind24;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind25 = 'care-schedule-event-25-created' | 'care-schedule-event-25-updated' | 'care-schedule-event-25-resolved';
export interface CareScheduleDomainEvent25 {
  kind: CareScheduleEventKind25;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind26 = 'care-schedule-event-26-created' | 'care-schedule-event-26-updated' | 'care-schedule-event-26-resolved';
export interface CareScheduleDomainEvent26 {
  kind: CareScheduleEventKind26;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind27 = 'care-schedule-event-27-created' | 'care-schedule-event-27-updated' | 'care-schedule-event-27-resolved';
export interface CareScheduleDomainEvent27 {
  kind: CareScheduleEventKind27;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind28 = 'care-schedule-event-28-created' | 'care-schedule-event-28-updated' | 'care-schedule-event-28-resolved';
export interface CareScheduleDomainEvent28 {
  kind: CareScheduleEventKind28;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind29 = 'care-schedule-event-29-created' | 'care-schedule-event-29-updated' | 'care-schedule-event-29-resolved';
export interface CareScheduleDomainEvent29 {
  kind: CareScheduleEventKind29;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind30 = 'care-schedule-event-30-created' | 'care-schedule-event-30-updated' | 'care-schedule-event-30-resolved';
export interface CareScheduleDomainEvent30 {
  kind: CareScheduleEventKind30;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind31 = 'care-schedule-event-31-created' | 'care-schedule-event-31-updated' | 'care-schedule-event-31-resolved';
export interface CareScheduleDomainEvent31 {
  kind: CareScheduleEventKind31;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind32 = 'care-schedule-event-32-created' | 'care-schedule-event-32-updated' | 'care-schedule-event-32-resolved';
export interface CareScheduleDomainEvent32 {
  kind: CareScheduleEventKind32;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind33 = 'care-schedule-event-33-created' | 'care-schedule-event-33-updated' | 'care-schedule-event-33-resolved';
export interface CareScheduleDomainEvent33 {
  kind: CareScheduleEventKind33;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind34 = 'care-schedule-event-34-created' | 'care-schedule-event-34-updated' | 'care-schedule-event-34-resolved';
export interface CareScheduleDomainEvent34 {
  kind: CareScheduleEventKind34;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind35 = 'care-schedule-event-35-created' | 'care-schedule-event-35-updated' | 'care-schedule-event-35-resolved';
export interface CareScheduleDomainEvent35 {
  kind: CareScheduleEventKind35;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind36 = 'care-schedule-event-36-created' | 'care-schedule-event-36-updated' | 'care-schedule-event-36-resolved';
export interface CareScheduleDomainEvent36 {
  kind: CareScheduleEventKind36;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind37 = 'care-schedule-event-37-created' | 'care-schedule-event-37-updated' | 'care-schedule-event-37-resolved';
export interface CareScheduleDomainEvent37 {
  kind: CareScheduleEventKind37;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind38 = 'care-schedule-event-38-created' | 'care-schedule-event-38-updated' | 'care-schedule-event-38-resolved';
export interface CareScheduleDomainEvent38 {
  kind: CareScheduleEventKind38;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type CareScheduleEventKind39 = 'care-schedule-event-39-created' | 'care-schedule-event-39-updated' | 'care-schedule-event-39-resolved';
export interface CareScheduleDomainEvent39 {
  kind: CareScheduleEventKind39;
  aggregateId: CareScheduleId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}
