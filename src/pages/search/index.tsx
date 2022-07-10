import styled from 'styled-components';

import { SearchContents } from './components/SearchContents';
import { FilterResult } from './components';

import { CurrentCategoryList, PageLayout } from '@/common';

const Search = () => {
  return (
    <PageLayout isFooter={false}>
      <Wrapper>
        <CurrentCategoryList
          showAllowingRange={false}
          sortingMenus={['인기순', '팔로워순', '오름차순', '내림차순']}
          listingContents={<SearchContents />}
        />
        <FilterResult />
      </Wrapper>
    </PageLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default Search;
