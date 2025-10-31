'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  MenuItem,
  Snackbar,
  Stack,
  Switch,
  TextField,
  FormControlLabel,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSubscriptionMutations } from '@/features/subscriptions/api';
import { subscriptionFormSchema, type SubscriptionFormSchema } from '@/features/subscriptions/schema';
import type { SubscriptionFormValues } from '@/features/subscriptions/types';

const STATUS_OPTIONS: Array<{ value: NonNullable<SubscriptionFormValues['status']>; label: string }> = [
  { value: 'CREATED', label: 'forms.subscription.statuses.CREATED' },
  { value: 'ACTIVE', label: 'forms.subscription.statuses.ACTIVE' },
  { value: 'CANCELED', label: 'forms.subscription.statuses.CANCELED' },
  { value: 'RESILIATED', label: 'forms.subscription.statuses.RESILIATED' },
  { value: 'CLOSED', label: 'forms.subscription.statuses.CLOSED' },
  { value: 'SUSPENDED', label: 'forms.subscription.statuses.SUSPENDED' },
  { value: 'PENDING', label: 'forms.subscription.statuses.PENDING' },
];

export const SubscriptionForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<SubscriptionFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: SubscriptionFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, update } = useSubscriptionMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<SubscriptionFormSchema>({
    resolver: zodResolver(subscriptionFormSchema),
    defaultValues: {
      code: '',
      description: '',
      versionNumber: defaultValues?.versionNumber ?? 1,
      userAccount: '',
      offerTemplate: '',
      subscriptionDate: '',
      terminationDate: undefined,
      endAgreementDate: undefined,
      validityDate: undefined,
      status: undefined,
      billingCycle: '',
      seller: '',
      autoEndOfEngagement: false,
      renewed: false,
      renewalNotifiedDate: undefined,
      email: undefined,
      ...defaultValues,
    },
  });

  const onSubmit = async (values: SubscriptionFormSchema) => {
    if (mode === 'create') {
      await create.mutateAsync(values);
    } else {
      await update.mutateAsync(values);
    }
    setOpenSnack(true);
    onSuccess?.(values);
  };

  const isPending = mode === 'create' ? create.isPending : update.isPending;
  const hasError = create.isError || update.isError;

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
      {hasError ? <Alert severity="error">{t('forms.error')}</Alert> : null}
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="code"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.subscription.code')}
                    required
                    fullWidth
                    error={Boolean(errors.code)}
                    helperText={errors.code ? t(errors.code.message ?? 'forms.required') : undefined}
                    InputProps={{ readOnly: mode === 'edit' }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="description"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.subscription.description')}
                    fullWidth
                    value={field.value ?? ''}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="versionNumber"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="number"
                    label={t('forms.subscription.versionNumber')}
                    required
                    fullWidth
                    value={field.value ?? ''}
                    onChange={(event) => {
                      const value = event.target.value;
                      field.onChange(value === '' ? '' : Number(value));
                    }}
                    error={Boolean(errors.versionNumber)}
                    helperText={
                      errors.versionNumber
                        ? t(errors.versionNumber.message ?? 'forms.invalidNumber')
                        : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="userAccount"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.subscription.userAccount')}
                    required
                    fullWidth
                    error={Boolean(errors.userAccount)}
                    helperText={errors.userAccount ? t(errors.userAccount.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="offerTemplate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.subscription.offerTemplate')}
                    required
                    fullWidth
                    error={Boolean(errors.offerTemplate)}
                    helperText={
                      errors.offerTemplate ? t(errors.offerTemplate.message ?? 'forms.required') : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="subscriptionDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="datetime-local"
                    label={t('forms.subscription.subscriptionDate')}
                    required
                    fullWidth
                    value={field.value ?? ''}
                    error={Boolean(errors.subscriptionDate)}
                    helperText={
                      errors.subscriptionDate ? t(errors.subscriptionDate.message ?? 'forms.required') : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="terminationDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="datetime-local"
                    label={t('forms.subscription.terminationDate')}
                    fullWidth
                    value={field.value ?? ''}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="endAgreementDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="datetime-local"
                    label={t('forms.subscription.endAgreementDate')}
                    fullWidth
                    value={field.value ?? ''}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="validityDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="datetime-local"
                    label={t('forms.subscription.validityDate')}
                    fullWidth
                    value={field.value ?? ''}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="status"
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    label={t('forms.subscription.status')}
                    fullWidth
                    value={field.value ?? ''}
                  >
                    <MenuItem value="">
                      <em>{t('forms.subscription.noStatus')}</em>
                    </MenuItem>
                    {STATUS_OPTIONS.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {t(option.label)}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="billingCycle"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.subscription.billingCycle')}
                    required
                    fullWidth
                    error={Boolean(errors.billingCycle)}
                    helperText={
                      errors.billingCycle ? t(errors.billingCycle.message ?? 'forms.required') : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="seller"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.subscription.seller')}
                    required
                    fullWidth
                    error={Boolean(errors.seller)}
                    helperText={errors.seller ? t(errors.seller.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="renewalNotifiedDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="datetime-local"
                    label={t('forms.subscription.renewalNotifiedDate')}
                    fullWidth
                    value={field.value ?? ''}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="email"
                    label={t('forms.subscription.email')}
                    fullWidth
                    value={field.value ?? ''}
                    error={Boolean(errors.email)}
                    helperText={errors.email ? t(errors.email.message ?? 'forms.invalidEmail') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="autoEndOfEngagement"
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Switch
                        {...field}
                        checked={Boolean(field.value)}
                        onChange={(event) => field.onChange(event.target.checked)}
                      />
                    }
                    label={t('forms.subscription.autoEndOfEngagement')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="renewed"
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Switch
                        {...field}
                        checked={Boolean(field.value)}
                        onChange={(event) => field.onChange(event.target.checked)}
                      />
                    }
                    label={t('forms.subscription.renewed')}
                  />
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Box display="flex" justifyContent="flex-end">
        <Button
          type="submit"
          variant="contained"
          startIcon={<SaveIcon />}
          disabled={isPending || (!isDirty && mode === 'edit')}
        >
          {t('actions.save')}
        </Button>
      </Box>
      <Snackbar
        open={openSnack}
        autoHideDuration={4000}
        onClose={() => setOpenSnack(false)}
        message={t('forms.success')}
      />
    </Stack>
  );
};
