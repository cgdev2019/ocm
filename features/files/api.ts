import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type {
  ActionStatus,
  Base64UploadFormValues,
  FileDto,
  FileListItem,
  FileRequestDto,
  FileUploadFormDto,
  FileUploadFormValues,
} from '@/features/files/types';
import type { GetFilesResponseDto } from '@/features/files/types';

const adaptFiles = (files: FileDto[] | undefined): FileListItem[] =>
  (files ?? []).map((file) => ({
    name: file.name ?? '',
    lastModified: file.lastModified ?? undefined,
    directory: Boolean(file.directory),
  }));

export const useFiles = (directory?: string | null) =>
  useQuery({
    queryKey: queryKeys.files.list(directory ?? ''),
    queryFn: async () => {
      const apiClient = getApiClient();
      const params = directory ? { query: { dir: directory } } : undefined;
      const result = await apiClient.GET('/api/rest/admin/files', { params });
      const payload = unwrapResponse<GetFilesResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load files',
      );
      assertActionSuccess(payload.actionStatus, 'File list request failed');
      return adaptFiles(payload.files);
    },
  });

export const useAllFiles = () =>
  useQuery({
    queryKey: queryKeys.files.all(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/admin/files/all');
      const payload = unwrapResponse<GetFilesResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load all files',
      );
      assertActionSuccess(payload.actionStatus, 'File list request failed');
      return adaptFiles(payload.files);
    },
  });

const toUploadDto = (values: FileUploadFormValues): FileUploadFormDto => ({
  data: values.fileData ? [values.fileData] : undefined,
  filename: values.filename,
  fileFormat: values.fileFormat,
});

const toRequestDto = (values: Base64UploadFormValues): FileRequestDto => ({
  filepath: values.filepath,
  content: values.content,
});

export const useFilesMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = () => {
    queryClient.invalidateQueries({ queryKey: queryKeys.files.list() });
    queryClient.invalidateQueries({ queryKey: queryKeys.files.all() });
  };

  const createDirectory = useMutation({
    mutationFn: async (path: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/admin/files/createDir', { body: path });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Directory creation failed',
      );
      assertActionSuccess(payload, 'Directory creation failed');
      return payload;
    },
    onSuccess: invalidate,
  });

  const removeDirectory = useMutation({
    mutationFn: async (path: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/admin/files/suppressDirectory', { body: path });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Directory deletion failed',
      );
      assertActionSuccess(payload, 'Directory deletion failed');
      return payload;
    },
    onSuccess: invalidate,
  });

  const removeFile = useMutation({
    mutationFn: async (path: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/admin/files/suppressFile', { body: path });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'File deletion failed',
      );
      assertActionSuccess(payload, 'File deletion failed');
      return payload;
    },
    onSuccess: invalidate,
  });

  const upload = useMutation({
    mutationFn: async (values: FileUploadFormValues) => {
      const apiClient = getApiClient();
      const dto = toUploadDto(values);
      const result = await apiClient.POST('/api/rest/admin/files/upload', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'File upload failed',
      );
      assertActionSuccess(payload, 'File upload failed');
      return payload;
    },
    onSuccess: invalidate,
  });

  const uploadBase64 = useMutation({
    mutationFn: async (values: Base64UploadFormValues) => {
      const apiClient = getApiClient();
      const dto = toRequestDto(values);
      const result = await apiClient.POST('/api/rest/admin/files/uploadFileBase64', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Base64 upload failed',
      );
      assertActionSuccess(payload, 'Base64 upload failed');
      return payload;
    },
    onSuccess: invalidate,
  });

  const uploadZippedBase64 = useMutation({
    mutationFn: async (values: Base64UploadFormValues) => {
      const apiClient = getApiClient();
      const dto = toRequestDto(values);
      const result = await apiClient.POST('/api/rest/admin/files/uploadZippedFileBase64', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Zipped upload failed',
      );
      assertActionSuccess(payload, 'Zipped upload failed');
      return payload;
    },
    onSuccess: invalidate,
  });

  const zipDirectory = useMutation({
    mutationFn: async (path: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/admin/files/zipDirectory', { body: path });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Directory archive failed',
      );
      assertActionSuccess(payload, 'Directory archive failed');
      return payload;
    },
  });

  const zipFile = useMutation({
    mutationFn: async (path: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/admin/files/zipFile', { body: path });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'File archive failed',
      );
      assertActionSuccess(payload, 'File archive failed');
      return payload;
    },
  });

  const download = useMutation({
    mutationFn: async (path: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/admin/files/downloadFile', {
        params: { query: { file: path } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'File download failed',
      );
      assertActionSuccess(payload, 'File download failed');
      return payload;
    },
  });

  return useMemo(
    () => ({
      createDirectory,
      removeDirectory,
      removeFile,
      upload,
      uploadBase64,
      uploadZippedBase64,
      zipDirectory,
      zipFile,
      download,
    }),
    [createDirectory, download, removeDirectory, removeFile, upload, uploadBase64, uploadZippedBase64, zipDirectory, zipFile],
  );
};

export const useFilesVersion = () =>
  useQuery({
    queryKey: queryKeys.files.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/admin/files/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load files service version',
      );
      assertActionSuccess(payload, 'Files version request failed');
      return payload.message ?? '';
    },
  });
