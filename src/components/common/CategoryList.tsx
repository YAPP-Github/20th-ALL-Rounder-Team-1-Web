import styled from 'styled-components';

import { getCategories } from '@/utils';
import { Category } from './Category';

const categories = getCategories();

export const CategoryList = () => {
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 356px);
  gap: 32px;
  align-items: center;
`;
