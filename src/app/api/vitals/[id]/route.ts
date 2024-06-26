import { NextRequest, NextResponse } from 'next/server';
import { vitalsService } from '@/modules/vitals/services/vitals-service';
import type { VitalsId } from '@/modules/vitals/types/vitals';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await vitalsService.getById(ctx.params.id as VitalsId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await vitalsService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await vitalsService.remove(ctx.params.id as VitalsId);
  return NextResponse.json({ ok });
}
