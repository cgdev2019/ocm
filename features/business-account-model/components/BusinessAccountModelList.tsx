'use client';

import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import {
  DEFAULT_BUSINESS_ACCOUNT_MODELS_PAGE_SIZE,
  useBusinessAccountModels,
  useBusinessAccountModelVersion,
} from '@/features/business-account-model/api';
import type { BusinessAccountModelListItem } from '@/features/business-account-model/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const BusinessAccountModelList = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const versionQuery = useBusinessAccountModelVersion();
  const [search, setSearch] = useState('');
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_BUSINESS_ACCOUNT_MODELS_PAGE_SIZE,
  });

  const listQuery = useBusinessAccountModels();

  const rows = useMemo(() => {
    const items = listQuery.data ?? [];
    if (!search.trim()) {
      return items;
    }
    const lower = search.trim().toLowerCase();
    return items.filter((item) =>
      [item.code, item.description, item.hierarchyType]
        .filter(Boolean)
        .some((value) => value?.toLowerCase().includes(lower)),
    );
  }, [listQuery.data, search]);

  const columns: GridColDef<BusinessAccountModelListItem>[] = useMemo(
    () => [
      { field: 'code', headerName: t('forms.businessAccountModel.code'), flex: 1.2, minWidth: 200 },
      { field: 'description', headerName: t('forms.businessAccountModel.description'), flex: 1.4, minWidth: 220 },
      { field: 'hierarchyType', headerName: t('forms.businessAccountModel.hierarchyType'), flex: 1, minWidth: 160 },
      { field: 'license', headerName: t('forms.businessAccountModel.license'), flex: 0.8, minWidth: 140 },
      {
        field: 'disabled',
        headerName: t('forms.businessAccountModel.disabled'),
        flex: 0.6,
        minWidth: 120,
        valueFormatter: ({ value }) => (value ? t('common.yes') : t('common.no')),
      },
    ],
    [t],
  );

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">{t('navigation.businessAccountModels')}</Typography>
          {versionQuery.data ? (
            <Typography variant="body2" color="text.secondary">
              {t('forms.businessAccountModel.version', { version: versionQuery.data })}
            </Typography>
          ) : null}
        </Box>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" startIcon={<RefreshIcon />} onClick={() => listQuery.refetch()}>
            {t('actions.refresh')}
          </Button>
          <Button variant="contained" startIcon={<AddIcon />} onClick={() => router.push(`${pathname}/new`)}>
            {t('actions.create')}
          </Button>
        </Stack>
      </Stack>

      <Card>
        <CardContent>
          <TextField
            fullWidth
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            label={t('actions.search')}
          />
        </CardContent>
      </Card>

      <Box sx={{ height: 520 }}>
        <DataGrid
          rows={rows.map((item) => ({ id: item.code, ...item }))}
          columns={columns}
          loading={listQuery.isLoading || listQuery.isFetching}
          disableRowSelectionOnClick
          paginationMode="client"
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[10, 20, 50]}
          localeText={{ noRowsLabel: t('table.empty') }}
          onRowClick={(params) => router.push(`${pathname}/${encodeURIComponent(params.row.code)}`)}
        />
      </Box>
    </Stack>
  );
};
