import { NextResponse } from 'next/server';
import { adminService } from '@/modules/admin/services/admin-service';

export async function GET() {
  const summary = await adminService.summary();
  return NextResponse.json(summary);
}
