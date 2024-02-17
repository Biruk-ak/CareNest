import { NextRequest, NextResponse } from 'next/server';
import { billingService } from '@/modules/billing/services/billing-service';
import type { BillingId } from '@/modules/billing/types/billing';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await billingService.getById(ctx.params.id as BillingId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await billingService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await billingService.remove(ctx.params.id as BillingId);
  return NextResponse.json({ ok });
}
