import { SearchContents } from './components/SearchContents';

import { CurrentCategoryList, PageLayout } from '@/common';

const Search = () => {
  return (
    <PageLayout isFooter={false}>
      <CurrentCategoryList
        showAllowingRange={false}
        sortingMenus={['인기순', '팔로워순', '오름차순', '내림차순']}
        listingContents={<SearchContents />}
      />
    </PageLayout>
  );
};

export default Search;
