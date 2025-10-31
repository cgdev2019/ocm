'use client';

import EditIcon from '@mui/icons-material/EditOutlined';
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
import { useInvoiceSequence } from '@/features/invoice-sequences/api';
import { useRouter } from '@/lib/i18n/navigation';

export const InvoiceSequenceDetail = ({ code }: { code: string }) => {
  const { data, isLoading, isError } = useInvoiceSequence(code);
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
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">{data.code}</Typography>
        <Button startIcon={<EditIcon />} variant="contained" onClick={() => router.push('./edit')}>
          {t('actions.edit')}
        </Button>
      </Stack>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Stack spacing={1}>
                <Row label={t('forms.invoiceSequence.description')} value={data.description} />
                <Row label={t('forms.invoiceSequence.sequenceType')} value={data.sequenceType} />
                <Row label={t('forms.invoiceSequence.sequencePattern')} value={data.sequencePattern} />
                <Row label={t('forms.invoiceSequence.sequenceSize')} value={data.sequenceSize?.toString()} />
                <Row label={t('forms.invoiceSequence.currentInvoiceNb')} value={data.currentInvoiceNb?.toString()} />
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
