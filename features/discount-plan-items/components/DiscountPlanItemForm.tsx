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
  useDiscountPlanItem,
  useDiscountPlanItemMutations,
} from '@/features/discount-plan-items/api';
import {
  discountPlanItemFormSchema,
  type DiscountPlanItemFormSchema,
} from '@/features/discount-plan-items/schema';

export const DiscountPlanItemForm = ({ selectedCode }: { selectedCode: string | null }) => {
  const t = useTranslations();
  const [detailCode, setDetailCode] = useState<string | null>(null);
  const detailQuery = useDiscountPlanItem(detailCode);
  const { create, update, createOrUpdate, enable, disable, remove } =
    useDiscountPlanItemMutations();
  const [snackbar, setSnackbar] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const defaultValues = useMemo<DiscountPlanItemFormSchema>(
    () => ({
      code: '',
      discountPlanCode: '',
      description: '',
      invoiceCategoryCode: '',
      invoiceSubCategoryCode: '',
      discountPlanItemType: 'PERCENTAGE',
      discountValue: '',
      discountValueEL: '',
      expressionEl: '',
      allowToNegate: false,
      applyByArticle: false,
      pricePlanMatrixCode: '',
      targetAccountingArticleCodes: '',
      sequence: '',
      priority: '',
      accountingArticleCode: '',
      lastDiscount: false,
    }),
    [],
  );

  const { control, handleSubmit, reset, watch } = useForm<DiscountPlanItemFormSchema>({
    resolver: zodResolver(discountPlanItemFormSchema),
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
        setSnackbar(t('forms.discountPlanItem.enabled'));
      } else {
        await disable.mutateAsync(code);
        setSnackbar(t('forms.discountPlanItem.disabled'));
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
          <Typography variant="h5">{t('forms.discountPlanItem.title')}</Typography>
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
                    label={t('forms.discountPlanItem.code')}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error ? t(fieldState.error.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="discountPlanCode"
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label={t('forms.discountPlanItem.discountPlanCode')}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error ? t(fieldState.error.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="discountPlanItemType"
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    fullWidth
                    label={t('forms.discountPlanItem.type')}
                    SelectProps={{ native: true }}
                  >
                    <option value="PERCENTAGE">{t('forms.discountPlanItem.typePercentage')}</option>
                    <option value="FIXED">{t('forms.discountPlanItem.typeFixed')}</option>
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="discountValue"
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label={t('forms.discountPlanItem.value')}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error ? t(fieldState.error.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="discountValueEL"
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label={t('forms.discountPlanItem.valueEl')}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error ? t(fieldState.error.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="description"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.discountPlanItem.description')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="invoiceCategoryCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.discountPlanItem.invoiceCategoryCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="invoiceSubCategoryCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.discountPlanItem.invoiceSubCategoryCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="expressionEl"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.discountPlanItem.expressionEl')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="allowToNegate"
                render={({ field }) => (
                  <TextField
                    select
                    fullWidth
                    label={t('forms.discountPlanItem.allowToNegate')}
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
                name="applyByArticle"
                render={({ field }) => (
                  <TextField
                    select
                    fullWidth
                    label={t('forms.discountPlanItem.applyByArticle')}
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
                name="lastDiscount"
                render={({ field }) => (
                  <TextField
                    select
                    fullWidth
                    label={t('forms.discountPlanItem.lastDiscount')}
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
                name="pricePlanMatrixCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.discountPlanItem.pricePlanMatrixCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="targetAccountingArticleCodes"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.discountPlanItem.targetAccountingArticleCodes')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="accountingArticleCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.discountPlanItem.accountingArticleCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="sequence"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.discountPlanItem.sequence')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="priority"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.discountPlanItem.priority')} />
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
              {t('forms.discountPlanItem.create')}
            </Button>
            <Button variant="contained" startIcon={<SaveIcon />} onClick={() => submit('update')()} disabled={isPending}>
              {t('forms.discountPlanItem.update')}
            </Button>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={() => submit('createOrUpdate')()}
              disabled={isPending}
            >
              {t('forms.discountPlanItem.createOrUpdate')}
            </Button>
            <Button variant="contained" startIcon={<ToggleOnIcon />} onClick={() => handleToggle('enable')} disabled={isPending}>
              {t('forms.discountPlanItem.enable')}
            </Button>
            <Button variant="contained" startIcon={<PowerOffIcon />} onClick={() => handleToggle('disable')} disabled={isPending}>
              {t('forms.discountPlanItem.disable')}
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
