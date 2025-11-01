'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import FilterAltIcon from '@mui/icons-material/FilterAltOutlined';
import RestartAltIcon from '@mui/icons-material/RestartAltOutlined';
import { Alert, Box, Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { DataGrid, type GridColDef, type GridPaginationModel, type GridSortModel } from '@mui/x-data-grid';
import { format, parseISO } from 'date-fns';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  DEFAULT_AGED_RECEIVABLES_PAGE_SIZE,
  useAgedReceivables,
} from '@/features/aged-receivables/api';
import type {
  AgedReceivableListItem,
  AgedReceivablesFilters,
  AgedReceivablesResult,
} from '@/features/aged-receivables/types';
import {
  agedReceivablesFiltersSchema,
  type AgedReceivablesFiltersSchema,
} from '@/features/aged-receivables/schema';
import { ApiTimeoutError } from '@/lib/api/errors';

const sanitizeFilters = (values: AgedReceivablesFiltersSchema): AgedReceivablesFilters | null => {
  const filters: AgedReceivablesFilters = {};

  const normalize = (input?: string) => (input && input.trim().length > 0 ? input.trim() : undefined);

  const customerAccountCode = normalize(values.customerAccountCode);
  if (customerAccountCode) {
    filters.customerAccountCode = customerAccountCode;
  }

  const customerAccountDescription = normalize(values.customerAccountDescription);
  if (customerAccountDescription) {
    filters.customerAccountDescription = customerAccountDescription;
  }

  const sellerCode = normalize(values.sellerCode);
  if (sellerCode) {
    filters.sellerCode = sellerCode;
  }

  const sellerDescription = normalize(values.sellerDescription);
  if (sellerDescription) {
    filters.sellerDescription = sellerDescription;
  }

  const invoiceNumber = normalize(values.invoiceNumber);
  if (invoiceNumber) {
    filters.invoiceNumber = invoiceNumber;
  }

  const startDate = normalize(values.startDate);
  if (startDate) {
    filters.startDate = startDate;
  }

  const startDueDate = normalize(values.startDueDate);
  if (startDueDate) {
    filters.startDueDate = startDueDate;
  }

  const endDueDate = normalize(values.endDueDate);
  if (endDueDate) {
    filters.endDueDate = endDueDate;
  }

  const tradingCurrency = normalize(values.tradingCurrency);
  if (tradingCurrency) {
    filters.tradingCurrency = tradingCurrency;
  }

  const funcCurrency = normalize(values.funcCurrency);
  if (funcCurrency) {
    filters.funcCurrency = funcCurrency;
  }

  const stepInDays = normalize(values.stepInDays);
  if (stepInDays) {
    const parsed = Number(stepInDays);
    if (!Number.isNaN(parsed)) {
      filters.stepInDays = parsed;
    }
  }

  const numberOfPeriods = normalize(values.numberOfPeriods);
  if (numberOfPeriods) {
    const parsed = Number(numberOfPeriods);
    if (!Number.isNaN(parsed)) {
      filters.numberOfPeriods = parsed;
    }
  }

  return Object.keys(filters).length > 0 ? filters : null;
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
    return format(parsed, "yyyy-MM-dd HH:mm");
  } catch (error) {
    return value;
  }
};

const formatCurrency = (value?: number | null) => {
  if (value === undefined || value === null) {
    return '—';
  }

  return new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export const AgedReceivablesList = () => {
  const t = useTranslations();
  const [filters, setFilters] = useState<AgedReceivablesFilters | null>(null);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: DEFAULT_AGED_RECEIVABLES_PAGE_SIZE,
  });
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'dueDate', sort: 'desc' }]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<AgedReceivablesFiltersSchema>({
    resolver: zodResolver(agedReceivablesFiltersSchema),
    defaultValues: {
      customerAccountCode: '',
      customerAccountDescription: '',
      sellerCode: '',
      sellerDescription: '',
      invoiceNumber: '',
      startDate: '',
      startDueDate: '',
      endDueDate: '',
      tradingCurrency: '',
      funcCurrency: '',
      stepInDays: '',
      numberOfPeriods: '',
    },
  });

  const agedReceivablesQuery = useAgedReceivables({
    filters,
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    sortBy: sortModel[0]?.field,
    sortOrder: sortModel[0]?.sort === 'asc' ? 'ASCENDING' : 'DESCENDING',
  });

  const queryData: AgedReceivablesResult | undefined = agedReceivablesQuery.data;
  const bucketLabels: string[] = queryData?.bucketLabels ?? [];

  const baseColumns = useMemo<GridColDef<AgedReceivableListItem>[]>(
    () => [
      {
        field: 'customerAccountCode',
        headerName: t('forms.agedReceivable.customerAccountCode'),
        flex: 1,
        minWidth: 160,
      },
      {
        field: 'customerAccountDescription',
        headerName: t('forms.agedReceivable.customerAccountDescription'),
        flex: 1.2,
        minWidth: 200,
      },
      {
        field: 'sellerCode',
        headerName: t('forms.agedReceivable.sellerCode'),
        flex: 0.8,
        minWidth: 140,
      },
      {
        field: 'sellerDescription',
        headerName: t('forms.agedReceivable.sellerDescription'),
        flex: 1.2,
        minWidth: 200,
      },
      {
        field: 'invoiceNumber',
        headerName: t('forms.agedReceivable.invoiceNumber'),
        flex: 0.9,
        minWidth: 160,
      },
      {
        field: 'invoiceDate',
        headerName: t('forms.agedReceivable.invoiceDate'),
        flex: 1,
        minWidth: 180,
        valueFormatter: ({ value }: { value?: string }) => formatDate(value),
      },
      {
        field: 'dueDate',
        headerName: t('forms.agedReceivable.dueDate'),
        flex: 1,
        minWidth: 180,
        valueFormatter: ({ value }: { value?: string }) => formatDate(value),
      },
      {
        field: 'tradingCurrency',
        headerName: t('forms.agedReceivable.tradingCurrency'),
        flex: 0.6,
        minWidth: 120,
      },
      {
        field: 'funcCurrency',
        headerName: t('forms.agedReceivable.funcCurrency'),
        flex: 0.6,
        minWidth: 120,
      },
      {
        field: 'notDueAmount',
        headerName: t('forms.agedReceivable.notDueAmount'),
        flex: 0.8,
        minWidth: 160,
        valueFormatter: ({ value }: { value?: number | null }) => formatCurrency(value),
      },
    ],
    [t],
  );

  const bucketColumns = useMemo<GridColDef<AgedReceivableListItem>[]>(() => {
    return bucketLabels.map((label: string, index: number) => {
      const column: GridColDef<AgedReceivableListItem> = {
        field: `bucket-${index}`,
        headerName: label,
        flex: 0.8,
        minWidth: 150,
        sortable: false,
        valueGetter: ({ row }: { row: AgedReceivableListItem }) => row.bucketAmounts[label] ?? 0,
        valueFormatter: ({ value }: { value?: number | null }) => formatCurrency(value),
      };
      return column;
    });
  }, [bucketLabels]);

  const totalColumn = useMemo<GridColDef<AgedReceivableListItem>>(
    () => ({
      field: 'totalAmount',
      headerName: t('forms.agedReceivable.totalAmount'),
      flex: 0.9,
      minWidth: 160,
      valueFormatter: ({ value }: { value?: number | null }) => formatCurrency(value),
    }),
    [t],
  );

  const columns = useMemo(
    () => [...baseColumns, ...bucketColumns, totalColumn],
    [baseColumns, bucketColumns, totalColumn],
  );

  const handleFilterSubmit = (values: AgedReceivablesFiltersSchema) => {
    const sanitized = sanitizeFilters(values);
    setFilters(sanitized);
    setPaginationModel((model) => ({ ...model, page: 0 }));
  };

  const handleReset = () => {
    reset();
    setFilters(null);
    setPaginationModel({ page: 0, pageSize: DEFAULT_AGED_RECEIVABLES_PAGE_SIZE });
  };

  const rows = useMemo(
    () =>
      (queryData?.items ?? []).map((item: AgedReceivableListItem) => ({
        ...item,
      })),
    [queryData?.items],
  );

  const totalRecords = queryData?.totalRecords ?? 0;

  const errorMessage = agedReceivablesQuery.error instanceof ApiTimeoutError
    ? t('feedback.timeout')
    : agedReceivablesQuery.error instanceof Error
      ? agedReceivablesQuery.error.message
      : t('feedback.error');

  return (
    <Stack spacing={3}>
      <Typography variant="h4">{t('navigation.agedReceivables')}</Typography>

      <Card component="form" onSubmit={handleSubmit(handleFilterSubmit)}>
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h6">{t('forms.agedReceivable.filtersTitle')}</Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Controller
                  control={control}
                  name="customerAccountCode"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('forms.agedReceivable.customerAccountCode')}
                      fullWidth
                      size="small"
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Controller
                  control={control}
                  name="customerAccountDescription"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('forms.agedReceivable.customerAccountDescription')}
                      fullWidth
                      size="small"
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Controller
                  control={control}
                  name="sellerCode"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('forms.agedReceivable.sellerCode')}
                      fullWidth
                      size="small"
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Controller
                  control={control}
                  name="sellerDescription"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('forms.agedReceivable.sellerDescription')}
                      fullWidth
                      size="small"
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Controller
                  control={control}
                  name="invoiceNumber"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('forms.agedReceivable.invoiceNumber')}
                      fullWidth
                      size="small"
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Controller
                  control={control}
                  name="startDate"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('forms.agedReceivable.startDate')}
                      fullWidth
                      size="small"
                      type="datetime-local"
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Controller
                  control={control}
                  name="startDueDate"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('forms.agedReceivable.startDueDate')}
                      fullWidth
                      size="small"
                      type="datetime-local"
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Controller
                  control={control}
                  name="endDueDate"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('forms.agedReceivable.endDueDate')}
                      fullWidth
                      size="small"
                      type="datetime-local"
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Controller
                  control={control}
                  name="tradingCurrency"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('forms.agedReceivable.tradingCurrency')}
                      fullWidth
                      size="small"
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Controller
                  control={control}
                  name="funcCurrency"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('forms.agedReceivable.funcCurrency')}
                      fullWidth
                      size="small"
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Controller
                  control={control}
                  name="stepInDays"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('forms.agedReceivable.stepInDays')}
                      fullWidth
                      size="small"
                      type="number"
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Controller
                  control={control}
                  name="numberOfPeriods"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('forms.agedReceivable.numberOfPeriods')}
                      fullWidth
                      size="small"
                      type="number"
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button
                type="button"
                variant="outlined"
                startIcon={<RestartAltIcon />}
                onClick={handleReset}
                disabled={isSubmitting || agedReceivablesQuery.isLoading}
              >
                {t('actions.reset')}
              </Button>
              <Button
                type="submit"
                variant="contained"
                startIcon={<FilterAltIcon />}
                disabled={isSubmitting}
              >
                {t('actions.filter')}
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Box sx={{ width: '100%', height: 560 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={agedReceivablesQuery.isLoading || agedReceivablesQuery.isFetching}
          disableRowSelectionOnClick
          paginationMode="server"
          paginationModel={paginationModel}
          onPaginationModelChange={(model) => setPaginationModel(model)}
          pageSizeOptions={[10, 20, 50, 100]}
          rowCount={totalRecords}
          sortingMode="server"
          sortModel={sortModel}
          onSortModelChange={(model) => setSortModel(model.length > 0 ? [model[0]] : [])}
          localeText={{ noRowsLabel: t('table.empty') }}
        />
      </Box>

      {agedReceivablesQuery.isError ? (
        <Alert
          severity="error"
          action={
            <Button color="inherit" size="small" onClick={() => agedReceivablesQuery.refetch()}>
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
