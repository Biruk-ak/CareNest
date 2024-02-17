import { NextResponse } from 'next/server';
import { billingService } from '@/modules/billing/services/billing-service';

export async function GET() {
  const summary = await billingService.summary();
  return NextResponse.json(summary);
}
