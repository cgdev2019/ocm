'use client';

import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import ToggleOnIcon from '@mui/icons-material/ToggleOnOutlined';
import ToggleOffIcon from '@mui/icons-material/ToggleOffOutlined';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Snackbar,
  Stack,
  Typography,
} from '@mui/material';
import { format } from 'date-fns';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useAccessDetail, useAccessMutations, useAccessVersion } from '@/features/access/api';
import type { AccessIdentifier } from '@/features/access/types';
import { useRouter } from '@/lib/i18n/navigation';

export const AccessDetail = ({ code, subscriptionCode }: { code: string; subscriptionCode?: string }) => {
  const t = useTranslations();
  const router = useRouter();
  const detailQuery = useAccessDetail({ accessCode: code, subscriptionCode });
  const versionQuery = useAccessVersion();
  const { remove, enable, disable } = useAccessMutations();
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);

  if (detailQuery.isLoading) {
    return (
      <Stack alignItems="center" spacing={2} py={4}>
        <CircularProgress size={32} />
        <Typography color="text.secondary">{t('table.loading')}</Typography>
      </Stack>
    );
  }

  if (detailQuery.isError || !detailQuery.data) {
    return <Alert severity="error">{t('forms.error')}</Alert>;
  }

  const data = detailQuery.data;
  const identifier: AccessIdentifier | null = data.subscription
    ? {
        code: data.code,
        subscription: data.subscription,
        startDate: data.startDate,
        endDate: data.endDate,
      }
    : null;

  const handleDelete = async () => {
    if (!identifier) {
      return;
    }
    if (!window.confirm(t('forms.access.deleteConfirmation'))) {
      return;
    }
    await remove.mutateAsync(identifier);
    setSnackbarMessage(t('feedback.deleted'));
    router.replace('../');
  };

  const handleToggle = async () => {
    if (!identifier) {
      return;
    }
    if (data.disabled) {
      await enable.mutateAsync(identifier);
      setSnackbarMessage(t('forms.success'));
    } else {
      await disable.mutateAsync(identifier);
      setSnackbarMessage(t('forms.success'));
    }
    detailQuery.refetch();
  };

  const toggleDisabled = !identifier || enable.isPending || disable.isPending;

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">{data.code}</Typography>
          {versionQuery.data ? (
            <Typography variant="body2" color="text.secondary">
              {t('forms.access.version', { version: versionQuery.data })}
            </Typography>
          ) : null}
        </Box>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" startIcon={<RefreshIcon />} onClick={() => detailQuery.refetch()}>
            {t('actions.refresh')}
          </Button>
          <Button variant="contained" startIcon={<EditIcon />} onClick={() => router.push('./edit')}>
            {t('actions.edit')}
          </Button>
          <Button
            startIcon={data.disabled ? <ToggleOnIcon /> : <ToggleOffIcon />}
            onClick={handleToggle}
            disabled={toggleDisabled}
          >
            {data.disabled ? t('actions.enable') : t('actions.disable')}
          </Button>
          <Button
            color="error"
            startIcon={<DeleteIcon />}
            onClick={handleDelete}
            disabled={remove.isPending || !identifier}
          >
            {t('actions.delete')}
          </Button>
        </Stack>
      </Stack>

      <Card>
        <CardContent>
          <Stack spacing={1}>
            <DetailRow label={t('forms.access.subscription')} value={data.subscription} />
            <DetailRow
              label={t('forms.access.subscriptionValidityDate')}
              value={formatDate(data.subscriptionValidityDate)}
            />
            <DetailRow label={t('forms.access.startDate')} value={formatDate(data.startDate)} />
            <DetailRow label={t('forms.access.endDate')} value={formatDate(data.endDate)} />
            <DetailRow label={t('forms.access.disabled')} value={data.disabled ? t('common.yes') : t('common.no')} />
          </Stack>
        </CardContent>
      </Card>

      <Snackbar
        open={Boolean(snackbarMessage)}
        autoHideDuration={4000}
        onClose={() => setSnackbarMessage(null)}
        message={snackbarMessage ?? ''}
      />
    </Stack>
  );
};

const formatDate = (value?: string) => {
  if (!value) {
    return '—';
  }
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return '—';
  }
  return format(parsed, 'yyyy-MM-dd HH:mm');
};

const DetailRow = ({ label, value }: { label: string; value?: string | null }) => (
  <Stack direction="row" spacing={1} alignItems="baseline">
    <Typography width={220} color="text.secondary">
      {label}
    </Typography>
    <Typography sx={{ flex: 1 }}>{value ?? '—'}</Typography>
  </Stack>
);
