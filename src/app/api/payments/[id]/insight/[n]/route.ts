import { NextRequest, NextResponse } from 'next/server';
import { paymentsService } from '@/modules/payments/services/payments-service';
import type { PaymentsId } from '@/modules/payments/types/payments';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as PaymentsId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzePaymentsSignal${n}` as keyof typeof paymentsService;
  const fn = paymentsService[fnName] as unknown as ((id: PaymentsId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await paymentsService.analyzePaymentsSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(paymentsService, id);
  return NextResponse.json(result);
}
