import { useState } from 'react';
import styled from 'styled-components';

import { FilterResult, SearchContents, SearchHistory } from './components';

import { CurrentCategoryList, PageLayout } from '@/common';

const Search = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <PageLayout isFooter={false}>
      <Wrapper>
        <CurrentCategoryList
          showAllowingRange={false}
          sortingMenus={['인기순', '팔로워순', '오름차순', '내림차순']}
          listingContents={<SearchContents />}
          setIsInputFocused={setIsInputFocused}
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
