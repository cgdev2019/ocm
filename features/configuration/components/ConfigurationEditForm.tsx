'use client';

import { Alert, CircularProgress, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { ConfigurationForm } from '@/features/configuration/components/ConfigurationForm';
import { useConfigurationProperty } from '@/features/configuration/api';
import { useRouter } from '@/lib/i18n/navigation';

export const ConfigurationEditForm = ({ keyName }: { keyName: string }) => {
  const { data, isLoading, isError } = useConfigurationProperty(keyName);
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
    return <Alert severity="error">{t('forms.configuration.notFound')}</Alert>;
  }

  return (
    <ConfigurationForm
      defaultValues={{ key: data.key, value: data.value }}
      mode="edit"
      onSuccess={(values) => router.replace(`../${encodeURIComponent(values.key)}`)}
    />
  );
};
