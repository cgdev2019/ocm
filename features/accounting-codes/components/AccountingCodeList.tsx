'use client';

import { useState } from 'react';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import {
  Alert,
  Box,
  Button,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslations } from 'next-intl';
import { DEFAULT_ACCOUNTING_CODES_PAGE_SIZE, useAccountingCodes } from '@/features/accounting-codes/api';
import type { AccountingCodeListItem } from '@/features/accounting-codes/types';
import { ApiTimeoutError } from '@/lib/api/errors';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const AccountingCodeList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_ACCOUNTING_CODES_PAGE_SIZE,
  });
  const { data, isLoading, isFetching, isError, error, refetch } = useAccountingCodes();
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const errorMessage = error instanceof ApiTimeoutError
    ? t('feedback.timeout')
    : error instanceof Error
      ? error.message
      : t('feedback.error');

  const columns: GridColDef<AccountingCodeListItem>[] = [
    { field: 'code', headerName: t('forms.accountingCode.code'), flex: 1, minWidth: 180 },
    { field: 'description', headerName: t('forms.accountingCode.description'), flex: 1.2, minWidth: 220 },
    {
      field: 'chartOfAccountTypeEnum',
      headerName: t('forms.accountingCode.chartOfAccountType'),
      flex: 0.8,
      minWidth: 160,
      valueFormatter: (params) => (params.value ? t(`forms.accountingCode.type.${params.value}`) : ''),
    },
    {
      field: 'chartOfAccountViewTypeEnum',
      headerName: t('forms.accountingCode.chartOfAccountViewType'),
      flex: 0.8,
      minWidth: 160,
      valueFormatter: (params) => (params.value ? t(`forms.accountingCode.view.${params.value}`) : ''),
    },
    {
      field: 'disabled',
      headerName: t('forms.accountingCode.disabled'),
      flex: 0.6,
      minWidth: 140,
      renderCell: (params) => (
        <Chip
          label={params.value ? t('common.yes') : t('common.no')}
          color={params.value ? 'default' : 'primary'}
          variant={params.value ? 'outlined' : 'filled'}
          size="small"
        />
      ),
    },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t('navigation.accountingCodes')}</Typography>
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
