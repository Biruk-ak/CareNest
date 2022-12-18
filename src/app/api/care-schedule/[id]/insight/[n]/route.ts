import { NextRequest, NextResponse } from 'next/server';
import { careScheduleService } from '@/modules/care-schedule/services/care-schedule-service';
import type { CareScheduleId } from '@/modules/care-schedule/types/care-schedule';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as CareScheduleId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeCareScheduleSignal${n}` as keyof typeof careScheduleService;
  const fn = careScheduleService[fnName] as unknown as ((id: CareScheduleId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await careScheduleService.analyzeCareScheduleSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(careScheduleService, id);
  return NextResponse.json(result);
}
