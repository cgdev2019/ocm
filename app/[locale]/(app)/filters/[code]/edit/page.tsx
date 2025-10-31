import { FilterEditForm } from '@/features/filter/components/FilterEditForm';

type Props = {
  params: { code: string };
};

export default function FilterEditPage({ params }: Props) {
  return <FilterEditForm filterCode={params.code} />;
}
