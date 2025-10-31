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
import { useOccTemplate, useOccTemplateMutations } from '@/features/occ-templates/api';
import { useRouter } from '@/lib/i18n/navigation';

export const OccTemplateDetail = ({ code }: { code: string }) => {
  const { data, isLoading, isError } = useOccTemplate(code);
  const { remove } = useOccTemplateMutations();
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
                <Row label={t('forms.occTemplate.description')} value={data.description} />
                <Row label={t('forms.occTemplate.accountingCode')} value={data.accountingCode} />
                <Row label={t('forms.occTemplate.accountCode')} value={data.accountCode} />
                <Row label={t('forms.occTemplate.accountCodeClientSide')} value={data.accountCodeClientSide} />
                <Row label={t('forms.occTemplate.journalCode')} value={data.journalCode} />
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography width={220} color="text.secondary">
                    {t('forms.occTemplate.occCategory')}
                  </Typography>
                  <Chip
                    size="small"
                    color={data.occCategory === 'DEBIT' ? 'primary' : 'default'}
                    label={t(`forms.occTemplate.categories.${data.occCategory.toLowerCase() as 'debit' | 'credit'}`)}
                  />
                </Stack>
                <Row label={t('forms.occTemplate.accountingSchemeCode')} value={data.accountingSchemeCode} />
                <Row label={t('forms.occTemplate.contractAccountingCode')} value={data.contractAccountingCode} />
                <Row label={t('forms.occTemplate.contraAccountingCode2')} value={data.contraAccountingCode2} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>{t('actions.delete')}</DialogTitle>
        <DialogContent>
          <DialogContentText>{t('forms.occTemplate.deleteConfirmation')}</DialogContentText>
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
    <Typography width={220} color="text.secondary">
      {label}
    </Typography>
    <Typography>{value ?? '—'}</Typography>
  </Stack>
);
