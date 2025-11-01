'use client';

import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import { Box, Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import {
  useDiscountPlanItemList,
  useDiscountPlanItemVersion,
  useDiscountPlanItems,
} from '@/features/discount-plan-items/api';
import type { DiscountPlanItemListItem } from '@/features/discount-plan-items/types';

export const DiscountPlanItemList = ({ onSelect }: { onSelect: (code: string) => void }) => {
  const t = useTranslations();
  const [search, setSearch] = useState('');
  const versionQuery = useDiscountPlanItemVersion();
  const listQuery = useDiscountPlanItemList();
  const searchQuery = useDiscountPlanItems({ query: search.trim() ? search.trim() : null });

  const rows = useMemo(() => {
    if (search.trim()) {
      return searchQuery.data ?? [];
    }
    return listQuery.data ?? [];
  }, [listQuery.data, search, searchQuery.data]);

  const columns: GridColDef<DiscountPlanItemListItem>[] = useMemo(
    () => [
      { field: 'code', headerName: t('forms.discountPlanItem.code'), flex: 1.2, minWidth: 200 },
      {
        field: 'description',
        headerName: t('forms.discountPlanItem.description'),
        flex: 1.4,
        minWidth: 220,
      },
      {
        field: 'discountPlanCode',
        headerName: t('forms.discountPlanItem.discountPlanCode'),
        flex: 1,
        minWidth: 180,
      },
      {
        field: 'discountPlanItemType',
        headerName: t('forms.discountPlanItem.type'),
        flex: 0.8,
        minWidth: 150,
      },
      { field: 'discountValue', headerName: t('forms.discountPlanItem.value'), flex: 0.6, minWidth: 120 },
    ],
    [t],
  );

  const isLoading = listQuery.isLoading || searchQuery.isLoading;
  const isFetching = listQuery.isFetching || searchQuery.isFetching;

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">{t('navigation.discountPlanItems')}</Typography>
          {versionQuery.data ? (
            <Typography variant="body2" color="text.secondary">
              {t('forms.discountPlanItem.version', { version: versionQuery.data })}
            </Typography>
          ) : null}
        </Box>
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={() => {
            listQuery.refetch();
            searchQuery.refetch();
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
              onClick={() => searchQuery.refetch()}
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
