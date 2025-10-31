import { CustomerAccountDetail } from '@/features/customer-accounts/components/CustomerAccountDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CustomerAccountDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <CustomerAccountDetail code={code} />;
}
