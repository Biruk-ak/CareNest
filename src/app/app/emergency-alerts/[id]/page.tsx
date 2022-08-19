import { EmergencyAlertsDetailPanel } from '@/modules/emergency-alerts/components/emergency-alerts-detail';

type Props = { params: { id: string } };

export default function EmergencyAlertsDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <EmergencyAlertsDetailPanel id={params.id} />
    </main>
  );
}
