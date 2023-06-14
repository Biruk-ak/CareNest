import { NextRequest, NextResponse } from 'next/server';
import { dashboardService } from '@/modules/dashboard/services/dashboard-service';
import type { DashboardId } from '@/modules/dashboard/types/dashboard';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await dashboardService.getById(ctx.params.id as DashboardId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await dashboardService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await dashboardService.remove(ctx.params.id as DashboardId);
  return NextResponse.json({ ok });
}
