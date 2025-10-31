'use client';

import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrowOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNewOutlined';
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
  useScriptInstance,
  useScriptInstanceExecute,
  useScriptInstanceMutations,
  useScriptInstanceVersion,
} from '@/features/script-instances/api';
import { useRouter } from '@/lib/i18n/navigation';

export const ScriptInstanceDetail = ({ code }: { code: string }) => {
  const { data, isLoading, isError, refetch } = useScriptInstance(code);
  const versionQuery = useScriptInstanceVersion();
  const { remove, disable, enable } = useScriptInstanceMutations();
  const executeMutation = useScriptInstanceExecute();
  const t = useTranslations();
  const router = useRouter();
  const [snack, setSnack] = useState<{ message: string; open: boolean }>({ message: '', open: false });

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
    setSnack({ message: t('feedback.deleted'), open: true });
    router.replace('../');
  };

  const handleToggle = async () => {
    if (data.disabled) {
      await enable.mutateAsync(code);
      setSnack({ message: t('forms.scriptInstance.enabled'), open: true });
    } else {
      await disable.mutateAsync(code);
      setSnack({ message: t('forms.scriptInstance.disabledMessage'), open: true });
    }
    refetch();
  };

  const handleExecute = async () => {
    const result = await executeMutation.mutateAsync({ code });
    setSnack({ message: JSON.stringify(result), open: true });
  };

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">{data.code}</Typography>
          {versionQuery.data ? (
            <Typography variant="body2" color="text.secondary">
              {t('forms.scriptInstance.version', { version: versionQuery.data })}
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
          <Button
            startIcon={<PowerSettingsNewIcon />}
            onClick={handleToggle}
            disabled={disable.isPending || enable.isPending}
          >
            {data.disabled ? t('actions.enable') : t('actions.disable')}
          </Button>
          <Button startIcon={<PlayArrowIcon />} onClick={handleExecute} disabled={executeMutation.isPending}>
            {t('forms.scriptInstance.execute')}
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
                <Row label={t('forms.scriptInstance.description')} value={data.description} />
                <Row label={t('forms.scriptInstance.type')} value={data.type} />
                <Row label={t('forms.scriptInstance.category')} value={data.scriptInstanceCategoryCode} />
                <Row label={t('forms.scriptInstance.reuse')} value={data.reuse ? t('common.yes') : t('common.no')} />
                <Row label={t('forms.scriptInstance.codeOnly')} value={data.codeOnly ? t('common.yes') : t('common.no')} />
                <Row label={t('forms.scriptInstance.disabled')} value={data.disabled ? t('common.yes') : t('common.no')} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {t('forms.scriptInstance.script')}
              </Typography>
              <Box
                component="pre"
                sx={{
                  bgcolor: 'background.default',
                  p: 2,
                  borderRadius: 1,
                  fontFamily: 'monospace',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {data.script}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={() => setSnack((prev) => ({ ...prev, open: false }))}
        message={snack.message}
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
