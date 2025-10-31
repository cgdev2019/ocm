'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import SaveIcon from '@mui/icons-material/SaveOutlined';
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
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useOccTemplateMutations } from '@/features/occ-templates/api';
import { occTemplateFormSchema, type OccTemplateFormSchema } from '@/features/occ-templates/schema';
import type { OccTemplateFormValues } from '@/features/occ-templates/types';

export const OccTemplateForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<OccTemplateFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: OccTemplateFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, update } = useOccTemplateMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<OccTemplateFormSchema>({
    resolver: zodResolver(occTemplateFormSchema),
    defaultValues: {
      code: '',
      accountingCode: '',
      occCategory: 'DEBIT',
      ...defaultValues,
    },
  });

  const onSubmit = async (values: OccTemplateFormSchema) => {
    if (mode === 'create') {
      await create.mutateAsync(values);
    } else {
      await update.mutateAsync(values);
    }
    setOpenSnack(true);
    onSuccess?.(values);
  };

  const isPending = mode === 'create' ? create.isPending : update.isPending;

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
      {(create.isError || update.isError) ? <Alert severity="error">{t('forms.error')}</Alert> : null}
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
                    label={t('forms.occTemplate.code')}
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
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.occTemplate.description')} />}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="accountingCode"
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label={t('forms.occTemplate.accountingCode')}
                    error={Boolean(errors.accountingCode)}
                    helperText={errors.accountingCode ? t(errors.accountingCode.message ?? 'forms.required') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="accountCode"
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.occTemplate.accountCode')} />}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="occCategory"
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    required
                    fullWidth
                    label={t('forms.occTemplate.occCategory')}
                    error={Boolean(errors.occCategory)}
                    helperText={errors.occCategory ? t(errors.occCategory.message ?? 'forms.required') : undefined}
                  >
                    <MenuItem value="DEBIT">{t('forms.occTemplate.categories.debit')}</MenuItem>
                    <MenuItem value="CREDIT">{t('forms.occTemplate.categories.credit')}</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="accountCodeClientSide"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.occTemplate.accountCodeClientSide')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="journalCode"
                render={({ field }) => <TextField {...field} fullWidth label={t('forms.occTemplate.journalCode')} />}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="accountingSchemeCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.occTemplate.accountingSchemeCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="contractAccountingCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.occTemplate.contractAccountingCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="contraAccountingCode2"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.occTemplate.contraAccountingCode2')} />
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
        open={openSnack}
        autoHideDuration={4000}
        onClose={() => setOpenSnack(false)}
        message={t('feedback.saved')}
      />
    </Stack>
  );
};
