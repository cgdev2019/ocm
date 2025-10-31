'use client';

import { useRouter } from '@/lib/i18n/navigation';
import { FilterForm } from '@/features/filter/components/FilterForm';

export const FilterCreateForm = () => {
  const router = useRouter();
  return <FilterForm mode="create" onSuccess={(values) => router.replace(`../${values.code}`)} />;
};
