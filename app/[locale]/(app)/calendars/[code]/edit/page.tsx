import { CalendarEditForm } from '@/features/calendars/components/CalendarEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CalendarEditPage({ params }: Props) {
  const { code } = await params;

  return <CalendarEditForm code={code} />;
}
