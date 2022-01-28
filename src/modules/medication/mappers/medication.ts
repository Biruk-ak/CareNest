import type { MedicationCreateInput, MedicationRecord, MedicationSummary } from '../types/medication';

export interface MedicationDto {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  visibility: string;
  residentId: string;
  caregiverId?: string;
  tags: string[];
  notes: string[];
  metadata: Record<string, string | number | boolean | null>;
  createdAt: string;
  updatedAt: string;
  facilityId: string;
}

export function toMedicationDto(record: MedicationRecord): MedicationDto {
  return {
    id: record.id,
    title: record.title,
    description: record.description,
    status: record.status,
    priority: record.priority,
    visibility: record.visibility,
    residentId: record.residentId,
    caregiverId: record.caregiverId,
    tags: [...record.tags],
    notes: [...record.notes],
    metadata: { ...record.metadata },
    createdAt: record.createdAt,
    updatedAt: record.updatedAt,
    facilityId: record.facilityId,
  };
}

export function fromMedicationForm(values: Record<string, unknown>): MedicationCreateInput {
  return {
    title: String(values.title ?? ''),
    description: String(values.description ?? ''),
    residentId: String(values.residentId ?? ''),
    caregiverId: values.caregiverId ? String(values.caregiverId) : undefined,
    tags: Array.isArray(values.tags) ? values.tags.map(String) : [],
    notes: Array.isArray(values.notes) ? values.notes.map(String) : [],
  };
}

export function mapMedicationSummaryView1(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-1',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 1 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView2(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-2',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 2 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView3(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-3',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 3 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView4(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-4',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 4 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView5(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-5',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 5 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView6(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-6',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 6 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView7(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-7',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 7 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView8(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-8',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 8 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView9(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-9',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 9 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView10(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-10',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 10 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView11(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-11',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 11 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView12(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-12',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 12 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView13(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-13',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 13 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView14(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-14',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 14 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView15(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-15',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 15 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView16(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-16',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 16 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView17(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-17',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 17 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView18(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-18',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 18 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView19(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-19',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 19 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView20(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-20',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 20 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView21(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-21',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 21 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView22(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-22',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 22 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView23(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-23',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 23 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView24(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-24',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 24 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView25(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-25',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 25 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView26(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-26',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 26 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView27(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-27',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 27 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView28(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-28',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 28 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView29(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-29',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 29 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView30(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-30',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 30 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView31(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-31',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 31 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView32(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-32',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 32 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView33(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-33',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 33 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView34(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-34',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 34 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView35(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-35',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 35 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView36(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-36',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 36 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView37(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-37',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 37 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView38(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-38',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 38 - summary.overdue * 2),
  };
}

export function mapMedicationSummaryView39(summary: MedicationSummary): Record<string, number | string> {
  return {
    view: 'medication-summary-39',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 39 - summary.overdue * 2),
  };
}
