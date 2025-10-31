import { FileFormatEditForm } from '@/features/file-formats/components/FileFormatEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function FileFormatEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <FileFormatEditForm code={code} />;
}
