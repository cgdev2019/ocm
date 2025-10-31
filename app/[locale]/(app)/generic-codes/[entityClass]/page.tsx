import { GenericCodeDetail } from '@/features/generic-code/components/GenericCodeDetail';

type Props = {
  params: Promise<{ entityClass: string }>;
};

export default async function GenericCodeDetailPage(props: Props) {
  const params = await props.params;
  const { entityClass } = params;

  return <GenericCodeDetail entityClass={entityClass} />;
}
