import { BillingCycleDetail } from '@/features/billing-cycles/components/BillingCycleDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function BillingCycleDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <BillingCycleDetail code={code} />;
}
