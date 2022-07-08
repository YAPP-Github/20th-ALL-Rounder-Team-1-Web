import { ReactNode, useState } from 'react';
import styled from 'styled-components';

import { SearchBar } from '.';

interface CurrentCategoryListProps {
  showAllowingRange?: boolean;
  sortingMenus: string[];
  listingContents: ReactNode;
}

export const CurrentCategoryList = ({
  showAllowingRange = true,
  sortingMenus,
  listingContents,
}: CurrentCategoryListProps) => {
  const [currentSort, setCurrentSort] = useState(sortingMenus[0]);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const onClickSort = () => {
    setIsSortOpen(!isSortOpen);
  };

  const onClickSortType = (name: string) => {
    setCurrentSort(name);
    setIsSortOpen(false);
  };

  return (
    <Wrapper>
      <SearchBar />
      <Options showAllowingRange={showAllowingRange}>
        <p>공개여부 · nn개의 일정</p>
        <Sorting onClick={onClickSort}>
          <h1>{currentSort}</h1>
          <i className="sort_icon" />
          {isSortOpen && (
            <SortMenu>
              {sortingMenus.map((sortingMenu) => (
                <li onClick={() => onClickSortType(sortingMenu)}>{sortingMenu}</li>
              ))}
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
  margin-top: 38px;
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
  width: 68px;
  height: 28px;
  border-radius: 10px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${({ theme: { colors } }) => colors.Gray700};
    ${({ theme: { fonts } }) => fonts.Body1}
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
