import { NextRequest, NextResponse } from 'next/server';
import { labResultsService } from '@/modules/lab-results/services/lab-results-service';
import type { LabResultsId } from '@/modules/lab-results/types/lab-results';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as LabResultsId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeLabResultsSignal${n}` as keyof typeof labResultsService;
  const fn = labResultsService[fnName] as unknown as ((id: LabResultsId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await labResultsService.analyzeLabResultsSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(labResultsService, id);
  return NextResponse.json(result);
}
