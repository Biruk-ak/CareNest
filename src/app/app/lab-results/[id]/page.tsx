import { LabResultsDetailPanel } from '@/modules/lab-results/components/lab-results-detail';

type Props = { params: { id: string } };

export default function LabResultsDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <LabResultsDetailPanel id={params.id} />
    </main>
  );
}
