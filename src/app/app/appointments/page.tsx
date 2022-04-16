import { AppointmentsListPanel } from '@/modules/appointments/components/appointments-list';

export const metadata = { title: 'Appointments | CareNest' };

export default function AppointmentsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div>
        <h1 className="font-display text-4xl text-nest-950">CareNest Appointments</h1>
        <p className="mt-2 text-nest-700">Manage appointments across your senior care facilities.</p>
      </div>
      <AppointmentsListPanel />
    </main>
  );
}
