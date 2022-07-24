import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { CurrentCategory } from './components';

import { CurrentCategoryList, CurrentCategoryMenus, PageLayout } from '@/common';
import { SORT } from '@/utils';

const CertainCategory = () => {
  const { pathname } = useLocation();
  const categoryId = pathname.split('/')[2];
  const [sort, setSort] = useState(SORT.DATE_CREATED_ASC);
  const [openType, setOpenType] = useState('ALL_OPEN');

  return (
    <PageLayout isFooter={false}>
      <Wrapper>
        <CurrentCategory />
        <CurrentCategoryList
          listingContents={
            <CurrentCategoryMenus sort={sort} categoryId={categoryId} setOpenType={setOpenType} />
          }
          sort={sort}
          setSort={setSort}
          openType={openType}
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
