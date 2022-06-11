import { PageLayout } from '@/components';
import { FriendStories } from '@/components/common/FriendStories';

const Home = () => {
  return (
    <PageLayout title="홈 페이지" isFooter={false}>
      <FriendStories />
    </PageLayout>
  );
};

export default Home;
