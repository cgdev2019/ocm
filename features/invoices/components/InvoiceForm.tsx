'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useInvoiceMutations } from '@/features/invoices/api';
import { invoiceFormSchema, type InvoiceFormSchema } from '@/features/invoices/schema';

export const InvoiceForm = ({ onSuccess }: { onSuccess?: (invoiceId?: number) => void }) => {
  const t = useTranslations();
  const { create } = useInvoiceMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<InvoiceFormSchema>({
    resolver: zodResolver(invoiceFormSchema),
    defaultValues: {
      billingAccountCode: '',
      invoiceType: 'STANDARD',
      invoiceMode: 'AGGREGATED' as const,
      invoiceDate: new Date().toISOString().slice(0, 16),
      dueDate: new Date().toISOString().slice(0, 16),
      rawAmount: 0,
      discountAmount: 0,
    },
  });

  const onSubmit = async (values: InvoiceFormSchema) => {
    const response = (await create.mutateAsync(values)) as { invoiceId?: number };
    setOpenSnack(true);
    onSuccess?.(response.invoiceId);
  };

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
      {create.isError ? <Alert severity="error">{t('forms.error')}</Alert> : null}
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="billingAccountCode"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.customerAccount.code')}
                    required
                    fullWidth
                    error={Boolean(errors.billingAccountCode)}
                    helperText={
                      errors.billingAccountCode
                        ? t(errors.billingAccountCode.message ?? 'forms.required')
                        : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                control={control}
                name="invoiceType"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.invoice.type')}
                    required
                    fullWidth
                    error={Boolean(errors.invoiceType)}
                    helperText={errors.invoiceType ? t(errors.invoiceType.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                control={control}
                name="invoiceMode"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.invoice.mode')}
                    required
                    fullWidth
                    select
                    error={Boolean(errors.invoiceMode)}
                    helperText={errors.invoiceMode ? t(errors.invoiceMode.message ?? 'forms.required') : undefined}
                  >
                    <MenuItem value="AGGREGATED">AGGREGATED</MenuItem>
                    <MenuItem value="DETAILLED">DETAILLED</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="invoiceDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="datetime-local"
                    label={t('forms.invoice.invoiceDate')}
                    fullWidth
                    error={Boolean(errors.invoiceDate)}
                    helperText={errors.invoiceDate ? t(errors.invoiceDate.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="dueDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="datetime-local"
                    label={t('forms.invoice.dueDate')}
                    fullWidth
                    error={Boolean(errors.dueDate)}
                    helperText={errors.dueDate ? t(errors.dueDate.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="rawAmount"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="number"
                    label={t('forms.invoice.amountWithoutTax')}
                    fullWidth
                    error={Boolean(errors.rawAmount)}
                    helperText={errors.rawAmount ? t(errors.rawAmount.message ?? 'forms.invalidNumber') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="discountAmount"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="number"
                    label={t('forms.invoice.discount')}
                    fullWidth
                    error={Boolean(errors.discountAmount)}
                    helperText={
                      errors.discountAmount
                        ? t(errors.discountAmount.message ?? 'forms.invalidNumber')
                        : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="amountWithTax"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="number"
                    label={t('forms.invoice.amountWithTax')}
                    fullWidth
                    error={Boolean(errors.amountWithTax)}
                    helperText={
                      errors.amountWithTax
                        ? t(errors.amountWithTax.message ?? 'forms.invalidNumber')
                        : undefined
                    }
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
          disabled={!isDirty || create.isPending}
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
