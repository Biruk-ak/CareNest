import Link from 'next/link';

const features = [
  { href: '/app/dashboard', title: 'Healthcare Dashboard', blurb: 'Live facility pulse, alerts, and staffing.' },
  { href: '/admin', title: 'Admin', blurb: 'Users, roles, facilities, and compliance controls.' },
  { href: '/app/medication', title: 'Medication', blurb: 'Schedules, MAR, and pharmacy reconciliation.' },
  { href: '/app/appointments', title: 'Appointments', blurb: 'Clinician visits and transport windows.' },
  { href: '/app/health-logs', title: 'Health Logs', blurb: 'Vitals, observations, and trends.' },
  { href: '/app/emergency-alerts', title: 'Emergency Alerts', blurb: 'Escalation paths and on-call routing.' },
  { href: '/app/meal-planning', title: 'Meal Planning', blurb: 'Nutrition plans and dietary constraints.' },
  { href: '/app/care-schedule', title: 'Care Schedule', blurb: 'Shifts, tasks, and coverage planning.' },
  { href: '/app/payments', title: 'Payments', blurb: 'Invoices, ledgers, and family billing.' },
  { href: '/app/reports', title: 'Reports', blurb: 'Operational and clinical reporting packs.' },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-[88vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(120deg, rgba(15,34,28,0.72), rgba(61,138,110,0.35)), url(https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=2000&q=80)',
          }}
        />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28">
          <p className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-white drop-shadow">
            CareNest
          </p>
          <h1 className="mt-4 max-w-2xl text-2xl md:text-3xl font-medium text-white/95">
            Senior care operations, coordinated in one place.
          </h1>
          <p className="mt-3 max-w-xl text-base text-white/80">
            Medication, appointments, health logs, alerts, meals, schedules, payments, and reports for modern care homes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/app/dashboard" className="cn-btn bg-white text-nest-900 hover:bg-nest-50">
              Open dashboard
            </Link>
            <Link href="/admin" className="cn-btn-ghost border-white/40 bg-white/10 text-white hover:bg-white/20">
              Admin console
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-3xl text-nest-950">Applications & features</h2>
        <p className="mt-2 max-w-2xl text-nest-700">
          Built for caregivers, clinicians, and administrators who need clarity without clutter.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Link key={f.href} href={f.href} className="group block space-y-2 py-2">
              <h3 className="text-lg font-semibold text-nest-900 group-hover:text-nest-600">{f.title}</h3>
              <p className="text-sm text-nest-600">{f.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
