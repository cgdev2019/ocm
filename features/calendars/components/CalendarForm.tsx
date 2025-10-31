'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useCalendarMutations } from '@/features/calendars/api';
import { calendarFormSchema, type CalendarFormSchema } from '@/features/calendars/schema';
import type { CalendarFormValues } from '@/features/calendars/types';

const CALENDAR_TYPE_OPTIONS: Array<{ value: CalendarFormValues['calendarType']; label: string }> = [
  { value: 'YEARLY', label: 'forms.calendar.types.yearly' },
  { value: 'DAILY', label: 'forms.calendar.types.daily' },
  { value: 'PERIOD', label: 'forms.calendar.types.period' },
  { value: 'INTERVAL', label: 'forms.calendar.types.interval' },
  { value: 'INTERSECT', label: 'forms.calendar.types.intersect' },
  { value: 'UNION', label: 'forms.calendar.types.union' },
  { value: 'APPEND', label: 'forms.calendar.types.append' },
  { value: 'BANKING', label: 'forms.calendar.types.banking' },
  { value: 'FIXED', label: 'forms.calendar.types.fixed' },
];

const PERIOD_UNIT_OPTIONS: Array<{ value: NonNullable<CalendarFormValues['periodUnit']>; label: string }> = [
  { value: 'MONTH', label: 'forms.calendar.periodUnits.month' },
  { value: 'DAY_OF_MONTH', label: 'forms.calendar.periodUnits.dayOfMonth' },
  { value: 'HOUR_OF_DAY', label: 'forms.calendar.periodUnits.hourOfDay' },
  { value: 'MINUTE', label: 'forms.calendar.periodUnits.minute' },
  { value: 'SECOND', label: 'forms.calendar.periodUnits.second' },
];

export const CalendarForm = ({
  defaultValues,
  mode,
  onSuccess,
}: {
  defaultValues?: Partial<CalendarFormValues>;
  mode: 'create' | 'edit';
  onSuccess?: (values: CalendarFormSchema) => void;
}) => {
  const t = useTranslations();
  const { create, upsert } = useCalendarMutations();
  const [openSnack, setOpenSnack] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<CalendarFormSchema>({
    resolver: zodResolver(calendarFormSchema),
    defaultValues: {
      code: '',
      calendarType: 'YEARLY',
      ...defaultValues,
    },
  });

  const onSubmit = async (values: CalendarFormSchema) => {
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
                    label={t('forms.calendar.code')}
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
                  <TextField {...field} label={t('forms.calendar.description')} fullWidth />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="calendarType"
                render={({ field }) => (
                  <TextField {...field} select label={t('forms.calendar.calendarType')} required fullWidth>
                    {CALENDAR_TYPE_OPTIONS.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {t(option.label)}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="periodLength"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="number"
                    label={t('forms.calendar.periodLength')}
                    fullWidth
                    error={Boolean(errors.periodLength)}
                    helperText={
                      errors.periodLength ? t(errors.periodLength.message ?? 'forms.invalidNumber') : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="periodUnit"
                render={({ field }) => (
                  <TextField {...field} select label={t('forms.calendar.periodUnit')} fullWidth>
                    {PERIOD_UNIT_OPTIONS.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {t(option.label)}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="nbPeriods"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="number"
                    label={t('forms.calendar.nbPeriods')}
                    fullWidth
                    error={Boolean(errors.nbPeriods)}
                    helperText={
                      errors.nbPeriods ? t(errors.nbPeriods.message ?? 'forms.invalidNumber') : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="startDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="date"
                    label={t('forms.calendar.startDate')}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="endDate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="date"
                    label={t('forms.calendar.endDate')}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name="initDateEL"
                render={({ field }) => (
                  <TextField {...field} label={t('forms.calendar.initDateEL')} fullWidth />
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
