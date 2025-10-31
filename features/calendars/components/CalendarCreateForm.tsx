'use client';

import { useRouter } from '@/lib/i18n/navigation';
import { CalendarForm } from '@/features/calendars/components/CalendarForm';

export const CalendarCreateForm = () => {
  const router = useRouter();
  return <CalendarForm mode="create" onSuccess={(values) => router.replace(`../${values.code}`)} />;
};
