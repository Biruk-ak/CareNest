import { NextRequest, NextResponse } from 'next/server';
import { pharmacyService } from '@/modules/pharmacy/services/pharmacy-service';
import type { PharmacyId } from '@/modules/pharmacy/types/pharmacy';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await pharmacyService.getById(ctx.params.id as PharmacyId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await pharmacyService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await pharmacyService.remove(ctx.params.id as PharmacyId);
  return NextResponse.json({ ok });
}
