import { NextRequest, NextResponse } from 'next/server';
import { inventoryService } from '@/modules/inventory/services/inventory-service';
import type { InventoryId } from '@/modules/inventory/types/inventory';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as InventoryId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeInventorySignal${n}` as keyof typeof inventoryService;
  const fn = inventoryService[fnName] as unknown as ((id: InventoryId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await inventoryService.analyzeInventorySignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(inventoryService, id);
  return NextResponse.json(result);
}
