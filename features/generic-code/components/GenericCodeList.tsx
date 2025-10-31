'use client';

import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import { DEFAULT_GENERIC_CODE_PAGE_SIZE, useGenericCodes } from '@/features/generic-code/api';
import type { GenericCodeListItem } from '@/features/generic-code/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const GenericCodeList = () => {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: DEFAULT_GENERIC_CODE_PAGE_SIZE });
  const [entityClassFilter, setEntityClassFilter] = useState('');
  const { data, isLoading, isFetching, refetch } = useGenericCodes(entityClassFilter || undefined);
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const columns: GridColDef<GenericCodeListItem>[] = [
    { field: 'entityClass', headerName: t('forms.genericCode.entityClass'), flex: 1.2, minWidth: 200 },
    { field: 'formatEL', headerName: t('forms.genericCode.formatEL'), flex: 1, minWidth: 200 },
    { field: 'prefixOverride', headerName: t('forms.genericCode.prefixOverride'), flex: 1, minWidth: 180 },
    { field: 'sequenceType', headerName: t('forms.sequence.sequenceType'), flex: 0.8, minWidth: 160 },
    { field: 'sequencePattern', headerName: t('forms.sequence.sequencePattern'), flex: 1, minWidth: 200 },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">{t('navigation.genericCodes')}</Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} alignItems={{ xs: 'stretch', sm: 'center' }}>
          <TextField
            value={entityClassFilter}
            onChange={(event) => setEntityClassFilter(event.target.value)}
            size="small"
            label={t('forms.genericCode.entityClass')}
            placeholder={t('forms.genericCode.entityClassPlaceholder')}
          />
          <Button variant="outlined" onClick={() => refetch()}>{t('actions.refresh')}</Button>
          <Button variant="contained" startIcon={<AddIcon />} onClick={() => router.push(`${pathname}/new`)}>
            {t('actions.create')}
          </Button>
        </Stack>
      </Stack>
      <Box sx={{ height: 520 }}>
        <DataGrid
          rows={(data ?? []).map((item) => ({ id: item.entityClass, ...item }))}
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
