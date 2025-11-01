'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import SyncIcon from '@mui/icons-material/SyncOutlined';
import { Alert, Box, Button, Card, CardContent, MenuItem, Snackbar, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useBundleTemplateMutations, useBundleTemplateVersion } from '@/features/bundle-templates/api';
import { bundleTemplateFormSchema, type BundleTemplateFormSchema } from '@/features/bundle-templates/schema';

export const BundleTemplateForm = () => {
  const t = useTranslations();
  const versionQuery = useBundleTemplateVersion();
  const { create, update, createOrUpdate } = useBundleTemplateMutations();
  const [snackbar, setSnackbar] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm<BundleTemplateFormSchema>({
    resolver: zodResolver(bundleTemplateFormSchema),
    defaultValues: {
      code: '',
      name: '',
      description: '',
      modelCode: '',
      lifeCycleStatus: 'IN_STUDY',
      productChargeTemplateCodes: '',
      bundleProductTemplateCodes: '',
      walletTemplateCodes: '',
      validFrom: '',
      validTo: '',
      disabled: false,
    },
  });

  const onSubmit = (action: 'create' | 'update' | 'createOrUpdate') =>
    handleSubmit(async (values) => {
      if (action === 'create') {
        await create.mutateAsync(values);
      } else if (action === 'update') {
        await update.mutateAsync(values);
      } else {
        await createOrUpdate.mutateAsync(values);
      }
      setSnackbar(t('feedback.saved'));
    });

  const isPending = create.isPending || update.isPending || createOrUpdate.isPending;

  return (
    <Card component="section">
      <CardContent>
        <Stack spacing={3}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h5">{t('forms.bundleTemplate.title')}</Typography>
            {versionQuery.data ? (
              <Typography variant="body2" color="text.secondary">
                {t('forms.bundleTemplate.version', { version: versionQuery.data })}
              </Typography>
            ) : null}
          </Stack>
          {(create.isError || update.isError || createOrUpdate.isError) ? (
            <Alert severity="error">{t('forms.error')}</Alert>
          ) : null}
          <Grid container spacing={2} component="form">
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="code"
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label={t('forms.bundleTemplate.code')}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error ? t(fieldState.error.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="name"
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label={t('forms.bundleTemplate.name')}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error ? t(fieldState.error.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="modelCode"
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.bundleTemplate.modelCode')} />}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name="description"
                render={({ field }) => (
                  <TextField {...field} fullWidth multiline minRows={2} label={t('forms.bundleTemplate.description')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="lifeCycleStatus"
                render={({ field }) => (
                  <TextField {...field} select fullWidth label={t('forms.bundleTemplate.lifeCycleStatus')}>
                    {['IN_STUDY', 'IN_DESIGN', 'IN_TEST', 'ACTIVE', 'LAUNCHED', 'RETIRED', 'OBSOLETE', 'REJECTED'].map(
                      (status) => (
                        <MenuItem key={status} value={status}>
                          {t(`forms.bundleTemplate.status.${status}`)}
                        </MenuItem>
                      ),
                    )}
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="validFrom"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="date"
                    fullWidth
                    label={t('forms.bundleTemplate.validFrom')}
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="validTo"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="date"
                    fullWidth
                    label={t('forms.bundleTemplate.validTo')}
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name="productChargeTemplateCodes"
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label={t('forms.bundleTemplate.productChargeTemplateCodes')}
                    helperText={t('forms.bundleTemplate.productChargeTemplateHelp')}
                    error={Boolean(fieldState.error)}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name="bundleProductTemplateCodes"
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    multiline
                    minRows={3}
                    label={t('forms.bundleTemplate.bundleProductTemplateCodes')}
                    helperText={t('forms.bundleTemplate.bundleProductTemplateHelp')}
                    error={Boolean(fieldState.error)}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name="walletTemplateCodes"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label={t('forms.bundleTemplate.walletTemplateCodes')}
                    helperText={t('forms.bundleTemplate.walletTemplateHelp')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="disabled"
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    fullWidth
                    label={t('forms.bundleTemplate.disabled')}
                    SelectProps={{ native: true }}
                    value={field.value ? 'true' : 'false'}
                    onChange={(event) => field.onChange(event.target.value === 'true')}
                  >
                    <option value="false">{t('common.no')}</option>
                    <option value="true">{t('common.yes')}</option>
                  </TextField>
                )}
              />
            </Grid>
          </Grid>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} justifyContent="flex-end">
            <Button variant="outlined" onClick={() => reset()} disabled={isPending}>
              {t('actions.reset')}
            </Button>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={() => onSubmit('create')()}
              disabled={isPending || !isDirty}
            >
              {t('actions.create')}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<SyncIcon />}
              onClick={() => onSubmit('update')()}
              disabled={isPending}
            >
              {t('actions.update')}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<SyncIcon />}
              onClick={() => onSubmit('createOrUpdate')()}
              disabled={isPending}
            >
              {t('forms.bundleTemplate.createOrUpdate')}
            </Button>
          </Stack>
        </Stack>
      </CardContent>
      <Snackbar
        open={Boolean(snackbar)}
        autoHideDuration={4000}
        onClose={() => setSnackbar(null)}
        message={snackbar ?? ''}
      />
    </Card>
  );
};
