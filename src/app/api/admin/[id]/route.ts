import { NextRequest, NextResponse } from 'next/server';
import { adminService } from '@/modules/admin/services/admin-service';
import type { AdminId } from '@/modules/admin/types/admin';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await adminService.getById(ctx.params.id as AdminId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await adminService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await adminService.remove(ctx.params.id as AdminId);
  return NextResponse.json({ ok });
}
