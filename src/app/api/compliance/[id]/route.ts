import { NextRequest, NextResponse } from 'next/server';
import { complianceService } from '@/modules/compliance/services/compliance-service';
import type { ComplianceId } from '@/modules/compliance/types/compliance';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await complianceService.getById(ctx.params.id as ComplianceId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await complianceService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await complianceService.remove(ctx.params.id as ComplianceId);
  return NextResponse.json({ ok });
}
