import { NextRequest, NextResponse } from 'next/server';
import { appointmentsService } from '@/modules/appointments/services/appointments-service';
import type { AppointmentsId } from '@/modules/appointments/types/appointments';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as AppointmentsId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeAppointmentsSignal${n}` as keyof typeof appointmentsService;
  const fn = appointmentsService[fnName] as unknown as ((id: AppointmentsId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await appointmentsService.analyzeAppointmentsSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(appointmentsService, id);
  return NextResponse.json(result);
}
