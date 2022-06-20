import styled from 'styled-components';

import { Category, CategorySubMenu } from '@/components';
import { useContextMenu } from '@/hooks';
import { CATEGORIES } from '@/utils';

export const CategoryList = () => {
  const { pointX, pointY, show, isCategoryClicked, setIsCategoryClicked } = useContextMenu();

  return (
    <Wrapper>
      {CATEGORIES.map((category) => (
        <Category
          key={category.id}
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
