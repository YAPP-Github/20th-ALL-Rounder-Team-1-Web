import styled from 'styled-components';

import { CurrentCategoryMenu } from './CurrentCategoryMenu';

import { CategorySubMenu } from '@/common';
import { useContextMenu } from '@/hooks';
import { CERTAINCATEGORIES } from '@/utils';

export const CurrentCategoryMenus = () => {
  const { pointX, pointY, show, isCategoryClicked, setIsCategoryClicked } = useContextMenu();

  return (
    <Wrapper>
      {CERTAINCATEGORIES.map((category) => (
        <CurrentCategoryMenu
          name={category.name}
          startDate={category.startDate}
          startTime={category.startTime}
          endDate={category.endDate}
          endTime={category.endTime}
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
  overflow-y: hidden;
`;
