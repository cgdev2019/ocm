'use client';

import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { DataGrid, type GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import { useMemo, useState, type FormEvent } from 'react';
import {
  DEFAULT_CONTACT_CATEGORIES_PAGE_SIZE,
  useContactCategories,
  useContactCategoryMutations,
} from '@/features/contact-categories/api';
import type { ContactCategoryListItem } from '@/features/contact-categories/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const ContactCategoryList = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');
  const [confirmCode, setConfirmCode] = useState<string | null>(null);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_CONTACT_CATEGORIES_PAGE_SIZE,
  });

  const listQuery = useContactCategories({
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    search,
  });
  const { remove } = useContactCategoryMutations();

  const rows = (listQuery.data?.items ?? []).map((item) => ({ id: item.code, ...item }));
  const rowCount = listQuery.data?.paging.totalRecords ?? 0;

  const columns: GridColDef<ContactCategoryListItem>[] = useMemo(
    () => [
      { field: 'code', headerName: t('forms.contactCategory.code'), flex: 1, minWidth: 160 },
      { field: 'description', headerName: t('forms.contactCategory.description'), flex: 1.4, minWidth: 220 },
      {
        field: 'actions',
        type: 'actions',
        width: 120,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<EditIcon />}
            label={t('actions.edit')}
            onClick={() => router.push(`${pathname}/${encodeURIComponent(params.row.code)}/edit`)}
            showInMenu
          />,
          <GridActionsCellItem
            icon={<DeleteOutlineIcon />}
            label={t('actions.delete')}
            onClick={() => setConfirmCode(params.row.code)}
            disabled={remove.isPending}
            showInMenu
          />,
        ],
      },
    ],
    [pathname, remove.isPending, router, t],
  );

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
    setSearch(searchInput.trim());
  };

  const handleClearSearch = () => {
    setSearchInput('');
    setSearch('');
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  };

  const handleDelete = async () => {
    if (!confirmCode) {
      return;
    }
    await remove.mutateAsync(confirmCode);
    setConfirmCode(null);
    listQuery.refetch();
  };

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">{t('navigation.contactCategories')}</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton onClick={() => listQuery.refetch()} disabled={listQuery.isFetching}>
            <RefreshIcon />
          </IconButton>
          <Button variant="contained" startIcon={<AddIcon />} onClick={() => router.push(`${pathname}/new`)}>
            {t('actions.create')}
          </Button>
        </Stack>
      </Stack>

      <Card>
        <CardContent>
          <Stack
            component="form"
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            onSubmit={handleSearchSubmit}
            alignItems={{ xs: 'stretch', md: 'center' }}
          >
            <TextField
              fullWidth
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              label={t('actions.search')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton type="submit" aria-label={t('actions.search')}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" variant="outlined">
              {t('actions.search')}
            </Button>
            <Button variant="text" onClick={handleClearSearch} disabled={!search && !searchInput}>
              {t('actions.clear')}
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Box sx={{ height: 520 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={listQuery.isLoading || listQuery.isFetching}
          disableRowSelectionOnClick
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[10, 20, 50]}
          paginationMode="server"
          rowCount={rowCount}
          localeText={{ noRowsLabel: t('table.empty') }}
          onRowClick={(params) => router.push(`${pathname}/${encodeURIComponent(params.row.code)}`)}
        />
      </Box>

      <Dialog open={Boolean(confirmCode)} onClose={() => setConfirmCode(null)}>
        <DialogTitle>{t('actions.delete')}</DialogTitle>
        <DialogContent>
          <DialogContentText>{t('feedback.deleted')}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmCode(null)}>{t('actions.cancel')}</Button>
          <Button color="error" onClick={handleDelete} disabled={remove.isPending}>
            {t('actions.delete')}
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};
