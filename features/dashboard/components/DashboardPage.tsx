'use client';

import { useMemo } from 'react';
import {
  Box,
  Card,
  CardContent,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations, useLocale } from 'next-intl';
import { useCustomersList } from '@/features/customers/api';
import { useCustomerAccounts } from '@/features/customer-accounts/api';
import { useInvoices } from '@/features/invoices/api';
import { formatCurrency } from '@/lib/utils/format';

export const DashboardPage = () => {
  const customers = useCustomersList({ limit: 5, offset: 0 });
  const accounts = useCustomerAccounts();
  const invoices = useInvoices({ limit: 10, offset: 0 });
  const t = useTranslations();
  const locale = useLocale();

  const totalAmount = useMemo(
    () =>
      (invoices.data ?? []).reduce((acc, invoice) => acc + (invoice.amountWithTax ?? 0), 0),
    [invoices.data],
  );

  return (
    <Stack spacing={3}>
      <Typography variant="h4">{t('navigation.dashboard')}</Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard
            title={t('dashboard.kpi.activeCustomers')}
            value={(customers.data?.paging.totalRecords ?? customers.data?.items.length ?? 0).toString()}
            loading={customers.isLoading}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard
            title={t('navigation.customerAccounts')}
            value={accounts.data?.length.toString() ?? '—'}
            loading={accounts.isLoading}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard
            title={t('dashboard.kpi.outstandingBalance')}
            value={formatCurrency(totalAmount, 'EUR', locale as never)}
            loading={invoices.isLoading}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {t('navigation.customers')}
              </Typography>
              <Stack spacing={1}>
                {(customers.data?.items ?? []).map((item) => (
                  <Box key={item.code}>
                    <Typography fontWeight={600}>{item.code}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description ?? '—'}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {t('navigation.invoices')}
              </Typography>
              <Stack spacing={1}>
                {(invoices.data ?? []).slice(0, 5).map((item) => (
                  <Box key={item.id}>
                    <Typography fontWeight={600}>{item.invoiceNumber ?? item.id}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {formatCurrency(item.amountWithTax ?? 0, 'EUR', locale as never)}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};

const StatCard = ({ title, value, loading }: { title: string; value: string; loading: boolean }) => (
  <Card>
    {loading ? <LinearProgress /> : null}
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="h3" fontWeight={600} mt={1}>
        {loading ? '…' : value}
      </Typography>
    </CardContent>
  </Card>
);
