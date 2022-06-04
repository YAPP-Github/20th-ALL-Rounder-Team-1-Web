import { Link } from 'react-router-dom';
import { PageLayout } from '@/components';

const Home = () => {
  return (
    <PageLayout title="홈 페이지">
      <h1>홈 페이지</h1>
      <Link to="/login">Login</Link>
    </PageLayout>
  );
};

export default Home;
