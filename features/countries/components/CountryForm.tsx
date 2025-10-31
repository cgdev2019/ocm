'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import { Alert, Box, Button, Card, CardContent, FormControlLabel, Snackbar, Stack, Switch, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useCountryMutations } from '@/features/countries/api';
import { countryFormSchema, type CountryFormSchema } from '@/features/countries/schema';
import type { CountryFormValues } from '@/features/countries/types';

export const CountryForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<CountryFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: CountryFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, upsert } = useCountryMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<CountryFormSchema>({
    resolver: zodResolver(countryFormSchema),
    defaultValues: {
      countryCode: '',
      currencyCode: '',
      disabled: false,
      ...defaultValues,
    },
  });

  const onSubmit = async (values: CountryFormSchema) => {
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
                name="countryCode"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.country.countryCode')}
                    required
                    fullWidth
                    error={Boolean(errors.countryCode)}
                    helperText={errors.countryCode ? t(errors.countryCode.message ?? 'forms.required') : undefined}
                    InputProps={{ readOnly: mode === 'edit' }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="name"
                render={({ field }) => (
                  <TextField {...field} label={t('forms.country.name')} fullWidth />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="currencyCode"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.country.currencyCode')}
                    required
                    fullWidth
                    error={Boolean(errors.currencyCode)}
                    helperText={errors.currencyCode ? t(errors.currencyCode.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="languageCode"
                render={({ field }) => (
                  <TextField {...field} label={t('forms.country.languageCode')} fullWidth />
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
                    label={t('forms.country.disabled')}
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
