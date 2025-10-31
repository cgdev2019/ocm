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
import { useBusinessAccountModelMutations } from '@/features/business-account-model/api';
import {
  businessAccountModelFormSchema,
  type BusinessAccountModelFormSchema,
} from '@/features/business-account-model/schema';
import type { BusinessAccountModelFormValues } from '@/features/business-account-model/types';

export const BusinessAccountModelForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<BusinessAccountModelFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: BusinessAccountModelFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, update } = useBusinessAccountModelMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<BusinessAccountModelFormSchema>({
    resolver: zodResolver(businessAccountModelFormSchema),
    defaultValues: {
      code: '',
      disabled: false,
      ...defaultValues,
    },
  });

  const onSubmit = async (values: BusinessAccountModelFormSchema) => {
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
                    label={t('forms.businessAccountModel.code')}
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
                  <TextField {...field} fullWidth label={t('forms.businessAccountModel.description')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="hierarchyType"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.businessAccountModel.hierarchyType')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="license"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.businessAccountModel.license')} />
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
                    label={t('forms.businessAccountModel.disabled')}
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
