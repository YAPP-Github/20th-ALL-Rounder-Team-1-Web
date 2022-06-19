import { PageLayout } from '@/components';
import { CurrentCategory } from '@/components/common/CurrentCategory';
import { CurrentCategoryList } from '@/components/common/CurrentCategoryList';
import styled from 'styled-components';

const CertainCategory = () => {
  return (
    <PageLayout title="카테고리 세부 페이지" isFooter={false}>
      <Wrapper>
        <CurrentCategory />
        <CurrentCategoryList />
      </Wrapper>
    </PageLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export default CertainCategory;
