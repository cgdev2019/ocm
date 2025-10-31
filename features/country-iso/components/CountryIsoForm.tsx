'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import Autocomplete from '@mui/material/Autocomplete';
import { Alert, Box, Button, Card, CardContent, Snackbar, Stack, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useCountryIsoMutations } from '@/features/country-iso/api';
import { useCurrencyIsos } from '@/features/currency-iso/api';
import type { CurrencyIsoListItem } from '@/features/currency-iso/types';
import { useLanguageIsos } from '@/features/language-iso/api';
import type { LanguageIsoListItem } from '@/features/language-iso/types';
import { countryIsoFormSchema, type CountryIsoFormSchema } from '@/features/country-iso/schema';
import type { CountryIsoFormValues } from '@/features/country-iso/types';

export const CountryIsoForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<CountryIsoFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: CountryIsoFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, upsert } = useCountryIsoMutations();
  const [openSnack, setOpenSnack] = useState(false);
  const {
    data: currencyOptions,
    isLoading: isLoadingCurrencies,
    isError: isCurrencyError,
  } = useCurrencyIsos();
  const {
    data: languageOptions,
    isLoading: isLoadingLanguages,
    isError: isLanguageError,
  } = useLanguageIsos();

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<CountryIsoFormSchema>({
    resolver: zodResolver(countryIsoFormSchema),
    defaultValues: {
      countryCode: '',
      currencyCode: '',
      languageCode: '',
      ...defaultValues,
    },
  });

  const onSubmit = async (values: CountryIsoFormSchema) => {
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
                name="countryCode"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.countryIso.countryCode')}
                    required
                    fullWidth
                    error={Boolean(errors.countryCode)}
                    helperText={errors.countryCode ? t(errors.countryCode.message ?? 'forms.required') : undefined}
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
                  <TextField {...field} label={t('forms.countryIso.description')} fullWidth />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="currencyCode"
                render={({ field: { onChange, value, onBlur, ref } }) => {
                  const options = currencyOptions ?? [];
                  const selectedOption = options.find((option) => option.code === value);

                  return (
                    <Autocomplete<CurrencyIsoListItem, false, false, true>
                      options={options}
                      loading={isLoadingCurrencies}
                      freeSolo
                      value={selectedOption ?? (value ? value : null)}
                      onChange={(_event, newValue) => {
                        if (typeof newValue === 'string') {
                          onChange(newValue);
                        } else {
                          onChange(newValue?.code ?? '');
                        }
                      }}
                      onInputChange={(_event, newInputValue, reason) => {
                        if (reason === 'input') {
                          onChange(newInputValue);
                        } else if (reason === 'clear') {
                          onChange('');
                        }
                      }}
                      onBlur={onBlur}
                      getOptionLabel={(option) => {
                        if (typeof option === 'string') {
                          return option;
                        }
                        return option.description ? `${option.code} — ${option.description}` : option.code;
                      }}
                      isOptionEqualToValue={(option, currentValue) => {
                        if (typeof currentValue === 'string') {
                          return option.code === currentValue;
                        }
                        return option.code === currentValue.code;
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          inputRef={ref}
                          label={t('forms.countryIso.currencyCode')}
                          required
                          fullWidth
                          error={Boolean(errors.currencyCode)}
                          helperText={
                            errors.currencyCode
                              ? t(errors.currencyCode.message ?? 'forms.required')
                              : isCurrencyError
                                ? t('forms.error')
                                : undefined
                          }
                        />
                      )}
                    />
                  );
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="languageCode"
                render={({ field: { onChange, value, onBlur, ref } }) => {
                  const options = languageOptions ?? [];
                  const selectedOption = options.find((option) => option.code === value);

                  return (
                    <Autocomplete<LanguageIsoListItem, false, false, true>
                      options={options}
                      loading={isLoadingLanguages}
                      freeSolo
                      value={selectedOption ?? (value ? value : null)}
                      onChange={(_event, newValue) => {
                        if (typeof newValue === 'string') {
                          onChange(newValue);
                        } else {
                          onChange(newValue?.code ?? '');
                        }
                      }}
                      onInputChange={(_event, newInputValue, reason) => {
                        if (reason === 'input') {
                          onChange(newInputValue);
                        } else if (reason === 'clear') {
                          onChange('');
                        }
                      }}
                      onBlur={onBlur}
                      getOptionLabel={(option) => {
                        if (typeof option === 'string') {
                          return option;
                        }
                        return option.description ? `${option.code} — ${option.description}` : option.code;
                      }}
                      isOptionEqualToValue={(option, currentValue) => {
                        if (typeof currentValue === 'string') {
                          return option.code === currentValue;
                        }
                        return option.code === currentValue.code;
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          inputRef={ref}
                          label={t('forms.countryIso.languageCode')}
                          required
                          fullWidth
                          error={Boolean(errors.languageCode)}
                          helperText={
                            errors.languageCode
                              ? t(errors.languageCode.message ?? 'forms.required')
                              : isLanguageError
                                ? t('forms.error')
                                : undefined
                          }
                        />
                      )}
                    />
                  );
                }}
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
