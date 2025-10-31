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
import { useInvoiceSequenceMutations } from '@/features/invoice-sequences/api';
import {
  invoiceSequenceFormSchema,
  type InvoiceSequenceFormSchema,
} from '@/features/invoice-sequences/schema';
import type { InvoiceSequenceFormValues } from '@/features/invoice-sequences/types';

const SEQUENCE_TYPES = ['RUM', 'CUSTOMER_NO', 'SEQUENCE', 'NUMERIC', 'ALPHA_UP', 'UUID', 'REGEXP'];

export const InvoiceSequenceForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<InvoiceSequenceFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: InvoiceSequenceFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, update } = useInvoiceSequenceMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<InvoiceSequenceFormSchema>({
    resolver: zodResolver(invoiceSequenceFormSchema),
    defaultValues: {
      code: '',
      sequenceType: 'SEQUENCE',
      ...defaultValues,
    },
  });

  const onSubmit = async (values: InvoiceSequenceFormSchema) => {
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
                    label={t('forms.invoiceSequence.code')}
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
                  <TextField {...field} fullWidth label={t('forms.invoiceSequence.description')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="sequenceType"
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    required
                    fullWidth
                    label={t('forms.invoiceSequence.sequenceType')}
                    error={Boolean(errors.sequenceType)}
                    helperText={errors.sequenceType ? t(errors.sequenceType.message ?? 'forms.required') : undefined}
                  >
                    {SEQUENCE_TYPES.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="sequencePattern"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.invoiceSequence.sequencePattern')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="sequenceSize"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="number"
                    fullWidth
                    label={t('forms.invoiceSequence.sequenceSize')}
                    error={Boolean(errors.sequenceSize)}
                    helperText={errors.sequenceSize ? t(errors.sequenceSize.message ?? 'forms.invalidNumber') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="currentInvoiceNb"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="number"
                    fullWidth
                    label={t('forms.invoiceSequence.currentInvoiceNb')}
                    error={Boolean(errors.currentInvoiceNb)}
                    helperText={
                      errors.currentInvoiceNb ? t(errors.currentInvoiceNb.message ?? 'forms.invalidNumber') : undefined
                    }
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
