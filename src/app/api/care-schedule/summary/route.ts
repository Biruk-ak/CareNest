import { NextResponse } from 'next/server';
import { careScheduleService } from '@/modules/care-schedule/services/care-schedule-service';

export async function GET() {
  const summary = await careScheduleService.summary();
  return NextResponse.json(summary);
}
