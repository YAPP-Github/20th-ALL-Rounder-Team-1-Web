import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { CurrentCategoryMenu } from '.';

import { useSearchSchedules } from '@/api';
import { CategorySubMenu } from '@/common';
import { useContextMenu } from '@/hooks';
import { CERTAINCATEGORIES, SORT } from '@/utils';

interface CurrentCategoryMenusProps {
  sort: SORT;
  categoryId: string;
}

interface ICategory {
  id: string;
  name: string;
  color: string;
  openType: string;
}
interface ISchedules {
  id: string;
  name: string;
  category: ICategory;
  dateTimeStart: string;
  dateTimeEnd: string;
  repeatType: string;
  repeatSelectedValue?: string;
  memo?: string;
  dateSkip?: string[];
}

export const CurrentCategoryMenus = ({ sort, categoryId }: CurrentCategoryMenusProps) => {
  const {
    pointX,
    pointY,
    show,
    isCategoryClicked,
    setIsCategoryClicked,
    clickedIndex,
    setClickedIndex,
  } = useContextMenu();

  const [schedules, setSchedules] = useState<ISchedules[]>([]);
  const { search_schedules } = useSearchSchedules();

  const showCategories = async () => {
    const {
      data: {
        searchSchedules: { schedules },
      },
    } = await search_schedules({
      variables: {
        sort,
        page: 0,
        size: 9,
        categoryId,
      },
    });
    console.log(schedules);

    setSchedules(schedules);
  };

  useEffect(() => {
    showCategories();
  }, [sort]);

  return (
    <Wrapper>
      {schedules.map((schedule, index) => (
        <CurrentCategoryMenu
          key={index}
          currentIndex={index}
          color={schedule.category.color}
          name={schedule.name}
          startTime={schedule.dateTimeStart}
          endTime={schedule.dateTimeEnd}
          repeatSelectedValue={schedule?.repeatSelectedValue}
          repeatType={schedule.repeatType}
          setIsCategoryClicked={setIsCategoryClicked}
          clickedIndex={clickedIndex}
          setClickedIndex={setClickedIndex}
        />
      ))}
      {show && (
        <CategorySubMenu
          isCategoryClicked={isCategoryClicked}
          pointX={pointX}
          pointY={pointY}
          isSubMenu={true}
          clickedIndex={clickedIndex}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme: { colors } }) => colors.Gray300};
    border-radius: 54px;
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
`;
