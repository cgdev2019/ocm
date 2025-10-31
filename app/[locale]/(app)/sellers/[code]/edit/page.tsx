import { SellerEditForm } from '@/features/sellers/components/SellerEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function SellerEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <SellerEditForm code={code} />;
}
