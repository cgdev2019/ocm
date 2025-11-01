'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid2 as Grid,
  Snackbar,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  useInvoicingOperations,
  useInvoicingVersion,
} from '@/features/invoicing/api';
import {
  cancelBillingRunSchema,
  createBillingRunSchema,
  invoiceActionSchema,
  invalidateInvoiceDocumentsSchema,
  validateBillingRunSchema,
  type BillingRunIdSchema,
  type CancelBillingRunSchema,
  type CreateBillingRunSchema,
  type InvoiceActionSchema,
  type InvalidateInvoiceDocumentsSchema,
  type ValidateBillingRunSchema,
} from '@/features/invoicing/schema';
import type {
  BillingAccountInRunListItem,
  BillingRunInfoSummary,
  PostInvoicingReportSummary,
  PreInvoicingReportSummary,
} from '@/features/invoicing/types';

const KeyValueList = ({
  entries,
}: {
  entries: Array<{ label: string; value?: string | number | null | undefined }>;
}) => (
  <Stack spacing={1.5}>
    {entries.map((entry) => (
      <Stack key={entry.label} direction="row" spacing={1} alignItems="center">
        <Typography width={220} color="text.secondary">
          {entry.label}
        </Typography>
        <Typography>{entry.value ?? '—'}</Typography>
      </Stack>
    ))}
  </Stack>
);

type InvoicingOperations = ReturnType<typeof useInvoicingOperations>;

type ActionKey = 'cancel' | 'move' | 'reject' | 'validate' | 'rebuild';

const InvoiceActionsSection = ({ operations }: { operations: InvoicingOperations }) => {
  const t = useTranslations();
  const [action, setAction] = useState<ActionKey>('cancel');
  const [snackbar, setSnackbar] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InvoiceActionSchema>({
    resolver: zodResolver(invoiceActionSchema),
    defaultValues: { billingRunId: 0, invoiceIds: '', deleteCanceledInvoices: false },
  });

  const mutation = useMemo(() => {
    switch (action) {
      case 'cancel':
        return operations.cancelInvoice;
      case 'move':
        return operations.moveInvoice;
      case 'reject':
        return operations.rejectInvoice;
      case 'validate':
        return operations.validateInvoice;
      case 'rebuild':
      default:
        return operations.rebuildInvoice;
    }
  }, [action, operations.cancelInvoice, operations.moveInvoice, operations.rejectInvoice, operations.rebuildInvoice, operations.validateInvoice]);

  const onSubmit = async (values: InvoiceActionSchema) => {
    const result = await mutation.mutateAsync(values);
    setSnackbar(result.message ?? t('feedback.success'));
  };

  const actionLabel = (key: ActionKey) => t(`forms.invoicing.invoiceActions.${key}`);

  return (
    <Card>
      <CardHeader title={t('forms.invoicing.invoiceActions.title')} />
      <CardContent>
        <Stack spacing={3} component="form" onSubmit={handleSubmit(onSubmit)}>
          <Tabs value={action} onChange={(_event, value) => setAction(value)} variant="scrollable">
            <Tab value="cancel" label={actionLabel('cancel')} />
            <Tab value="move" label={actionLabel('move')} />
            <Tab value="reject" label={actionLabel('reject')} />
            <Tab value="validate" label={actionLabel('validate')} />
            <Tab value="rebuild" label={actionLabel('rebuild')} />
          </Tabs>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="billingRunId"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="number"
                    fullWidth
                    label={t('forms.invoicing.billingRunId')}
                    error={Boolean(errors.billingRunId)}
                    helperText={
                      errors.billingRunId ? t(errors.billingRunId.message ?? 'forms.required') : undefined
                    }
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Controller
                control={control}
                name="invoiceIds"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label={t('forms.invoicing.invoiceIdsLabel')}
                    helperText={t('forms.invoicing.invoiceIdsHelper')}
                    error={Boolean(errors.invoiceIds)}
                  />
                )}
              />
            </Grid>
          </Grid>
          {action === 'cancel' ? (
            <Controller
              control={control}
              name="deleteCanceledInvoices"
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} checked={Boolean(field.value)} />}
                  label={t('forms.invoicing.deleteCanceledInvoices')}
                />
              )}
            />
          ) : null}
          {mutation.isError ? <Alert severity="error">{t('forms.error')}</Alert> : null}
          <Box display="flex" gap={2}>
            <Button type="submit" variant="contained" disabled={mutation.isPending}>
              {t('actions.run')}
            </Button>
            <Button
              type="button"
              variant="outlined"
              startIcon={<RefreshIcon />}
              onClick={() => {
                reset();
                mutation.reset();
              }}
              disabled={mutation.isPending}
            >
              {t('actions.reset')}
            </Button>
          </Box>
        </Stack>
      </CardContent>
      <Snackbar
        open={Boolean(snackbar)}
        autoHideDuration={3000}
        onClose={() => setSnackbar(null)}
        message={snackbar ?? ''}
      />
    </Card>
  );
};

const CreateBillingRunSection = ({ operations }: { operations: InvoicingOperations }) => {
  const t = useTranslations();
  const [snackbar, setSnackbar] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateBillingRunSchema>({
    resolver: zodResolver(createBillingRunSchema),
    defaultValues: {
      billingCycleCode: '',
      billingRunTypeEnum: undefined,
      startDate: undefined,
      endDate: undefined,
      invoiceDate: undefined,
      lastTransactionDate: undefined,
      referenceDate: undefined,
      collectionDate: undefined,
      computeDatesAtValidation: false,
      skipValidationScript: false,
      generateAO: false,
      rejectAutoAction: undefined,
      suspectAutoAction: undefined,
    },
  });

  const handleAction = async (
    values: CreateBillingRunSchema,
    action: 'create' | 'upsert',
  ) => {
    const mutation = action === 'create' ? operations.createBillingRun : operations.createOrUpdateBillingRun;
    const result = await mutation.mutateAsync(values);
    setSnackbar(result.message ?? t('feedback.success'));
  };

  const actionErrors =
    operations.createBillingRun.isError || operations.createOrUpdateBillingRun.isError;

  return (
    <Card>
      <CardHeader title={t('forms.invoicing.createBillingRun.title')} />
      <CardContent>
        <Stack spacing={3}>
          {actionErrors ? <Alert severity="error">{t('forms.error')}</Alert> : null}
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="billingCycleCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.invoicing.billingCycleCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="billingRunTypeEnum"
                render={({ field }) => (
                  <TextField {...field} select fullWidth label={t('forms.invoicing.billingRunType')} SelectProps={{ native: true }}>
                    <option value="">{t('forms.selectPlaceholder')}</option>
                    <option value="AUTOMATIC">AUTOMATIC</option>
                    <option value="MANUAL">MANUAL</option>
                    <option value="FULL_AUTOMATIC">FULL_AUTOMATIC</option>
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="referenceDate"
                render={({ field }) => (
                  <TextField {...field} select fullWidth label={t('forms.invoicing.referenceDate')} SelectProps={{ native: true }}>
                    <option value="">{t('forms.selectPlaceholder')}</option>
                    <option value="TODAY">TODAY</option>
                    <option value="NEXT_INVOICE_DATE">NEXT_INVOICE_DATE</option>
                    <option value="LAST_TRANSACTION_DATE">LAST_TRANSACTION_DATE</option>
                    <option value="END_DATE">END_DATE</option>
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                control={control}
                name="startDate"
                render={({ field }) => (
                  <TextField {...field} fullWidth type="datetime-local" label={t('forms.invoicing.startDate')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                control={control}
                name="endDate"
                render={({ field }) => (
                  <TextField {...field} fullWidth type="datetime-local" label={t('forms.invoicing.endDate')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                control={control}
                name="invoiceDate"
                render={({ field }) => (
                  <TextField {...field} fullWidth type="datetime-local" label={t('forms.invoicing.invoiceDate')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                control={control}
                name="lastTransactionDate"
                render={({ field }) => (
                  <TextField {...field} fullWidth type="datetime-local" label={t('forms.invoicing.lastTransactionDate')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                control={control}
                name="collectionDate"
                render={({ field }) => (
                  <TextField {...field} fullWidth type="datetime-local" label={t('forms.invoicing.collectionDate')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                control={control}
                name="rejectAutoAction"
                render={({ field }) => (
                  <TextField {...field} select fullWidth label={t('forms.invoicing.rejectAutoAction')} SelectProps={{ native: true }}>
                    <option value="">{t('forms.selectPlaceholder')}</option>
                    <option value="CANCEL">CANCEL</option>
                    <option value="MOVE">MOVE</option>
                    <option value="MANUAL_ACTION">MANUAL_ACTION</option>
                    <option value="AUTOMATIC_VALIDATION">AUTOMATIC_VALIDATION</option>
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                control={control}
                name="suspectAutoAction"
                render={({ field }) => (
                  <TextField {...field} select fullWidth label={t('forms.invoicing.suspectAutoAction')} SelectProps={{ native: true }}>
                    <option value="">{t('forms.selectPlaceholder')}</option>
                    <option value="CANCEL">CANCEL</option>
                    <option value="MOVE">MOVE</option>
                    <option value="MANUAL_ACTION">MANUAL_ACTION</option>
                    <option value="AUTOMATIC_VALIDATION">AUTOMATIC_VALIDATION</option>
                  </TextField>
                )}
              />
            </Grid>
          </Grid>
          <Stack direction="row" spacing={2}>
            <Controller
              control={control}
              name="computeDatesAtValidation"
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} checked={Boolean(field.value)} />}
                  label={t('forms.invoicing.computeDatesAtValidation')}
                />
              )}
            />
            <Controller
              control={control}
              name="skipValidationScript"
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} checked={Boolean(field.value)} />}
                  label={t('forms.invoicing.skipValidationScript')}
                />
              )}
            />
            <Controller
              control={control}
              name="generateAO"
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} checked={Boolean(field.value)} />}
                  label={t('forms.invoicing.generateAO')}
                />
              )}
            />
          </Stack>
          <Box display="flex" gap={2}>
            <Button
              variant="contained"
              onClick={handleSubmit((values) => handleAction(values, 'create'))}
              disabled={operations.createBillingRun.isPending}
            >
              {t('forms.invoicing.createBillingRun.submitCreate')}
            </Button>
            <Button
              variant="outlined"
              onClick={handleSubmit((values) => handleAction(values, 'upsert'))}
              disabled={operations.createOrUpdateBillingRun.isPending}
            >
              {t('forms.invoicing.createBillingRun.submitUpsert')}
            </Button>
            <Button
              type="button"
              onClick={() => {
                reset();
                operations.createBillingRun.reset();
                operations.createOrUpdateBillingRun.reset();
              }}
            >
              {t('actions.reset')}
            </Button>
          </Box>
          {Object.values(errors).length > 0 ? <Alert severity="warning">{t('forms.error')}</Alert> : null}
        </Stack>
      </CardContent>
      <Snackbar
        open={Boolean(snackbar)}
        autoHideDuration={3000}
        onClose={() => setSnackbar(null)}
        message={snackbar ?? ''}
      />
    </Card>
  );
};

const BillingRunLifecycleSection = ({ operations }: { operations: InvoicingOperations }) => {
  const t = useTranslations();
  const [snackbar, setSnackbar] = useState<string | null>(null);

  const cancelForm = useForm<CancelBillingRunSchema>({
    resolver: zodResolver(cancelBillingRunSchema),
    defaultValues: { billingRunId: 0 },
  });

  const validateForm = useForm<ValidateBillingRunSchema>({
    resolver: zodResolver(validateBillingRunSchema),
    defaultValues: { billingRunId: 0 },
  });

  const deleteForm = useForm<BillingRunIdSchema>({
    resolver: zodResolver(cancelBillingRunSchema),
    defaultValues: { billingRunId: 0 },
  });

  const invalidateForm = useForm<InvalidateInvoiceDocumentsSchema>({
    resolver: zodResolver(invalidateInvoiceDocumentsSchema),
    defaultValues: { billingRunId: 0, invalidatePDFInvoices: false, invalidateXMLInvoices: false },
  });

  const runAction = async (resultMessage?: string | null) => {
    setSnackbar(resultMessage ?? t('feedback.success'));
  };

  return (
    <Card>
      <CardHeader title={t('forms.invoicing.lifecycle.title')} />
      <CardContent>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2}>
              <Typography variant="h6">{t('forms.invoicing.lifecycle.cancelTitle')}</Typography>
              <Stack direction="row" spacing={2} alignItems="center" component="form"
                onSubmit={cancelForm.handleSubmit(async (values) => {
                  const result = await operations.cancelBillingRun.mutateAsync(values);
                  await runAction(result.message);
                })}
              >
                <Controller
                  control={cancelForm.control}
                  name="billingRunId"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="number"
                      label={t('forms.invoicing.billingRunId')}
                      error={Boolean(cancelForm.formState.errors.billingRunId)}
                      helperText={
                        cancelForm.formState.errors.billingRunId
                          ? t(cancelForm.formState.errors.billingRunId.message ?? 'forms.required')
                          : undefined
                      }
                    />
                  )}
                />
                <Button type="submit" variant="contained" disabled={operations.cancelBillingRun.isPending}>
                  {t('forms.invoicing.lifecycle.cancelSubmit')}
                </Button>
                <Button
                  type="button"
                  variant="outlined"
                  onClick={cancelForm.handleSubmit(async (values) => {
                    const result = await operations.cancelBillingRunById.mutateAsync(values);
                    await runAction(result.message);
                  })}
                  disabled={operations.cancelBillingRunById.isPending}
                >
                  {t('forms.invoicing.lifecycle.cancelByIdSubmit')}
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2}>
              <Typography variant="h6">{t('forms.invoicing.lifecycle.validateTitle')}</Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Controller
                  control={validateForm.control}
                  name="billingRunId"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="number"
                      label={t('forms.invoicing.billingRunId')}
                      error={Boolean(validateForm.formState.errors.billingRunId)}
                    />
                  )}
                />
                <Button
                  variant="contained"
                  onClick={validateForm.handleSubmit(async (values) => {
                    const result = await operations.validateBillingRun.mutateAsync(values);
                    await runAction(result.message);
                  })}
                  disabled={operations.validateBillingRun.isPending}
                >
                  {t('forms.invoicing.lifecycle.validateSubmit')}
                </Button>
                <Button
                  variant="outlined"
                  onClick={validateForm.handleSubmit(async (values) => {
                    const result = await operations.validateBillingRunById.mutateAsync(values);
                    await runAction(result.message);
                  })}
                  disabled={operations.validateBillingRunById.isPending}
                >
                  {t('forms.invoicing.lifecycle.validateByIdSubmit')}
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2}>
              <Typography variant="h6">{t('forms.invoicing.lifecycle.deleteCanceledTitle')}</Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Controller
                  control={deleteForm.control}
                  name="billingRunId"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="number"
                      label={t('forms.invoicing.billingRunId')}
                      error={Boolean(deleteForm.formState.errors.billingRunId)}
                    />
                  )}
                />
                <Button
                  variant="contained"
                  onClick={deleteForm.handleSubmit(async (values) => {
                    const result = await operations.deleteCanceledInvoices.mutateAsync(values);
                    await runAction(result.message);
                  })}
                  disabled={operations.deleteCanceledInvoices.isPending}
                >
                  {t('forms.invoicing.lifecycle.deleteCanceledSubmit')}
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2}>
              <Typography variant="h6">{t('forms.invoicing.lifecycle.invalidateDocumentsTitle')}</Typography>
              <Stack spacing={2}>
                <Controller
                  control={invalidateForm.control}
                  name="billingRunId"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="number"
                      label={t('forms.invoicing.billingRunId')}
                      error={Boolean(invalidateForm.formState.errors.billingRunId)}
                    />
                  )}
                />
                <Controller
                  control={invalidateForm.control}
                  name="invalidateXMLInvoices"
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox {...field} checked={Boolean(field.value)} />}
                      label={t('forms.invoicing.invalidateXMLInvoices')}
                    />
                  )}
                />
                <Controller
                  control={invalidateForm.control}
                  name="invalidatePDFInvoices"
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox {...field} checked={Boolean(field.value)} />}
                      label={t('forms.invoicing.invalidatePDFInvoices')}
                    />
                  )}
                />
                <Button
                  variant="contained"
                  onClick={invalidateForm.handleSubmit(async (values) => {
                    const result = await operations.invalidateInvoiceDocuments.mutateAsync(values);
                    await runAction(result.message);
                  })}
                  disabled={operations.invalidateInvoiceDocuments.isPending}
                >
                  {t('forms.invoicing.lifecycle.invalidateDocumentsSubmit')}
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
      <Snackbar
        open={Boolean(snackbar)}
        autoHideDuration={3000}
        onClose={() => setSnackbar(null)}
        message={snackbar ?? ''}
      />
    </Card>
  );
};

const ReportsSection = ({ operations }: { operations: InvoicingOperations }) => {
  const t = useTranslations();
  const [accounts, setAccounts] = useState<BillingAccountInRunListItem[] | null>(null);
  const [runInfo, setRunInfo] = useState<BillingRunInfoSummary | null>(null);
  const [preReport, setPreReport] = useState<PreInvoicingReportSummary | null>(null);
  const [postReport, setPostReport] = useState<PostInvoicingReportSummary | null>(null);

  const accountsForm = useForm<BillingRunIdSchema>({
    resolver: zodResolver(cancelBillingRunSchema),
    defaultValues: { billingRunId: 0 },
  });

  const infoForm = useForm<BillingRunIdSchema>({
    resolver: zodResolver(cancelBillingRunSchema),
    defaultValues: { billingRunId: 0 },
  });

  const preForm = useForm<BillingRunIdSchema>({
    resolver: zodResolver(cancelBillingRunSchema),
    defaultValues: { billingRunId: 0 },
  });

  const postForm = useForm<BillingRunIdSchema>({
    resolver: zodResolver(cancelBillingRunSchema),
    defaultValues: { billingRunId: 0 },
  });

  return (
    <Card>
      <CardHeader title={t('forms.invoicing.reports.title')} />
      <CardContent>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2}>
              <Typography variant="h6">{t('forms.invoicing.reports.accountsTitle')}</Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Controller
                  control={accountsForm.control}
                  name="billingRunId"
                  render={({ field }) => (
                    <TextField {...field} type="number" label={t('forms.invoicing.billingRunId')} />
                  )}
                />
                <Button
                  variant="contained"
                  onClick={accountsForm.handleSubmit(async (values) => {
                    const result = await operations.billingAccountListInRun.mutateAsync(values);
                    setAccounts(result);
                  })}
                  disabled={operations.billingAccountListInRun.isPending}
                >
                  {t('actions.load')}
                </Button>
              </Stack>
              {operations.billingAccountListInRun.isPending ? (
                <CircularProgress size={24} />
              ) : null}
              {operations.billingAccountListInRun.isError ? (
                <Alert severity="error">{t('forms.error')}</Alert>
              ) : null}
              {accounts && accounts.length > 0 ? (
                <Stack spacing={1}>
                  {accounts.map((item) => (
                    <Typography key={item.id}>{item.code ?? item.id}</Typography>
                  ))}
                </Stack>
              ) : null}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2}>
              <Typography variant="h6">{t('forms.invoicing.reports.runInfoTitle')}</Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Controller
                  control={infoForm.control}
                  name="billingRunId"
                  render={({ field }) => (
                    <TextField {...field} type="number" label={t('forms.invoicing.billingRunId')} />
                  )}
                />
                <Button
                  variant="contained"
                  onClick={infoForm.handleSubmit(async (values) => {
                    const result = await operations.billingRunInfo.mutateAsync(values);
                    setRunInfo(result);
                  })}
                  disabled={operations.billingRunInfo.isPending}
                >
                  {t('actions.load')}
                </Button>
              </Stack>
              {operations.billingRunInfo.isError ? <Alert severity="error">{t('forms.error')}</Alert> : null}
              {runInfo ? (
                <KeyValueList
                  entries={[
                    { label: t('forms.invoicing.runInfo.code'), value: runInfo.code },
                    { label: t('forms.invoicing.runInfo.status'), value: runInfo.status ?? undefined },
                    { label: t('forms.invoicing.runInfo.billingCycle'), value: runInfo.billingCycle },
                    { label: t('forms.invoicing.runInfo.processDate'), value: runInfo.processDate },
                    { label: t('forms.invoicing.runInfo.invoiceDate'), value: runInfo.invoiceDate },
                    { label: t('forms.invoicing.runInfo.statusDate'), value: runInfo.statusDate },
                    {
                      label: t('forms.invoicing.runInfo.amountWithoutTax'),
                      value: runInfo.amountWithoutTax,
                    },
                    { label: t('forms.invoicing.runInfo.amountTax'), value: runInfo.amountTax },
                    { label: t('forms.invoicing.runInfo.amountWithTax'), value: runInfo.amountWithTax },
                  ]}
                />
              ) : null}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2}>
              <Typography variant="h6">{t('forms.invoicing.reports.preTitle')}</Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Controller
                  control={preForm.control}
                  name="billingRunId"
                  render={({ field }) => (
                    <TextField {...field} type="number" label={t('forms.invoicing.billingRunId')} />
                  )}
                />
                <Button
                  variant="contained"
                  onClick={preForm.handleSubmit(async (values) => {
                    const result = await operations.preInvoicingReport.mutateAsync(values);
                    setPreReport(result);
                  })}
                  disabled={operations.preInvoicingReport.isPending}
                >
                  {t('actions.load')}
                </Button>
              </Stack>
              {operations.preInvoicingReport.isError ? <Alert severity="error">{t('forms.error')}</Alert> : null}
              {preReport ? (
                <KeyValueList
                  entries={[
                    { label: t('forms.invoicing.preReport.billingCycleCode'), value: preReport.billingCycleCode },
                    { label: t('forms.invoicing.preReport.billableAccounts'), value: preReport.billableAccounts },
                    {
                      label: t('forms.invoicing.preReport.totalAmountWithoutTax'),
                      value: preReport.totalAmountWithoutTax,
                    },
                    { label: t('forms.invoicing.preReport.taxesAmount'), value: preReport.taxesAmount },
                    {
                      label: t('forms.invoicing.preReport.lastTransactionDate'),
                      value: preReport.lastTransactionDate,
                    },
                    { label: t('forms.invoicing.preReport.invoiceDate'), value: preReport.invoiceDate },
                  ]}
                />
              ) : null}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2}>
              <Typography variant="h6">{t('forms.invoicing.reports.postTitle')}</Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Controller
                  control={postForm.control}
                  name="billingRunId"
                  render={({ field }) => (
                    <TextField {...field} type="number" label={t('forms.invoicing.billingRunId')} />
                  )}
                />
                <Button
                  variant="contained"
                  onClick={postForm.handleSubmit(async (values) => {
                    const result = await operations.postInvoicingReport.mutateAsync(values);
                    setPostReport(result);
                  })}
                  disabled={operations.postInvoicingReport.isPending}
                >
                  {t('actions.load')}
                </Button>
              </Stack>
              {operations.postInvoicingReport.isError ? <Alert severity="error">{t('forms.error')}</Alert> : null}
              {postReport ? (
                <KeyValueList
                  entries={[
                    { label: t('forms.invoicing.postReport.invoicesNumber'), value: postReport.invoicesNumber },
                    {
                      label: t('forms.invoicing.postReport.positiveInvoicesAmount'),
                      value: postReport.positiveInvoicesAmount,
                    },
                    {
                      label: t('forms.invoicing.postReport.negativeInvoicesAmount'),
                      value: postReport.negativeInvoicesAmount,
                    },
                    { label: t('forms.invoicing.postReport.globalAmount'), value: postReport.globalAmount },
                  ]}
                />
              ) : null}
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export const InvoicingWorkspace = () => {
  const t = useTranslations();
  const operations = useInvoicingOperations();
  const versionQuery = useInvoicingVersion();

  return (
    <Stack spacing={3}>
      <Typography variant="h4">{t('navigation.invoicing')}</Typography>
      <CreateBillingRunSection operations={operations} />
      <InvoiceActionsSection operations={operations} />
      <BillingRunLifecycleSection operations={operations} />
      <ReportsSection operations={operations} />
      {versionQuery.isSuccess ? (
        <Typography variant="body2" color="text.secondary" textAlign="right">
          {t('forms.invoicing.version', { version: versionQuery.data })}
        </Typography>
      ) : null}
    </Stack>
  );
};
