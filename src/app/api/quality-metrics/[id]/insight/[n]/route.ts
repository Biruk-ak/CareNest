import { NextRequest, NextResponse } from 'next/server';
import { qualityMetricsService } from '@/modules/quality-metrics/services/quality-metrics-service';
import type { QualityMetricsId } from '@/modules/quality-metrics/types/quality-metrics';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as QualityMetricsId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeQualityMetricsSignal${n}` as keyof typeof qualityMetricsService;
  const fn = qualityMetricsService[fnName] as unknown as ((id: QualityMetricsId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await qualityMetricsService.analyzeQualityMetricsSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(qualityMetricsService, id);
  return NextResponse.json(result);
}
