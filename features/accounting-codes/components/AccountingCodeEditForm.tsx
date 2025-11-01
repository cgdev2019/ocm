'use client';

import { Alert, CircularProgress, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { AccountingCodeForm } from '@/features/accounting-codes/components/AccountingCodeForm';
import { useAccountingCode } from '@/features/accounting-codes/api';
import { useRouter } from '@/lib/i18n/navigation';

export const AccountingCodeEditForm = ({ code }: { code: string }) => {
  const { data, isLoading, isError } = useAccountingCode(code);
  const t = useTranslations();
  const router = useRouter();

  if (isLoading) {
    return (
      <Stack spacing={2} alignItems="center" py={6}>
        <CircularProgress size={32} />
        <Typography variant="body2" color="text.secondary">
          {t('table.loading')}
        </Typography>
      </Stack>
    );
  }

  if (isError || !data) {
    return <Alert severity="error">{t('forms.error')}</Alert>;
  }

  return (
    <AccountingCodeForm
      defaultValues={data}
      mode="edit"
      onSuccess={(values) => router.replace(`../${values.code}`)}
    />
  );
};
