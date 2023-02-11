import { NextRequest, NextResponse } from 'next/server';
import { paymentsService } from '@/modules/payments/services/payments-service';
import type { PaymentsStatus, PaymentsPriority } from '@/modules/payments/types/payments';

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const status = sp.get('status');
  const priority = sp.get('priority');
  const page = await paymentsService.list({
    query: sp.get('query') ?? undefined,
    residentId: sp.get('residentId') ?? undefined,
    caregiverId: sp.get('caregiverId') ?? undefined,
    page: Number(sp.get('page') ?? '1') || 1,
    pageSize: Number(sp.get('pageSize') ?? '25') || 25,
    status: status ? (status.split(',') as PaymentsStatus[]) : undefined,
    priority: priority ? (priority.split(',') as PaymentsPriority[]) : undefined,
  });
  return NextResponse.json(page);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const created = await paymentsService.create(body, 'api-user', body.facilityId ?? 'facility-1');
    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Invalid payload' }, { status: 400 });
  }
}
