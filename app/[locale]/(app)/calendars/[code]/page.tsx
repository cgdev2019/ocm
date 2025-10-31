import { CalendarDetail } from '@/features/calendars/components/CalendarDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CalendarDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <CalendarDetail code={code} />;
}
