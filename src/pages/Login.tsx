import { Link } from 'react-router-dom';
import { PageLayout } from '@/components';

const Login = () => {
  return (
    <PageLayout title="로그인 페이지">
      <h1>로그인 페이지</h1>
      <Link to="/">Home</Link>
    </PageLayout>
  );
};

export default Login;
