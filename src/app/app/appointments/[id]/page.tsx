import { AppointmentsDetailPanel } from '@/modules/appointments/components/appointments-detail';

type Props = { params: { id: string } };

export default function AppointmentsDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <AppointmentsDetailPanel id={params.id} />
    </main>
  );
}
