import { AdminListPanel } from '@/modules/admin/components/admin-list';

export const metadata = { title: 'Admin | CareNest' };

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest Admin</h1>
        <p className="mt-2 text-nest-700">Manage admin across your senior care facilities.</p>
      </div>
      <AdminListPanel />
    </main>
  );
}
