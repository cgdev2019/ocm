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
import { useInvoicingPlanItemMutations } from '@/features/invoicing-plan-items/api';
import {
  invoicingPlanItemFormSchema,
  type InvoicingPlanItemFormSchema,
} from '@/features/invoicing-plan-items/schema';
import type { InvoicingPlanItemFormValues } from '@/features/invoicing-plan-items/types';

export const InvoicingPlanItemForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<InvoicingPlanItemFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: InvoicingPlanItemFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, update } = useInvoicingPlanItemMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<InvoicingPlanItemFormSchema>({
    resolver: zodResolver(invoicingPlanItemFormSchema),
    defaultValues: {
      code: '',
      ...defaultValues,
    },
  });

  const onSubmit = async (values: InvoicingPlanItemFormSchema) => {
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
                    label={t('forms.invoicingPlanItem.code')}
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
                  <TextField {...field} fullWidth label={t('forms.invoicingPlanItem.description')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="billingPlanCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.invoicingPlanItem.billingPlanCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                control={control}
                name="advancement"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label={t('forms.invoicingPlanItem.advancement')}
                    type="number"
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                control={control}
                name="rateToBill"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label={t('forms.invoicingPlanItem.rateToBill')}
                    type="number"
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="updatedCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.invoicingPlanItem.updatedCode')} />
                )}
              />
            </Grid>
          </Grid>
          <Box mt={3} display="flex" gap={2}>
            <Button
              type="submit"
              variant="contained"
              startIcon={<SaveIcon />}
              disabled={isPending || (!isDirty && mode === 'edit')}
            >
              {t('actions.save')}
            </Button>
            <Button
              type="button"
              variant="outlined"
              onClick={() => window.history.back()}
              disabled={isPending}
            >
              {t('actions.cancel')}
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Snackbar
        open={openSnack}
        autoHideDuration={3000}
        onClose={() => setOpenSnack(false)}
        message={t('feedback.saved')}
      />
    </Stack>
  );
};
