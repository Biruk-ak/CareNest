import { HealthLogsDetailPanel } from '@/modules/health-logs/components/health-logs-detail';

type Props = { params: { id: string } };

export default function HealthLogsDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <HealthLogsDetailPanel id={params.id} />
    </main>
  );
}
