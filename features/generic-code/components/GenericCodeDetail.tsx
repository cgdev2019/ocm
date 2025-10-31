'use client';

import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import EditIcon from '@mui/icons-material/EditOutlined';
import BoltIcon from '@mui/icons-material/BoltOutlined';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Snackbar,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useGenericCode, useGenericCodeMutations, useGenericCodeVersion } from '@/features/generic-code/api';
import type { GenericCodeFormValues } from '@/features/generic-code/types';
import { useRouter } from '@/lib/i18n/navigation';

export const GenericCodeDetail = ({ entityClass }: { entityClass: string }) => {
  const { data, isLoading, isError, refetch } = useGenericCode(entityClass);
  const versionQuery = useGenericCodeVersion();
  const { generateCode } = useGenericCodeMutations();
  const [generatedValue, setGeneratedValue] = useState<string | null>(null);
  const [openSnack, setOpenSnack] = useState(false);
  const t = useTranslations();
  const router = useRouter();

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

  const handleGenerate = async (values: GenericCodeFormValues) => {
    const response = await generateCode.mutateAsync(values);
    setGeneratedValue(response.generatedCode ?? null);
    setOpenSnack(true);
  };

  const sequence = data.sequence;

  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">{data.entityClass}</Typography>
          {versionQuery.data ? (
            <Typography variant="body2" color="text.secondary">
              {t('forms.genericCode.version', { version: versionQuery.data })}
            </Typography>
          ) : null}
        </Box>
        <Stack direction="row" spacing={1}>
          <Button startIcon={<RefreshIcon />} variant="outlined" onClick={() => refetch()}>
            {t('actions.refresh')}
          </Button>
          <Button startIcon={<EditIcon />} variant="contained" onClick={() => router.push('./edit')}>
            {t('actions.edit')}
          </Button>
          <Button
            startIcon={<BoltIcon />}
            onClick={() => handleGenerate(data)}
            disabled={generateCode.isPending}
          >
            {t('actions.generateCode')}
          </Button>
        </Stack>
      </Stack>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Stack spacing={1}>
                <Row label={t('forms.genericCode.entityClass')} value={data.entityClass} />
                <Row label={t('forms.genericCode.formatEL')} value={data.formatEL} />
                <Row label={t('forms.genericCode.prefixOverride')} value={data.prefixOverride} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {t('forms.genericCode.sequenceSection')}
              </Typography>
              <Stack spacing={1}>
                <Row label={t('forms.sequence.invoiceSequenceCode')} value={sequence?.invoiceSequenceCode} />
                <Row label={t('forms.sequence.sequenceType')} value={sequence?.sequenceType} />
                <Row label={t('forms.sequence.sequencePattern')} value={sequence?.sequencePattern} />
                <Row label={t('forms.sequence.sequenceSize')} value={sequence?.sequenceSize?.toString()} />
                <Row label={t('forms.sequence.currentInvoiceNb')} value={sequence?.currentInvoiceNb?.toString()} />
                <Row label={t('forms.sequence.prefixEL')} value={sequence?.prefixEL} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Snackbar
        open={openSnack}
        autoHideDuration={4000}
        onClose={() => setOpenSnack(false)}
        message={
          generatedValue
            ? t('forms.genericCode.generatedCode', { code: generatedValue })
            : t('feedback.error')
        }
      />
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
