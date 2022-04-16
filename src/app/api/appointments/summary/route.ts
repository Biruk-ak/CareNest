import { NextResponse } from 'next/server';
import { appointmentsService } from '@/modules/appointments/services/appointments-service';

export async function GET() {
  const summary = await appointmentsService.summary();
  return NextResponse.json(summary);
}
