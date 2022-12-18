import { NextRequest, NextResponse } from 'next/server';
import { careScheduleService } from '@/modules/care-schedule/services/care-schedule-service';
import type { CareScheduleId } from '@/modules/care-schedule/types/care-schedule';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await careScheduleService.getById(ctx.params.id as CareScheduleId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await careScheduleService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await careScheduleService.remove(ctx.params.id as CareScheduleId);
  return NextResponse.json({ ok });
}
