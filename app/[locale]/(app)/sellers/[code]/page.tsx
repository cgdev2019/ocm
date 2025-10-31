import { SellerDetail } from '@/features/sellers/components/SellerDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function SellerDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <SellerDetail code={code} />;
}
