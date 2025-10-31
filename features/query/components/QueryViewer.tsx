'use client';

import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import { useQueryService } from '@/features/query/api';

export const QueryViewer = () => {
  const t = useTranslations();
  const query = useQueryService();

  return (
    <Stack spacing={3}>
      <Typography variant="h4">{t('navigation.query')}</Typography>
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">{t('forms.query.latestResult')}</Typography>
              <Button
                variant="outlined"
                startIcon={<RefreshIcon />}
                onClick={() => query.refetch()}
                disabled={query.isFetching}
              >
                {t('actions.refresh')}
              </Button>
            </Box>
            {query.isLoading || query.isFetching ? (
              <Stack spacing={2} alignItems="center" py={4}>
                <CircularProgress size={32} />
                <Typography variant="body2" color="text.secondary">
                  {t('table.loading')}
                </Typography>
              </Stack>
            ) : null}
            {query.isError ? <Alert severity="error">{t('forms.error')}</Alert> : null}
            {query.data?.actionMessage ? (
              <Alert severity="info">{query.data.actionMessage}</Alert>
            ) : null}
            <Box component="pre" sx={{ bgcolor: 'grey.900', color: 'grey.100', p: 2, borderRadius: 1, overflowX: 'auto' }}>
              {query.data?.result ?? t('forms.query.empty')}
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};
