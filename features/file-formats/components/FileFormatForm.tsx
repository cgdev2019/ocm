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
  Snackbar,
  Stack,
  Switch,
  TextField,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useFileFormatMutations } from '@/features/file-formats/api';
import { fileFormatFormSchema, type FileFormatFormSchema } from '@/features/file-formats/schema';
import type { FileFormatFormValues } from '@/features/file-formats/types';

export const FileFormatForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<FileFormatFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: FileFormatFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, update } = useFileFormatMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<FileFormatFormSchema>({
    resolver: zodResolver(fileFormatFormSchema),
    defaultValues: {
      code: '',
      fileTypes: [],
      fileNameUniqueness: false,
      ...defaultValues,
    },
  });

  const onSubmit = async (values: FileFormatFormSchema) => {
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
                    label={t('forms.fileFormat.code')}
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
                  <TextField {...field} fullWidth label={t('forms.fileFormat.description')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="fileNamePattern"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.fileFormat.fileNamePattern')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="jobCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.fileFormat.jobCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="configurationTemplate"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.fileFormat.configurationTemplate')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="recordName"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.fileFormat.recordName')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="inputDirectory"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.fileFormat.inputDirectory')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="outputDirectory"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.fileFormat.outputDirectory')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="rejectDirectory"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.fileFormat.rejectDirectory')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="archiveDirectory"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.fileFormat.archiveDirectory')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name="fileTypes"
                render={({ field }) => (
                  <TextField
                    value={field.value?.join(', ') ?? ''}
                    onChange={(event) => {
                      const value = event.target.value;
                      field.onChange(
                        value
                          .split(',')
                          .map((item) => item.trim())
                          .filter((item) => item.length > 0),
                      );
                    }}
                    fullWidth
                    label={t('forms.fileFormat.fileTypes')}
                    helperText={t('forms.fileFormat.fileTypesHelper')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="fileNameUniqueness"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={Boolean(field.value)} />}
                    label={t('forms.fileFormat.fileNameUniqueness')}
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
