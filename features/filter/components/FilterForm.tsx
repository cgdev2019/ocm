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
import { useFilterMutations } from '@/features/filter/api';
import { filterFormSchema, type FilterFormSchema } from '@/features/filter/schema';
import type { FilterFormValues } from '@/features/filter/types';

export const FilterForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<FilterFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: FilterFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, update, createOrUpdate } = useFilterMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<FilterFormSchema>({
    resolver: zodResolver(filterFormSchema),
    defaultValues: {
      code: '',
      disabled: false,
      shared: false,
      ...defaultValues,
    },
  });

  const onSubmit = async (values: FilterFormSchema) => {
    if (mode === 'create') {
      await create.mutateAsync(values);
    } else {
      await update.mutateAsync(values);
    }
    await createOrUpdate.mutateAsync(values);
    setOpenSnack(true);
    onSuccess?.(values);
  };

  const isPending =
    mode === 'create'
      ? create.isPending || createOrUpdate.isPending
      : update.isPending || createOrUpdate.isPending;

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
      {(create.isError || update.isError || createOrUpdate.isError) ? (
        <Alert severity="error">{t('forms.error')}</Alert>
      ) : null}
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
                    label={t('forms.filter.code')}
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
                  <TextField {...field} label={t('forms.filter.description')} fullWidth />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="entityClass"
                render={({ field }) => (
                  <TextField {...field} label={t('forms.filter.entityClass')} fullWidth />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name="inputXml"
                render={({ field }) => (
                  <TextField {...field} label={t('forms.filter.inputXml')} fullWidth multiline minRows={4} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name="pollingQuery"
                render={({ field }) => (
                  <TextField {...field} label={t('forms.filter.pollingQuery')} fullWidth multiline minRows={3} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="shared"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={Boolean(field.value)} />}
                    label={t('forms.filter.shared')}
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
                    control={<Switch {...field} checked={Boolean(field.value)} />}
                    label={t('forms.filter.disabled')}
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
