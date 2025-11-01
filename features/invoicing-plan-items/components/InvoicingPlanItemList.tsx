'use client';

import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Stack, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import {
  DEFAULT_INVOICING_PLAN_ITEM_PAGE_SIZE,
  useInvoicingPlanItems,
} from '@/features/invoicing-plan-items/api';
import type { InvoicingPlanItemListItem } from '@/features/invoicing-plan-items/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const InvoicingPlanItemList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_INVOICING_PLAN_ITEM_PAGE_SIZE,
  });
  const { data, isLoading, isFetching } = useInvoicingPlanItems();
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const columns: GridColDef<InvoicingPlanItemListItem>[] = [
    { field: 'code', headerName: t('forms.invoicingPlanItem.code'), flex: 1, minWidth: 160 },
    {
      field: 'description',
      headerName: t('forms.invoicingPlanItem.description'),
      flex: 1.2,
      minWidth: 200,
    },
    {
      field: 'billingPlanCode',
      headerName: t('forms.invoicingPlanItem.billingPlanCode'),
      flex: 1,
      minWidth: 180,
    },
    {
      field: 'advancement',
      headerName: t('forms.invoicingPlanItem.advancement'),
      flex: 0.6,
      minWidth: 140,
      type: 'number',
    },
    {
      field: 'rateToBill',
      headerName: t('forms.invoicingPlanItem.rateToBill'),
      flex: 0.6,
      minWidth: 140,
      type: 'number',
    },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t('navigation.invoicingPlanItems')}</Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => router.push(`${pathname}/new`)}>
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
