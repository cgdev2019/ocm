'use client';

import { useState } from 'react';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslations } from 'next-intl';
import { DEFAULT_COUNTRIES_PAGE_SIZE, useCountries } from '@/features/countries/api';
import type { CountryListItem } from '@/features/countries/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const CountryList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_COUNTRIES_PAGE_SIZE,
  });
  const { data, isLoading, isFetching } = useCountries();
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const columns: GridColDef<CountryListItem>[] = [
    { field: 'countryCode', headerName: t('forms.country.countryCode'), flex: 1, minWidth: 150 },
    { field: 'name', headerName: t('forms.country.name'), flex: 1.2, minWidth: 220 },
    { field: 'currencyCode', headerName: t('forms.country.currencyCode'), flex: 0.8, minWidth: 150 },
    { field: 'languageCode', headerName: t('forms.country.languageCode'), flex: 0.8, minWidth: 150 },
    {
      field: 'disabled',
      headerName: t('forms.country.disabled'),
      flex: 0.6,
      minWidth: 120,
      renderCell: (params) =>
        params.value ? <Chip label={t('common.yes')} color="default" size="small" /> : <Chip label={t('common.no')} size="small" />,
    },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t('navigation.countries')}</Typography>
        <Button
          onClick={() => router.push(`${pathname}/new`)}
          variant="contained"
          startIcon={<AddIcon />}
        >
          {t('actions.create')}
        </Button>
      </Stack>
      <Box sx={{ height: 520 }}>
        <DataGrid
          rows={(data ?? []).map((item) => ({ id: item.countryCode, ...item }))}
          columns={columns}
          loading={isLoading || isFetching}
          disableRowSelectionOnClick
          onRowClick={(params) => router.push(`${pathname}/${params.id}`)}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[10, 20, 50]}
          paginationMode="client"
          localeText={{ noRowsLabel: t('table.empty') }}
        />
      </Box>
    </Stack>
  );
};
