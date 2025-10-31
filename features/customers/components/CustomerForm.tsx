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
import { useCustomerMutations } from '@/features/customers/api';
import { customerFormSchema, type CustomerFormSchema } from '@/features/customers/schema';
import type { CustomerFormValues } from '@/features/customers/types';

export const CustomerForm = ({
  defaultValues,
  onSuccess,
}: {
  defaultValues?: Partial<CustomerFormValues>;
  onSuccess?: (values: CustomerFormSchema) => void;
}) => {
  const t = useTranslations();
  const { upsert } = useCustomerMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<CustomerFormSchema>({
    resolver: zodResolver(customerFormSchema),
    defaultValues: {
      code: '',
      customerCategory: '',
      ...defaultValues,
    },
  });

  const onSubmit = async (values: CustomerFormSchema) => {
    await upsert.mutateAsync(values);
    setOpenSnack(true);
    onSuccess?.(values);
  };

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
      {upsert.isError ? <Alert severity="error">{t('forms.error')}</Alert> : null}
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
                    label={t('forms.customer.code')}
                    required
                    fullWidth
                    error={Boolean(errors.code)}
                    helperText={errors.code ? t(errors.code.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="customerCategory"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.customer.category')}
                    required
                    fullWidth
                    error={Boolean(errors.customerCategory)}
                    helperText={
                      errors.customerCategory
                        ? t(errors.customerCategory.message ?? 'forms.required')
                        : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="customerBrand"
                render={({ field }) => (
                  <TextField {...field} label={t('forms.customer.brand')} fullWidth />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="seller"
                render={({ field }) => (
                  <TextField {...field} label={t('forms.customer.seller')} fullWidth />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name="description"
                render={({ field }) => (
                  <TextField {...field} label={t('forms.customer.description')} fullWidth multiline rows={2} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="vatNo"
                render={({ field }) => (
                  <TextField {...field} label={t('forms.customer.vatNo')} fullWidth />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="registrationNo"
                render={({ field }) => (
                  <TextField {...field} label={t('forms.customer.registrationNo')} fullWidth />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="contactEmail"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.customer.email')}
                    fullWidth
                    error={Boolean(errors.contactEmail)}
                    helperText={
                      errors.contactEmail
                        ? t(errors.contactEmail.message ?? 'forms.invalidEmail')
                        : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="contactPhone"
                render={({ field }) => (
                  <TextField {...field} label={t('forms.customer.phone')} fullWidth />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="address1"
                render={({ field }) => (
                  <TextField {...field} label={t('forms.customer.street')} fullWidth />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                control={control}
                name="city"
                render={({ field }) => (
                  <TextField {...field} label={t('forms.customer.city')} fullWidth />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                control={control}
                name="country"
                render={({ field }) => (
                  <TextField {...field} label={t('forms.customer.country')} fullWidth />
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
          disabled={!isDirty || upsert.isPending}
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
