'use client';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
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
import { useBillingCycle, useBillingCycleMutations } from '@/features/billing-cycles/api';
import { useRouter } from '@/lib/i18n/navigation';

export const BillingCycleDetail = ({ code }: { code: string }) => {
  const { data, isLoading, isError } = useBillingCycle(code);
  const { remove } = useBillingCycleMutations();
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
    await remove.mutateAsync(code);
    router.replace('../');
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{data.code}</Typography>
        <Stack direction="row" spacing={1}>
          <Button
            onClick={() => router.push(`./${code}/edit`)}
            startIcon={<EditIcon />}
            variant="outlined"
          >
            {t('actions.edit')}
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
                <Row label={t('forms.billingCycle.description')} value={data.description} />
                <Row label={t('forms.billingCycle.calendar')} value={data.calendar} />
                <Row label={t('forms.billingCycle.type')} value={data.type ?? undefined} />
                <Row label={t('forms.billingCycle.referenceDate')} value={data.referenceDate ?? undefined} />
                <Row label={t('forms.billingCycle.invoiceDateDelayEL')} value={data.invoiceDateDelayEL} />
                <Row
                  label={t('forms.billingCycle.invoiceDateDelay')}
                  value={data.invoiceDateDelay?.toString()}
                />
                <Row label={t('forms.billingCycle.dueDateDelayEL')} value={data.dueDateDelayEL ?? undefined} />
                <Row label={t('forms.billingCycle.dueDateDelay')} value={data.dueDateDelay?.toString()} />
                <Row
                  label={t('forms.billingCycle.invoicingThreshold')}
                  value={data.invoicingThreshold?.toString()}
                />
                <Row
                  label={t('forms.billingCycle.computeDatesAtValidation')}
                  value={data.computeDatesAtValidation ? t('common.yes') : t('common.no')}
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>{t('actions.delete')}</DialogTitle>
        <DialogContent>
          <DialogContentText>{t('forms.billingCycle.deleteConfirmation')}</DialogContentText>
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
