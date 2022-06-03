import { HealthLogsListPanel } from '@/modules/health-logs/components/health-logs-list';

export const metadata = { title: 'HealthLogs | CareNest' };

export default function HealthLogsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest HealthLogs</h1>
        <p className="mt-2 text-nest-700">Manage health logs across your senior care facilities.</p>
      </div>
      <HealthLogsListPanel />
    </main>
  );
}
