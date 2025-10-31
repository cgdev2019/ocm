'use client';

import { useRouter } from '@/lib/i18n/navigation';
import { InvoiceForm } from '@/features/invoices/components/InvoiceForm';

export const InvoiceCreateForm = () => {
  const router = useRouter();
  return <InvoiceForm onSuccess={(id) => id && router.replace(`../${id}`)} />;
};
