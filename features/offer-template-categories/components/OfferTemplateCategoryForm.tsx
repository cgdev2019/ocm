'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import DownloadIcon from '@mui/icons-material/DownloadOutlined';
import PowerOffIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import SendIcon from '@mui/icons-material/SendOutlined';
import ToggleOnIcon from '@mui/icons-material/ToggleOnOutlined';
import {
  Alert,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Snackbar,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  useOfferTemplateCategory,
  useOfferTemplateCategoryMutations,
} from '@/features/offer-template-categories/api';
import {
  offerTemplateCategoryFormSchema,
  type OfferTemplateCategoryFormSchema,
} from '@/features/offer-template-categories/schema';

export const OfferTemplateCategoryForm = ({ selectedCode }: { selectedCode: string | null }) => {
  const t = useTranslations();
  const [detailCode, setDetailCode] = useState<string | null>(null);
  const detailQuery = useOfferTemplateCategory(detailCode);
  const { create, update, createOrUpdate, enable, disable, remove } = useOfferTemplateCategoryMutations();
  const [snackbar, setSnackbar] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const defaultValues = useMemo<OfferTemplateCategoryFormSchema>(
    () => ({
      code: '',
      name: '',
      description: '',
      parentId: '',
      active: true,
      disabled: false,
    }),
    [],
  );

  const { control, handleSubmit, reset, watch } = useForm<OfferTemplateCategoryFormSchema>({
    resolver: zodResolver(offerTemplateCategoryFormSchema),
    defaultValues,
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

  const handleLoad = () => {
    const code = watch('code');
    if (!code) {
      setErrorMessage(t('forms.required'));
      return;
    }
    setDetailCode(code);
    detailQuery.refetch();
  };

  const submit = (action: 'create' | 'update' | 'createOrUpdate') =>
    handleSubmit(async (values) => {
      try {
        if (action === 'create') {
          await create.mutateAsync(values);
        } else if (action === 'update') {
          await update.mutateAsync(values);
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
      reset(defaultValues);
    } catch (error) {
      setErrorMessage(t('forms.error'));
    }
  };

  const handleToggle = async (mode: 'enable' | 'disable') => {
    const code = watch('code');
    if (!code) {
      setErrorMessage(t('forms.required'));
      return;
    }
    try {
      if (mode === 'enable') {
        await enable.mutateAsync(code);
        setSnackbar(t('forms.offerTemplateCategory.enabledMessage'));
      } else {
        await disable.mutateAsync(code);
        setSnackbar(t('forms.offerTemplateCategory.disabledMessage'));
      }
    } catch (error) {
      setErrorMessage(t('forms.error'));
    }
  };

  const isPending =
    create.isPending ||
    update.isPending ||
    createOrUpdate.isPending ||
    enable.isPending ||
    disable.isPending ||
    remove.isPending;

  return (
    <Card component="section">
      <CardContent>
        <Stack spacing={3}>
          <Typography variant="h5">{t('forms.offerTemplateCategory.title')}</Typography>
          {(create.isError || update.isError || createOrUpdate.isError || enable.isError || disable.isError || remove.isError) ? (
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
                    label={t('forms.offerTemplateCategory.code')}
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
                    label={t('forms.offerTemplateCategory.name')}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error ? t(fieldState.error.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="parentId"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label={t('forms.offerTemplateCategory.parentId')}
                    helperText={t('forms.offerTemplateCategory.parentIdHelper')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name="description"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    minRows={3}
                    label={t('forms.offerTemplateCategory.description')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="active"
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Switch
                        checked={Boolean(field.value)}
                        onChange={(event) => field.onChange(event.target.checked)}
                      />
                    }
                    label={t('forms.offerTemplateCategory.active')}
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
                    control={
                      <Switch
                        checked={Boolean(field.value)}
                        onChange={(event) => field.onChange(event.target.checked)}
                      />
                    }
                    label={t('forms.offerTemplateCategory.disabled')}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} justifyContent="flex-end">
            <Button variant="outlined" startIcon={<DownloadIcon />} onClick={handleLoad} disabled={detailQuery.isFetching}>
              {t('actions.load')}
            </Button>
            <Button variant="outlined" onClick={() => reset(detailQuery.data ?? defaultValues)} disabled={isPending}>
              {t('actions.reset')}
            </Button>
            <Button variant="contained" startIcon={<SendIcon />} onClick={() => submit('create')()} disabled={isPending}>
              {t('forms.offerTemplateCategory.create')}
            </Button>
            <Button variant="contained" startIcon={<SaveIcon />} onClick={() => submit('update')()} disabled={isPending}>
              {t('forms.offerTemplateCategory.update')}
            </Button>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={() => submit('createOrUpdate')()}
              disabled={isPending}
            >
              {t('forms.offerTemplateCategory.createOrUpdate')}
            </Button>
            <Button variant="contained" startIcon={<ToggleOnIcon />} onClick={() => handleToggle('enable')} disabled={isPending}>
              {t('forms.offerTemplateCategory.enable')}
            </Button>
            <Button variant="contained" startIcon={<PowerOffIcon />} onClick={() => handleToggle('disable')} disabled={isPending}>
              {t('forms.offerTemplateCategory.disable')}
            </Button>
            <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={handleDelete} disabled={isPending}>
              {t('actions.delete')}
            </Button>
          </Stack>
        </Stack>
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
      </CardContent>
    </Card>
  );
};
