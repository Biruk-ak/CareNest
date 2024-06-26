import { VitalsDetailPanel } from '@/modules/vitals/components/vitals-detail';

type Props = { params: { id: string } };

export default function VitalsDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <VitalsDetailPanel id={params.id} />
    </main>
  );
}
