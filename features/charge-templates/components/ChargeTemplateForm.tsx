'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import CopyIcon from '@mui/icons-material/ContentCopyOutlined';
import DownloadIcon from '@mui/icons-material/DownloadOutlined';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import { Alert, Button, Card, CardContent, Snackbar, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useChargeTemplate, useChargeTemplateMutations } from '@/features/charge-templates/api';
import { chargeTemplateFormSchema, type ChargeTemplateFormSchema } from '@/features/charge-templates/schema';
import type { ChargeTemplateStatus } from '@/features/charge-templates/types';

export const ChargeTemplateForm = ({ selectedCode }: { selectedCode: string | null }) => {
  const t = useTranslations();
  const [detailCode, setDetailCode] = useState<string | null>(null);
  const detailQuery = useChargeTemplate(detailCode);
  const { duplicate, updateStatus } = useChargeTemplateMutations();
  const [snackbar, setSnackbar] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const defaultValues = useMemo<ChargeTemplateFormSchema>(
    () => ({
      code: '',
      description: '',
      invoiceSubCategory: '',
      amountEditable: false,
      ratingScriptCode: '',
      taxClassCode: '',
      status: 'DRAFT',
      revenueRecognitionRuleCode: '',
      unitMultiplicator: '',
      unitNbDecimal: '',
      dropZeroWo: false,
    }),
    [],
  );

  const { control, handleSubmit, reset, watch } = useForm<ChargeTemplateFormSchema>({
    resolver: zodResolver(chargeTemplateFormSchema),
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

  const handleDuplicate = async () => {
    const code = watch('code');
    if (!code) {
      setErrorMessage(t('forms.required'));
      return;
    }
    try {
      await duplicate.mutateAsync(code);
      setSnackbar(t('forms.chargeTemplate.duplicated'));
    } catch (error) {
      setErrorMessage(t('forms.error'));
    }
  };

  const submitStatus = handleSubmit(async (values) => {
    const status = values.status ?? 'ACTIVE';
    try {
      await updateStatus.mutateAsync({ code: values.code, status: status as ChargeTemplateStatus });
      setSnackbar(t('feedback.saved'));
    } catch (error) {
      setErrorMessage(t('forms.error'));
    }
  });

  const isPending = duplicate.isPending || updateStatus.isPending;

  return (
    <Card component="section">
      <CardContent>
        <Stack spacing={3}>
          <Typography variant="h5">{t('forms.chargeTemplate.title')}</Typography>
          {(duplicate.isError || updateStatus.isError) && <Alert severity="error">{t('forms.error')}</Alert>}
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
                    label={t('forms.chargeTemplate.code')}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error ? t(fieldState.error.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="status"
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    fullWidth
                    label={t('forms.chargeTemplate.status')}
                    SelectProps={{ native: true }}
                  >
                    <option value="DRAFT">{t('forms.chargeTemplate.statusDraft')}</option>
                    <option value="ACTIVE">{t('forms.chargeTemplate.statusActive')}</option>
                    <option value="ARCHIVED">{t('forms.chargeTemplate.statusArchived')}</option>
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="invoiceSubCategory"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.chargeTemplate.invoiceSubCategory')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="description"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.chargeTemplate.description')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="ratingScriptCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.chargeTemplate.ratingScriptCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="taxClassCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.chargeTemplate.taxClassCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="revenueRecognitionRuleCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.chargeTemplate.revenueRecognitionRuleCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="unitMultiplicator"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.chargeTemplate.unitMultiplicator')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="unitNbDecimal"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.chargeTemplate.unitNbDecimal')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="amountEditable"
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    fullWidth
                    label={t('forms.chargeTemplate.amountEditable')}
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
                name="dropZeroWo"
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    fullWidth
                    label={t('forms.chargeTemplate.dropZeroWo')}
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
            <Button variant="contained" startIcon={<CopyIcon />} onClick={handleDuplicate} disabled={isPending}>
              {t('forms.chargeTemplate.duplicate')}
            </Button>
            <Button variant="contained" startIcon={<SaveIcon />} onClick={() => submitStatus()} disabled={isPending || !watch('code')}>
              {t('forms.chargeTemplate.updateStatus')}
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
