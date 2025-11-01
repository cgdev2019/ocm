'use client';

import { useMemo } from 'react';
import { Alert, Box, Button, Card, CardContent, CircularProgress, Stack, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import { useAllowedParents } from '@/features/allowed-parents/api';
import type { AllowedParentListItem } from '@/features/allowed-parents/types';

const MIN_TABLE_HEIGHT = 280;

export const AllowedParentsCard = ({
  userAccountCode,
}: {
  userAccountCode?: string | null;
}) => {
  const t = useTranslations();
  const trimmedCode = userAccountCode?.trim() ?? '';
  const {
    data,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useAllowedParents(trimmedCode.length > 0 ? trimmedCode : null);

  const columns = useMemo<readonly GridColDef<AllowedParentListItem>[]>(
    () => [
      {
        field: 'code',
        headerName: t('forms.allowedParent.parentCode'),
        flex: 1,
        minWidth: 160,
      },
      {
        field: 'description',
        headerName: t('forms.allowedParent.parentDescription'),
        flex: 1.2,
        minWidth: 200,
      },
      {
        field: 'customerAccountCode',
        headerName: t('forms.allowedParent.customerAccountCode'),
        flex: 1,
        minWidth: 160,
      },
      {
        field: 'customerAccountDescription',
        headerName: t('forms.allowedParent.customerAccountDescription'),
        flex: 1.2,
        minWidth: 220,
      },
    ],
    [t],
  );

  const title =
    trimmedCode.length > 0
      ? t('forms.allowedParent.title', { code: trimmedCode })
      : t('forms.allowedParent.titleFallback');

  return (
    <Card>
      <CardContent>
        <Stack spacing={2} alignItems="stretch">
          <Typography variant="h6">{title}</Typography>
          {trimmedCode.length === 0 ? (
            <Typography color="text.secondary">
              {t('forms.allowedParent.missingCode')}
            </Typography>
          ) : isLoading || isFetching ? (
            <Stack spacing={2} alignItems="center" py={4}>
              <CircularProgress size={28} />
              <Typography variant="body2" color="text.secondary">
                {t('table.loading')}
              </Typography>
            </Stack>
          ) : isError ? (
            <Stack spacing={2}>
              <Alert severity="error">{t('forms.error')}</Alert>
              <Box>
                <Button variant="outlined" onClick={() => refetch()}>
                  {t('actions.retry')}
                </Button>
              </Box>
            </Stack>
          ) : !data || data.length === 0 ? (
            <Typography color="text.secondary">
              {t('forms.allowedParent.empty')}
            </Typography>
          ) : (
            <Box sx={{ height: Math.max(MIN_TABLE_HEIGHT, Math.min(520, data.length * 56 + 120)) }}>
              <DataGrid
                rows={data.map((item) => ({ ...item }))}
                columns={columns}
                getRowId={(row) => row.id}
                disableRowSelectionOnClick
                loading={isFetching}
                hideFooter
                localeText={{ noRowsLabel: t('table.empty') }}
              />
            </Box>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};
