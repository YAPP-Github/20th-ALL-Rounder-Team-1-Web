import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Category } from '.';

import { useScheduleCategories } from '@/api';
import { CategorySubMenu } from '@/common';
import { useContextMenu } from '@/hooks';
import { CATEGORIES, SORT } from '@/utils';

export const CategoryList = () => {
  const { pointX, pointY, show, isCategoryClicked, setIsCategoryClicked } = useContextMenu();
  const { schedule_categories } = useScheduleCategories();

  const [categories, setCategories] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [sort, setSort] = useState(SORT.DATE_CREATED_ASC);

  const showCategories = async () => {
    const {
      data: { scheduleCategories },
    } = await schedule_categories({
      variables: {
        sort,
        page: 0,
        size: 9,
      },
    });
    setCategories(scheduleCategories);
  };

  useEffect(() => {
    showCategories();
  }, [sort]);

  return (
    <Wrapper>
      {CATEGORIES.map((category) => (
        <Category
          key={category.id}
          id={category.id}
          color={category.color}
          visibility={category.visible}
          content={category.content}
          setIsCategoryClicked={setIsCategoryClicked}
          setClickedIndex={setClickedIndex}
        />
      ))}
      {show && (
        <CategorySubMenu
          isCategoryClicked={isCategoryClicked}
          pointX={pointX}
          pointY={pointY}
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
