import { NextRequest, NextResponse } from 'next/server';
import { reportsService } from '@/modules/reports/services/reports-service';
import type { ReportsId } from '@/modules/reports/types/reports';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await reportsService.getById(ctx.params.id as ReportsId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await reportsService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await reportsService.remove(ctx.params.id as ReportsId);
  return NextResponse.json({ ok });
}
