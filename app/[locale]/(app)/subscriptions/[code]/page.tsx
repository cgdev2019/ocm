import { SubscriptionDetail } from '@/features/subscriptions/components/SubscriptionDetail';

type SubscriptionDetailPageProps = {
  params: { code: string };
};

export default function SubscriptionDetailPage({ params }: SubscriptionDetailPageProps) {
  return <SubscriptionDetail code={params.code} />;
}
