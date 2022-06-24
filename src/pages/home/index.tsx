import { Schedules } from './components';

import { PageLayout } from '@/common';

const Home = () => {
  return (
    <PageLayout title="홈 페이지" isFooter={false}>
      <Schedules />
    </PageLayout>
  );
};

export default Home;
