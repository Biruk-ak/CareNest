import { NextResponse } from 'next/server';
import { housingService } from '@/modules/housing/services/housing-service';

export async function GET() {
  const summary = await housingService.summary();
  return NextResponse.json(summary);
}
