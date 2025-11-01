import { InvoicingPlanItemEditForm } from '@/features/invoicing-plan-items/components/InvoicingPlanItemEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function InvoicingPlanItemEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <InvoicingPlanItemEditForm code={code} />;
}
