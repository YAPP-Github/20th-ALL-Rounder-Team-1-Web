import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FilterResult, SearchContents } from './components';

import { useSearchUsers } from '@/api/search';
import { CurrentCategoryList, PageLayout } from '@/common';
import { USER } from '@/utils';

interface IUsers {
  id: string;
  goal: string;
  nickname: string;
  profileImageUrl: string;
}

const Search = () => {
  // const [isInputFocused, setIsInputFocused] = useState(false);
  const [sort, setSort] = useState(USER.FOLLOWER_COUNT_DESC);
  const [users, setUsers] = useState<IUsers[]>([]);
  const [jobs, setJobs] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { search_users } = useSearchUsers();

  const showUsers = async () => {
    const {
      data: {
        searchUsers: { users },
      },
    } = await search_users({
      variables: {
        sort,
        page: 0,
        size: 10,
        jobs,
        interests,
        searchQuery,
      },
    });
    setUsers(users);
  };

  console.log(searchQuery);

  console.log(sort);
  console.log(jobs);
  console.log(interests);

  useEffect(() => {
    showUsers();
  }, [searchQuery, sort, jobs, interests]);

  return (
    <PageLayout isFooter={false}>
      <Wrapper>
        <CurrentCategoryList
          showAllowingRange={false}
          listingContents={<SearchContents users={users} />}
          // setIsInputFocused={setIsInputFocused}
          sort={sort}
          setUserSort={setSort}
          isSearchContent={true}
          inputValue={searchQuery}
          setInputValue={setSearchQuery}
        />
        <FilterResult
          totalJobs={jobs}
          setTotalJobs={setJobs}
          totalInterests={interests}
          setTotalInterests={setInterests}
        />
        {/* {isInputFocused && <SearchHistory />} */}
      </Wrapper>
    </PageLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

export default Search;
