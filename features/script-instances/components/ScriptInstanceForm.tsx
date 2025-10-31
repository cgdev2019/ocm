'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  MenuItem,
  Snackbar,
  Stack,
  Switch,
  TextField,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useScriptInstanceMutations } from '@/features/script-instances/api';
import { scriptInstanceFormSchema, type ScriptInstanceFormSchema } from '@/features/script-instances/schema';
import type { ScriptInstanceFormValues } from '@/features/script-instances/types';

export const ScriptInstanceForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<ScriptInstanceFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: ScriptInstanceFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, upsert } = useScriptInstanceMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ScriptInstanceFormSchema>({
    resolver: zodResolver(scriptInstanceFormSchema),
    defaultValues: {
      code: '',
      script: '',
      type: 'JAVA',
      reuse: false,
      disabled: false,
      codeOnly: false,
      ...defaultValues,
    },
  });

  const onSubmit = async (values: ScriptInstanceFormSchema) => {
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
                    label={t('forms.scriptInstance.code')}
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
                  <TextField {...field} fullWidth label={t('forms.scriptInstance.description')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="type"
                render={({ field }) => (
                  <TextField select {...field} fullWidth label={t('forms.scriptInstance.type')}>
                    <MenuItem value="JAVA">JAVA</MenuItem>
                    <MenuItem value="JAVA_CLASS">JAVA_CLASS</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="scriptInstanceCategoryCode"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label={t('forms.scriptInstance.category')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="reuse"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={field.value ?? false} />}
                    label={t('forms.scriptInstance.reuse')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="codeOnly"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={field.value ?? false} />}
                    label={t('forms.scriptInstance.codeOnly')}
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
                    control={<Switch {...field} checked={field.value ?? false} />}
                    label={t('forms.scriptInstance.disabled')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name="script"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.scriptInstance.script')}
                    required
                    multiline
                    minRows={6}
                    fullWidth
                    error={Boolean(errors.script)}
                    helperText={errors.script ? t(errors.script.message ?? 'forms.required') : undefined}
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
        autoHideDuration={4000}
        open={openSnack}
        onClose={() => setOpenSnack(false)}
        message={t('feedback.saved')}
      />
    </Stack>
  );
};
