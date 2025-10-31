'use client';

import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import { DEFAULT_LANGUAGE_PAGE_SIZE, useLanguages } from '@/features/languages/api';
import type { LanguageListItem } from '@/features/languages/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const LanguageList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_LANGUAGE_PAGE_SIZE,
  });
  const { data, isLoading, isFetching } = useLanguages();
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const columns: GridColDef<LanguageListItem>[] = [
    { field: 'code', headerName: t('forms.language.code'), flex: 1, minWidth: 160 },
    { field: 'description', headerName: t('forms.language.description'), flex: 1.2, minWidth: 220 },
    {
      field: 'disabled',
      headerName: t('forms.language.disabled'),
      flex: 0.6,
      minWidth: 140,
      renderCell: (params) =>
        params.value ? (
          <Chip label={t('common.yes')} size="small" color="default" />
        ) : (
          <Chip label={t('common.no')} size="small" variant="outlined" />
        ),
    },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t('navigation.languages')}</Typography>
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
