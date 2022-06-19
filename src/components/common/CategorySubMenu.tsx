import { useState } from 'react';
import styled from 'styled-components';

interface CategorySubMenuProps {
  isCategoryClicked: boolean;
  pointX: number;
  pointY: number;
}

export const CategorySubMenu = ({ isCategoryClicked, pointX, pointY }: CategorySubMenuProps) => {
  const [showSorting, setShowSorting] = useState(false);

  return (
    <>
      {isCategoryClicked ? (
        <ContextMenu pointX={pointX} pointY={pointY}>
          <Menu>수정</Menu>
          <Menu>삭제</Menu>
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
            <img src="../../assets/setting_right_button.png" alt="" />
          </SortMenu>
          {showSorting && (
            <SortingMenu
              pointX={pointX}
              pointY={pointY}
              onMouseOver={() => setShowSorting(true)}
              onMouseLeave={() => setShowSorting(false)}
            >
              <li>최신순</li>
              <li>오래된순</li>
              <li>오름차순</li>
              <li>내림차순</li>
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
  /* border: 1px solid #eceff2; */
  filter: drop-shadow(5.3202px 7.9803px 28px rgba(25, 28, 50, 0.07));
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
  img {
    width: 6.55px;
    height: 11.15px;
  }
`;

const SortingMenu = styled.ul<{ pointX: number; pointY: number }>`
  position: absolute;
  left: 138px;
  top: 46px;
  width: 138px;
  height: 184px;
  background-color: #fff;
  border-radius: 10px;

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
