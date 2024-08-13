import { ShiftHandoffDetailPanel } from '@/modules/shift-handoff/components/shift-handoff-detail';

type Props = { params: { id: string } };

export default function ShiftHandoffDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <ShiftHandoffDetailPanel id={params.id} />
    </main>
  );
}
