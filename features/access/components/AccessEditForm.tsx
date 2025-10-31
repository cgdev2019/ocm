'use client';

import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import { Alert, Box, Button, CircularProgress, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { AccessForm } from '@/features/access/components/AccessForm';
import { useAccessDetail } from '@/features/access/api';

export const AccessEditForm = ({ code, subscriptionCode }: { code: string; subscriptionCode?: string }) => {
  const t = useTranslations();
  const detailQuery = useAccessDetail({ accessCode: code, subscriptionCode });

  if (detailQuery.isLoading) {
    return (
      <Stack alignItems="center" spacing={2} py={4}>
        <CircularProgress size={32} />
        <Typography color="text.secondary">{t('table.loading')}</Typography>
      </Stack>
    );
  }

  if (detailQuery.isError || !detailQuery.data) {
    return (
      <Stack spacing={2}>
        <Alert severity="error">{t('forms.error')}</Alert>
        <Box>
          <Button variant="outlined" startIcon={<RefreshIcon />} onClick={() => detailQuery.refetch()}>
            {t('actions.refresh')}
          </Button>
        </Box>
      </Stack>
    );
  }

  return <AccessForm mode="edit" defaultValues={detailQuery.data} />;
};
