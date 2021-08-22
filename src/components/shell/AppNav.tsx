'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { href: "/app/medication", label: "Medication" },
    { href: "/app/appointments", label: "Appointments" },
    { href: "/app/health-logs", label: "HealthLogs" },
    { href: "/app/emergency-alerts", label: "EmergencyAlerts" },
    { href: "/app/meal-planning", label: "MealPlanning" },
    { href: "/app/care-schedule", label: "CareSchedule" },
    { href: "/app/payments", label: "Payments" },
    { href: "/app/reports", label: "Reports" },
    { href: "/app/dashboard", label: "Dashboard" },
    { href: "/app/admin", label: "Admin" },
    { href: "/app/residents", label: "Residents" },
    { href: "/app/caregivers", label: "Caregivers" },
    { href: "/app/notifications", label: "Notifications" },
    { href: "/app/billing", label: "Billing" },
    { href: "/app/inventory", label: "Inventory" },
    { href: "/app/compliance", label: "Compliance" },
];

export function AppNav() {
  const pathname = usePathname();
  return (
    <nav className="border-b border-nest-200/80 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-4 py-3">
        <Link href="/" className="font-display text-xl font-semibold text-nest-900">
          CareNest
        </Link>
        <div className="flex flex-1 flex-wrap gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={clsx(
                'rounded-lg px-2.5 py-1.5 text-xs font-semibold transition',
                pathname?.startsWith(l.href)
                  ? 'bg-nest-700 text-white'
                  : 'text-nest-700 hover:bg-nest-100',
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link href="/admin" className="cn-btn-ghost text-xs">
          Admin
        </Link>
      </div>
    </nav>
  );
}
