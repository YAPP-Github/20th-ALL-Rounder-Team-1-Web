import { useNavigate } from 'react-router-dom';

import { PageLayout } from '@/components';

const AddRoutine = () => {
  const navigate = useNavigate();

  return (
    <PageLayout isHeader={false} isFooter={false}>
      <h1>일정 등록 페이지</h1>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </PageLayout>
  );
};

export default AddRoutine;
