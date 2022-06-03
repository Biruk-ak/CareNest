import { NextRequest, NextResponse } from 'next/server';
import { healthLogsService } from '@/modules/health-logs/services/health-logs-service';
import type { HealthLogsId } from '@/modules/health-logs/types/health-logs';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as HealthLogsId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeHealthLogsSignal${n}` as keyof typeof healthLogsService;
  const fn = healthLogsService[fnName] as unknown as ((id: HealthLogsId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await healthLogsService.analyzeHealthLogsSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(healthLogsService, id);
  return NextResponse.json(result);
}
