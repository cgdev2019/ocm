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
import { useContactCategoryMutations } from '@/features/contact-categories/api';
import {
  contactCategoryFormSchema,
  type ContactCategoryFormSchema,
} from '@/features/contact-categories/schema';
import type { ContactCategoryFormValues } from '@/features/contact-categories/types';

export const ContactCategoryForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<ContactCategoryFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: ContactCategoryFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, update } = useContactCategoryMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ContactCategoryFormSchema>({
    resolver: zodResolver(contactCategoryFormSchema),
    defaultValues: {
      code: '',
      description: '',
      ...defaultValues,
    },
  });

  const onSubmit = async (values: ContactCategoryFormSchema) => {
    if (mode === 'create') {
      await create.mutateAsync(values);
    } else {
      await update.mutateAsync(values);
    }
    setOpenSnack(true);
    onSuccess?.(values);
  };

  const mutation = mode === 'create' ? create : update;

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
                    label={t('forms.contactCategory.code')}
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
                  <TextField
                    {...field}
                    fullWidth
                    label={t('forms.contactCategory.description')}
                  />
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
          disabled={!isDirty || mutation.isPending}
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
