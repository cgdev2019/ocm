'use client';

import { useRouter } from '@/lib/i18n/navigation';
import { TaxForm } from '@/features/taxes/components/TaxForm';

export const TaxCreateForm = () => {
  const router = useRouter();
  return <TaxForm mode="create" onSuccess={(values) => router.replace(`../${values.code}`)} />;
};
