import { NextRequest, NextResponse } from 'next/server';
import { transportService } from '@/modules/transport/services/transport-service';
import type { TransportId } from '@/modules/transport/types/transport';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await transportService.getById(ctx.params.id as TransportId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await transportService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await transportService.remove(ctx.params.id as TransportId);
  return NextResponse.json({ ok });
}
