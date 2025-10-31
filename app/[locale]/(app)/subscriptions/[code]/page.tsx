import { SubscriptionDetail } from '@/features/subscriptions/components/SubscriptionDetail';

type SubscriptionDetailPageProps = {
  params: Promise<{ code: string }>;
};

export default async function SubscriptionDetailPage({ params }: SubscriptionDetailPageProps) {
  const resolvedParams = await params;

  return <SubscriptionDetail code={resolvedParams.code} />;
}
