'use client';

import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Stack, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import {
  DEFAULT_INVOICE_SEQUENCE_PAGE_SIZE,
  useInvoiceSequences,
} from '@/features/invoice-sequences/api';
import type { InvoiceSequenceListItem } from '@/features/invoice-sequences/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const InvoiceSequenceList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_INVOICE_SEQUENCE_PAGE_SIZE,
  });
  const { data, isLoading, isFetching } = useInvoiceSequences();
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const columns: GridColDef<InvoiceSequenceListItem>[] = [
    { field: 'code', headerName: t('forms.invoiceSequence.code'), flex: 1, minWidth: 160 },
    { field: 'description', headerName: t('forms.invoiceSequence.description'), flex: 1.2, minWidth: 200 },
    { field: 'sequenceType', headerName: t('forms.invoiceSequence.sequenceType'), flex: 0.8, minWidth: 160 },
    { field: 'sequencePattern', headerName: t('forms.invoiceSequence.sequencePattern'), flex: 1, minWidth: 200 },
    { field: 'sequenceSize', headerName: t('forms.invoiceSequence.sequenceSize'), flex: 0.6, minWidth: 120 },
    {
      field: 'currentInvoiceNb',
      headerName: t('forms.invoiceSequence.currentInvoiceNb'),
      flex: 0.6,
      minWidth: 140,
    },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">{t('navigation.invoiceSequences')}</Typography>
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
