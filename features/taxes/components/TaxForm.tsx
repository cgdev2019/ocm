'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Snackbar,
  Stack,
  TextField,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTaxMutations } from '@/features/taxes/api';
import { taxFormSchema, type TaxFormSchema } from '@/features/taxes/schema';
import type { TaxFormValues } from '@/features/taxes/types';

export const TaxForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<TaxFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: TaxFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, upsert } = useTaxMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<TaxFormSchema>({
    resolver: zodResolver(taxFormSchema),
    defaultValues: {
      code: '',
      ...defaultValues,
    },
  });

  const onSubmit = async (values: TaxFormSchema) => {
    if (mode === 'create') {
      await create.mutateAsync(values);
    } else {
      await upsert.mutateAsync(values);
    }
    setOpenSnack(true);
    onSuccess?.(values);
  };

  const isPending = mode === 'create' ? create.isPending : upsert.isPending;

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
      {(create.isError || upsert.isError) ? <Alert severity="error">{t('forms.error')}</Alert> : null}
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
                    label={t('forms.tax.code')}
                    required
                    fullWidth
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
                  <TextField {...field} label={t('forms.tax.description')} fullWidth />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="percent"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="number"
                    label={t('forms.tax.percent')}
                    fullWidth
                    error={Boolean(errors.percent)}
                    helperText={errors.percent ? t(errors.percent.message ?? 'forms.invalidNumber') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="accountingCode"
                render={({ field }) => (
                  <TextField {...field} label={t('forms.tax.accountingCode')} fullWidth />
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Box>
        <Button
          type="submit"
          variant="contained"
          startIcon={<SaveIcon />}
          disabled={!isDirty || isPending}
        >
          {t('actions.save')}
        </Button>
      </Box>
      <Snackbar
        autoHideDuration={4000}
        open={openSnack}
        onClose={() => setOpenSnack(false)}
        message={t('feedback.saved')}
      />
    </Stack>
  );
};
