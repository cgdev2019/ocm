'use client';

import { Alert, CircularProgress, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { FilterForm } from '@/features/filter/components/FilterForm';
import { useFilter } from '@/features/filter/api';
import { useRouter } from '@/lib/i18n/navigation';

export const FilterEditForm = ({ filterCode }: { filterCode: string }) => {
  const { data, isLoading, isError } = useFilter(filterCode);
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
    <FilterForm
      defaultValues={data}
      mode="edit"
      onSuccess={(values) => router.replace(`../${values.code}`)}
    />
  );
};
