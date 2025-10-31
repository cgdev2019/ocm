'use client';

import { useState } from 'react';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Box, Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslations } from 'next-intl';
import { DEFAULT_COUNTRY_ISO_PAGE_SIZE, useCountryIsos } from '@/features/country-iso/api';
import type { CountryIsoListItem } from '@/features/country-iso/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const CountryIsoList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_COUNTRY_ISO_PAGE_SIZE,
  });
  const { data, isLoading, isFetching } = useCountryIsos();
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const columns: GridColDef<CountryIsoListItem>[] = [
    { field: 'countryCode', headerName: t('forms.countryIso.countryCode'), flex: 1, minWidth: 150 },
    { field: 'description', headerName: t('forms.countryIso.description'), flex: 1.2, minWidth: 220 },
    { field: 'currencyCode', headerName: t('forms.countryIso.currencyCode'), flex: 0.8, minWidth: 150 },
    { field: 'languageCode', headerName: t('forms.countryIso.languageCode'), flex: 0.8, minWidth: 150 },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t('navigation.countryIso')}</Typography>
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
