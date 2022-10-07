import { NextResponse } from 'next/server';
import { mealPlanningService } from '@/modules/meal-planning/services/meal-planning-service';

export async function GET() {
  const summary = await mealPlanningService.summary();
  return NextResponse.json(summary);
}
