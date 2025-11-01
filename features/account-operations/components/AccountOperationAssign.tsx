'use client';

import { Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { AssignAccountOperationForm } from '@/features/account-operations/components/AssignAccountOperationForm';

export const AccountOperationAssign = () => {
  const t = useTranslations();

  return (
    <Stack spacing={3}>
      <Typography variant="h4">{t('navigation.accountOperations')}</Typography>
      <AssignAccountOperationForm />
    </Stack>
  );
};
