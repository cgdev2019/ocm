'use client';

import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Box, Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/lib/i18n/navigation';
import { useCustomersList } from '@/features/customers/api';
import type { CustomerListItem } from '@/features/customers/types';

export const CustomerList = () => {
  const { data, isLoading, isError, refetch } = useCustomersList();
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

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
          rows={(data ?? []).map((item) => ({ id: item.code, ...item }))}
          columns={columns}
          loading={isLoading}
          slots={{ toolbar: GridToolbar }}
          disableRowSelectionOnClick
          onRowClick={(params) => router.push(`${pathname}/${params.id}`)}
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
