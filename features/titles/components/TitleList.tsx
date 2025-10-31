'use client';

import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import { DEFAULT_TITLE_PAGE_SIZE, useTitles } from '@/features/titles/api';
import type { TitleListItem } from '@/features/titles/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const TitleList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_TITLE_PAGE_SIZE,
  });
  const { data, isLoading, isFetching } = useTitles();
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const columns: GridColDef<TitleListItem>[] = [
    { field: 'code', headerName: t('forms.title.code'), flex: 1, minWidth: 160 },
    { field: 'description', headerName: t('forms.title.description'), flex: 1.2, minWidth: 200 },
    {
      field: 'isCompany',
      headerName: t('forms.title.isCompany'),
      flex: 0.6,
      minWidth: 140,
      sortable: false,
      renderCell: (params) =>
        params.value ? (
          <Chip label={t('common.yes')} size="small" color="primary" variant="outlined" />
        ) : (
          <Chip label={t('common.no')} size="small" variant="outlined" />
        ),
    },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t('navigation.titles')}</Typography>
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
