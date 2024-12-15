import { NextResponse } from 'next/server';
import { therapyService } from '@/modules/therapy/services/therapy-service';

export async function GET() {
  const summary = await therapyService.summary();
  return NextResponse.json(summary);
}
