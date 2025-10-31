'use client';

import { Alert, Card, CardContent, CircularProgress, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { ProviderForm } from '@/features/provider/components/ProviderForm';
import {
  useProvider,
  useProviderCustomerAccountConfiguration,
  useProviderCustomerConfiguration,
  useProviderInvoicingConfiguration,
  useProviderTenants,
  useProviderTradingConfiguration,
} from '@/features/provider/api';

const LoadingState = () => (
  <Stack spacing={2} alignItems="center" py={6}>
    <CircularProgress size={32} />
  </Stack>
);

export const ProviderDetail = () => {
  const t = useTranslations();
  const providerQuery = useProvider();
  const tenantsQuery = useProviderTenants();
  const customerConfigQuery = useProviderCustomerConfiguration();
  const customerAccountConfigQuery = useProviderCustomerAccountConfiguration();
  const invoicingConfigQuery = useProviderInvoicingConfiguration();
  const tradingConfigQuery = useProviderTradingConfiguration();

  if (providerQuery.isLoading) {
    return <LoadingState />;
  }

  if (providerQuery.isError || !providerQuery.data) {
    return <Alert severity="error">{t('forms.error')}</Alert>;
  }

  const customerConfig = customerConfigQuery.data;
  const customerAccountConfig = customerAccountConfigQuery.data;
  const invoicingConfig = invoicingConfigQuery.data;
  const tradingConfig = tradingConfigQuery.data;
  const tenants = tenantsQuery.data ?? [];

  return (
    <Stack spacing={3}>
      <Typography variant="h4">{t('navigation.provider')}</Typography>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <ProviderForm defaultValues={providerQuery.data} />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Stack spacing={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {t('forms.provider.tenantsTitle')}
                </Typography>
                {tenantsQuery.isLoading ? (
                  <LoadingState />
                ) : tenants.length === 0 ? (
                  <Alert severity="info">{t('forms.provider.noTenants')}</Alert>
                ) : (
                  <List dense>
                    {tenants.map((tenant) => (
                      <ListItem key={tenant.code}>
                        <ListItemText
                          primary={tenant.code}
                          secondary={
                            tenant.description
                              ? `${tenant.description} — ${tenant.currency ?? '—'} / ${tenant.country ?? '—'}`
                              : `${tenant.currency ?? '—'} / ${tenant.country ?? '—'}`
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {t('forms.provider.customerConfiguration')}
                </Typography>
                {customerConfigQuery.isLoading ? (
                  <LoadingState />
                ) : customerConfig ? (
                  <List dense>
                    <ListItem>
                      <ListItemText
                        primary={t('forms.provider.customerBrands')}
                        secondary={customerConfig.customerBrands?.customerBrand?.length ?? 0}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={t('forms.provider.customerCategories')}
                        secondary={customerConfig.customerCategories?.customerCategory?.length ?? 0}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={t('forms.provider.titles')}
                        secondary={customerConfig.titles?.title?.length ?? 0}
                      />
                    </ListItem>
                  </List>
                ) : (
                  <Alert severity="warning">{t('forms.provider.configurationUnavailable')}</Alert>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {t('forms.provider.customerAccountConfiguration')}
                </Typography>
                {customerAccountConfigQuery.isLoading ? (
                  <LoadingState />
                ) : customerAccountConfig ? (
                  <List dense>
                    <ListItem>
                      <ListItemText
                        primary={t('forms.provider.paymentMethods')}
                        secondary={(customerAccountConfig.paymentMethods ?? []).join(', ') || '—'}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={t('forms.provider.creditCategories')}
                        secondary={customerAccountConfig.creditCategories?.creditCategory?.length ?? 0}
                      />
                    </ListItem>
                  </List>
                ) : (
                  <Alert severity="warning">{t('forms.provider.configurationUnavailable')}</Alert>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {t('forms.provider.invoicingConfiguration')}
                </Typography>
                {invoicingConfigQuery.isLoading ? (
                  <LoadingState />
                ) : invoicingConfig ? (
                  <List dense>
                    <ListItem>
                      <ListItemText
                        primary={t('forms.provider.calendars')}
                        secondary={invoicingConfig.calendars?.calendar?.length ?? 0}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={t('forms.provider.taxes')}
                        secondary={invoicingConfig.taxes?.tax?.length ?? 0}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={t('forms.provider.invoiceCategories')}
                        secondary={invoicingConfig.invoiceCategories?.invoiceCategory?.length ?? 0}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={t('forms.provider.invoiceSubCategories')}
                        secondary={invoicingConfig.invoiceSubCategories?.invoiceSubCategory?.length ?? 0}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={t('forms.provider.billingCycles')}
                        secondary={invoicingConfig.billingCycles?.billingCycle?.length ?? 0}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={t('forms.provider.terminationReasons')}
                        secondary={invoicingConfig.terminationReasons?.terminationReason?.length ?? 0}
                      />
                    </ListItem>
                  </List>
                ) : (
                  <Alert severity="warning">{t('forms.provider.configurationUnavailable')}</Alert>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {t('forms.provider.tradingConfiguration')}
                </Typography>
                {tradingConfigQuery.isLoading ? (
                  <LoadingState />
                ) : tradingConfig ? (
                  <List dense>
                    <ListItem>
                      <ListItemText
                        primary={t('forms.provider.countries')}
                        secondary={tradingConfig.countries?.country?.length ?? 0}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={t('forms.provider.currencies')}
                        secondary={tradingConfig.currencies?.currency?.length ?? 0}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={t('forms.provider.languages')}
                        secondary={tradingConfig.languages?.language?.length ?? 0}
                      />
                    </ListItem>
                  </List>
                ) : (
                  <Alert severity="warning">{t('forms.provider.configurationUnavailable')}</Alert>
                )}
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
