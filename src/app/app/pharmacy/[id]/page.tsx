import { PharmacyDetailPanel } from '@/modules/pharmacy/components/pharmacy-detail';

type Props = { params: { id: string } };

export default function PharmacyDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <PharmacyDetailPanel id={params.id} />
    </main>
  );
}
