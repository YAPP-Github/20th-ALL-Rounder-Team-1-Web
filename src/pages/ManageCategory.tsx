import { PageLayout } from '@/components';
import { Category } from '@/components/common/Category';

const ManageCategory = () => {
  return (
    <PageLayout title="카테고리" isFooter={false}>
      <h1>카테고리</h1>
      <Category />
    </PageLayout>
  );
};

export default ManageCategory;
