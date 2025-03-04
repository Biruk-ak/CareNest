import { QualityMetricsListPanel } from '@/modules/quality-metrics/components/quality-metrics-list';

export const metadata = { title: 'QualityMetrics | CareNest' };

export default function QualityMetricsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest QualityMetrics</h1>
        <p className="mt-2 text-nest-700">Manage quality metrics across your senior care facilities.</p>
      </div>
      <QualityMetricsListPanel />
    </main>
  );
}
