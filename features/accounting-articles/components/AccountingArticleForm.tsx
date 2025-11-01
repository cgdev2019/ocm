'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlineOutlined';
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
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useAccountingArticleMutations } from '@/features/accounting-articles/api';
import {
  accountingArticleFormSchema,
  type AccountingArticleFormSchema,
} from '@/features/accounting-articles/schema';
import type { AccountingArticleFormValues } from '@/features/accounting-articles/types';

export const AccountingArticleForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<AccountingArticleFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: AccountingArticleFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, update } = useAccountingArticleMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<AccountingArticleFormSchema>({
    resolver: zodResolver(accountingArticleFormSchema),
    defaultValues: {
      id: defaultValues?.id,
      code: '',
      description: '',
      invoiceSubCategoryCode: '',
      taxClassCode: '',
      accountingCode: undefined,
      articleFamilyCode: undefined,
      invoiceTypeCode: undefined,
      invoiceTypeEl: undefined,
      accountingCodeEl: undefined,
      columnCriteriaEl: undefined,
      analyticCode1: undefined,
      analyticCode2: undefined,
      analyticCode3: undefined,
      unitPrice: undefined,
      ignoreAggregation: false,
      languageDescriptions: [],
      customFieldsJson: undefined,
      ...defaultValues,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'languageDescriptions',
  });

  const isPending = mode === 'create' ? create.isPending : update.isPending;

  const onSubmit = async (values: AccountingArticleFormSchema) => {
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
                    label={t('forms.accountingArticle.code')}
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
                    required
                    fullWidth
                    label={t('forms.accountingArticle.description')}
                    error={Boolean(errors.description)}
                    helperText={
                      errors.description ? t(errors.description.message ?? 'forms.required') : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="invoiceSubCategoryCode"
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label={t('forms.accountingArticle.invoiceSubCategory')}
                    error={Boolean(errors.invoiceSubCategoryCode)}
                    helperText={
                      errors.invoiceSubCategoryCode
                        ? t(errors.invoiceSubCategoryCode.message ?? 'forms.required')
                        : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="taxClassCode"
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    label={t('forms.accountingArticle.taxClass')}
                    error={Boolean(errors.taxClassCode)}
                    helperText={
                      errors.taxClassCode ? t(errors.taxClassCode.message ?? 'forms.required') : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="accountingCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.accountingArticle.accountingCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="articleFamilyCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.accountingArticle.articleFamily')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="invoiceTypeCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.accountingArticle.invoiceType')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="unitPrice"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="number"
                    label={t('forms.accountingArticle.unitPrice')}
                    error={Boolean(errors.unitPrice)}
                    helperText={errors.unitPrice ? t(errors.unitPrice.message ?? 'forms.invalidNumber') : undefined}
                    inputProps={{ min: 0, step: '0.01' }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="invoiceTypeEl"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.accountingArticle.invoiceTypeEl')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="accountingCodeEl"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.accountingArticle.accountingCodeEl')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="columnCriteriaEl"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.accountingArticle.columnCriteriaEl')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="analyticCode1"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.accountingArticle.analyticCode1')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="analyticCode2"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.accountingArticle.analyticCode2')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="analyticCode3"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.accountingArticle.analyticCode3')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name="ignoreAggregation"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={Boolean(field.value)} />}
                    label={t('forms.accountingArticle.ignoreAggregation')}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name="customFieldsJson"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    minRows={4}
                    label={t('forms.accountingArticle.customFields')}
                    error={Boolean(errors.customFieldsJson)}
                    helperText={
                      errors.customFieldsJson
                        ? t(errors.customFieldsJson.message ?? 'forms.invalidJson')
                        : undefined
                    }
                  />
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">{t('forms.accountingArticle.languageDescriptions')}</Typography>
              <Button
                onClick={() => append({ languageCode: '', description: '' })}
                variant="outlined"
                startIcon={<AddIcon />}
              >
                {t('actions.add')}
              </Button>
            </Stack>
            {fields.length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                {t('forms.accountingArticle.noLanguageDescriptions')}
              </Typography>
            ) : null}
            {fields.map((field, index) => (
              <Stack key={field.id} direction="row" spacing={2} alignItems="flex-start">
                <Controller
                  control={control}
                  name={`languageDescriptions.${index}.languageCode`}
                  render={({ field: languageField }) => (
                    <TextField
                      {...languageField}
                      required
                      label={t('forms.accountingArticle.languageCode')}
                      error={Boolean(errors.languageDescriptions?.[index]?.languageCode)}
                      helperText={
                        errors.languageDescriptions?.[index]?.languageCode
                          ? t(errors.languageDescriptions?.[index]?.languageCode?.message ?? 'forms.required')
                          : undefined
                      }
                    />
                  )}
                />
                <Controller
                  control={control}
                  name={`languageDescriptions.${index}.description`}
                  render={({ field: descriptionField }) => (
                    <TextField
                      {...descriptionField}
                      required
                      label={t('forms.accountingArticle.languageDescription')}
                      error={Boolean(errors.languageDescriptions?.[index]?.description)}
                      helperText={
                        errors.languageDescriptions?.[index]?.description
                          ? t(errors.languageDescriptions?.[index]?.description?.message ?? 'forms.required')
                          : undefined
                      }
                      sx={{ flexGrow: 1 }}
                    />
                  )}
                />
                <Button
                  aria-label={t('actions.remove')}
                  onClick={() => remove(index)}
                  color="error"
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                >
                  {t('actions.remove')}
                </Button>
              </Stack>
            ))}
          </Stack>
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
