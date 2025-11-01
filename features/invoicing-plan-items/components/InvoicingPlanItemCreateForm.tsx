'use client';

import { InvoicingPlanItemForm } from '@/features/invoicing-plan-items/components/InvoicingPlanItemForm';
import { useRouter } from '@/lib/i18n/navigation';

export const InvoicingPlanItemCreateForm = () => {
  const router = useRouter();
  return (
    <InvoicingPlanItemForm
      mode="create"
      onSuccess={(values) => router.replace(`../${values.code}`)}
    />
  );
};
