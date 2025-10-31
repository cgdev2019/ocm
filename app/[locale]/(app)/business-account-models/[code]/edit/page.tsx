import { BusinessAccountModelEditForm } from '@/features/business-account-model/components/BusinessAccountModelEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function BusinessAccountModelEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <BusinessAccountModelEditForm code={code} />;
}
