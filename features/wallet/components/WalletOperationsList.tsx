'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import CloudDownloadIcon from '@mui/icons-material/CloudDownloadOutlined';
import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import { Alert, Box, Button, Card, CardContent, Snackbar, Stack, TextField, Typography } from '@mui/material';
import { DataGrid, type GridColDef, type GridPaginationModel, type GridSortModel } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  DEFAULT_WALLET_OPERATIONS_PAGE_SIZE,
  useWalletOperations,
  useWalletOperationsExport,
  useWalletVersion,
} from '@/features/wallet/api';
import { WalletOperationDetailDrawer } from '@/features/wallet/components/WalletOperationDetailDrawer';
import type { WalletOperationFilters, WalletOperationListItem } from '@/features/wallet/types';
import {
  walletOperationFiltersSchema,
  type WalletOperationFiltersSchema,
} from '@/features/wallet/schema';

const sanitizeFilters = (values: WalletOperationFiltersSchema): WalletOperationFilters | null => {
  const normalized: WalletOperationFilters = {
    query: values.query?.trim() ? values.query.trim() : undefined,
    status: values.status?.trim() ? values.status.trim() : undefined,
    userAccountCode: values.userAccountCode?.trim() ? values.userAccountCode.trim() : undefined,
    walletTemplate: values.walletTemplate?.trim() ? values.walletTemplate.trim() : undefined,
    fromDate: values.fromDate?.trim() ? values.fromDate.trim() : undefined,
    toDate: values.toDate?.trim() ? values.toDate.trim() : undefined,
  };

  return Object.values(normalized).some((value) => value !== undefined) ? normalized : null;
};

export const WalletOperationsList = () => {
  const t = useTranslations();
  const versionQuery = useWalletVersion();
  const exportMutation = useWalletOperationsExport();
  const [filters, setFilters] = useState<WalletOperationFilters | null>(null);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: DEFAULT_WALLET_OPERATIONS_PAGE_SIZE,
  });
  const [sortModel, setSortModel] = useState<GridSortModel>([
    { field: 'operationDate', sort: 'desc' },
  ]);
  const [selectedOperation, setSelectedOperation] = useState<string | null>(null);
  const [exportSuccess, setExportSuccess] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { control, handleSubmit, reset } = useForm<WalletOperationFiltersSchema>({
    resolver: zodResolver(walletOperationFiltersSchema),
    defaultValues: {
      query: '',
      status: '',
      userAccountCode: '',
      walletTemplate: '',
      fromDate: '',
      toDate: '',
    },
  });

  const operationsQuery = useWalletOperations({
    filters,
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    sortBy: sortModel[0]?.field,
    sortOrder: sortModel[0]?.sort === 'asc' ? 'ASCENDING' : 'DESCENDING',
  });

  const columns: GridColDef<WalletOperationListItem>[] = useMemo(
    () => [
      { field: 'code', headerName: t('forms.wallet.code'), flex: 1.2, minWidth: 180 },
      { field: 'type', headerName: t('forms.wallet.type'), flex: 0.6, minWidth: 120 },
      { field: 'status', headerName: t('forms.wallet.status'), flex: 0.7, minWidth: 140 },
      { field: 'userAccount', headerName: t('forms.wallet.userAccount'), flex: 1, minWidth: 180 },
      { field: 'walletTemplate', headerName: t('forms.wallet.walletTemplate'), flex: 1, minWidth: 180 },
      { field: 'amountWithTax', headerName: t('forms.wallet.amountWithTax'), flex: 0.8, minWidth: 160 },
      { field: 'currency', headerName: t('forms.wallet.currency'), flex: 0.6, minWidth: 120 },
      { field: 'operationDate', headerName: t('forms.wallet.operationDate'), flex: 1, minWidth: 200 },
    ],
    [t],
  );

  const rows = useMemo(
    () =>
      (operationsQuery.data?.items ?? []).map((item) => ({
        id: item.id,
        ...item,
      })),
    [operationsQuery.data?.items],
  );

  const handleFilterSubmit = (values: WalletOperationFiltersSchema) => {
    const sanitized = sanitizeFilters(values);
    setFilters(sanitized);
    setPaginationModel((model) => ({ ...model, page: 0 }));
  };

  const handleReset = () => {
    reset();
    setFilters(null);
    setPaginationModel({ page: 0, pageSize: DEFAULT_WALLET_OPERATIONS_PAGE_SIZE });
  };

  const handleExport = async () => {
    try {
      const result = await exportMutation.mutateAsync(filters);
      const blob = new Blob([JSON.stringify(result.items, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'wallet-operations.json';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setExportSuccess(t('forms.wallet.exportSuccess', { count: result.items.length }));
    } catch (error) {
      setErrorMessage(t('forms.error'));
    }
  };

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">{t('navigation.wallet')}</Typography>
          {versionQuery.data ? (
            <Typography variant="body2" color="text.secondary">
              {t('forms.wallet.version', { version: versionQuery.data })}
            </Typography>
          ) : null}
        </Box>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" startIcon={<RefreshIcon />} onClick={() => operationsQuery.refetch()}>
            {t('actions.refresh')}
          </Button>
          <Button variant="contained" startIcon={<CloudDownloadIcon />} onClick={handleExport}>
            {t('actions.export')}
          </Button>
        </Stack>
      </Stack>

      {operationsQuery.isError ? <Alert severity="error">{t('forms.error')}</Alert> : null}

      <Card component="form" onSubmit={handleSubmit(handleFilterSubmit)}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                control={control}
                name="query"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.wallet.searchCode')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                control={control}
                name="status"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.wallet.status')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                control={control}
                name="userAccountCode"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.wallet.userAccount')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                control={control}
                name="walletTemplate"
                render={({ field }) => (
                  <TextField {...field} fullWidth label={t('forms.wallet.walletTemplate')} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                control={control}
                name="fromDate"
                render={({ field }) => (
                  <TextField {...field} type="date" fullWidth label={t('forms.wallet.fromDate')} InputLabelProps={{ shrink: true }} />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                control={control}
                name="toDate"
                render={({ field }) => (
                  <TextField {...field} type="date" fullWidth label={t('forms.wallet.toDate')} InputLabelProps={{ shrink: true }} />
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 3, pb: 3 }}>
          <Button variant="outlined" onClick={handleReset}>
            {t('actions.reset')}
          </Button>
          <Button type="submit" variant="contained">
            {t('actions.filter')}
          </Button>
        </Stack>
      </Card>

      <Box sx={{ height: 520 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={operationsQuery.isLoading || operationsQuery.isFetching}
          disableRowSelectionOnClick
          paginationMode="server"
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          rowCount={operationsQuery.data?.totalRecords ?? 0}
          pageSizeOptions={[10, 20, 50]}
          sortingMode="client"
          sortModel={sortModel}
          onSortModelChange={setSortModel}
          localeText={{ noRowsLabel: t('table.empty') }}
          onRowClick={(params) => setSelectedOperation(params.row.code)}
        />
      </Box>

      <WalletOperationDetailDrawer
        code={selectedOperation}
        open={Boolean(selectedOperation)}
        onClose={() => setSelectedOperation(null)}
      />

      <Snackbar
        open={Boolean(exportSuccess)}
        autoHideDuration={4000}
        onClose={() => setExportSuccess(null)}
        message={exportSuccess ?? ''}
      />
      <Snackbar
        open={Boolean(errorMessage)}
        autoHideDuration={4000}
        onClose={() => setErrorMessage(null)}
        message={errorMessage ?? ''}
      />
    </Stack>
  );
};
