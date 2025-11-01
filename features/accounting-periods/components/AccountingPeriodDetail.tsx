'use client';

import EditIcon from '@mui/icons-material/Edit';
import { Alert, Button, Card, CardContent, CircularProgress, MenuItem, Snackbar, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import {
  useAccountingPeriod,
  useAccountingPeriodStatusMutations,
} from '@/features/accounting-periods/api';
import type { AccountingSubPeriodStatusInput } from '@/features/accounting-periods/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

const STATUS_OPTIONS = ['OPEN', 'CLOSED', 'REOPEN'];

type SnackbarState = { message: string; severity: 'success' | 'error' } | null;

export const AccountingPeriodDetail = ({ fiscalYear }: { fiscalYear: string }) => {
  const { data, isLoading, isError } = useAccountingPeriod(fiscalYear);
  const { updateStatus, updateAllUsersStatus, updateRegularUsersStatus } = useAccountingPeriodStatusMutations();
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const [globalStatus, setGlobalStatus] = useState(STATUS_OPTIONS[0]);
  const [allUsersForm, setAllUsersForm] = useState<AccountingSubPeriodStatusInput>({
    fiscalYear,
    number: '',
    status: STATUS_OPTIONS[0],
    reason: '',
  });
  const [regularUsersForm, setRegularUsersForm] = useState<AccountingSubPeriodStatusInput>({
    fiscalYear,
    number: '',
    status: STATUS_OPTIONS[0],
    reason: '',
  });
  const [snackbar, setSnackbar] = useState<SnackbarState>(null);

  if (isLoading) {
    return (
      <Stack spacing={2} alignItems="center" py={6}>
        <CircularProgress size={32} />
        <Typography variant="body2" color="text.secondary">
          {t('table.loading')}
        </Typography>
      </Stack>
    );
  }

  if (isError || !data) {
    return <Alert severity="error">{t('forms.error')}</Alert>;
  }

  const showMessage = (message: string, severity: 'success' | 'error' = 'success') => {
    setSnackbar({ message, severity });
  };

  const handleGlobalStatusSubmit = async () => {
    try {
      await updateStatus.mutateAsync({ fiscalYear, status: globalStatus });
      showMessage(t('forms.accountingPeriod.statusUpdated'));
    } catch (error) {
      showMessage(error instanceof Error ? error.message : t('forms.error'), 'error');
    }
  };

  const handleAllUsersSubmit = async () => {
    try {
      await updateAllUsersStatus.mutateAsync({ ...allUsersForm, fiscalYear });
      showMessage(t('forms.accountingPeriod.subStatusUpdated'));
    } catch (error) {
      showMessage(error instanceof Error ? error.message : t('forms.error'), 'error');
    }
  };

  const handleRegularUsersSubmit = async () => {
    try {
      await updateRegularUsersStatus.mutateAsync({ ...regularUsersForm, fiscalYear });
      showMessage(t('forms.accountingPeriod.subStatusUpdated'));
    } catch (error) {
      showMessage(error instanceof Error ? error.message : t('forms.error'), 'error');
    }
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{data.fiscalYear}</Typography>
        <Button
          onClick={() => router.push(`${pathname}/edit`)}
          startIcon={<EditIcon />}
          variant="outlined"
        >
          {t('actions.edit')}
        </Button>
      </Stack>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Stack spacing={1}>
                <Row label={t('forms.accountingPeriod.status')} value={data.accountingPeriodStatus} />
                <Row label={t('forms.accountingPeriod.subAccountingPeriodType')} value={data.subAccountingPeriodType} />
                <Row label={t('forms.accountingPeriod.subAccountingPeriodProgress')} value={data.subAccountingPeriodProgress} />
                <Row
                  label={t('forms.accountingPeriod.ongoingSubAccountingPeriods')}
                  value={data.ongoingSubAccountingPeriods?.toString()}
                />
                <Row label={t('forms.accountingPeriod.startDate')} value={data.startDate} />
                <Row label={t('forms.accountingPeriod.endDate')} value={data.endDate} />
                <Row
                  label={t('forms.accountingPeriod.useSubAccountingPeriods')}
                  value={data.useSubAccountingPeriods ? t('common.yes') : t('common.no')}
                />
                <Row label={t('forms.accountingPeriod.regularUserLockOption')} value={data.regularUserLockOption} />
                <Row
                  label={t('forms.accountingPeriod.customLockNumberDays')}
                  value={data.customLockNumberDays?.toString()}
                />
                <Row label={t('forms.accountingPeriod.customLockOption')} value={data.customLockOption} />
                <Row label={t('forms.accountingPeriod.forceCustomDay')} value={data.forceCustomDay?.toString()} />
                <Row label={t('forms.accountingPeriod.forceOption')} value={data.forceOption} />
                <Row
                  label={t('forms.accountingPeriod.accountingOperationAction')}
                  value={data.accountingOperationAction}
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={2}>
            <Card component="form" onSubmit={(event) => event.preventDefault()}>
              <CardContent>
                <Stack spacing={2}>
                  <Typography variant="h6">{t('forms.accountingPeriod.updateStatusTitle')}</Typography>
                  <TextField
                    select
                    label={t('forms.accountingPeriod.status')}
                    value={globalStatus}
                    onChange={(event) => setGlobalStatus(event.target.value)}
                  >
                    {STATUS_OPTIONS.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                  <Button
                    onClick={handleGlobalStatusSubmit}
                    variant="contained"
                    disabled={updateStatus.isPending}
                  >
                    {t('forms.accountingPeriod.applyStatus')}
                  </Button>
                </Stack>
              </CardContent>
            </Card>
            <Card component="form" onSubmit={(event) => event.preventDefault()}>
              <CardContent>
                <Stack spacing={2}>
                  <Typography variant="h6">{t('forms.accountingPeriod.updateAllUsersTitle')}</Typography>
                  <TextField
                    label={t('forms.accountingPeriod.subPeriodNumber')}
                    value={allUsersForm.number}
                    onChange={(event) => setAllUsersForm((prev) => ({ ...prev, number: event.target.value }))}
                    required
                  />
                  <TextField
                    select
                    label={t('forms.accountingPeriod.status')}
                    value={allUsersForm.status}
                    onChange={(event) => setAllUsersForm((prev) => ({ ...prev, status: event.target.value }))}
                  >
                    {STATUS_OPTIONS.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    label={t('forms.accountingPeriod.reason')}
                    value={allUsersForm.reason ?? ''}
                    onChange={(event) => setAllUsersForm((prev) => ({ ...prev, reason: event.target.value }))}
                  />
                  <Button
                    onClick={handleAllUsersSubmit}
                    variant="contained"
                    disabled={updateAllUsersStatus.isPending}
                  >
                    {t('forms.accountingPeriod.applyStatus')}
                  </Button>
                </Stack>
              </CardContent>
            </Card>
            <Card component="form" onSubmit={(event) => event.preventDefault()}>
              <CardContent>
                <Stack spacing={2}>
                  <Typography variant="h6">{t('forms.accountingPeriod.updateRegularUsersTitle')}</Typography>
                  <TextField
                    label={t('forms.accountingPeriod.subPeriodNumber')}
                    value={regularUsersForm.number}
                    onChange={(event) => setRegularUsersForm((prev) => ({ ...prev, number: event.target.value }))}
                    required
                  />
                  <TextField
                    select
                    label={t('forms.accountingPeriod.status')}
                    value={regularUsersForm.status}
                    onChange={(event) => setRegularUsersForm((prev) => ({ ...prev, status: event.target.value }))}
                  >
                    {STATUS_OPTIONS.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    label={t('forms.accountingPeriod.reason')}
                    value={regularUsersForm.reason ?? ''}
                    onChange={(event) => setRegularUsersForm((prev) => ({ ...prev, reason: event.target.value }))}
                  />
                  <Button
                    onClick={handleRegularUsersSubmit}
                    variant="contained"
                    disabled={updateRegularUsersStatus.isPending}
                  >
                    {t('forms.accountingPeriod.applyStatus')}
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
      <Snackbar
        open={Boolean(snackbar)}
        autoHideDuration={4000}
        onClose={() => setSnackbar(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        {snackbar ? <Alert severity={snackbar.severity}>{snackbar.message}</Alert> : undefined}
      </Snackbar>
    </Stack>
  );
};

const Row = ({ label, value }: { label: string; value?: string | null }) => (
  <Stack direction="row" spacing={1} alignItems="baseline">
    <Typography width={220} color="text.secondary">
      {label}
    </Typography>
    <Typography>{value ?? '—'}</Typography>
  </Stack>
);
