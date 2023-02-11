import { PaymentsListPanel } from '@/modules/payments/components/payments-list';

export const metadata = { title: 'Payments | CareNest' };

export default function PaymentsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest Payments</h1>
        <p className="mt-2 text-nest-700">Manage payments across your senior care facilities.</p>
      </div>
      <PaymentsListPanel />
    </main>
  );
}
