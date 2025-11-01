'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import DownloadIcon from '@mui/icons-material/DownloadOutlined';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import SyncIcon from '@mui/icons-material/SyncOutlined';
import { Alert, Box, Button, Card, CardContent, MenuItem, Snackbar, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  useBusinessOfferModel,
  useBusinessOfferModelMutations,
} from '@/features/business-offer-models/api';
import { businessOfferModelFormSchema, type BusinessOfferModelFormSchema } from '@/features/business-offer-models/schema';

export const BusinessOfferModelForm = ({ selectedCode }: { selectedCode: string | null }) => {
  const t = useTranslations();
  const [detailCode, setDetailCode] = useState<string | null>(null);
  const detailQuery = useBusinessOfferModel(detailCode);
  const { create, update, createOrUpdate, install, remove } = useBusinessOfferModelMutations();
  const [snackbar, setSnackbar] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { isDirty },
  } = useForm<BusinessOfferModelFormSchema>({
    resolver: zodResolver(businessOfferModelFormSchema),
    defaultValues: {
      code: '',
      description: '',
      disabled: false,
      license: undefined,
      offerTemplateCode: '',
    },
  });

  useEffect(() => {
    if (selectedCode) {
      setDetailCode(selectedCode);
    }
  }, [selectedCode]);

  useEffect(() => {
    if (detailQuery.data) {
      reset(detailQuery.data);
    }
  }, [detailQuery.data, reset]);

  const onSubmit = (action: 'create' | 'update' | 'createOrUpdate' | 'install') =>
    handleSubmit(async (values) => {
      try {
        if (action === 'create') {
          await create.mutateAsync(values);
        } else if (action === 'update') {
          await update.mutateAsync(values);
        } else if (action === 'install') {
          await install.mutateAsync(values);
        } else {
          await createOrUpdate.mutateAsync(values);
        }
        setSnackbar(t('feedback.saved'));
      } catch (error) {
        setErrorMessage(t('forms.error'));
      }
    });

  const handleDelete = async () => {
    const code = watch('code');
    if (!code) {
      setErrorMessage(t('forms.required'));
      return;
    }
    try {
      await remove.mutateAsync(code);
      setSnackbar(t('feedback.deleted'));
      reset({ code: '', description: '', disabled: false, license: undefined, offerTemplateCode: '' });
    } catch (error) {
      setErrorMessage(t('forms.error'));
    }
  };

  const handleLoad = () => {
    const code = watch('code');
    if (!code) {
      setErrorMessage(t('forms.required'));
      return;
    }
    setDetailCode(code);
    detailQuery.refetch();
  };

  const isPending =
    create.isPending || update.isPending || createOrUpdate.isPending || install.isPending || remove.isPending;

  return (
    <Card component="section">
      <CardContent>
        <Stack spacing={3}>
          <Typography variant="h5">{t('forms.businessOfferModel.title')}</Typography>
          {(create.isError || update.isError || createOrUpdate.isError || install.isError || remove.isError) ? (
            <Alert severity="error">{t('forms.error')}</Alert>
          ) : null}
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="code"
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label={t('forms.businessOfferModel.code')}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error ? t(fieldState.error.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="offerTemplateCode"
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label={t('forms.businessOfferModel.offerTemplateCode')}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error ? t(fieldState.error.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="license"
                render={({ field }) => (
                  <TextField {...field} select fullWidth label={t('forms.businessOfferModel.license')}>
                    <MenuItem value="">
                      <em>{t('forms.selectPlaceholder')}</em>
                    </MenuItem>
                    {['APACHE', 'BSD3_N', 'BSD3_R', 'BSD2_S', 'FREE_BSD', 'GPL', 'AGPL', 'LGPL', 'MIT', 'MOZ', 'CDDL', 'EPL', 'OPEN', 'COM'].map(
                      (license) => (
                        <MenuItem key={license} value={license}>
                          {license}
                        </MenuItem>
                      ),
                    )}
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name="description"
                render={({ field }) => (
                  <TextField {...field} fullWidth multiline minRows={2} label={t('forms.businessOfferModel.description')} />
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
                    label={t('forms.businessOfferModel.disabled')}
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
            <Button variant="outlined" startIcon={<DownloadIcon />} onClick={handleLoad} disabled={detailQuery.isFetching}>
              {t('actions.load')}
            </Button>
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
              {t('forms.businessOfferModel.createOrUpdate')}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<SyncIcon />}
              onClick={() => onSubmit('install')()}
              disabled={isPending}
            >
              {t('forms.businessOfferModel.install')}
            </Button>
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={handleDelete}
              disabled={isPending}
            >
              {t('actions.delete')}
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
      <Snackbar
        open={Boolean(errorMessage)}
        autoHideDuration={4000}
        onClose={() => setErrorMessage(null)}
        message={errorMessage ?? ''}
      />
    </Card>
  );
};
