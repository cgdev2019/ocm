'use client';

import { TitleForm } from '@/features/titles/components/TitleForm';
import { useRouter } from '@/lib/i18n/navigation';

export const TitleCreateForm = () => {
  const router = useRouter();

  return (
    <TitleForm
      mode="create"
      onSuccess={(values) => router.replace(`../${values.code}`)}
    />
  );
};
