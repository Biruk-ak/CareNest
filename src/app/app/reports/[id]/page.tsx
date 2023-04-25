import { ReportsDetailPanel } from '@/modules/reports/components/reports-detail';

type Props = { params: { id: string } };

export default function ReportsDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <ReportsDetailPanel id={params.id} />
    </main>
  );
}
