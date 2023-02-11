import { z } from 'zod';
/** Zod validators for Payments */

export const paymentsStatusSchema = z.enum(['draft', 'active', 'paused', 'completed', 'cancelled', 'archived']);
export const paymentsPrioritySchema = z.enum(['low', 'normal', 'high', 'critical']);
export const paymentsVisibilitySchema = z.enum(['private', 'care-team', 'facility', 'admin']);

export const paymentsCreateSchema = z.object({
  title: z.string().min(2).max(200),
  description: z.string().min(1).max(5000),
  status: paymentsStatusSchema.optional(),
  priority: paymentsPrioritySchema.optional(),
  visibility: paymentsVisibilitySchema.optional(),
  residentId: z.string().min(1),
  caregiverId: z.string().min(1).optional(),
  tags: z.array(z.string().max(40)).max(25).optional(),
  notes: z.array(z.string().max(1000)).max(50).optional(),
  metadata: z.record(z.union([z.string(), z.number(), z.boolean(), z.null()])).optional(),
});

export const paymentsUpdateSchema = paymentsCreateSchema.partial().extend({
  id: z.string().min(1),
});

export const paymentsFilterSchema = z.object({
  status: z.array(paymentsStatusSchema).optional(),
  priority: z.array(paymentsPrioritySchema).optional(),
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

export const paymentsDetailBlock1Schema = z.object({
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

export const paymentsDetailBlock2Schema = z.object({
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

export const paymentsDetailBlock3Schema = z.object({
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

export const paymentsDetailBlock4Schema = z.object({
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

export const paymentsDetailBlock5Schema = z.object({
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

export const paymentsDetailBlock6Schema = z.object({
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

export const paymentsDetailBlock7Schema = z.object({
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

export const paymentsDetailBlock8Schema = z.object({
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

export const paymentsDetailBlock9Schema = z.object({
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

export const paymentsDetailBlock10Schema = z.object({
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

export const paymentsDetailBlock11Schema = z.object({
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

export const paymentsDetailBlock12Schema = z.object({
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

export const paymentsDetailBlock13Schema = z.object({
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

export const paymentsDetailBlock14Schema = z.object({
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

export const paymentsDetailBlock15Schema = z.object({
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

export const paymentsDetailBlock16Schema = z.object({
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

export const paymentsDetailBlock17Schema = z.object({
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

export const paymentsDetailBlock18Schema = z.object({
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

export const paymentsDetailBlock19Schema = z.object({
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

export const paymentsDetailBlock20Schema = z.object({
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

export const paymentsDetailBlock21Schema = z.object({
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

export const paymentsDetailBlock22Schema = z.object({
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

export const paymentsDetailBlock23Schema = z.object({
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

export const paymentsDetailBlock24Schema = z.object({
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

export const paymentsDetailBlock25Schema = z.object({
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

export const paymentsDetailBlock26Schema = z.object({
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

export const paymentsDetailBlock27Schema = z.object({
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

export const paymentsDetailBlock28Schema = z.object({
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

export const paymentsDetailBlock29Schema = z.object({
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

export const paymentsDetailBlock30Schema = z.object({
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

export const paymentsDetailBlock31Schema = z.object({
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

export const paymentsDetailBlock32Schema = z.object({
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

export const paymentsDetailBlock33Schema = z.object({
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

export const paymentsDetailBlock34Schema = z.object({
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

export const paymentsDetailBlock35Schema = z.object({
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

export const paymentsDetailBlock36Schema = z.object({
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

export const paymentsDetailBlock37Schema = z.object({
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

export const paymentsDetailBlock38Schema = z.object({
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

export const paymentsDetailBlock39Schema = z.object({
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

export const paymentsDetailBlock40Schema = z.object({
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

export const paymentsDetailBlock41Schema = z.object({
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

export const paymentsDetailBlock42Schema = z.object({
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

export const paymentsDetailBlock43Schema = z.object({
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

export const paymentsDetailBlock44Schema = z.object({
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

export type PaymentsCreateParsed = z.infer<typeof paymentsCreateSchema>;
export type PaymentsUpdateParsed = z.infer<typeof paymentsUpdateSchema>;
export type PaymentsFilterParsed = z.infer<typeof paymentsFilterSchema>;
