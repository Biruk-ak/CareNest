import { NextResponse } from 'next/server';
import { transportService } from '@/modules/transport/services/transport-service';

export async function GET() {
  const summary = await transportService.summary();
  return NextResponse.json(summary);
}
