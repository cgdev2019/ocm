'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { AuthProvider } from '@/components/providers/AuthProvider';
import { QueryProvider } from '@/components/providers/QueryProvider';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { env } from '@/lib/config/env';

export const AppProviders = ({ children }: PropsWithChildren) => {
  const [cache] = useState(() => createCache({ key: 'mui', prepend: true }));

  useEffect(() => {
    if (!env.mockApi || typeof window === 'undefined') {
      return;
    }

    let worker: { stop: () => void } | null = null;

    void import('@/mocks/browser')
      .then(({ worker: mockWorker }) => {
        worker = mockWorker;
        return mockWorker.start({ quiet: true });
      })
      .catch(() => undefined);

    return () => {
      worker?.stop();
    };
  }, []);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider>
        <QueryProvider>
          <AuthProvider>{children}</AuthProvider>
        </QueryProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};
