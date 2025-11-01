'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import EventAvailableIcon from '@mui/icons-material/EventAvailableOutlined';
import EventBusyIcon from '@mui/icons-material/EventBusyOutlined';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import VerifiedIcon from '@mui/icons-material/VerifiedOutlined';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useWalletReservationMutations } from '@/features/wallet/api';
import { walletReservationFormSchema, type WalletReservationFormSchema } from '@/features/wallet/schema';

export const WalletReservationForm = () => {
  const t = useTranslations();
  const { create, update, cancel, confirm } = useWalletReservationMutations();
  const [snackbar, setSnackbar] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { control, handleSubmit, reset, watch } = useForm<WalletReservationFormSchema>({
    defaultValues: {
      reservationId: undefined,
      providerCode: '',
      sellerCode: '',
      offerCode: '',
      userAccountCode: '',
      subscriptionDate: '',
      expirationDate: '',
      terminationDate: '',
      creditLimit: undefined,
      param1: '',
      param2: '',
      param3: '',
      amountWithTax: false,
    },
    resolver: zodResolver(walletReservationFormSchema),
  });

  const handleAction = (action: 'create' | 'update' | 'confirm' | 'cancel') =>
    handleSubmit(async (values) => {
      try {
        const parsed = walletReservationFormSchema.parse(values);
        if (action === 'cancel') {
          if (parsed.reservationId === undefined) {
            setErrorMessage(t('forms.wallet.reservationIdRequired'));
            return;
          }
          await cancel.mutateAsync(parsed.reservationId);
        } else if (action === 'create') {
          await create.mutateAsync(parsed);
        } else if (action === 'update') {
          await update.mutateAsync(parsed);
        } else {
          await confirm.mutateAsync(parsed);
        }
        setSnackbar(t('feedback.saved'));
      } catch (error) {
        setErrorMessage(t('forms.error'));
      }
    });

  const isPending = create.isPending || update.isPending || cancel.isPending || confirm.isPending;

  return (
    <Card>
      <CardContent>
        <Stack spacing={3}>
          <Typography variant="h6">{t('forms.wallet.reservationTitle')}</Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="reservationId"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="number"
                    fullWidth
                    label={t('forms.wallet.reservationId')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="userAccountCode"
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
                name="offerCode"
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.wallet.offerCode')} />}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="providerCode"
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.wallet.providerCode')} />}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="sellerCode"
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.wallet.seller')} />}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="subscriptionDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="date"
                    fullWidth
                    label={t('forms.wallet.subscriptionDate')}
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="expirationDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="date"
                    fullWidth
                    label={t('forms.wallet.expirationDate')}
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="terminationDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="date"
                    fullWidth
                    label={t('forms.wallet.terminationDate')}
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="creditLimit"
                render={({ field }) => (
                  <TextField {...field} type="number" fullWidth label={t('forms.wallet.creditLimit')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="param1"
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.wallet.param1')} />}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="param2"
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.wallet.param2')} />}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="param3"
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.wallet.param3')} />}
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
                    value={field.value ? 'true' : 'false'}
                    onChange={(event) => field.onChange(event.target.value === 'true')}
                  >
                    <option value="true">{t('common.yes')}</option>
                    <option value="false">{t('common.no')}</option>
                  </TextField>
                )}
              />
            </Grid>
          </Grid>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} justifyContent="flex-end">
            <Button variant="outlined" onClick={() => reset()} disabled={isPending}>
              {t('actions.reset')}
            </Button>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={() => handleAction('create')()}
              disabled={isPending}
            >
              {t('actions.create')}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<EventAvailableIcon />}
              onClick={() => handleAction('update')()}
              disabled={isPending}
            >
              {t('actions.update')}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<VerifiedIcon />}
              onClick={() => handleAction('confirm')()}
              disabled={isPending}
            >
              {t('forms.wallet.confirmReservation')}
            </Button>
            <Button
              variant="outlined"
              color="error"
              startIcon={<EventBusyIcon />}
              onClick={() => handleAction('cancel')()}
              disabled={isPending || !watch('reservationId')}
            >
              {t('actions.cancel')}
            </Button>
          </Stack>
        </Stack>
      </CardContent>
      <Snackbar
        open={Boolean(snackbar)}
        autoHideDuration={4000}
        onClose={() => setSnackbar(null)}
        message={snackbar ?? ''}
      />
      <Snackbar
        open={Boolean(errorMessage)}
        autoHideDuration={4000}
        onClose={() => setErrorMessage(null)}
        message={errorMessage ?? ''}
      />
      {(create.isError || update.isError || cancel.isError || confirm.isError) && (
        <Box sx={{ px: 3, pb: 3 }}>
          <Alert severity="error">{t('forms.error')}</Alert>
        </Box>
      )}
    </Card>
  );
};
