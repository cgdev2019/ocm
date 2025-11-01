'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import DownloadIcon from '@mui/icons-material/DownloadOutlined';
import PowerOffIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import SendIcon from '@mui/icons-material/SendOutlined';
import ToggleOnIcon from '@mui/icons-material/ToggleOnOutlined';
import { Alert, Button, Card, CardContent, Snackbar, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  useCounterTemplate,
  useCounterTemplateMutations,
} from '@/features/counter-templates/api';
import {
  counterTemplateFormSchema,
  type CounterTemplateFormSchema,
} from '@/features/counter-templates/schema';

export const CounterTemplateForm = ({ selectedCode }: { selectedCode: string | null }) => {
  const t = useTranslations();
  const [detailCode, setDetailCode] = useState<string | null>(null);
  const detailQuery = useCounterTemplate(detailCode);
  const { create, update, createOrUpdate, enable, disable, remove } = useCounterTemplateMutations();
  const [snackbar, setSnackbar] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const defaultValues = useMemo<CounterTemplateFormSchema>(
    () => ({
      code: '',
      description: '',
      calendar: '',
      calendarCodeEl: '',
      unity: '',
      type: 'USAGE',
      ceiling: '',
      counterLevel: 'SI',
      ceilingExpressionEl: '',
      notificationLevels: '',
      accumulator: false,
      accumulatorType: 'SINGLE_VALUE',
      filterEl: '',
      keyEl: '',
      valueEl: '',
    }),
    [],
  );

  const { control, handleSubmit, reset, watch } = useForm<CounterTemplateFormSchema>({
    resolver: zodResolver(counterTemplateFormSchema),
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
        setSnackbar(t('forms.counterTemplate.enabled'));
      } else {
        await disable.mutateAsync(code);
        setSnackbar(t('forms.counterTemplate.disabled'));
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
          <Typography variant="h5">{t('forms.counterTemplate.title')}</Typography>
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
                    label={t('forms.counterTemplate.code')}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error ? t(fieldState.error.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="type"
                render={({ field }) => (
                  <TextField {...field} select fullWidth label={t('forms.counterTemplate.type')} SelectProps={{ native: true }}>
                    <option value="USAGE">{t('forms.counterTemplate.typeUsage')}</option>
                    <option value="NOTIFICATION">{t('forms.counterTemplate.typeNotification')}</option>
                    <option value="USAGE_AMOUNT">{t('forms.counterTemplate.typeUsageAmount')}</option>
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="counterLevel"
                render={({ field }) => (
                  <TextField {...field} select fullWidth label={t('forms.counterTemplate.counterLevel')} SelectProps={{ native: true }}>
                    <option value="SI">{t('forms.counterTemplate.levelSI')}</option>
                    <option value="SU">{t('forms.counterTemplate.levelSU')}</option>
                    <option value="UA">{t('forms.counterTemplate.levelUA')}</option>
                    <option value="BA">{t('forms.counterTemplate.levelBA')}</option>
                    <option value="CA">{t('forms.counterTemplate.levelCA')}</option>
                    <option value="CUST">{t('forms.counterTemplate.levelCUST')}</option>
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="description"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.counterTemplate.description')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="calendar"
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.counterTemplate.calendar')} />}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="calendarCodeEl"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.counterTemplate.calendarCodeEl')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="unity"
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.counterTemplate.unity')} />}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="ceiling"
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.counterTemplate.ceiling')} />}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="ceilingExpressionEl"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.counterTemplate.ceilingExpressionEl')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="notificationLevels"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.counterTemplate.notificationLevels')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="accumulator"
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    fullWidth
                    label={t('forms.counterTemplate.accumulator')}
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
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="accumulatorType"
                render={({ field }) => (
                  <TextField {...field} select fullWidth label={t('forms.counterTemplate.accumulatorType')} SelectProps={{ native: true }}>
                    <option value="SINGLE_VALUE">{t('forms.counterTemplate.accumulatorSingle')}</option>
                    <option value="MULTI_VALUE">{t('forms.counterTemplate.accumulatorMulti')}</option>
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="filterEl"
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.counterTemplate.filterEl')} />}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="keyEl"
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.counterTemplate.keyEl')} />}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name="valueEl"
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.counterTemplate.valueEl')} />}
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
              {t('forms.counterTemplate.create')}
            </Button>
            <Button variant="contained" startIcon={<SaveIcon />} onClick={() => submit('update')()} disabled={isPending}>
              {t('forms.counterTemplate.update')}
            </Button>
            <Button variant="contained" startIcon={<SaveIcon />} onClick={() => submit('createOrUpdate')()} disabled={isPending}>
              {t('forms.counterTemplate.createOrUpdate')}
            </Button>
            <Button variant="contained" startIcon={<ToggleOnIcon />} onClick={() => handleToggle('enable')} disabled={isPending}>
              {t('forms.counterTemplate.enable')}
            </Button>
            <Button variant="contained" startIcon={<PowerOffIcon />} onClick={() => handleToggle('disable')} disabled={isPending}>
              {t('forms.counterTemplate.disable')}
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
