import { CareScheduleDetailPanel } from '@/modules/care-schedule/components/care-schedule-detail';

type Props = { params: { id: string } };

export default function CareScheduleDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <CareScheduleDetailPanel id={params.id} />
    </main>
  );
}
