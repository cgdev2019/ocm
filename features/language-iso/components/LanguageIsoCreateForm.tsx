'use client';

import { LanguageIsoForm } from '@/features/language-iso/components/LanguageIsoForm';
import { useRouter } from '@/lib/i18n/navigation';

export const LanguageIsoCreateForm = () => {
  const router = useRouter();
  return (
    <LanguageIsoForm
      mode="create"
      onSuccess={(values) => router.replace(`../${values.code}`)}
    />
  );
};
