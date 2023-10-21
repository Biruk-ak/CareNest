import { ResidentsDetailPanel } from '@/modules/residents/components/residents-detail';

type Props = { params: { id: string } };

export default function ResidentsDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <ResidentsDetailPanel id={params.id} />
    </main>
  );
}
