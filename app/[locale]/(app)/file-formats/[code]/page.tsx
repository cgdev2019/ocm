import { FileFormatDetail } from '@/features/file-formats/components/FileFormatDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function FileFormatDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <FileFormatDetail code={code} />;
}
