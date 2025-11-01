'use client';

import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import { Box, Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import {
  useOfferTemplateCategories,
  useOfferTemplateCategoryListAll,
  useOfferTemplateCategoryVersion,
} from '@/features/offer-template-categories/api';
import type { OfferTemplateCategoryListItem } from '@/features/offer-template-categories/types';

export const OfferTemplateCategoryList = ({ onSelect }: { onSelect: (code: string) => void }) => {
  const t = useTranslations();
  const [search, setSearch] = useState('');
  const versionQuery = useOfferTemplateCategoryVersion();
  const listAllQuery = useOfferTemplateCategoryListAll();
  const listQuery = useOfferTemplateCategories({ query: search.trim() ? search.trim() : null });

  const rows = useMemo(() => {
    if (search.trim()) {
      return listQuery.data ?? [];
    }
    return listAllQuery.data ?? [];
  }, [listAllQuery.data, listQuery.data, search]);

  const columns: GridColDef<OfferTemplateCategoryListItem>[] = useMemo(
    () => [
      { field: 'code', headerName: t('forms.offerTemplateCategory.code'), flex: 1.2, minWidth: 200 },
      { field: 'name', headerName: t('forms.offerTemplateCategory.name'), flex: 1.2, minWidth: 180 },
      { field: 'description', headerName: t('forms.offerTemplateCategory.description'), flex: 1.6, minWidth: 220 },
      {
        field: 'active',
        headerName: t('forms.offerTemplateCategory.active'),
        flex: 0.6,
        minWidth: 120,
        valueFormatter: (params) => (params.value ? t('forms.yes') : t('forms.no')),
      },
      {
        field: 'disabled',
        headerName: t('forms.offerTemplateCategory.disabled'),
        flex: 0.6,
        minWidth: 140,
        valueFormatter: (params) => (params.value ? t('forms.yes') : t('forms.no')),
      },
    ],
    [t],
  );

  const isLoading = listAllQuery.isLoading || listQuery.isLoading;
  const isFetching = listAllQuery.isFetching || listQuery.isFetching;

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">{t('navigation.offerTemplateCategories')}</Typography>
          {versionQuery.data ? (
            <Typography variant="body2" color="text.secondary">
              {t('forms.offerTemplateCategory.version', { version: versionQuery.data })}
            </Typography>
          ) : null}
        </Box>
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={() => {
            listAllQuery.refetch();
            listQuery.refetch();
          }}
        >
          {t('actions.refresh')}
        </Button>
      </Stack>

      <Card>
        <CardContent>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ sm: 'center' }}>
            <TextField
              fullWidth
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              label={t('actions.search')}
            />
            <Button
              variant="contained"
              startIcon={<SearchIcon />}
              onClick={() => listQuery.refetch()}
              disabled={isFetching}
            >
              {t('actions.search')}
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Box sx={{ height: 400 }}>
        <DataGrid
          rows={rows.map((item) => ({ id: item.code, ...item }))}
          columns={columns}
          loading={isLoading || isFetching}
          disableRowSelectionOnClick
          localeText={{ noRowsLabel: search.trim() ? t('table.startSearch') : t('table.noData') }}
          onRowClick={(params) => onSelect(params.row.code)}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[10, 25, 50]}
        />
      </Box>
    </Stack>
  );
};
