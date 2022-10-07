import { MealPlanningListPanel } from '@/modules/meal-planning/components/meal-planning-list';

export const metadata = { title: 'MealPlanning | CareNest' };

export default function MealPlanningPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest MealPlanning</h1>
        <p className="mt-2 text-nest-700">Manage meal planning across your senior care facilities.</p>
      </div>
      <MealPlanningListPanel />
    </main>
  );
}
