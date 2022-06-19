import styled from 'styled-components';
import { SearchBar } from './SearchBar';

export const CurrentCategoryList = () => {
  return (
    <Wrapper>
      <SearchBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 630px;
  height: 916px;
  margin-top: 38px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid black;
`;
