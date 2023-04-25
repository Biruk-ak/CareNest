import type { ReportsCreateInput, ReportsRecord, ReportsSummary } from '../types/reports';

export interface ReportsDto {
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

export function toReportsDto(record: ReportsRecord): ReportsDto {
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

export function fromReportsForm(values: Record<string, unknown>): ReportsCreateInput {
  return {
    title: String(values.title ?? ''),
    description: String(values.description ?? ''),
    residentId: String(values.residentId ?? ''),
    caregiverId: values.caregiverId ? String(values.caregiverId) : undefined,
    tags: Array.isArray(values.tags) ? values.tags.map(String) : [],
    notes: Array.isArray(values.notes) ? values.notes.map(String) : [],
  };
}

export function mapReportsSummaryView1(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-1',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 1 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView2(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-2',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 2 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView3(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-3',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 3 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView4(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-4',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 4 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView5(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-5',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 5 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView6(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-6',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 6 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView7(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-7',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 7 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView8(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-8',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 8 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView9(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-9',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 9 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView10(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-10',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 10 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView11(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-11',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 11 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView12(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-12',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 12 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView13(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-13',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 13 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView14(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-14',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 14 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView15(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-15',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 15 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView16(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-16',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 16 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView17(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-17',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 17 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView18(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-18',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 18 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView19(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-19',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 19 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView20(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-20',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 20 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView21(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-21',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 21 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView22(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-22',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 22 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView23(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-23',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 23 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView24(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-24',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 24 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView25(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-25',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 25 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView26(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-26',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 26 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView27(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-27',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 27 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView28(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-28',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 28 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView29(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-29',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 29 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView30(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-30',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 30 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView31(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-31',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 31 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView32(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-32',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 32 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView33(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-33',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 33 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView34(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-34',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 34 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView35(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-35',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 35 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView36(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-36',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 36 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView37(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-37',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 37 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView38(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-38',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 38 - summary.overdue * 2),
  };
}

export function mapReportsSummaryView39(summary: ReportsSummary): Record<string, number | string> {
  return {
    view: 'reports-summary-39',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 39 - summary.overdue * 2),
  };
}
