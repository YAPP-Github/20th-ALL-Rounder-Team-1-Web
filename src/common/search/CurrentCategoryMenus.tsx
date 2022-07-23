import styled from 'styled-components';

import { CurrentCategoryMenu } from '.';

import { CategorySubMenu } from '@/common';
import { useContextMenu } from '@/hooks';
import { CERTAINCATEGORIES } from '@/utils';

export const CurrentCategoryMenus = () => {
  const {
    pointX,
    pointY,
    show,
    isCategoryClicked,
    setIsCategoryClicked,
    clickedIndex,
    setClickedIndex,
  } = useContextMenu();

  console.log(clickedIndex);

  return (
    <Wrapper>
      {CERTAINCATEGORIES.map((category, index) => (
        <CurrentCategoryMenu
          key={index}
          currentIndex={index}
          name={category.name}
          startDate={category.startDate}
          startTime={category.startTime}
          endDate={category.endDate}
          endTime={category.endTime}
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
