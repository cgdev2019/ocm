'use client';

import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Stack, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import { DEFAULT_SELLERS_PAGE_SIZE, useSellers } from '@/features/sellers/api';
import type { SellerListItem } from '@/features/sellers/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const SellerList = () => {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: DEFAULT_SELLERS_PAGE_SIZE });
  const { data, isLoading, isFetching } = useSellers();
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const columns: GridColDef<SellerListItem>[] = [
    { field: 'code', headerName: t('forms.seller.code'), flex: 1, minWidth: 160 },
    { field: 'description', headerName: t('forms.seller.description'), flex: 1.2, minWidth: 200 },
    { field: 'countryCode', headerName: t('forms.seller.countryCode'), flex: 0.6, minWidth: 120 },
    { field: 'currencyCode', headerName: t('forms.seller.currencyCode'), flex: 0.6, minWidth: 120 },
  ];

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">{t('navigation.sellers')}</Typography>
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
          paginationMode="client"
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[10, 20, 50]}
          localeText={{ noRowsLabel: t('table.empty') }}
          onRowClick={(params) => router.push(`${pathname}/${params.id}`)}
        />
      </Box>
    </Stack>
  );
};
