import Link from 'next/link';
import { AdminListPanel } from '@/modules/admin/components/admin-list';

export const metadata = { title: 'Admin' };

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-4xl text-nest-950">CareNest Admin</h1>
          <p className="mt-2 text-nest-700">Facility controls, access, and operational governance.</p>
        </div>
        <Link href="/app/dashboard" className="cn-btn-ghost">
          Back to dashboard
        </Link>
      </div>
      <AdminListPanel />
    </main>
  );
}
