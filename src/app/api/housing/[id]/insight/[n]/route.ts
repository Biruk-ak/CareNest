import { NextRequest, NextResponse } from 'next/server';
import { housingService } from '@/modules/housing/services/housing-service';
import type { HousingId } from '@/modules/housing/types/housing';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as HousingId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeHousingSignal${n}` as keyof typeof housingService;
  const fn = housingService[fnName] as unknown as ((id: HousingId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await housingService.analyzeHousingSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(housingService, id);
  return NextResponse.json(result);
}
