import { NextRequest, NextResponse } from 'next/server';
import { caregiversService } from '@/modules/caregivers/services/caregivers-service';
import type { CaregiversId } from '@/modules/caregivers/types/caregivers';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await caregiversService.getById(ctx.params.id as CaregiversId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await caregiversService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await caregiversService.remove(ctx.params.id as CaregiversId);
  return NextResponse.json({ ok });
}
