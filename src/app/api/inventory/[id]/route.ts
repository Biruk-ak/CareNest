import { NextRequest, NextResponse } from 'next/server';
import { inventoryService } from '@/modules/inventory/services/inventory-service';
import type { InventoryId } from '@/modules/inventory/types/inventory';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await inventoryService.getById(ctx.params.id as InventoryId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await inventoryService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await inventoryService.remove(ctx.params.id as InventoryId);
  return NextResponse.json({ ok });
}
