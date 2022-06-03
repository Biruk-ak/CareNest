import { NextRequest, NextResponse } from 'next/server';
import { healthLogsService } from '@/modules/health-logs/services/health-logs-service';
import type { HealthLogsId } from '@/modules/health-logs/types/health-logs';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await healthLogsService.getById(ctx.params.id as HealthLogsId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await healthLogsService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await healthLogsService.remove(ctx.params.id as HealthLogsId);
  return NextResponse.json({ ok });
}
