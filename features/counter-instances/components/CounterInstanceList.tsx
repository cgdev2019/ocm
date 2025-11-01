'use client';

import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Card, CardContent, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { DataGrid, type GridColDef, type GridPaginationModel } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import { useMemo, useState, type FormEvent } from 'react';
import { DEFAULT_COUNTER_INSTANCES_PAGE_SIZE, useCounterInstances } from '@/features/counter-instances/api';
import type { CounterInstanceListItem } from '@/features/counter-instances/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const CounterInstanceList = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: DEFAULT_COUNTER_INSTANCES_PAGE_SIZE,
  });

  const listQuery = useCounterInstances({
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    search,
  });

  const rows = (listQuery.data?.items ?? []).map((item) => ({ id: item.id ?? item.code, ...item }));
  const rowCount = listQuery.data?.paging.totalRecords ?? 0;

  const columns: GridColDef<CounterInstanceListItem>[] = useMemo(
    () => [
      { field: 'code', headerName: t('forms.counterInstance.code'), flex: 1.2, minWidth: 200 },
      {
        field: 'counterTemplateCode',
        headerName: t('forms.counterInstance.counterTemplateCode'),
        flex: 1,
        minWidth: 180,
      },
      {
        field: 'userAccountCode',
        headerName: t('forms.counterInstance.userAccountCode'),
        flex: 1,
        minWidth: 160,
      },
      {
        field: 'subscriptionCode',
        headerName: t('forms.counterInstance.subscriptionCode'),
        flex: 1,
        minWidth: 160,
      },
      {
        field: 'counterPeriodsCount',
        headerName: t('forms.counterInstance.counterPeriodsCount'),
        flex: 0.6,
        minWidth: 140,
      },
    ],
    [t],
  );

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
    setSearch(searchInput.trim());
  };

  const handleClearSearch = () => {
    setSearchInput('');
    setSearch('');
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  };

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">{t('navigation.counterInstances')}</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton onClick={() => listQuery.refetch()} disabled={listQuery.isFetching}>
            <RefreshIcon />
          </IconButton>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => router.push(`${pathname}/new`)}
          >
            {t('actions.create')}
          </Button>
        </Stack>
      </Stack>

      <Card>
        <CardContent>
          <Stack
            component="form"
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            onSubmit={handleSearchSubmit}
            alignItems={{ xs: 'stretch', md: 'center' }}
          >
            <TextField
              fullWidth
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              label={t('actions.search')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton type="submit" aria-label={t('actions.search')}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" variant="outlined">
              {t('actions.search')}
            </Button>
            <Button variant="text" onClick={handleClearSearch} disabled={!search && !searchInput}>
              {t('actions.clear')}
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Box sx={{ height: 520 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={listQuery.isLoading || listQuery.isFetching}
          disableRowSelectionOnClick
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[10, 20, 50]}
          paginationMode="server"
          rowCount={rowCount}
          localeText={{ noRowsLabel: t('table.empty') }}
          onRowClick={(params) => router.push(`${pathname}/${encodeURIComponent(params.row.code)}`)}
        />
      </Box>
    </Stack>
  );
};
