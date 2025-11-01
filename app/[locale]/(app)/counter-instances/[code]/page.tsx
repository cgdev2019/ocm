import { CounterInstanceDetail } from '@/features/counter-instances/components/CounterInstanceDetail';

export default function CounterInstanceDetailPage({ params }: { params: { code: string } }) {
  return <CounterInstanceDetail code={decodeURIComponent(params.code)} />;
}
