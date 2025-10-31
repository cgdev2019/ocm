'use client';

import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import { DEFAULT_FILE_FORMAT_PAGE_SIZE, useFileFormats } from '@/features/file-formats/api';
import type { FileFormatListItem } from '@/features/file-formats/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const FileFormatList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_FILE_FORMAT_PAGE_SIZE,
  });
  const { data, isLoading, isFetching } = useFileFormats();
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const columns: GridColDef<(FileFormatListItem & { id: string })>[] = [
    { field: 'code', headerName: t('forms.fileFormat.code'), flex: 1, minWidth: 160 },
    { field: 'description', headerName: t('forms.fileFormat.description'), flex: 1.2, minWidth: 200 },
    { field: 'fileNamePattern', headerName: t('forms.fileFormat.fileNamePattern'), flex: 1.2, minWidth: 200 },
    { field: 'jobCode', headerName: t('forms.fileFormat.jobCode'), flex: 1, minWidth: 160 },
    {
      field: 'fileNameUniqueness',
      headerName: t('forms.fileFormat.fileNameUniqueness'),
      flex: 0.7,
      minWidth: 160,
      sortable: false,
      renderCell: (params) =>
        params.value ? (
          <Chip label={t('common.yes')} size="small" color="primary" variant="outlined" />
        ) : (
          <Chip label={t('common.no')} size="small" variant="outlined" />
        ),
    },
    {
      field: 'fileTypes',
      headerName: t('forms.fileFormat.fileTypes'),
      flex: 0.8,
      minWidth: 180,
      sortable: false,
      renderCell: (params) => params.row.fileTypes?.length ?? 0,
    },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t('navigation.fileFormats')}</Typography>
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
