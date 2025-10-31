import type { components } from '@/lib/api/generated/schema';

export type FileDto = components['schemas']['FileDto'];
export type GetFilesResponseDto = components['schemas']['GetFilesResponseDto'];
export type FileRequestDto = components['schemas']['FileRequestDto'];
export type FileUploadFormDto = components['schemas']['FileUploadForm'];
export type ActionStatus = components['schemas']['ActionStatus'];

export type FileListItem = {
  name: string;
  lastModified?: string;
  directory: boolean;
};

export type DirectoryFormValues = {
  path: string;
};

export type FileOperationFormValues = {
  path: string;
};

export type FileUploadFormValues = {
  filename: string;
  fileFormat?: string;
  fileData?: string | null;
};

export type Base64UploadFormValues = {
  filepath: string;
  content: string;
};
