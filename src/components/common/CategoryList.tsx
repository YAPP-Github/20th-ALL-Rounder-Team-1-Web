import styled from 'styled-components';

import { getCategories } from '@/utils';
import { Category } from './Category';
import { useCallback, useEffect, useState } from 'react';
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
          <p>새 카테고리</p>
          <p onMouseOver={() => setShowSorting(true)} onMouseLeave={() => setShowSorting(false)}>
            정렬
          </p>
          {showSorting && (
            <ul onMouseOver={() => setShowSorting(true)} onMouseLeave={() => setShowSorting(false)}>
              <li>최신순</li>
              <li>오래된순</li>
              <li>오름차순</li>
              <li>내림차순</li>
            </ul>
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

  p {
  }
`;
