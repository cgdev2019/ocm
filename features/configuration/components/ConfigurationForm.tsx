'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import { Alert, Box, Button, Card, CardContent, Snackbar, Stack, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useConfigurationMutations } from '@/features/configuration/api';
import {
  configurationFormSchema,
  type ConfigurationFormSchema,
} from '@/features/configuration/schema';
import type { ConfigurationFormValues } from '@/features/configuration/types';

export const ConfigurationForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<ConfigurationFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: ConfigurationFormSchema) => void;
}) => {
  const t = useTranslations();
  const { upsert } = useConfigurationMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ConfigurationFormSchema>({
    resolver: zodResolver(configurationFormSchema),
    defaultValues: {
      key: '',
      ...defaultValues,
    },
  });

  const onSubmit = async (values: ConfigurationFormSchema) => {
    await upsert.mutateAsync(values);
    setOpenSnack(true);
    onSuccess?.(values);
  };

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
      {upsert.isError ? <Alert severity="error">{t('forms.error')}</Alert> : null}
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="key"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.configuration.key')}
                    required
                    fullWidth
                    error={Boolean(errors.key)}
                    helperText={errors.key ? t(errors.key.message ?? 'forms.required') : undefined}
                    InputProps={{ readOnly: mode === 'edit' }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="value"
                render={({ field }) => (
                  <TextField {...field} label={t('forms.configuration.value')} fullWidth />
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Box>
        <Button type="submit" variant="contained" startIcon={<SaveIcon />} disabled={!isDirty || upsert.isPending}>
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
