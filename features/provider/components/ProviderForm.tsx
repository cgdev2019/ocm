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
import { useProviderMutations } from '@/features/provider/api';
import { providerFormSchema, type ProviderFormSchema } from '@/features/provider/schema';
import type { ProviderFormValues } from '@/features/provider/types';

export const ProviderForm = ({ defaultValues }: { defaultValues?: ProviderFormValues }) => {
  const t = useTranslations();
  const { update } = useProviderMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isDirty, errors },
  } = useForm<ProviderFormSchema>({
    resolver: zodResolver(providerFormSchema),
    defaultValues: {
      multiCurrency: false,
      multiCountry: false,
      multiLanguage: false,
      enterprise: false,
      recognizeRevenue: false,
      ...defaultValues,
    },
  });

  const onSubmit = async (values: ProviderFormSchema) => {
    await update.mutateAsync(values);
    setOpenSnack(true);
  };

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
      {update.isError ? <Alert severity="error">{t('forms.error')}</Alert> : null}
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
                    fullWidth
                    label={t('forms.provider.code')}
                    InputProps={{ readOnly: true }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="description"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.provider.description')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="currency"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.provider.currency')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="country"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.provider.country')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="language"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.provider.language')} />
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
                    fullWidth
                    label={t('forms.provider.email')}
                    error={Boolean(errors.email)}
                    helperText={errors.email ? t(errors.email.message ?? 'forms.invalidEmail') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="discountAccountingCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.provider.discountAccountingCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="rounding"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="number"
                    label={t('forms.provider.rounding')}
                    value={field.value ?? ''}
                    onChange={(event) => {
                      const value = event.target.value;
                      field.onChange(value === '' ? undefined : Number(value));
                    }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="roundingMode"
                render={({ field }) => (
                  <TextField {...field} select fullWidth label={t('forms.provider.roundingMode')}>
                    <MenuItem value="NEAREST">{t('forms.provider.roundingModes.nearest')}</MenuItem>
                    <MenuItem value="DOWN">{t('forms.provider.roundingModes.down')}</MenuItem>
                    <MenuItem value="UP">{t('forms.provider.roundingModes.up')}</MenuItem>
                    <MenuItem value="HALF_EVEN">{t('forms.provider.roundingModes.halfEven')}</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="invoiceRounding"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="number"
                    label={t('forms.provider.invoiceRounding')}
                    value={field.value ?? ''}
                    onChange={(event) => {
                      const value = event.target.value;
                      field.onChange(value === '' ? undefined : Number(value));
                    }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="invoiceRoundingMode"
                render={({ field }) => (
                  <TextField {...field} select fullWidth label={t('forms.provider.invoiceRoundingMode')}>
                    <MenuItem value="NEAREST">{t('forms.provider.roundingModes.nearest')}</MenuItem>
                    <MenuItem value="DOWN">{t('forms.provider.roundingModes.down')}</MenuItem>
                    <MenuItem value="UP">{t('forms.provider.roundingModes.up')}</MenuItem>
                    <MenuItem value="HALF_EVEN">{t('forms.provider.roundingModes.halfEven')}</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="multiCurrency"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={Boolean(field.value)} />}
                    label={t('forms.provider.multiCurrency')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="multiCountry"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={Boolean(field.value)} />}
                    label={t('forms.provider.multiCountry')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="multiLanguage"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={Boolean(field.value)} />}
                    label={t('forms.provider.multiLanguage')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="enterprise"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={Boolean(field.value)} />}
                    label={t('forms.provider.enterprise')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="recognizeRevenue"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={Boolean(field.value)} />}
                    label={t('forms.provider.recognizeRevenue')}
                  />
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Box>
        <Button type="submit" variant="contained" startIcon={<SaveIcon />} disabled={!isDirty || update.isPending}>
          {t('actions.save')}
        </Button>
      </Box>
      <Snackbar
        open={openSnack}
        autoHideDuration={4000}
        onClose={() => setOpenSnack(false)}
        message={t('feedback.saved')}
      />
    </Stack>
  );
};
