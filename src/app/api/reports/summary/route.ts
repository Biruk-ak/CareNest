import { NextResponse } from 'next/server';
import { reportsService } from '@/modules/reports/services/reports-service';

export async function GET() {
  const summary = await reportsService.summary();
  return NextResponse.json(summary);
}
