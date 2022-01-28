import { MedicationListPanel } from '@/modules/medication/components/medication-list';

export const metadata = { title: 'Medication | CareNest' };

export default function MedicationPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest Medication</h1>
        <p className="mt-2 text-nest-700">Manage medication across your senior care facilities.</p>
      </div>
      <MedicationListPanel />
    </main>
  );
}
