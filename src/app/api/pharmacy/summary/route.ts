import { NextResponse } from 'next/server';
import { pharmacyService } from '@/modules/pharmacy/services/pharmacy-service';

export async function GET() {
  const summary = await pharmacyService.summary();
  return NextResponse.json(summary);
}
