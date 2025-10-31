'use client';

import { useState } from 'react';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Box, Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslations } from 'next-intl';
import { useConfigurationProperties } from '@/features/configuration/api';
import type { ConfigurationListItem } from '@/features/configuration/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

const DEFAULT_CONFIGURATION_PAGE_SIZE = 20;

export const ConfigurationList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_CONFIGURATION_PAGE_SIZE,
  });
  const { data, isLoading, isFetching } = useConfigurationProperties();
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const columns: GridColDef<ConfigurationListItem>[] = [
    { field: 'key', headerName: t('forms.configuration.key'), flex: 1, minWidth: 200 },
    { field: 'value', headerName: t('forms.configuration.value'), flex: 1.5, minWidth: 260 },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t('navigation.configuration')}</Typography>
        <Button
          onClick={() => router.push(`${pathname}/new`)}
          variant="contained"
          startIcon={<AddIcon />}
        >
          {t('actions.add')}
        </Button>
      </Stack>
      <Box sx={{ height: 520 }}>
        <DataGrid
          rows={(data ?? []).map((item) => ({ id: item.key, ...item }))}
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
