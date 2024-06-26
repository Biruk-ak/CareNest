import { NextResponse } from 'next/server';
import { vitalsService } from '@/modules/vitals/services/vitals-service';

export async function GET() {
  const summary = await vitalsService.summary();
  return NextResponse.json(summary);
}
