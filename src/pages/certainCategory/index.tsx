import styled from 'styled-components';

import { CurrentCategory } from './components';

import { CurrentCategoryList, CurrentCategoryMenus, PageLayout } from '@/common';

const CertainCategory = () => {
  return (
    <PageLayout isFooter={false}>
      <Wrapper>
        <CurrentCategory />
        <CurrentCategoryList
          sortingMenus={['최신순', '오래된순', '오름차순', '내림차순']}
          listingContents={<CurrentCategoryMenus />}
        />
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
