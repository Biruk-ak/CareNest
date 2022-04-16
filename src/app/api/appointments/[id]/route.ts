import { NextRequest, NextResponse } from 'next/server';
import { appointmentsService } from '@/modules/appointments/services/appointments-service';
import type { AppointmentsId } from '@/modules/appointments/types/appointments';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await appointmentsService.getById(ctx.params.id as AppointmentsId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await appointmentsService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await appointmentsService.remove(ctx.params.id as AppointmentsId);
  return NextResponse.json({ ok });
}
