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
import { useAccessMutations } from '@/features/access/api';
import { accessFormSchema, type AccessFormSchema } from '@/features/access/schema';
import type { AccessFormValues } from '@/features/access/types';

export const AccessForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<AccessFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: AccessFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, update } = useAccessMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<AccessFormSchema>({
    resolver: zodResolver(accessFormSchema),
    defaultValues: {
      code: '',
      subscription: '',
      disabled: false,
      ...defaultValues,
    },
  });

  const onSubmit = async (values: AccessFormSchema) => {
    if (mode === 'create') {
      await create.mutateAsync(values);
    } else {
      await update.mutateAsync(values);
    }
    setOpenSnack(true);
    onSuccess?.(values);
  };

  const mutation = mode === 'create' ? create : update;

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
      {mutation.isError ? <Alert severity="error">{t('forms.error')}</Alert> : null}
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
                    label={t('forms.access.code')}
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
                name="subscription"
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label={t('forms.access.subscription')}
                    error={Boolean(errors.subscription)}
                    helperText={errors.subscription ? t(errors.subscription.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="subscriptionValidityDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="datetime-local"
                    label={t('forms.access.subscriptionValidityDate')}
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="startDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="datetime-local"
                    label={t('forms.access.startDate')}
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="endDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="datetime-local"
                    label={t('forms.access.endDate')}
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="usageDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="datetime-local"
                    label={t('forms.access.usageDate')}
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="disabled"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={field.value ?? false} />}
                    label={t('forms.access.disabled')}
                  />
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Box>
        <Button type="submit" variant="contained" startIcon={<SaveIcon />} disabled={mutation.isPending || (!isDirty && mode === 'edit')}>
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
