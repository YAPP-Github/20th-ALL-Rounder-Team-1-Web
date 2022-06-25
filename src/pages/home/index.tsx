import { FriendStories } from './components';

import { PageLayout } from '@/common';

const Home = () => {
  return (
    <PageLayout isFooter={false}>
      <FriendStories />
    </PageLayout>
  );
};

export default Home;
