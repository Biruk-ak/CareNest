import { CaregiversListPanel } from '@/modules/caregivers/components/caregivers-list';

export const metadata = { title: 'Caregivers | CareNest' };

export default function CaregiversPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest Caregivers</h1>
        <p className="mt-2 text-nest-700">Manage caregivers across your senior care facilities.</p>
      </div>
      <CaregiversListPanel />
    </main>
  );
}
