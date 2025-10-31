'use client';

import {
  Alert,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useLocale, useTranslations } from 'next-intl';
import { useInvoice } from '@/features/invoices/api';
import { formatCurrency, formatDate } from '@/lib/utils/format';

export const InvoiceDetail = ({ id }: { id: string }) => {
  const { data, isLoading, isError } = useInvoice(id);
  const t = useTranslations();
  const locale = useLocale();

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
      <Box>
        <Typography variant="h4">{data.invoiceNumber ?? `#${data.invoiceId}`}</Typography>
        <Typography color="text.secondary">{data.status}</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Stack spacing={1}>
                <Row label={t('forms.customerAccount.code')} value={data.billingAccountCode} />
                <Row label={t('forms.invoice.type')} value={data.invoiceType} />
                <Row label={t('forms.invoice.status')} value={data.status} />
                <Row
                  label={t('forms.invoice.dueDate')}
                  value={data.dueDate ? formatDate(data.dueDate, locale as never) : undefined}
                />
                <Row
                  label={t('forms.invoice.number')}
                  value={data.invoiceNumber ?? data.invoiceId?.toString()}
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Stack spacing={1}>
                <Row
                  label={t('forms.invoice.amount')}
                  value={
                    data.amountWithTax != null
                      ? formatCurrency(data.amountWithTax, 'EUR', locale as never)
                      : undefined
                  }
                />
                <Row label={t('forms.invoice.type')} value={data.invoiceMode} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
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
