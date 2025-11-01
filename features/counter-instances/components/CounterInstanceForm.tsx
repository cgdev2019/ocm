'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SaveIcon from '@mui/icons-material/Save';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Snackbar,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useCounterInstanceMutations } from '@/features/counter-instances/api';
import {
  counterInstanceFormSchema,
  type CounterInstanceFormSchema,
} from '@/features/counter-instances/schema';
import type { CounterInstanceFormValues, CounterPeriodFormValues } from '@/features/counter-instances/types';

const createEmptyPeriod = (): CounterPeriodFormValues => ({
  code: '',
  counterType: '',
  level: '',
  periodStartDate: '',
  periodEndDate: '',
  value: '',
  accumulator: false,
  accumulatorType: '',
  accumulatedValuesJson: '',
});

export const CounterInstanceForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<CounterInstanceFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: CounterInstanceFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, update } = useCounterInstanceMutations();
  const [formError, setFormError] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CounterInstanceFormSchema>({
    resolver: zodResolver(counterInstanceFormSchema),
    defaultValues: {
      id: defaultValues?.id,
      code: defaultValues?.code ?? '',
      counterTemplateCode: defaultValues?.counterTemplateCode ?? '',
      chargeInstanceCode: defaultValues?.chargeInstanceCode ?? '',
      productCode: defaultValues?.productCode ?? '',
      userAccountCode: defaultValues?.userAccountCode ?? '',
      customerAccountCode: defaultValues?.customerAccountCode ?? '',
      billingAccountCode: defaultValues?.billingAccountCode ?? '',
      subscriptionCode: defaultValues?.subscriptionCode ?? '',
      counterPeriods:
        defaultValues?.counterPeriods && defaultValues.counterPeriods.length > 0
          ? defaultValues.counterPeriods.map((period) => ({
              id: period.id,
              code: period.code ?? '',
              counterType: period.counterType ?? '',
              level: period.level ?? '',
              periodStartDate: period.periodStartDate ?? '',
              periodEndDate: period.periodEndDate ?? '',
              value: period.value ?? '',
              accumulator: period.accumulator ?? false,
              accumulatorType: period.accumulatorType ?? '',
              accumulatedValuesJson: period.accumulatedValuesJson ?? '',
            }))
          : [createEmptyPeriod()],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'counterPeriods',
  });

  const isPending = mode === 'create' ? create.isPending : update.isPending;

  const onSubmit = async (values: CounterInstanceFormSchema) => {
    setFormError(null);
    try {
      if (mode === 'create') {
        await create.mutateAsync(values);
      } else {
        await update.mutateAsync(values);
      }
      setSnackbarOpen(true);
      onSuccess?.(values);
    } catch (error) {
      if (error instanceof Error) {
        setFormError(error.message);
      } else {
        setFormError(t('forms.error'));
      }
    }
  };

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
      {(formError || create.isError || update.isError) && (
        <Alert severity="error">{formError ?? t('forms.error')}</Alert>
      )}
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
                    required
                    fullWidth
                    label={t('forms.counterInstance.code')}
                    error={Boolean(errors.code)}
                    helperText={
                      errors.code ? t(errors.code.message ?? 'forms.required') : undefined
                    }
                    InputProps={{ readOnly: mode === 'edit' }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="counterTemplateCode"
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label={t('forms.counterInstance.counterTemplateCode')}
                    error={Boolean(errors.counterTemplateCode)}
                    helperText={
                      errors.counterTemplateCode
                        ? t(errors.counterTemplateCode.message ?? 'forms.required')
                        : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="chargeInstanceCode"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label={t('forms.counterInstance.chargeInstanceCode')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="productCode"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label={t('forms.counterInstance.productCode')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="userAccountCode"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label={t('forms.counterInstance.userAccountCode')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="customerAccountCode"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label={t('forms.counterInstance.customerAccountCode')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="billingAccountCode"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label={t('forms.counterInstance.billingAccountCode')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="subscriptionCode"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label={t('forms.counterInstance.subscriptionCode')}
                  />
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{t('forms.counterInstance.counterPeriods')}</Typography>
          <Button
            variant="outlined"
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => append(createEmptyPeriod())}
          >
            {t('forms.counterInstance.addPeriod')}
          </Button>
        </Stack>

        {fields.map((fieldItem, index) => (
          <Card key={fieldItem.id ?? index}>
            <CardContent>
              <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="subtitle1">
                    {t('forms.counterInstance.counterPeriods')} #{index + 1}
                  </Typography>
                  <IconButton
                    aria-label={t('forms.counterInstance.removePeriod')}
                    onClick={() => remove(index)}
                    disabled={fields.length <= 1}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </Stack>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Controller
                      control={control}
                      name={`counterPeriods.${index}.code`}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label={t('forms.counterInstance.code')}
                        />
                      )}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Controller
                      control={control}
                      name={`counterPeriods.${index}.counterType`}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          select
                          fullWidth
                          label={t('forms.counterInstance.counterType')}
                          SelectProps={{ native: true }}
                        >
                          <option value="">—</option>
                          <option value="USAGE">USAGE</option>
                          <option value="NOTIFICATION">NOTIFICATION</option>
                          <option value="USAGE_AMOUNT">USAGE_AMOUNT</option>
                        </TextField>
                      )}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Controller
                      control={control}
                      name={`counterPeriods.${index}.level`}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label={t('forms.counterInstance.level')}
                        />
                      )}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Controller
                      control={control}
                      name={`counterPeriods.${index}.periodStartDate`}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label={t('forms.counterInstance.periodStartDate')}
                        />
                      )}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Controller
                      control={control}
                      name={`counterPeriods.${index}.periodEndDate`}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label={t('forms.counterInstance.periodEndDate')}
                        />
                      )}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Controller
                      control={control}
                      name={`counterPeriods.${index}.value`}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label={t('forms.counterInstance.value')}
                        />
                      )}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Controller
                      control={control}
                      name={`counterPeriods.${index}.accumulator`}
                      render={({ field }) => (
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Switch
                            {...field}
                            checked={Boolean(field.value)}
                            onChange={(event) => field.onChange(event.target.checked)}
                          />
                          <Typography>{t('forms.counterInstance.accumulator')}</Typography>
                        </Stack>
                      )}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Controller
                      control={control}
                      name={`counterPeriods.${index}.accumulatorType`}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          select
                          fullWidth
                          label={t('forms.counterInstance.accumulatorType')}
                          SelectProps={{ native: true }}
                        >
                          <option value="">—</option>
                          <option value="SINGLE_VALUE">SINGLE_VALUE</option>
                          <option value="MULTI_VALUE">MULTI_VALUE</option>
                        </TextField>
                      )}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Controller
                      control={control}
                      name={`counterPeriods.${index}.accumulatedValuesJson`}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          multiline
                          minRows={3}
                          label={t('forms.counterInstance.accumulatedValues')}
                          error={Boolean(
                            errors.counterPeriods?.[index]?.accumulatedValuesJson,
                          )}
                          helperText={
                            errors.counterPeriods?.[index]?.accumulatedValuesJson
                              ? t(
                                  errors.counterPeriods?.[index]?.accumulatedValuesJson
                                    .message ?? 'forms.counterInstance.invalidAccumulatedValues',
                                )
                              : t('forms.counterInstance.accumulatedValuesHint')
                          }
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>

      <Box display="flex" justifyContent="flex-end">
        <Button
          type="submit"
          variant="contained"
          startIcon={<SaveIcon />}
          disabled={isPending || isSubmitting}
        >
          {mode === 'create'
            ? t('forms.counterInstance.create')
            : t('forms.counterInstance.update')}
        </Button>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        message={t('forms.counterInstance.formSaved')}
      />
    </Stack>
  );
};
