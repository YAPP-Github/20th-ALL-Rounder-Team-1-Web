import styled from 'styled-components';
import { Category } from './Category';

const categories = Array(10).fill(1);

export const CategoryList = () => {
  return (
    <Wrapper>
      {categories.map((_) => (
        <Category />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`;
