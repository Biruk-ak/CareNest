import { NextResponse } from 'next/server';
import { healthLogsService } from '@/modules/health-logs/services/health-logs-service';

export async function GET() {
  const summary = await healthLogsService.summary();
  return NextResponse.json(summary);
}
