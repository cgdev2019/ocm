'use client';

import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import { Box, Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import { useBusinessOfferModels, useBusinessOfferModelVersion } from '@/features/business-offer-models/api';
import type { BusinessOfferModelListItem } from '@/features/business-offer-models/types';

export const BusinessOfferModelList = ({ onSelect }: { onSelect: (code: string) => void }) => {
  const t = useTranslations();
  const [search, setSearch] = useState('');
  const versionQuery = useBusinessOfferModelVersion();
  const listQuery = useBusinessOfferModels({ query: search.trim() ? search.trim() : null });

  const rows = useMemo(() => listQuery.data ?? [], [listQuery.data]);

  const columns: GridColDef<BusinessOfferModelListItem>[] = useMemo(
    () => [
      { field: 'code', headerName: t('forms.businessOfferModel.code'), flex: 1.2, minWidth: 200 },
      { field: 'description', headerName: t('forms.businessOfferModel.description'), flex: 1.5, minWidth: 220 },
      { field: 'license', headerName: t('forms.businessOfferModel.license'), flex: 0.8, minWidth: 160 },
      {
        field: 'disabled',
        headerName: t('forms.businessOfferModel.disabled'),
        flex: 0.6,
        minWidth: 120,
        valueFormatter: ({ value }) => (value ? t('common.yes') : t('common.no')),
      },
    ],
    [t],
  );

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">{t('navigation.businessOfferModels')}</Typography>
          {versionQuery.data ? (
            <Typography variant="body2" color="text.secondary">
              {t('forms.businessOfferModel.version', { version: versionQuery.data })}
            </Typography>
          ) : null}
        </Box>
        <Button variant="outlined" startIcon={<RefreshIcon />} onClick={() => listQuery.refetch()}>
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
              disabled={listQuery.isFetching}
            >
              {t('actions.search')}
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Box sx={{ height: 420 }}>
        <DataGrid
          rows={rows.map((item) => ({ id: item.code, ...item }))}
          columns={columns}
          loading={listQuery.isLoading || listQuery.isFetching}
          disableRowSelectionOnClick
          localeText={{ noRowsLabel: t('table.empty') }}
          onRowClick={(params) => onSelect(params.row.code)}
        />
      </Box>
    </Stack>
  );
};
