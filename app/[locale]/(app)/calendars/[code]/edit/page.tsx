import { CalendarEditForm } from '@/features/calendars/components/CalendarEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CalendarEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <CalendarEditForm code={code} />;
}
