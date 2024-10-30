import { NextResponse } from 'next/server';
import { labResultsService } from '@/modules/lab-results/services/lab-results-service';

export async function GET() {
  const summary = await labResultsService.summary();
  return NextResponse.json(summary);
}
