import { PageContainer } from '@/app/components/UI/PageContainer/Page.Container';
import { SkeletonTable } from '@/app/components/UI/Skeleton/Skeleton.Table/Skeleton.Table';



export default function Loading() {
  return (
    <PageContainer>
      <SkeletonTable />
    </PageContainer>
  );
}
