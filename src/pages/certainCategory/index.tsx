import { useState } from 'react';
import styled from 'styled-components';

import { CurrentCategory } from './components';

import { CurrentCategoryList, CurrentCategoryMenus, PageLayout } from '@/common';
import { SORT } from '@/utils';

const CertainCategory = () => {
  const [sort, setSort] = useState(SORT.DATE_CREATED_ASC);

  return (
    <PageLayout isFooter={false}>
      <Wrapper>
        <CurrentCategory />
        <CurrentCategoryList
          listingContents={<CurrentCategoryMenus />}
          sort={sort}
          setSort={setSort}
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
