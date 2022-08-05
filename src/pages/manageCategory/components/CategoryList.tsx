import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Category } from '.';

import { useScheduleCategories } from '@/api';
import { CategorySubMenu } from '@/common';
import { PopUpContext } from '@/contexts';
import { useContextMenu } from '@/hooks';
import { SORT } from '@/models';
import { ICategory } from '@/types';

export const CategoryList = () => {
  const { pointX, pointY, show, isCategoryClicked, setIsCategoryClicked } = useContextMenu();
  const { isPopped } = useContext(PopUpContext);
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [sort, setSort] = useState(SORT.DATE_CREATED_ASC);
  const { data, refetch } = useScheduleCategories(sort, 0, 9);

  useEffect(() => {
    refetch();
  }, [isPopped]);

  return (
    <Wrapper>
      {data?.scheduleCategories?.scheduleCategories.map((category: ICategory) => (
        <Category
          key={category.id}
          id={Number(category.id)}
          color={category.color}
          openType={category.openType}
          name={category.name}
          setIsCategoryClicked={setIsCategoryClicked}
          setClickedIndex={setClickedIndex}
        />
      ))}
      {show && (
        <CategorySubMenu
          isCategoryClicked={isCategoryClicked}
          pointX={pointX}
          pointY={pointY}
          refetch={refetch}
          setSort={setSort}
          clickedIndex={clickedIndex}
        />
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
