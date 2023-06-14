import { DashboardDetailPanel } from '@/modules/dashboard/components/dashboard-detail';

type Props = { params: { id: string } };

export default function DashboardDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <DashboardDetailPanel id={params.id} />
    </main>
  );
}
