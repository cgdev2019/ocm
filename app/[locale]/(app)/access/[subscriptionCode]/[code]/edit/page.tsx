import { AccessEditForm } from '@/features/access/components/AccessEditForm';

type Props = {
  params: Promise<{ subscriptionCode: string; code: string }>;
};

export default async function AccessEditPage(props: Props) {
  const params = await props.params;
  const { subscriptionCode, code } = params;

  return <AccessEditForm code={code} subscriptionCode={subscriptionCode} />;
}
