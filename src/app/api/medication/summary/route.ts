import { NextResponse } from 'next/server';
import { medicationService } from '@/modules/medication/services/medication-service';

export async function GET() {
  const summary = await medicationService.summary();
  return NextResponse.json(summary);
}
