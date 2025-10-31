'use client';

import EditIcon from '@mui/icons-material/Edit';
import { Alert, Button, Card, CardContent, CircularProgress, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useSubscription } from '@/features/subscriptions/api';
import { useRouter } from '@/lib/i18n/navigation';

const formatDate = (value?: string) => (value ? new Date(value).toLocaleString() : null);

export const SubscriptionDetail = ({ code }: { code: string }) => {
  const { data, isLoading, isError } = useSubscription(code);
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
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{data.code}</Typography>
        <Button onClick={() => router.push('./edit')} startIcon={<EditIcon />} variant="outlined">
          {t('actions.edit')}
        </Button>
      </Stack>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Stack spacing={1}>
                <Row label={t('forms.subscription.description')} value={data.description} />
                <Row label={t('forms.subscription.userAccount')} value={data.userAccount} />
                <Row label={t('forms.subscription.offerTemplate')} value={data.offerTemplate} />
                <Row label={t('forms.subscription.subscriptionDate')} value={formatDate(data.subscriptionDate)} />
                <Row label={t('forms.subscription.terminationDate')} value={formatDate(data.terminationDate)} />
                <Row label={t('forms.subscription.endAgreementDate')} value={formatDate(data.endAgreementDate)} />
                <Row label={t('forms.subscription.validityDate')} value={formatDate(data.validityDate)} />
                <Row
                  label={t('forms.subscription.status')}
                  value={data.status ? t(`forms.subscription.statuses.${data.status}`) : undefined}
                />
                <Row label={t('forms.subscription.billingCycle')} value={data.billingCycle} />
                <Row label={t('forms.subscription.seller')} value={data.seller} />
                <Row
                  label={t('forms.subscription.autoEndOfEngagement')}
                  value={data.autoEndOfEngagement ? t('common.yes') : t('common.no')}
                />
                <Row label={t('forms.subscription.renewed')} value={data.renewed ? t('common.yes') : t('common.no')} />
                <Row label={t('forms.subscription.renewalNotifiedDate')} value={formatDate(data.renewalNotifiedDate)} />
                <Row label={t('forms.subscription.email')} value={data.email} />
                <Row label={t('forms.subscription.versionNumber')} value={data.versionNumber.toString()} />
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
    <Typography width={220} color="text.secondary">
      {label}
    </Typography>
    <Typography>{value ?? '—'}</Typography>
  </Stack>
);
