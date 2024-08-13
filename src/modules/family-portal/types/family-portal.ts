/** CareNest domain types — FamilyPortal */
export type FamilyPortalId = string & { readonly __brand: 'FamilyPortalId' };
export type FamilyPortalStatus = 'draft' | 'active' | 'paused' | 'completed' | 'cancelled' | 'archived';
export type FamilyPortalPriority = 'low' | 'normal' | 'high' | 'critical';
export type FamilyPortalVisibility = 'private' | 'care-team' | 'facility' | 'admin';

export interface FamilyPortalAuditMeta {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  version: number;
  facilityId: string;
}

export interface FamilyPortalRecord extends FamilyPortalAuditMeta {
  id: FamilyPortalId;
  title: string;
  description: string;
  status: FamilyPortalStatus;
  priority: FamilyPortalPriority;
  visibility: FamilyPortalVisibility;
  residentId: string;
  caregiverId?: string;
  tags: string[];
  notes: string[];
  metadata: Record<string, string | number | boolean | null>;
}

export interface FamilyPortalFilter {
  status?: FamilyPortalStatus[];
  priority?: FamilyPortalPriority[];
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

export interface FamilyPortalPage {
  items: FamilyPortalRecord[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface FamilyPortalCreateInput {
  title: string;
  description: string;
  status?: FamilyPortalStatus;
  priority?: FamilyPortalPriority;
  visibility?: FamilyPortalVisibility;
  residentId: string;
  caregiverId?: string;
  tags?: string[];
  notes?: string[];
  metadata?: Record<string, string | number | boolean | null>;
}

export interface FamilyPortalUpdateInput extends Partial<FamilyPortalCreateInput> {
  id: FamilyPortalId;
}

export interface FamilyPortalSummary {
  total: number;
  active: number;
  critical: number;
  completedThisWeek: number;
  overdue: number;
}

export interface FamilyPortalDetailBlock1 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock2 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock3 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock4 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock5 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock6 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock7 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock8 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock9 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock10 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock11 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock12 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock13 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock14 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock15 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock16 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock17 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock18 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock19 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock20 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock21 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock22 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock23 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock24 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock25 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock26 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock27 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock28 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock29 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock30 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock31 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock32 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock33 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock34 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock35 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock36 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock37 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock38 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock39 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock40 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock41 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock42 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock43 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock44 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock45 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock46 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock47 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock48 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock49 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock50 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock51 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock52 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock53 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export interface FamilyPortalDetailBlock54 {
  blockId: string;
  label: string;
  value: string | number;
  unit?: string;
  observedAt: string;
  observedBy: string;
  confidence: number;
  source: 'manual' | 'device' | 'import' | 'system';
  flags: string[];
  relatedRecordIds: string[];
  severity: number;
  channel: string;
}

export type FamilyPortalEventKind1 = 'family-portal-event-1-created' | 'family-portal-event-1-updated' | 'family-portal-event-1-resolved';
export interface FamilyPortalDomainEvent1 {
  kind: FamilyPortalEventKind1;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind2 = 'family-portal-event-2-created' | 'family-portal-event-2-updated' | 'family-portal-event-2-resolved';
export interface FamilyPortalDomainEvent2 {
  kind: FamilyPortalEventKind2;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind3 = 'family-portal-event-3-created' | 'family-portal-event-3-updated' | 'family-portal-event-3-resolved';
export interface FamilyPortalDomainEvent3 {
  kind: FamilyPortalEventKind3;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind4 = 'family-portal-event-4-created' | 'family-portal-event-4-updated' | 'family-portal-event-4-resolved';
export interface FamilyPortalDomainEvent4 {
  kind: FamilyPortalEventKind4;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind5 = 'family-portal-event-5-created' | 'family-portal-event-5-updated' | 'family-portal-event-5-resolved';
export interface FamilyPortalDomainEvent5 {
  kind: FamilyPortalEventKind5;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind6 = 'family-portal-event-6-created' | 'family-portal-event-6-updated' | 'family-portal-event-6-resolved';
export interface FamilyPortalDomainEvent6 {
  kind: FamilyPortalEventKind6;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind7 = 'family-portal-event-7-created' | 'family-portal-event-7-updated' | 'family-portal-event-7-resolved';
export interface FamilyPortalDomainEvent7 {
  kind: FamilyPortalEventKind7;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind8 = 'family-portal-event-8-created' | 'family-portal-event-8-updated' | 'family-portal-event-8-resolved';
export interface FamilyPortalDomainEvent8 {
  kind: FamilyPortalEventKind8;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind9 = 'family-portal-event-9-created' | 'family-portal-event-9-updated' | 'family-portal-event-9-resolved';
export interface FamilyPortalDomainEvent9 {
  kind: FamilyPortalEventKind9;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind10 = 'family-portal-event-10-created' | 'family-portal-event-10-updated' | 'family-portal-event-10-resolved';
export interface FamilyPortalDomainEvent10 {
  kind: FamilyPortalEventKind10;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind11 = 'family-portal-event-11-created' | 'family-portal-event-11-updated' | 'family-portal-event-11-resolved';
export interface FamilyPortalDomainEvent11 {
  kind: FamilyPortalEventKind11;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind12 = 'family-portal-event-12-created' | 'family-portal-event-12-updated' | 'family-portal-event-12-resolved';
export interface FamilyPortalDomainEvent12 {
  kind: FamilyPortalEventKind12;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind13 = 'family-portal-event-13-created' | 'family-portal-event-13-updated' | 'family-portal-event-13-resolved';
export interface FamilyPortalDomainEvent13 {
  kind: FamilyPortalEventKind13;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind14 = 'family-portal-event-14-created' | 'family-portal-event-14-updated' | 'family-portal-event-14-resolved';
export interface FamilyPortalDomainEvent14 {
  kind: FamilyPortalEventKind14;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind15 = 'family-portal-event-15-created' | 'family-portal-event-15-updated' | 'family-portal-event-15-resolved';
export interface FamilyPortalDomainEvent15 {
  kind: FamilyPortalEventKind15;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind16 = 'family-portal-event-16-created' | 'family-portal-event-16-updated' | 'family-portal-event-16-resolved';
export interface FamilyPortalDomainEvent16 {
  kind: FamilyPortalEventKind16;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind17 = 'family-portal-event-17-created' | 'family-portal-event-17-updated' | 'family-portal-event-17-resolved';
export interface FamilyPortalDomainEvent17 {
  kind: FamilyPortalEventKind17;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind18 = 'family-portal-event-18-created' | 'family-portal-event-18-updated' | 'family-portal-event-18-resolved';
export interface FamilyPortalDomainEvent18 {
  kind: FamilyPortalEventKind18;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind19 = 'family-portal-event-19-created' | 'family-portal-event-19-updated' | 'family-portal-event-19-resolved';
export interface FamilyPortalDomainEvent19 {
  kind: FamilyPortalEventKind19;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind20 = 'family-portal-event-20-created' | 'family-portal-event-20-updated' | 'family-portal-event-20-resolved';
export interface FamilyPortalDomainEvent20 {
  kind: FamilyPortalEventKind20;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind21 = 'family-portal-event-21-created' | 'family-portal-event-21-updated' | 'family-portal-event-21-resolved';
export interface FamilyPortalDomainEvent21 {
  kind: FamilyPortalEventKind21;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind22 = 'family-portal-event-22-created' | 'family-portal-event-22-updated' | 'family-portal-event-22-resolved';
export interface FamilyPortalDomainEvent22 {
  kind: FamilyPortalEventKind22;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind23 = 'family-portal-event-23-created' | 'family-portal-event-23-updated' | 'family-portal-event-23-resolved';
export interface FamilyPortalDomainEvent23 {
  kind: FamilyPortalEventKind23;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind24 = 'family-portal-event-24-created' | 'family-portal-event-24-updated' | 'family-portal-event-24-resolved';
export interface FamilyPortalDomainEvent24 {
  kind: FamilyPortalEventKind24;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind25 = 'family-portal-event-25-created' | 'family-portal-event-25-updated' | 'family-portal-event-25-resolved';
export interface FamilyPortalDomainEvent25 {
  kind: FamilyPortalEventKind25;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind26 = 'family-portal-event-26-created' | 'family-portal-event-26-updated' | 'family-portal-event-26-resolved';
export interface FamilyPortalDomainEvent26 {
  kind: FamilyPortalEventKind26;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind27 = 'family-portal-event-27-created' | 'family-portal-event-27-updated' | 'family-portal-event-27-resolved';
export interface FamilyPortalDomainEvent27 {
  kind: FamilyPortalEventKind27;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind28 = 'family-portal-event-28-created' | 'family-portal-event-28-updated' | 'family-portal-event-28-resolved';
export interface FamilyPortalDomainEvent28 {
  kind: FamilyPortalEventKind28;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind29 = 'family-portal-event-29-created' | 'family-portal-event-29-updated' | 'family-portal-event-29-resolved';
export interface FamilyPortalDomainEvent29 {
  kind: FamilyPortalEventKind29;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind30 = 'family-portal-event-30-created' | 'family-portal-event-30-updated' | 'family-portal-event-30-resolved';
export interface FamilyPortalDomainEvent30 {
  kind: FamilyPortalEventKind30;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind31 = 'family-portal-event-31-created' | 'family-portal-event-31-updated' | 'family-portal-event-31-resolved';
export interface FamilyPortalDomainEvent31 {
  kind: FamilyPortalEventKind31;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind32 = 'family-portal-event-32-created' | 'family-portal-event-32-updated' | 'family-portal-event-32-resolved';
export interface FamilyPortalDomainEvent32 {
  kind: FamilyPortalEventKind32;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind33 = 'family-portal-event-33-created' | 'family-portal-event-33-updated' | 'family-portal-event-33-resolved';
export interface FamilyPortalDomainEvent33 {
  kind: FamilyPortalEventKind33;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind34 = 'family-portal-event-34-created' | 'family-portal-event-34-updated' | 'family-portal-event-34-resolved';
export interface FamilyPortalDomainEvent34 {
  kind: FamilyPortalEventKind34;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind35 = 'family-portal-event-35-created' | 'family-portal-event-35-updated' | 'family-portal-event-35-resolved';
export interface FamilyPortalDomainEvent35 {
  kind: FamilyPortalEventKind35;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind36 = 'family-portal-event-36-created' | 'family-portal-event-36-updated' | 'family-portal-event-36-resolved';
export interface FamilyPortalDomainEvent36 {
  kind: FamilyPortalEventKind36;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind37 = 'family-portal-event-37-created' | 'family-portal-event-37-updated' | 'family-portal-event-37-resolved';
export interface FamilyPortalDomainEvent37 {
  kind: FamilyPortalEventKind37;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind38 = 'family-portal-event-38-created' | 'family-portal-event-38-updated' | 'family-portal-event-38-resolved';
export interface FamilyPortalDomainEvent38 {
  kind: FamilyPortalEventKind38;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}

export type FamilyPortalEventKind39 = 'family-portal-event-39-created' | 'family-portal-event-39-updated' | 'family-portal-event-39-resolved';
export interface FamilyPortalDomainEvent39 {
  kind: FamilyPortalEventKind39;
  aggregateId: FamilyPortalId;
  occurredAt: string;
  actorId: string;
  payload: Record<string, unknown>;
  correlationId: string;
  facilityId: string;
}
