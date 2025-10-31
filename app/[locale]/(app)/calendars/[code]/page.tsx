import { CalendarDetail } from '@/features/calendars/components/CalendarDetail';

type Props = {
  params: { code: string };
};

export default function CalendarDetailPage({ params }: Props) {
  return <CalendarDetail code={params.code} />;
}
