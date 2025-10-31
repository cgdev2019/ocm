'use client';

import AddIcon from '@mui/icons-material/Add';
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
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import {
  DEFAULT_PROVIDER_CONTACTS_PAGE_SIZE,
  useProviderContacts,
  useProviderContactVersion,
} from '@/features/provider-contact/api';
import type { ProviderContactListItem } from '@/features/provider-contact/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const ProviderContactList = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const versionQuery = useProviderContactVersion();
  const [search, setSearch] = useState('');
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_PROVIDER_CONTACTS_PAGE_SIZE,
  });

  const listQuery = useProviderContacts();

  const rows = useMemo(() => {
    const items = listQuery.data ?? [];
    if (!search.trim()) {
      return items;
    }
    const lower = search.trim().toLowerCase();
    return items.filter((item) =>
      [item.code, item.firstName, item.lastName, item.email]
        .filter(Boolean)
        .some((value) => value?.toLowerCase().includes(lower)),
    );
  }, [listQuery.data, search]);

  const columns: GridColDef<ProviderContactListItem>[] = useMemo(
    () => [
      { field: 'code', headerName: t('forms.providerContact.code'), flex: 1, minWidth: 160 },
      { field: 'description', headerName: t('forms.providerContact.description'), flex: 1.2, minWidth: 220 },
      { field: 'firstName', headerName: t('forms.providerContact.firstName'), flex: 1, minWidth: 160 },
      { field: 'lastName', headerName: t('forms.providerContact.lastName'), flex: 1, minWidth: 160 },
      { field: 'email', headerName: t('forms.providerContact.email'), flex: 1.2, minWidth: 200 },
      { field: 'phone', headerName: t('forms.providerContact.phone'), flex: 1, minWidth: 160 },
    ],
    [t],
  );

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">{t('navigation.providerContacts')}</Typography>
          {versionQuery.data ? (
            <Typography variant="body2" color="text.secondary">
              {t('forms.providerContact.version', { version: versionQuery.data })}
            </Typography>
          ) : null}
        </Box>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" startIcon={<RefreshIcon />} onClick={() => listQuery.refetch()}>
            {t('actions.refresh')}
          </Button>
          <Button variant="contained" startIcon={<AddIcon />} onClick={() => router.push(`${pathname}/new`)}>
            {t('actions.create')}
          </Button>
        </Stack>
      </Stack>

      <Card>
        <CardContent>
          <TextField
            fullWidth
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            label={t('actions.search')}
          />
        </CardContent>
      </Card>

      <Box sx={{ height: 520 }}>
        <DataGrid
          rows={rows.map((item) => ({ id: item.code, ...item }))}
          columns={columns}
          loading={listQuery.isLoading || listQuery.isFetching}
          disableRowSelectionOnClick
          paginationMode="client"
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[10, 20, 50]}
          localeText={{ noRowsLabel: t('table.empty') }}
          onRowClick={(params) => router.push(`${pathname}/${encodeURIComponent(params.row.code)}`)}
        />
      </Box>
    </Stack>
  );
};
