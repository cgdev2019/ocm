'use client';

import { InvoiceSequenceForm } from '@/features/invoice-sequences/components/InvoiceSequenceForm';
import { useRouter } from '@/lib/i18n/navigation';

export const InvoiceSequenceCreateForm = () => {
  const router = useRouter();
  return (
    <InvoiceSequenceForm
      mode="create"
      onSuccess={(values) => router.replace(`../${values.code}`)}
    />
  );
};
