import { TransportListPanel } from '@/modules/transport/components/transport-list';

export const metadata = { title: 'Transport | CareNest' };

export default function TransportPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest Transport</h1>
        <p className="mt-2 text-nest-700">Manage transport across your senior care facilities.</p>
      </div>
      <TransportListPanel />
    </main>
  );
}
