import { NextResponse } from 'next/server';
import { shiftHandoffService } from '@/modules/shift-handoff/services/shift-handoff-service';

export async function GET() {
  const summary = await shiftHandoffService.summary();
  return NextResponse.json(summary);
}
