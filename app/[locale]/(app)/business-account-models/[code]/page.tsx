import { BusinessAccountModelDetail } from '@/features/business-account-model/components/BusinessAccountModelDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function BusinessAccountModelDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <BusinessAccountModelDetail code={code} />;
}
