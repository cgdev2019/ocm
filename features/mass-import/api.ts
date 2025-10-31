import { useMutation } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getApiClient } from '@/lib/api/client';
import { unwrapResponse } from '@/lib/api/helpers';
import type { ImportFileTypeDto, MassImportUploadPayload } from '@/features/mass-import/types';

export const useMassImportUpload = () => {
  const upload = useMutation({
    mutationFn: async ({ fileName, base64Data }: MassImportUploadPayload) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/massImport/uploadAndImport', {
        body: {
          filename: fileName,
          data: [base64Data],
        },
      });
      const payload = unwrapResponse<ImportFileTypeDto>(
        { data: result.data, error: result.error },
        'Mass import upload failed',
      );
      return payload;
    },
  });

  return useMemo(() => ({ upload }), [upload]);
};
