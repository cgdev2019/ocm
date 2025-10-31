'use client';

import { Alert, CircularProgress, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { TaxForm } from '@/features/taxes/components/TaxForm';
import { useTax } from '@/features/taxes/api';
import { useRouter } from '@/lib/i18n/navigation';

export const TaxEditForm = ({ code }: { code: string }) => {
  const { data, isLoading, isError } = useTax(code);
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
    <TaxForm
      defaultValues={{
        code: data.code ?? '',
        description: data.description ?? undefined,
        percent: data.percent ?? undefined,
        accountingCode: data.accountingCode ?? undefined,
      }}
      mode="edit"
      onSuccess={(values) => router.replace(`../${values.code}`)}
    />
  );
};
