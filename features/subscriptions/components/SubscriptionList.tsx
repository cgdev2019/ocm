'use client';

import { useState } from 'react';
import { DataGrid, type GridColDef, type GridRenderCellParams } from '@mui/x-data-grid';
import { Alert, Box, Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslations } from 'next-intl';
import { DEFAULT_SUBSCRIPTIONS_PAGE_SIZE, useSubscriptions } from '@/features/subscriptions/api';
import type { SubscriptionListItem } from '@/features/subscriptions/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';
import { ApiTimeoutError } from '@/lib/api/errors';

export const SubscriptionList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_SUBSCRIPTIONS_PAGE_SIZE,
  });
  const { data, isLoading, isFetching, isError, refetch, error } = useSubscriptions({
    limit: paginationModel.pageSize,
    offset: paginationModel.page * paginationModel.pageSize,
  });
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const errorMessage = error instanceof ApiTimeoutError
    ? t('feedback.timeout')
    : error instanceof Error
      ? error.message
      : t('feedback.error');

  const columns: GridColDef<SubscriptionListItem>[] = [
    { field: 'code', headerName: t('forms.subscription.code'), flex: 1, minWidth: 180 },
    { field: 'userAccount', headerName: t('forms.subscription.userAccount'), flex: 1, minWidth: 180 },
    { field: 'offerTemplate', headerName: t('forms.subscription.offerTemplate'), flex: 1, minWidth: 200 },
    {
      field: 'subscriptionDate',
      headerName: t('forms.subscription.subscriptionDate'),
      flex: 1,
      minWidth: 200,
      renderCell: (
        params: GridRenderCellParams<SubscriptionListItem, string | undefined>,
      ) => (params.value ? new Date(params.value).toLocaleString() : ''),
    },
    { field: 'status', headerName: t('forms.subscription.status'), flex: 0.7, minWidth: 140 },
    { field: 'billingCycle', headerName: t('forms.subscription.billingCycle'), flex: 0.8, minWidth: 160 },
    { field: 'seller', headerName: t('forms.subscription.seller'), flex: 0.8, minWidth: 160 },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t('navigation.subscriptions')}</Typography>
        <Button
          onClick={() => router.push(`${pathname}/new`)}
          variant="contained"
          startIcon={<AddIcon />}
        >
          {t('actions.create')}
        </Button>
      </Stack>
      <Box sx={{ height: 560 }}>
        <DataGrid
          rows={(data?.items ?? []).map((item) => ({ id: item.code, ...item }))}
          columns={columns}
          loading={isLoading || isFetching}
          disableRowSelectionOnClick
          onRowClick={(params) => router.push(`${pathname}/${params.id}`)}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[10, 20, 50]}
          paginationMode="server"
          rowCount={data?.paging.totalRecords ?? 0}
          localeText={{ noRowsLabel: t('table.empty') }}
        />
      </Box>
      {isError ? (
        <Alert
          severity="error"
          action={
            <Button color="inherit" size="small" onClick={() => refetch()}>
              {t('actions.retry')}
            </Button>
          }
          sx={{ alignSelf: 'flex-start', width: 'fit-content' }}
        >
          {errorMessage}
        </Alert>
      ) : null}
    </Stack>
  );
};
