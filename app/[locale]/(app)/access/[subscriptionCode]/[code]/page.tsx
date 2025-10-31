import { AccessDetail } from '@/features/access/components/AccessDetail';

type Props = {
  params: Promise<{ subscriptionCode: string; code: string }>;
};

export default async function AccessDetailPage(props: Props) {
  const params = await props.params;
  const { subscriptionCode, code } = params;

  return <AccessDetail code={code} subscriptionCode={subscriptionCode} />;
}
