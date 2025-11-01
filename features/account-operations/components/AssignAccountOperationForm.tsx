'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import { Alert, Button, Card, CardContent, Snackbar, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useAssignAccountOperation } from '@/features/account-operations/api';
import {
  assignAccountOperationFormSchema,
  type AssignAccountOperationFormSchema,
} from '@/features/account-operations/schema';

export const AssignAccountOperationForm = () => {
  const t = useTranslations();
  const assignMutation = useAssignAccountOperation();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<AssignAccountOperationFormSchema>({
    resolver: zodResolver(assignAccountOperationFormSchema),
    defaultValues: {
      accountOperationId: '',
      customerAccountCode: '',
      customerAccountId: '',
    },
  });

  const onSubmit = async (values: AssignAccountOperationFormSchema) => {
    try {
      await assignMutation.mutateAsync(values);
      setOpenSnack(true);
      reset({ accountOperationId: '', customerAccountCode: '', customerAccountId: '' });
    } catch (error) {
      // handled by mutation state
      console.error(error);
    }
  };

  const isPending = assignMutation.isPending;

  const errorMessage = (() => {
    if (!(assignMutation.error instanceof Error)) {
      return t('forms.error');
    }
    const message = assignMutation.error.message;
    return message.startsWith('forms.') ? t(message as Parameters<typeof t>[0]) : message;
  })();

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardContent>
          <Stack spacing={3}>
            <Stack spacing={1}>
              <Typography variant="h6">{t('forms.accountOperation.title')}</Typography>
              <Typography color="text.secondary" variant="body2">
                {t('forms.accountOperation.helper')}
              </Typography>
            </Stack>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                  control={control}
                  name="accountOperationId"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('forms.accountOperation.accountOperationId')}
                      required
                      fullWidth
                      error={Boolean(errors.accountOperationId)}
                      helperText={
                        errors.accountOperationId
                          ? t(errors.accountOperationId.message ?? 'forms.invalidNumber')
                          : undefined
                      }
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                  control={control}
                  name="customerAccountCode"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('forms.accountOperation.customerAccountCode')}
                      required
                      fullWidth
                      error={Boolean(errors.customerAccountCode)}
                      helperText={
                        errors.customerAccountCode
                          ? t(errors.customerAccountCode.message ?? 'forms.required')
                          : undefined
                      }
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                  control={control}
                  name="customerAccountId"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('forms.accountOperation.customerAccountId')}
                      fullWidth
                      error={Boolean(errors.customerAccountId)}
                      helperText={
                        errors.customerAccountId
                          ? t(errors.customerAccountId.message ?? 'forms.invalidNumber')
                          : t('forms.accountOperation.customerAccountIdHelper')
                      }
                    />
                  )}
                />
              </Grid>
            </Grid>
            {assignMutation.isError ? <Alert severity="error">{errorMessage}</Alert> : null}
            <Stack direction="row" justifyContent="flex-end">
              <Button
                type="submit"
                variant="contained"
                startIcon={<SaveIcon />}
                disabled={isPending || (!isDirty && !assignMutation.isError)}
              >
                {t('actions.save')}
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
      <Snackbar
        open={openSnack}
        autoHideDuration={4000}
        onClose={() => setOpenSnack(false)}
        message={t('forms.accountOperation.success')}
      />
    </Stack>
  );
};
