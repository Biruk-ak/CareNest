import { NextRequest, NextResponse } from 'next/server';
import { therapyService } from '@/modules/therapy/services/therapy-service';
import type { TherapyId } from '@/modules/therapy/types/therapy';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as TherapyId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeTherapySignal${n}` as keyof typeof therapyService;
  const fn = therapyService[fnName] as unknown as ((id: TherapyId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await therapyService.analyzeTherapySignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(therapyService, id);
  return NextResponse.json(result);
}
