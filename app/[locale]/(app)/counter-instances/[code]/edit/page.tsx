import { CounterInstanceEditForm } from '@/features/counter-instances/components/CounterInstanceEditForm';

export default function CounterInstanceEditPage({ params }: { params: { code: string } }) {
  return <CounterInstanceEditForm code={decodeURIComponent(params.code)} />;
}
