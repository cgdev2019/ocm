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
import { useCurrencyMutations } from '@/features/currency/api';
import { currencyFormSchema, type CurrencyFormSchema } from '@/features/currency/schema';
import type { CurrencyFormValues } from '@/features/currency/types';

export const CurrencyForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<CurrencyFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: CurrencyFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, upsert } = useCurrencyMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<CurrencyFormSchema>({
    resolver: zodResolver(currencyFormSchema),
    defaultValues: {
      code: '',
      disabled: false,
      ...defaultValues,
    },
  });

  const onSubmit = async (values: CurrencyFormSchema) => {
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
                    label={t('forms.currency.code')}
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
                  <TextField {...field} label={t('forms.currency.description')} fullWidth />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="symbol"
                render={({ field }) => (
                  <TextField {...field} label={t('forms.currency.symbol')} fullWidth />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="decimalPlaces"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="number"
                    label={t('forms.currency.decimalPlaces')}
                    fullWidth
                    error={Boolean(errors.decimalPlaces)}
                    helperText={errors.decimalPlaces ? t(errors.decimalPlaces.message ?? 'forms.invalidNumber') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="prCurrencyToThis"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="number"
                    label={t('forms.currency.prCurrencyToThis')}
                    fullWidth
                    error={Boolean(errors.prCurrencyToThis)}
                    helperText={
                      errors.prCurrencyToThis ? t(errors.prCurrencyToThis.message ?? 'forms.invalidNumber') : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name="disabled"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={Boolean(field.value)} />}
                    label={t('forms.currency.disabled')}
                  />
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Box>
        <Button type="submit" variant="contained" startIcon={<SaveIcon />} disabled={!isDirty || isPending}>
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
