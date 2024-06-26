import { NextResponse } from 'next/server';
import { incidentsService } from '@/modules/incidents/services/incidents-service';

export async function GET() {
  const summary = await incidentsService.summary();
  return NextResponse.json(summary);
}
