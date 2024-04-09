import { ComplianceDetailPanel } from '@/modules/compliance/components/compliance-detail';

type Props = { params: { id: string } };

export default function ComplianceDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <ComplianceDetailPanel id={params.id} />
    </main>
  );
}
