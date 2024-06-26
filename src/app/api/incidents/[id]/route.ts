import { NextRequest, NextResponse } from 'next/server';
import { incidentsService } from '@/modules/incidents/services/incidents-service';
import type { IncidentsId } from '@/modules/incidents/types/incidents';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await incidentsService.getById(ctx.params.id as IncidentsId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await incidentsService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await incidentsService.remove(ctx.params.id as IncidentsId);
  return NextResponse.json({ ok });
}
