import { NextRequest, NextResponse } from 'next/server';
import { notificationsService } from '@/modules/notifications/services/notifications-service';
import type { NotificationsId } from '@/modules/notifications/types/notifications';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as NotificationsId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeNotificationsSignal${n}` as keyof typeof notificationsService;
  const fn = notificationsService[fnName] as unknown as ((id: NotificationsId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await notificationsService.analyzeNotificationsSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(notificationsService, id);
  return NextResponse.json(result);
}
