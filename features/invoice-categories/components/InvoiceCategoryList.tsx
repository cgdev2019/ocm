'use client';

import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Stack, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import {
  DEFAULT_INVOICE_CATEGORY_PAGE_SIZE,
  useInvoiceCategories,
} from '@/features/invoice-categories/api';
import type { InvoiceCategoryListItem } from '@/features/invoice-categories/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const InvoiceCategoryList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_INVOICE_CATEGORY_PAGE_SIZE,
  });
  const { data, isLoading, isFetching } = useInvoiceCategories();
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const columns: GridColDef<InvoiceCategoryListItem>[] = [
    { field: 'code', headerName: t('forms.invoiceCategory.code'), flex: 1, minWidth: 160 },
    { field: 'description', headerName: t('forms.invoiceCategory.description'), flex: 1.2, minWidth: 200 },
    { field: 'occTemplateCode', headerName: t('forms.invoiceCategory.occTemplateCode'), flex: 1, minWidth: 180 },
    {
      field: 'occTemplateNegativeCode',
      headerName: t('forms.invoiceCategory.occTemplateNegativeCode'),
      flex: 1,
      minWidth: 200,
    },
    { field: 'sortIndex', headerName: t('forms.invoiceCategory.sortIndex'), flex: 0.6, minWidth: 120 },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t('navigation.invoiceCategories')}</Typography>
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
