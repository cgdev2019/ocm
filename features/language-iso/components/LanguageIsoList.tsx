'use client';

import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Stack, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import {
  DEFAULT_LANGUAGE_ISO_PAGE_SIZE,
  useLanguageIsos,
} from '@/features/language-iso/api';
import type { LanguageIsoListItem } from '@/features/language-iso/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const LanguageIsoList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_LANGUAGE_ISO_PAGE_SIZE,
  });
  const { data, isLoading, isFetching } = useLanguageIsos();
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const columns: GridColDef<LanguageIsoListItem>[] = [
    { field: 'code', headerName: t('forms.languageIso.code'), flex: 1, minWidth: 160 },
    { field: 'description', headerName: t('forms.languageIso.description'), flex: 1.2, minWidth: 220 },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t('navigation.languageIso')}</Typography>
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
