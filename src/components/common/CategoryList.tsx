import styled from 'styled-components';

import { getCategories } from '@/utils';
import { Category } from './Category';
import { useState } from 'react';
import { useContextMenu } from '@/hooks';

const categories = getCategories();

export const CategoryList = () => {
  const { pointX, pointY, show } = useContextMenu();
  const [showSorting, setShowSorting] = useState(false);

  return (
    <Wrapper>
      {categories.map((category) => (
        <Category
          key={category.id}
          color={category.color}
          visibility={category.visible}
          content={category.content}
        />
      ))}
      {show && (
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 356px);
  gap: 32px;
  align-items: center;
`;

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
