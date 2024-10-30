import { PharmacyListPanel } from '@/modules/pharmacy/components/pharmacy-list';

export const metadata = { title: 'Pharmacy | CareNest' };

export default function PharmacyPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest Pharmacy</h1>
        <p className="mt-2 text-nest-700">Manage pharmacy across your senior care facilities.</p>
      </div>
      <PharmacyListPanel />
    </main>
  );
}
