import { NextRequest, NextResponse } from 'next/server';
import { shiftHandoffService } from '@/modules/shift-handoff/services/shift-handoff-service';
import type { ShiftHandoffId } from '@/modules/shift-handoff/types/shift-handoff';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await shiftHandoffService.getById(ctx.params.id as ShiftHandoffId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await shiftHandoffService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await shiftHandoffService.remove(ctx.params.id as ShiftHandoffId);
  return NextResponse.json({ ok });
}
