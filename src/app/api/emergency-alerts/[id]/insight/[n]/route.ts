import { NextRequest, NextResponse } from 'next/server';
import { emergencyAlertsService } from '@/modules/emergency-alerts/services/emergency-alerts-service';
import type { EmergencyAlertsId } from '@/modules/emergency-alerts/types/emergency-alerts';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as EmergencyAlertsId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeEmergencyAlertsSignal${n}` as keyof typeof emergencyAlertsService;
  const fn = emergencyAlertsService[fnName] as unknown as ((id: EmergencyAlertsId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await emergencyAlertsService.analyzeEmergencyAlertsSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(emergencyAlertsService, id);
  return NextResponse.json(result);
}
