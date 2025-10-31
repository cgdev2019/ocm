import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  FileFormatDto,
  FileFormatFormValues,
  FileFormatListItem,
  FileFormatListResponseDto,
  FileFormatResponseDto,
  PagingAndFiltering,
} from '@/features/file-formats/types';

export const DEFAULT_FILE_FORMAT_PAGE_SIZE = 20;

const adaptList = (items: FileFormatDto[] | undefined): FileFormatListItem[] =>
  (items ?? []).map((item) => ({
    code: item.code ?? '',
    description: item.description ?? undefined,
    fileNamePattern: item.fileNamePattern ?? undefined,
    jobCode: item.jobCode ?? undefined,
    fileTypes: item.fileTypes ?? undefined,
    fileNameUniqueness: item.fileNameUniqueness ?? undefined,
  }));

const mapDtoToForm = (dto: FileFormatDto): FileFormatFormValues => ({
  code: dto.code ?? '',
  description: dto.description ?? undefined,
  fileNamePattern: dto.fileNamePattern ?? undefined,
  fileNameUniqueness: dto.fileNameUniqueness ?? undefined,
  fileTypes: dto.fileTypes ?? undefined,
  configurationTemplate: dto.configurationTemplate ?? undefined,
  recordName: dto.recordName ?? undefined,
  inputDirectory: dto.inputDirectory ?? undefined,
  outputDirectory: dto.outputDirectory ?? undefined,
  rejectDirectory: dto.rejectDirectory ?? undefined,
  archiveDirectory: dto.archiveDirectory ?? undefined,
  jobCode: dto.jobCode ?? undefined,
});

const mapFormToDto = (values: FileFormatFormValues): FileFormatDto => ({
  code: values.code,
  description: values.description,
  fileNamePattern: values.fileNamePattern,
  fileNameUniqueness: values.fileNameUniqueness,
  fileTypes: values.fileTypes,
  configurationTemplate: values.configurationTemplate,
  recordName: values.recordName,
  inputDirectory: values.inputDirectory,
  outputDirectory: values.outputDirectory,
  rejectDirectory: values.rejectDirectory,
  archiveDirectory: values.archiveDirectory,
  jobCode: values.jobCode,
});

export const useFileFormats = (filters?: Partial<PagingAndFiltering> | null) =>
  useQuery({
    queryKey: queryKeys.fileFormats.list(filters ?? undefined),
    queryFn: async () => {
      const apiClient = getApiClient();
      if (filters) {
        const result = await apiClient.POST('/api/rest/admin/fileFormat/list', { body: filters });
        const payload = unwrapResponse<FileFormatListResponseDto>(
          { data: result.data, error: result.error },
          'Unable to search file formats',
        );
        assertActionSuccess(payload.actionStatus, 'File format search failed');
        return adaptList(payload.dtos);
      }

      const result = await apiClient.GET('/api/rest/admin/fileFormat/list');
      const payload = unwrapResponse<FileFormatListResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load file formats',
      );
      assertActionSuccess(payload.actionStatus, 'File format list request failed');
      return adaptList(payload.dtos);
    },
  });

export const useAllFileFormats = () =>
  useQuery({
    queryKey: queryKeys.fileFormats.all(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/admin/fileFormat/listGetAll');
      const payload = unwrapResponse<FileFormatListResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load all file formats',
      );
      assertActionSuccess(payload.actionStatus, 'File format list request failed');
      return adaptList(payload.dtos);
    },
  });

export const useFileFormat = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.fileFormats.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/admin/fileFormat', {
        params: { query: { code: code ?? '' } },
      });
      const payload = unwrapResponse<FileFormatResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load file format',
      );
      assertActionSuccess(payload.actionStatus, 'File format request failed');
      return payload.dto ? mapDtoToForm(payload.dto) : null;
    },
  });

export const useFileFormatMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.fileFormats.list() });
    queryClient.invalidateQueries({ queryKey: queryKeys.fileFormats.all() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.fileFormats.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: FileFormatFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/admin/fileFormat', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'File format creation failed',
      );
      assertActionSuccess(payload, 'File format creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: FileFormatFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/admin/fileFormat', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'File format update failed',
      );
      assertActionSuccess(payload, 'File format update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/admin/fileFormat/{code}', {
        params: { path: { code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'File format deletion failed',
      );
      assertActionSuccess(payload, 'File format deletion failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const upsert = useMutation({
    mutationFn: async (values: FileFormatFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/admin/fileFormat/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'File format upsert failed',
      );
      assertActionSuccess(payload, 'File format upsert failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  return useMemo(() => ({ create, update, remove, upsert }), [create, remove, update, upsert]);
};

export const useFileFormatVersion = () =>
  useQuery({
    queryKey: queryKeys.fileFormats.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/admin/fileFormat/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load file format service version',
      );
      assertActionSuccess(payload, 'File format version request failed');
      return payload.message ?? '';
    },
  });
