'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  Grid2 as Grid,
  MenuItem,
  Snackbar,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMediationOperations } from '@/features/mediation/api';
import {
  chargeCdrSchema,
  createCdrSchema,
  notifyRejectedCdrsSchema,
  processCdrSchema,
  registerCdrSchema,
  reservationActionSchema,
  reserveCdrSchema,
  type ChargeCdrSchema,
  type CreateCdrSchema,
  type NotifyRejectedCdrsSchema,
  type ProcessCdrSchema,
  type RegisterCdrSchema,
  type ReservationActionSchema,
  type ReserveCdrSchema,
} from '@/features/mediation/schema';
import type {
  CdrProcessingMode,
  ChargeCdrSummary,
  ProcessCdrSummary,
  ReservationSummary,
} from '@/features/mediation/types';

const processingModes: CdrProcessingMode[] = [
  'STOP_ON_FIRST_FAIL',
  'PROCESS_ALL',
  'ROLLBACK_ON_ERROR',
];

const chargeFlagFields = [
  'isVirtual',
  'isRateTriggeredEdr',
  'isReturnEDRs',
  'isReturnWalletOperations',
  'isReturnWalletOperationDetails',
  'isReturnCounters',
  'isGenerateRTs',
] as const;

const PayloadField = ({
  control,
  name,
  label,
  error,
}: {
  control: any;
  name: string;
  label: string;
  error?: string;
}) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <TextField
        {...field}
        fullWidth
        multiline
        minRows={6}
        label={label}
        error={Boolean(error)}
        helperText={error}
      />
    )}
  />
);

const MutationError = ({ message }: { message?: string }) =>
  message ? <Alert severity="error">{message}</Alert> : null;

const formatNumber = (value: number | undefined) =>
  typeof value === 'number' ? value.toLocaleString(undefined, { maximumFractionDigits: 2 }) : '—';

const ProcessResult = ({ summary, t }: { summary: ProcessCdrSummary | null; t: ReturnType<typeof useTranslations> }) => {
  if (!summary) {
    return null;
  }

  return (
    <Stack spacing={1.5}>
      <Typography variant="subtitle1">{t('forms.mediation.process.resultTitle')}</Typography>
      <Stack direction="row" spacing={2}>
        <Typography color="text.secondary">{t('forms.mediation.process.processed')}</Typography>
        <Typography>{summary.processedCount}</Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography color="text.secondary">{t('forms.mediation.process.rejected')}</Typography>
        <Typography>{summary.rejectedCount}</Typography>
      </Stack>
      {summary.errors.length > 0 ? (
        <Stack spacing={1}>
          <Typography color="text.secondary">{t('forms.mediation.process.errors')}</Typography>
          {summary.errors.map((error, index) => (
            <Typography key={`${error.cdrId ?? index}-${error.rejectReason ?? index}`} variant="body2">
              {t('forms.mediation.process.errorEntry', {
                id: error.cdrId ?? t('forms.mediation.process.unknownId'),
                reason: error.rejectReason ?? t('forms.mediation.process.noReason'),
              })}
            </Typography>
          ))}
        </Stack>
      ) : null}
    </Stack>
  );
};

const ChargeResult = ({ summary, t }: { summary: ChargeCdrSummary | null; t: ReturnType<typeof useTranslations> }) => {
  if (!summary) {
    return null;
  }

  return (
    <Stack spacing={1.5}>
      <Typography variant="subtitle1">{t('forms.mediation.charge.resultTitle')}</Typography>
      <Stack direction="row" spacing={2}>
        <Typography color="text.secondary">{t('forms.mediation.charge.amountWithoutTax')}</Typography>
        <Typography>{formatNumber(summary.amountWithoutTax)}</Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography color="text.secondary">{t('forms.mediation.charge.amountTax')}</Typography>
        <Typography>{formatNumber(summary.amountTax)}</Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography color="text.secondary">{t('forms.mediation.charge.amountWithTax')}</Typography>
        <Typography>{formatNumber(summary.amountWithTax)}</Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography color="text.secondary">{t('forms.mediation.charge.walletOperations')}</Typography>
        <Typography>{summary.walletOperationCount ?? '—'}</Typography>
      </Stack>
      {summary.reservationIds && summary.reservationIds.length > 0 ? (
        <Typography variant="body2" color="text.secondary">
          {t('forms.mediation.charge.reservations', { ids: summary.reservationIds.join(', ') })}
        </Typography>
      ) : null}
      {summary.edrIds && summary.edrIds.length > 0 ? (
        <Typography variant="body2" color="text.secondary">
          {t('forms.mediation.charge.edrs', { ids: summary.edrIds.join(', ') })}
        </Typography>
      ) : null}
    </Stack>
  );
};

const ReservationResult = ({ summary, t }: { summary: ReservationSummary | null; t: ReturnType<typeof useTranslations> }) => {
  if (!summary) {
    return null;
  }
  return (
    <Stack spacing={1.5}>
      <Typography variant="subtitle1">{t('forms.mediation.reservations.resultTitle')}</Typography>
      <Stack direction="row" spacing={2}>
        <Typography color="text.secondary">{t('forms.mediation.reservations.reservationId')}</Typography>
        <Typography>{summary.reservationId ?? '—'}</Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography color="text.secondary">{t('forms.mediation.reservations.availableQuantity')}</Typography>
        <Typography>{summary.availableQuantity ?? '—'}</Typography>
      </Stack>
    </Stack>
  );
};

export const MediationWorkspace = () => {
  const t = useTranslations();
  const operations = useMediationOperations();
  const [registerSnackbar, setRegisterSnackbar] = useState<string | null>(null);
  const [processSummary, setProcessSummary] = useState<ProcessCdrSummary | null>(null);
  const [processSnackbar, setProcessSnackbar] = useState<string | null>(null);
  const [chargeSummary, setChargeSummary] = useState<ChargeCdrSummary | null>(null);
  const [chargeSnackbar, setChargeSnackbar] = useState<string | null>(null);
  const [reservationSnackbar, setReservationSnackbar] = useState<string | null>(null);
  const [reservationSummary, setReservationSummary] = useState<ReservationSummary | null>(null);
  const [notifySnackbar, setNotifySnackbar] = useState<string | null>(null);
  const [createSnackbar, setCreateSnackbar] = useState<string | null>(null);

  const registerForm = useForm<RegisterCdrSchema>({
    resolver: zodResolver(registerCdrSchema),
    defaultValues: { payload: '', isReturnEDRs: true, mode: 'STOP_ON_FIRST_FAIL' },
  });

  const processForm = useForm<ProcessCdrSchema>({
    resolver: zodResolver(processCdrSchema),
    defaultValues: { payload: '' },
  });

  const chargeForm = useForm<ChargeCdrSchema>({
    resolver: zodResolver(chargeCdrSchema),
    defaultValues: {
      payload: '',
      isVirtual: false,
      isRateTriggeredEdr: false,
      isReturnEDRs: true,
      isReturnWalletOperations: false,
      isReturnWalletOperationDetails: false,
      isReturnCounters: false,
      isGenerateRTs: false,
      mode: 'STOP_ON_FIRST_FAIL',
    },
  });

  const reserveForm = useForm<ReserveCdrSchema>({
    resolver: zodResolver(reserveCdrSchema),
    defaultValues: { payload: '', isReturnEDRs: true, mode: 'STOP_ON_FIRST_FAIL' },
  });

  const reservationActionForm = useForm<ReservationActionSchema>({
    resolver: zodResolver(reservationActionSchema),
    defaultValues: { reservationId: 1, consumedQuantity: undefined },
  });

  const notifyForm = useForm<NotifyRejectedCdrsSchema>({
    resolver: zodResolver(notifyRejectedCdrsSchema),
    defaultValues: { payload: '', ipAddress: '' },
  });

  const createForm = useForm<CreateCdrSchema>({
    resolver: zodResolver(createCdrSchema),
    defaultValues: {
      eventDate: '',
      quantity: undefined,
      accessCode: '',
      parameter1: '',
      parameter2: '',
      parameter3: '',
      extraParam: '',
    },
  });

  const handleNumberChange = (onChange: (value: number | undefined) => void) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (value === '') {
        onChange(undefined);
        return;
      }
      const parsed = Number(value);
      onChange(Number.isNaN(parsed) ? undefined : parsed);
    };

  return (
    <Stack spacing={3}>
      <Typography variant="h4">{t('navigation.mediation')}</Typography>

      <Card>
        <CardHeader title={t('forms.mediation.register.title')} subheader={t('forms.mediation.register.subtitle')} />
        <CardContent>
          <Stack
            component="form"
            spacing={2}
            onSubmit={registerForm.handleSubmit(async (values) => {
              const response = await operations.register.mutateAsync(values);
              setRegisterSnackbar(response.message ?? t('feedback.saved'));
            })}
          >
            <PayloadField
              control={registerForm.control}
              name="payload"
              label={t('forms.mediation.register.payload')}
              error={registerForm.formState.errors.payload ? t(registerForm.formState.errors.payload.message ?? 'forms.required') : undefined}
            />
            <Grid container spacing={2} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                  control={registerForm.control}
                  name="isReturnEDRs"
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Switch
                          checked={Boolean(field.value)}
                          onChange={(_event, checked) => field.onChange(checked)}
                        />
                      }
                      label={t('forms.mediation.shared.returnEDRs')}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                  control={registerForm.control}
                  name="mode"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      fullWidth
                      label={t('forms.mediation.shared.mode.label')}
                    >
                      {processingModes.map((mode) => (
                        <MenuItem key={mode} value={mode}>
                          {t(`forms.mediation.shared.mode.options.${mode}`)}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>
            </Grid>
            <MutationError message={operations.register.isError ? t('forms.error') : undefined} />
            <Box display="flex" gap={2}>
              <Button type="submit" variant="contained" disabled={operations.register.isPending}>
                {t('actions.run')}
              </Button>
              <Button
                type="button"
                variant="outlined"
                onClick={() => {
                  registerForm.reset({ payload: '', isReturnEDRs: true, mode: 'STOP_ON_FIRST_FAIL' });
                  operations.register.reset();
                }}
                disabled={operations.register.isPending}
              >
                {t('actions.reset')}
              </Button>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title={t('forms.mediation.process.title')} subheader={t('forms.mediation.process.subtitle')} />
        <CardContent>
          <Stack
            component="form"
            spacing={2}
            onSubmit={processForm.handleSubmit(async (values) => {
              const summary = await operations.process.mutateAsync(values);
              setProcessSummary(summary);
              setProcessSnackbar(summary.message ?? t('feedback.saved'));
            })}
          >
            <PayloadField
              control={processForm.control}
              name="payload"
              label={t('forms.mediation.process.payload')}
              error={processForm.formState.errors.payload ? t(processForm.formState.errors.payload.message ?? 'forms.required') : undefined}
            />
            <MutationError message={operations.process.isError ? t('forms.error') : undefined} />
            <Box display="flex" gap={2}>
              <Button type="submit" variant="contained" disabled={operations.process.isPending}>
                {t('actions.run')}
              </Button>
              <Button
                type="button"
                variant="outlined"
                onClick={() => {
                  processForm.reset({ payload: '' });
                  operations.process.reset();
                  setProcessSummary(null);
                }}
                disabled={operations.process.isPending}
              >
                {t('actions.reset')}
              </Button>
            </Box>
            <ProcessResult summary={processSummary} t={t} />
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title={t('forms.mediation.charge.title')} subheader={t('forms.mediation.charge.subtitle')} />
        <CardContent>
          <Stack
            component="form"
            spacing={2}
            onSubmit={chargeForm.handleSubmit(async (values) => {
              const summary = await operations.charge.mutateAsync(values);
              setChargeSummary(summary);
              setChargeSnackbar(summary.message ?? t('feedback.saved'));
            })}
          >
            <PayloadField
              control={chargeForm.control}
              name="payload"
              label={t('forms.mediation.charge.payload')}
              error={chargeForm.formState.errors.payload ? t(chargeForm.formState.errors.payload.message ?? 'forms.required') : undefined}
            />
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Controller
                  control={chargeForm.control}
                  name="maxDepth"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="number"
                      fullWidth
                      label={t('forms.mediation.charge.maxDepth')}
                      onChange={handleNumberChange(field.onChange)}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Controller
                  control={chargeForm.control}
                  name="mode"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      fullWidth
                      label={t('forms.mediation.shared.mode.label')}
                    >
                      {processingModes.map((mode) => (
                        <MenuItem key={mode} value={mode}>
                          {t(`forms.mediation.shared.mode.options.${mode}`)}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  {chargeFlagFields.map((name) => (
                    <Controller
                      key={name}
                      control={chargeForm.control}
                      name={name}
                      render={({ field }) => (
                        <FormControlLabel
                          control={
                            <Switch
                              checked={Boolean(field.value)}
                              onChange={(_event, checked) => field.onChange(checked)}
                            />
                          }
                          label={t(`forms.mediation.charge.flags.${name}`)}
                        />
                      )}
                    />
                  ))}
                </Stack>
              </Grid>
            </Grid>
            <MutationError message={operations.charge.isError ? t('forms.error') : undefined} />
            <Box display="flex" gap={2}>
              <Button type="submit" variant="contained" disabled={operations.charge.isPending}>
                {t('actions.run')}
              </Button>
              <Button
                type="button"
                variant="outlined"
                onClick={() => {
                  chargeForm.reset({
                    payload: '',
                    isVirtual: false,
                    isRateTriggeredEdr: false,
                    isReturnEDRs: true,
                    isReturnWalletOperations: false,
                    isReturnWalletOperationDetails: false,
                    isReturnCounters: false,
                    isGenerateRTs: false,
                    maxDepth: undefined,
                    mode: 'STOP_ON_FIRST_FAIL',
                  });
                  operations.charge.reset();
                  setChargeSummary(null);
                }}
                disabled={operations.charge.isPending}
              >
                {t('actions.reset')}
              </Button>
            </Box>
            <ChargeResult summary={chargeSummary} t={t} />
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title={t('forms.mediation.reservations.title')} subheader={t('forms.mediation.reservations.subtitle')} />
        <CardContent>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack
                component="form"
                spacing={2}
                onSubmit={reserveForm.handleSubmit(async (values) => {
                  const summary = await operations.reserve.mutateAsync(values);
                  setReservationSummary(summary);
                  setReservationSnackbar(summary.message ?? t('feedback.saved'));
                })}
              >
                <PayloadField
                  control={reserveForm.control}
                  name="payload"
                  label={t('forms.mediation.reservations.payload')}
                  error={reserveForm.formState.errors.payload ? t(reserveForm.formState.errors.payload.message ?? 'forms.required') : undefined}
                />
                <Grid container spacing={2} alignItems="center">
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Controller
                      control={reserveForm.control}
                      name="isReturnEDRs"
                      render={({ field }) => (
                        <FormControlLabel
                          control={
                            <Switch
                              checked={Boolean(field.value)}
                              onChange={(_event, checked) => field.onChange(checked)}
                            />
                          }
                          label={t('forms.mediation.shared.returnEDRs')}
                        />
                      )}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Controller
                      control={reserveForm.control}
                      name="mode"
                      render={({ field }) => (
                        <TextField
                          {...field}
                          select
                          fullWidth
                          label={t('forms.mediation.shared.mode.label')}
                        >
                          {processingModes.map((mode) => (
                            <MenuItem key={mode} value={mode}>
                              {t(`forms.mediation.shared.mode.options.${mode}`)}
                            </MenuItem>
                          ))}
                        </TextField>
                      )}
                    />
                  </Grid>
                </Grid>
                <MutationError message={operations.reserve.isError ? t('forms.error') : undefined} />
                <Box display="flex" gap={2}>
                  <Button type="submit" variant="contained" disabled={operations.reserve.isPending}>
                    {t('actions.run')}
                  </Button>
                  <Button
                    type="button"
                    variant="outlined"
                    onClick={() => {
                      reserveForm.reset({ payload: '', isReturnEDRs: true, mode: 'STOP_ON_FIRST_FAIL' });
                      operations.reserve.reset();
                    }}
                    disabled={operations.reserve.isPending}
                  >
                    {t('actions.reset')}
                  </Button>
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack
                component="form"
                spacing={2}
                onSubmit={reservationActionForm.handleSubmit(async (values) => {
                  const mutation = reservationActionForm.getValues().reservationId ? operations.confirmReservation : operations.cancelReservation;
                  const response = await mutation.mutateAsync(values);
                  setReservationSnackbar(response.message ?? t('feedback.saved'));
                })}
              >
                <Controller
                  control={reservationActionForm.control}
                  name="reservationId"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="number"
                      fullWidth
                      label={t('forms.mediation.reservations.reservationId')}
                      onChange={handleNumberChange(field.onChange)}
                      error={Boolean(reservationActionForm.formState.errors.reservationId)}
                      helperText={
                        reservationActionForm.formState.errors.reservationId
                          ? t(reservationActionForm.formState.errors.reservationId.message ?? 'forms.required')
                          : undefined
                      }
                    />
                  )}
                />
                <Controller
                  control={reservationActionForm.control}
                  name="consumedQuantity"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="number"
                      fullWidth
                      label={t('forms.mediation.reservations.consumedQuantity')}
                      onChange={handleNumberChange(field.onChange)}
                    />
                  )}
                />
                <Stack direction="row" spacing={2}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={reservationActionForm.handleSubmit(async (values) => {
                      const response = await operations.confirmReservation.mutateAsync(values);
                      setReservationSnackbar(response.message ?? t('feedback.saved'));
                    })}
                    disabled={operations.confirmReservation.isPending}
                  >
                    {t('forms.mediation.reservations.confirm')}
                  </Button>
                  <Button
                    type="button"
                    color="warning"
                    variant="outlined"
                    onClick={reservationActionForm.handleSubmit(async (values) => {
                      const response = await operations.cancelReservation.mutateAsync(values);
                      setReservationSnackbar(response.message ?? t('feedback.saved'));
                    })}
                    disabled={operations.cancelReservation.isPending}
                  >
                    {t('forms.mediation.reservations.cancel')}
                  </Button>
                </Stack>
                <MutationError
                  message={
                    operations.confirmReservation.isError || operations.cancelReservation.isError
                      ? t('forms.error')
                      : undefined
                  }
                />
                <ReservationResult summary={reservationSummary} t={t} />
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title={t('forms.mediation.maintenance.title')} subheader={t('forms.mediation.maintenance.subtitle')} />
        <CardContent>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack
                component="form"
                spacing={2}
                onSubmit={notifyForm.handleSubmit(async (values) => {
                  const response = await operations.notifyRejected.mutateAsync(values);
                  setNotifySnackbar(response.message ?? t('feedback.saved'));
                })}
              >
                <PayloadField
                  control={notifyForm.control}
                  name="payload"
                  label={t('forms.mediation.maintenance.rejectedPayload')}
                  error={notifyForm.formState.errors.payload ? t(notifyForm.formState.errors.payload.message ?? 'forms.required') : undefined}
                />
                <Controller
                  control={notifyForm.control}
                  name="ipAddress"
                  render={({ field }) => (
                    <TextField {...field} fullWidth label={t('forms.mediation.maintenance.ipAddress')} />
                  )}
                />
                <MutationError message={operations.notifyRejected.isError ? t('forms.error') : undefined} />
                <Box display="flex" gap={2}>
                  <Button type="submit" variant="contained" disabled={operations.notifyRejected.isPending}>
                    {t('actions.run')}
                  </Button>
                  <Button
                    type="button"
                    variant="outlined"
                    onClick={() => {
                      notifyForm.reset({ payload: '', ipAddress: '' });
                      operations.notifyRejected.reset();
                    }}
                    disabled={operations.notifyRejected.isPending}
                  >
                    {t('actions.reset')}
                  </Button>
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack
                component="form"
                spacing={2}
                onSubmit={createForm.handleSubmit(async (values) => {
                  const response = await operations.createCdr.mutateAsync(values);
                  setCreateSnackbar(response.message ?? t('feedback.saved'));
                })}
              >
                <Controller
                  control={createForm.control}
                  name="eventDate"
                  render={({ field }) => (
                    <TextField {...field} type="datetime-local" fullWidth label={t('forms.mediation.maintenance.eventDate')} />
                  )}
                />
                <Controller
                  control={createForm.control}
                  name="quantity"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="number"
                      fullWidth
                      label={t('forms.mediation.maintenance.quantity')}
                      onChange={handleNumberChange(field.onChange)}
                    />
                  )}
                />
                <Controller
                  control={createForm.control}
                  name="accessCode"
                  render={({ field }) => (
                    <TextField {...field} fullWidth label={t('forms.mediation.maintenance.accessCode')} />
                  )}
                />
                <Controller
                  control={createForm.control}
                  name="parameter1"
                  render={({ field }) => (
                    <TextField {...field} fullWidth label={t('forms.mediation.maintenance.parameter1')} />
                  )}
                />
                <Controller
                  control={createForm.control}
                  name="parameter2"
                  render={({ field }) => (
                    <TextField {...field} fullWidth label={t('forms.mediation.maintenance.parameter2')} />
                  )}
                />
                <Controller
                  control={createForm.control}
                  name="parameter3"
                  render={({ field }) => (
                    <TextField {...field} fullWidth label={t('forms.mediation.maintenance.parameter3')} />
                  )}
                />
                <Controller
                  control={createForm.control}
                  name="extraParam"
                  render={({ field }) => (
                    <TextField {...field} fullWidth label={t('forms.mediation.maintenance.extraParam')} />
                  )}
                />
                <MutationError message={operations.createCdr.isError ? t('forms.error') : undefined} />
                <Box display="flex" gap={2}>
                  <Button type="submit" variant="contained" disabled={operations.createCdr.isPending}>
                    {t('actions.run')}
                  </Button>
                  <Button
                    type="button"
                    variant="outlined"
                    onClick={() => {
                      createForm.reset({
                        eventDate: '',
                        quantity: undefined,
                        accessCode: '',
                        parameter1: '',
                        parameter2: '',
                        parameter3: '',
                        extraParam: '',
                      });
                      operations.createCdr.reset();
                    }}
                    disabled={operations.createCdr.isPending}
                  >
                    {t('actions.reset')}
                  </Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Snackbar
        open={Boolean(registerSnackbar)}
        autoHideDuration={3000}
        onClose={() => setRegisterSnackbar(null)}
        message={registerSnackbar ?? ''}
      />
      <Snackbar
        open={Boolean(processSnackbar)}
        autoHideDuration={3000}
        onClose={() => setProcessSnackbar(null)}
        message={processSnackbar ?? ''}
      />
      <Snackbar
        open={Boolean(chargeSnackbar)}
        autoHideDuration={3000}
        onClose={() => setChargeSnackbar(null)}
        message={chargeSnackbar ?? ''}
      />
      <Snackbar
        open={Boolean(reservationSnackbar)}
        autoHideDuration={3000}
        onClose={() => setReservationSnackbar(null)}
        message={reservationSnackbar ?? ''}
      />
      <Snackbar
        open={Boolean(notifySnackbar)}
        autoHideDuration={3000}
        onClose={() => setNotifySnackbar(null)}
        message={notifySnackbar ?? ''}
      />
      <Snackbar
        open={Boolean(createSnackbar)}
        autoHideDuration={3000}
        onClose={() => setCreateSnackbar(null)}
        message={createSnackbar ?? ''}
      />
    </Stack>
  );
};
