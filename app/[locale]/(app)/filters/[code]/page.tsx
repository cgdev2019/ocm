import { FilterDetail } from '@/features/filter/components/FilterDetail';

type Props = {
  params: { code: string };
};

export default function FilterDetailPage({ params }: Props) {
  return <FilterDetail filterCode={params.code} />;
}
