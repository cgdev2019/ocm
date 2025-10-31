import type { components } from '@/lib/api/generated/schema';

export type ImportFileTypeDto = components['schemas']['ImportFileTypeDto'];
export type FileImportForm = components['schemas']['FileImportForm'];

export type MassImportUploadPayload = {
  fileName: string;
  base64Data: string;
};
