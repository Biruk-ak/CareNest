import { z } from 'zod';
/** Zod validators for Compliance */

export const complianceStatusSchema = z.enum(['draft', 'active', 'paused', 'completed', 'cancelled', 'archived']);
export const compliancePrioritySchema = z.enum(['low', 'normal', 'high', 'critical']);
export const complianceVisibilitySchema = z.enum(['private', 'care-team', 'facility', 'admin']);

export const complianceCreateSchema = z.object({
  title: z.string().min(2).max(200),
  description: z.string().min(1).max(5000),
  status: complianceStatusSchema.optional(),
  priority: compliancePrioritySchema.optional(),
  visibility: complianceVisibilitySchema.optional(),
  residentId: z.string().min(1),
  caregiverId: z.string().min(1).optional(),
  tags: z.array(z.string().max(40)).max(25).optional(),
  notes: z.array(z.string().max(1000)).max(50).optional(),
  metadata: z.record(z.union([z.string(), z.number(), z.boolean(), z.null()])).optional(),
});

export const complianceUpdateSchema = complianceCreateSchema.partial().extend({
  id: z.string().min(1),
});

export const complianceFilterSchema = z.object({
  status: z.array(complianceStatusSchema).optional(),
  priority: z.array(compliancePrioritySchema).optional(),
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

export const complianceDetailBlock1Schema = z.object({
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

export const complianceDetailBlock2Schema = z.object({
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

export const complianceDetailBlock3Schema = z.object({
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

export const complianceDetailBlock4Schema = z.object({
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

export const complianceDetailBlock5Schema = z.object({
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

export const complianceDetailBlock6Schema = z.object({
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

export const complianceDetailBlock7Schema = z.object({
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

export const complianceDetailBlock8Schema = z.object({
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

export const complianceDetailBlock9Schema = z.object({
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

export const complianceDetailBlock10Schema = z.object({
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

export const complianceDetailBlock11Schema = z.object({
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

export const complianceDetailBlock12Schema = z.object({
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

export const complianceDetailBlock13Schema = z.object({
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

export const complianceDetailBlock14Schema = z.object({
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

export const complianceDetailBlock15Schema = z.object({
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

export const complianceDetailBlock16Schema = z.object({
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

export const complianceDetailBlock17Schema = z.object({
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

export const complianceDetailBlock18Schema = z.object({
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

export const complianceDetailBlock19Schema = z.object({
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

export const complianceDetailBlock20Schema = z.object({
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

export const complianceDetailBlock21Schema = z.object({
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

export const complianceDetailBlock22Schema = z.object({
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

export const complianceDetailBlock23Schema = z.object({
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

export const complianceDetailBlock24Schema = z.object({
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

export const complianceDetailBlock25Schema = z.object({
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

export const complianceDetailBlock26Schema = z.object({
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

export const complianceDetailBlock27Schema = z.object({
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

export const complianceDetailBlock28Schema = z.object({
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

export const complianceDetailBlock29Schema = z.object({
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

export const complianceDetailBlock30Schema = z.object({
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

export const complianceDetailBlock31Schema = z.object({
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

export const complianceDetailBlock32Schema = z.object({
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

export const complianceDetailBlock33Schema = z.object({
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

export const complianceDetailBlock34Schema = z.object({
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

export const complianceDetailBlock35Schema = z.object({
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

export const complianceDetailBlock36Schema = z.object({
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

export const complianceDetailBlock37Schema = z.object({
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

export const complianceDetailBlock38Schema = z.object({
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

export const complianceDetailBlock39Schema = z.object({
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

export const complianceDetailBlock40Schema = z.object({
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

export const complianceDetailBlock41Schema = z.object({
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

export const complianceDetailBlock42Schema = z.object({
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

export const complianceDetailBlock43Schema = z.object({
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

export const complianceDetailBlock44Schema = z.object({
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

export type ComplianceCreateParsed = z.infer<typeof complianceCreateSchema>;
export type ComplianceUpdateParsed = z.infer<typeof complianceUpdateSchema>;
export type ComplianceFilterParsed = z.infer<typeof complianceFilterSchema>;
