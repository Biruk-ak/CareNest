import { z } from 'zod';
/** Zod validators for Inventory */

export const inventoryStatusSchema = z.enum(['draft', 'active', 'paused', 'completed', 'cancelled', 'archived']);
export const inventoryPrioritySchema = z.enum(['low', 'normal', 'high', 'critical']);
export const inventoryVisibilitySchema = z.enum(['private', 'care-team', 'facility', 'admin']);

export const inventoryCreateSchema = z.object({
  title: z.string().min(2).max(200),
  description: z.string().min(1).max(5000),
  status: inventoryStatusSchema.optional(),
  priority: inventoryPrioritySchema.optional(),
  visibility: inventoryVisibilitySchema.optional(),
  residentId: z.string().min(1),
  caregiverId: z.string().min(1).optional(),
  tags: z.array(z.string().max(40)).max(25).optional(),
  notes: z.array(z.string().max(1000)).max(50).optional(),
  metadata: z.record(z.union([z.string(), z.number(), z.boolean(), z.null()])).optional(),
});

export const inventoryUpdateSchema = inventoryCreateSchema.partial().extend({
  id: z.string().min(1),
});

export const inventoryFilterSchema = z.object({
  status: z.array(inventoryStatusSchema).optional(),
  priority: z.array(inventoryPrioritySchema).optional(),
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

export const inventoryDetailBlock1Schema = z.object({
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

export const inventoryDetailBlock2Schema = z.object({
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

export const inventoryDetailBlock3Schema = z.object({
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

export const inventoryDetailBlock4Schema = z.object({
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

export const inventoryDetailBlock5Schema = z.object({
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

export const inventoryDetailBlock6Schema = z.object({
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

export const inventoryDetailBlock7Schema = z.object({
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

export const inventoryDetailBlock8Schema = z.object({
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

export const inventoryDetailBlock9Schema = z.object({
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

export const inventoryDetailBlock10Schema = z.object({
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

export const inventoryDetailBlock11Schema = z.object({
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

export const inventoryDetailBlock12Schema = z.object({
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

export const inventoryDetailBlock13Schema = z.object({
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

export const inventoryDetailBlock14Schema = z.object({
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

export const inventoryDetailBlock15Schema = z.object({
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

export const inventoryDetailBlock16Schema = z.object({
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

export const inventoryDetailBlock17Schema = z.object({
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

export const inventoryDetailBlock18Schema = z.object({
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

export const inventoryDetailBlock19Schema = z.object({
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

export const inventoryDetailBlock20Schema = z.object({
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

export const inventoryDetailBlock21Schema = z.object({
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

export const inventoryDetailBlock22Schema = z.object({
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

export const inventoryDetailBlock23Schema = z.object({
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

export const inventoryDetailBlock24Schema = z.object({
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

export const inventoryDetailBlock25Schema = z.object({
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

export const inventoryDetailBlock26Schema = z.object({
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

export const inventoryDetailBlock27Schema = z.object({
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

export const inventoryDetailBlock28Schema = z.object({
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

export const inventoryDetailBlock29Schema = z.object({
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

export const inventoryDetailBlock30Schema = z.object({
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

export const inventoryDetailBlock31Schema = z.object({
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

export const inventoryDetailBlock32Schema = z.object({
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

export const inventoryDetailBlock33Schema = z.object({
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

export const inventoryDetailBlock34Schema = z.object({
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

export const inventoryDetailBlock35Schema = z.object({
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

export const inventoryDetailBlock36Schema = z.object({
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

export const inventoryDetailBlock37Schema = z.object({
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

export const inventoryDetailBlock38Schema = z.object({
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

export const inventoryDetailBlock39Schema = z.object({
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

export const inventoryDetailBlock40Schema = z.object({
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

export const inventoryDetailBlock41Schema = z.object({
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

export const inventoryDetailBlock42Schema = z.object({
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

export const inventoryDetailBlock43Schema = z.object({
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

export const inventoryDetailBlock44Schema = z.object({
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

export type InventoryCreateParsed = z.infer<typeof inventoryCreateSchema>;
export type InventoryUpdateParsed = z.infer<typeof inventoryUpdateSchema>;
export type InventoryFilterParsed = z.infer<typeof inventoryFilterSchema>;
