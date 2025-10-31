'use client';

import EditIcon from '@mui/icons-material/Edit';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import {
  Alert,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { useFilter, useFilterMutations } from '@/features/filter/api';
import { useRouter } from '@/lib/i18n/navigation';

export const FilterDetail = ({ filterCode }: { filterCode: string }) => {
  const { data, isLoading, isError } = useFilter(filterCode);
  const { enable, disable } = useFilterMutations();
  const t = useTranslations();
  const router = useRouter();

  const rows = useMemo(
    () => [
      { label: t('forms.filter.description'), value: data?.description },
      { label: t('forms.filter.entityClass'), value: data?.entityClass },
      { label: t('forms.filter.inputXml'), value: data?.inputXml },
      { label: t('forms.filter.pollingQuery'), value: data?.pollingQuery },
      { label: t('forms.filter.shared'), value: data?.shared ? t('common.yes') : t('common.no') },
      { label: t('forms.filter.disabled'), value: data?.disabled ? t('common.yes') : t('common.no') },
    ],
    [data, t],
  );

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

  const toggleDisabled = async () => {
    if (data.disabled) {
      await enable.mutateAsync(filterCode);
    } else {
      await disable.mutateAsync(filterCode);
    }
  };

  const isTogglePending = enable.isPending || disable.isPending;

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{data.code}</Typography>
        <Stack direction="row" spacing={1}>
          <Button
            onClick={() => router.push(`./${filterCode}/edit`)}
            startIcon={<EditIcon />}
            variant="outlined"
          >
            {t('actions.edit')}
          </Button>
          <Button
            color={data.disabled ? 'success' : 'warning'}
            startIcon={<PowerSettingsNewIcon />}
            onClick={toggleDisabled}
            disabled={isTogglePending}
          >
            {data.disabled ? t('actions.enable') : t('actions.disable')}
          </Button>
        </Stack>
      </Stack>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardContent>
              <Stack spacing={1}>
                {rows.map((row) => (
                  <Row key={row.label} label={row.label} value={row.value} />
                ))}
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
    <Typography sx={{ whiteSpace: 'pre-wrap' }}>{value ?? '—'}</Typography>
  </Stack>
);
