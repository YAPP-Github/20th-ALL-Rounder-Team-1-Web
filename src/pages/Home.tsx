import { PageLayout } from '@/components';
import { FriendStory } from '@/components/common/FriendStory';

const Home = () => {
  return (
    <PageLayout title="홈 페이지">
      <FriendStory name="빌리" selected={true} />
      <FriendStory name="빌리" />
      <h1>홈 페이지</h1>
    </PageLayout>
  );
};

export default Home;
