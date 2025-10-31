'use client';

import { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslations } from 'next-intl';
import { DEFAULT_TAXES_PAGE_SIZE, useTaxes } from '@/features/taxes/api';
import type { TaxListItem } from '@/features/taxes/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const TaxList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_TAXES_PAGE_SIZE,
  });
  const { data, isLoading, isFetching } = useTaxes();
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const columns: GridColDef<TaxListItem>[] = [
    { field: 'code', headerName: t('forms.tax.code'), flex: 1, minWidth: 160 },
    { field: 'description', headerName: t('forms.tax.description'), flex: 1.2, minWidth: 200 },
    { field: 'percent', headerName: t('forms.tax.percent'), flex: 0.8, minWidth: 120 },
    { field: 'accountingCode', headerName: t('forms.tax.accountingCode'), flex: 1, minWidth: 160 },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t('navigation.taxes')}</Typography>
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
