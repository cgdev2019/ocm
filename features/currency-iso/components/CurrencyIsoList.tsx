'use client';

import { useState } from 'react';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Alert, Box, Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslations } from 'next-intl';
import { DEFAULT_CURRENCY_ISO_PAGE_SIZE, useCurrencyIsos } from '@/features/currency-iso/api';
import type { CurrencyIsoListItem } from '@/features/currency-iso/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';
import { ApiTimeoutError } from '@/lib/api/errors';

export const CurrencyIsoList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_CURRENCY_ISO_PAGE_SIZE,
  });
  const { data, isLoading, isFetching, isError, refetch, error } = useCurrencyIsos();
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const errorMessage = error instanceof ApiTimeoutError
    ? t('feedback.timeout')
    : error instanceof Error
      ? error.message
      : t('feedback.error');

  const columns: GridColDef<CurrencyIsoListItem>[] = [
    { field: 'code', headerName: t('forms.currencyIso.code'), flex: 1, minWidth: 160 },
    { field: 'description', headerName: t('forms.currencyIso.description'), flex: 1.2, minWidth: 220 },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t('navigation.currencyIso')}</Typography>
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
