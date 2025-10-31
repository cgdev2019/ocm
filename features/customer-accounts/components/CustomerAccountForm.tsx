'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import { Alert, Box, Button, Card, CardContent, Snackbar, Stack, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useCustomerAccountMutations } from '@/features/customer-accounts/api';
import { customerAccountFormSchema, type CustomerAccountFormSchema } from '@/features/customer-accounts/schema';
import type { CustomerAccountFormValues } from '@/features/customer-accounts/types';

export const CustomerAccountForm = ({
  defaultValues,
  onSuccess,
}: {
  defaultValues?: Partial<CustomerAccountFormValues>;
  onSuccess?: (values: CustomerAccountFormSchema) => void;
}) => {
  const t = useTranslations();
  const { upsert } = useCustomerAccountMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<CustomerAccountFormSchema>({
    resolver: zodResolver(customerAccountFormSchema),
    defaultValues: {
      code: '',
      customer: '',
      currency: '',
      language: '',
      ...defaultValues,
    },
  });

  const onSubmit = async (values: CustomerAccountFormSchema) => {
    await upsert.mutateAsync({
      ...values,
    });
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
                    label={t('forms.customerAccount.code')}
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
                name="customer"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.customerAccount.customer')}
                    required
                    fullWidth
                    error={Boolean(errors.customer)}
                    helperText={errors.customer ? t(errors.customer.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="currency"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.customerAccount.currency')}
                    required
                    fullWidth
                    error={Boolean(errors.currency)}
                    helperText={errors.currency ? t(errors.currency.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="language"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.customerAccount.language')}
                    required
                    fullWidth
                    error={Boolean(errors.language)}
                    helperText={errors.language ? t(errors.language.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="paymentMethod"
                render={({ field }) => (
                  <TextField {...field} label={t('forms.customerAccount.paymentMethod')} fullWidth />
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
