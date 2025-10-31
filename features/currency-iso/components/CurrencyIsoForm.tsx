'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import { Alert, Box, Button, Card, CardContent, Snackbar, Stack, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useCurrencyIsoMutations } from '@/features/currency-iso/api';
import { currencyIsoFormSchema, type CurrencyIsoFormSchema } from '@/features/currency-iso/schema';
import type { CurrencyIsoFormValues } from '@/features/currency-iso/types';

export const CurrencyIsoForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<CurrencyIsoFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: CurrencyIsoFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, upsert } = useCurrencyIsoMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<CurrencyIsoFormSchema>({
    resolver: zodResolver(currencyIsoFormSchema),
    defaultValues: {
      code: '',
      ...defaultValues,
    },
  });

  const onSubmit = async (values: CurrencyIsoFormSchema) => {
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
                    label={t('forms.currencyIso.code')}
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
                  <TextField {...field} label={t('forms.currencyIso.description')} fullWidth />
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
        autoHideDuration={4000}
        open={openSnack}
        onClose={() => setOpenSnack(false)}
        message={t('feedback.saved')}
      />
    </Stack>
  );
};
