import { InventoryListPanel } from '@/modules/inventory/components/inventory-list';

export const metadata = { title: 'Inventory | CareNest' };

export default function InventoryPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest Inventory</h1>
        <p className="mt-2 text-nest-700">Manage inventory across your senior care facilities.</p>
      </div>
      <InventoryListPanel />
    </main>
  );
}
