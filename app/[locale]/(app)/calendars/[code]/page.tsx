import { CalendarDetail } from '@/features/calendars/components/CalendarDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CalendarDetailPage({ params }: Props) {
  const { code } = await params;

  return <CalendarDetail code={code} />;
}
