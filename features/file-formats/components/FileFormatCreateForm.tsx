'use client';

import { FileFormatForm } from '@/features/file-formats/components/FileFormatForm';
import { useRouter } from '@/lib/i18n/navigation';

export const FileFormatCreateForm = () => {
  const router = useRouter();

  return (
    <FileFormatForm
      mode="create"
      onSuccess={(values) => router.replace(`../${values.code}`)}
    />
  );
};
