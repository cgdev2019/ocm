import { SubscriptionEditForm } from '@/features/subscriptions/components/SubscriptionEditForm';

type SubscriptionEditPageProps = {
  params: { code: string };
};

export default function SubscriptionEditPage({ params }: SubscriptionEditPageProps) {
  return <SubscriptionEditForm code={params.code} />;
}
