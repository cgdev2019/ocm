'use client';

import { Alert, CircularProgress, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { GenericCodeForm } from '@/features/generic-code/components/GenericCodeForm';
import { useGenericCode } from '@/features/generic-code/api';
import { useRouter } from '@/lib/i18n/navigation';

export const GenericCodeEditForm = ({ entityClass }: { entityClass: string }) => {
  const { data, isLoading, isError } = useGenericCode(entityClass);
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
    <GenericCodeForm
      defaultValues={data}
      mode="edit"
      onSuccess={(values) => router.replace(`../${values.entityClass}`)}
    />
  );
};
