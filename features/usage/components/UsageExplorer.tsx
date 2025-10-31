'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import SearchIcon from '@mui/icons-material/ManageSearchOutlined';
import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { format } from 'date-fns';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  useUsageChargeAggregate,
  useUsageSearch,
  useUsageVersion,
} from '@/features/usage/api';
import { usageSearchSchema, type UsageSearchSchema } from '@/features/usage/schema';
import type {
  UsageChargeAggregateListItem,
  UsageListItem,
  UsageSearchCriteria,
} from '@/features/usage/types';

const adaptFormToCriteria = (values: UsageSearchSchema): UsageSearchCriteria | null => {
  if (!values.userAccountCode) {
    return null;
  }
  return {
    userAccountCode: values.userAccountCode,
    fromDate: values.fromDate || undefined,
    toDate: values.toDate || undefined,
  };
};

export const UsageExplorer = () => {
  const t = useTranslations();
  const [criteria, setCriteria] = useState<UsageSearchCriteria | null>(null);
  const usageQuery = useUsageSearch(criteria);
  const aggregateQuery = useUsageChargeAggregate(criteria);
  const versionQuery = useUsageVersion();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UsageSearchSchema>({
    resolver: zodResolver(usageSearchSchema),
    defaultValues: { userAccountCode: '', fromDate: '', toDate: '' },
  });

  const onSubmit = (values: UsageSearchSchema) => {
    setCriteria(adaptFormToCriteria(values));
  };

  const onReset = () => {
    reset({ userAccountCode: '', fromDate: '', toDate: '' });
    setCriteria(null);
  };

  const columns: GridColDef<UsageListItem>[] = useMemo(
    () => [
      { field: 'categoryCode', headerName: t('forms.usage.category'), flex: 1, minWidth: 160 },
      { field: 'subCategoryCode', headerName: t('forms.usage.subCategory'), flex: 1, minWidth: 160 },
      {
        field: 'dateEvent',
        headerName: t('forms.usage.fromDate'),
        valueFormatter: ({ value }) => {
          if (!value) {
            return '—';
          }
          const parsed = new Date(value);
          return Number.isNaN(parsed.getTime()) ? '—' : format(parsed, 'yyyy-MM-dd HH:mm');
        },
        minWidth: 200,
        flex: 1.1,
      },
      { field: 'code', headerName: t('forms.usage.code'), flex: 1, minWidth: 160 },
      { field: 'description', headerName: t('forms.usage.description'), flex: 1.4, minWidth: 220 },
      { field: 'unityDescription', headerName: t('forms.usage.unityDescription'), flex: 1, minWidth: 140 },
      { field: 'quantity', headerName: t('forms.usage.quantity'), flex: 0.6, minWidth: 120 },
      {
        field: 'unitAmountWithoutTax',
        headerName: t('forms.usage.unitAmountWithoutTax'),
        flex: 0.8,
        minWidth: 160,
      },
      {
        field: 'amountWithoutTax',
        headerName: t('forms.usage.amountWithoutTax'),
        flex: 0.8,
        minWidth: 160,
      },
    ],
    [t],
  );

  const rows = (usageQuery.data ?? []).map((item) => ({ ...item, id: item.id }));

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">{t('navigation.usage')}</Typography>
          {versionQuery.data ? (
            <Typography variant="body2" color="text.secondary">
              {t('forms.usage.version', { version: versionQuery.data })}
            </Typography>
          ) : null}
        </Box>
        <Button variant="outlined" startIcon={<RefreshIcon />} onClick={() => usageQuery.refetch()} disabled={!criteria}>
          {t('actions.refresh')}
        </Button>
      </Stack>

      <Card component="form" onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ xs: 'stretch', md: 'flex-end' }}>
            <Controller
              control={control}
              name="userAccountCode"
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  label={t('forms.usage.userAccountCode')}
                  error={Boolean(errors.userAccountCode)}
                  helperText={errors.userAccountCode ? t(errors.userAccountCode.message ?? 'forms.required') : undefined}
                />
              )}
            />
            <Controller
              control={control}
              name="fromDate"
              render={({ field }) => (
                <TextField {...field} type="datetime-local" label={t('forms.usage.fromDate')} InputLabelProps={{ shrink: true }} />
              )}
            />
            <Controller
              control={control}
              name="toDate"
              render={({ field }) => (
                <TextField {...field} type="datetime-local" label={t('forms.usage.toDate')} InputLabelProps={{ shrink: true }} />
              )}
            />
            <Stack direction="row" spacing={1}>
              <Button type="submit" variant="contained" startIcon={<SearchIcon />}>
                {t('actions.search')}
              </Button>
              <Button variant="text" onClick={onReset}>
                {t('actions.reset')}
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      {usageQuery.isError ? <Alert severity="error">{t('forms.error')}</Alert> : null}

      {usageQuery.isLoading && criteria ? (
        <Stack alignItems="center" spacing={2} py={4}>
          <CircularProgress size={32} />
          <Typography color="text.secondary">{t('table.loading')}</Typography>
        </Stack>
      ) : null}

      <Box sx={{ height: 520 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={usageQuery.isLoading && Boolean(criteria)}
          disableRowSelectionOnClick
          paginationMode="client"
          pageSizeOptions={[10, 20, 50]}
          localeText={{ noRowsLabel: criteria ? t('table.noResult') : t('table.startSearch') }}
        />
      </Box>

      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h6">{t('forms.usage.chargeAggregateDescription')}</Typography>
            {aggregateQuery.isError ? <Alert severity="error">{t('forms.error')}</Alert> : null}
            {!criteria ? (
              <Typography color="text.secondary">{t('table.startSearch')}</Typography>
            ) : aggregateQuery.isLoading ? (
              <Stack alignItems="center" spacing={2} py={2}>
                <CircularProgress size={24} />
                <Typography color="text.secondary">{t('table.loading')}</Typography>
              </Stack>
            ) : (
              <UsageAggregateTable rows={aggregateQuery.data ?? []} />
            )}
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

const UsageAggregateTable = ({ rows }: { rows: UsageChargeAggregateListItem[] }) => {
  const t = useTranslations();
  if (!rows.length) {
    return <Typography color="text.secondary">{t('table.empty')}</Typography>;
  }
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>{t('forms.usage.chargeAggregateDescription')}</TableCell>
          <TableCell>{t('forms.usage.chargeAggregateQuantity')}</TableCell>
          <TableCell>{t('forms.usage.chargeAggregateAmount')}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.description ?? '—'}</TableCell>
            <TableCell>{row.quantity ?? '—'}</TableCell>
            <TableCell>{row.amount ?? '—'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
