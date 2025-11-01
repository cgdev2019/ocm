'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  Switch,
  TextField,
  FormControlLabel,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useAccountingCodeMutations } from '@/features/accounting-codes/api';
import {
  accountingCodeFormSchema,
  type AccountingCodeFormSchema,
} from '@/features/accounting-codes/schema';
import type { AccountingCodeFormValues } from '@/features/accounting-codes/types';

const ACCOUNT_TYPE_OPTIONS: AccountingCodeFormValues['chartOfAccountTypeEnum'][] = [
  'ASSETS',
  'LIABILITIES',
  'EQUITY',
  'REVENUE',
  'EXPENSE',
];

const ACCOUNT_VIEW_OPTIONS: AccountingCodeFormValues['chartOfAccountViewTypeEnum'][] = [
  'VIEW',
  'REGULAR',
];

export const AccountingCodeForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<AccountingCodeFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: AccountingCodeFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, update } = useAccountingCodeMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<AccountingCodeFormSchema>({
    resolver: zodResolver(accountingCodeFormSchema),
    defaultValues: {
      code: '',
      disabled: false,
      migrated: false,
      ...defaultValues,
    },
  });

  const isPending = mode === 'create' ? create.isPending : update.isPending;

  const onSubmit = async (values: AccountingCodeFormSchema) => {
    if (mode === 'create') {
      await create.mutateAsync(values);
    } else {
      await update.mutateAsync(values);
    }
    setOpenSnack(true);
    onSuccess?.(values);
  };

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
                    label={t('forms.accountingCode.code')}
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
                  <TextField {...field} fullWidth label={t('forms.accountingCode.description')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="parentAccountingCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.accountingCode.parentAccountingCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="reportingAccount"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.accountingCode.reportingAccount')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="chartOfAccountTypeEnum"
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel>{t('forms.accountingCode.chartOfAccountType')}</InputLabel>
                    <Select
                      {...field}
                      label={t('forms.accountingCode.chartOfAccountType')}
                      value={field.value ?? ''}
                      onChange={(event) => field.onChange(event.target.value || undefined)}
                      displayEmpty
                    >
                      <MenuItem value="">
                        <em>{t('forms.selectPlaceholder')}</em>
                      </MenuItem>
                      {ACCOUNT_TYPE_OPTIONS.map((option) => (
                        <MenuItem key={option} value={option}>
                          {t(`forms.accountingCode.type.${option}`)}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="chartOfAccountViewTypeEnum"
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel>{t('forms.accountingCode.chartOfAccountViewType')}</InputLabel>
                    <Select
                      {...field}
                      label={t('forms.accountingCode.chartOfAccountViewType')}
                      value={field.value ?? ''}
                      onChange={(event) => field.onChange(event.target.value || undefined)}
                      displayEmpty
                    >
                      <MenuItem value="">
                        <em>{t('forms.selectPlaceholder')}</em>
                      </MenuItem>
                      {ACCOUNT_VIEW_OPTIONS.map((option) => (
                        <MenuItem key={option} value={option}>
                          {t(`forms.accountingCode.view.${option}`)}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name="notes"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    minRows={3}
                    label={t('forms.accountingCode.notes')}
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
                    label={t('forms.accountingCode.disabled')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="migrated"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={Boolean(field.value)} />}
                    label={t('forms.accountingCode.migrated')}
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
        open={openSnack}
        autoHideDuration={4000}
        onClose={() => setOpenSnack(false)}
        message={t('feedback.saved')}
      />
    </Stack>
  );
};
