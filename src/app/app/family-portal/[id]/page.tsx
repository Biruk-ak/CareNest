import { FamilyPortalDetailPanel } from '@/modules/family-portal/components/family-portal-detail';

type Props = { params: { id: string } };

export default function FamilyPortalDetailPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <FamilyPortalDetailPanel id={params.id} />
    </main>
  );
}
