import { FamilyPortalListPanel } from '@/modules/family-portal/components/family-portal-list';

export const metadata = { title: 'FamilyPortal | CareNest' };

export default function FamilyPortalPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest FamilyPortal</h1>
        <p className="mt-2 text-nest-700">Manage family portal across your senior care facilities.</p>
      </div>
      <FamilyPortalListPanel />
    </main>
  );
}
