'use client';

import { Alert, CircularProgress, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { AccountingPeriodForm } from '@/features/accounting-periods/components/AccountingPeriodForm';
import { useAccountingPeriod } from '@/features/accounting-periods/api';
import { useRouter } from '@/lib/i18n/navigation';

export const AccountingPeriodEditForm = ({ fiscalYear }: { fiscalYear: string }) => {
  const { data, isLoading, isError } = useAccountingPeriod(fiscalYear);
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
    <AccountingPeriodForm
      defaultValues={data}
      mode="edit"
      onSuccess={(values) => router.replace(`../${values.fiscalYear}`)}
    />
  );
};
