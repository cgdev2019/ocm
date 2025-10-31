'use client';

import { useState } from 'react';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Box, Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/lib/i18n/navigation';
import { DEFAULT_CUSTOMER_ACCOUNTS_PAGE_SIZE, useCustomerAccounts } from '@/features/customer-accounts/api';
import type { CustomerAccountListItem } from '@/features/customer-accounts/types';

export const CustomerAccountList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_CUSTOMER_ACCOUNTS_PAGE_SIZE,
  });
  const { data, isLoading, isFetching, isError, refetch } = useCustomerAccounts();
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const columns: GridColDef<CustomerAccountListItem>[] = [
    { field: 'code', headerName: t('forms.customerAccount.code'), flex: 1, minWidth: 160 },
    { field: 'description', headerName: t('forms.customerAccount.description'), flex: 1.4, minWidth: 200 },
    { field: 'customer', headerName: t('forms.customerAccount.customer'), flex: 1, minWidth: 160 },
    { field: 'currency', headerName: t('forms.customerAccount.currency'), flex: 0.8, minWidth: 120 },
    { field: 'language', headerName: t('forms.customerAccount.language'), flex: 0.8, minWidth: 120 },
    { field: 'status', headerName: t('forms.invoice.status'), flex: 0.8, minWidth: 120 },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="h4">{t('navigation.customerAccounts')}</Typography>
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
          rows={(data ?? []).map((item) => ({ id: item.code, ...item }))}
          columns={columns}
          loading={isLoading || isFetching}
          slots={{ toolbar: GridToolbar }}
          disableRowSelectionOnClick
          onRowClick={(params) => router.push(`${pathname}/${params.id}`)}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[10, 20, 50]}
          paginationMode="client"
          rowCount={data?.length ?? 0}
          localeText={{
            noRowsLabel: t('table.empty'),
            toolbarQuickFilterPlaceholder: t('actions.search'),
          }}
        />
      </Box>
      {isError ? (
        <Button variant="outlined" onClick={() => refetch()} sx={{ alignSelf: 'flex-start' }}>
          {t('actions.retry')}
        </Button>
      ) : null}
    </Stack>
  );
};
