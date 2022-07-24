import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { CurrentCategory } from './components';

import { CurrentCategoryList, CurrentCategoryMenus, PageLayout } from '@/common';
import { SORT } from '@/utils';

const CertainCategory = () => {
  const [sort, setSort] = useState(SORT.DATE_CREATED_ASC);
  const { pathname } = useLocation();
  const categoryId = pathname.split('/')[2];

  return (
    <PageLayout isFooter={false}>
      <Wrapper>
        <CurrentCategory />
        <CurrentCategoryList
          listingContents={<CurrentCategoryMenus sort={sort} categoryId={categoryId} />}
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
