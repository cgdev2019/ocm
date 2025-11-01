'use client';

import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import { Box, Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import { useChargeTemplateVersion, useChargeTemplates } from '@/features/charge-templates/api';
import type { ChargeTemplateListItem } from '@/features/charge-templates/types';

export const ChargeTemplateList = ({ onSelect }: { onSelect: (code: string) => void }) => {
  const t = useTranslations();
  const [search, setSearch] = useState('');
  const versionQuery = useChargeTemplateVersion();
  const listQuery = useChargeTemplates({ query: search.trim() ? search.trim() : null });

  const rows = useMemo(() => listQuery.data ?? [], [listQuery.data]);

  const columns: GridColDef<ChargeTemplateListItem>[] = useMemo(
    () => [
      { field: 'code', headerName: t('forms.chargeTemplate.code'), flex: 1.2, minWidth: 200 },
      { field: 'description', headerName: t('forms.chargeTemplate.description'), flex: 1.4, minWidth: 220 },
      {
        field: 'invoiceSubCategory',
        headerName: t('forms.chargeTemplate.invoiceSubCategory'),
        flex: 1.2,
        minWidth: 200,
      },
      {
        field: 'status',
        headerName: t('forms.chargeTemplate.status'),
        flex: 0.8,
        minWidth: 150,
      },
    ],
    [t],
  );

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">{t('navigation.chargeTemplates')}</Typography>
          {versionQuery.data ? (
            <Typography variant="body2" color="text.secondary">
              {t('forms.chargeTemplate.version', { version: versionQuery.data })}
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

      <Box sx={{ height: 360 }}>
        <DataGrid
          rows={rows.map((item) => ({ id: item.code, ...item }))}
          columns={columns}
          loading={listQuery.isLoading || listQuery.isFetching}
          disableRowSelectionOnClick
          localeText={{ noRowsLabel: t('table.startSearch') }}
          onRowClick={(params) => onSelect(params.row.code)}
        />
      </Box>
    </Stack>
  );
};
