import { CaregiversDetailPanel } from '@/modules/caregivers/components/caregivers-detail';

type Props = { params: { id: string } };

export default function CaregiversDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <CaregiversDetailPanel id={params.id} />
    </main>
  );
}
