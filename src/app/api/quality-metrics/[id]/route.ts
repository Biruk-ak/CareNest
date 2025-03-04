import { NextRequest, NextResponse } from 'next/server';
import { qualityMetricsService } from '@/modules/quality-metrics/services/quality-metrics-service';
import type { QualityMetricsId } from '@/modules/quality-metrics/types/quality-metrics';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await qualityMetricsService.getById(ctx.params.id as QualityMetricsId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await qualityMetricsService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await qualityMetricsService.remove(ctx.params.id as QualityMetricsId);
  return NextResponse.json({ ok });
}
