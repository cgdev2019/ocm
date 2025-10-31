'use client';

import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Stack, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import {
  DEFAULT_TERMINATION_REASONS_PAGE_SIZE,
  useTerminationReasons,
} from '@/features/termination-reasons/api';
import type { TerminationReasonListItem } from '@/features/termination-reasons/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const TerminationReasonList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_TERMINATION_REASONS_PAGE_SIZE,
  });
  const { data, isLoading, isFetching } = useTerminationReasons();
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const columns: GridColDef<TerminationReasonListItem>[] = [
    { field: 'code', headerName: t('forms.terminationReason.code'), flex: 1, minWidth: 160 },
    { field: 'description', headerName: t('forms.terminationReason.description'), flex: 1.2, minWidth: 200 },
    { field: 'overrideProrata', headerName: t('forms.terminationReason.overrideProrata'), flex: 0.8, minWidth: 160 },
    {
      field: 'applyTerminationCharges',
      headerName: t('forms.terminationReason.applyTerminationCharges'),
      flex: 0.8,
      minWidth: 160,
      valueFormatter: ({ value }) => (value ? t('common.yes') : t('common.no')),
    },
  ];

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">{t('navigation.terminationReasons')}</Typography>
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
