import { NextRequest, NextResponse } from 'next/server';
import { labResultsService } from '@/modules/lab-results/services/lab-results-service';
import type { LabResultsId } from '@/modules/lab-results/types/lab-results';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await labResultsService.getById(ctx.params.id as LabResultsId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await labResultsService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await labResultsService.remove(ctx.params.id as LabResultsId);
  return NextResponse.json({ ok });
}
