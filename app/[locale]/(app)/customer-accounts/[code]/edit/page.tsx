import { CustomerAccountEditForm } from '@/features/customer-accounts/components/CustomerAccountEditForm';

type Props = {
  params: { code: string };
};

export default function CustomerAccountEditPage({ params }: Props) {
  return <CustomerAccountEditForm code={params.code} />;
}
