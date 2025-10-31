'use client';

import { InvoiceTypeForm } from '@/features/invoice-types/components/InvoiceTypeForm';
import { useRouter } from '@/lib/i18n/navigation';

export const InvoiceTypeCreateForm = () => {
  const router = useRouter();
  return (
    <InvoiceTypeForm
      mode="create"
      onSuccess={(values) => router.replace(`../${values.code}`)}
    />
  );
};
