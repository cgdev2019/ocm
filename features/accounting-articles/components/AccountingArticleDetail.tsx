'use client';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
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
import {
  useAccountingArticle,
  useAccountingArticleMutations,
} from '@/features/accounting-articles/api';
import type { AccountingArticleDetailValues } from '@/features/accounting-articles/types';
import { useRouter } from '@/lib/i18n/navigation';

const DetailRow = ({ label, value }: { label: string; value?: string | number | null }) => (
  <Stack direction="row" spacing={1} alignItems="flex-start">
    <Typography width={220} color="text.secondary">
      {label}
    </Typography>
    <Typography sx={{ flexGrow: 1 }}>{value ?? '—'}</Typography>
  </Stack>
);

const BooleanRow = ({ label, value, yesLabel, noLabel }: { label: string; value?: boolean; yesLabel: string; noLabel: string }) => (
  <Stack direction="row" spacing={1} alignItems="center">
    <Typography width={220} color="text.secondary">
      {label}
    </Typography>
    <Typography>{typeof value === 'boolean' ? (value ? yesLabel : noLabel) : '—'}</Typography>
  </Stack>
);

const LanguageDescriptions = ({ items }: { items: AccountingArticleDetailValues['languageDescriptions'] }) => {
  const t = useTranslations();

  if (!items || items.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary">
        {t('forms.accountingArticle.noLanguageDescriptions')}
      </Typography>
    );
  }

  return (
    <Stack spacing={1.5}>
      {items.map((item, index) => (
        <Stack key={`${item.languageCode}-${index}`} direction="row" spacing={1} alignItems="flex-start">
          <Typography width={120} color="text.secondary">
            {item.languageCode}
          </Typography>
          <Typography sx={{ flexGrow: 1 }}>{item.description}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

const DetailSections = ({ data }: { data: AccountingArticleDetailValues }) => {
  const t = useTranslations();
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {t('forms.accountingArticle.generalInformation')}
            </Typography>
            <Stack spacing={1.5}>
              <DetailRow label={t('forms.accountingArticle.description')} value={data.description} />
              <DetailRow label={t('forms.accountingArticle.invoiceSubCategory')} value={data.invoiceSubCategoryCode} />
              <DetailRow label={t('forms.accountingArticle.taxClass')} value={data.taxClassCode} />
              <DetailRow label={t('forms.accountingArticle.articleFamily')} value={data.articleFamilyCode} />
              <DetailRow label={t('forms.accountingArticle.invoiceType')} value={data.invoiceTypeCode} />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {t('forms.accountingArticle.accountingInformation')}
            </Typography>
            <Stack spacing={1.5}>
              <DetailRow label={t('forms.accountingArticle.accountingCode')} value={data.accountingCode} />
              <DetailRow label={t('forms.accountingArticle.accountingCodeEl')} value={data.accountingCodeEl} />
              <DetailRow label={t('forms.accountingArticle.columnCriteriaEl')} value={data.columnCriteriaEl} />
              <DetailRow label={t('forms.accountingArticle.invoiceTypeEl')} value={data.invoiceTypeEl} />
              <DetailRow label={t('forms.accountingArticle.unitPrice')} value={data.unitPrice ?? undefined} />
              <BooleanRow
                label={t('forms.accountingArticle.ignoreAggregation')}
                value={data.ignoreAggregation}
                yesLabel={t('common.yes')}
                noLabel={t('common.no')}
              />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {t('forms.accountingArticle.analyticsSection')}
            </Typography>
            <Stack spacing={1.5}>
              <DetailRow label={t('forms.accountingArticle.analyticCode1')} value={data.analyticCode1} />
              <DetailRow label={t('forms.accountingArticle.analyticCode2')} value={data.analyticCode2} />
              <DetailRow label={t('forms.accountingArticle.analyticCode3')} value={data.analyticCode3} />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {t('forms.accountingArticle.languageDescriptions')}
            </Typography>
            <LanguageDescriptions items={data.languageDescriptions} />
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {t('forms.accountingArticle.customFields')}
            </Typography>
            <Typography
              component="pre"
              sx={{
                whiteSpace: 'pre-wrap',
                bgcolor: 'action.hover',
                px: 2,
                py: 1.5,
                borderRadius: 1,
                maxHeight: 240,
                overflow: 'auto',
              }}
            >
              {data.customFieldsJson ?? t('forms.accountingArticle.noCustomFields')}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export const AccountingArticleDetail = ({ code }: { code: string }) => {
  const { data, isLoading, isError } = useAccountingArticle(code);
  const { remove } = useAccountingArticleMutations();
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
    setConfirmOpen(false);
    router.replace('../');
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{code}</Typography>
        <Stack direction="row" spacing={1}>
          <Button startIcon={<EditIcon />} variant="outlined" onClick={() => router.push('./edit')}>
            {t('actions.edit')}
          </Button>
          <Button
            startIcon={<DeleteOutlineIcon />}
            variant="outlined"
            color="error"
            onClick={() => setConfirmOpen(true)}
            disabled={remove.isPending}
          >
            {t('actions.delete')}
          </Button>
        </Stack>
      </Stack>
      <DetailSections data={data} />
      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>{t('actions.delete')}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t('forms.accountingArticle.deleteConfirmation', { code })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)}>{t('actions.cancel')}</Button>
          <Button onClick={handleDelete} color="error" disabled={remove.isPending}>
            {t('actions.delete')}
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};
