'use client';

import { Alert, CircularProgress, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { CustomerAccountForm } from '@/features/customer-accounts/components/CustomerAccountForm';
import { useCustomerAccount } from '@/features/customer-accounts/api';
import { useRouter } from '@/lib/i18n/navigation';

export const CustomerAccountEditForm = ({ code }: { code: string }) => {
  const { data, isLoading, isError } = useCustomerAccount(code);
  const t = useTranslations();
  const router = useRouter();

  if (isLoading) {
    return (
      <Stack spacing={2} alignItems="center" py={6}>
        <CircularProgress size={32} />
        <Typography variant="body2" color="text.secondary">
          {t('layout.searchPlaceholder')}
        </Typography>
      </Stack>
    );
  }

  if (isError || !data) {
    return <Alert severity="error">{t('forms.error')}</Alert>;
  }

  return (
    <CustomerAccountForm
      defaultValues={data}
      onSuccess={(values) => router.replace(`../${values.code}`)}
    />
  );
};
