import { DashboardListPanel } from '@/modules/dashboard/components/dashboard-list';

export const metadata = { title: 'Dashboard | CareNest' };

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest Dashboard</h1>
        <p className="mt-2 text-nest-700">Manage dashboard across your senior care facilities.</p>
      </div>
      <DashboardListPanel />
    </main>
  );
}
