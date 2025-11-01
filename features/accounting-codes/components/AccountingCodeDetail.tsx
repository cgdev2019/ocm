'use client';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import ToggleOnIcon from '@mui/icons-material/ToggleOnOutlined';
import ToggleOffIcon from '@mui/icons-material/ToggleOffOutlined';
import {
  Alert,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useAccountingCode, useAccountingCodeMutations } from '@/features/accounting-codes/api';
import type { AccountingCodeDetailValues } from '@/features/accounting-codes/types';
import { useRouter } from '@/lib/i18n/navigation';

const Row = ({ label, value }: { label: string; value?: string | null }) => (
  <Stack direction="row" spacing={1}>
    <Typography width={220} color="text.secondary">
      {label}
    </Typography>
    <Typography>{value ?? '—'}</Typography>
  </Stack>
);

const BooleanChip = ({ label, value, yesLabel, noLabel }: { label: string; value?: boolean; yesLabel: string; noLabel: string }) => (
  <Stack direction="row" spacing={1} alignItems="center">
    <Typography width={220} color="text.secondary">
      {label}
    </Typography>
    {typeof value === 'boolean' ? (
      <Chip
        label={value ? yesLabel : noLabel}
        color={value ? 'default' : 'primary'}
        variant={value ? 'outlined' : 'filled'}
        size="small"
      />
    ) : (
      <Typography>—</Typography>
    )}
  </Stack>
);

const Details = ({ data }: { data: AccountingCodeDetailValues }) => {
  const t = useTranslations();
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardContent>
            <Stack spacing={1.5}>
              <Row label={t('forms.accountingCode.description')} value={data.description} />
              <Row label={t('forms.accountingCode.parentAccountingCode')} value={data.parentAccountingCode} />
              <Row label={t('forms.accountingCode.reportingAccount')} value={data.reportingAccount} />
              <Row
                label={t('forms.accountingCode.chartOfAccountType')}
                value={data.chartOfAccountTypeEnum ? t(`forms.accountingCode.type.${data.chartOfAccountTypeEnum}`) : undefined}
              />
              <Row
                label={t('forms.accountingCode.chartOfAccountViewType')}
                value={
                  data.chartOfAccountViewTypeEnum
                    ? t(`forms.accountingCode.view.${data.chartOfAccountViewTypeEnum}`)
                    : undefined
                }
              />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardContent>
            <Stack spacing={1.5}>
              <Typography variant="h6">{t('forms.accountingCode.additionalInfo')}</Typography>
              <BooleanChip
                label={t('forms.accountingCode.disabled')}
                value={data.disabled}
                yesLabel={t('common.yes')}
                noLabel={t('common.no')}
              />
              <BooleanChip
                label={t('forms.accountingCode.migrated')}
                value={data.migrated}
                yesLabel={t('common.yes')}
                noLabel={t('common.no')}
              />
              <Row label={t('forms.accountingCode.notes')} value={data.notes} />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export const AccountingCodeDetail = ({ code }: { code: string }) => {
  const { data, isLoading, isError } = useAccountingCode(code);
  const { remove, enable, disable } = useAccountingCodeMutations();
  const t = useTranslations();
  const router = useRouter();
  const [confirmOpen, setConfirmOpen] = useState(false);

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

  const handleDelete = async () => {
    await remove.mutateAsync(code);
    router.replace('../');
  };

  const handleToggle = async () => {
    if (data.disabled) {
      await enable.mutateAsync(code);
    } else {
      await disable.mutateAsync(code);
    }
  };

  const togglePending = enable.isPending || disable.isPending;

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{code}</Typography>
        <Stack direction="row" spacing={1}>
          <Button startIcon={<EditIcon />} variant="outlined" onClick={() => router.push('./edit')}>
            {t('actions.edit')}
          </Button>
          <Button
            startIcon={data.disabled ? <ToggleOnIcon /> : <ToggleOffIcon />}
            variant="outlined"
            color={data.disabled ? 'success' : 'warning'}
            onClick={handleToggle}
            disabled={togglePending}
          >
            {data.disabled ? t('actions.enable') : t('actions.disable')}
          </Button>
          <Button
            startIcon={<DeleteOutlineIcon />}
            color="error"
            onClick={() => setConfirmOpen(true)}
            disabled={remove.isPending}
          >
            {t('actions.delete')}
          </Button>
        </Stack>
      </Stack>
      <Details data={data} />
      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>{t('actions.delete')}</DialogTitle>
        <DialogContent>
          <DialogContentText>{t('forms.confirmDeletion')}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)}>{t('actions.cancel')}</Button>
          <Button color="error" onClick={handleDelete} disabled={remove.isPending}>
            {t('actions.delete')}
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};
