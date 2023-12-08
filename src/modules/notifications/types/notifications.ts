/** CareNest domain types — Notifications */
export type NotificationsId = string & { readonly __brand: 'NotificationsId' };
export type NotificationsStatus = 'draft' | 'active' | 'paused' | 'completed' | 'cancelled' | 'archived';
export type NotificationsPriority = 'low' | 'normal' | 'high' | 'critical';
export type NotificationsVisibility = 'private' | 'care-team' | 'facility' | 'admin';

export interface NotificationsAuditMeta {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  version: number;
  facilityId: string;
}

export interface NotificationsRecord extends NotificationsAuditMeta {
  id: NotificationsId;
  title: string;
  description: string;
  status: NotificationsStatus;
  priority: NotificationsPriority;
  visibility: NotificationsVisibility;
  residentId: string;
  caregiverId?: string;
  tags: string[];
  notes: string[];
  metadata: Record<string, string | number | boolean | null>;
}

export interface NotificationsFilter {
  status?: NotificationsStatus[];
  priority?: NotificationsPriority[];
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

export interface NotificationsPage {
  items: NotificationsRecord[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface NotificationsCreateInput {
  title: string;
  description: string;
  status?: NotificationsStatus;
  priority?: NotificationsPriority;
  visibility?: NotificationsVisibility;
  residentId: string;
  caregiverId?: string;
  tags?: string[];
  notes?: string[];
  metadata?: Record<string, string | number | boolean | null>;
}

export interface NotificationsUpdateInput extends Partial<NotificationsCreateInput> {
  id: NotificationsId;
}

export interface NotificationsSummary {
  total: number;
  active: number;
  critical: number;
  completedThisWeek: number;
  overdue: number;
}

export interface NotificationsDetailBlock1 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock2 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock3 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock4 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock5 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock6 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock7 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock8 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock9 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock10 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock11 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock12 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock13 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock14 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock15 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock16 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock17 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock18 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock19 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock20 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock21 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock22 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock23 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock24 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock25 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock26 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock27 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock28 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock29 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock30 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock31 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock32 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock33 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock34 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock35 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock36 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock37 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock38 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock39 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock40 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock41 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock42 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock43 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock44 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock45 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock46 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock47 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock48 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock49 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock50 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock51 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock52 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock53 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface NotificationsDetailBlock54 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export type NotificationsEventKind1 = 'notifications-event-1-created' | 'notifications-event-1-updated' | 'notifications-event-1-resolved';
export interface NotificationsDomainEvent1 {
  kind: NotificationsEventKind1;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind2 = 'notifications-event-2-created' | 'notifications-event-2-updated' | 'notifications-event-2-resolved';
export interface NotificationsDomainEvent2 {
  kind: NotificationsEventKind2;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind3 = 'notifications-event-3-created' | 'notifications-event-3-updated' | 'notifications-event-3-resolved';
export interface NotificationsDomainEvent3 {
  kind: NotificationsEventKind3;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind4 = 'notifications-event-4-created' | 'notifications-event-4-updated' | 'notifications-event-4-resolved';
export interface NotificationsDomainEvent4 {
  kind: NotificationsEventKind4;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind5 = 'notifications-event-5-created' | 'notifications-event-5-updated' | 'notifications-event-5-resolved';
export interface NotificationsDomainEvent5 {
  kind: NotificationsEventKind5;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind6 = 'notifications-event-6-created' | 'notifications-event-6-updated' | 'notifications-event-6-resolved';
export interface NotificationsDomainEvent6 {
  kind: NotificationsEventKind6;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind7 = 'notifications-event-7-created' | 'notifications-event-7-updated' | 'notifications-event-7-resolved';
export interface NotificationsDomainEvent7 {
  kind: NotificationsEventKind7;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind8 = 'notifications-event-8-created' | 'notifications-event-8-updated' | 'notifications-event-8-resolved';
export interface NotificationsDomainEvent8 {
  kind: NotificationsEventKind8;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind9 = 'notifications-event-9-created' | 'notifications-event-9-updated' | 'notifications-event-9-resolved';
export interface NotificationsDomainEvent9 {
  kind: NotificationsEventKind9;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind10 = 'notifications-event-10-created' | 'notifications-event-10-updated' | 'notifications-event-10-resolved';
export interface NotificationsDomainEvent10 {
  kind: NotificationsEventKind10;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind11 = 'notifications-event-11-created' | 'notifications-event-11-updated' | 'notifications-event-11-resolved';
export interface NotificationsDomainEvent11 {
  kind: NotificationsEventKind11;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind12 = 'notifications-event-12-created' | 'notifications-event-12-updated' | 'notifications-event-12-resolved';
export interface NotificationsDomainEvent12 {
  kind: NotificationsEventKind12;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind13 = 'notifications-event-13-created' | 'notifications-event-13-updated' | 'notifications-event-13-resolved';
export interface NotificationsDomainEvent13 {
  kind: NotificationsEventKind13;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind14 = 'notifications-event-14-created' | 'notifications-event-14-updated' | 'notifications-event-14-resolved';
export interface NotificationsDomainEvent14 {
  kind: NotificationsEventKind14;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind15 = 'notifications-event-15-created' | 'notifications-event-15-updated' | 'notifications-event-15-resolved';
export interface NotificationsDomainEvent15 {
  kind: NotificationsEventKind15;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind16 = 'notifications-event-16-created' | 'notifications-event-16-updated' | 'notifications-event-16-resolved';
export interface NotificationsDomainEvent16 {
  kind: NotificationsEventKind16;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind17 = 'notifications-event-17-created' | 'notifications-event-17-updated' | 'notifications-event-17-resolved';
export interface NotificationsDomainEvent17 {
  kind: NotificationsEventKind17;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind18 = 'notifications-event-18-created' | 'notifications-event-18-updated' | 'notifications-event-18-resolved';
export interface NotificationsDomainEvent18 {
  kind: NotificationsEventKind18;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind19 = 'notifications-event-19-created' | 'notifications-event-19-updated' | 'notifications-event-19-resolved';
export interface NotificationsDomainEvent19 {
  kind: NotificationsEventKind19;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind20 = 'notifications-event-20-created' | 'notifications-event-20-updated' | 'notifications-event-20-resolved';
export interface NotificationsDomainEvent20 {
  kind: NotificationsEventKind20;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind21 = 'notifications-event-21-created' | 'notifications-event-21-updated' | 'notifications-event-21-resolved';
export interface NotificationsDomainEvent21 {
  kind: NotificationsEventKind21;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind22 = 'notifications-event-22-created' | 'notifications-event-22-updated' | 'notifications-event-22-resolved';
export interface NotificationsDomainEvent22 {
  kind: NotificationsEventKind22;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind23 = 'notifications-event-23-created' | 'notifications-event-23-updated' | 'notifications-event-23-resolved';
export interface NotificationsDomainEvent23 {
  kind: NotificationsEventKind23;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind24 = 'notifications-event-24-created' | 'notifications-event-24-updated' | 'notifications-event-24-resolved';
export interface NotificationsDomainEvent24 {
  kind: NotificationsEventKind24;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind25 = 'notifications-event-25-created' | 'notifications-event-25-updated' | 'notifications-event-25-resolved';
export interface NotificationsDomainEvent25 {
  kind: NotificationsEventKind25;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind26 = 'notifications-event-26-created' | 'notifications-event-26-updated' | 'notifications-event-26-resolved';
export interface NotificationsDomainEvent26 {
  kind: NotificationsEventKind26;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind27 = 'notifications-event-27-created' | 'notifications-event-27-updated' | 'notifications-event-27-resolved';
export interface NotificationsDomainEvent27 {
  kind: NotificationsEventKind27;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind28 = 'notifications-event-28-created' | 'notifications-event-28-updated' | 'notifications-event-28-resolved';
export interface NotificationsDomainEvent28 {
  kind: NotificationsEventKind28;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind29 = 'notifications-event-29-created' | 'notifications-event-29-updated' | 'notifications-event-29-resolved';
export interface NotificationsDomainEvent29 {
  kind: NotificationsEventKind29;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind30 = 'notifications-event-30-created' | 'notifications-event-30-updated' | 'notifications-event-30-resolved';
export interface NotificationsDomainEvent30 {
  kind: NotificationsEventKind30;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind31 = 'notifications-event-31-created' | 'notifications-event-31-updated' | 'notifications-event-31-resolved';
export interface NotificationsDomainEvent31 {
  kind: NotificationsEventKind31;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind32 = 'notifications-event-32-created' | 'notifications-event-32-updated' | 'notifications-event-32-resolved';
export interface NotificationsDomainEvent32 {
  kind: NotificationsEventKind32;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind33 = 'notifications-event-33-created' | 'notifications-event-33-updated' | 'notifications-event-33-resolved';
export interface NotificationsDomainEvent33 {
  kind: NotificationsEventKind33;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind34 = 'notifications-event-34-created' | 'notifications-event-34-updated' | 'notifications-event-34-resolved';
export interface NotificationsDomainEvent34 {
  kind: NotificationsEventKind34;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind35 = 'notifications-event-35-created' | 'notifications-event-35-updated' | 'notifications-event-35-resolved';
export interface NotificationsDomainEvent35 {
  kind: NotificationsEventKind35;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind36 = 'notifications-event-36-created' | 'notifications-event-36-updated' | 'notifications-event-36-resolved';
export interface NotificationsDomainEvent36 {
  kind: NotificationsEventKind36;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind37 = 'notifications-event-37-created' | 'notifications-event-37-updated' | 'notifications-event-37-resolved';
export interface NotificationsDomainEvent37 {
  kind: NotificationsEventKind37;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind38 = 'notifications-event-38-created' | 'notifications-event-38-updated' | 'notifications-event-38-resolved';
export interface NotificationsDomainEvent38 {
  kind: NotificationsEventKind38;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type NotificationsEventKind39 = 'notifications-event-39-created' | 'notifications-event-39-updated' | 'notifications-event-39-resolved';
export interface NotificationsDomainEvent39 {
  kind: NotificationsEventKind39;
  aggregateId: NotificationsId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}
