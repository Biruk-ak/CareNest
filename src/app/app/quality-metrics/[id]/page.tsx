import { QualityMetricsDetailPanel } from '@/modules/quality-metrics/components/quality-metrics-detail';

type Props = { params: { id: string } };

export default function QualityMetricsDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <QualityMetricsDetailPanel id={params.id} />
    </main>
  );
}
