'use client';

import { InvoiceCategoryForm } from '@/features/invoice-categories/components/InvoiceCategoryForm';
import { useRouter } from '@/lib/i18n/navigation';

export const InvoiceCategoryCreateForm = () => {
  const router = useRouter();
  return (
    <InvoiceCategoryForm
      mode="create"
      onSuccess={(values) => router.replace(`../${values.code}`)}
    />
  );
};
