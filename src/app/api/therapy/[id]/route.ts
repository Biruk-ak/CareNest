import { NextRequest, NextResponse } from 'next/server';
import { therapyService } from '@/modules/therapy/services/therapy-service';
import type { TherapyId } from '@/modules/therapy/types/therapy';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await therapyService.getById(ctx.params.id as TherapyId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await therapyService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await therapyService.remove(ctx.params.id as TherapyId);
  return NextResponse.json({ ok });
}
