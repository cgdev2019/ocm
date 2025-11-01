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
  Snackbar,
  Stack,
  Switch,
  TextField,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useAccountingPeriodMutations } from '@/features/accounting-periods/api';
import {
  accountingPeriodFormSchema,
  type AccountingPeriodFormSchema,
} from '@/features/accounting-periods/schema';
import type { AccountingPeriodFormValues } from '@/features/accounting-periods/types';

export const AccountingPeriodForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<AccountingPeriodFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: AccountingPeriodFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, update } = useAccountingPeriodMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<AccountingPeriodFormSchema>({
    resolver: zodResolver(accountingPeriodFormSchema),
    defaultValues: {
      fiscalYear: '',
      useSubAccountingPeriods: false,
      startDate: undefined,
      endDate: undefined,
      ...defaultValues,
    },
  });

  const onSubmit = async (values: AccountingPeriodFormSchema) => {
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
                name="fiscalYear"
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={field.value ?? ''}
                    label={t('forms.accountingPeriod.fiscalYear')}
                    required
                    fullWidth
                    error={Boolean(errors.fiscalYear)}
                    helperText={
                      errors.fiscalYear ? t(errors.fiscalYear.message ?? 'forms.required') : undefined
                    }
                    InputProps={{ readOnly: mode === 'edit' }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="startDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={field.value ?? ''}
                    type="datetime-local"
                    label={t('forms.accountingPeriod.startDate')}
                    fullWidth
                    InputLabelProps={{ shrink: Boolean(field.value) }}
                    error={Boolean(errors.startDate)}
                    helperText={errors.startDate ? t(errors.startDate.message ?? 'forms.invalidDate') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="endDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={field.value ?? ''}
                    type="datetime-local"
                    label={t('forms.accountingPeriod.endDate')}
                    fullWidth
                    InputLabelProps={{ shrink: Boolean(field.value) }}
                    error={Boolean(errors.endDate)}
                    helperText={errors.endDate ? t(errors.endDate.message ?? 'forms.invalidDate') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="subAccountingPeriodType"
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={field.value ?? ''}
                    label={t('forms.accountingPeriod.subAccountingPeriodType')}
                    fullWidth
                    error={Boolean(errors.subAccountingPeriodType)}
                    helperText={
                      errors.subAccountingPeriodType
                        ? t(errors.subAccountingPeriodType.message ?? 'forms.required')
                        : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="regularUserLockOption"
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={field.value ?? ''}
                    label={t('forms.accountingPeriod.regularUserLockOption')}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="customLockNumberDays"
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={field.value ?? ''}
                    type="number"
                    label={t('forms.accountingPeriod.customLockNumberDays')}
                    fullWidth
                    error={Boolean(errors.customLockNumberDays)}
                    helperText={
                      errors.customLockNumberDays
                        ? t(errors.customLockNumberDays.message ?? 'forms.invalidNumber')
                        : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="customLockOption"
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={field.value ?? ''}
                    label={t('forms.accountingPeriod.customLockOption')}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="forceCustomDay"
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={field.value ?? ''}
                    type="number"
                    label={t('forms.accountingPeriod.forceCustomDay')}
                    fullWidth
                    error={Boolean(errors.forceCustomDay)}
                    helperText={
                      errors.forceCustomDay
                        ? t(errors.forceCustomDay.message ?? 'forms.invalidNumber')
                        : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="forceOption"
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={field.value ?? ''}
                    label={t('forms.accountingPeriod.forceOption')}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="accountingOperationAction"
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={field.value ?? ''}
                    label={t('forms.accountingPeriod.accountingOperationAction')}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="useSubAccountingPeriods"
                render={({ field }) => (
                  <Box display="flex" alignItems="center" height="100%">
                    <FormControlLabel
                      control={
                        <Switch
                          checked={Boolean(field.value)}
                          onChange={(event) => field.onChange(event.target.checked)}
                          name={field.name}
                          inputRef={field.ref}
                        />
                      }
                      label={t('forms.accountingPeriod.useSubAccountingPeriods')}
                    />
                  </Box>
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Stack direction="row" justifyContent="flex-end" spacing={2}>
        <Button
          type="submit"
          variant="contained"
          startIcon={<SaveIcon />}
          disabled={isPending || (mode === 'edit' && !isDirty)}
        >
          {t('actions.save')}
        </Button>
      </Stack>
      <Snackbar
        open={openSnack}
        autoHideDuration={3000}
        onClose={() => setOpenSnack(false)}
        message={t('forms.saved')}
      />
    </Stack>
  );
};
