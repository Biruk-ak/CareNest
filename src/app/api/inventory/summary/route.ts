import { NextResponse } from 'next/server';
import { inventoryService } from '@/modules/inventory/services/inventory-service';

export async function GET() {
  const summary = await inventoryService.summary();
  return NextResponse.json(summary);
}
