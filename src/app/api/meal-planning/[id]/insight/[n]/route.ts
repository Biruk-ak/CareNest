import { NextRequest, NextResponse } from 'next/server';
import { mealPlanningService } from '@/modules/meal-planning/services/meal-planning-service';
import type { MealPlanningId } from '@/modules/meal-planning/types/meal-planning';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as MealPlanningId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeMealPlanningSignal${n}` as keyof typeof mealPlanningService;
  const fn = mealPlanningService[fnName] as unknown as ((id: MealPlanningId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await mealPlanningService.analyzeMealPlanningSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(mealPlanningService, id);
  return NextResponse.json(result);
}
