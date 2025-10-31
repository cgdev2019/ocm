'use client';

import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/ManageSearchOutlined';
import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { format, parseISO } from 'date-fns';
import { useTranslations } from 'next-intl';
import { useCallback, useMemo, useState } from 'react';
import { DEFAULT_ACCESS_PAGE_SIZE, useAccesses, useAccessVersion } from '@/features/access/api';
import type { AccessListItem } from '@/features/access/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const AccessList = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const versionQuery = useAccessVersion();
  const [filter, setFilter] = useState('');
  const [appliedFilter, setAppliedFilter] = useState<string | null>(null);
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: DEFAULT_ACCESS_PAGE_SIZE });

  const accessQuery = useAccesses(appliedFilter ? { subscriptionCode: appliedFilter } : undefined);

  const formatDateTime = useCallback((value?: string) => {
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
  }, []);

  const columns: GridColDef<AccessListItem>[] = useMemo(
    () => [
      { field: 'code', headerName: t('forms.access.code'), flex: 1, minWidth: 160 },
      { field: 'subscription', headerName: t('forms.access.subscription'), flex: 1.2, minWidth: 200 },
      {
        field: 'startDate',
        headerName: t('forms.access.startDate'),
        flex: 1,
        minWidth: 160,
        valueFormatter: ({ value }) => formatDateTime(value),
      },
      {
        field: 'endDate',
        headerName: t('forms.access.endDate'),
        flex: 1,
        minWidth: 160,
        valueFormatter: ({ value }) => formatDateTime(value),
      },
      {
        field: 'disabled',
        headerName: t('forms.access.disabled'),
        flex: 0.6,
        minWidth: 120,
        valueFormatter: ({ value }) => (value ? t('common.yes') : t('common.no')),
      },
    ],
    [t, formatDateTime],
  );

  const rows = (accessQuery.data ?? []).map((item) => ({
    id: `${item.subscription}::${item.code}::${item.startDate ?? 'start'}`,
    ...item,
  }));

  const handleSearch = () => {
    const trimmed = filter.trim();
    setAppliedFilter(trimmed ? trimmed : null);
  };

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">{t('navigation.accesses')}</Typography>
          {versionQuery.data ? (
            <Typography variant="body2" color="text.secondary">
              {t('forms.access.version', { version: versionQuery.data })}
            </Typography>
          ) : null}
        </Box>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" startIcon={<RefreshIcon />} onClick={() => accessQuery.refetch()}>
            {t('actions.refresh')}
          </Button>
          <Button variant="contained" startIcon={<AddIcon />} onClick={() => router.push(`${pathname}/new`)}>
            {t('actions.create')}
          </Button>
        </Stack>
      </Stack>

      <Card>
        <CardContent>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ xs: 'stretch', md: 'flex-end' }}>
            <TextField
              fullWidth
              label={t('forms.access.subscription')}
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
            />
            <Stack direction="row" spacing={1}>
              <Button variant="contained" startIcon={<SearchIcon />} onClick={handleSearch}>
                {t('actions.search')}
              </Button>
              <Button
                variant="text"
                onClick={() => {
                  setFilter('');
                  setAppliedFilter(null);
                }}
              >
                {t('actions.reset')}
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Box sx={{ height: 520 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={accessQuery.isLoading || accessQuery.isFetching}
          disableRowSelectionOnClick
          paginationMode="client"
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[10, 20, 50]}
          localeText={{ noRowsLabel: t('table.empty') }}
          onRowClick={(params) =>
            router.push(
              `${pathname}/${encodeURIComponent(params.row.subscription)}/${encodeURIComponent(params.row.code)}`,
            )
          }
        />
      </Box>
    </Stack>
  );
};
