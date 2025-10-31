import { BillingCycleEditForm } from '@/features/billing-cycles/components/BillingCycleEditForm';

type Props = {
  params: { code: string };
};

export default function BillingCycleEditPage({ params }: Props) {
  return <BillingCycleEditForm code={params.code} />;
}
