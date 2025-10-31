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
  MenuItem,
  Snackbar,
  Stack,
  Switch,
  TextField,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTerminationReasonMutations } from '@/features/termination-reasons/api';
import {
  terminationReasonFormSchema,
  type TerminationReasonFormSchema,
} from '@/features/termination-reasons/schema';
import type { TerminationReasonFormValues } from '@/features/termination-reasons/types';

export const TerminationReasonForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<TerminationReasonFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: TerminationReasonFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, upsert } = useTerminationReasonMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<TerminationReasonFormSchema>({
    resolver: zodResolver(terminationReasonFormSchema),
    defaultValues: {
      code: '',
      overrideProrata: 'NO_OVERRIDE',
      ...defaultValues,
    },
  });

  const onSubmit = async (values: TerminationReasonFormSchema) => {
    if (mode === 'create') {
      await create.mutateAsync(values);
    } else {
      await upsert.mutateAsync(values);
    }
    setOpenSnack(true);
    onSuccess?.(values);
  };

  const isPending = mode === 'create' ? create.isPending : upsert.isPending;

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
      {(create.isError || upsert.isError) ? <Alert severity="error">{t('forms.error')}</Alert> : null}
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
                    label={t('forms.terminationReason.code')}
                    required
                    fullWidth
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
                  <TextField {...field} fullWidth label={t('forms.terminationReason.description')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="overrideProrata"
                render={({ field }) => (
                  <TextField select {...field} fullWidth label={t('forms.terminationReason.overrideProrata')}>
                    <MenuItem value="NO_OVERRIDE">NO_OVERRIDE</MenuItem>
                    <MenuItem value="PRORATA">PRORATA</MenuItem>
                    <MenuItem value="NO_PRORATA">NO_PRORATA</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="applyAgreement"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={field.value ?? false} />}
                    label={t('forms.terminationReason.applyAgreement')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="invoiceAgreementImmediately"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={field.value ?? false} />}
                    label={t('forms.terminationReason.invoiceAgreementImmediately')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="applyReimbursment"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={field.value ?? false} />}
                    label={t('forms.terminationReason.applyReimbursment')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="applyTerminationCharges"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={field.value ?? false} />}
                    label={t('forms.terminationReason.applyTerminationCharges')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="reimburseOneshots"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={field.value ?? false} />}
                    label={t('forms.terminationReason.reimburseOneshots')}
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
        autoHideDuration={4000}
        open={openSnack}
        onClose={() => setOpenSnack(false)}
        message={t('feedback.saved')}
      />
    </Stack>
  );
};
