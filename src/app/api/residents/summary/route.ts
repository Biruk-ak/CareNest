import { NextResponse } from 'next/server';
import { residentsService } from '@/modules/residents/services/residents-service';

export async function GET() {
  const summary = await residentsService.summary();
  return NextResponse.json(summary);
}
