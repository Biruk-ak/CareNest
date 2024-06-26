import { NextRequest, NextResponse } from 'next/server';
import { vitalsService } from '@/modules/vitals/services/vitals-service';
import type { VitalsId } from '@/modules/vitals/types/vitals';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as VitalsId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeVitalsSignal${n}` as keyof typeof vitalsService;
  const fn = vitalsService[fnName] as unknown as ((id: VitalsId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await vitalsService.analyzeVitalsSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(vitalsService, id);
  return NextResponse.json(result);
}
