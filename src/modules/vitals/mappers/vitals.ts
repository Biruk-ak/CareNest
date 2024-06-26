import type { VitalsCreateInput, VitalsRecord, VitalsSummary } from '../types/vitals';

export interface VitalsDto {
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

export function toVitalsDto(record: VitalsRecord): VitalsDto {
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

export function fromVitalsForm(values: Record<string, unknown>): VitalsCreateInput {
  return {
    title: String(values.title ?? ''),
    description: String(values.description ?? ''),
    residentId: String(values.residentId ?? ''),
    caregiverId: values.caregiverId ? String(values.caregiverId) : undefined,
    tags: Array.isArray(values.tags) ? values.tags.map(String) : [],
    notes: Array.isArray(values.notes) ? values.notes.map(String) : [],
  };
}

export function mapVitalsSummaryView1(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-1',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 1 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView2(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-2',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 2 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView3(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-3',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 3 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView4(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-4',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 4 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView5(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-5',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 5 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView6(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-6',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 6 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView7(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-7',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 7 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView8(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-8',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 8 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView9(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-9',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 9 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView10(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-10',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 10 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView11(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-11',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 11 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView12(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-12',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 12 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView13(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-13',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 13 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView14(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-14',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 14 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView15(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-15',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 15 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView16(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-16',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 16 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView17(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-17',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 17 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView18(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-18',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 18 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView19(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-19',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 19 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView20(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-20',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 20 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView21(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-21',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 21 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView22(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-22',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 22 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView23(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-23',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 23 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView24(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-24',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 24 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView25(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-25',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 25 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView26(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-26',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 26 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView27(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-27',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 27 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView28(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-28',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 28 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView29(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-29',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 29 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView30(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-30',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 30 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView31(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-31',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 31 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView32(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-32',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 32 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView33(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-33',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 33 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView34(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-34',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 34 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView35(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-35',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 35 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView36(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-36',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 36 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView37(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-37',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 37 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView38(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-38',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 38 - summary.overdue * 2),
  };
}

export function mapVitalsSummaryView39(summary: VitalsSummary): Record<string, number | string> {
  return {
    view: 'vitals-summary-39',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 39 - summary.overdue * 2),
  };
}
