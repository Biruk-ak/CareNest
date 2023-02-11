import { NextResponse } from 'next/server';
import { paymentsService } from '@/modules/payments/services/payments-service';

export async function GET() {
  const summary = await paymentsService.summary();
  return NextResponse.json(summary);
}
