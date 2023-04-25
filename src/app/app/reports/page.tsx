import { ReportsListPanel } from '@/modules/reports/components/reports-list';

export const metadata = { title: 'Reports | CareNest' };

export default function ReportsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest Reports</h1>
        <p className="mt-2 text-nest-700">Manage reports across your senior care facilities.</p>
      </div>
      <ReportsListPanel />
    </main>
  );
}
