'use client';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import {
  Alert,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useTitle, useTitleMutations } from '@/features/titles/api';
import { useRouter } from '@/lib/i18n/navigation';

export const TitleDetail = ({ code }: { code: string }) => {
  const { data, isLoading, isError } = useTitle(code);
  const { remove } = useTitleMutations();
  const t = useTranslations();
  const router = useRouter();
  const [confirmOpen, setConfirmOpen] = useState(false);

  if (isLoading) {
    return (
      <Stack spacing={2} alignItems="center" py={6}>
        <CircularProgress size={32} />
        <Typography variant="body2" color="text.secondary">
          {t('table.loading')}
        </Typography>
      </Stack>
    );
  }

  if (isError || !data) {
    return <Alert severity="error">{t('forms.error')}</Alert>;
  }

  const handleDelete = async () => {
    await remove.mutateAsync(code);
    router.replace('../');
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{data.code}</Typography>
        <Stack direction="row" spacing={1}>
          <Button startIcon={<EditIcon />} variant="outlined" onClick={() => router.push('./edit')}>
            {t('actions.edit')}
          </Button>
          <Button
            startIcon={<DeleteOutlineIcon />}
            color="error"
            onClick={() => setConfirmOpen(true)}
            disabled={remove.isPending}
          >
            {t('actions.delete')}
          </Button>
        </Stack>
      </Stack>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Stack spacing={1.5}>
                <Row label={t('forms.title.description')} value={data.description} />
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography width={200} color="text.secondary">
                    {t('forms.title.isCompany')}
                  </Typography>
                  <Chip
                    label={data.isCompany ? t('common.yes') : t('common.no')}
                    color={data.isCompany ? 'primary' : 'default'}
                    variant={data.isCompany ? 'filled' : 'outlined'}
                    size="small"
                  />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        {data.languageDescriptions && data.languageDescriptions.length > 0 ? (
          <Grid size={{ xs: 12, md: 6 }}>
            <Card>
              <CardContent>
                <Stack spacing={1.5}>
                  <Typography variant="h6">{t('forms.title.languageDescriptions')}</Typography>
                  {data.languageDescriptions?.map((item) => (
                    <Stack key={`${item.languageCode ?? ''}-${item.description ?? ''}`} spacing={0.5}>
                      <Typography variant="subtitle2">{item.languageCode ?? '—'}</Typography>
                      <Typography color="text.secondary">{item.description ?? '—'}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ) : null}
      </Grid>
      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>{t('actions.delete')}</DialogTitle>
        <DialogContent>
          <DialogContentText>{t('forms.confirmDeletion')}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)}>{t('actions.cancel')}</Button>
          <Button color="error" onClick={handleDelete} disabled={remove.isPending}>
            {t('actions.delete')}
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

const Row = ({ label, value }: { label: string; value?: string | null }) => (
  <Stack direction="row" spacing={1}>
    <Typography width={200} color="text.secondary">
      {label}
    </Typography>
    <Typography>{value ?? '—'}</Typography>
  </Stack>
);
