'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import DownloadIcon from '@mui/icons-material/DownloadOutlined';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import SyncIcon from '@mui/icons-material/SyncOutlined';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useWalletTemplate, useWalletTemplateMutations } from '@/features/wallet/api';
import { walletTemplateFormSchema, type WalletTemplateFormSchema } from '@/features/wallet/schema';

export const WalletTemplateForm = () => {
  const t = useTranslations();
  const { create, update, createOrUpdate, remove } = useWalletTemplateMutations();
  const [snackbar, setSnackbar] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [detailCode, setDetailCode] = useState<string | null>(null);
  const templateQuery = useWalletTemplate(detailCode);

  const { control, handleSubmit, reset, watch } = useForm<WalletTemplateFormSchema>({
    resolver: zodResolver(walletTemplateFormSchema),
    defaultValues: {
      code: '',
      description: '',
      walletType: undefined,
      fastRatingLevel: undefined,
      lowBalanceLevel: undefined,
      rejectLevel: undefined,
      rejectLevelEl: '',
      lowBalanceLevelEl: '',
    },
  });

  useEffect(() => {
    if (templateQuery.data) {
      reset(templateQuery.data);
    }
  }, [reset, templateQuery.data]);

  const isPending = useMemo(
    () => create.isPending || update.isPending || createOrUpdate.isPending || remove.isPending,
    [create.isPending, createOrUpdate.isPending, remove.isPending, update.isPending],
  );

  const submitAction = (action: 'create' | 'update' | 'createOrUpdate') =>
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
    try {
      const code = watch('code');
      if (!code) {
        setErrorMessage(t('forms.required'));
        return;
      }
      await remove.mutateAsync(code);
      setSnackbar(t('feedback.deleted'));
      reset({
        code: '',
        description: '',
        walletType: undefined,
        fastRatingLevel: undefined,
        lowBalanceLevel: undefined,
        rejectLevel: undefined,
        rejectLevelEl: '',
        lowBalanceLevelEl: '',
      });
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
    templateQuery.refetch();
  };

  return (
    <Card>
      <CardContent>
        <Stack spacing={3}>
          <Typography variant="h6">{t('forms.wallet.templateTitle')}</Typography>
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
                    label={t('forms.wallet.code')}
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
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.wallet.description')} />}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="walletType"
                render={({ field }) => (
                  <TextField {...field} select fullWidth label={t('forms.wallet.walletType')}>
                    <MenuItem value="POSTPAID">{t('forms.wallet.postpaid')}</MenuItem>
                    <MenuItem value="PREPAID">{t('forms.wallet.prepaid')}</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="fastRatingLevel"
                render={({ field }) => (
                  <TextField {...field} type="number" fullWidth label={t('forms.wallet.fastRatingLevel')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="lowBalanceLevel"
                render={({ field }) => (
                  <TextField {...field} type="number" fullWidth label={t('forms.wallet.lowBalanceLevel')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="rejectLevel"
                render={({ field }) => (
                  <TextField {...field} type="number" fullWidth label={t('forms.wallet.rejectLevel')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="rejectLevelEl"
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.wallet.rejectLevelEl')} />}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="lowBalanceLevelEl"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.wallet.lowBalanceLevelEl')} />
                )}
              />
            </Grid>
          </Grid>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} justifyContent="flex-end">
            <Button variant="outlined" startIcon={<DownloadIcon />} onClick={handleLoad} disabled={templateQuery.isFetching}>
              {t('actions.load')}
            </Button>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={() => submitAction('create')()}
              disabled={isPending}
            >
              {t('actions.create')}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<SyncIcon />}
              onClick={() => submitAction('update')()}
              disabled={isPending}
            >
              {t('actions.update')}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<SyncIcon />}
              onClick={() => submitAction('createOrUpdate')()}
              disabled={isPending}
            >
              {t('forms.wallet.createOrUpdate')}
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
      {(create.isError || update.isError || createOrUpdate.isError || remove.isError) && (
        <Box sx={{ px: 3, pb: 3 }}>
          <Alert severity="error">{t('forms.error')}</Alert>
        </Box>
      )}
    </Card>
  );
};
