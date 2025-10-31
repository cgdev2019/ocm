'use client';

import CheckIcon from '@mui/icons-material/CheckOutlined';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import SecurityIcon from '@mui/icons-material/SecurityOutlined';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Snackbar,
  Stack,
  Typography,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useAuditMutations, useAuditVersion } from '@/features/audit/api';

export const AuditSettings = () => {
  const { data: version, isLoading, refetch } = useAuditVersion();
  const { enable, disable } = useAuditMutations();
  const t = useTranslations();
  const [snackbar, setSnackbar] = useState<string | null>(null);

  const handleEnable = async () => {
    await enable.mutateAsync();
    setSnackbar(t('feedback.saved'));
  };

  const handleDisable = async () => {
    await disable.mutateAsync();
    setSnackbar(t('feedback.saved'));
  };

  const hasError = enable.isError || disable.isError;

  return (
    <Stack spacing={3}>
      <Typography variant="h4">{t('navigation.audit')}</Typography>
      {hasError ? <Alert severity="error">{t('forms.error')}</Alert> : null}
      <Card>
        <CardHeader
          avatar={<SecurityIcon color="primary" />}
          title={t('audit.loggingTitle')}
          subheader={t('audit.loggingSubtitle')}
        />
        <Divider />
        <CardContent>
          <Stack spacing={3}>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                {t('audit.versionLabel')}
              </Typography>
              <Typography variant="body1">{isLoading ? t('table.loading') : version || '—'}</Typography>
              <Button
                sx={{ mt: 1.5 }}
                variant="text"
                startIcon={<RefreshIcon />}
                onClick={() => refetch()}
                disabled={isLoading}
              >
                {t('actions.refresh')}
              </Button>
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="flex-start">
              <Button
                startIcon={<CheckIcon />}
                variant="contained"
                color="success"
                onClick={handleEnable}
                disabled={enable.isPending}
              >
                {t('audit.enableLogging')}
              </Button>
              <Button
                startIcon={<CloseIcon />}
                variant="outlined"
                color="warning"
                onClick={handleDisable}
                disabled={disable.isPending}
              >
                {t('audit.disableLogging')}
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
      <Snackbar
        open={Boolean(snackbar)}
        autoHideDuration={4000}
        onClose={() => setSnackbar(null)}
        message={snackbar ?? ''}
      />
    </Stack>
  );
};
