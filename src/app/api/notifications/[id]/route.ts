import { NextRequest, NextResponse } from 'next/server';
import { notificationsService } from '@/modules/notifications/services/notifications-service';
import type { NotificationsId } from '@/modules/notifications/types/notifications';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await notificationsService.getById(ctx.params.id as NotificationsId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await notificationsService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await notificationsService.remove(ctx.params.id as NotificationsId);
  return NextResponse.json({ ok });
}
