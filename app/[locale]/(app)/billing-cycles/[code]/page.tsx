import { BillingCycleDetail } from '@/features/billing-cycles/components/BillingCycleDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function BillingCycleDetailPage({ params }: Props) {
  const { code } = await params;

  return <BillingCycleDetail code={code} />;
}
