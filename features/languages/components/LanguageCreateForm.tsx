'use client';

import { LanguageForm } from '@/features/languages/components/LanguageForm';
import { useRouter } from '@/lib/i18n/navigation';

export const LanguageCreateForm = () => {
  const router = useRouter();
  return (
    <LanguageForm
      mode="create"
      onSuccess={(values) => router.replace(`../${values.code}`)}
    />
  );
};
