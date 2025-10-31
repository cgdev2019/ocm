'use client';

import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/CancelOutlined';
import {
  Alert,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { format, parseISO } from 'date-fns';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { useRatedTransactionDetail } from '@/features/rated-transactions/api';

const formatDate = (value?: string | null) => {
  if (!value) {
    return '—';
  }
  try {
    const parsed = parseISO(value);
    if (Number.isNaN(parsed.getTime())) {
      return value;
    }
    return format(parsed, 'yyyy-MM-dd HH:mm');
  } catch (error) {
    return value;
  }
};

const formatNumber = (value?: number | null) => {
  if (value === undefined || value === null) {
    return '—';
  }
  return new Intl.NumberFormat(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
};

type RatedTransactionDetailDrawerProps = {
  transactionCode: string | null;
  open: boolean;
  onClose: () => void;
  onCancel: (code: string) => void;
  cancelling: boolean;
};

export const RatedTransactionDetailDrawer = ({
  transactionCode,
  open,
  onClose,
  onCancel,
  cancelling,
}: RatedTransactionDetailDrawerProps) => {
  const t = useTranslations();
  const detailQuery = useRatedTransactionDetail(transactionCode);

  const transaction = detailQuery.data;

  const fields = useMemo(
    () => [
      { label: t('forms.ratedTransaction.code'), value: transaction?.code },
      { label: t('forms.ratedTransaction.status'), value: transaction?.status },
      { label: t('forms.ratedTransaction.usageDate'), value: formatDate(transaction?.usageDate) },
      { label: t('forms.ratedTransaction.quantity'), value: transaction?.quantity ?? '—' },
      {
        label: t('forms.ratedTransaction.unitAmountWithoutTax'),
        value: formatNumber(transaction?.unitAmountWithoutTax ?? undefined),
      },
      {
        label: t('forms.ratedTransaction.amountWithoutTax'),
        value: formatNumber(transaction?.amountWithoutTax ?? undefined),
      },
      {
        label: t('forms.ratedTransaction.amountWithTax'),
        value: formatNumber(transaction?.amountWithTax ?? undefined),
      },
      {
        label: t('forms.ratedTransaction.amountTax'),
        value: formatNumber(transaction?.amountTax ?? undefined),
      },
      { label: t('forms.ratedTransaction.priceplanCode'), value: transaction?.priceplanCode },
      { label: t('forms.ratedTransaction.userAccountCode'), value: transaction?.userAccountCode },
      { label: t('forms.ratedTransaction.invoiceSubCategoryCode'), value: transaction?.invoiceSubCategoryCode },
      { label: t('forms.ratedTransaction.sellerCode'), value: transaction?.sellerCode },
      { label: t('forms.ratedTransaction.billingAccountCode'), value: transaction?.billingAccountCode },
      { label: t('forms.ratedTransaction.description'), value: transaction?.description },
      { label: t('forms.ratedTransaction.unityDescription'), value: transaction?.unityDescription },
    ],
    [t, transaction],
  );

  return (
    <Drawer anchor="right" open={open} onClose={onClose} keepMounted>
      <Box sx={{ width: { xs: 320, sm: 420 }, p: 3 }} role="dialog" aria-label={t('forms.ratedTransaction.detailTitle')}>
        <Stack spacing={2} height="100%">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">{t('forms.ratedTransaction.detailTitle')}</Typography>
            <IconButton aria-label={t('actions.close')} onClick={onClose} size="small">
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider />
          {detailQuery.isLoading ? (
            <Typography variant="body2" color="text.secondary">
              {t('table.loading')}
            </Typography>
          ) : null}
          {detailQuery.isError ? <Alert severity="error">{t('forms.error')}</Alert> : null}
          {transaction ? (
            <Stack spacing={1.5} flex={1} overflow="auto">
              {fields.map((field) => (
                <Box key={field.label}>
                  <Typography variant="caption" color="text.secondary">
                    {field.label}
                  </Typography>
                  <Typography variant="body2">{field.value ?? '—'}</Typography>
                </Box>
              ))}
            </Stack>
          ) : null}
          <Divider />
          <Button
            variant="contained"
            color="error"
            startIcon={<CancelIcon />}
            onClick={() => transactionCode && onCancel(transactionCode)}
            disabled={!transactionCode || cancelling || detailQuery.isLoading}
          >
            {t('forms.ratedTransaction.cancelSingle')}
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
};
