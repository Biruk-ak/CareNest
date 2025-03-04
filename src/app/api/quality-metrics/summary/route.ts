import { NextResponse } from 'next/server';
import { qualityMetricsService } from '@/modules/quality-metrics/services/quality-metrics-service';

export async function GET() {
  const summary = await qualityMetricsService.summary();
  return NextResponse.json(summary);
}
