import { PageLayout } from '@/components';
import { Schedule } from '@/components/common/Schedule';

const Home = () => {
  return (
    <PageLayout title="홈 페이지" isFooter={false}>
      <h1>홈 페이지</h1>
      <Schedule />
    </PageLayout>
  );
};

export default Home;
