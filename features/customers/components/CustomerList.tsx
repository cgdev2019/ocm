'use client';

import { useState } from 'react';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Alert, Box, Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/lib/i18n/navigation';
import { DEFAULT_CUSTOMERS_PAGE_SIZE, useCustomersList } from '@/features/customers/api';
import type { CustomerListItem } from '@/features/customers/types';
import { ApiTimeoutError } from '@/lib/api/errors';

export const CustomerList = () => {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: DEFAULT_CUSTOMERS_PAGE_SIZE });
  const { data, isLoading, isError, isFetching, refetch, error } = useCustomersList({
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

  const columns: GridColDef<CustomerListItem>[] = [
    { field: 'code', headerName: t('forms.customer.code'), flex: 1, minWidth: 160 },
    { field: 'description', headerName: t('forms.customer.description'), flex: 1.5, minWidth: 200 },
    { field: 'customerCategory', headerName: t('forms.customer.category'), flex: 1, minWidth: 140 },
    { field: 'customerBrand', headerName: t('forms.customer.brand'), flex: 1, minWidth: 140 },
    { field: 'seller', headerName: t('forms.customer.seller'), flex: 1, minWidth: 140 },
    { field: 'vatNo', headerName: t('forms.customer.vatNo'), flex: 1, minWidth: 140 },
    { field: 'contactEmail', headerName: t('forms.customer.email'), flex: 1.2, minWidth: 180 },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="h4">{t('navigation.customers')}</Typography>
          <Typography variant="body2" color="text.secondary">
            {t('dashboard.recentActivity')}
          </Typography>
        </Box>
        <Button
          onClick={() => router.push(`${pathname}/new`)}
          variant="contained"
          startIcon={<AddIcon />}
        >
          {t('actions.create')}
        </Button>
      </Stack>
      <Box sx={{ height: 620, width: '100%' }}>
        <DataGrid
          rows={(data?.items ?? []).map((item) => ({ id: item.code, ...item }))}
          columns={columns}
          loading={isLoading || isFetching}
          slots={{ toolbar: GridToolbar }}
          disableRowSelectionOnClick
          onRowClick={(params) => router.push(`${pathname}/${params.id}`)}
          paginationMode="server"
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          rowCount={data?.paging.totalRecords ?? 0}
          pageSizeOptions={[10, 20, 50]}
          localeText={{
            noRowsLabel: t('table.empty'),
            toolbarQuickFilterPlaceholder: t('actions.search'),
          }}
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
