'use client';

import { useState } from 'react';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useLocale, useTranslations } from 'next-intl';
import { DEFAULT_INVOICES_PAGE_SIZE, useInvoices } from '@/features/invoices/api';
import type { InvoiceListItem } from '@/features/invoices/types';
import { formatDate, formatCurrency } from '@/lib/utils/format';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const InvoiceList = () => {
  const [search, setSearch] = useState('');
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_INVOICES_PAGE_SIZE,
  });
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const { data, isLoading, isFetching } = useInvoices({
    query: search || undefined,
    limit: paginationModel.pageSize,
    offset: paginationModel.page * paginationModel.pageSize,
  });

  const columns: GridColDef<InvoiceListItem>[] = [
    { field: 'invoiceNumber', headerName: t('forms.invoice.number'), flex: 1, minWidth: 160 },
    { field: 'invoiceType', headerName: t('forms.invoice.type'), flex: 0.8, minWidth: 120 },
    { field: 'status', headerName: t('forms.invoice.status'), flex: 0.8, minWidth: 120 },
    {
      field: 'amountWithTax',
      headerName: t('forms.invoice.amount'),
      flex: 1,
      minWidth: 140,
      valueFormatter: ({ value }) =>
        value != null ? formatCurrency(Number(value), 'EUR', locale as never) : '—',
    },
    {
      field: 'dueDate',
      headerName: t('forms.invoice.dueDate'),
      flex: 1,
      minWidth: 160,
      valueFormatter: ({ value }) => (value ? formatDate(String(value), locale as never) : '—'),
    },
    { field: 'customerAccount', headerName: t('forms.customerAccount.code'), flex: 1, minWidth: 160 },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="h4">{t('navigation.invoices')}</Typography>
        </Box>
        <Button
          onClick={() => router.push(`${pathname}/new`)}
          variant="contained"
          startIcon={<AddIcon />}
        >
          {t('actions.create')}
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <TextField
          size="small"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            setPaginationModel((previous) => ({ ...previous, page: 0 }));
          }}
          label={t('actions.search')}
        />
      </Stack>
      <Box sx={{ height: 620, width: '100%' }}>
        <DataGrid
          rows={data?.items ?? []}
          columns={columns}
          loading={isLoading || isFetching}
          disableRowSelectionOnClick
          onRowClick={(params) => router.push(`${pathname}/${params.id}`)}
          slots={{ toolbar: GridToolbar }}
          slotProps={{ toolbar: { showQuickFilter: true } }}
          getRowId={(row) => row.id}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[10, 20, 50]}
          paginationMode="server"
          rowCount={data?.paging.totalRecords ?? 0}
          localeText={{ noRowsLabel: t('table.empty') }}
        />
      </Box>
    </Stack>
  );
};
