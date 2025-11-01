'use client';

import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import { Box, Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import {
  useCounterTemplateListAll,
  useCounterTemplateVersion,
  useCounterTemplates,
} from '@/features/counter-templates/api';
import type { CounterTemplateListItem } from '@/features/counter-templates/types';

export const CounterTemplateList = ({ onSelect }: { onSelect: (code: string) => void }) => {
  const t = useTranslations();
  const [search, setSearch] = useState('');
  const versionQuery = useCounterTemplateVersion();
  const listAllQuery = useCounterTemplateListAll();
  const listQuery = useCounterTemplates({ query: search.trim() ? search.trim() : null });

  const rows = useMemo(() => {
    if (search.trim()) {
      return listQuery.data ?? [];
    }
    return listAllQuery.data ?? [];
  }, [listAllQuery.data, listQuery.data, search]);

  const columns: GridColDef<CounterTemplateListItem>[] = useMemo(
    () => [
      { field: 'code', headerName: t('forms.counterTemplate.code'), flex: 1.2, minWidth: 200 },
      { field: 'description', headerName: t('forms.counterTemplate.description'), flex: 1.4, minWidth: 220 },
      { field: 'type', headerName: t('forms.counterTemplate.type'), flex: 0.8, minWidth: 150 },
      { field: 'counterLevel', headerName: t('forms.counterTemplate.counterLevel'), flex: 0.8, minWidth: 150 },
      { field: 'unity', headerName: t('forms.counterTemplate.unity'), flex: 0.8, minWidth: 140 },
    ],
    [t],
  );

  const isLoading = listAllQuery.isLoading || listQuery.isLoading;
  const isFetching = listAllQuery.isFetching || listQuery.isFetching;

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">{t('navigation.counterTemplates')}</Typography>
          {versionQuery.data ? (
            <Typography variant="body2" color="text.secondary">
              {t('forms.counterTemplate.version', { version: versionQuery.data })}
            </Typography>
          ) : null}
        </Box>
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={() => {
            listAllQuery.refetch();
            listQuery.refetch();
          }}
        >
          {t('actions.refresh')}
        </Button>
      </Stack>

      <Card>
        <CardContent>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ sm: 'center' }}>
            <TextField
              fullWidth
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              label={t('actions.search')}
            />
            <Button
              variant="contained"
              startIcon={<SearchIcon />}
              onClick={() => listQuery.refetch()}
              disabled={isFetching}
            >
              {t('actions.search')}
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Box sx={{ height: 400 }}>
        <DataGrid
          rows={rows.map((item) => ({ id: item.code, ...item }))}
          columns={columns}
          loading={isLoading || isFetching}
          disableRowSelectionOnClick
          localeText={{ noRowsLabel: search.trim() ? t('table.startSearch') : t('table.noData') }}
          onRowClick={(params) => onSelect(params.row.code)}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[10, 25, 50]}
        />
      </Box>
    </Stack>
  );
};
