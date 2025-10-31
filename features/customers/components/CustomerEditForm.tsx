'use client';

import { Alert, CircularProgress, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { CustomerForm } from '@/features/customers/components/CustomerForm';
import { useCustomer } from '@/features/customers/api';
import { useRouter } from '@/lib/i18n/navigation';

export const CustomerEditForm = ({ code }: { code: string }) => {
  const { data, isLoading, isError } = useCustomer(code);
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
    <CustomerForm
      defaultValues={data}
      onSuccess={(values) => router.replace(`../${values.code}`)}
    />
  );
};
