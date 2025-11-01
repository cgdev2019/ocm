'use client';

import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import { Box, Button, Card, CardContent, FormControlLabel, Stack, Switch, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import { useChannelsAndSegmentsLists, useChannelsAndSegmentsVersion } from '@/features/channels-and-segments/api';
import type { ChannelListItem, SegmentListItem } from '@/features/channels-and-segments/types';

export const ChannelsAndSegmentsDashboard = () => {
  const t = useTranslations();
  const [activeOnly, setActiveOnly] = useState(false);

  const filters = useMemo(() => ({ active: activeOnly ? true : null }), [activeOnly]);
  const query = useChannelsAndSegmentsLists(filters);
  const versionQuery = useChannelsAndSegmentsVersion();

  const channelColumns: GridColDef<ChannelListItem>[] = useMemo(
    () => [
      { field: 'code', headerName: t('forms.channelsAndSegments.channelCode'), flex: 1.1, minWidth: 160 },
      {
        field: 'description',
        headerName: t('forms.channelsAndSegments.channelDescription'),
        flex: 1.5,
        minWidth: 220,
      },
      {
        field: 'disabled',
        headerName: t('forms.channelsAndSegments.channelDisabled'),
        flex: 0.6,
        minWidth: 140,
        valueFormatter: ({ value }) => (value ? t('common.yes') : t('common.no')),
      },
    ],
    [t],
  );

  const segmentColumns: GridColDef<SegmentListItem>[] = useMemo(
    () => [
      { field: 'code', headerName: t('forms.channelsAndSegments.segmentCode'), flex: 1.1, minWidth: 160 },
      {
        field: 'description',
        headerName: t('forms.channelsAndSegments.segmentDescription'),
        flex: 1.5,
        minWidth: 220,
      },
      {
        field: 'active',
        headerName: t('forms.channelsAndSegments.segmentActive'),
        flex: 0.6,
        minWidth: 140,
        valueFormatter: ({ value }) => (value ? t('common.yes') : t('common.no')),
      },
    ],
    [t],
  );

  return (
    <Stack spacing={3} component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">{t('navigation.channelsAndSegments')}</Typography>
          {versionQuery.data ? (
            <Typography variant="body2" color="text.secondary">
              {t('forms.channelsAndSegments.version', { version: versionQuery.data })}
            </Typography>
          ) : null}
        </Box>
        <Button variant="outlined" startIcon={<RefreshIcon />} onClick={() => query.refetch()}>
          {t('actions.refresh')}
        </Button>
      </Stack>

      <Card>
        <CardContent>
          <FormControlLabel
            control={
              <Switch
                checked={activeOnly}
                onChange={(event) => setActiveOnly(event.target.checked)}
                color="primary"
              />
            }
            label={t('forms.channelsAndSegments.onlyActive')}
          />
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {t('forms.channelsAndSegments.channelsTitle')}
              </Typography>
              <Box sx={{ height: 360 }}>
                <DataGrid
                  rows={(query.channels ?? []).map((item) => ({ id: item.code, ...item }))}
                  columns={channelColumns}
                  loading={query.isLoading || query.isFetching}
                  disableRowSelectionOnClick
                  localeText={{ noRowsLabel: t('table.noData') }}
                  initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
                  pageSizeOptions={[10, 25, 50]}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {t('forms.channelsAndSegments.segmentsTitle')}
              </Typography>
              <Box sx={{ height: 360 }}>
                <DataGrid
                  rows={(query.segments ?? []).map((item) => ({ id: item.code, ...item }))}
                  columns={segmentColumns}
                  loading={query.isLoading || query.isFetching}
                  disableRowSelectionOnClick
                  localeText={{ noRowsLabel: t('table.noData') }}
                  initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
                  pageSizeOptions={[10, 25, 50]}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};
