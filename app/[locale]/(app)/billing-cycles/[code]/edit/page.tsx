import { BillingCycleEditForm } from '@/features/billing-cycles/components/BillingCycleEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function BillingCycleEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <BillingCycleEditForm code={code} />;
}
