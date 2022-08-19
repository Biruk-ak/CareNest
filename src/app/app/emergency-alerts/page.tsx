import { EmergencyAlertsListPanel } from '@/modules/emergency-alerts/components/emergency-alerts-list';

export const metadata = { title: 'EmergencyAlerts | CareNest' };

export default function EmergencyAlertsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest EmergencyAlerts</h1>
        <p className="mt-2 text-nest-700">Manage emergency alerts across your senior care facilities.</p>
      </div>
      <EmergencyAlertsListPanel />
    </main>
  );
}
