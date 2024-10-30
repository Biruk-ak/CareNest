import { LabResultsListPanel } from '@/modules/lab-results/components/lab-results-list';

export const metadata = { title: 'LabResults | CareNest' };

export default function LabResultsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest LabResults</h1>
        <p className="mt-2 text-nest-700">Manage lab results across your senior care facilities.</p>
      </div>
      <LabResultsListPanel />
    </main>
  );
}
