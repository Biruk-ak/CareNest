import { MealPlanningDetailPanel } from '@/modules/meal-planning/components/meal-planning-detail';

type Props = { params: { id: string } };

export default function MealPlanningDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <MealPlanningDetailPanel id={params.id} />
    </main>
  );
}
