import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { AppProviders } from '@/components/providers/AppProviders';
import { APP_TITLE } from '@/lib/config/constants';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: APP_TITLE,
  description: 'Opencell customer management portal built with Next.js + MUI',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
