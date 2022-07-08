import { FriendStories, Schedules } from './components';

import { PageLayout } from '@/common';

const Home = () => {
  return (
    <PageLayout isFooter={false}>
      <FriendStories />
      <Schedules />
    </PageLayout>
  );
};

export default Home;
