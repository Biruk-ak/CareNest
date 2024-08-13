import { NextRequest, NextResponse } from 'next/server';
import { shiftHandoffService } from '@/modules/shift-handoff/services/shift-handoff-service';
import type { ShiftHandoffId } from '@/modules/shift-handoff/types/shift-handoff';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as ShiftHandoffId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeShiftHandoffSignal${n}` as keyof typeof shiftHandoffService;
  const fn = shiftHandoffService[fnName] as unknown as ((id: ShiftHandoffId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await shiftHandoffService.analyzeShiftHandoffSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(shiftHandoffService, id);
  return NextResponse.json(result);
}
