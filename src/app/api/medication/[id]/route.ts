import { NextRequest, NextResponse } from 'next/server';
import { medicationService } from '@/modules/medication/services/medication-service';
import type { MedicationId } from '@/modules/medication/types/medication';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await medicationService.getById(ctx.params.id as MedicationId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await medicationService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await medicationService.remove(ctx.params.id as MedicationId);
  return NextResponse.json({ ok });
}
