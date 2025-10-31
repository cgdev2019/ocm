'use client';

import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Snackbar,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useSeller, useSellerMutations } from '@/features/sellers/api';
import { useRouter } from '@/lib/i18n/navigation';

export const SellerDetail = ({ code }: { code: string }) => {
  const { data, isLoading, isError, refetch } = useSeller(code);
  const { remove } = useSellerMutations();
  const t = useTranslations();
  const router = useRouter();
  const [openSnack, setOpenSnack] = useState(false);

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
    if (!window.confirm(t('forms.confirmDeletion'))) {
      return;
    }
    await remove.mutateAsync(code);
    setOpenSnack(true);
    router.replace('../');
  };

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">{data.code}</Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description ?? t('forms.seller.noDescription')}
          </Typography>
        </Box>
        <Stack direction="row" spacing={1}>
          <Button startIcon={<RefreshIcon />} variant="outlined" onClick={() => refetch()}>
            {t('actions.refresh')}
          </Button>
          <Button
            startIcon={<EditIcon />}
            variant="contained"
            onClick={() => router.push(`/sellers/${code}/edit`)}
          >
            {t('actions.edit')}
          </Button>
          <Button color="error" startIcon={<DeleteIcon />} onClick={handleDelete} disabled={remove.isPending}>
            {t('actions.delete')}
          </Button>
        </Stack>
      </Stack>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Stack spacing={1}>
                <Row label={t('forms.seller.currencyCode')} value={data.currencyCode} />
                <Row label={t('forms.seller.countryCode')} value={data.countryCode} />
                <Row label={t('forms.seller.languageCode')} value={data.languageCode} />
                <Row label={t('forms.seller.parentSeller')} value={data.parentSeller} />
                <Row label={t('forms.seller.vatNo')} value={data.vatNo} />
                <Row label={t('forms.seller.registrationNo')} value={data.registrationNo} />
                <Row label={t('forms.seller.legalType')} value={data.legalType} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Stack spacing={1}>
                <Row label={t('forms.seller.email')} value={data.email} />
                <Row label={t('forms.seller.phone')} value={data.phone} />
                <Row label={t('forms.seller.address1')} value={data.address1} />
                <Row label={t('forms.seller.address2')} value={data.address2} />
                <Row label={t('forms.seller.city')} value={data.city} />
                <Row label={t('forms.seller.state')} value={data.state} />
                <Row label={t('forms.seller.zipCode')} value={data.zipCode} />
                <Row label={t('forms.seller.addressCountry')} value={data.addressCountry} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {data.legalText ? (
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {t('forms.seller.legalText')}
            </Typography>
            <Typography>{data.legalText}</Typography>
          </CardContent>
        </Card>
      ) : null}
      <Snackbar
        open={openSnack}
        autoHideDuration={4000}
        onClose={() => setOpenSnack(false)}
        message={t('feedback.deleted')}
      />
    </Stack>
  );
};

const Row = ({ label, value }: { label: string; value?: string | null }) => (
  <Stack direction="row" spacing={1}>
    <Typography width={200} color="text.secondary">
      {label}
    </Typography>
    <Typography sx={{ flex: 1 }}>{value ?? '—'}</Typography>
  </Stack>
);
