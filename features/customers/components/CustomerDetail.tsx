'use client';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import {
  Alert,
  Box,
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
import { useRouter } from '@/lib/i18n/navigation';
import { useState } from 'react';
import { useCustomer, useCustomerMutations } from '@/features/customers/api';

export const CustomerDetail = ({ code }: { code: string }) => {
  const { data, isLoading, isError } = useCustomer(code);
  const { remove } = useCustomerMutations();
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
        <Box>
          <Typography variant="h4">{data.code}</Typography>
          <Typography color="text.secondary">{data.description}</Typography>
        </Box>
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
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                {t('forms.customer.category')}
              </Typography>
              <Stack spacing={1}>
                <Row label={t('forms.customer.category')} value={data.customerCategory} />
                <Row label={t('forms.customer.brand')} value={data.customerBrand} />
                <Row label={t('forms.customer.seller')} value={data.seller} />
                <Row label={t('forms.customer.vatNo')} value={data.vatNo} />
                <Row label={t('forms.customer.registrationNo')} value={data.registrationNo} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                {t('forms.customer.email')}
              </Typography>
              <Stack spacing={1}>
                <Row label={t('forms.customer.email')} value={data.contactEmail} />
                <Row label={t('forms.customer.phone')} value={data.contactPhone} />
                <Row label={t('forms.customer.street')} value={data.address1} />
                <Row label={t('forms.customer.city')} value={data.city} />
                <Row label={t('forms.customer.country')} value={data.country} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>{t('actions.delete')}</DialogTitle>
        <DialogContent>
          <DialogContentText>{t('feedback.deleted')}</DialogContentText>
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

const Row = ({ label, value }: { label: string; value?: string }) => (
  <Stack direction="row" spacing={1}>
    <Typography width={160} color="text.secondary">
      {label}
    </Typography>
    <Typography>{value ?? '—'}</Typography>
  </Stack>
);
