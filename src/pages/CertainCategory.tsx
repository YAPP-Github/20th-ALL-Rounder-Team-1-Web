import { PageLayout } from '@/components';
import { CurrentCategory } from '@/components/common/CurrentCategory';
import styled from 'styled-components';

const CertainCategory = () => {
  return (
    <PageLayout title="카테고리 세부 페이지" isFooter={false}>
      <Wrapper>
        <CurrentCategory />
        <div></div>
      </Wrapper>
    </PageLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default CertainCategory;
