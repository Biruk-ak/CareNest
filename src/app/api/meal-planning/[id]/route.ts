import { NextRequest, NextResponse } from 'next/server';
import { mealPlanningService } from '@/modules/meal-planning/services/meal-planning-service';
import type { MealPlanningId } from '@/modules/meal-planning/types/meal-planning';

type Ctx = { params: { id: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const record = await mealPlanningService.getById(ctx.params.id as MealPlanningId);
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  try {
    const body = await req.json();
    const updated = await mealPlanningService.update({ ...body, id: ctx.params.id }, 'api-user');
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const ok = await mealPlanningService.remove(ctx.params.id as MealPlanningId);
  return NextResponse.json({ ok });
}
