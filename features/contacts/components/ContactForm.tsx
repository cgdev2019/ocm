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
import { useContactMutations } from '@/features/contacts/api';
import { contactFormSchema, type ContactFormSchema } from '@/features/contacts/schema';
import type { ContactFormValues } from '@/features/contacts/types';

export const ContactForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<ContactFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: ContactFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, update } = useContactMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      code: '',
      ...defaultValues,
    },
  });

  const mutation = mode === 'create' ? create : update;

  const onSubmit = async (values: ContactFormSchema) => {
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
      {mutation.isError ? <Alert severity="error">{t('forms.error')}</Alert> : null}
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
                    label={t('forms.contact.code')}
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
                  <TextField {...field} fullWidth label={t('forms.contact.description')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="company"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.contact.company')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="jobTitle"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.contact.jobTitle')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label={t('forms.contact.email')}
                    error={Boolean(errors.email)}
                    helperText={errors.email ? t(errors.email.message ?? 'forms.invalidEmail') : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="phone"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.contact.phone')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="mobile"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.contact.mobile')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name="comment"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.contact.comment')} multiline minRows={3} />
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
          disabled={mutation.isPending || (mode === 'edit' && !isDirty)}
        >
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
