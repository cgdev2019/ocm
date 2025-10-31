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
import { useGenericCodeMutations } from '@/features/generic-code/api';
import { genericCodeFormSchema, type GenericCodeFormSchema } from '@/features/generic-code/schema';
import type { GenericCodeFormValues } from '@/features/generic-code/types';

export const GenericCodeForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<GenericCodeFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: GenericCodeFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, update } = useGenericCodeMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<GenericCodeFormSchema>({
    resolver: zodResolver(genericCodeFormSchema),
    defaultValues: {
      entityClass: '',
      sequence: {
        invoiceSequenceCode: undefined,
        sequenceType: undefined,
        sequencePattern: undefined,
        sequenceSize: undefined,
        currentInvoiceNb: undefined,
        prefixEL: undefined,
      },
      ...defaultValues,
    },
  });

  const onSubmit = async (values: GenericCodeFormSchema) => {
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
                name="entityClass"
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label={t('forms.genericCode.entityClass')}
                    error={Boolean(errors.entityClass)}
                    helperText={errors.entityClass ? t(errors.entityClass.message ?? 'forms.required') : undefined}
                    InputProps={{ readOnly: mode === 'edit' }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="formatEL"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.genericCode.formatEL')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="prefixOverride"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.genericCode.prefixOverride')} />
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h6">{t('forms.genericCode.sequenceSection')}</Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                  control={control}
                  name="sequence.invoiceSequenceCode"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label={t('forms.sequence.invoiceSequenceCode')}
                      error={Boolean(errors.sequence?.invoiceSequenceCode)}
                      helperText={
                        errors.sequence?.invoiceSequenceCode
                          ? t(errors.sequence.invoiceSequenceCode.message ?? 'forms.required')
                          : undefined
                      }
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                  control={control}
                  name="sequence.sequenceType"
                  render={({ field }) => (
                    <TextField {...field} fullWidth label={t('forms.sequence.sequenceType')} />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                  control={control}
                  name="sequence.sequencePattern"
                  render={({ field }) => (
                    <TextField {...field} fullWidth label={t('forms.sequence.sequencePattern')} />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                  control={control}
                  name="sequence.sequenceSize"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="number"
                      fullWidth
                      label={t('forms.sequence.sequenceSize')}
                      error={Boolean(errors.sequence?.sequenceSize)}
                      helperText={
                        errors.sequence?.sequenceSize
                          ? t(errors.sequence.sequenceSize.message ?? 'forms.invalidNumber')
                          : undefined
                      }
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                  control={control}
                  name="sequence.currentInvoiceNb"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="number"
                      fullWidth
                      label={t('forms.sequence.currentInvoiceNb')}
                      error={Boolean(errors.sequence?.currentInvoiceNb)}
                      helperText={
                        errors.sequence?.currentInvoiceNb
                          ? t(errors.sequence.currentInvoiceNb.message ?? 'forms.invalidNumber')
                          : undefined
                      }
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                  control={control}
                  name="sequence.prefixEL"
                  render={({ field }) => (
                    <TextField {...field} fullWidth label={t('forms.sequence.prefixEL')} />
                  )}
                />
              </Grid>
            </Grid>
          </Stack>
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
