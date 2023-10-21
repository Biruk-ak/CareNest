import { NextRequest, NextResponse } from 'next/server';
import { residentsService } from '@/modules/residents/services/residents-service';
import type { ResidentsId } from '@/modules/residents/types/residents';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await residentsService.getById(ctx.params.id as ResidentsId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await residentsService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await residentsService.remove(ctx.params.id as ResidentsId);
  return NextResponse.json({ ok });
}
