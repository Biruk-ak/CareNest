import { BillingDetailPanel } from '@/modules/billing/components/billing-detail';

type Props = { params: { id: string } };

export default function BillingDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <BillingDetailPanel id={params.id} />
    </main>
  );
}
