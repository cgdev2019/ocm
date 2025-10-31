import { BillingCycleDetail } from '@/features/billing-cycles/components/BillingCycleDetail';

type Props = {
  params: { code: string };
};

export default function BillingCycleDetailPage({ params }: Props) {
  return <BillingCycleDetail code={params.code} />;
}
