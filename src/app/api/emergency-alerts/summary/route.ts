import { NextResponse } from 'next/server';
import { emergencyAlertsService } from '@/modules/emergency-alerts/services/emergency-alerts-service';

export async function GET() {
  const summary = await emergencyAlertsService.summary();
  return NextResponse.json(summary);
}
