import { NextRequest, NextResponse } from 'next/server';
import { emergencyAlertsService } from '@/modules/emergency-alerts/services/emergency-alerts-service';
import type { EmergencyAlertsId } from '@/modules/emergency-alerts/types/emergency-alerts';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await emergencyAlertsService.getById(ctx.params.id as EmergencyAlertsId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await emergencyAlertsService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await emergencyAlertsService.remove(ctx.params.id as EmergencyAlertsId);
  return NextResponse.json({ ok });
}
