'use client';

import CloudUploadIcon from '@mui/icons-material/CloudUploadOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFileOutlined';
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
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useMassImportUpload } from '@/features/mass-import/api';
import type { ImportFileTypeDto } from '@/features/mass-import/types';

const readFileAsBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        const base64 = result.split(',')[1] ?? result;
        resolve(base64);
      } else {
        reject(new Error('Unable to read file'));
      }
    };
    reader.onerror = () => reject(new Error('Unable to read file'));
    reader.readAsDataURL(file);
  });

export const MassImportUpload = () => {
  const t = useTranslations();
  const {
    upload: { mutateAsync, isPending, isError, reset },
  } = useMassImportUpload();
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ImportFileTypeDto | null>(null);
  const [snackOpen, setSnackOpen] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files?.[0] ?? null;
    setFile(selected);
    setResult(null);
    setError(null);
    reset();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      setError(t('forms.required'));
      return;
    }

    try {
      const base64 = await readFileAsBase64(file);
      const payload = await mutateAsync({ fileName: file.name, base64Data: base64 });
      setResult(payload);
      setSnackOpen(true);
      setError(null);
    } catch (err) {
      setResult(null);
      setSnackOpen(false);
      setError(err instanceof Error ? err.message : t('forms.error'));
    }
  };

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit}>
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h5">{t('massImport.title')}</Typography>
            <Typography color="text.secondary">{t('massImport.description')}</Typography>
            <Button
              variant="outlined"
              component="label"
              startIcon={<CloudUploadIcon />}
              disabled={isPending}
            >
              {file ? t('massImport.changeFile') : t('massImport.selectFile')}
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            {file ? (
              <Stack direction="row" spacing={1} alignItems="center">
                <InsertDriveFileIcon fontSize="small" />
                <Typography>{file.name}</Typography>
              </Stack>
            ) : null}
            {error ? <Alert severity="error">{error}</Alert> : null}
            {isError ? <Alert severity="error">{t('massImport.uploadError')}</Alert> : null}
            <Box>
              <Button type="submit" variant="contained" startIcon={<CloudUploadIcon />} disabled={isPending}>
                {isPending ? t('massImport.uploading') : t('massImport.upload')}
              </Button>
            </Box>
            {isPending ? (
              <Stack direction="row" spacing={1} alignItems="center">
                <CircularProgress size={20} />
                <Typography variant="body2" color="text.secondary">
                  {t('massImport.processing')}
                </Typography>
              </Stack>
            ) : null}
          </Stack>
        </CardContent>
      </Card>
      {result ? (
        <Card>
          <CardContent>
            <Stack spacing={1.5}>
              <Typography variant="h6">{t('massImport.resultTitle')}</Typography>
              <Row label={t('massImport.fileName')} value={result.fileName} />
              <Row label={t('massImport.fileType')} value={result.fileType} />
            </Stack>
          </CardContent>
        </Card>
      ) : null}
      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
        message={t('feedback.saved')}
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
