import { MedicationDetailPanel } from '@/modules/medication/components/medication-detail';

type Props = { params: { id: string } };

export default function MedicationDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <MedicationDetailPanel id={params.id} />
    </main>
  );
}
