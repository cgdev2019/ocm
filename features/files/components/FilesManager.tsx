'use client';

import { ChangeEvent, useMemo, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import CloudUploadIcon from '@mui/icons-material/CloudUploadOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMoveOutlined';
import FolderIcon from '@mui/icons-material/FolderOutlined';
import RefreshIcon from '@mui/icons-material/RefreshOutlined';
import UploadFileIcon from '@mui/icons-material/UploadFileOutlined';
import ArchiveIcon from '@mui/icons-material/ArchiveOutlined';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import { Controller, useForm } from 'react-hook-form';
import {
  useAllFiles,
  useFiles,
  useFilesMutations,
  useFilesVersion,
} from '@/features/files/api';
import {
  base64UploadFormSchema,
  directoryFormSchema,
  fileOperationFormSchema,
  fileUploadFormSchema,
  type Base64UploadFormSchema,
  type DirectoryFormSchema,
  type FileOperationFormSchema,
  type FileUploadFormSchema,
} from '@/features/files/schema';
import type { FileListItem } from '@/features/files/types';

const readFileAsBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        const base64 = result.split(',').pop() ?? '';
        resolve(base64);
      } else {
        reject(new Error('Invalid file result'));
      }
    };
    reader.onerror = () => reject(reader.error ?? new Error('File read failed'));
    reader.readAsDataURL(file);
  });

const joinPath = (current: string | null, name: string) => {
  if (!current || current.length === 0) {
    return name;
  }
  return `${current.replace(/\/$/, '')}/${name}`;
};

const parentPath = (current: string | null) => {
  if (!current) {
    return null;
  }
  const segments = current.split('/').filter((segment) => segment.length > 0);
  segments.pop();
  return segments.length > 0 ? segments.join('/') : null;
};

export const FilesManager = () => {
  const t = useTranslations();
  const [currentDirectory, setCurrentDirectory] = useState<string | null>(null);
  const { data: files, isLoading, refetch } = useFiles(currentDirectory);
  const { data: allFiles } = useAllFiles();
  const { data: version } = useFilesVersion();
  const mutations = useFilesMutations();
  const [snackbar, setSnackbar] = useState<string | null>(null);

  const directoryForm = useForm<DirectoryFormSchema>({
    resolver: zodResolver(directoryFormSchema),
    defaultValues: { path: '' },
  });
  const removeDirectoryForm = useForm<DirectoryFormSchema>({
    resolver: zodResolver(directoryFormSchema),
    defaultValues: { path: '' },
  });
  const removeFileForm = useForm<FileOperationFormSchema>({
    resolver: zodResolver(fileOperationFormSchema),
    defaultValues: { path: '' },
  });
  const uploadForm = useForm<FileUploadFormSchema>({
    resolver: zodResolver(fileUploadFormSchema),
    defaultValues: { filename: '', fileFormat: '', fileData: undefined },
  });
  const base64Form = useForm<Base64UploadFormSchema>({
    resolver: zodResolver(base64UploadFormSchema),
    defaultValues: { filepath: '', content: '' },
  });
  const zippedForm = useForm<Base64UploadFormSchema>({
    resolver: zodResolver(base64UploadFormSchema),
    defaultValues: { filepath: '', content: '' },
  });
  const zipDirectoryForm = useForm<DirectoryFormSchema>({
    resolver: zodResolver(directoryFormSchema),
    defaultValues: { path: '' },
  });
  const zipFileForm = useForm<FileOperationFormSchema>({
    resolver: zodResolver(fileOperationFormSchema),
    defaultValues: { path: '' },
  });

  const columns: GridColDef<FileListItem & { id: string }>[] = useMemo(
    () => [
      { field: 'name', headerName: t('files.name'), flex: 1.2, minWidth: 200 },
      {
        field: 'directory',
        headerName: t('files.type'),
        flex: 0.6,
        minWidth: 140,
        sortable: false,
        renderCell: (params) =>
          params.value ? (
            <Chip label={t('files.directory')} size="small" color="primary" variant="outlined" />
          ) : (
            <Chip label={t('files.file')} size="small" variant="outlined" />
          ),
      },
      {
        field: 'lastModified',
        headerName: t('files.lastModified'),
        flex: 1,
        minWidth: 200,
        renderCell: (params) => params.row.lastModified ?? '—',
      },
    ],
    [t],
  );

  const onSelectDirectory = (dir: string | null) => {
    setCurrentDirectory(dir);
    directoryForm.reset({ path: dir ?? '' });
  };

  const handleFileSelection = async (
    event: ChangeEvent<HTMLInputElement>,
    onLoaded: (base64: string, file: File) => void,
  ) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    const base64 = await readFileAsBase64(file);
    onLoaded(base64, file);
    event.target.value = '';
  };

  const onMutationSuccess = (message: string) => {
    setSnackbar(message);
    directoryForm.reset({ path: '' });
    removeDirectoryForm.reset({ path: '' });
    removeFileForm.reset({ path: '' });
    uploadForm.reset({ filename: '', fileFormat: '', fileData: undefined });
    base64Form.reset({ filepath: '', content: '' });
    zippedForm.reset({ filepath: '', content: '' });
    zipDirectoryForm.reset({ path: '' });
    zipFileForm.reset({ path: '' });
    refetch();
  };

  const pending =
    mutations.createDirectory.isPending ||
    mutations.removeDirectory.isPending ||
    mutations.removeFile.isPending ||
    mutations.upload.isPending ||
    mutations.uploadBase64.isPending ||
    mutations.uploadZippedBase64.isPending ||
    mutations.zipDirectory.isPending ||
    mutations.zipFile.isPending ||
    mutations.download.isPending;

  const hasError =
    mutations.createDirectory.isError ||
    mutations.removeDirectory.isError ||
    mutations.removeFile.isError ||
    mutations.upload.isError ||
    mutations.uploadBase64.isError ||
    mutations.uploadZippedBase64.isError ||
    mutations.zipDirectory.isError ||
    mutations.zipFile.isError ||
    mutations.download.isError;

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t('navigation.files')}</Typography>
        <Stack direction="row" spacing={1}>
          <Button
            startIcon={<RefreshIcon />}
            variant="outlined"
            onClick={() => refetch()}
            disabled={isLoading || pending}
          >
            {t('actions.refresh')}
          </Button>
          <Button
            variant="outlined"
            onClick={() => onSelectDirectory(parentPath(currentDirectory))}
            disabled={!currentDirectory}
          >
            {t('files.goUp')}
          </Button>
        </Stack>
      </Stack>
      {hasError ? <Alert severity="error">{t('forms.error')}</Alert> : null}
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardHeader
              avatar={<FolderIcon color="primary" />}
              title={t('files.currentDirectory')}
              subheader={currentDirectory ?? t('files.rootDirectory')}
            />
            <Divider />
            <CardContent>
              <Stack spacing={2}>
                <TextField
                  value={currentDirectory ?? ''}
                  onChange={(event) => setCurrentDirectory(event.target.value || null)}
                  label={t('files.pathInput')}
                  placeholder={t('files.pathPlaceholder')}
                />
                <Box sx={{ height: 420 }}>
                  <DataGrid
                    rows={(files ?? []).map((file) => ({ id: file.name, ...file }))}
                    columns={columns}
                    loading={isLoading || pending}
                    disableRowSelectionOnClick
                    onRowDoubleClick={(params) => {
                      if (params.row.directory) {
                        onSelectDirectory(joinPath(currentDirectory, params.row.name));
                      }
                    }}
                    localeText={{ noRowsLabel: t('table.empty') }}
                    paginationMode="client"
                    paginationModel={{ page: 0, pageSize: 50 }}
                    hideFooterPagination
                  />
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardHeader
              avatar={<UploadFileIcon color="primary" />}
              title={t('files.summaryTitle')}
              subheader={t('files.summarySubtitle')}
            />
            <Divider />
            <CardContent>
              <Stack spacing={1.5}>
                <Typography variant="subtitle2" color="text.secondary">
                  {t('files.version')}
                </Typography>
                <Typography>{version || '—'}</Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {t('files.totalFiles')}
                </Typography>
                <Typography>{allFiles?.length ?? 0}</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardHeader title={t('files.createDirectoryTitle')} avatar={<DriveFileMoveIcon color="primary" />} />
            <Divider />
            <CardContent>
              <Stack
                component="form"
                spacing={2}
                onSubmit={directoryForm.handleSubmit(async (values) => {
                  await mutations.createDirectory.mutateAsync(values.path);
                  onMutationSuccess(t('feedback.saved'));
                })}
              >
                <Controller
                  control={directoryForm.control}
                  name="path"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('files.directoryPath')}
                      error={Boolean(directoryForm.formState.errors.path)}
                      helperText={
                        directoryForm.formState.errors.path
                          ? t(directoryForm.formState.errors.path.message ?? 'forms.required')
                          : undefined
                      }
                    />
                  )}
                />
                <Button type="submit" variant="contained" disabled={mutations.createDirectory.isPending}>
                  {t('actions.save')}
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardHeader title={t('files.cleanupTitle')} avatar={<DeleteIcon color="error" />} />
            <Divider />
            <CardContent>
              <Stack spacing={3}>
                <Stack
                  component="form"
                  spacing={2}
                  onSubmit={removeDirectoryForm.handleSubmit(async (values) => {
                    await mutations.removeDirectory.mutateAsync(values.path);
                    onMutationSuccess(t('feedback.deleted'));
                  })}
                >
                  <Controller
                    control={removeDirectoryForm.control}
                    name="path"
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label={t('files.directoryPath')}
                        error={Boolean(removeDirectoryForm.formState.errors.path)}
                        helperText={
                          removeDirectoryForm.formState.errors.path
                            ? t(removeDirectoryForm.formState.errors.path.message ?? 'forms.required')
                            : undefined
                        }
                      />
                    )}
                  />
                  <Button type="submit" color="error" variant="outlined" disabled={mutations.removeDirectory.isPending}>
                    {t('files.removeDirectory')}
                  </Button>
                </Stack>
                <Stack
                  component="form"
                  spacing={2}
                  onSubmit={removeFileForm.handleSubmit(async (values) => {
                    await mutations.removeFile.mutateAsync(values.path);
                    onMutationSuccess(t('feedback.deleted'));
                  })}
                >
                  <Controller
                    control={removeFileForm.control}
                    name="path"
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label={t('files.filePath')}
                        error={Boolean(removeFileForm.formState.errors.path)}
                        helperText={
                          removeFileForm.formState.errors.path
                            ? t(removeFileForm.formState.errors.path.message ?? 'forms.required')
                            : undefined
                        }
                      />
                    )}
                  />
                  <Stack direction="row" spacing={1}>
                    <Button type="submit" color="error" variant="contained" disabled={mutations.removeFile.isPending}>
                      {t('files.removeFile')}
                    </Button>
                    <Button
                      type="button"
                      variant="outlined"
                      onClick={async () => {
                        const values = removeFileForm.getValues();
                        if (values.path) {
                          await mutations.download.mutateAsync(values.path);
                          setSnackbar(t('feedback.saved'));
                        }
                      }}
                      disabled={mutations.download.isPending}
                    >
                      {t('files.downloadFile')}
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardHeader title={t('files.uploadTitle')} avatar={<CloudUploadIcon color="primary" />} />
            <Divider />
            <CardContent>
              <Stack spacing={3}>
                <Stack
                  component="form"
                  spacing={2}
                  onSubmit={uploadForm.handleSubmit(async (values) => {
                    await mutations.upload.mutateAsync(values);
                    onMutationSuccess(t('feedback.saved'));
                  })}
                >
                  <Controller
                    control={uploadForm.control}
                    name="filename"
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label={t('files.filename')}
                        error={Boolean(uploadForm.formState.errors.filename)}
                        helperText={
                          uploadForm.formState.errors.filename
                            ? t(uploadForm.formState.errors.filename.message ?? 'forms.required')
                            : undefined
                        }
                      />
                    )}
                  />
                  <Controller
                    control={uploadForm.control}
                    name="fileFormat"
                    render={({ field }) => (
                      <TextField {...field} label={t('files.fileFormat')} />
                    )}
                  />
                  <Button
                    component="label"
                    variant="outlined"
                    startIcon={<UploadFileIcon />}
                  >
                    {t('files.selectFile')}
                    <input
                      type="file"
                      hidden
                      onChange={(event) =>
                        handleFileSelection(event, (base64, file) => {
                          uploadForm.setValue('filename', file.name, {
                            shouldDirty: true,
                            shouldValidate: true,
                          });
                          uploadForm.setValue('fileData', base64, {
                            shouldDirty: true,
                            shouldValidate: true,
                          });
                        })
                      }
                    />
                  </Button>
                  <Button type="submit" variant="contained" disabled={mutations.upload.isPending}>
                    {t('files.uploadJson')}
                  </Button>
                </Stack>
                <Stack
                  component="form"
                  spacing={2}
                  onSubmit={base64Form.handleSubmit(async (values) => {
                    await mutations.uploadBase64.mutateAsync(values);
                    onMutationSuccess(t('feedback.saved'));
                  })}
                >
                  <Controller
                    control={base64Form.control}
                    name="filepath"
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label={t('files.filePath')}
                        error={Boolean(base64Form.formState.errors.filepath)}
                        helperText={
                          base64Form.formState.errors.filepath
                            ? t(base64Form.formState.errors.filepath.message ?? 'forms.required')
                            : undefined
                        }
                      />
                    )}
                  />
                  <Button
                    component="label"
                    variant="outlined"
                    startIcon={<UploadFileIcon />}
                  >
                    {t('files.selectFile')}
                    <input
                      type="file"
                      hidden
                      onChange={(event) =>
                        handleFileSelection(event, (base64) => {
                          base64Form.setValue('content', base64, {
                            shouldDirty: true,
                            shouldValidate: true,
                          });
                        })
                      }
                    />
                  </Button>
                  <Button type="submit" variant="contained" disabled={mutations.uploadBase64.isPending}>
                    {t('files.uploadBase64')}
                  </Button>
                </Stack>
                <Stack
                  component="form"
                  spacing={2}
                  onSubmit={zippedForm.handleSubmit(async (values) => {
                    await mutations.uploadZippedBase64.mutateAsync(values);
                    onMutationSuccess(t('feedback.saved'));
                  })}
                >
                  <Controller
                    control={zippedForm.control}
                    name="filepath"
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label={t('files.filePath')}
                        error={Boolean(zippedForm.formState.errors.filepath)}
                        helperText={
                          zippedForm.formState.errors.filepath
                            ? t(zippedForm.formState.errors.filepath.message ?? 'forms.required')
                            : undefined
                        }
                      />
                    )}
                  />
                  <Button
                    component="label"
                    variant="outlined"
                    startIcon={<ArchiveIcon />}
                  >
                    {t('files.selectArchive')}
                    <input
                      type="file"
                      hidden
                      onChange={(event) =>
                        handleFileSelection(event, (base64) => {
                          zippedForm.setValue('content', base64, {
                            shouldDirty: true,
                            shouldValidate: true,
                          });
                        })
                      }
                    />
                  </Button>
                  <Button type="submit" variant="contained" disabled={mutations.uploadZippedBase64.isPending}>
                    {t('files.uploadZippedBase64')}
                  </Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardHeader title={t('files.archiveDirectoryTitle')} avatar={<ArchiveIcon color="primary" />} />
            <Divider />
            <CardContent>
              <Stack
                component="form"
                spacing={2}
                onSubmit={zipDirectoryForm.handleSubmit(async (values) => {
                  await mutations.zipDirectory.mutateAsync(values.path);
                  setSnackbar(t('feedback.saved'));
                })}
              >
                <Controller
                  control={zipDirectoryForm.control}
                  name="path"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('files.directoryPath')}
                      error={Boolean(zipDirectoryForm.formState.errors.path)}
                      helperText={
                        zipDirectoryForm.formState.errors.path
                          ? t(zipDirectoryForm.formState.errors.path.message ?? 'forms.required')
                          : undefined
                      }
                    />
                  )}
                />
                <Button type="submit" variant="contained" disabled={mutations.zipDirectory.isPending}>
                  {t('files.archiveDirectory')}
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardHeader title={t('files.archiveFileTitle')} avatar={<ArchiveIcon color="primary" />} />
            <Divider />
            <CardContent>
              <Stack
                component="form"
                spacing={2}
                onSubmit={zipFileForm.handleSubmit(async (values) => {
                  await mutations.zipFile.mutateAsync(values.path);
                  setSnackbar(t('feedback.saved'));
                })}
              >
                <Controller
                  control={zipFileForm.control}
                  name="path"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('files.filePath')}
                      error={Boolean(zipFileForm.formState.errors.path)}
                      helperText={
                        zipFileForm.formState.errors.path
                          ? t(zipFileForm.formState.errors.path.message ?? 'forms.required')
                          : undefined
                      }
                    />
                  )}
                />
                <Button type="submit" variant="contained" disabled={mutations.zipFile.isPending}>
                  {t('files.archiveFile')}
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Snackbar
        open={Boolean(snackbar)}
        autoHideDuration={4000}
        onClose={() => setSnackbar(null)}
        message={snackbar ?? ''}
      />
    </Stack>
  );
};
