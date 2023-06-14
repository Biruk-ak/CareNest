import { NextResponse } from 'next/server';
import { dashboardService } from '@/modules/dashboard/services/dashboard-service';

export async function GET() {
  const summary = await dashboardService.summary();
  return NextResponse.json(summary);
}
