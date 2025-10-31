'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  MenuItem,
  Snackbar,
  Stack,
  Switch,
  TextField,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useBillingCycleMutations } from '@/features/billing-cycles/api';
import {
  billingCycleFormSchema,
  type BillingCycleFormSchema,
} from '@/features/billing-cycles/schema';
import type { BillingCycleFormValues } from '@/features/billing-cycles/types';

const TYPE_OPTIONS: Array<{ value: NonNullable<BillingCycleFormValues['type']>; label: string }> = [
  { value: 'BILLINGACCOUNT', label: 'forms.billingCycle.types.billingAccount' },
  { value: 'SUBSCRIPTION', label: 'forms.billingCycle.types.subscription' },
  { value: 'ORDER', label: 'forms.billingCycle.types.order' },
];

const REFERENCE_DATE_OPTIONS: Array<{
  value: NonNullable<BillingCycleFormValues['referenceDate']>;
  label: string;
}> = [
  { value: 'TODAY', label: 'forms.billingCycle.referenceDates.today' },
  { value: 'NEXT_INVOICE_DATE', label: 'forms.billingCycle.referenceDates.nextInvoiceDate' },
  { value: 'LAST_TRANSACTION_DATE', label: 'forms.billingCycle.referenceDates.lastTransactionDate' },
  { value: 'END_DATE', label: 'forms.billingCycle.referenceDates.endDate' },
];

export const BillingCycleForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<BillingCycleFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: BillingCycleFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, upsert } = useBillingCycleMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<BillingCycleFormSchema>({
    resolver: zodResolver(billingCycleFormSchema),
    defaultValues: {
      code: '',
      calendar: '',
      invoiceDateDelayEL: '',
      computeDatesAtValidation: false,
      ...defaultValues,
    },
  });

  const onSubmit = async (values: BillingCycleFormSchema) => {
    if (mode === 'create') {
      await create.mutateAsync(values);
    } else {
      await upsert.mutateAsync(values);
    }
    setOpenSnack(true);
    onSuccess?.(values);
  };

  const isPending = mode === 'create' ? create.isPending : upsert.isPending;

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
      {(create.isError || upsert.isError) ? <Alert severity="error">{t('forms.error')}</Alert> : null}
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
                    label={t('forms.billingCycle.code')}
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
                  <TextField {...field} label={t('forms.billingCycle.description')} fullWidth />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="calendar"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.billingCycle.calendar')}
                    required
                    fullWidth
                    error={Boolean(errors.calendar)}
                    helperText={errors.calendar ? t(errors.calendar.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="invoiceDateDelayEL"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.billingCycle.invoiceDateDelayEL')}
                    required
                    fullWidth
                    error={Boolean(errors.invoiceDateDelayEL)}
                    helperText={
                      errors.invoiceDateDelayEL ? t(errors.invoiceDateDelayEL.message ?? 'forms.required') : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="invoiceDateDelay"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="number"
                    label={t('forms.billingCycle.invoiceDateDelay')}
                    fullWidth
                    error={Boolean(errors.invoiceDateDelay)}
                    helperText={
                      errors.invoiceDateDelay
                        ? t(errors.invoiceDateDelay.message ?? 'forms.invalidNumber')
                        : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="dueDateDelay"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="number"
                    label={t('forms.billingCycle.dueDateDelay')}
                    fullWidth
                    error={Boolean(errors.dueDateDelay)}
                    helperText={
                      errors.dueDateDelay ? t(errors.dueDateDelay.message ?? 'forms.invalidNumber') : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="dueDateDelayEL"
                render={({ field }) => (
                  <TextField {...field} label={t('forms.billingCycle.dueDateDelayEL')} fullWidth />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="type"
                render={({ field }) => (
                  <TextField {...field} select label={t('forms.billingCycle.type')} fullWidth>
                    {TYPE_OPTIONS.map((option) => (
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
                name="referenceDate"
                render={({ field }) => (
                  <TextField {...field} select label={t('forms.billingCycle.referenceDate')} fullWidth>
                    {REFERENCE_DATE_OPTIONS.map((option) => (
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
                name="invoicingThreshold"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="number"
                    label={t('forms.billingCycle.invoicingThreshold')}
                    fullWidth
                    error={Boolean(errors.invoicingThreshold)}
                    helperText={
                      errors.invoicingThreshold
                        ? t(errors.invoicingThreshold.message ?? 'forms.invalidNumber')
                        : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="computeDatesAtValidation"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={Boolean(field.value)} />}
                    label={t('forms.billingCycle.computeDatesAtValidation')}
                  />
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Box>
        <Button
          type="submit"
          variant="contained"
          startIcon={<SaveIcon />}
          disabled={!isDirty || isPending}
        >
          {t('actions.save')}
        </Button>
      </Box>
      <Snackbar
        autoHideDuration={4000}
        open={openSnack}
        onClose={() => setOpenSnack(false)}
        message={t('feedback.saved')}
      />
    </Stack>
  );
};
