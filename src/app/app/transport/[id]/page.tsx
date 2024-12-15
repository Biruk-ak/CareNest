import { TransportDetailPanel } from '@/modules/transport/components/transport-detail';

type Props = { params: { id: string } };

export default function TransportDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <TransportDetailPanel id={params.id} />
    </main>
  );
}
