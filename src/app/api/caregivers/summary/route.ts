import { NextResponse } from 'next/server';
import { caregiversService } from '@/modules/caregivers/services/caregivers-service';

export async function GET() {
  const summary = await caregiversService.summary();
  return NextResponse.json(summary);
}
