import { ResidentsListPanel } from '@/modules/residents/components/residents-list';

export const metadata = { title: 'Residents | CareNest' };

export default function ResidentsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest Residents</h1>
        <p className="mt-2 text-nest-700">Manage residents across your senior care facilities.</p>
      </div>
      <ResidentsListPanel />
    </main>
  );
}
