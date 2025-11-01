'use client';

import { InvoicingPlanForm } from '@/features/invoicing-plans/components/InvoicingPlanForm';
import { useRouter } from '@/lib/i18n/navigation';

export const InvoicingPlanCreateForm = () => {
  const router = useRouter();
  return (
    <InvoicingPlanForm mode="create" onSuccess={(values) => router.replace(`../${values.code}`)} />
  );
};
