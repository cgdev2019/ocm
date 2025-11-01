'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import CalculateIcon from '@mui/icons-material/CalculateOutlined';
import { Alert, Box, Button, Card, CardContent, Snackbar, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  useWalletBalanceCurrent,
  useWalletBalanceOpen,
  useWalletBalanceReserved,
} from '@/features/wallet/api';
import { walletBalanceFormSchema, type WalletBalanceFormSchema } from '@/features/wallet/schema';

export const WalletBalanceSection = () => {
  const t = useTranslations();
  const currentBalance = useWalletBalanceCurrent();
  const openBalance = useWalletBalanceOpen();
  const reservedBalance = useWalletBalanceReserved();
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { control, handleSubmit, reset } = useForm<WalletBalanceFormSchema>({
    defaultValues: {
      sellerCode: '',
      customerCode: '',
      customerAccountCode: '',
      billingAccountCode: '',
      userAccountCode: '',
      startDate: '',
      endDate: '',
      walletCode: '',
      amountWithTax: undefined,
    },
    resolver: zodResolver(walletBalanceFormSchema),
  });

  const executeBalance = async (
    action: 'current' | 'open' | 'reserved',
    values: WalletBalanceFormSchema,
  ) => {
    try {
      const payload = walletBalanceFormSchema.parse(values);
      const mutation =
        action === 'current' ? currentBalance : action === 'open' ? openBalance : reservedBalance;
      const response = await mutation.mutateAsync(payload);
      const formatted = t('forms.wallet.balanceResult', {
        amountWithTax: response.amountWithTax ?? 0,
        amountWithoutTax: response.amountWithoutTax ?? 0,
      });
      setResultMessage(formatted);
    } catch (error) {
      setErrorMessage(t('forms.error'));
    }
  };

  const onSubmit = (action: 'current' | 'open' | 'reserved') =>
    handleSubmit((values) => executeBalance(action, values));

  return (
    <Card>
      <CardContent>
        <Stack spacing={3}>
          <Typography variant="h6">{t('forms.wallet.balanceTitle')}</Typography>
          <Grid container spacing={2} component="form">
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="sellerCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.wallet.seller')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="customerCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.wallet.customerCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="customerAccountCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.wallet.customerAccountCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="billingAccountCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.wallet.billingAccountCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="userAccountCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.wallet.userAccount')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="walletCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.wallet.walletCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="startDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="date"
                    fullWidth
                    label={t('forms.wallet.startDate')}
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="endDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="date"
                    fullWidth
                    label={t('forms.wallet.endDate')}
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="amountWithTax"
                render={({ field }) => (
                  <TextField
                    select
                    fullWidth
                    label={t('forms.wallet.amountWithTaxFlag')}
                    SelectProps={{ native: true }}
                    value={field.value === undefined ? '' : field.value ? 'true' : 'false'}
                    onChange={(event) => {
                      const value = event.target.value;
                      field.onChange(value === '' ? undefined : value === 'true');
                    }}
                  >
                    <option value="">{t('common.any')}</option>
                    <option value="true">{t('common.yes')}</option>
                    <option value="false">{t('common.no')}</option>
                  </TextField>
                )}
              />
            </Grid>
          </Grid>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} justifyContent="flex-end">
            <Button variant="outlined" onClick={() => reset()}>
              {t('actions.reset')}
            </Button>
            <Button
              variant="contained"
              startIcon={<CalculateIcon />}
              onClick={() => onSubmit('current')()}
              disabled={currentBalance.isPending}
            >
              {t('forms.wallet.currentBalance')}
            </Button>
            <Button
              variant="contained"
              startIcon={<CalculateIcon />}
              color="secondary"
              onClick={() => onSubmit('open')()}
              disabled={openBalance.isPending}
            >
              {t('forms.wallet.openBalance')}
            </Button>
            <Button
              variant="contained"
              startIcon={<CalculateIcon />}
              color="secondary"
              onClick={() => onSubmit('reserved')()}
              disabled={reservedBalance.isPending}
            >
              {t('forms.wallet.reservedBalance')}
            </Button>
          </Stack>
        </Stack>
      </CardContent>
      <Snackbar
        open={Boolean(resultMessage)}
        autoHideDuration={4000}
        onClose={() => setResultMessage(null)}
        message={resultMessage ?? ''}
      />
      <Snackbar
        open={Boolean(errorMessage)}
        autoHideDuration={4000}
        onClose={() => setErrorMessage(null)}
        message={errorMessage ?? ''}
      />
      {(currentBalance.isError || openBalance.isError || reservedBalance.isError) && (
        <Box sx={{ px: 3, pb: 3 }}>
          <Alert severity="error">{t('forms.error')}</Alert>
        </Box>
      )}
    </Card>
  );
};
