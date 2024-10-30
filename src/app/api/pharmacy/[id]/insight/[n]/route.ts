import { NextRequest, NextResponse } from 'next/server';
import { pharmacyService } from '@/modules/pharmacy/services/pharmacy-service';
import type { PharmacyId } from '@/modules/pharmacy/types/pharmacy';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as PharmacyId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzePharmacySignal${n}` as keyof typeof pharmacyService;
  const fn = pharmacyService[fnName] as unknown as ((id: PharmacyId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await pharmacyService.analyzePharmacySignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(pharmacyService, id);
  return NextResponse.json(result);
}
