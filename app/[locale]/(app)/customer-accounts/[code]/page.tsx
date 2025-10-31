import { CustomerAccountDetail } from '@/features/customer-accounts/components/CustomerAccountDetail';

type Props = {
  params: { code: string };
};

export default function CustomerAccountDetailPage({ params }: Props) {
  return <CustomerAccountDetail code={params.code} />;
}
