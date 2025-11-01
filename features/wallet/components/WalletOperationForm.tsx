'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import { Alert, Box, Button, Card, CardContent, MenuItem, Snackbar, Stack, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useWalletOperationCreate } from '@/features/wallet/api';
import { walletOperationFormSchema, type WalletOperationFormSchema } from '@/features/wallet/schema';

export const WalletOperationForm = () => {
  const t = useTranslations();
  const createMutation = useWalletOperationCreate();
  const [openSnack, setOpenSnack] = useState(false);

  const { control, handleSubmit, reset, formState } = useForm<WalletOperationFormSchema>({
    resolver: zodResolver(walletOperationFormSchema),
    defaultValues: {
      code: '',
      description: '',
      userAccount: '',
      subscription: '',
      walletTemplate: '',
      seller: '',
      currency: '',
      type: 'CREDIT',
      operationDate: '',
      quantity: undefined,
      unitAmountWithoutTax: undefined,
      unitAmountWithTax: undefined,
      amountWithoutTax: undefined,
      amountWithTax: undefined,
      amountTax: undefined,
    },
  });

  const onSubmit = async (values: WalletOperationFormSchema) => {
    await createMutation.mutateAsync(values);
    setOpenSnack(true);
    reset({
      ...values,
      code: '',
      description: '',
      quantity: undefined,
      unitAmountWithoutTax: undefined,
      unitAmountWithTax: undefined,
      amountWithoutTax: undefined,
      amountWithTax: undefined,
      amountTax: undefined,
    });
  };

  return (
    <Card component="form" onSubmit={handleSubmit(onSubmit)}>
      <CardContent>
        <Stack spacing={3}>
          {createMutation.isError ? <Alert severity="error">{t('forms.error')}</Alert> : null}
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="code"
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label={t('forms.wallet.code')}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error ? t(fieldState.error.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="userAccount"
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label={t('forms.wallet.userAccount')}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error ? t(fieldState.error.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="walletTemplate"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.wallet.walletTemplate')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="seller"
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.wallet.seller')} />}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="type"
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    select
                    fullWidth
                    label={t('forms.wallet.type')}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error ? t(fieldState.error.message ?? 'forms.required') : undefined}
                  >
                    <MenuItem value="CREDIT">{t('forms.wallet.credit')}</MenuItem>
                    <MenuItem value="DEBIT">{t('forms.wallet.debit')}</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="currency"
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.wallet.currency')} />}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="operationDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="datetime-local"
                    fullWidth
                    label={t('forms.wallet.operationDate')}
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="description"
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.wallet.description')} />}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="subscription"
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.wallet.subscription')} />}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="quantity"
                render={({ field }) => (
                  <TextField {...field} type="number" fullWidth label={t('forms.wallet.quantity')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="unitAmountWithoutTax"
                render={({ field }) => (
                  <TextField {...field} type="number" fullWidth label={t('forms.wallet.unitAmountWithoutTax')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="unitAmountWithTax"
                render={({ field }) => (
                  <TextField {...field} type="number" fullWidth label={t('forms.wallet.unitAmountWithTax')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="amountWithoutTax"
                render={({ field }) => (
                  <TextField {...field} type="number" fullWidth label={t('forms.wallet.amountWithoutTax')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="amountWithTax"
                render={({ field }) => (
                  <TextField {...field} type="number" fullWidth label={t('forms.wallet.amountWithTax')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="amountTax"
                render={({ field }) => (
                  <TextField {...field} type="number" fullWidth label={t('forms.wallet.amountTax')} />
                )}
              />
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="flex-end">
            <Button
              type="submit"
              variant="contained"
              startIcon={<SaveIcon />}
              disabled={!formState.isDirty || createMutation.isPending}
            >
              {t('actions.create')}
            </Button>
          </Box>
        </Stack>
      </CardContent>
      <Snackbar
        open={openSnack}
        autoHideDuration={4000}
        onClose={() => setOpenSnack(false)}
        message={t('feedback.saved')}
      />
    </Card>
  );
};
