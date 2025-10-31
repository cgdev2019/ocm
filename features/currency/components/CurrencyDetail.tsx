'use client';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import {
  Alert,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useCurrency, useCurrencyMutations } from '@/features/currency/api';
import { useRouter } from '@/lib/i18n/navigation';

export const CurrencyDetail = ({ currencyCode }: { currencyCode: string }) => {
  const { data, isLoading, isError } = useCurrency(currencyCode);
  const { remove, enable, disable } = useCurrencyMutations();
  const t = useTranslations();
  const router = useRouter();
  const [confirmOpen, setConfirmOpen] = useState(false);

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

  const handleDelete = async () => {
    await remove.mutateAsync(currencyCode);
    router.replace('../');
  };

  const toggleDisabled = async () => {
    if (data.disabled) {
      await enable.mutateAsync(currencyCode);
    } else {
      await disable.mutateAsync(currencyCode);
    }
  };

  const isTogglePending = enable.isPending || disable.isPending;
  const toggleLabel = data.disabled ? t('actions.enable') : t('actions.disable');

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{data.code}</Typography>
        <Stack direction="row" spacing={1}>
          <Button
            onClick={() => router.push(`./${currencyCode}/edit`)}
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
            {toggleLabel}
          </Button>
          <Button
            color="error"
            startIcon={<DeleteOutlineIcon />}
            onClick={() => setConfirmOpen(true)}
            disabled={remove.isPending}
          >
            {t('actions.delete')}
          </Button>
        </Stack>
      </Stack>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Stack spacing={1}>
                <Row label={t('forms.currency.description')} value={data.description} />
                <Row label={t('forms.currency.symbol')} value={data.symbol} />
                <Row label={t('forms.currency.decimalPlaces')} value={data.decimalPlaces?.toString()} />
                <Row label={t('forms.currency.prCurrencyToThis')} value={data.prCurrencyToThis?.toString()} />
                <Row label={t('forms.currency.disabled')} value={data.disabled ? t('common.yes') : t('common.no')} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>{t('actions.delete')}</DialogTitle>
        <DialogContent>
          <DialogContentText>{t('forms.currency.deleteConfirmation')}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)}>{t('actions.cancel')}</Button>
          <Button color="error" onClick={handleDelete} disabled={remove.isPending}>
            {t('actions.delete')}
          </Button>
        </DialogActions>
      </Dialog>
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
