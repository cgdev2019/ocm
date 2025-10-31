'use client';

import { useState } from 'react';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Alert, Box, Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslations } from 'next-intl';
import { DEFAULT_CALENDARS_PAGE_SIZE, useCalendars } from '@/features/calendars/api';
import type { CalendarListItem } from '@/features/calendars/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';
import { ApiTimeoutError } from '@/lib/api/errors';

export const CalendarList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: DEFAULT_CALENDARS_PAGE_SIZE,
  });
  const { data, isLoading, isFetching, isError, refetch, error } = useCalendars();
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const errorMessage = error instanceof ApiTimeoutError
    ? t('feedback.timeout')
    : error instanceof Error
      ? error.message
      : t('feedback.error');

  const columns: GridColDef<CalendarListItem>[] = [
    { field: 'code', headerName: t('forms.calendar.code'), flex: 1, minWidth: 160 },
    { field: 'description', headerName: t('forms.calendar.description'), flex: 1.2, minWidth: 220 },
    { field: 'calendarType', headerName: t('forms.calendar.calendarType'), flex: 0.8, minWidth: 160 },
    {
      field: 'periodLength',
      headerName: t('forms.calendar.periodLength'),
      flex: 0.6,
      minWidth: 140,
    },
    { field: 'periodUnit', headerName: t('forms.calendar.periodUnit'), flex: 0.6, minWidth: 140 },
    { field: 'startDate', headerName: t('forms.calendar.startDate'), flex: 1, minWidth: 160 },
    { field: 'endDate', headerName: t('forms.calendar.endDate'), flex: 1, minWidth: 160 },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t('navigation.calendars')}</Typography>
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
          rows={(data ?? []).map((item) => ({ id: item.code, ...item }))}
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
      {isError ? (
        <Alert
          severity="error"
          action={
            <Button color="inherit" size="small" onClick={() => refetch()}>
              {t('actions.retry')}
            </Button>
          }
          sx={{ alignSelf: 'flex-start', width: 'fit-content' }}
        >
          {errorMessage}
        </Alert>
      ) : null}
    </Stack>
  );
};
