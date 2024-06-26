import { IncidentsListPanel } from '@/modules/incidents/components/incidents-list';

export const metadata = { title: 'Incidents | CareNest' };

export default function IncidentsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest Incidents</h1>
        <p className="mt-2 text-nest-700">Manage incidents across your senior care facilities.</p>
      </div>
      <IncidentsListPanel />
    </main>
  );
}
