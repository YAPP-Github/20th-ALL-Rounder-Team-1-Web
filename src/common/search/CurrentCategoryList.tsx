import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import styled from 'styled-components';

import { SearchBar } from '.';

import { SORT } from '@/utils';

interface CurrentCategoryListProps {
  showAllowingRange?: boolean;
  listingContents: ReactNode;
  setIsInputFocused?: Dispatch<SetStateAction<boolean>>;
  sort: SORT;
  setSort: Dispatch<SetStateAction<SORT>>;
  scheduleCount?: number;
  openType?: string;
}

export const CurrentCategoryList = ({
  showAllowingRange = true,
  listingContents,
  setIsInputFocused,
  sort,
  setSort,
  scheduleCount,
  openType,
}: CurrentCategoryListProps) => {
  const [isSortOpen, setIsSortOpen] = useState(false);

  const onClickSort = () => {
    setIsSortOpen(!isSortOpen);
  };

  const onClickSortType = (name: SORT) => {
    setSort(name);
    setIsSortOpen(false);
  };

  const sortToWord = (sort: SORT) => {
    switch (sort) {
      case SORT.DATE_CREATED_ASC:
        return '최신순';
      case SORT.DATE_CREATED_DESC:
        return '오래된순';
      case SORT.NAME_ASC:
        return '오름차순';
      case SORT.NAME_DESC:
        return '내림차순';
    }
  };

  return (
    <Wrapper>
      <SearchBar setIsInputFocused={setIsInputFocused && setIsInputFocused} />
      <Options showAllowingRange={showAllowingRange}>
        <p>
          {openType} · {scheduleCount}개의 일정
        </p>
        <Sorting onClick={onClickSort}>
          <h1>{sortToWord(sort)}</h1>
          <i className="sort_icon" />
          {isSortOpen && (
            <SortMenu>
              <li onClick={() => onClickSortType(SORT.DATE_CREATED_ASC)}>최신순</li>
              <li onClick={() => onClickSortType(SORT.DATE_CREATED_DESC)}>오래된순</li>
              <li onClick={() => onClickSortType(SORT.NAME_ASC)}>오름차순</li>
              <li onClick={() => onClickSortType(SORT.NAME_DESC)}>내림차순</li>
            </SortMenu>
          )}
        </Sorting>
      </Options>
      {listingContents}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 582px;
  height: 844px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 24px;
`;

const Options = styled.div<{ showAllowingRange: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 28px;
  position: relative;

  p {
    visibility: ${({ showAllowingRange }) => !showAllowingRange && 'hidden'};
    color: ${({ theme: { colors } }) => colors.WeekandBlue};
    ${({ theme: { fonts } }) => fonts.Body2}
  }
`;

const Sorting = styled.div`
  appearance: none;
  border: 1px solid ${({ theme: { colors } }) => colors.Gray200};
  cursor: pointer;
  width: 86px;
  height: 28px;
  border-radius: 10px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${({ theme: { colors } }) => colors.Gray700};
    ${({ theme: { fonts } }) => fonts.Body1}
    width: 56px;
  }

  i.sort_icon {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 24, 24)}
    background-position: -142px -351px;
  }
`;

const SortMenu = styled.ul`
  position: absolute;
  top: 61px;
  right: 0px;
  background-color: #fff;
  width: 118px;
  height: 184px;
  border-radius: 10px;
  border: 1px solid ${({ theme: { colors } }) => colors.Gray200};

  li {
    height: 26px;
    padding: 10px 20px;
    color: ${({ theme: { colors } }) => colors.Gray700};
    ${({ theme: { fonts } }) => fonts.Body1}
    text-align:start;
  }

  li:hover {
    background-color: ${({ theme: { colors } }) => colors.Gray100};
  }
`;
