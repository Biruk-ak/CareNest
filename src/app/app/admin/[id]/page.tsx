import { AdminDetailPanel } from '@/modules/admin/components/admin-detail';

type Props = { params: { id: string } };

export default function AdminDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <AdminDetailPanel id={params.id} />
    </main>
  );
}
