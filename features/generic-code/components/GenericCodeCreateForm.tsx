'use client';

import { GenericCodeForm } from '@/features/generic-code/components/GenericCodeForm';
import { useRouter } from '@/lib/i18n/navigation';

export const GenericCodeCreateForm = () => {
  const router = useRouter();
  return (
    <GenericCodeForm
      mode="create"
      onSuccess={(values) => router.replace(`../${values.entityClass}`)}
    />
  );
};
