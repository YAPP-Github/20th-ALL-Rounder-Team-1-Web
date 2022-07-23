import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

import { useDeleteCategory } from '@/api';
import { SORT } from '@/utils';

interface CategorySubMenuProps {
  isCategoryClicked: boolean;
  pointX: number;
  pointY: number;
  isSubMenu?: boolean;
  setSort: Dispatch<SetStateAction<SORT>>;
  clickedIndex: number;
}

export const CategorySubMenu = ({
  isCategoryClicked,
  pointX,
  pointY,
  isSubMenu = false,
  setSort,
  clickedIndex,
}: CategorySubMenuProps) => {
  const [showSorting, setShowSorting] = useState(false);
  const { delete_category } = useDeleteCategory();

  const onClickDeleteCategory = () => {
    delete_category({
      variables: {
        input: {
          scheduleCategoryId: clickedIndex,
        },
      },
    });
  };

  const onClickSort = (sortType: SORT) => {
    setSort(sortType);
  };

  if (isSubMenu) {
    return (
      <>
        {isCategoryClicked && (
          <ContextMenu pointX={pointX} pointY={pointY}>
            <Menu>수정</Menu>
            <Menu>삭제</Menu>
          </ContextMenu>
        )}
      </>
    );
  }

  return (
    <>
      {isCategoryClicked ? (
        <ContextMenu pointX={pointX} pointY={pointY}>
          <Menu>수정</Menu>
          <Menu onClick={() => onClickDeleteCategory()}>삭제</Menu>
        </ContextMenu>
      ) : (
        <ContextMenu pointX={pointX} pointY={pointY}>
          <Menu>새 카테고리</Menu>
          <SortMenu
            onMouseOver={() => setShowSorting(true)}
            onMouseLeave={() => setShowSorting(false)}
            showSorting={showSorting}
          >
            <p>정렬</p>
            <i className="right-btn" />
          </SortMenu>
          {showSorting && (
            <SortingMenu
              pointX={pointX}
              pointY={pointY}
              onMouseOver={() => setShowSorting(true)}
              onMouseLeave={() => setShowSorting(false)}
            >
              <li onClick={() => onClickSort(SORT.DATE_CREATED_ASC)}>최신순</li>
              <li onClick={() => onClickSort(SORT.DATE_CREATED_DESC)}>오래된순</li>
              <li onClick={() => onClickSort(SORT.NAME_ASC)}>오름차순</li>
              <li onClick={() => onClickSort(SORT.NAME_DESC)}>내림차순</li>
            </SortingMenu>
          )}
        </ContextMenu>
      )}
    </>
  );
};

const ContextMenu = styled.div<{ pointX: number; pointY: number }>`
  width: 138px;
  height: 92px;
  position: absolute;
  border-radius: 10px;
  background-color: #fff;
  left: ${({ pointX }) => `${pointX}px`};
  top: ${({ pointY }) => `${pointY}px`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  border: 1px solid ${({ theme: { colors } }) => colors.Gray200};
  box-shadow: 5.320197582244873px 7.9802961349487305px 28px 0px rgba(25, 28, 50, 0.07);
`;

const Menu = styled.div`
  height: 26px;
  color: ${({ theme: { colors } }) => colors.Gray700};
  ${({ theme: { fonts } }) => fonts.Body1}
  padding: 10px 20px;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.Gray100};
  }

  &:hover:first-child {
    border-radius: 10px 10px 0px 0px;
  }

  &:hover:nth-child(2) {
    border-radius: 0px 0px 10px 10px;
  }
`;

const SortMenu = styled(Menu)<{ showSorting: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme: { colors }, showSorting }) => showSorting && colors.Gray100};

  .right-btn {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 29, 30)};
    background-position: -270px -251px;
  }
`;

const SortingMenu = styled.ul<{ pointX: number; pointY: number }>`
  position: absolute;
  left: 140px;
  top: 46px;
  width: 138px;
  height: 184px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 5.320197582244873px 7.9802961349487305px 28px 0px rgba(25, 28, 50, 0.07);

  li {
    height: 26px;
    color: ${({ theme: { colors } }) => colors.Gray700};
    ${({ theme: { fonts } }) => fonts.Body1}
    padding: 10px 20px;

    &:hover {
      background-color: ${({ theme: { colors } }) => colors.Gray100};
    }

    &:hover:first-child {
      border-radius: 10px 10px 0px 0px;
    }

    &:hover:last-child {
      border-radius: 0px 0px 10px 10px;
    }
  }
`;
