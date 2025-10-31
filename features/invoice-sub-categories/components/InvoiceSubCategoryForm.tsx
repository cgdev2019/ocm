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
import { useInvoiceSubCategoryMutations } from '@/features/invoice-sub-categories/api';
import {
  invoiceSubCategoryFormSchema,
  type InvoiceSubCategoryFormSchema,
} from '@/features/invoice-sub-categories/schema';
import type { InvoiceSubCategoryFormValues } from '@/features/invoice-sub-categories/types';

export const InvoiceSubCategoryForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<InvoiceSubCategoryFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: InvoiceSubCategoryFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, update } = useInvoiceSubCategoryMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<InvoiceSubCategoryFormSchema>({
    resolver: zodResolver(invoiceSubCategoryFormSchema),
    defaultValues: {
      code: '',
      invoiceCategory: '',
      accountingCode: '',
      occTemplateCode: '',
      ...defaultValues,
    },
  });

  const onSubmit = async (values: InvoiceSubCategoryFormSchema) => {
    if (mode === 'create') {
      await create.mutateAsync(values);
    } else {
      await update.mutateAsync(values);
    }
    setOpenSnack(true);
    onSuccess?.(values);
  };

  const isPending = mode === 'create' ? create.isPending : update.isPending;

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
      {(create.isError || update.isError) ? <Alert severity="error">{t('forms.error')}</Alert> : null}
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
                    label={t('forms.invoiceSubCategory.code')}
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
                  <TextField {...field} fullWidth label={t('forms.invoiceSubCategory.description')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="invoiceCategory"
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label={t('forms.invoiceSubCategory.invoiceCategory')}
                    error={Boolean(errors.invoiceCategory)}
                    helperText={
                      errors.invoiceCategory ? t(errors.invoiceCategory.message ?? 'forms.required') : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="accountingCode"
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label={t('forms.invoiceSubCategory.accountingCode')}
                    error={Boolean(errors.accountingCode)}
                    helperText={
                      errors.accountingCode ? t(errors.accountingCode.message ?? 'forms.required') : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="occTemplateCode"
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label={t('forms.invoiceSubCategory.occTemplateCode')}
                    error={Boolean(errors.occTemplateCode)}
                    helperText={
                      errors.occTemplateCode ? t(errors.occTemplateCode.message ?? 'forms.required') : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="occTemplateNegativeCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.invoiceSubCategory.occTemplateNegativeCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="sortIndex"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="number"
                    fullWidth
                    label={t('forms.invoiceSubCategory.sortIndex')}
                    error={Boolean(errors.sortIndex)}
                    helperText={errors.sortIndex ? t(errors.sortIndex.message ?? 'forms.invalidNumber') : undefined}
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
        open={openSnack}
        autoHideDuration={4000}
        onClose={() => setOpenSnack(false)}
        message={t('feedback.saved')}
      />
    </Stack>
  );
};
