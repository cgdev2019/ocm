'use client';

import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import RocketIcon from '@mui/icons-material/RocketLaunchOutlined';
import SearchIcon from '@mui/icons-material/ManageSearchOutlined';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import {
  useBusinessAccountModel,
  useBusinessAccountModelMutations,
  useBusinessAccountModelParents,
  useBusinessAccountModelVersion,
} from '@/features/business-account-model/api';
import type { ParentEntityListItem } from '@/features/business-account-model/types';
import { useRouter } from '@/lib/i18n/navigation';

export const BusinessAccountModelDetail = ({ code }: { code: string }) => {
  const t = useTranslations();
  const router = useRouter();
  const detailQuery = useBusinessAccountModel(code);
  const versionQuery = useBusinessAccountModelVersion();
  const { remove, install } = useBusinessAccountModelMutations();
  const parentMutation = useBusinessAccountModelParents();
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);
  const [parentResults, setParentResults] = useState<ParentEntityListItem[]>([]);
  const [accountTypeCode, setAccountTypeCode] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

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
    if (!window.confirm(t('forms.confirmDeletion'))) {
      return;
    }
    await remove.mutateAsync(code);
    setSnackbarMessage(t('feedback.deleted'));
    router.replace('../');
  };

  const handleInstall = async () => {
    await install.mutateAsync(data);
    setSnackbarMessage(t('forms.success'));
  };

  const handleFindParents = async () => {
    if (!accountTypeCode.trim()) {
      return;
    }
    const parents = await parentMutation.mutateAsync({
      accountTypeCode: accountTypeCode.trim(),
      searchTerm: searchTerm.trim() || undefined,
    });
    setParentResults(parents);
  };

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">{data.code}</Typography>
          {versionQuery.data ? (
            <Typography variant="body2" color="text.secondary">
              {t('forms.businessAccountModel.version', { version: versionQuery.data })}
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
            startIcon={<RocketIcon />}
            onClick={handleInstall}
            disabled={install.isPending}
          >
            {t('forms.businessAccountModel.install')}
          </Button>
          <Button color="error" startIcon={<DeleteIcon />} onClick={handleDelete} disabled={remove.isPending}>
            {t('actions.delete')}
          </Button>
        </Stack>
      </Stack>

      <Card>
        <CardContent>
          <Stack spacing={1}>
            <DetailRow label={t('forms.businessAccountModel.description')} value={data.description} />
            <DetailRow label={t('forms.businessAccountModel.hierarchyType')} value={data.hierarchyType} />
            <DetailRow label={t('forms.businessAccountModel.license')} value={data.license} />
            <DetailRow label={t('forms.businessAccountModel.disabled')} value={data.disabled ? t('common.yes') : t('common.no')} />
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h6">{t('forms.businessAccountModel.findParents')}</Typography>
            {parentMutation.isError ? <Alert severity="error">{t('forms.error')}</Alert> : null}
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ xs: 'stretch', md: 'flex-end' }}>
              <TextField
                label={t('forms.businessAccountModel.hierarchyType')}
                value={accountTypeCode}
                onChange={(event) => setAccountTypeCode(event.target.value)}
                required
              />
              <TextField
                label={t('actions.search')}
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <Button
                variant="contained"
                startIcon={<SearchIcon />}
                onClick={handleFindParents}
                disabled={parentMutation.isPending || !accountTypeCode.trim()}
              >
                {t('actions.search')}
              </Button>
            </Stack>
            {parentMutation.isPending ? (
              <Stack alignItems="center" spacing={2} py={2}>
                <CircularProgress size={24} />
                <Typography color="text.secondary">{t('table.loading')}</Typography>
              </Stack>
            ) : (
              <ParentList items={parentResults} />
            )}
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

const ParentList = ({ items }: { items: ParentEntityListItem[] }) => {
  const t = useTranslations();
  if (!items.length) {
    return <Typography color="text.secondary">{t('table.empty')}</Typography>;
  }
  return (
    <Stack spacing={1}>
      {items.map((item) => (
        <Box key={item.code} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1, p: 1.5 }}>
          <Typography fontWeight={600}>{item.code}</Typography>
          <Typography color="text.secondary">{item.description ?? '—'}</Typography>
        </Box>
      ))}
    </Stack>
  );
};
