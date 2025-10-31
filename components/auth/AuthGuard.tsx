'use client';

import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { PropsWithChildren } from 'react';
import { useAuth } from '@/lib/auth/context';

export const AuthGuard = ({ children }: PropsWithChildren) => {
  const { status, login } = useAuth();
  const t = useTranslations('auth');

  if (status === 'loading') {
    return (
      <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ minHeight: '50vh' }}>
        <CircularProgress size={32} />
        <Typography variant="body2" color="text.secondary">
          {t('loading')}
        </Typography>
      </Stack>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <Box textAlign="center" sx={{ py: 10 }}>
        <Typography variant="h6" gutterBottom>
          {t('sessionExpired')}
        </Typography>
        <Button variant="contained" color="primary" onClick={login}>
          {t('signIn')}
        </Button>
      </Box>
    );
  }

  return <>{children}</>;
};
