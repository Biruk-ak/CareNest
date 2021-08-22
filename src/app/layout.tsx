import type { Metadata } from 'next';
import { AppNav } from '@/components/shell/AppNav';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'CareNest — Senior Care Management',
    template: '%s | CareNest',
  },
  description: 'Senior Care Management Platform for facilities, caregivers, and families.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Source+Sans+3:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <AppNav />
        {children}
      </body>
    </html>
  );
}
