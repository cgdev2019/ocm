'use client';

import { PropsWithChildren } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/lib/api/query-client';

export const QueryProvider = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>
    {children}
    {process.env.NODE_ENV === 'development' ? <ReactQueryDevtools initialIsOpen={false} /> : null}
  </QueryClientProvider>
);
