import { CalendarEditForm } from '@/features/calendars/components/CalendarEditForm';

type Props = {
  params: { code: string };
};

export default function CalendarEditPage({ params }: Props) {
  return <CalendarEditForm code={params.code} />;
}
