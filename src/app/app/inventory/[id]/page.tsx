import { InventoryDetailPanel } from '@/modules/inventory/components/inventory-detail';

type Props = { params: { id: string } };

export default function InventoryDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <InventoryDetailPanel id={params.id} />
    </main>
  );
}
