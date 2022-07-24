import { useState } from 'react';
import styled from 'styled-components';

import { FilterResult, SearchContents, SearchHistory } from './components';

import { CurrentCategoryList, PageLayout } from '@/common';
import { SORT } from '@/utils';

const Search = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [sort, setSort] = useState(SORT.DATE_CREATED_ASC);

  return (
    <PageLayout isFooter={false}>
      <Wrapper>
        <CurrentCategoryList
          showAllowingRange={false}
          listingContents={<SearchContents />}
          setIsInputFocused={setIsInputFocused}
          sort={sort}
          setSort={setSort}
        />
        <FilterResult />
        {isInputFocused && <SearchHistory />}
      </Wrapper>
    </PageLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

export default Search;
