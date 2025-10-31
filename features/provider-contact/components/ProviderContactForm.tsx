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
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useProviderContactMutations } from '@/features/provider-contact/api';
import {
  providerContactFormSchema,
  type ProviderContactFormSchema,
} from '@/features/provider-contact/schema';
import type { ProviderContactFormValues } from '@/features/provider-contact/types';

export const ProviderContactForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<ProviderContactFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: ProviderContactFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, upsert } = useProviderContactMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ProviderContactFormSchema>({
    resolver: zodResolver(providerContactFormSchema),
    defaultValues: {
      code: '',
      ...defaultValues,
    },
  });

  const onSubmit = async (values: ProviderContactFormSchema) => {
    if (mode === 'create') {
      await create.mutateAsync(values);
    } else {
      await upsert.mutateAsync(values);
    }
    setOpenSnack(true);
    onSuccess?.(values);
  };

  const mutation = mode === 'create' ? create : upsert;

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
      {mutation.isError ? <Alert severity="error">{t('forms.error')}</Alert> : null}
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
                    label={t('forms.providerContact.code')}
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
                  <TextField {...field} fullWidth label={t('forms.providerContact.description')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="firstName"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.providerContact.firstName')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="lastName"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.providerContact.lastName')} />
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
                    label={t('forms.providerContact.email')}
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
                  <TextField {...field} fullWidth label={t('forms.providerContact.phone')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="mobile"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.providerContact.mobile')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="fax"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.providerContact.fax')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="genericMail"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label={t('forms.providerContact.genericMail')}
                    error={Boolean(errors.genericMail)}
                    helperText={errors.genericMail ? t(errors.genericMail.message ?? 'forms.invalidEmail') : undefined}
                  />
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {t('forms.providerContact.address1')}
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="address1"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.providerContact.address1')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="address2"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.providerContact.address2')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="address3"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.providerContact.address3')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="address4"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.providerContact.address4')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="address5"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.providerContact.address5')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="zipCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.providerContact.zipCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="city"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.providerContact.city')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="country"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.providerContact.country')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="state"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.providerContact.state')} />
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Box>
        <Button type="submit" variant="contained" startIcon={<SaveIcon />} disabled={mutation.isPending || (!isDirty && mode === 'edit')}>
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
