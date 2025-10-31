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
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import {
  useProviderContact,
  useProviderContactMutations,
  useProviderContactVersion,
} from '@/features/provider-contact/api';
import { useRouter } from '@/lib/i18n/navigation';

export const ProviderContactDetail = ({ code }: { code: string }) => {
  const t = useTranslations();
  const router = useRouter();
  const detailQuery = useProviderContact(code);
  const versionQuery = useProviderContactVersion();
  const { remove } = useProviderContactMutations();
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

  const handleDelete = async () => {
    if (!window.confirm(t('forms.providerContact.deleteConfirmation'))) {
      return;
    }
    await remove.mutateAsync(code);
    setSnackbarMessage(t('feedback.deleted'));
    router.replace('../');
  };

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">{data.code}</Typography>
          {versionQuery.data ? (
            <Typography variant="body2" color="text.secondary">
              {t('forms.providerContact.version', { version: versionQuery.data })}
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
          <Button color="error" startIcon={<DeleteIcon />} onClick={handleDelete} disabled={remove.isPending}>
            {t('actions.delete')}
          </Button>
        </Stack>
      </Stack>

      <Card>
        <CardContent>
          <Stack spacing={1}>
            <DetailRow label={t('forms.providerContact.description')} value={data.description} />
            <DetailRow label={t('forms.providerContact.firstName')} value={data.firstName} />
            <DetailRow label={t('forms.providerContact.lastName')} value={data.lastName} />
            <DetailRow label={t('forms.providerContact.email')} value={data.email} />
            <DetailRow label={t('forms.providerContact.phone')} value={data.phone} />
            <DetailRow label={t('forms.providerContact.mobile')} value={data.mobile} />
            <DetailRow label={t('forms.providerContact.fax')} value={data.fax} />
            <DetailRow label={t('forms.providerContact.genericMail')} value={data.genericMail} />
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {t('forms.providerContact.address1')}
          </Typography>
          <Stack spacing={1}>
            <DetailRow label={t('forms.providerContact.address1')} value={data.address1} />
            <DetailRow label={t('forms.providerContact.address2')} value={data.address2} />
            <DetailRow label={t('forms.providerContact.address3')} value={data.address3} />
            <DetailRow label={t('forms.providerContact.address4')} value={data.address4} />
            <DetailRow label={t('forms.providerContact.address5')} value={data.address5} />
            <DetailRow label={t('forms.providerContact.city')} value={data.city} />
            <DetailRow label={t('forms.providerContact.zipCode')} value={data.zipCode} />
            <DetailRow label={t('forms.providerContact.state')} value={data.state} />
            <DetailRow label={t('forms.providerContact.country')} value={data.country} />
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

const DetailRow = ({ label, value }: { label: string; value?: string | null }) => (
  <Stack direction="row" spacing={1}>
    <Typography width={220} color="text.secondary">
      {label}
    </Typography>
    <Typography sx={{ flex: 1 }}>{value ?? '—'}</Typography>
  </Stack>
);
