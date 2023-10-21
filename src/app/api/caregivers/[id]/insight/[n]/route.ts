import { NextRequest, NextResponse } from 'next/server';
import { caregiversService } from '@/modules/caregivers/services/caregivers-service';
import type { CaregiversId } from '@/modules/caregivers/types/caregivers';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as CaregiversId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeCaregiversSignal${n}` as keyof typeof caregiversService;
  const fn = caregiversService[fnName] as unknown as ((id: CaregiversId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await caregiversService.analyzeCaregiversSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(caregiversService, id);
  return NextResponse.json(result);
}
