import { NextResponse } from 'next/server';
import { familyPortalService } from '@/modules/family-portal/services/family-portal-service';

export async function GET() {
  const summary = await familyPortalService.summary();
  return NextResponse.json(summary);
}
