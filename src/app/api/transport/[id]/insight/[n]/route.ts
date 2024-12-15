import { NextRequest, NextResponse } from 'next/server';
import { transportService } from '@/modules/transport/services/transport-service';
import type { TransportId } from '@/modules/transport/types/transport';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as TransportId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeTransportSignal${n}` as keyof typeof transportService;
  const fn = transportService[fnName] as unknown as ((id: TransportId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await transportService.analyzeTransportSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(transportService, id);
  return NextResponse.json(result);
}
