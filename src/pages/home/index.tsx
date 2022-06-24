import { Schedule } from './components';

import { PageLayout } from '@/common';

const Home = () => {
  return (
    <PageLayout title="홈 페이지" isFooter={false}>
      <h1>홈 페이지</h1>
      <Schedule />
    </PageLayout>
  );
};

export default Home;
