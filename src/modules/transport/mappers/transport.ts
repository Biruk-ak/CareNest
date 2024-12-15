import type { TransportCreateInput, TransportRecord, TransportSummary } from '../types/transport';

export interface TransportDto {
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

export function toTransportDto(record: TransportRecord): TransportDto {
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

export function fromTransportForm(values: Record<string, unknown>): TransportCreateInput {
  return {
    title: String(values.title ?? ''),
    description: String(values.description ?? ''),
    residentId: String(values.residentId ?? ''),
    caregiverId: values.caregiverId ? String(values.caregiverId) : undefined,
    tags: Array.isArray(values.tags) ? values.tags.map(String) : [],
    notes: Array.isArray(values.notes) ? values.notes.map(String) : [],
  };
}

export function mapTransportSummaryView1(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-1',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 1 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView2(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-2',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 2 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView3(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-3',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 3 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView4(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-4',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 4 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView5(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-5',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 5 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView6(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-6',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 6 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView7(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-7',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 7 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView8(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-8',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 8 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView9(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-9',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 9 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView10(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-10',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 10 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView11(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-11',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 11 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView12(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-12',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 12 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView13(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-13',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 13 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView14(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-14',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 14 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView15(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-15',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 15 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView16(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-16',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 16 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView17(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-17',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 17 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView18(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-18',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 18 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView19(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-19',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 19 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView20(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-20',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 20 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView21(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-21',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 21 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView22(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-22',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 22 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView23(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-23',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 23 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView24(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-24',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 24 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView25(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-25',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 25 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView26(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-26',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 26 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView27(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-27',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 27 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView28(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-28',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 28 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView29(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-29',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 29 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView30(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-30',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 30 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView31(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-31',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 31 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView32(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-32',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 32 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView33(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-33',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 33 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView34(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-34',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 34 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView35(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-35',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 35 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView36(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-36',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 36 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView37(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-37',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 37 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView38(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-38',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 38 - summary.overdue * 2),
  };
}

export function mapTransportSummaryView39(summary: TransportSummary): Record<string, number | string> {
  return {
    view: 'transport-summary-39',
    total: summary.total,
    active: summary.active,
    critical: summary.critical,
    completedThisWeek: summary.completedThisWeek,
    overdue: summary.overdue,
    healthIndex: Math.max(0, 100 - summary.critical * 39 - summary.overdue * 2),
  };
}
