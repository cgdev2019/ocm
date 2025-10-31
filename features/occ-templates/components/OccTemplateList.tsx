'use client';

import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import {
  DEFAULT_OCC_TEMPLATE_PAGE_SIZE,
  useOccTemplates,
} from '@/features/occ-templates/api';
import type { OccTemplateListItem } from '@/features/occ-templates/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const OccTemplateList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_OCC_TEMPLATE_PAGE_SIZE,
  });
  const { data, isLoading, isFetching } = useOccTemplates();
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const columns: GridColDef<OccTemplateListItem>[] = [
    { field: 'code', headerName: t('forms.occTemplate.code'), flex: 1, minWidth: 160 },
    { field: 'description', headerName: t('forms.occTemplate.description'), flex: 1.2, minWidth: 200 },
    {
      field: 'occCategory',
      headerName: t('forms.occTemplate.occCategory'),
      flex: 0.6,
      minWidth: 140,
      renderCell: (params) => (
        <Chip
          size="small"
          label={t(`forms.occTemplate.categories.${params.value?.toLowerCase() as 'debit' | 'credit'}`)}
          color={params.value === 'DEBIT' ? 'primary' : 'default'}
        />
      ),
    },
    { field: 'accountingCode', headerName: t('forms.occTemplate.accountingCode'), flex: 1, minWidth: 180 },
    { field: 'accountCode', headerName: t('forms.occTemplate.accountCode'), flex: 1, minWidth: 160 },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t('navigation.occTemplates')}</Typography>
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
