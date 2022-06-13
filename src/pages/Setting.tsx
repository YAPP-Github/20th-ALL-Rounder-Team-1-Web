import { PageLayout } from '@/components';
import { SettingSidebar } from '@/components/common/SettingSidebar';

const Setting = () => {
  return (
    <PageLayout title="세팅 페이지" isFooter={false}>
      <SettingSidebar />
    </PageLayout>
  );
};

export default Setting;
