import { CustomerAccountDetail } from '@/features/customer-accounts/components/CustomerAccountDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CustomerAccountDetailPage({ params }: Props) {
  const { code } = await params;

  return <CustomerAccountDetail code={code} />;
}
