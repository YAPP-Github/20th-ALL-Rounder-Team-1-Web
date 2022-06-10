import { PageLayout } from '@/components';
import { FriendStories } from '@/components/common/FriendStories';

const Home = () => {
  return (
    <PageLayout title="홈 페이지">
      <FriendStories />
      <h1>홈 페이지</h1>
    </PageLayout>
  );
};

export default Home;
