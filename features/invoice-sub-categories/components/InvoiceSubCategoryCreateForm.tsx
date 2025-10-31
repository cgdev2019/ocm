'use client';

import { InvoiceSubCategoryForm } from '@/features/invoice-sub-categories/components/InvoiceSubCategoryForm';
import { useRouter } from '@/lib/i18n/navigation';

export const InvoiceSubCategoryCreateForm = () => {
  const router = useRouter();
  return (
    <InvoiceSubCategoryForm
      mode="create"
      onSuccess={(values) => router.replace(`../${values.code}`)}
    />
  );
};
