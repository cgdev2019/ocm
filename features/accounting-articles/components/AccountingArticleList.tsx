'use client';

import { useState } from 'react';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Alert, Box, Button, Chip, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslations } from 'next-intl';
import {
  DEFAULT_ACCOUNTING_ARTICLES_PAGE_SIZE,
  useAccountingArticles,
} from '@/features/accounting-articles/api';
import type { AccountingArticleListItem } from '@/features/accounting-articles/types';
import { ApiTimeoutError } from '@/lib/api/errors';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const AccountingArticleList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_ACCOUNTING_ARTICLES_PAGE_SIZE,
  });
  const { data, isLoading, isFetching, isError, error, refetch } = useAccountingArticles({
    limit: paginationModel.pageSize,
    offset: paginationModel.page * paginationModel.pageSize,
  });
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const errorMessage = error instanceof ApiTimeoutError
    ? t('feedback.timeout')
    : error instanceof Error
      ? error.message
      : t('feedback.error');

  const columns: GridColDef<AccountingArticleListItem>[] = [
    { field: 'code', headerName: t('forms.accountingArticle.code'), flex: 1, minWidth: 160 },
    { field: 'description', headerName: t('forms.accountingArticle.description'), flex: 1.4, minWidth: 220 },
    {
      field: 'invoiceSubCategoryCode',
      headerName: t('forms.accountingArticle.invoiceSubCategory'),
      flex: 1,
      minWidth: 180,
    },
    {
      field: 'taxClassCode',
      headerName: t('forms.accountingArticle.taxClass'),
      flex: 1,
      minWidth: 160,
    },
    {
      field: 'accountingCode',
      headerName: t('forms.accountingArticle.accountingCode'),
      flex: 1,
      minWidth: 160,
    },
    {
      field: 'unitPrice',
      headerName: t('forms.accountingArticle.unitPrice'),
      flex: 0.8,
      minWidth: 140,
      valueFormatter: (params) => (params.value !== undefined ? String(params.value) : ''),
    },
    {
      field: 'ignoreAggregation',
      headerName: t('forms.accountingArticle.ignoreAggregation'),
      flex: 0.8,
      minWidth: 160,
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
        <Typography variant="h4">{t('navigation.accountingArticles')}</Typography>
        <Button onClick={() => router.push(`${pathname}/new`)} variant="contained" startIcon={<AddIcon />}>
          {t('actions.create')}
        </Button>
      </Stack>
      <Box sx={{ height: 620, width: '100%' }}>
        <DataGrid
          rows={(data?.items ?? []).map((item) => ({ id: item.code, ...item }))}
          columns={columns}
          loading={isLoading || isFetching}
          disableRowSelectionOnClick
          onRowClick={(params) => router.push(`${pathname}/${params.id}`)}
          paginationMode="server"
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          rowCount={data?.paging.totalRecords ?? 0}
          pageSizeOptions={[10, 20, 50]}
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
