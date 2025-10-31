import { GenericCodeEditForm } from '@/features/generic-code/components/GenericCodeEditForm';

type Props = {
  params: Promise<{ entityClass: string }>;
};

export default async function GenericCodeEditPage(props: Props) {
  const params = await props.params;
  const { entityClass } = params;

  return <GenericCodeEditForm entityClass={entityClass} />;
}
