'use client';

import { useMemo, useState } from 'react';
import { DataGrid, type GridColDef, type GridPaginationModel, type GridSortModel } from '@mui/x-data-grid';
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { useTranslations } from 'next-intl';
import { DEFAULT_ACCOUNTING_PERIODS_PAGE_SIZE, useAccountingPeriods, useGenerateNextAccountingPeriod } from '@/features/accounting-periods/api';
import type { AccountingPeriodListItem } from '@/features/accounting-periods/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';
import { ApiTimeoutError } from '@/lib/api/errors';

const STATUS_OPTIONS = ['OPEN', 'CLOSED', 'REOPEN'];

type SnackbarState = { message: string; severity: 'success' | 'error' } | null;

export const AccountingPeriodList = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: DEFAULT_ACCOUNTING_PERIODS_PAGE_SIZE,
  });
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'fiscalYear', sort: 'desc' }]);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [snackbar, setSnackbar] = useState<SnackbarState>(null);

  const filters = useMemo(
    () => ({
      query: query.trim() ? query.trim() : null,
      status: statusFilter.trim() ? statusFilter.trim() : null,
    }),
    [query, statusFilter],
  );

  const { data, isLoading, isFetching, isError, refetch, error } = useAccountingPeriods({
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    sortBy: sortModel[0]?.field,
    sortOrder: sortModel[0]?.sort === 'asc' ? 'ASCENDING' : 'DESCENDING',
    filters,
  });

  const generateNext = useGenerateNextAccountingPeriod();

  const errorMessage = error instanceof ApiTimeoutError
    ? t('feedback.timeout')
    : error instanceof Error
      ? error.message
      : t('feedback.error');

  const columns: GridColDef<AccountingPeriodListItem>[] = [
    { field: 'fiscalYear', headerName: t('forms.accountingPeriod.fiscalYear'), flex: 1, minWidth: 160 },
    { field: 'status', headerName: t('forms.accountingPeriod.status'), flex: 1, minWidth: 160 },
    {
      field: 'subAccountingPeriodType',
      headerName: t('forms.accountingPeriod.subAccountingPeriodType'),
      flex: 1.2,
      minWidth: 200,
    },
    {
      field: 'ongoingSubAccountingPeriods',
      headerName: t('forms.accountingPeriod.ongoingSubAccountingPeriods'),
      flex: 0.8,
      minWidth: 200,
    },
    { field: 'startDate', headerName: t('forms.accountingPeriod.startDate'), flex: 1, minWidth: 200 },
    { field: 'endDate', headerName: t('forms.accountingPeriod.endDate'), flex: 1, minWidth: 200 },
  ];

  const handleGenerateNext = async () => {
    try {
      const result = await generateNext.mutateAsync();
      if (result?.fiscalYear) {
        setSnackbar({
          message: t('forms.accountingPeriod.generateSuccessWithYear', { fiscalYear: result.fiscalYear }),
          severity: 'success',
        });
      } else {
        setSnackbar({ message: t('forms.accountingPeriod.generateSuccess'), severity: 'success' });
      }
    } catch (err) {
      setSnackbar({
        message: err instanceof Error ? err.message : t('forms.error'),
        severity: 'error',
      });
    }
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" flexWrap="wrap" rowGap={2}>
        <Typography variant="h4">{t('navigation.accountingPeriods')}</Typography>
        <Stack direction="row" spacing={1}>
          <Button
            onClick={handleGenerateNext}
            variant="outlined"
            startIcon={<AutorenewIcon />}
            disabled={generateNext.isPending}
          >
            {t('forms.accountingPeriod.generateNext')}
          </Button>
          <Button
            onClick={() => router.push(`${pathname}/new`)}
            variant="contained"
            startIcon={<AddIcon />}
          >
            {t('actions.create')}
          </Button>
        </Stack>
      </Stack>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ xs: 'stretch', md: 'center' }}>
        <TextField
          label={t('forms.accountingPeriod.searchLabel')}
          value={query}
          onChange={(event) => {
            setPaginationModel((prev) => ({ ...prev, page: 0 }));
            setQuery(event.target.value);
          }}
          sx={{ width: { xs: '100%', md: 280 } }}
        />
        <TextField
          select
          label={t('forms.accountingPeriod.statusFilterLabel')}
          value={statusFilter}
          onChange={(event) => {
            setPaginationModel((prev) => ({ ...prev, page: 0 }));
            setStatusFilter(event.target.value);
          }}
          sx={{ width: { xs: '100%', md: 220 } }}
        >
          <MenuItem value="">{t('actions.all')}</MenuItem>
          {STATUS_OPTIONS.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={(data?.items ?? []).map((item) => ({ id: item.fiscalYear, ...item }))}
          columns={columns}
          loading={isLoading || isFetching}
          disableRowSelectionOnClick
          onRowClick={(params) => router.push(`${pathname}/${params.id}`)}
          paginationModel={paginationModel}
          onPaginationModelChange={(model) => setPaginationModel(model)}
          paginationMode="server"
          rowCount={data?.paging.totalRecords ?? 0}
          pageSizeOptions={[10, 20, 50, 100]}
          sortingMode="server"
          sortModel={sortModel}
          onSortModelChange={(model) => setSortModel(model.length > 0 ? model : [{ field: 'fiscalYear', sort: 'desc' }])}
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
      <Snackbar
        open={Boolean(snackbar)}
        autoHideDuration={4000}
        onClose={() => setSnackbar(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        {snackbar ? <Alert severity={snackbar.severity}>{snackbar.message}</Alert> : undefined}
      </Snackbar>
    </Stack>
  );
};
