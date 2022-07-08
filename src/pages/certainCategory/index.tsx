import styled from 'styled-components';

import { CurrentCategory, CurrentCategoryList } from './components';

import { PageLayout } from '@/common';

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
