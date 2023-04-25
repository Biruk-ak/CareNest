import { NextRequest, NextResponse } from 'next/server';
import { reportsService } from '@/modules/reports/services/reports-service';
import type { ReportsId } from '@/modules/reports/types/reports';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as ReportsId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeReportsSignal${n}` as keyof typeof reportsService;
  const fn = reportsService[fnName] as unknown as ((id: ReportsId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await reportsService.analyzeReportsSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(reportsService, id);
  return NextResponse.json(result);
}
