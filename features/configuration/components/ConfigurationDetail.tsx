'use client';

import EditIcon from '@mui/icons-material/Edit';
import { Alert, Button, Card, CardContent, CircularProgress, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useConfigurationProperty } from '@/features/configuration/api';
import { useRouter } from '@/lib/i18n/navigation';

export const ConfigurationDetail = ({ keyName }: { keyName: string }) => {
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

  if (isError) {
    return <Alert severity="error">{t('forms.error')}</Alert>;
  }

  if (!data) {
    return <Alert severity="info">{t('forms.configuration.notFound')}</Alert>;
  }

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{data.key}</Typography>
        <Button onClick={() => router.push(`./${encodeURIComponent(data.key)}/edit`)} startIcon={<EditIcon />}>
          {t('actions.edit')}
        </Button>
      </Stack>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Stack spacing={1}>
                <Row label={t('forms.configuration.value')} value={data.value ?? undefined} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};

const Row = ({ label, value }: { label: string; value?: string | null }) => (
  <Stack direction="row" spacing={1}>
    <Typography width={200} color="text.secondary">
      {label}
    </Typography>
    <Typography>{value ?? '—'}</Typography>
  </Stack>
);
