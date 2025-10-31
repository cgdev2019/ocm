'use client';

import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import {
  DEFAULT_INVOICE_TYPE_PAGE_SIZE,
  useInvoiceTypes,
} from '@/features/invoice-types/api';
import type { InvoiceTypeListItem } from '@/features/invoice-types/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const InvoiceTypeList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_INVOICE_TYPE_PAGE_SIZE,
  });
  const { data, isLoading, isFetching } = useInvoiceTypes();
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const booleanCell = (value?: boolean) =>
    value ? (
      <Chip label={t('common.yes')} size="small" color="primary" variant="outlined" />
    ) : (
      <Chip label={t('common.no')} size="small" variant="outlined" />
    );

  const columns: GridColDef<InvoiceTypeListItem>[] = [
    { field: 'code', headerName: t('forms.invoiceType.code'), flex: 1, minWidth: 160 },
    { field: 'description', headerName: t('forms.invoiceType.description'), flex: 1.2, minWidth: 200 },
    { field: 'occTemplateCode', headerName: t('forms.invoiceType.occTemplateCode'), flex: 1, minWidth: 200 },
    {
      field: 'matchingAuto',
      headerName: t('forms.invoiceType.matchingAuto'),
      flex: 0.6,
      minWidth: 140,
      renderCell: (params) => booleanCell(params.value),
      sortable: false,
    },
    {
      field: 'invoiceAccountable',
      headerName: t('forms.invoiceType.invoiceAccountable'),
      flex: 0.6,
      minWidth: 160,
      renderCell: (params) => booleanCell(params.value),
      sortable: false,
    },
    {
      field: 'useSelfSequence',
      headerName: t('forms.invoiceType.useSelfSequence'),
      flex: 0.6,
      minWidth: 160,
      renderCell: (params) => booleanCell(params.value),
      sortable: false,
    },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t('navigation.invoiceTypes')}</Typography>
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
