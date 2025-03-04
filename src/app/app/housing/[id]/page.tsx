import { HousingDetailPanel } from '@/modules/housing/components/housing-detail';

type Props = { params: { id: string } };

export default function HousingDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <HousingDetailPanel id={params.id} />
    </main>
  );
}
