'use client';

import { TerminationReasonForm } from '@/features/termination-reasons/components/TerminationReasonForm';
import { useRouter } from '@/lib/i18n/navigation';

export const TerminationReasonCreateForm = () => {
  const router = useRouter();
  return <TerminationReasonForm mode="create" onSuccess={(values) => router.replace(`../${values.code}`)} />;
};
