import { NextRequest, NextResponse } from 'next/server';
import { residentsService } from '@/modules/residents/services/residents-service';
import type { ResidentsId } from '@/modules/residents/types/residents';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as ResidentsId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeResidentsSignal${n}` as keyof typeof residentsService;
  const fn = residentsService[fnName] as unknown as ((id: ResidentsId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await residentsService.analyzeResidentsSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(residentsService, id);
  return NextResponse.json(result);
}
