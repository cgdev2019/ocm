'use client';

import { Alert, CircularProgress, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { OccTemplateForm } from '@/features/occ-templates/components/OccTemplateForm';
import { useOccTemplate } from '@/features/occ-templates/api';
import { useRouter } from '@/lib/i18n/navigation';

export const OccTemplateEditForm = ({ code }: { code: string }) => {
  const { data, isLoading, isError } = useOccTemplate(code);
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
    <OccTemplateForm
      defaultValues={data}
      mode="edit"
      onSuccess={(values) => router.replace(`../${values.code}`)}
    />
  );
};
