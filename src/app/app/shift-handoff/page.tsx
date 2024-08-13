import { ShiftHandoffListPanel } from '@/modules/shift-handoff/components/shift-handoff-list';

export const metadata = { title: 'ShiftHandoff | CareNest' };

export default function ShiftHandoffPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest ShiftHandoff</h1>
        <p className="mt-2 text-nest-700">Manage shift handoff across your senior care facilities.</p>
      </div>
      <ShiftHandoffListPanel />
    </main>
  );
}
