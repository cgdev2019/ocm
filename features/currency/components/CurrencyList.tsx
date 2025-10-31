'use client';

import { useMemo, useState } from 'react';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Alert, Box, Button, Chip, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslations } from 'next-intl';
import { DEFAULT_CURRENCY_PAGE_SIZE, useCurrencies } from '@/features/currency/api';
import type { CurrencyListItem } from '@/features/currency/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';
import { ApiTimeoutError } from '@/lib/api/errors';

export const CurrencyList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_CURRENCY_PAGE_SIZE,
  });
  const { data, isLoading, isFetching, isError, refetch, error } = useCurrencies();
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const errorMessage = error instanceof ApiTimeoutError
    ? t('feedback.timeout')
    : error instanceof Error
      ? error.message
      : t('feedback.error');

  const columns: GridColDef<CurrencyListItem>[] = useMemo(
    () => [
      { field: 'code', headerName: t('forms.currency.code'), flex: 1, minWidth: 160 },
      { field: 'description', headerName: t('forms.currency.description'), flex: 1.2, minWidth: 220 },
      { field: 'symbol', headerName: t('forms.currency.symbol'), flex: 0.6, minWidth: 120 },
      {
        field: 'decimalPlaces',
        headerName: t('forms.currency.decimalPlaces'),
        flex: 0.6,
        minWidth: 120,
        valueFormatter: (_value: never, row) => row.decimalPlaces ?? '—',
      },
      {
        field: 'disabled',
        headerName: t('forms.currency.disabled'),
        flex: 0.6,
        minWidth: 120,
        renderCell: (params) => (
          <Chip
            size="small"
            color={params.value ? 'default' : 'success'}
            label={params.value ? t('common.yes') : t('common.no')}
            variant={params.value ? 'outlined' : 'filled'}
          />
        ),
      },
    ],
    [t],
  );

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t('navigation.currency')}</Typography>
        <Button
          onClick={() => router.push(`${pathname}/new`)}
          variant="contained"
          startIcon={<AddIcon />}
        >
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
