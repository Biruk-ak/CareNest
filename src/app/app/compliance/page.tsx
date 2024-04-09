import { ComplianceListPanel } from '@/modules/compliance/components/compliance-list';

export const metadata = { title: 'Compliance | CareNest' };

export default function CompliancePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest Compliance</h1>
        <p className="mt-2 text-nest-700">Manage compliance across your senior care facilities.</p>
      </div>
      <ComplianceListPanel />
    </main>
  );
}
