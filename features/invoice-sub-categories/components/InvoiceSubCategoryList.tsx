'use client';

import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Stack, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import {
  DEFAULT_INVOICE_SUB_CATEGORY_PAGE_SIZE,
  useInvoiceSubCategories,
} from '@/features/invoice-sub-categories/api';
import type { InvoiceSubCategoryListItem } from '@/features/invoice-sub-categories/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const InvoiceSubCategoryList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_INVOICE_SUB_CATEGORY_PAGE_SIZE,
  });
  const { data, isLoading, isFetching } = useInvoiceSubCategories();
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const columns: GridColDef<InvoiceSubCategoryListItem>[] = [
    { field: 'code', headerName: t('forms.invoiceSubCategory.code'), flex: 1, minWidth: 160 },
    { field: 'description', headerName: t('forms.invoiceSubCategory.description'), flex: 1.2, minWidth: 200 },
    { field: 'invoiceCategory', headerName: t('forms.invoiceSubCategory.invoiceCategory'), flex: 1, minWidth: 180 },
    { field: 'accountingCode', headerName: t('forms.invoiceSubCategory.accountingCode'), flex: 1, minWidth: 180 },
    { field: 'occTemplateCode', headerName: t('forms.invoiceSubCategory.occTemplateCode'), flex: 1, minWidth: 180 },
    {
      field: 'occTemplateNegativeCode',
      headerName: t('forms.invoiceSubCategory.occTemplateNegativeCode'),
      flex: 1,
      minWidth: 200,
    },
    { field: 'sortIndex', headerName: t('forms.invoiceSubCategory.sortIndex'), flex: 0.6, minWidth: 120 },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">{t('navigation.invoiceSubCategories')}</Typography>
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
