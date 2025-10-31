'use client';

import { useState } from 'react';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Box, Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslations } from 'next-intl';
import { DEFAULT_BILLING_CYCLES_PAGE_SIZE, useBillingCycles } from '@/features/billing-cycles/api';
import type { BillingCycleListItem } from '@/features/billing-cycles/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const BillingCycleList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_BILLING_CYCLES_PAGE_SIZE,
  });
  const { data, isLoading, isFetching } = useBillingCycles();
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const columns: GridColDef<BillingCycleListItem>[] = [
    { field: 'code', headerName: t('forms.billingCycle.code'), flex: 1, minWidth: 180 },
    { field: 'description', headerName: t('forms.billingCycle.description'), flex: 1.2, minWidth: 220 },
    { field: 'calendar', headerName: t('forms.billingCycle.calendar'), flex: 1, minWidth: 180 },
    { field: 'type', headerName: t('forms.billingCycle.type'), flex: 0.7, minWidth: 140 },
    {
      field: 'invoiceDateDelay',
      headerName: t('forms.billingCycle.invoiceDateDelay'),
      flex: 0.6,
      minWidth: 140,
    },
    {
      field: 'dueDateDelay',
      headerName: t('forms.billingCycle.dueDateDelay'),
      flex: 0.6,
      minWidth: 140,
    },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t('navigation.billingCycles')}</Typography>
        <Button
          onClick={() => router.push(`${pathname}/new`)}
          variant="contained"
          startIcon={<AddIcon />}
        >
          {t('actions.create')}
        </Button>
      </Stack>
      <Box sx={{ height: 520 }}>
        <DataGrid
          rows={(data ?? []).map((item) => ({ id: item.code, ...item }))}
          columns={columns}
          loading={isLoading || isFetching}
          disableRowSelectionOnClick
          onRowClick={(params) => router.push(`${pathname}/${params.id}`)}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[10, 20, 50]}
          paginationMode="client"
          localeText={{ noRowsLabel: t('table.empty') }}
        />
      </Box>
    </Stack>
  );
};
