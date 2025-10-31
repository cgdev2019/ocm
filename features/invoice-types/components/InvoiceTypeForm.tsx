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
import { useInvoiceTypeMutations } from '@/features/invoice-types/api';
import {
  invoiceTypeFormSchema,
  type InvoiceTypeFormSchema,
} from '@/features/invoice-types/schema';
import type { InvoiceTypeFormValues } from '@/features/invoice-types/types';

export const InvoiceTypeForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<InvoiceTypeFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: InvoiceTypeFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, update } = useInvoiceTypeMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<InvoiceTypeFormSchema>({
    resolver: zodResolver(invoiceTypeFormSchema),
    defaultValues: {
      code: '',
      occTemplateCode: '',
      matchingAuto: false,
      invoiceAccountable: false,
      useSelfSequence: false,
      ...defaultValues,
    },
  });

  const onSubmit = async (values: InvoiceTypeFormSchema) => {
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
                    label={t('forms.invoiceType.code')}
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
                  <TextField {...field} fullWidth label={t('forms.invoiceType.description')} />
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
                    label={t('forms.invoiceType.occTemplateCode')}
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
                  <TextField {...field} fullWidth label={t('forms.invoiceType.occTemplateNegativeCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="invoiceValidationScriptCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.invoiceType.invoiceValidationScriptCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="customInvoiceXmlScriptInstanceCode"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label={t('forms.invoiceType.customInvoiceXmlScriptInstanceCode')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="billingTemplateName"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.invoiceType.billingTemplateName')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="emailTemplateCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.invoiceType.emailTemplateCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="matchingAuto"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={Boolean(field.value)} />}
                    label={t('forms.invoiceType.matchingAuto')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="invoiceAccountable"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={Boolean(field.value)} />}
                    label={t('forms.invoiceType.invoiceAccountable')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="useSelfSequence"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={Boolean(field.value)} />}
                    label={t('forms.invoiceType.useSelfSequence')}
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
