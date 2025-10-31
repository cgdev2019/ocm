import { CustomerAccountEditForm } from '@/features/customer-accounts/components/CustomerAccountEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CustomerAccountEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <CustomerAccountEditForm code={code} />;
}
