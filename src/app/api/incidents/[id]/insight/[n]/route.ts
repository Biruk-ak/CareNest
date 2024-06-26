import { NextRequest, NextResponse } from 'next/server';
import { incidentsService } from '@/modules/incidents/services/incidents-service';
import type { IncidentsId } from '@/modules/incidents/types/incidents';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as IncidentsId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeIncidentsSignal${n}` as keyof typeof incidentsService;
  const fn = incidentsService[fnName] as unknown as ((id: IncidentsId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await incidentsService.analyzeIncidentsSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(incidentsService, id);
  return NextResponse.json(result);
}
