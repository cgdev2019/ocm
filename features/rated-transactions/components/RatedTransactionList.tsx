'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import CancelIcon from '@mui/icons-material/CancelOutlined';
import CloudDownloadIcon from '@mui/icons-material/CloudDownloadOutlined';
import SearchIcon from '@mui/icons-material/ManageSearchOutlined';
import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { DataGrid, type GridColDef, type GridPaginationModel, type GridSortModel } from '@mui/x-data-grid';
import { format, parseISO } from 'date-fns';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useCallback, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  DEFAULT_RATED_TRANSACTIONS_PAGE_SIZE,
  useCancelRatedTransactions,
  useRatedTransactionVersion,
  useRatedTransactions,
  useRatedTransactionsExport,
} from '@/features/rated-transactions/api';
import { RatedTransactionDetailDrawer } from '@/features/rated-transactions/components/RatedTransactionDetailDrawer';
import type { RatedTransactionFilters, RatedTransactionListItem } from '@/features/rated-transactions/types';
import {
  ratedTransactionFiltersSchema,
  type RatedTransactionFiltersSchema,
} from '@/features/rated-transactions/schema';

const sanitizeFilters = (values: RatedTransactionFiltersSchema): RatedTransactionFilters | null => {
  const trimmed: RatedTransactionFilters = {
    query: values.query?.trim() ? values.query.trim() : undefined,
    status: values.status?.trim() ? values.status.trim() : undefined,
    userAccountCode: values.userAccountCode?.trim() ? values.userAccountCode.trim() : undefined,
  };

  return Object.values(trimmed).some((value) => value) ? trimmed : null;
};

const formatDate = (value?: string) => {
  if (!value) {
    return '—';
  }

  try {
    const parsed = parseISO(value);
    if (Number.isNaN(parsed.getTime())) {
      return value;
    }
    return format(parsed, 'yyyy-MM-dd HH:mm');
  } catch (error) {
    return value;
  }
};

const formatCurrency = (value?: number) => {
  if (value === undefined || value === null) {
    return '—';
  }
  return new Intl.NumberFormat(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
};

export const RatedTransactionList = () => {
  const t = useTranslations();
  const versionQuery = useRatedTransactionVersion();
  const exportMutation = useRatedTransactionsExport();
  const cancelMutation = useCancelRatedTransactions();
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [filters, setFilters] = useState<RatedTransactionFilters | null>(null);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: DEFAULT_RATED_TRANSACTIONS_PAGE_SIZE,
  });
  const [sortModel, setSortModel] = useState<GridSortModel>([
    { field: 'usageDate', sort: 'desc' },
  ]);

  const { control, handleSubmit, reset } = useForm<RatedTransactionFiltersSchema>({
    resolver: zodResolver(ratedTransactionFiltersSchema),
    defaultValues: {
      query: '',
      status: '',
      userAccountCode: '',
    },
  });

  const ratedTransactionsQuery = useRatedTransactions({
    filters,
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    sortBy: sortModel[0]?.field,
    sortOrder: sortModel[0]?.sort === 'asc' ? 'ASCENDING' : 'DESCENDING',
  });

  const columns: GridColDef<RatedTransactionListItem>[] = useMemo(
    () => [
      { field: 'code', headerName: t('forms.ratedTransaction.code'), flex: 1, minWidth: 160 },
      {
        field: 'usageDate',
        headerName: t('forms.ratedTransaction.usageDate'),
        flex: 1.2,
        minWidth: 180,
        valueFormatter: ({ value }) => formatDate(value as string | undefined),
      },
      {
        field: 'status',
        headerName: t('forms.ratedTransaction.status'),
        flex: 0.8,
        minWidth: 140,
      },
      {
        field: 'quantity',
        headerName: t('forms.ratedTransaction.quantity'),
        flex: 0.6,
        minWidth: 120,
      },
      {
        field: 'unitAmountWithoutTax',
        headerName: t('forms.ratedTransaction.unitAmountWithoutTax'),
        flex: 1,
        minWidth: 160,
        valueFormatter: ({ value }) => formatCurrency(value as number | undefined),
      },
      {
        field: 'amountWithoutTax',
        headerName: t('forms.ratedTransaction.amountWithoutTax'),
        flex: 1,
        minWidth: 160,
        valueFormatter: ({ value }) => formatCurrency(value as number | undefined),
      },
      {
        field: 'amountWithTax',
        headerName: t('forms.ratedTransaction.amountWithTax'),
        flex: 1,
        minWidth: 160,
        valueFormatter: ({ value }) => formatCurrency(value as number | undefined),
      },
      {
        field: 'invoiceSubCategoryCode',
        headerName: t('forms.ratedTransaction.invoiceSubCategoryCode'),
        flex: 1,
        minWidth: 200,
      },
    ],
    [t],
  );

  const rows = useMemo(
    () =>
      (ratedTransactionsQuery.data?.items ?? []).map((item) => ({
        ...item,
        id: item.id,
      })),
    [ratedTransactionsQuery.data?.items],
  );

  const handleFilterSubmit = (values: RatedTransactionFiltersSchema) => {
    const sanitized = sanitizeFilters(values);
    setFilters(sanitized);
    setPaginationModel((model) => ({ ...model, page: 0 }));
  };

  const handleReset = () => {
    reset();
    setFilters(null);
    setPaginationModel({ page: 0, pageSize: DEFAULT_RATED_TRANSACTIONS_PAGE_SIZE });
  };

  const handleExport = async () => {
    try {
      const result = await exportMutation.mutateAsync();
      const blob = new Blob([JSON.stringify(result.items, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'rated-transactions.json';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setSuccessMessage(
        t('forms.ratedTransaction.exportSuccess', { count: result.items.length }),
      );
    } catch (error) {
      setErrorMessage(t('forms.error'));
    }
  };

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCancel = async (overrideFilters?: RatedTransactionFilters | null) => {
    const appliedFilters = overrideFilters ?? filters;

    if (!appliedFilters) {
      setErrorMessage(t('forms.ratedTransaction.noFilterError'));
      return;
    }

    try {
      const payload = await cancelMutation.mutateAsync(appliedFilters);
      setSuccessMessage(payload.message ?? t('forms.success'));
    } catch (error) {
      setErrorMessage(t('forms.error'));
    }
  };

  const handleCloseSuccess = useCallback(() => setSuccessMessage(null), []);
  const handleCloseError = useCallback(() => setErrorMessage(null), []);

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">{t('forms.ratedTransaction.title')}</Typography>
          {versionQuery.data ? (
            <Typography variant="body2" color="text.secondary">
              {t('forms.ratedTransaction.version', { version: versionQuery.data })}
            </Typography>
          ) : null}
        </Box>
        <Stack direction="row" spacing={1} alignItems="center">
          <Button
            variant="outlined"
            startIcon={<RefreshIcon />}
            onClick={() => ratedTransactionsQuery.refetch()}
            disabled={ratedTransactionsQuery.isFetching}
          >
            {t('actions.refresh')}
          </Button>
          <Button
            variant="outlined"
            startIcon={<CloudDownloadIcon />}
            onClick={handleExport}
            disabled={exportMutation.isPending}
          >
            {t('forms.ratedTransaction.export')}
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<CancelIcon />}
            onClick={() => handleCancel()}
            disabled={cancelMutation.isPending}
          >
            {t('forms.ratedTransaction.cancelFiltered')}
          </Button>
        </Stack>
      </Stack>

      <Card component="form" onSubmit={handleSubmit(handleFilterSubmit)}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="query"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.ratedTransaction.query')}
                    placeholder="TRX-0001"
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="status"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.ratedTransaction.status')}
                    placeholder="OPEN"
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                control={control}
                name="userAccountCode"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('forms.ratedTransaction.userAccountCode')}
                    placeholder="UA-0001"
                    fullWidth
                  />
                )}
              />
            </Grid>
          </Grid>
          <Stack direction="row" spacing={2} mt={3}>
            <Button type="submit" variant="contained" startIcon={<SearchIcon />} disabled={ratedTransactionsQuery.isFetching}>
              {t('actions.search')}
            </Button>
            <Button type="button" variant="text" onClick={handleReset} disabled={ratedTransactionsQuery.isFetching}>
              {t('actions.reset')}
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Box sx={{ height: 560 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          paginationMode="server"
          sortingMode="server"
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          rowCount={ratedTransactionsQuery.data?.totalRecords ?? 0}
          pageSizeOptions={[10, 20, 50]}
          onSortModelChange={(model) => {
            if (model.length === 0) {
              setSortModel([{ field: 'usageDate', sort: 'desc' }]);
            } else {
              setSortModel(model);
            }
          }}
          sortModel={sortModel}
          loading={ratedTransactionsQuery.isLoading || ratedTransactionsQuery.isFetching}
          disableRowSelectionOnClick
          onRowClick={(params) => {
            if (params.row.code) {
              setSelectedCode(params.row.code);
            }
          }}
          localeText={{ noRowsLabel: t('table.empty') }}
        />
      </Box>

      <RatedTransactionDetailDrawer
        transactionCode={selectedCode}
        open={Boolean(selectedCode)}
        onClose={() => setSelectedCode(null)}
        onCancel={(code) => handleCancel({ query: code })}
        cancelling={cancelMutation.isPending}
      />

      <Snackbar open={Boolean(successMessage)} autoHideDuration={4000} onClose={handleCloseSuccess}>
        <Alert onClose={handleCloseSuccess} severity="success" variant="filled">
          {successMessage}
        </Alert>
      </Snackbar>

      <Snackbar open={Boolean(errorMessage)} autoHideDuration={4000} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error" variant="filled">
          {errorMessage}
        </Alert>
      </Snackbar>

      {ratedTransactionsQuery.isLoading ? (
        <Stack spacing={2} alignItems="center" py={4}>
          <CircularProgress size={32} />
          <Typography variant="body2" color="text.secondary">
            {t('table.loading')}
          </Typography>
        </Stack>
      ) : null}
    </Stack>
  );
};
