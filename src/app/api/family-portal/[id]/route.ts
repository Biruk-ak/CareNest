import { NextRequest, NextResponse } from 'next/server';
import { familyPortalService } from '@/modules/family-portal/services/family-portal-service';
import type { FamilyPortalId } from '@/modules/family-portal/types/family-portal';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await familyPortalService.getById(ctx.params.id as FamilyPortalId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await familyPortalService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await familyPortalService.remove(ctx.params.id as FamilyPortalId);
  return NextResponse.json({ ok });
}
