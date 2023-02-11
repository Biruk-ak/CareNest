import { NextRequest, NextResponse } from 'next/server';
import { paymentsService } from '@/modules/payments/services/payments-service';
import type { PaymentsId } from '@/modules/payments/types/payments';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await paymentsService.getById(ctx.params.id as PaymentsId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await paymentsService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await paymentsService.remove(ctx.params.id as PaymentsId);
  return NextResponse.json({ ok });
}
