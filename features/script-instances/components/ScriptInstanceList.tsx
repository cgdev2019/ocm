'use client';

import { FormEvent, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import { DEFAULT_SCRIPT_INSTANCES_PAGE_SIZE, useScriptInstances } from '@/features/script-instances/api';
import type { ScriptInstanceListItem } from '@/features/script-instances/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const ScriptInstanceList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_SCRIPT_INSTANCES_PAGE_SIZE,
  });
  const [searchCode, setSearchCode] = useState('');
  const [submittedCode, setSubmittedCode] = useState<string | undefined>();
  const { data, isLoading, isFetching, refetch } = useScriptInstances(submittedCode);
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const columns: GridColDef<ScriptInstanceListItem>[] = [
    { field: 'code', headerName: t('forms.scriptInstance.code'), flex: 1, minWidth: 160 },
    { field: 'description', headerName: t('forms.scriptInstance.description'), flex: 1.2, minWidth: 200 },
    { field: 'type', headerName: t('forms.scriptInstance.type'), flex: 0.6, minWidth: 140 },
    {
      field: 'disabled',
      headerName: t('forms.scriptInstance.disabled'),
      flex: 0.6,
      minWidth: 120,
      valueFormatter: ({ value }) => (value ? t('common.yes') : t('common.no')),
    },
  ];

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedCode(searchCode.trim() || undefined);
    if (searchCode.trim()) {
      refetch();
    }
  };

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t('navigation.scriptInstances')}</Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => router.push(`${pathname}/new`)}>
          {t('actions.create')}
        </Button>
      </Stack>
      <Stack component="form" direction={{ xs: 'column', sm: 'row' }} spacing={2} onSubmit={handleSearch}>
        <TextField
          value={searchCode}
          onChange={(event) => setSearchCode(event.target.value)}
          label={t('forms.scriptInstance.searchPlaceholder')}
          fullWidth
        />
        <Button type="submit" variant="outlined" startIcon={<SearchIcon />}>
          {t('actions.search')}
        </Button>
      </Stack>
      <Box sx={{ height: 520 }}>
        <DataGrid
          rows={(data ?? []).map((item) => ({ id: item.code, ...item }))}
          columns={columns}
          loading={isLoading || isFetching}
          disableRowSelectionOnClick
          paginationMode="client"
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[10, 20, 50]}
          localeText={{ noRowsLabel: submittedCode ? t('table.noResult') : t('table.startSearch') }}
          onRowClick={(params) => router.push(`${pathname}/${params.id}`)}
        />
      </Box>
    </Stack>
  );
};
