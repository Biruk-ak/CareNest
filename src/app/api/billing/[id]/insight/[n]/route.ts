import { NextRequest, NextResponse } from 'next/server';
import { billingService } from '@/modules/billing/services/billing-service';
import type { BillingId } from '@/modules/billing/types/billing';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as BillingId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeBillingSignal${n}` as keyof typeof billingService;
  const fn = billingService[fnName] as unknown as ((id: BillingId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await billingService.analyzeBillingSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(billingService, id);
  return NextResponse.json(result);
}
