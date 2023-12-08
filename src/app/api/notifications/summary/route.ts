import { NextResponse } from 'next/server';
import { notificationsService } from '@/modules/notifications/services/notifications-service';

export async function GET() {
  const summary = await notificationsService.summary();
  return NextResponse.json(summary);
}
