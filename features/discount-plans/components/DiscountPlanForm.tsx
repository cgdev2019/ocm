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
import { useDiscountPlan, useDiscountPlanMutations } from '@/features/discount-plans/api';
import { discountPlanFormSchema, type DiscountPlanFormSchema } from '@/features/discount-plans/schema';

export const DiscountPlanForm = ({ selectedCode }: { selectedCode: string | null }) => {
  const t = useTranslations();
  const [detailCode, setDetailCode] = useState<string | null>(null);
  const detailQuery = useDiscountPlan(detailCode);
  const { create, update, createOrUpdate, enable, disable, remove } = useDiscountPlanMutations();
  const [snackbar, setSnackbar] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const defaultValues = useMemo<DiscountPlanFormSchema>(
    () => ({
      code: '',
      description: '',
      discountPlanType: 'OFFER',
      status: 'DRAFT',
      disabled: false,
      startDate: '',
      endDate: '',
      defaultDuration: '',
      durationUnit: undefined,
      expressionEl: '',
      applicationFilterEL: '',
      initialQuantity: '',
      usedQuantity: '',
      applicationLimit: '',
      sequence: '',
      applicableOnDiscountedPrice: false,
      applicableOnContractPrice: false,
      applicableOnOverriddenPrice: false,
    }),
    [],
  );

  const { control, handleSubmit, reset, watch } = useForm<DiscountPlanFormSchema>({
    resolver: zodResolver(discountPlanFormSchema),
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
        setSnackbar(t('forms.discountPlan.enabled'));
      } else {
        await disable.mutateAsync(code);
        setSnackbar(t('forms.discountPlan.disabledMessage'));
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
          <Typography variant="h5">{t('forms.discountPlan.title')}</Typography>
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
                    label={t('forms.discountPlan.code')}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error ? t(fieldState.error.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="discountPlanType"
                render={({ field }) => (
                  <TextField {...field} select fullWidth label={t('forms.discountPlan.type')} SelectProps={{ native: true }}>
                    <option value="QUOTE">{t('forms.discountPlan.typeQuote')}</option>
                    <option value="OFFER">{t('forms.discountPlan.typeOffer')}</option>
                    <option value="PRODUCT">{t('forms.discountPlan.typeProduct')}</option>
                    <option value="INVOICE">{t('forms.discountPlan.typeInvoice')}</option>
                    <option value="INVOICE_LINE">{t('forms.discountPlan.typeInvoiceLine')}</option>
                    <option value="PROMO_CODE">{t('forms.discountPlan.typePromoCode')}</option>
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="status"
                render={({ field }) => (
                  <TextField {...field} select fullWidth label={t('forms.discountPlan.status')} SelectProps={{ native: true }}>
                    <option value="DRAFT">{t('forms.discountPlan.statusDraft')}</option>
                    <option value="ACTIVE">{t('forms.discountPlan.statusActive')}</option>
                    <option value="INACTIVE">{t('forms.discountPlan.statusInactive')}</option>
                    <option value="IN_USE">{t('forms.discountPlan.statusInUse')}</option>
                    <option value="EXPIRED">{t('forms.discountPlan.statusExpired')}</option>
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="disabled"
                render={({ field }) => (
                  <TextField
                    select
                    fullWidth
                    label={t('forms.discountPlan.disabled')}
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
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="description"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.discountPlan.description')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="startDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="date"
                    label={t('forms.discountPlan.startDate')}
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="endDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="date"
                    label={t('forms.discountPlan.endDate')}
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="defaultDuration"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.discountPlan.defaultDuration')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="durationUnit"
                render={({ field }) => (
                  <TextField {...field} select fullWidth label={t('forms.discountPlan.durationUnit')} SelectProps={{ native: true }}>
                    <option value=""></option>
                    <option value="MONTH">{t('forms.discountPlan.durationMonth')}</option>
                    <option value="DAY">{t('forms.discountPlan.durationDay')}</option>
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="expressionEl"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.discountPlan.expressionEl')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="applicationFilterEL"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.discountPlan.applicationFilter')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="initialQuantity"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.discountPlan.initialQuantity')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="usedQuantity"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.discountPlan.usedQuantity')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="applicationLimit"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.discountPlan.applicationLimit')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="sequence"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.discountPlan.sequence')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="applicableOnDiscountedPrice"
                render={({ field }) => (
                  <TextField
                    select
                    fullWidth
                    label={t('forms.discountPlan.applicableOnDiscountedPrice')}
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
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="applicableOnContractPrice"
                render={({ field }) => (
                  <TextField
                    select
                    fullWidth
                    label={t('forms.discountPlan.applicableOnContractPrice')}
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
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="applicableOnOverriddenPrice"
                render={({ field }) => (
                  <TextField
                    select
                    fullWidth
                    label={t('forms.discountPlan.applicableOnOverriddenPrice')}
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
            <Button variant="outlined" onClick={() => reset(detailQuery.data ?? defaultValues)} disabled={isPending}>
              {t('actions.reset')}
            </Button>
            <Button variant="contained" startIcon={<SendIcon />} onClick={() => submit('create')()} disabled={isPending}>
              {t('forms.discountPlan.create')}
            </Button>
            <Button variant="contained" startIcon={<SaveIcon />} onClick={() => submit('update')()} disabled={isPending}>
              {t('forms.discountPlan.update')}
            </Button>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={() => submit('createOrUpdate')()}
              disabled={isPending}
            >
              {t('forms.discountPlan.createOrUpdate')}
            </Button>
            <Button variant="contained" startIcon={<ToggleOnIcon />} onClick={() => handleToggle('enable')} disabled={isPending}>
              {t('forms.discountPlan.enable')}
            </Button>
            <Button variant="contained" startIcon={<PowerOffIcon />} onClick={() => handleToggle('disable')} disabled={isPending}>
              {t('forms.discountPlan.disable')}
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
