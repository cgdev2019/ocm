'use client';

import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import RefreshIcon from '@mui/icons-material/RefreshOutlined';
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
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import {
  useTerminationReason,
  useTerminationReasonMutations,
  useTerminationReasonVersion,
} from '@/features/termination-reasons/api';
import { useRouter } from '@/lib/i18n/navigation';

export const TerminationReasonDetail = ({ code }: { code: string }) => {
  const { data, isLoading, isError, refetch } = useTerminationReason(code);
  const versionQuery = useTerminationReasonVersion();
  const { remove } = useTerminationReasonMutations();
  const t = useTranslations();
  const router = useRouter();
  const [openSnack, setOpenSnack] = useState(false);

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
    if (!window.confirm(t('forms.confirmDeletion'))) {
      return;
    }
    await remove.mutateAsync(code);
    setOpenSnack(true);
    router.replace('../');
  };

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">{data.code}</Typography>
          {versionQuery.data ? (
            <Typography variant="body2" color="text.secondary">
              {t('forms.terminationReason.version', { version: versionQuery.data })}
            </Typography>
          ) : null}
        </Box>
        <Stack direction="row" spacing={1}>
          <Button startIcon={<RefreshIcon />} variant="outlined" onClick={() => refetch()}>
            {t('actions.refresh')}
          </Button>
          <Button startIcon={<EditIcon />} variant="contained" onClick={() => router.push('./edit')}>
            {t('actions.edit')}
          </Button>
          <Button color="error" startIcon={<DeleteIcon />} onClick={handleDelete} disabled={remove.isPending}>
            {t('actions.delete')}
          </Button>
        </Stack>
      </Stack>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Stack spacing={1}>
                <Row label={t('forms.terminationReason.description')} value={data.description} />
                <Row label={t('forms.terminationReason.overrideProrata')} value={data.overrideProrata ?? undefined} />
                <Row
                  label={t('forms.terminationReason.applyAgreement')}
                  value={data.applyAgreement ? t('common.yes') : t('common.no')}
                />
                <Row
                  label={t('forms.terminationReason.invoiceAgreementImmediately')}
                  value={data.invoiceAgreementImmediately ? t('common.yes') : t('common.no')}
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Stack spacing={1}>
                <Row
                  label={t('forms.terminationReason.applyReimbursment')}
                  value={data.applyReimbursment ? t('common.yes') : t('common.no')}
                />
                <Row
                  label={t('forms.terminationReason.applyTerminationCharges')}
                  value={data.applyTerminationCharges ? t('common.yes') : t('common.no')}
                />
                <Row
                  label={t('forms.terminationReason.reimburseOneshots')}
                  value={data.reimburseOneshots ? t('common.yes') : t('common.no')}
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Snackbar
        open={openSnack}
        autoHideDuration={4000}
        onClose={() => setOpenSnack(false)}
        message={t('feedback.deleted')}
      />
    </Stack>
  );
};

const Row = ({ label, value }: { label: string; value?: string | null }) => (
  <Stack direction="row" spacing={1}>
    <Typography width={200} color="text.secondary">
      {label}
    </Typography>
    <Typography sx={{ flex: 1 }}>{value ?? '—'}</Typography>
  </Stack>
);
