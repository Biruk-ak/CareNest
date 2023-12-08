import { NotificationsDetailPanel } from '@/modules/notifications/components/notifications-detail';

type Props = { params: { id: string } };

export default function NotificationsDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <NotificationsDetailPanel id={params.id} />
    </main>
  );
}
