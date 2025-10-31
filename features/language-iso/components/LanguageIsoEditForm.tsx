'use client';

import { Alert, CircularProgress, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { LanguageIsoForm } from '@/features/language-iso/components/LanguageIsoForm';
import { useLanguageIso } from '@/features/language-iso/api';
import { useRouter } from '@/lib/i18n/navigation';

export const LanguageIsoEditForm = ({ code }: { code: string }) => {
  const { data, isLoading, isError } = useLanguageIso(code);
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
    <LanguageIsoForm
      defaultValues={data}
      mode="edit"
      onSuccess={(values) =>
        router.replace({ pathname: '/language-iso/[code]', query: { code: values.code } })
      }
    />
  );
};
