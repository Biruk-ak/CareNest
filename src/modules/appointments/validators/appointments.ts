import { z } from 'zod';
/** Zod validators for Appointments */

export const appointmentsStatusSchema = z.enum(['draft', 'active', 'paused', 'completed', 'cancelled', 'archived']);
export const appointmentsPrioritySchema = z.enum(['low', 'normal', 'high', 'critical']);
export const appointmentsVisibilitySchema = z.enum(['private', 'care-team', 'facility', 'admin']);

export const appointmentsCreateSchema = z.object({
  title: z.string().min(2).max(200),
  description: z.string().min(1).max(5000),
  status: appointmentsStatusSchema.optional(),
  priority: appointmentsPrioritySchema.optional(),
  visibility: appointmentsVisibilitySchema.optional(),
  residentId: z.string().min(1),
  caregiverId: z.string().min(1).optional(),
  tags: z.array(z.string().max(40)).max(25).optional(),
  notes: z.array(z.string().max(1000)).max(50).optional(),
  metadata: z.record(z.union([z.string(), z.number(), z.boolean(), z.null()])).optional(),
});

export const appointmentsUpdateSchema = appointmentsCreateSchema.partial().extend({
  id: z.string().min(1),
});

export const appointmentsFilterSchema = z.object({
  status: z.array(appointmentsStatusSchema).optional(),
  priority: z.array(appointmentsPrioritySchema).optional(),
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

export const appointmentsDetailBlock1Schema = z.object({
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

export const appointmentsDetailBlock2Schema = z.object({
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

export const appointmentsDetailBlock3Schema = z.object({
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

export const appointmentsDetailBlock4Schema = z.object({
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

export const appointmentsDetailBlock5Schema = z.object({
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

export const appointmentsDetailBlock6Schema = z.object({
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

export const appointmentsDetailBlock7Schema = z.object({
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

export const appointmentsDetailBlock8Schema = z.object({
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

export const appointmentsDetailBlock9Schema = z.object({
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

export const appointmentsDetailBlock10Schema = z.object({
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

export const appointmentsDetailBlock11Schema = z.object({
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

export const appointmentsDetailBlock12Schema = z.object({
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

export const appointmentsDetailBlock13Schema = z.object({
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

export const appointmentsDetailBlock14Schema = z.object({
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

export const appointmentsDetailBlock15Schema = z.object({
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

export const appointmentsDetailBlock16Schema = z.object({
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

export const appointmentsDetailBlock17Schema = z.object({
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

export const appointmentsDetailBlock18Schema = z.object({
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

export const appointmentsDetailBlock19Schema = z.object({
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

export const appointmentsDetailBlock20Schema = z.object({
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

export const appointmentsDetailBlock21Schema = z.object({
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

export const appointmentsDetailBlock22Schema = z.object({
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

export const appointmentsDetailBlock23Schema = z.object({
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

export const appointmentsDetailBlock24Schema = z.object({
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

export const appointmentsDetailBlock25Schema = z.object({
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

export const appointmentsDetailBlock26Schema = z.object({
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

export const appointmentsDetailBlock27Schema = z.object({
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

export const appointmentsDetailBlock28Schema = z.object({
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

export const appointmentsDetailBlock29Schema = z.object({
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

export const appointmentsDetailBlock30Schema = z.object({
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

export const appointmentsDetailBlock31Schema = z.object({
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

export const appointmentsDetailBlock32Schema = z.object({
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

export const appointmentsDetailBlock33Schema = z.object({
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

export const appointmentsDetailBlock34Schema = z.object({
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

export const appointmentsDetailBlock35Schema = z.object({
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

export const appointmentsDetailBlock36Schema = z.object({
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

export const appointmentsDetailBlock37Schema = z.object({
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

export const appointmentsDetailBlock38Schema = z.object({
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

export const appointmentsDetailBlock39Schema = z.object({
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

export const appointmentsDetailBlock40Schema = z.object({
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

export const appointmentsDetailBlock41Schema = z.object({
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

export const appointmentsDetailBlock42Schema = z.object({
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

export const appointmentsDetailBlock43Schema = z.object({
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

export const appointmentsDetailBlock44Schema = z.object({
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

export type AppointmentsCreateParsed = z.infer<typeof appointmentsCreateSchema>;
export type AppointmentsUpdateParsed = z.infer<typeof appointmentsUpdateSchema>;
export type AppointmentsFilterParsed = z.infer<typeof appointmentsFilterSchema>;
