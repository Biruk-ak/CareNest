import { TherapyDetailPanel } from '@/modules/therapy/components/therapy-detail';

type Props = { params: { id: string } };

export default function TherapyDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <TherapyDetailPanel id={params.id} />
    </main>
  );
}
