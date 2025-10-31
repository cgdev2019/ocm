import { CustomerEditForm } from '@/features/customers/components/CustomerEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CustomerEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <CustomerEditForm code={code} />;
}
