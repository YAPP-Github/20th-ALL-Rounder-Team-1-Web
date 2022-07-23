import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Category } from '.';

import { useScheduleCategories } from '@/api';
import { CategorySubMenu } from '@/common';
import { useContextMenu } from '@/hooks';
import { CATEGORIES } from '@/utils';

export const CategoryList = () => {
  const { pointX, pointY, show, isCategoryClicked, setIsCategoryClicked } = useContextMenu();
  const { schedule_categories } = useScheduleCategories();

  const [categories, setCategories] = useState([]);

  const fetchInitialCategories = async () => {
    const {
      data: { scheduleCategories },
    } = await schedule_categories({
      variables: {
        sort: 'DATE_CREATED_ASC',
        page: 0,
        size: 9,
      },
    });
    setCategories(scheduleCategories);
  };

  useEffect(() => {
    fetchInitialCategories();
  }, []);

  console.log(categories);

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
        />
      ))}
      {show && (
        <CategorySubMenu isCategoryClicked={isCategoryClicked} pointX={pointX} pointY={pointY} />
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
