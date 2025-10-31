import { BillingCycleEditForm } from '@/features/billing-cycles/components/BillingCycleEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function BillingCycleEditPage({ params }: Props) {
  const { code } = await params;

  return <BillingCycleEditForm code={code} />;
}
