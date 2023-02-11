import { PaymentsDetailPanel } from '@/modules/payments/components/payments-detail';

type Props = { params: { id: string } };

export default function PaymentsDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <PaymentsDetailPanel id={params.id} />
    </main>
  );
}
