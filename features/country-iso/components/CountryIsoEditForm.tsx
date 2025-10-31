'use client';

import { Alert, CircularProgress, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { CountryIsoForm } from '@/features/country-iso/components/CountryIsoForm';
import { useCountryIso } from '@/features/country-iso/api';
import { useRouter } from '@/lib/i18n/navigation';

export const CountryIsoEditForm = ({ countryCode }: { countryCode: string }) => {
  const { data, isLoading, isError } = useCountryIso(countryCode);
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
    <CountryIsoForm
      defaultValues={data}
      mode="edit"
      onSuccess={(values) => router.replace(`../${values.countryCode}`)}
    />
  );
};
