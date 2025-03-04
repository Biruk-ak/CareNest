import { HousingListPanel } from '@/modules/housing/components/housing-list';

export const metadata = { title: 'Housing | CareNest' };

export default function HousingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest Housing</h1>
        <p className="mt-2 text-nest-700">Manage housing across your senior care facilities.</p>
      </div>
      <HousingListPanel />
    </main>
  );
}
