import { IncidentsDetailPanel } from '@/modules/incidents/components/incidents-detail';

type Props = { params: { id: string } };

export default function IncidentsDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <IncidentsDetailPanel id={params.id} />
    </main>
  );
}
