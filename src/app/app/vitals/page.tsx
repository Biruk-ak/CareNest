import { VitalsListPanel } from '@/modules/vitals/components/vitals-list';

export const metadata = { title: 'Vitals | CareNest' };

export default function VitalsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest Vitals</h1>
        <p className="mt-2 text-nest-700">Manage vitals across your senior care facilities.</p>
      </div>
      <VitalsListPanel />
    </main>
  );
}
