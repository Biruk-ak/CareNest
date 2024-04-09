import { NextResponse } from 'next/server';
import { complianceService } from '@/modules/compliance/services/compliance-service';

export async function GET() {
  const summary = await complianceService.summary();
  return NextResponse.json(summary);
}
