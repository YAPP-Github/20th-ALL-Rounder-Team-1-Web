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
      {isCategoryClicked && (
        <ContextMenu pointX={pointX} pointY={pointY}>
          <Menu>수정</Menu>
          <Menu>삭제</Menu>
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
