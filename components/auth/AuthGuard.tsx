'use client';

import { Alert, Box, Button, CircularProgress, Stack, Typography } from '@mui/material';
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
      <Stack spacing={3} textAlign="center" alignItems="center" sx={{ py: 10 }}>
        <Typography variant="h6">{t('sessionExpired')}</Typography>
        <Typography variant="body2" color="text.secondary">
          {t('sessionExpiredDescription')}
        </Typography>
        <Button variant="contained" color="primary" onClick={login}>
          {t('signIn')}
        </Button>
      </Stack>
    );
  }

  if (status === 'error') {
    return (
      <Box sx={{ py: 10 }}>
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Alert severity="error" sx={{ width: '100%', maxWidth: 420 }}>
            {t('error')}
          </Alert>
          <Button variant="contained" color="primary" onClick={login}>
            {t('retry')}
          </Button>
        </Stack>
      </Box>
    );
  }

  return <>{children}</>;
};
