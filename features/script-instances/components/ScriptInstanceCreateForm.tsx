'use client';

import { ScriptInstanceForm } from '@/features/script-instances/components/ScriptInstanceForm';
import { useRouter } from '@/lib/i18n/navigation';

export const ScriptInstanceCreateForm = () => {
  const router = useRouter();
  return <ScriptInstanceForm mode="create" onSuccess={(values) => router.replace(`../${values.code}`)} />;
};
