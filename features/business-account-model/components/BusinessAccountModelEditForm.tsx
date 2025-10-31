'use client';

import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import { Alert, Box, Button, CircularProgress, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { BusinessAccountModelForm } from '@/features/business-account-model/components/BusinessAccountModelForm';
import { useBusinessAccountModel } from '@/features/business-account-model/api';

export const BusinessAccountModelEditForm = ({ code }: { code: string }) => {
  const t = useTranslations();
  const detailQuery = useBusinessAccountModel(code);

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

  return <BusinessAccountModelForm mode="edit" defaultValues={detailQuery.data} />;
};
