import { z } from 'zod';
/** Zod validators for CareSchedule */

export const careScheduleStatusSchema = z.enum(['draft', 'active', 'paused', 'completed', 'cancelled', 'archived']);
export const careSchedulePrioritySchema = z.enum(['low', 'normal', 'high', 'critical']);
export const careScheduleVisibilitySchema = z.enum(['private', 'care-team', 'facility', 'admin']);

export const careScheduleCreateSchema = z.object({
  title: z.string().min(2).max(200),
  description: z.string().min(1).max(5000),
  status: careScheduleStatusSchema.optional(),
  priority: careSchedulePrioritySchema.optional(),
  visibility: careScheduleVisibilitySchema.optional(),
  residentId: z.string().min(1),
  caregiverId: z.string().min(1).optional(),
  tags: z.array(z.string().max(40)).max(25).optional(),
  notes: z.array(z.string().max(1000)).max(50).optional(),
  metadata: z.record(z.union([z.string(), z.number(), z.boolean(), z.null()])).optional(),
});

export const careScheduleUpdateSchema = careScheduleCreateSchema.partial().extend({
  id: z.string().min(1),
});

export const careScheduleFilterSchema = z.object({
  status: z.array(careScheduleStatusSchema).optional(),
  priority: z.array(careSchedulePrioritySchema).optional(),
  residentId: z.string().optional(),
  caregiverId: z.string().optional(),
  query: z.string().max(200).optional(),
  from: z.string().optional(),
  to: z.string().optional(),
  page: z.number().int().min(1).optional(),
  pageSize: z.number().int().min(1).max(200).optional(),
  sortBy: z.string().optional(),
  sortDir: z.enum(['asc', 'desc']).optional(),
});

export const careScheduleDetailBlock1Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock2Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock3Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock4Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock5Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock6Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock7Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock8Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock9Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock10Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock11Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock12Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock13Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock14Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock15Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock16Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock17Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock18Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock19Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock20Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock21Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock22Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock23Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock24Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock25Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock26Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock27Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock28Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock29Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock30Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock31Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock32Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock33Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock34Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock35Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock36Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock37Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock38Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock39Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock40Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock41Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock42Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock43Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export const careScheduleDetailBlock44Schema = z.object({
  blockId: z.string(),
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  observedAt: z.string(),
  observedBy: z.string(),
  confidence: z.number().min(0).max(1),
  source: z.enum(['manual', 'device', 'import', 'system']),
  flags: z.array(z.string()),
  relatedRecordIds: z.array(z.string()),
  severity: z.number().min(0).max(100),
  channel: z.string(),
});

export type CareScheduleCreateParsed = z.infer<typeof careScheduleCreateSchema>;
export type CareScheduleUpdateParsed = z.infer<typeof careScheduleUpdateSchema>;
export type CareScheduleFilterParsed = z.infer<typeof careScheduleFilterSchema>;
