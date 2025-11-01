'use client';

import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import { Box, Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import { useDiscountPlanList, useDiscountPlanVersion, useDiscountPlans } from '@/features/discount-plans/api';
import type { DiscountPlanListItem } from '@/features/discount-plans/types';

export const DiscountPlanList = ({ onSelect }: { onSelect: (code: string) => void }) => {
  const t = useTranslations();
  const [search, setSearch] = useState('');
  const versionQuery = useDiscountPlanVersion();
  const listQuery = useDiscountPlanList();
  const searchQuery = useDiscountPlans({ query: search.trim() ? search.trim() : null });

  const rows = useMemo(() => {
    if (search.trim()) {
      return searchQuery.data ?? [];
    }
    return listQuery.data ?? [];
  }, [listQuery.data, search, searchQuery.data]);

  const columns: GridColDef<DiscountPlanListItem>[] = useMemo(
    () => [
      { field: 'code', headerName: t('forms.discountPlan.code'), flex: 1.2, minWidth: 200 },
      { field: 'description', headerName: t('forms.discountPlan.description'), flex: 1.6, minWidth: 220 },
      { field: 'discountPlanType', headerName: t('forms.discountPlan.type'), flex: 0.8, minWidth: 160 },
      { field: 'status', headerName: t('forms.discountPlan.status'), flex: 0.8, minWidth: 150 },
      { field: 'startDate', headerName: t('forms.discountPlan.startDate'), flex: 1, minWidth: 160 },
      { field: 'endDate', headerName: t('forms.discountPlan.endDate'), flex: 1, minWidth: 160 },
    ],
    [t],
  );

  const isLoading = listQuery.isLoading || searchQuery.isLoading;
  const isFetching = listQuery.isFetching || searchQuery.isFetching;

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">{t('navigation.discountPlans')}</Typography>
          {versionQuery.data ? (
            <Typography variant="body2" color="text.secondary">
              {t('forms.discountPlan.version', { version: versionQuery.data })}
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
