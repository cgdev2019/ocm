'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdfOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { usePdfInvoiceSearch, usePdfInvoiceVersion } from '@/features/pdf-invoices/api';
import { pdfInvoiceSearchSchema, type PdfInvoiceSearchSchema } from '@/features/pdf-invoices/schema';

const createPdfUrl = (content: string) => {
  const byteCharacters = atob(content);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i += 1) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: 'application/pdf' });
  return URL.createObjectURL(blob);
};

export const PdfInvoiceSearch = () => {
  const t = useTranslations();
  const search = usePdfInvoiceSearch();
  const versionQuery = usePdfInvoiceVersion();

  const { control, handleSubmit, reset } = useForm<PdfInvoiceSearchSchema>({
    resolver: zodResolver(pdfInvoiceSearchSchema),
    defaultValues: {
      invoiceNumber: '',
      customerAccountCode: '',
    },
  });

  const onSubmit = async (values: PdfInvoiceSearchSchema) => {
    await search.mutateAsync(values);
  };

  const results = search.data?.pdfInvoice ?? [];
  const actionMessage = search.data?.actionMessage;

  const emptyState = useMemo(
    () => !search.isPending && results.length === 0,
    [results.length, search.isPending],
  );

  return (
    <Stack spacing={3} component="form" onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="invoiceNumber"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label={t('forms.pdfInvoice.invoiceNumber')}
                    placeholder="2024-INV-0001"
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                name="customerAccountCode"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label={t('forms.pdfInvoice.customerAccountCode')}
                    placeholder="CUST-001"
                  />
                )}
              />
            </Grid>
          </Grid>
          <Box mt={3} display="flex" gap={2}>
            <Button type="submit" variant="contained" startIcon={<SearchIcon />} disabled={search.isPending}>
              {t('actions.search')}
            </Button>
            <Button
              type="button"
              variant="outlined"
              onClick={() => {
                reset();
                search.reset();
              }}
              disabled={search.isPending}
            >
              {t('actions.reset')}
            </Button>
          </Box>
        </CardContent>
      </Card>
      {search.isPending ? (
        <Stack spacing={2} alignItems="center" py={4}>
          <CircularProgress size={32} />
          <Typography variant="body2" color="text.secondary">
            {t('table.loading')}
          </Typography>
        </Stack>
      ) : null}
      {search.isError ? <Alert severity="error">{t('forms.error')}</Alert> : null}
      {actionMessage ? (
        <Alert severity="info">{actionMessage}</Alert>
      ) : null}
      {emptyState ? <Alert severity="warning">{t('forms.pdfInvoice.empty')}</Alert> : null}
      {results.length > 0 ? (
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h6">{t('forms.pdfInvoice.resultsTitle', { count: results.length })}</Typography>
              <List>
                {results.map((content, index) => (
                  <ListItem key={index} secondaryAction={
                    <Button
                      variant="outlined"
                      onClick={() => {
                        const url = createPdfUrl(content);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = `invoice-${index + 1}.pdf`;
                        document.body.appendChild(link);
                        link.click();
                        link.remove();
                        URL.revokeObjectURL(url);
                      }}
                    >
                      {t('forms.pdfInvoice.download')}
                    </Button>
                  }>
                    <ListItemIcon>
                      <PictureAsPdfIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={t('forms.pdfInvoice.itemLabel', { index: index + 1 })} />
                  </ListItem>
                ))}
              </List>
            </Stack>
          </CardContent>
        </Card>
      ) : null}
      {versionQuery.data ? (
        <Typography variant="body2" color="text.secondary" textAlign="right">
          {t('forms.pdfInvoice.version', { version: versionQuery.data })}
        </Typography>
      ) : null}
    </Stack>
  );
};
