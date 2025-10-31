import type { components } from '@/lib/api/generated/schema';

export type FileFormatDto = components['schemas']['FileFormatDto'];
export type FileFormatResponseDto = components['schemas']['FileFormatResponseDto'];
export type FileFormatListResponseDto = components['schemas']['FileFormatListResponseDto'];
export type PagingAndFiltering = components['schemas']['PagingAndFiltering'];

export type FileFormatListItem = {
  code: string;
  description?: string;
  fileNamePattern?: string;
  jobCode?: string;
  fileTypes?: string[];
  fileNameUniqueness?: boolean;
};

export type FileFormatFormValues = {
  code: string;
  description?: string;
  fileNamePattern?: string;
  fileNameUniqueness?: boolean;
  fileTypes?: string[];
  configurationTemplate?: string;
  recordName?: string;
  inputDirectory?: string;
  outputDirectory?: string;
  rejectDirectory?: string;
  archiveDirectory?: string;
  jobCode?: string;
};

export type FileFormatDetailValues = FileFormatFormValues;
