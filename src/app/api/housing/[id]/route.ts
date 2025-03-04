import { NextRequest, NextResponse } from 'next/server';
import { housingService } from '@/modules/housing/services/housing-service';
import type { HousingId } from '@/modules/housing/types/housing';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await housingService.getById(ctx.params.id as HousingId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await housingService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await housingService.remove(ctx.params.id as HousingId);
  return NextResponse.json({ ok });
}
