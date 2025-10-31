'use client';

import { OccTemplateForm } from '@/features/occ-templates/components/OccTemplateForm';
import { useRouter } from '@/lib/i18n/navigation';

export const OccTemplateCreateForm = () => {
  const router = useRouter();
  return (
    <OccTemplateForm
      mode="create"
      onSuccess={(values) => router.replace(`../${values.code}`)}
    />
  );
};
