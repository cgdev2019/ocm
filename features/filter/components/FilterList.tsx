'use client';

import { useState } from 'react';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Alert, Box, Button, Stack, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { useTranslations } from 'next-intl';
import { DEFAULT_FILTER_PAGE_SIZE, useFilterSearch } from '@/features/filter/api';
import type { FilterListItem } from '@/features/filter/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';
import { ApiTimeoutError } from '@/lib/api/errors';

export const FilterList = () => {
  const [searchValue, setSearchValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState<string | null>(null);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_FILTER_PAGE_SIZE,
  });
  const { data, isLoading, isFetching, isError, refetch, error } = useFilterSearch(submittedValue);
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const errorMessage = error instanceof ApiTimeoutError
    ? t('feedback.timeout')
    : error instanceof Error
      ? error.message
      : t('feedback.error');

  const onSearch = () => {
    setSubmittedValue(searchValue.trim() || null);
  };

  const columns: GridColDef<FilterListItem>[] = [
    { field: 'code', headerName: t('forms.filter.code'), flex: 1, minWidth: 160 },
    { field: 'description', headerName: t('forms.filter.description'), flex: 1.2, minWidth: 220 },
    { field: 'entityClass', headerName: t('forms.filter.entityClass'), flex: 1, minWidth: 200 },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t('navigation.filters')}</Typography>
        <Button
          onClick={() => router.push(`${pathname}/new`)}
          variant="contained"
          startIcon={<AddIcon />}
        >
          {t('actions.create')}
        </Button>
      </Stack>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ md: 'center' }}>
        <TextField
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          label={t('forms.filter.code')}
          fullWidth
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              onSearch();
            }
          }}
        />
        <Button variant="outlined" startIcon={<SearchIcon />} onClick={onSearch}>
          {t('actions.search')}
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
          localeText={{ noRowsLabel: submittedValue ? t('table.empty') : t('actions.search') }}
        />
      </Box>
      {isError ? (
        <Alert
          severity="error"
          action={
            <Button color="inherit" size="small" onClick={() => refetch()}>
              {t('actions.retry')}
            </Button>
          }
          sx={{ alignSelf: 'flex-start', width: 'fit-content' }}
        >
          {errorMessage}
        </Alert>
      ) : null}
    </Stack>
  );
};
