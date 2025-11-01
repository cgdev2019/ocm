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
import { useInvoicingPlanMutations } from '@/features/invoicing-plans/api';
import {
  invoicingPlanFormSchema,
  type InvoicingPlanFormSchema,
} from '@/features/invoicing-plans/schema';
import type { InvoicingPlanFormValues } from '@/features/invoicing-plans/types';

export const InvoicingPlanForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<InvoicingPlanFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: InvoicingPlanFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, update } = useInvoicingPlanMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<InvoicingPlanFormSchema>({
    resolver: zodResolver(invoicingPlanFormSchema),
    defaultValues: {
      code: '',
      ...defaultValues,
    },
  });

  const onSubmit = async (values: InvoicingPlanFormSchema) => {
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
                    label={t('forms.invoicingPlan.code')}
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
                  <TextField {...field} fullWidth label={t('forms.invoicingPlan.description')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="updatedCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.invoicingPlan.updatedCode')} />
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
