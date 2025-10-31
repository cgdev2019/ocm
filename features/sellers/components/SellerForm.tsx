'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Snackbar,
  Stack,
  TextField,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSellerMutations } from '@/features/sellers/api';
import { sellerFormSchema, type SellerFormSchema } from '@/features/sellers/schema';
import type { SellerFormValues } from '@/features/sellers/types';

export const SellerForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<SellerFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: SellerFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, upsert } = useSellerMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<SellerFormSchema>({
    resolver: zodResolver(sellerFormSchema),
    defaultValues: {
      code: '',
      ...defaultValues,
    },
  });

  const onSubmit = async (values: SellerFormSchema) => {
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
                    label={t('forms.seller.code')}
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
                  <TextField {...field} fullWidth label={t('forms.seller.description')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="currencyCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.seller.currencyCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="countryCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.seller.countryCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="languageCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.seller.languageCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="parentSeller"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.seller.parentSeller')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="vatNo"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.seller.vatNo')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="registrationNo"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.seller.registrationNo')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="legalType"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.seller.legalType')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name="legalText"
                render={({ field }) => (
                  <TextField {...field} fullWidth multiline minRows={3} label={t('forms.seller.legalText')} />
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
                    fullWidth
                    label={t('forms.seller.email')}
                    error={Boolean(errors.email)}
                    helperText={errors.email ? t(errors.email.message ?? 'forms.invalidEmail') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="phone"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.seller.phone')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="address1"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.seller.address1')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="address2"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.seller.address2')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="city"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.seller.city')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="zipCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.seller.zipCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="state"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.seller.state')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="addressCountry"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.seller.addressCountry')} />
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
